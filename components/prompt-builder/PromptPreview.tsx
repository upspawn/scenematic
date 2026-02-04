"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePromptStore } from "@/lib/store";
import { assemblePrompt, getPromptParts } from "@/lib/prompt-assembler";
import {
  Copy,
  Check,
  FileText,
  Maximize2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function PromptPreview() {
  const state = usePromptStore();
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const prompt = useMemo(() => assemblePrompt(state), [state]);
  const parts = useMemo(() => getPromptParts(state), [state]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const configuredCount = parts.filter((p) => p.hasValue).length;
  const wordCount = prompt.split(/\s+/).filter(Boolean).length;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Constructed Prompt
        </CardTitle>
        <div className="flex items-center gap-1">
          <span className="text-xs text-neutral-500 mr-2">
            {configuredCount}/5
          </span>
          <Button variant="ghost" size="sm" className="h-7 px-2" onClick={handleCopy}>
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 px-2">
                <Maximize2 className="h-3 w-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[85vh]">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span>Full Prompt</span>
                  <div className="flex items-center gap-4 text-sm font-normal text-neutral-400">
                    <span>{wordCount} words</span>
                    <span>{prompt.length} chars</span>
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
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                {/* Section badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {parts.map((part) => (
                    <div
                      key={part.section}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        part.hasValue
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-neutral-800 text-neutral-500 border border-neutral-700"
                      }`}
                    >
                      {part.section}
                    </div>
                  ))}
                </div>
                {/* Full prompt */}
                <div
                  className="p-4 rounded-lg bg-black/60 border border-neutral-800 text-sm text-neutral-200 leading-relaxed font-mono whitespace-pre-wrap max-h-[60vh] overflow-y-auto"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 1.75rem,
                        rgba(255,255,255,0.015) 1.75rem,
                        rgba(255,255,255,0.015) 1.8rem
                      )
                    `,
                  }}
                >
                  {prompt || (
                    <span className="text-neutral-500 italic">
                      Configure sections to build your prompt...
                    </span>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {/* Section breakdown - compact */}
        <div className="flex flex-wrap gap-1.5">
          {parts.map((part) => (
            <div
              key={part.section}
              className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors ${
                part.hasValue
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-neutral-800/50 text-neutral-600"
              }`}
            >
              {part.section.split(" ")[0]}
            </div>
          ))}
        </div>

        {/* Prompt text - expandable */}
        <div
          className={`relative rounded-lg bg-black/40 border border-neutral-800 transition-all duration-200 ${
            isExpanded ? "max-h-[400px]" : "max-h-[120px]"
          }`}
        >
          <div
            className="p-3 text-xs text-neutral-300 leading-relaxed font-mono overflow-y-auto h-full"
            style={{
              maxHeight: isExpanded ? "400px" : "120px",
            }}
          >
            {prompt || (
              <span className="text-neutral-500 italic">
                Configure sections above to build your cinematic prompt...
              </span>
            )}
          </div>

          {/* Fade gradient when collapsed */}
          {!isExpanded && prompt.length > 200 && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none rounded-b-lg" />
          )}
        </div>

        {/* Footer with expand toggle and stats */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-3 w-3" />
                Collapse
              </>
            ) : (
              <>
                <ChevronDown className="h-3 w-3" />
                Expand
              </>
            )}
          </button>
          <div className="text-[10px] text-neutral-600">
            {wordCount} words · {prompt.length} chars
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
