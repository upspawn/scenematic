"use client";

import { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePromptStore } from "@/lib/store";
import { assemblePrompt } from "@/lib/prompt-assembler";
import {
  Sparkles,
  Clapperboard,
  Download,
  Loader2,
  Settings,
  Zap,
} from "lucide-react";
import type { GeneratedImage } from "@/lib/types";

export function GeneratePanel() {
  const {
    model,
    setModel,
    aspectRatio,
    elements,
    addImage,
    addImages,
    isGenerating,
    setGenerating,
    setProgress,
  } = usePromptStore();

  const state = usePromptStore();
  const prompt = useMemo(() => assemblePrompt(state), [state]);
  const [error, setError] = useState<string | null>(null);

  // Get element URLs for consistency
  const imageUrls = useMemo(() => {
    return Object.values(elements)
      .filter((el) => el !== null)
      .map((el) => el!.url);
  }, [elements]);

  const handleGenerate = useCallback(async () => {
    if (!prompt || isGenerating) return;

    setError(null);
    setGenerating(true);
    setProgress(0);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          aspectRatio,
          model,
          imageUrls: imageUrls.length > 0 ? imageUrls : undefined,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Generation failed");
      }

      const newImage: GeneratedImage = {
        id: `img-${Date.now()}`,
        url: data.imageUrl,
        prompt,
        settings: {
          aspectRatio,
          model,
          seed: data.seed,
        },
        timestamp: Date.now(),
      };

      addImage(newImage);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed");
    } finally {
      setGenerating(false);
      setProgress(0);
    }
  }, [
    prompt,
    aspectRatio,
    model,
    imageUrls,
    isGenerating,
    addImage,
    setGenerating,
    setProgress,
  ]);

  const handleGenerateScene = useCallback(async () => {
    if (!prompt || isGenerating) return;

    setError(null);
    setGenerating(true);
    setProgress(0);

    try {
      const response = await fetch("/api/scene", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          basePrompt: prompt,
          aspectRatio,
          model,
          baseSeed: Math.floor(Math.random() * 1000000),
          imageUrls: imageUrls.length > 0 ? imageUrls : undefined,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Scene generation failed");
      }

      const newImages: GeneratedImage[] = data.images.map(
        (
          img: { url: string; angle: string; seed: number; prompt?: string },
          index: number
        ) => ({
          id: `scene-${Date.now()}-${index}`,
          url: img.url,
          prompt: img.prompt || prompt,
          settings: {
            aspectRatio,
            model,
            seed: img.seed,
          },
          timestamp: Date.now(),
          isScene: true,
          sceneIndex: index + 1,
        })
      );

      addImages(newImages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Scene generation failed");
    } finally {
      setGenerating(false);
      setProgress(0);
    }
  }, [
    prompt,
    aspectRatio,
    model,
    imageUrls,
    isGenerating,
    addImages,
    setGenerating,
    setProgress,
  ]);

  const hasPrompt = prompt.length > 50; // Minimal prompt check

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-4 w-4" />
          Generate
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Model selector */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider flex items-center gap-2">
            <Settings className="h-3 w-3" />
            AI Model
          </label>
          <Select
            value={model}
            onValueChange={(v) => setModel(v as "nano-banana-pro" | "flux-2-pro")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nano-banana-pro">
                <div className="flex items-center gap-2">
                  <span>Nano Banana Pro</span>
                  <span className="text-xs text-amber-500">Recommended</span>
                </div>
              </SelectItem>
              <SelectItem value="flux-2-pro">Flux 2 Pro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reference images indicator */}
        {imageUrls.length > 0 && (
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm flex items-start gap-2">
            <Sparkles className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium">Edit mode active</span>
              <p className="text-xs text-amber-400/80 mt-0.5">
                {imageUrls.length} reference image{imageUrls.length > 1 ? "s" : ""} will be used for visual consistency
              </p>
            </div>
          </div>
        )}

        {/* Generate buttons */}
        <div className="space-y-2">
          <Button
            className="w-full h-12 text-base"
            onClick={handleGenerate}
            disabled={!hasPrompt || isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Generate Image
              </>
            )}
          </Button>

          <Button
            variant="secondary"
            className="w-full h-12 text-base"
            onClick={handleGenerateScene}
            disabled={!hasPrompt || isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Generating Scene...
              </>
            ) : (
              <>
                <Clapperboard className="h-5 w-5" />
                Generate Scene (4 Angles)
              </>
            )}
          </Button>
        </div>

        {/* Error display */}
        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Info */}
        {!hasPrompt && (
          <p className="text-xs text-neutral-500 text-center">
            Configure subject, lighting, and camera to enable generation
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function ExportPanel() {
  const { exportConfig, importConfig, resetAll } = usePromptStore();
  const [copied, setCopied] = useState(false);

  const handleExport = async () => {
    const json = exportConfig();
    await navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const success = importConfig(text);
      if (!success) {
        alert("Invalid configuration format");
      }
    } catch {
      alert("Failed to read from clipboard");
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xs">
          <Download className="h-3 w-3" />
          Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" onClick={handleExport}>
            {copied ? "Copied!" : "Export JSON"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleImport}>
            Import JSON
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-neutral-500 hover:text-red-400"
          onClick={resetAll}
        >
          Reset All
        </Button>
      </CardContent>
    </Card>
  );
}
