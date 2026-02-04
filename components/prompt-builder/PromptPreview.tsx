"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePromptStore } from "@/lib/store";
import { assemblePrompt, getPromptParts } from "@/lib/prompt-assembler";
import { Copy, Check, FileText } from "lucide-react";
import { useState } from "react";

export function PromptPreview() {
  const state = usePromptStore();
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => assemblePrompt(state), [state]);
  const parts = useMemo(() => getPromptParts(state), [state]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const configuredCount = parts.filter((p) => p.hasValue).length;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Constructed Prompt
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500">
            {configuredCount}/5 sections
          </span>
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 pt-0">
        {/* Section breakdown */}
        <div className="flex flex-wrap gap-2">
          {parts.map((part) => (
            <div
              key={part.section}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                part.hasValue
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "bg-neutral-800 text-neutral-500 border border-neutral-700"
              }`}
            >
              {part.section}
            </div>
          ))}
        </div>

        {/* Prompt text */}
        <div className="flex-1 relative">
          <div
            className="absolute inset-0 overflow-y-auto p-4 rounded-lg bg-black/40 border border-neutral-800 text-sm text-neutral-300 leading-relaxed font-mono"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 1.75rem,
                  rgba(255,255,255,0.02) 1.75rem,
                  rgba(255,255,255,0.02) 1.8rem
                )
              `,
            }}
          >
            {prompt || (
              <span className="text-neutral-500 italic">
                Configure sections above to build your cinematic prompt...
              </span>
            )}
          </div>
        </div>

        {/* Character count */}
        <div className="text-xs text-neutral-500 text-right">
          {prompt.length} characters
        </div>
      </CardContent>
    </Card>
  );
}
