// Core types for Scenematic.ai

export interface SubjectConfig {
  description: string;
  action: string;
  environment: string;
  shotType: string;
}

export interface LightingConfig {
  source: string;
  mood: string;
}

export interface CameraConfig {
  body: string;
  lens: string;
  focalLength: string;
  filmStock: string;
}

export interface StyleConfig {
  photographer: string;
  movieLook: string;
  effect: string;
}

export interface ElementImage {
  url: string;
  name: string;
  file?: File;
}

export interface ElementsConfig {
  character: ElementImage | null;
  outfit: ElementImage | null;
  object: ElementImage | null;
  scene: ElementImage | null;
}

export type ElementType = keyof ElementsConfig;

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  settings: {
    aspectRatio: string;
    model: string;
    seed?: number;
  };
  timestamp: number;
  isScene?: boolean;
  sceneIndex?: number;
}

export interface PromptState {
  // Section configs
  subject: SubjectConfig;
  lighting: LightingConfig;
  camera: CameraConfig;
  style: StyleConfig;
  elements: ElementsConfig;

  // Generation settings
  aspectRatio: string;
  model: "nano-banana-pro" | "flux-2-pro";

  // Results
  images: GeneratedImage[];
  isGenerating: boolean;
  generationProgress: number;
}

export interface GenerateRequest {
  prompt: string;
  aspectRatio: string;
  model: string;
  seed?: number;
  imageUrls?: string[];
}

export interface GenerateResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export interface SceneRequest {
  basePrompt: string;
  aspectRatio: string;
  model: string;
  baseSeed: number;
  imageUrls?: string[];
}

export interface SceneResponse {
  success: boolean;
  images?: Array<{
    url: string;
    angle: string;
    seed: number;
  }>;
  error?: string;
}
