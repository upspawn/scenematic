"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { usePromptStore } from "@/lib/store";
import {
  getOptions,
  CAMERA_MAP,
  LENS_MAP,
  FILM_STOCK_MAP,
  FOCAL_LENGTH_MAP,
  ASPECT_RATIO_MAP,
} from "@/data/vocabulary";
import { Camera, Film } from "lucide-react";

const cameraOptions = getOptions(CAMERA_MAP);
const lensOptions = getOptions(LENS_MAP);
const filmStockOptions = getOptions(FILM_STOCK_MAP);
const focalLengthOptions = getOptions(FOCAL_LENGTH_MAP);
const aspectRatioOptions = getOptions(ASPECT_RATIO_MAP);

export function CameraSection() {
  const { camera, setCamera, aspectRatio, setAspectRatio } = usePromptStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-4 w-4" />
          03 — Camera Gear
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              Camera Body
            </label>
            <Select
              value={camera.body}
              onValueChange={(value) => setCamera({ body: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select camera" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cinema</SelectLabel>
                  {cameraOptions
                    .filter((o) =>
                      [
                        "arri",
                        "red",
                        "panavision",
                        "sony-venice",
                        "blackmagic",
                        "canon-c300",
                      ].some((c) => o.value.includes(c))
                    )
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Professional Photo</SelectLabel>
                  {cameraOptions
                    .filter((o) =>
                      ["canon-5d", "fuji", "hasselblad", "leica", "pentax", "sony-a7"].some(
                        (c) => o.value.includes(c)
                      )
                    )
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Vintage / Film</SelectLabel>
                  {cameraOptions
                    .filter((o) =>
                      [
                        "35mm",
                        "16mm",
                        "8mm",
                        "lomo",
                        "polaroid",
                        "holga",
                        "diana",
                        "rangefinder",
                        "tlr",
                        "pinhole",
                        "daguerreotype",
                        "tintype",
                        "box",
                        "press",
                        "large-format",
                        "medium-format-film",
                      ].some((c) => o.value.includes(c))
                    )
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Action / Other</SelectLabel>
                  {cameraOptions
                    .filter((o) =>
                      ["gopro", "action", "slr-generic"].some((c) => o.value.includes(c))
                    )
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              Lens Type
            </label>
            <Select
              value={camera.lens}
              onValueChange={(value) => setCamera({ lens: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select lens" />
              </SelectTrigger>
              <SelectContent>
                {lensOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              Focal Length
            </label>
            <Select
              value={camera.focalLength}
              onValueChange={(value) => setCamera({ focalLength: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select focal length" />
              </SelectTrigger>
              <SelectContent>
                {focalLengthOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider flex items-center gap-2">
              <Film className="h-3 w-3" />
              Film Stock
            </label>
            <Select
              value={camera.filmStock}
              onValueChange={(value) => setCamera({ filmStock: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select film stock" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Color Negative</SelectLabel>
                  {filmStockOptions
                    .filter((o) =>
                      ["portra", "kodak-gold", "fuji-pro", "fuji-superia", "agfa", "ektar"].some(
                        (c) => o.value.includes(c)
                      )
                    )
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Color Reversal / Slide</SelectLabel>
                  {filmStockOptions
                    .filter((o) =>
                      ["kodachrome", "ektachrome", "velvia", "provia"].some((c) =>
                        o.value.includes(c)
                      )
                    )
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Cinematic</SelectLabel>
                  {filmStockOptions
                    .filter((o) => ["cinestill", "vision"].some((c) => o.value.includes(c)))
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Black & White</SelectLabel>
                  {filmStockOptions
                    .filter((o) =>
                      ["hp5", "tri-x", "delta", "tmax", "pan-f", "fp4"].some((c) =>
                        o.value.includes(c)
                      )
                    )
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Instant / Specialty</SelectLabel>
                  {filmStockOptions
                    .filter((o) =>
                      ["polaroid-600", "instax", "expired", "cross-processed"].some((c) =>
                        o.value.includes(c)
                      )
                    )
                    .map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Aspect Ratio
          </label>
          <Select value={aspectRatio} onValueChange={setAspectRatio}>
            <SelectTrigger>
              <SelectValue placeholder="Select aspect ratio" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Social Media</SelectLabel>
                {aspectRatioOptions
                  .filter((o) => ["1:1", "4:5", "9:16"].includes(o.value))
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Standard</SelectLabel>
                {aspectRatioOptions
                  .filter((o) => ["3:2", "4:3", "16:9", "2:3"].includes(o.value))
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Cinematic</SelectLabel>
                {aspectRatioOptions
                  .filter((o) =>
                    ["21:9", "2.35:1", "2.39:1", "1.85:1", "1.43:1"].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
