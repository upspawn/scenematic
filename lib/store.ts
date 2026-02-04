import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  PromptState,
  SubjectConfig,
  LightingConfig,
  CameraConfig,
  StyleConfig,
  ElementsConfig,
  ElementType,
  ElementImage,
  GeneratedImage,
} from "./types";

const defaultSubject: SubjectConfig = {
  description: "",
  action: "",
  environment: "",
  shotType: "medium",
};

const defaultLighting: LightingConfig = {
  source: "natural",
  mood: "",
};

const defaultCamera: CameraConfig = {
  body: "sony-venice",
  lens: "cinema-prime",
  focalLength: "50mm",
  filmStock: "cinestill-800t",
};

const defaultStyle: StyleConfig = {
  photographer: "",
  movieLook: "",
  effect: "",
};

const defaultElements: ElementsConfig = {
  character: null,
  outfit: null,
  object: null,
  scene: null,
};

interface PromptActions {
  // Subject
  setSubject: (subject: Partial<SubjectConfig>) => void;

  // Lighting
  setLighting: (lighting: Partial<LightingConfig>) => void;

  // Camera
  setCamera: (camera: Partial<CameraConfig>) => void;

  // Style
  setStyle: (style: Partial<StyleConfig>) => void;

  // Elements
  setElement: (type: ElementType, element: ElementImage | null) => void;
  clearElements: () => void;

  // Settings
  setAspectRatio: (ratio: string) => void;
  setModel: (model: "nano-banana-pro" | "flux-2-pro") => void;

  // Images
  addImage: (image: GeneratedImage) => void;
  addImages: (images: GeneratedImage[]) => void;
  removeImage: (id: string) => void;
  clearImages: () => void;

  // Generation state
  setGenerating: (isGenerating: boolean) => void;
  setProgress: (progress: number) => void;

  // Full state
  resetAll: () => void;
  exportConfig: () => string;
  importConfig: (json: string) => boolean;
}

type PromptStore = PromptState & PromptActions;

const initialState: PromptState = {
  subject: defaultSubject,
  lighting: defaultLighting,
  camera: defaultCamera,
  style: defaultStyle,
  elements: defaultElements,
  aspectRatio: "16:9",
  model: "nano-banana-pro",
  images: [],
  isGenerating: false,
  generationProgress: 0,
};

export const usePromptStore = create<PromptStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setSubject: (subject) =>
        set((state) => ({
          subject: { ...state.subject, ...subject },
        })),

      setLighting: (lighting) =>
        set((state) => ({
          lighting: { ...state.lighting, ...lighting },
        })),

      setCamera: (camera) =>
        set((state) => ({
          camera: { ...state.camera, ...camera },
        })),

      setStyle: (style) =>
        set((state) => ({
          style: { ...state.style, ...style },
        })),

      setElement: (type, element) =>
        set((state) => ({
          elements: { ...state.elements, [type]: element },
        })),

      clearElements: () =>
        set(() => ({
          elements: defaultElements,
        })),

      setAspectRatio: (aspectRatio) => set(() => ({ aspectRatio })),

      setModel: (model) => set(() => ({ model })),

      addImage: (image) =>
        set((state) => ({
          images: [image, ...state.images],
        })),

      addImages: (images) =>
        set((state) => ({
          images: [...images, ...state.images],
        })),

      removeImage: (id) =>
        set((state) => ({
          images: state.images.filter((img) => img.id !== id),
        })),

      clearImages: () => set(() => ({ images: [] })),

      setGenerating: (isGenerating) => set(() => ({ isGenerating })),

      setProgress: (generationProgress) => set(() => ({ generationProgress })),

      resetAll: () =>
        set(() => ({
          ...initialState,
          images: get().images, // Preserve images
        })),

      exportConfig: () => {
        const state = get();
        const exportData = {
          subject: state.subject,
          lighting: state.lighting,
          camera: state.camera,
          style: state.style,
          elements: {
            // Only export element references, not full data
            character: state.elements.character
              ? { url: state.elements.character.url, name: state.elements.character.name }
              : null,
            outfit: state.elements.outfit
              ? { url: state.elements.outfit.url, name: state.elements.outfit.name }
              : null,
            object: state.elements.object
              ? { url: state.elements.object.url, name: state.elements.object.name }
              : null,
            scene: state.elements.scene
              ? { url: state.elements.scene.url, name: state.elements.scene.name }
              : null,
          },
          aspectRatio: state.aspectRatio,
          model: state.model,
        };
        return JSON.stringify(exportData, null, 2);
      },

      importConfig: (json) => {
        try {
          const data = JSON.parse(json);
          set(() => ({
            subject: { ...defaultSubject, ...data.subject },
            lighting: { ...defaultLighting, ...data.lighting },
            camera: { ...defaultCamera, ...data.camera },
            style: { ...defaultStyle, ...data.style },
            elements: { ...defaultElements, ...data.elements },
            aspectRatio: data.aspectRatio || "16:9",
            model: data.model || "nano-banana-pro",
          }));
          return true;
        } catch {
          return false;
        }
      },
    }),
    {
      name: "scenematic-prompt-store",
      partialize: (state) => ({
        subject: state.subject,
        lighting: state.lighting,
        camera: state.camera,
        style: state.style,
        // Don't persist elements (file references) or images
        aspectRatio: state.aspectRatio,
        model: state.model,
      }),
    }
  )
);
