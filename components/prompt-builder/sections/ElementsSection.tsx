"use client";

import { useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePromptStore } from "@/lib/store";
import type { ElementType } from "@/lib/types";
import { Upload, X, User, Shirt, Package, Image } from "lucide-react";
import { cn } from "@/lib/utils";

const elementConfig: {
  type: ElementType;
  label: string;
  description: string;
  icon: typeof User;
}[] = [
  {
    type: "character",
    label: "Character",
    description: "Face & physical features",
    icon: User,
  },
  {
    type: "outfit",
    label: "Outfit",
    description: "Clothing & accessories",
    icon: Shirt,
  },
  {
    type: "object",
    label: "Object",
    description: "Props to maintain",
    icon: Package,
  },
  {
    type: "scene",
    label: "Scene",
    description: "Environment setting",
    icon: Image,
  },
];

function ElementUploader({
  type,
  label,
  description,
  icon: Icon,
}: {
  type: ElementType;
  label: string;
  description: string;
  icon: typeof User;
}) {
  const { elements, setElement } = usePromptStore();
  const element = elements[type];

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Create a local preview URL
      const url = URL.createObjectURL(file);

      // Upload to server to get base64 data URI
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          setElement(type, {
            url: data.url,
            name: file.name,
            file,
          });
        } else {
          console.error("Upload failed:", data.error);
          // Still use local preview
          setElement(type, {
            url,
            name: file.name,
            file,
          });
        }
      } catch {
        // Use local preview on error
        setElement(type, {
          url,
          name: file.name,
          file,
        });
      }
    },
    [type, setElement]
  );

  const handleRemove = useCallback(() => {
    setElement(type, null);
  }, [type, setElement]);

  return (
    <div
      className={cn(
        "relative group rounded-lg border-2 border-dashed transition-all duration-200",
        element
          ? "border-amber-500/50 bg-amber-500/5"
          : "border-neutral-700 hover:border-neutral-600 bg-neutral-900/30"
      )}
    >
      {element ? (
        <div className="relative aspect-square">
          <img
            src={element.url}
            alt={element.name}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-md" />
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-xs font-medium text-white truncate">{label}</p>
            <p className="text-xs text-neutral-400 truncate">{element.name}</p>
          </div>
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleRemove}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center aspect-square cursor-pointer p-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="p-2 rounded-lg bg-neutral-800 text-neutral-400 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-colors">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-300">{label}</p>
              <p className="text-xs text-neutral-500">{description}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
              <Upload className="h-3 w-3" />
              <span>Upload</span>
            </div>
          </div>
        </label>
      )}
    </div>
  );
}

export function ElementsSection() {
  const { clearElements, elements } = usePromptStore();
  const hasElements = Object.values(elements).some((el) => el !== null);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Image className="h-4 w-4" />
          05 — Elements (Reference Images)
        </CardTitle>
        {hasElements && (
          <Button variant="ghost" size="sm" onClick={clearElements}>
            Clear All
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-xs text-neutral-500 mb-4">
          Upload reference images to maintain consistency across generated images.
          The AI will keep characters, outfits, objects, and scenes identical.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {elementConfig.map((config) => (
            <ElementUploader key={config.type} {...config} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
