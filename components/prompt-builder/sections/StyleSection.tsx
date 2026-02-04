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
  PHOTOGRAPHER_STYLE_MAP,
  MOVIE_AESTHETIC_MAP,
  EFFECT_MAP,
} from "@/data/vocabulary";
import { Palette, Sparkles } from "lucide-react";

const photographerOptions = getOptions(PHOTOGRAPHER_STYLE_MAP);
const movieOptions = getOptions(MOVIE_AESTHETIC_MAP);
const effectOptions = getOptions(EFFECT_MAP);

export function StyleSection() {
  const { style, setStyle } = usePromptStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          04 — Style & Aesthetics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Photographer Style
          </label>
          <Select
            value={style.photographer || "none"}
            onValueChange={(value) => setStyle({ photographer: value === "none" ? "" : value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select photographer style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectGroup>
                <SelectLabel>Fashion & Portrait</SelectLabel>
                {photographerOptions
                  .filter((o) =>
                    [
                      "annie-leibovitz",
                      "richard-avedon",
                      "helmut-newton",
                      "guy-bourdin",
                      "juergen-teller",
                      "irving-penn",
                      "peter-lindbergh",
                      "herb-ritts",
                      "mario-testino",
                      "steven-meisel",
                      "patrick-demarchelier",
                      "tim-walker",
                      "paolo-roversi",
                      "peter-beard",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Documentary & Photojournalism</SelectLabel>
                {photographerOptions
                  .filter((o) =>
                    [
                      "dorothea-lange",
                      "henri-cartier-bresson",
                      "steve-mccurry",
                      "vivian-maier",
                      "sebastiao-salgado",
                      "james-nachtwey",
                      "robert-capa",
                      "eugene-smith",
                      "gordon-parks",
                      "lee-miller",
                      "robert-frank",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Fine Art & Conceptual</SelectLabel>
                {photographerOptions
                  .filter((o) =>
                    [
                      "gregory-crewdson",
                      "cindy-sherman",
                      "andreas-gursky",
                      "nan-goldin",
                      "william-eggleston",
                      "stephen-shore",
                      "joel-meyerowitz",
                      "martin-parr",
                      "alex-prager",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Classic & Hollywood</SelectLabel>
                {photographerOptions
                  .filter((o) =>
                    [
                      "george-hurrell",
                      "edward-steichen",
                      "yousuf-karsh",
                      "arnold-newman",
                      "philippe-halsman",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Landscape & Nature</SelectLabel>
                {photographerOptions
                  .filter((o) =>
                    [
                      "ansel-adams",
                      "edward-weston",
                      "minor-white",
                      "eliot-porter",
                      "galen-rowell",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Street & Urban</SelectLabel>
                {photographerOptions
                  .filter((o) =>
                    [
                      "daido-moriyama",
                      "joel-sternfeld",
                      "alex-webb",
                      "saul-leiter",
                      "garry-winogrand",
                      "bruce-gilden",
                      "elliott-erwitt",
                      "lee-friedlander",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Contemporary</SelectLabel>
                {photographerOptions
                  .filter((o) =>
                    [
                      "brandon-woelfel",
                      "petra-collins",
                      "tyler-shields",
                      "erik-johansson",
                    ].includes(o.value)
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
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="h-3 w-3" />
            Movie Look / Aesthetic
          </label>
          <Select
            value={style.movieLook || "none"}
            onValueChange={(value) => setStyle({ movieLook: value === "none" ? "" : value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select movie aesthetic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectGroup>
                <SelectLabel>Modern Classics</SelectLabel>
                {movieOptions
                  .filter((o) =>
                    [
                      "blade-runner",
                      "dark-knight",
                      "grand-budapest-hotel",
                      "mad-max-fury-road",
                      "the-matrix",
                      "john-wick",
                      "inception",
                      "dune",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Art House & Indie</SelectLabel>
                {movieOptions
                  .filter((o) =>
                    [
                      "amelie",
                      "in-the-mood-for-love",
                      "eternal-sunshine",
                      "her",
                      "moonlight-film",
                      "la-la-land",
                      "portrait-of-a-lady",
                      "lost-in-translation",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Horror & Thriller</SelectLabel>
                {movieOptions
                  .filter((o) =>
                    [
                      "pans-labyrinth",
                      "the-ring",
                      "get-out",
                      "the-lighthouse",
                      "midsommar",
                      "hereditary-film",
                      "the-witch",
                      "black-swan",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Sci-Fi & Fantasy</SelectLabel>
                {movieOptions
                  .filter((o) =>
                    [
                      "ex-machina",
                      "arrival-film",
                      "gravity",
                      "2001-space-odyssey",
                      "terminator-2",
                      "metropolis",
                      "shape-of-water",
                      "everything-everywhere",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Action & Crime</SelectLabel>
                {movieOptions
                  .filter((o) =>
                    [
                      "kill-bill",
                      "pulp-fiction",
                      "goodfellas",
                      "no-country-for-old-men",
                      "drive",
                      "the-batman",
                      "joker",
                      "fight-club",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Epic & Period</SelectLabel>
                {movieOptions
                  .filter((o) =>
                    [
                      "gladiator",
                      "the-revenant",
                      "dunkirk",
                      "1917",
                      "the-northman",
                      "power-of-the-dog",
                      "there-will-be-blood",
                      "saving-private-ryan",
                    ].includes(o.value)
                  )
                  .map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Classic Cinema</SelectLabel>
                {movieOptions
                  .filter((o) =>
                    [
                      "taxi_driver",
                      "the-shining",
                      "clockwork-orange",
                      "apocalypse-now",
                      "schindlers-list",
                      "tree-of-life",
                    ].includes(o.value)
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
            Filter / Effect
          </label>
          <Select
            value={style.effect || "none"}
            onValueChange={(value) => setStyle({ effect: value === "none" ? "" : value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select effect" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              {effectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
