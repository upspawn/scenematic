"use client";

import { SubjectSection } from "./sections/SubjectSection";
import { LightingSection } from "./sections/LightingSection";
import { CameraSection } from "./sections/CameraSection";
import { StyleSection } from "./sections/StyleSection";
import { ElementsSection } from "./sections/ElementsSection";
import { PromptPreview } from "./PromptPreview";
import { GeneratePanel, ExportPanel } from "./GeneratePanel";
import { ImageGallery } from "../gallery/ImageGallery";

export function PromptBuilder() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-xl">
        <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg blur opacity-40" />
                <div className="relative px-3 py-1.5 bg-neutral-900 rounded-lg border border-amber-500/30">
                  <span className="text-xl font-bold tracking-tight">
                    <span className="text-amber-500">S</span>
                    <span className="text-white">cenematic</span>
                    <span className="text-amber-500">.ai</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="h-6 w-px bg-neutral-800" />
            <span className="text-sm text-neutral-500">
              Cinematic AI Prompt Builder
            </span>
          </div>

          {/* Right side could have user menu, etc. */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-600 hidden sm:block">
              Powered by fal.ai
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column: Prompt builder sections */}
          <div className="lg:col-span-4 space-y-4">
            <SubjectSection />
            <LightingSection />
            <CameraSection />
            <StyleSection />
            <ElementsSection />
          </div>

          {/* Middle column: Preview and Generate */}
          <div className="lg:col-span-3 space-y-4">
            <div className="lg:sticky lg:top-24 space-y-4">
              <PromptPreview />
              <GeneratePanel />
              <ExportPanel />
            </div>
          </div>

          {/* Right column: Gallery */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
              <ImageGallery />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-12">
        <div className="max-w-[1800px] mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>
              Scenematic.ai — Professional-grade cinematic prompt builder
            </p>
            <p className="text-neutral-600">
              Built with Next.js, Tailwind CSS, and fal.ai
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
