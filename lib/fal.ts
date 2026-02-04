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
  seed: number;
  prompt: string;
}

export interface FalGenerateInput {
  prompt: string;
  image_size?:
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9"
    | { width: number; height: number };
  seed?: number;
  num_images?: number;
  image_urls?: string[];
}

// Map aspect ratio to fal.ai image_size
export function aspectRatioToImageSize(
  aspectRatio: string
): FalGenerateInput["image_size"] {
  const mapping: Record<string, FalGenerateInput["image_size"]> = {
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
export function getModelId(model: string): string {
  const models: Record<string, string> = {
    "nano-banana-pro": "fal-ai/nano-banana-pro",
    "flux-2-pro": "fal-ai/flux-2-pro",
  };
  return models[model] || "fal-ai/nano-banana-pro";
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
  const modelId = getModelId(options.model || "nano-banana-pro");
  const imageSize = aspectRatioToImageSize(options.aspectRatio || "16:9");

  const input: FalGenerateInput = {
    prompt,
    image_size: imageSize,
    num_images: 1,
  };

  if (options.seed !== undefined) {
    input.seed = options.seed;
  }

  if (options.imageUrls && options.imageUrls.length > 0) {
    input.image_urls = options.imageUrls;
  }

  const result = await fal.subscribe(modelId, {
    input,
    logs: true,
  });

  return result.data as FalImageResult;
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
export async function uploadImage(file: File): Promise<string> {
  // Convert file to base64 data URI for fal.ai
  const buffer = await file.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const mimeType = file.type || "image/png";
  const dataUri = `data:${mimeType};base64,${base64}`;

  // For fal.ai, we can use data URIs directly as image_urls
  return dataUri;
}

export { fal };
