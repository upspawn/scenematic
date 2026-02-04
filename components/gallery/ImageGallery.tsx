"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePromptStore } from "@/lib/store";
import type { GeneratedImage } from "@/lib/types";
import {
  Images,
  Trash2,
  Download,
  Copy,
  Check,
  X,
  Maximize2,
  Clock,
} from "lucide-react";

function ImageCard({
  image,
  onSelect,
}: {
  image: GeneratedImage;
  onSelect: (image: GeneratedImage) => void;
}) {
  const { removeImage } = usePromptStore();
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(image.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const response = await fetch(image.url);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `scenematic-${image.id}.png`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeImage(image.id);
  };

  return (
    <div
      className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer border border-neutral-800 hover:border-amber-500/50 transition-all duration-200"
      onClick={() => onSelect(image)}
    >
      <img
        src={image.url}
        alt={`Generated ${image.id}`}
        className="w-full h-full object-cover"
      />

      {/* Scene badge */}
      {image.isScene && (
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-amber-500 text-black text-xs font-medium">
          Shot {image.sceneIndex}
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          {/* Time and model */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
            <Clock className="h-3 w-3" />
            {new Date(image.timestamp).toLocaleTimeString()}
            <span className="text-neutral-600">•</span>
            <span className="text-amber-500">{image.settings.model}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="secondary"
              size="sm"
              className="h-7 px-2"
              onClick={handleCopyPrompt}
            >
              {copied ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="h-7 px-2"
              onClick={handleDownload}
            >
              <Download className="h-3 w-3" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="h-7 px-2"
              onClick={() => onSelect(image)}
            >
              <Maximize2 className="h-3 w-3" />
            </Button>
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-red-400 hover:text-red-300 hover:bg-red-500/10"
              onClick={handleRemove}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageModal({
  image,
  onClose,
}: {
  image: GeneratedImage | null;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  if (!image) return null;

  const handleCopyPrompt = async () => {
    await navigator.clipboard.writeText(image.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    const response = await fetch(image.url);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `scenematic-${image.id}.png`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Generated Image
            {image.isScene && (
              <span className="px-2 py-0.5 rounded bg-amber-500 text-black text-xs font-medium">
                Shot {image.sceneIndex}
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
            <img
              src={image.url}
              alt={`Generated ${image.id}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
                Prompt
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed max-h-48 overflow-y-auto">
                {image.prompt}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-neutral-500">Model:</span>
                <p className="text-amber-500">{image.settings.model}</p>
              </div>
              <div>
                <span className="text-neutral-500">Aspect Ratio:</span>
                <p className="text-neutral-300">{image.settings.aspectRatio}</p>
              </div>
              {image.settings.seed && (
                <div>
                  <span className="text-neutral-500">Seed:</span>
                  <p className="text-neutral-300 font-mono">
                    {image.settings.seed}
                  </p>
                </div>
              )}
              <div>
                <span className="text-neutral-500">Generated:</span>
                <p className="text-neutral-300">
                  {new Date(image.timestamp).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={handleCopyPrompt}>
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Prompt
                  </>
                )}
              </Button>
              <Button variant="secondary" onClick={handleDownload}>
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ImageGallery() {
  const { images, clearImages } = usePromptStore();
  const [selectedImage, setSelectedImage] = useState<GeneratedImage | null>(
    null
  );

  if (images.length === 0) {
    return (
      <Card className="h-full flex items-center justify-center">
        <div className="text-center p-8">
          <div className="p-4 rounded-full bg-neutral-800 inline-block mb-4">
            <Images className="h-8 w-8 text-neutral-500" />
          </div>
          <h3 className="text-lg font-medium text-neutral-300 mb-2">
            No images yet
          </h3>
          <p className="text-sm text-neutral-500 max-w-xs">
            Configure your prompt settings and click Generate to create your
            first cinematic image.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <>
      <Card className="h-full flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="flex items-center gap-2">
            <Images className="h-4 w-4" />
            Gallery
            <span className="text-xs text-neutral-500 font-normal">
              ({images.length})
            </span>
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-neutral-500 hover:text-red-400"
            onClick={clearImages}
          >
            <Trash2 className="h-3 w-3 mr-1" />
            Clear All
          </Button>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                onSelect={setSelectedImage}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
