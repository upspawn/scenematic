import {
  LIGHTING_MAP,
  CAMERA_MAP,
  LENS_MAP,
  FILM_STOCK_MAP,
  SHOT_TYPE_MAP,
  PHOTOGRAPHER_STYLE_MAP,
  MOVIE_AESTHETIC_MAP,
  EFFECT_MAP,
  ASPECT_RATIO_MAP,
  FOCAL_LENGTH_MAP,
} from "@/data/vocabulary";
import type { PromptState } from "./types";

/**
 * Assembles a cinematography prompt from the current state
 * Following the Nano Banana Pro structure:
 * [Subject/Action] in [Environment].
 * [Shot Type/Angle].
 * [Lighting Source], [Atmosphere/Mood].
 * Captured with [Camera Body], [Lens Type], [Film Stock].
 * [Style/Movie Look].
 * [Effect].
 * [Aspect Ratio].
 * [Consistency instruction if using Elements]
 */
export function assemblePrompt(state: PromptState): string {
  const parts: string[] = [];

  // 1. Subject and framing
  if (state.subject.description || state.subject.action) {
    const shotTypeDesc = SHOT_TYPE_MAP[state.subject.shotType] || "";
    const shotIntro = shotTypeDesc
      ? `A photorealistic image, ${shotTypeDesc.toLowerCase()}`
      : "A photorealistic image";

    let subjectLine = shotIntro;

    if (state.subject.description) {
      subjectLine += ` of ${state.subject.description}`;
    }

    if (state.subject.action) {
      subjectLine += `, ${state.subject.action}`;
    }

    if (state.subject.environment) {
      subjectLine += `, set in ${state.subject.environment}`;
    }

    parts.push(subjectLine + ".");
  }

  // 2. Lighting and mood
  if (state.lighting.source) {
    const lightingDesc =
      LIGHTING_MAP[state.lighting.source] || state.lighting.source;
    let lightingLine = `The scene is illuminated by ${lightingDesc}`;

    if (state.lighting.mood) {
      lightingLine += `, creating a ${state.lighting.mood} atmosphere`;
    }

    parts.push(lightingLine + ".");
  }

  // 3. Camera gear
  const gearParts: string[] = [];

  if (state.camera.body) {
    const cameraDesc = CAMERA_MAP[state.camera.body] || state.camera.body;
    gearParts.push(cameraDesc);
  }

  if (state.camera.focalLength) {
    const focalDesc =
      FOCAL_LENGTH_MAP[state.camera.focalLength] || state.camera.focalLength;
    gearParts.push(focalDesc);
  }

  if (state.camera.lens) {
    const lensDesc = LENS_MAP[state.camera.lens] || state.camera.lens;
    gearParts.push(lensDesc);
  }

  if (state.camera.filmStock) {
    const filmDesc =
      FILM_STOCK_MAP[state.camera.filmStock] || state.camera.filmStock;
    gearParts.push(filmDesc);
  }

  if (gearParts.length > 0) {
    parts.push(`Captured with ${gearParts.join(", ")}.`);
  }

  // 4. Style and aesthetics
  if (state.style.photographer) {
    const photographerDesc =
      PHOTOGRAPHER_STYLE_MAP[state.style.photographer] ||
      `In the style of ${state.style.photographer}`;
    parts.push(photographerDesc + ".");
  }

  if (state.style.movieLook) {
    const movieDesc =
      MOVIE_AESTHETIC_MAP[state.style.movieLook] ||
      `Visual aesthetic of ${state.style.movieLook}`;
    parts.push(`With the ${movieDesc}.`);
  }

  if (state.style.effect) {
    const effectDesc = EFFECT_MAP[state.style.effect] || state.style.effect;
    parts.push(`Applied effect: ${effectDesc}.`);
  }

  // 5. Quality anchors
  parts.push("No blurred faces. No distorted anatomy.");

  // 6. Aspect ratio
  if (state.aspectRatio) {
    const aspectDesc =
      ASPECT_RATIO_MAP[state.aspectRatio] || state.aspectRatio;
    parts.push(`The image should be in a ${aspectDesc} format.`);
  }

  // 7. Consistency instruction if elements present
  const hasElements = Object.values(state.elements).some(
    (el) => el !== null
  );
  if (hasElements) {
    parts.push(
      "Keep all characters exactly the same with identical outfits and appearance as the reference image."
    );
  }

  return parts.join(" ");
}

/**
 * Generate a prompt variation for multi-angle scene generation
 */
export function assembleSceneVariation(
  baseState: PromptState,
  angle: string,
  shotNumber: number
): string {
  // Create a modified state with the new angle
  const modifiedState: PromptState = {
    ...baseState,
    subject: {
      ...baseState.subject,
      shotType: angle,
    },
  };

  const basePrompt = assemblePrompt(modifiedState);

  // Add scene progression context
  const progressionHint =
    shotNumber > 1
      ? `Building on the previous shot, showing the next moment in the scene. `
      : "";

  return progressionHint + basePrompt;
}

/**
 * Get a preview of the prompt parts for display
 */
export function getPromptParts(state: PromptState): {
  section: string;
  content: string;
  hasValue: boolean;
}[] {
  const parts: { section: string; content: string; hasValue: boolean }[] = [];

  // Subject
  const hasSubject = !!(
    state.subject.description ||
    state.subject.action ||
    state.subject.environment
  );
  parts.push({
    section: "Subject & Framing",
    content: hasSubject
      ? `${state.subject.description || "[description]"} ${state.subject.action ? `(${state.subject.action})` : ""} in ${state.subject.environment || "[environment]"}`
      : "Not configured",
    hasValue: hasSubject,
  });

  // Lighting
  const hasLighting = !!(state.lighting.source || state.lighting.mood);
  parts.push({
    section: "Lighting & Mood",
    content: hasLighting
      ? `${state.lighting.source || "[source]"} - ${state.lighting.mood || "[mood]"}`
      : "Not configured",
    hasValue: hasLighting,
  });

  // Camera
  const hasCamera = !!(
    state.camera.body ||
    state.camera.lens ||
    state.camera.filmStock
  );
  parts.push({
    section: "Camera Gear",
    content: hasCamera
      ? `${state.camera.body || "[camera]"} + ${state.camera.lens || "[lens]"} + ${state.camera.filmStock || "[film]"}`
      : "Not configured",
    hasValue: hasCamera,
  });

  // Style
  const hasStyle = !!(
    state.style.photographer ||
    state.style.movieLook ||
    state.style.effect
  );
  parts.push({
    section: "Style & Aesthetics",
    content: hasStyle
      ? [state.style.photographer, state.style.movieLook, state.style.effect]
          .filter(Boolean)
          .join(" + ") || "Not configured"
      : "Not configured",
    hasValue: hasStyle,
  });

  // Elements
  const elementNames = Object.entries(state.elements)
    .filter(([, el]) => el !== null)
    .map(([type]) => type);
  parts.push({
    section: "Elements",
    content:
      elementNames.length > 0 ? elementNames.join(", ") : "No reference images",
    hasValue: elementNames.length > 0,
  });

  return parts;
}
