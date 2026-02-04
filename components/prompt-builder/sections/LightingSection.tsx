"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePromptStore } from "@/lib/store";
import { getOptions, LIGHTING_MAP } from "@/data/vocabulary";
import { Sun } from "lucide-react";

const lightingOptions = getOptions(LIGHTING_MAP);

export function LightingSection() {
  const { lighting, setLighting } = usePromptStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          02 — Lighting & Mood
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Lighting Source
          </label>
          <Select
            value={lighting.source}
            onValueChange={(value) => setLighting({ source: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select lighting" />
            </SelectTrigger>
            <SelectContent>
              {lightingOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {lighting.source && LIGHTING_MAP[lighting.source] && (
            <p className="text-xs text-neutral-500 mt-1 italic line-clamp-2">
              {LIGHTING_MAP[lighting.source]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Atmosphere / Mood
          </label>
          <Textarea
            placeholder="tense, dramatic, mysterious..."
            value={lighting.mood}
            onChange={(e) => setLighting({ mood: e.target.value })}
            className="min-h-[60px]"
          />
        </div>
      </CardContent>
    </Card>
  );
}
