import { NextRequest, NextResponse } from "next/server";
import { generateImage } from "@/lib/fal";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, aspectRatio, model, seed, imageUrls } = body;

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    const result = await generateImage(prompt, {
      aspectRatio: aspectRatio || "16:9",
      model: model || "nano-banana-pro",
      seed,
      imageUrls,
    });

    if (!result.images || result.images.length === 0) {
      return NextResponse.json(
        { success: false, error: "No image generated" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      imageUrl: result.images[0].url,
      seed: result.seed,
      prompt: result.prompt,
    });
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Generation failed",
      },
      { status: 500 }
    );
  }
}
