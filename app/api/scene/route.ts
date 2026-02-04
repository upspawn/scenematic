import { NextRequest, NextResponse } from "next/server";
import { generateScene } from "@/lib/fal";
import { SCENE_ANGLES } from "@/data/vocabulary";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { basePrompt, aspectRatio, model, baseSeed, imageUrls } = body;

    if (!basePrompt) {
      return NextResponse.json(
        { success: false, error: "Base prompt is required" },
        { status: 400 }
      );
    }

    // Select 4 random angles for the scene
    const shuffled = [...SCENE_ANGLES].sort(() => Math.random() - 0.5);
    const selectedAngles = shuffled.slice(0, 4).map((a) => a.key);

    const results = await generateScene(basePrompt, selectedAngles, {
      aspectRatio: aspectRatio || "16:9",
      model: model || "nano-banana-pro",
      baseSeed: baseSeed || Math.floor(Math.random() * 1000000),
      imageUrls,
    });

    return NextResponse.json({
      success: true,
      images: results,
    });
  } catch (error) {
    console.error("Scene generation error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Scene generation failed",
      },
      { status: 500 }
    );
  }
}
