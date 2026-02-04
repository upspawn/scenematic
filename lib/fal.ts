import { fal } from "@fal-ai/client";

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
});

export interface FalImageResult {
  images: Array<{
    url: string;
    width: number;
    height: number;
    content_type: string;
  }>;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  seed: number;
  prompt: string;
}

// Map aspect ratio to fal.ai image_size for Flux models
export function aspectRatioToImageSize(
  aspectRatio: string
): string | { width: number; height: number } {
  const mapping: Record<string, string | { width: number; height: number }> = {
    "1:1": "square_hd",
    "4:5": "portrait_4_3",
    "3:2": "landscape_4_3",
    "16:9": "landscape_16_9",
    "9:16": "portrait_16_9",
    "2:3": "portrait_4_3",
    "21:9": { width: 1680, height: 720 },
    "2.35:1": { width: 1680, height: 714 },
    "2.39:1": { width: 1680, height: 703 },
    "4:3": "landscape_4_3",
    "1.85:1": { width: 1480, height: 800 },
    "1.43:1": { width: 1144, height: 800 },
  };

  return mapping[aspectRatio] || "landscape_16_9";
}

// Get model ID from friendly name
// When reference images are provided, we need to use the /edit endpoint
export function getModelId(model: string, hasReferenceImages: boolean): string {
  const baseModels: Record<string, string> = {
    "nano-banana-pro": "fal-ai/nano-banana-pro",
    "flux-2-pro": "fal-ai/flux-2-pro",
  };

  const editModels: Record<string, string> = {
    "nano-banana-pro": "fal-ai/nano-banana-pro/edit",
    "flux-2-pro": "fal-ai/flux-2-pro/edit",
  };

  // Use edit endpoint when reference images are provided
  if (hasReferenceImages) {
    return editModels[model] || "fal-ai/nano-banana-pro/edit";
  }

  return baseModels[model] || "fal-ai/nano-banana-pro";
}

// Check if model is nano-banana variant
function isNanoBananaModel(modelId: string): boolean {
  return modelId.includes("nano-banana");
}

// Generate a single image
export async function generateImage(
  prompt: string,
  options: {
    aspectRatio?: string;
    model?: string;
    seed?: number;
    imageUrls?: string[];
  } = {}
): Promise<FalImageResult> {
  const hasReferenceImages = !!(options.imageUrls && options.imageUrls.length > 0);
  const modelId = getModelId(options.model || "nano-banana-pro", hasReferenceImages);
  const aspectRatio = options.aspectRatio || "16:9";

  // Build input based on model type
  const input: Record<string, unknown> = {
    prompt,
    num_images: 1,
  };

  // Set aspect ratio / image size based on model
  if (isNanoBananaModel(modelId)) {
    // Nano Banana models use aspect_ratio as string
    input.aspect_ratio = aspectRatio;
  } else {
    // Flux models use image_size
    input.image_size = aspectRatioToImageSize(aspectRatio);
  }

  if (options.seed !== undefined) {
    input.seed = options.seed;
  }

  // Reference images - ONLY works with /edit endpoints
  // The base text-to-image endpoints do NOT support reference images
  if (hasReferenceImages) {
    input.image_urls = options.imageUrls;
    console.log(`[fal] Using EDIT endpoint with ${options.imageUrls!.length} reference image(s)`);
  }

  console.log(`[fal] Calling ${modelId} with:`, {
    prompt: prompt.substring(0, 100) + "...",
    aspect_ratio: isNanoBananaModel(modelId) ? aspectRatio : undefined,
    image_size: !isNanoBananaModel(modelId) ? aspectRatioToImageSize(aspectRatio) : undefined,
    image_urls: hasReferenceImages ? `[${options.imageUrls!.length} images]` : undefined,
    seed: options.seed,
  });

  const result = await fal.subscribe(modelId, {
    input,
    logs: true,
  });

  const data = result.data as FalImageResult;

  // Handle different response formats
  let images = data.images;
  if (!images || images.length === 0) {
    if (data.image) {
      images = [data.image as FalImageResult["images"][0]];
    }
  }

  return {
    ...data,
    images: images || [],
  };
}

// Generate multiple images for a scene
export async function generateScene(
  basePrompt: string,
  angles: string[],
  options: {
    aspectRatio?: string;
    model?: string;
    baseSeed?: number;
    imageUrls?: string[];
  } = {}
): Promise<
  Array<{
    url: string;
    angle: string;
    seed: number;
    prompt: string;
  }>
> {
  const baseSeed = options.baseSeed || Math.floor(Math.random() * 1000000);

  const results = await Promise.all(
    angles.map(async (angle, index) => {
      // Add angle variation to prompt
      const anglePrompt = `${basePrompt} Camera angle: ${angle.replace(/-/g, " ")}.`;
      const seed = baseSeed + index;

      const result = await generateImage(anglePrompt, {
        ...options,
        seed,
      });

      return {
        url: result.images[0]?.url || "",
        angle,
        seed: result.seed,
        prompt: anglePrompt,
      };
    })
  );

  return results;
}

// Upload an image and get a URL
// For fal.ai, we need to either:
// 1. Use a publicly accessible URL
// 2. Use fal.ai's storage
// 3. Use base64 data URIs (supported by some models)
export async function uploadImage(file: File): Promise<string> {
  // Convert file to base64 data URI for fal.ai
  const buffer = await file.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const mimeType = file.type || "image/png";
  const dataUri = `data:${mimeType};base64,${base64}`;

  // For fal.ai edit endpoints, data URIs should work
  return dataUri;
}

export { fal };
