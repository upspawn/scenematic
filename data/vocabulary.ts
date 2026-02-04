// Complete vocabulary mappings from Nano Banana Pro research
// Each key maps to an expanded description for better AI generation

export const LIGHTING_MAP: Record<string, string> = {
  rembrandt:
    "Rembrandt lighting with dramatic shadow on one side of face, nose shadow connecting to cheek shadow, creating depth and dimension",
  chiaroscuro:
    "High-contrast chiaroscuro lighting with deep blacks and bright highlights, dramatic interplay of light and shadow",
  paramount:
    "Paramount/butterfly lighting with light positioned directly above and in front of subject, creating shadow under nose",
  loop: "Loop lighting with small shadow of nose on cheek, soft and flattering, positioned at 45 degrees",
  split:
    "Split lighting with half the face in light, half in shadow, dramatic and moody",
  "low-key":
    "Low-key lighting with predominantly dark tones, minimal fill, dramatic shadows, noir aesthetic",
  "high-key":
    "High-key lighting with bright, even illumination, minimal shadows, clean and optimistic feel",
  volumetric:
    "Volumetric god rays streaming through atmosphere, visible light beams cutting through dusty air",
  practical:
    "Practical lighting using visible light sources in scene (lamps, screens, fires), naturalistic feel",
  motivated:
    "Motivated lighting that appears to come from a logical source within the scene",
  candlelight:
    "Warm candlelight with flickering quality, intimate orange glow, soft shadows",
  neon: "Neon lighting with vibrant colored glow, urban night aesthetic, reflections on wet surfaces",
  gobo: "Gobo lighting with patterned shadows cast through cutouts, venetian blind effect",
  backlighting:
    "Strong backlighting/rim light creating halo effect around subject, separating from background",
  bounce:
    "Soft bounce lighting with light reflected off surfaces, gentle fill, natural feel",
  "color-gels":
    "Color gel lighting with theatrical colored lights, mood-setting, dramatic",
  stage: "Stage lighting with dramatic spots, theatrical presentation, performance aesthetic",
  soft: "Soft, diffused lighting with gentle gradients, flattering and even",
  silhouette:
    "Silhouette lighting with subject backlit, dark figure against bright background",
  natural:
    "Natural daylight, golden hour warmth or cool overcast, realistic outdoor feel",
  fluorescent:
    "Cool fluorescent lighting, institutional feel, greenish cast, harsh shadows",
  tungsten:
    "Warm tungsten lighting, cozy interior feel, orange cast, intimate",
  moonlight:
    "Cool moonlight with blue cast, mysterious nocturnal atmosphere",
  "spot-harsh":
    "Hard spotlight creating sharp-edged shadows, interrogation aesthetic",
  ambient:
    "Ambient environmental lighting, soft and undirected, realistic casual setting",
};

export const CAMERA_MAP: Record<string, string> = {
  // Cinema cameras
  "arri-alexa-65":
    "Shot on ARRI Alexa 65, organic film-like color science, exceptional dynamic range, cinema-grade texture, large format sensor",
  "arri-alexa-lf":
    "Shot on ARRI Alexa LF, beautiful skin tones, natural highlight rolloff, cinematic depth",
  "red-v-raptor":
    "Shot on RED V-Raptor, 8K resolution, sharp detail, modern digital cinema look",
  "red-cinema":
    "Shot on RED Digital Cinema Camera, punchy colors, crisp detail, contemporary film look",
  "panavision-dxl2":
    "Shot on Panavision Millennium DXL2, classic Hollywood aesthetic, warm tones, beautiful bokeh",
  "sony-venice":
    "Shot on Sony Venice, dual ISO capability, natural colors, excellent low-light performance",
  "blackmagic-cinema":
    "Shot on Blackmagic Cinema Camera, film-like dynamic range, organic texture",
  "blackmagic-pocket":
    "Shot on Blackmagic Pocket Cinema Camera, indie film aesthetic, rich colors",
  "canon-c300":
    "Shot on Canon C300, broadcast quality, versatile color, professional documentary look",

  // Professional photo cameras
  "canon-5d":
    "Shot on Canon EOS 5D, full-frame DSLR, natural colors, classic digital look",
  "fuji-gfx-100":
    "Shot on Fujifilm GFX 100, medium format, exceptional resolution, film simulation colors",
  "fuji-xt4":
    "Shot on Fujifilm X-T4, distinctive color science, film simulation aesthetic",
  "hasselblad-x1d":
    "Shot on Hasselblad X1D II, medium format, Swedish color science, pristine quality",
  "leica-m11":
    "Shot on Leica M11, rangefinder character, rich colors, photojournalistic feel",
  "leica-m":
    "Shot on Leica M-Series, classic rangefinder rendering, timeless quality",
  "pentax-645z":
    "Shot on Pentax 645Z, medium format, exceptional detail, rich tones",
  "sony-a7s":
    "Shot on Sony A7S III, low-light champion, cinematic video capability, modern hybrid",

  // Vintage/Film cameras
  "35mm-film":
    "Shot on 35mm film camera, organic grain, authentic analog texture, nostalgic warmth",
  "16mm-film":
    "Shot on 16mm film camera, indie film aesthetic, pronounced grain, documentary feel",
  "8mm-film":
    "Shot on 8mm film camera, home movie aesthetic, heavy grain, vintage warmth",
  "lomo-lca": "Shot on Lomo LC-A, vignetting, color shifts, lo-fi aesthetic, unpredictable charm",

  // Action cameras
  "gopro-hero":
    "Shot on GoPro Hero 10, wide POV, action sports aesthetic, hyperreal colors",
  "action-camera":
    "Shot on action camera, wide angle distortion, immersive POV, adventure aesthetic",

  // Specialty
  "slr-generic":
    "Shot on SLR camera, classic photography aesthetic, versatile rendering",
  polaroid:
    "Shot on Polaroid camera, instant film aesthetic, soft focus, distinctive color palette",
  holga: "Shot on Holga camera, lo-fi medium format, light leaks, dreamy vignette",
  diana: "Shot on Diana camera, plastic lens softness, unpredictable focus, artistic imperfection",
  "large-format":
    "Shot on large format camera, exceptional detail, shallow depth, view camera movements",
  "medium-format-film":
    "Shot on medium format film camera, square or 6x7 aspect, beautiful tonal gradation",
  "rangefinder-vintage":
    "Shot on vintage rangefinder, classic street photography aesthetic",
  "tlr-camera":
    "Shot on twin-lens reflex camera, waist-level composition, vintage portrait aesthetic",
  "pinhole-camera":
    "Shot on pinhole camera, infinite depth of field, long exposure softness, ethereal",
  "daguerreotype-style":
    "Daguerreotype aesthetic, early photography look, silvered surface, antique",
  "tintype-style":
    "Tintype aesthetic, Civil War era photography, metallic plate, historical",
  "box-camera":
    "Shot on box camera, early 20th century aesthetic, simple optics, nostalgic",
  "press-camera":
    "Shot on press camera, 1940s photojournalism aesthetic, Speed Graphic style",
};

export const LENS_MAP: Record<string, string> = {
  anamorphic:
    "Anamorphic cinema lens with horizontal lens flares, oval bokeh, widescreen character, cinematic squeeze",
  "zeiss-ultra-prime":
    "Zeiss Ultra Prime lens with clinical sharpness, smooth bokeh, modern cinema reference standard",
  "panavision-c":
    "Panavision C-Series lens with vintage character, gentle contrast, Hollywood classic look",
  "helios-44":
    "Helios 44-2 Soviet lens with distinctive swirly bokeh, vintage character, dreamy backgrounds",
  lensbaby:
    "Lensbaby selective focus lens with tilt-shift-like blur, creative zone of sharpness",
  catadioptric:
    "Catadioptric mirror lens with donut-shaped bokeh, telephoto compression, unique artifacts",
  fisheye:
    "Fisheye lens with extreme barrel distortion, 180-degree field of view, immersive perspective",
  macro: "Macro lens with 1:1 magnification, extreme close-up detail, shallow depth of field",
  petzval:
    "Petzval portrait lens with vintage swirly bokeh, soft edges, center sharpness, 19th century character",
  "tilt-shift":
    "Tilt-shift lens with selective plane of focus, miniature effect possibility, architectural correction",
  "soft-focus":
    "Soft focus portrait lens with spherical aberration glow, flattering diffusion, dreamy highlights",
  "toy-plastic":
    "Toy plastic lens with optical imperfections, lo-fi aesthetic, unpredictable distortion",
  "super-telephoto":
    "200mm+ super telephoto with extreme background compression, distant subject isolation",
  "wide-prime":
    "Wide angle prime lens with environmental context, dramatic perspective, close subject emphasis",
  "standard-prime":
    "50mm standard prime lens, natural perspective matching human vision, versatile and honest",
  "portrait-prime":
    "85-135mm portrait prime lens, flattering compression, beautiful subject separation",
  "cinema-prime":
    "Cinema prime lens with precise focus marks, matched color and contrast, professional film production",
  vintage:
    "Vintage uncoated lens with lower contrast, warm flares, organic character, soul",
};

export const FILM_STOCK_MAP: Record<string, string> = {
  // Color negative
  "portra-400":
    "Kodak Portra 400 film stock with beautiful skin tones, fine grain, pastel color palette, soft contrast",
  "portra-800":
    "Kodak Portra 800 film stock with versatile exposure latitude, slightly more grain, warm tones",
  "kodak-gold":
    "Kodak Gold 200 film stock with saturated warm colors, consumer film character, nostalgic",
  "fuji-pro-400h":
    "Fujicolor Pro 400H with cooler tones, exceptional skin rendering, wedding favorite",
  "fuji-superia":
    "Fujifilm Superia with punchy greens and reds, consumer vibrancy, everyday aesthetic",
  "agfa-vista":
    "Agfa Vista film with distinctive color palette, European character, unique rendering",
  ektar:
    "Kodak Ektar 100 with finest grain color negative, vivid saturation, punchy contrast",

  // Color reversal/slide
  kodachrome:
    "Kodachrome film with legendary reds and yellows, archival quality, National Geographic aesthetic",
  ektachrome:
    "Kodak Ektachrome with punchy colors, fine grain slide film, vibrant saturation",
  "velvia-50":
    "Fuji Velvia 50 with extreme saturation, nature photography favorite, vivid landscapes",
  "provia-100":
    "Fuji Provia 100F with neutral accurate colors, professional slide film, versatile",

  // Cinematic
  "cinestill-800t":
    "CineStill 800T tungsten film with distinctive red halation around highlights, night photography favorite, cinema motion picture aesthetic",
  "cinestill-50d":
    "CineStill 50D daylight film with fine grain, motion picture color science, controlled highlights",
  "vision3-500t":
    "Kodak Vision3 500T motion picture film, natural tungsten balance, Hollywood standard",
  "vision3-250d":
    "Kodak Vision3 250D daylight motion picture film, accurate colors, cinema reference",

  // Black & White
  "hp5-plus":
    "Ilford HP5 Plus black and white with classic grain, versatile contrast, photojournalistic standard",
  "tri-x":
    "Kodak Tri-X black and white with iconic grain structure, punchy contrast, timeless look",
  "delta-3200":
    "Ilford Delta 3200 with pronounced grain, low-light capability, documentary aesthetic",
  "tmax-100":
    "Kodak T-Max 100 with finest grain B&W, exceptional sharpness, tonal precision",
  "pan-f":
    "Ilford Pan F Plus 50 with ultra-fine grain, extreme detail, smooth tones",
  "fp4-plus":
    "Ilford FP4 Plus with medium grain, classic British aesthetic, archival quality",

  // Instant
  "polaroid-600":
    "Polaroid 600 instant film with distinctive color palette, white frame, nostalgic warmth",
  "instax-mini":
    "Fuji Instax Mini with softer colors, credit card size aesthetic, party photography feel",

  // Expired/Cross-processed
  "expired-film":
    "Expired film aesthetic with color shifts, unpredictable tones, degraded emulsion character",
  "cross-processed":
    "Cross-processed film with shifted colors, high contrast, alternative developing character",
};

export const SHOT_TYPE_MAP: Record<string, string> = {
  "establishing-wide":
    "Wide establishing shot showing entire environment and context, setting the scene",
  "extreme-wide":
    "Extreme wide shot with vast landscape or environment dominating, tiny subject",
  wide: "Wide shot with full body and environmental context, spatial relationship",
  "full-body":
    "Full body shot capturing entire subject from head to toe, fashion editorial style",
  "cowboy-shot":
    "Cowboy shot framed mid-thigh, named for Western films, action-ready stance",
  "medium-wide":
    "Medium wide shot from approximately knees up, casual full context",
  medium:
    "Medium shot from waist up, conversational framing, standard interview distance",
  "medium-close":
    "Medium close-up from chest up, intimate but professional, talking head",
  "close-up":
    "Close-up shot focusing on face, emotional intensity, detail emphasis",
  "extreme-close-up":
    "Extreme close-up on specific detail like eyes or hands, maximum intimacy",
  "birds-eye":
    "Bird's eye view looking directly down, god's perspective, graphic composition",
  "high-angle":
    "High angle shot looking down at subject, vulnerability, diminished power",
  "eye-level":
    "Eye level shot at subject's height, neutral perspective, equality",
  "low-angle":
    "Low angle shot looking up at subject, power, dominance, heroic",
  "worms-eye":
    "Worm's eye view from ground looking up, dramatic, towering subject",
  "dutch-angle":
    "Dutch angle with tilted horizon, unease, disorientation, tension",
  "over-shoulder":
    "Over-the-shoulder shot with one subject's back in foreground, dialogue framing",
  "two-shot":
    "Two-shot with two subjects in frame, relationship emphasis, conversation",
  "group-shot":
    "Group shot with multiple subjects, ensemble framing, social context",
  "profile-shot":
    "Profile shot showing subject from the side, silhouette potential, noble",
  "three-quarter":
    "Three-quarter view between frontal and profile, classical portrait angle",
  cutaway:
    "Cutaway shot of relevant detail or reaction, editing transition, context",
  "insert-shot":
    "Insert shot of specific object or detail, narrative emphasis, close detail",
  pov: "Point-of-view shot from subject's perspective, immersive, first person",
  reaction:
    "Reaction shot capturing emotional response, dialogue punctuation",
  "tracking-shot":
    "Tracking shot following subject movement, dynamic, journey",
  "push-in": "Push-in shot moving toward subject, increasing intensity, focus",
  "pull-back":
    "Pull-back shot moving away from subject, reveal, context expansion",
};

export const PHOTOGRAPHER_STYLE_MAP: Record<string, string> = {
  // Fashion & Portrait
  "annie-leibovitz":
    "In the style of Annie Leibovitz with elaborate conceptual setups, dramatic lighting, celebrity portraiture, theatrical staging",
  "richard-avedon":
    "In the style of Richard Avedon with stark white backgrounds, raw emotional intensity, movement capture, fashion minimalism",
  "helmut-newton":
    "In the style of Helmut Newton with provocative glamour, strong women, dramatic shadows, high fashion noir",
  "guy-bourdin":
    "In the style of Guy Bourdin with surreal compositions, bold colors, mysterious narratives, fashion as art",
  "juergen-teller":
    "In the style of Juergen Teller with raw authenticity, casual flash, anti-glamour, intimate celebrity",
  "irving-penn":
    "In the style of Irving Penn with sculptural lighting, corner portraits, ethnographic studies, formal elegance",
  "peter-lindbergh":
    "In the style of Peter Lindbergh with black and white authenticity, natural beauty, supermodel era definition",
  "herb-ritts":
    "In the style of Herb Ritts with sculptural bodies, high contrast black and white, classical forms, desert light",
  "mario-testino":
    "In the style of Mario Testino with glamorous energy, golden light, celebrity sparkle, joyful fashion",
  "steven-meisel":
    "In the style of Steven Meisel with transformative vision, chameleon approach, Italian Vogue elegance",
  "patrick-demarchelier":
    "In the style of Patrick Demarchelier with approachable glamour, natural elegance, classic beauty",
  "tim-walker":
    "In the style of Tim Walker with fantastical sets, fairy tale fashion, elaborate props, British whimsy",
  "paolo-roversi":
    "In the style of Paolo Roversi with ethereal Polaroid soft focus, painterly color, romantic diffusion",
  "peter-beard":
    "In the style of Peter Beard with African wildlife, collage diaries, blood and beauty, adventurer aesthetic",

  // Documentary & Photojournalism
  "dorothea-lange":
    "In the style of Dorothea Lange with Depression-era dignity, migrant portraits, social documentary power",
  "henri-cartier-bresson":
    "In the style of Henri Cartier-Bresson with decisive moments, geometric composition, street photography mastery",
  "steve-mccurry":
    "In the style of Steve McCurry with vivid colors, Afghan eyes, cultural portraiture, National Geographic legacy",
  "vivian-maier":
    "In the style of Vivian Maier with street observation, self-portrait shadows, midcentury Chicago, nanny photographer",
  "sebastiao-salgado":
    "In the style of Sebastiao Salgado with epic black and white, human labor, environmental advocacy, Genesis",
  "james-nachtwey":
    "In the style of James Nachtwey with war documentation, human suffering, unflinching witness, Time magazine",
  "robert-capa":
    "In the style of Robert Capa with war photography, D-Day moment, slightly out of focus action, courage",
  "eugene-smith":
    "In the style of W. Eugene Smith with photo essay depth, Minamata compassion, Country Doctor intimacy",
  "gordon-parks":
    "In the style of Gordon Parks with civil rights documentation, fashion versatility, empathetic portrait",
  "lee-miller":
    "In the style of Lee Miller with surrealist connections, war correspondent, bathtub in Hitler's apartment",
  "robert-frank":
    "In the style of Robert Frank with The Americans alienation, beat generation snapshot, jazz rhythm",

  // Fine Art & Conceptual
  "gregory-crewdson":
    "In the style of Gregory Crewdson with cinematic suburban tableaux, elaborate production, twilight unease, movie-scale staging",
  "cindy-sherman":
    "In the style of Cindy Sherman with identity transformation, film stills, self-portraiture, character study",
  "andreas-gursky":
    "In the style of Andreas Gursky with massive scale, architectural patterns, digitally enhanced reality, Rhine II",
  "nan-goldin":
    "In the style of Nan Goldin with intimate diary, Ballad of Sexual Dependency, flash-lit vulnerability",
  "william-eggleston":
    "In the style of William Eggleston with democratic color, Southern vernacular, mundane transcendence",
  "stephen-shore":
    "In the style of Stephen Shore with American surfaces, new topographics, large format precision",
  "joel-meyerowitz":
    "In the style of Joel Meyerowitz with Cape Light color, street photography roots, large format transition",
  "martin-parr":
    "In the style of Martin Parr with British satire, garish flash, seaside grotesque, Last Resort",
  "alex-prager":
    "In the style of Alex Prager with Hitchcock staging, crowd anxiety, saturated Hollywood, cinematic moments",

  // Classic & Hollywood
  "george-hurrell":
    "In the style of George Hurrell with Hollywood glamour, 1940s high contrast black and white, sculpted lighting, star system",
  "edward-steichen":
    "In the style of Edward Steichen with Condé Nast elegance, modernist portraiture, Moonrise over pond",
  "yousuf-karsh":
    "In the style of Yousuf Karsh with powerful hands, Churchill portrait, dramatic lighting, gravitas",
  "arnold-newman":
    "In the style of Arnold Newman with environmental portraiture, Stravinsky piano, subject in context",
  "philippe-halsman":
    "In the style of Philippe Halsman with jump portraits, Dali collaboration, psychological insight",

  // Landscape & Nature
  "ansel-adams":
    "In the style of Ansel Adams with zone system mastery, Yosemite grandeur, environmental conservation, sharp detail",
  "edward-weston":
    "In the style of Edward Weston with sculptural forms, pepper studies, nude abstractions, f/64 sharpness",
  "minor-white":
    "In the style of Minor White with spiritual abstraction, equivalent metaphors, zen photography",
  "eliot-porter":
    "In the style of Eliot Porter with intimate nature, color conservation, Glen Canyon elegy",
  "galen-rowell":
    "In the style of Galen Rowell with adventure landscape, rainbow Potala Palace, mountaineering perspective",

  // Contemporary
  "brandon-woelfel":
    "In the style of Brandon Woelfel with neon bokeh, fairy lights, dreamy pastels, Instagram aesthetic",
  "petra-collins":
    "In the style of Petra Collins with soft focus femininity, hazy nostalgia, youth culture, film grain",
  "tyler-shields":
    "In the style of Tyler Shields with controversy staging, celebrity destruction, provocative tableaux",
  "erik-johansson":
    "In the style of Erik Johansson with impossible realities, seamless composites, surreal landscapes",

  // Street & Urban
  "daido-moriyama":
    "In the style of Daido Moriyama with grainy black and white, Shinjuku streets, are-bure-boke blur",
  "joel-sternfeld":
    "In the style of Joel Sternfeld with American prospects, large format color, autumn road trips",
  "alex-webb":
    "In the style of Alex Webb with complex color layers, Caribbean vibrancy, Magnum complexity",
  "saul-leiter":
    "In the style of Saul Leiter with abstracted color, rainy windows, 1950s New York, painterly reflections",
  "garry-winogrand":
    "In the style of Garry Winogrand with American social landscape, tilted frames, airport chaos",
  "bruce-gilden":
    "In the style of Bruce Gilden with flash confrontation, New York faces, in-your-face street",
  "elliott-erwitt":
    "In the style of Elliott Erwitt with witty moments, dogs, ironic juxtaposition, Magnum humor",
  "lee-friedlander":
    "In the style of Lee Friedlander with American monument, self-portrait reflections, social landscape",
};

export const MOVIE_AESTHETIC_MAP: Record<string, string> = {
  "blade-runner":
    "Visual aesthetic of Blade Runner with neon noir, deep shadows, 1980s neo-noir look, subtle incidental neon lights, reflections, rain-soaked streets",
  "dark-knight":
    "Visual aesthetic of The Dark Knight with cool urban tones, deep shadows, high contrast, crisp clarity, IMAX scale",
  "grand-budapest-hotel":
    "Visual aesthetic of The Grand Budapest Hotel with stylized pastel colors, symmetrical composition, Wes Anderson whimsy",
  "roger-rabbit":
    "Visual aesthetic of Who Framed Roger Rabbit with 1940s noir palette, cartoon elements, hybrid reality",
  "in-the-mood-for-love":
    "Visual aesthetic of In the Mood for Love with rich reds, soft focus, romantic yearning, Wong Kar-wai slow motion",
  "mad-max-fury-road":
    "Visual aesthetic of Mad Max: Fury Road with desaturated wasteland, orange/teal contrast, practical explosions, speed",
  "the-matrix":
    "Visual aesthetic of The Matrix with green digital tint, cyberpunk noir, bullet time, leather and rain",
  "jurassic-park":
    "Visual aesthetic of Jurassic Park with Spielberg wonder, amber tones, scientific awe, adventure lighting",
  "john-wick":
    "Visual aesthetic of John Wick with neon-soaked action, stylized violence, nightclub aesthetic, high contrast",
  "pans-labyrinth":
    "Visual aesthetic of Pan's Labyrinth with dark fairy tale, amber warmth versus blue cold, del Toro monsters",
  "squid-game":
    "Visual aesthetic of Squid Game with pastel brutality, geometric shapes, childhood games turned deadly, Korean aesthetic",
  "terminator-2":
    "Visual aesthetic of Terminator 2 with blue steel, industrial grit, liquid metal, 90s action",
  "the-revenant":
    "Visual aesthetic of The Revenant with natural light only, frozen wilderness, brutal survival, Lubezki long takes",
  "the-ring":
    "Visual aesthetic of The Ring with desaturated blue-green, J-horror dread, VHS artifacts, wet hair terror",
  "shape-of-water":
    "Visual aesthetic of The Shape of Water with teal immersion, 1960s Baltimore, monster romance, aquatic light",
  trainspotting:
    "Visual aesthetic of Trainspotting with grimy Edinburgh, toilet dive, heroin chic, Danny Boyle energy",
  twilight:
    "Visual aesthetic of Twilight with Pacific Northwest overcast, blue-green filters, vampire romance",
  utopia:
    "Visual aesthetic of Utopia with oversaturated colors, surveillance paranoia, British conspiracy, yellow dominance",
  metropolis:
    "Visual aesthetic of Metropolis with German expressionist shadows, art deco future, silent film drama",
  "no-country-for-old-men":
    "Visual aesthetic of No Country for Old Men with bleached Texas, Coen brothers framing, violence aftermath",
  "fight-club":
    "Visual aesthetic of Fight Club with grimy basements, subliminal frames, nihilist chic, Fincher darkness",
  amelie:
    "Visual aesthetic of Amélie with saturated greens and reds, Parisian whimsy, Jeunet dreamscape",
  "kill-bill":
    "Visual aesthetic of Kill Bill with anime influences, samurai yellow, blood geysers, Tarantino homage",
  "eternal-sunshine":
    "Visual aesthetic of Eternal Sunshine with memory erosion, Michel Gondry handmade, emotional destruction",
  "city-of-god":
    "Visual aesthetic of City of God with favela energy, handheld chaos, Brazilian heat, crime childhood",
  "children-of-men":
    "Visual aesthetic of Children of Men with long takes through chaos, dystopian grey, hope fragments",
  gravity:
    "Visual aesthetic of Gravity with space isolation, Cuarón bravura, Earth beauty, debris terror",
  her: "Visual aesthetic of Her with warm future Los Angeles, soft pastels, Spike Jonze melancholy, high-waisted pants",
  "ex-machina":
    "Visual aesthetic of Ex Machina with clinical modernism, Norwegian architecture, AI uncanny valley",
  "moonlight-film":
    "Visual aesthetic of Moonlight with intimate portraiture, Miami moonlight blue, triptych identity",
  "la-la-land":
    "Visual aesthetic of La La Land with Technicolor homage, magic hour Los Angeles, musical dreamscape",
  "get-out":
    "Visual aesthetic of Get Out with suburban horror, sunken place, Peele social thriller",
  "arrival-film":
    "Visual aesthetic of Arrival with Villeneuve mystery, alien linguistics, foggy Montana, time circles",
  dunkirk:
    "Visual aesthetic of Dunkirk with IMAX tension, triptych time, practical action, Nolan precision",
  "1917": "Visual aesthetic of 1917 with one-shot illusion, WWI trenches, Deakins dawn and dusk",
  parasite:
    "Visual aesthetic of Parasite with vertical class, semi-basement flooding, Bong symmetry, genre mixing",
  joker: "Visual aesthetic of Joker with Scorsese homage, Gotham as 70s NYC, mental health descent, stairs",
  dune: "Visual aesthetic of Dune with orange desert, brutalist architecture, Villeneuve scale, spice visions",
  "everything-everywhere":
    "Visual aesthetic of Everything Everywhere All at Once with multiverse chaos, googly eyes, absurdist meaning",
  "the-lighthouse":
    "Visual aesthetic of The Lighthouse with 1.19:1 aspect ratio, black and white madness, Eggers period",
  midsommar:
    "Visual aesthetic of Midsommar with daylight horror, Swedish folk, Ari Aster grief, flower crowns",
  "the-batman":
    "Visual aesthetic of The Batman with Nirvana noir, rain-soaked Gotham, red emergency lighting",
  "nope-film":
    "Visual aesthetic of Nope with Hoyte van Hoytema vistas, UFO dread, spectacle critique",
  "top-gun-maverick":
    "Visual aesthetic of Top Gun Maverick with practical aviation, golden hour jets, military recruitment aesthetic",

  // Classic cinema
  "2001-space-odyssey":
    "Visual aesthetic of 2001: A Space Odyssey with symmetrical precision, monolith mystery, Kubrick sterility",
  "clockwork-orange":
    "Visual aesthetic of A Clockwork Orange with ultraviolence aesthetics, white droog suits, Kubrick wide angle",
  "the-shining":
    "Visual aesthetic of The Shining with Overlook carpets, steadicam dread, Kubrick symmetry",
  "apocalypse-now":
    "Visual aesthetic of Apocalypse Now with napalm sunsets, river madness, Coppola excess",
  taxi_driver:
    "Visual aesthetic of Taxi Driver with rain-slicked New York, Bernard Herrmann isolation, Scorsese guilt",
  goodfellas:
    "Visual aesthetic of Goodfellas with Copa tracking shot, mob lifestyle, Scorsese energy",
  "pulp-fiction":
    "Visual aesthetic of Pulp Fiction with diner booths, nonlinear cool, Tarantino dialogue",
  "schindlers-list":
    "Visual aesthetic of Schindler's List with documentary black and white, girl in red coat, Spielberg gravity",
  "saving-private-ryan":
    "Visual aesthetic of Saving Private Ryan with Omaha Beach desaturation, handheld chaos, warfare reality",
  gladiator:
    "Visual aesthetic of Gladiator with Scott dust and blood, Colosseum spectacle, desaturated glory",
  "american-beauty":
    "Visual aesthetic of American Beauty with red rose petals, suburban dysfunction, plastic bag beauty",
  "lost-in-translation":
    "Visual aesthetic of Lost in Translation with Tokyo jet lag, Sofia Coppola loneliness, karaoke melancholy",
  "there-will-be-blood":
    "Visual aesthetic of There Will Be Blood with oil derrick flames, Day-Lewis intensity, Jonny Greenwood score",
  "social-network":
    "Visual aesthetic of The Social Network with deposition rooms, Fincher darkness, Harvard exclusion",
  "black-swan":
    "Visual aesthetic of Black Swan with ballet horror, mirror doubles, Aronofsky obsession",
  inception:
    "Visual aesthetic of Inception with dream architecture, folding Paris, Nolan puzzlebox",
  drive: "Visual aesthetic of Drive with neon Los Angeles, scorpion jacket, Refn silence and violence",
  "tree-of-life":
    "Visual aesthetic of The Tree of Life with cosmic scope, Malick whispers, memory and nature",
  "gone-girl":
    "Visual aesthetic of Gone Girl with McMansion horror, cool girl monologue, Fincher precision",
  "whiplash-film":
    "Visual aesthetic of Whiplash with jazz sweat, drum blood, Chazelle tempo and terror",
  "the-witch":
    "Visual aesthetic of The Witch with period accuracy, candlelit interiors, Eggers dread, New England doom",
  "hereditary-film":
    "Visual aesthetic of Hereditary with dollhouse frames, Ari Aster grief, miniature horror",
  "once-upon-time-hollywood":
    "Visual aesthetic of Once Upon a Time in Hollywood with 1969 Los Angeles, golden nostalgia, Tarantino memory",
  "portrait-of-a-lady":
    "Visual aesthetic of Portrait of a Lady on Fire with candlelit intimacy, painterly frames, female gaze",
  "power-of-the-dog":
    "Visual aesthetic of Power of the Dog with Montana vistas, repression, Campion Western",
  "the-northman":
    "Visual aesthetic of The Northman with Viking brutality, one-shot action, Eggers myth",
};

export const EFFECT_MAP: Record<string, string> = {
  "black-and-white":
    "Black and white conversion with rich tonal range, classic monochrome aesthetic",
  "black-mist":
    "Black mist diffusion filter creating dreamy halation around highlights, softened contrast",
  "bloom-glow":
    "Bloom glow effect with light bleeding from bright areas, ethereal luminosity",
  bokeh:
    "Pronounced bokeh with creamy out-of-focus areas, subject isolation, light orbs",
  "chromatic-aberration":
    "Chromatic aberration with color fringing at edges, analog imperfection, VHS aesthetic",
  "film-grain":
    "Visible film grain texture adding organic tactile quality, analog authenticity",
  "glitch-style":
    "Digital glitch effects with data corruption, RGB splits, cyberpunk error aesthetic",
  halftone:
    "Halftone pattern overlay with newspaper print aesthetic, pop art dots",
  "hologram-effect":
    "Holographic iridescence with rainbow light refraction, futuristic shimmer",
  "infrared-filter":
    "Infrared photography effect with white foliage, red sky, false color dreamscape",
  underexposed:
    "Intentionally underexposed with crushed shadows, moody darkness, low-key drama",
  overexposed:
    "Intentionally overexposed with blown highlights, dreamy brightness, ethereal wash",
  "lens-flare":
    "Visible lens flare with light streaks and artifacts, sun awareness, cinematic",
  vignette:
    "Strong vignette darkening frame edges, directing focus to center, vintage feel",
  "cross-process":
    "Cross-processed color shift with altered saturation, alternative lab aesthetic",
  "teal-orange":
    "Teal and orange color grade, Hollywood blockbuster complementary contrast",
  "bleach-bypass":
    "Bleach bypass look with reduced saturation, increased contrast, metallic skin",
  desaturated:
    "Heavily desaturated colors approaching monochrome, muted emotional distance",
};

export const ASPECT_RATIO_MAP: Record<string, string> = {
  "1:1": "Square 1:1 format, Instagram classic, symmetrical composition",
  "4:5": "Portrait 4:5 format, Instagram portrait, social media optimized",
  "3:2": "Classic photography 3:2 format, 35mm frame proportions",
  "16:9": "Widescreen 16:9 format, HD video standard, modern displays",
  "9:16": "Vertical 9:16 format, Stories and TikTok, mobile-first",
  "2:3": "Portrait 2:3 format, phone wallpaper, vertical emphasis",
  "21:9": "Ultra-widescreen 21:9 format, cinematic letterbox, scope",
  "2.35:1": "Anamorphic scope 2.35:1 format, cinema standard, epic width",
  "2.39:1": "Modern scope 2.39:1 format, IMAX compatible, theatrical",
  "4:3": "Classic TV 4:3 format, Academy ratio, vintage frame",
  "1.85:1": "Theatrical flat 1.85:1 format, American widescreen",
  "1.43:1": "IMAX 1.43:1 format, immersive height, Nolan ratio",
};

export const FOCAL_LENGTH_MAP: Record<string, string> = {
  "8mm": "8mm ultra-wide fisheye, extreme distortion, immersive POV",
  "14mm": "14mm ultra-wide, environmental context, architectural emphasis, dramatic perspective",
  "24mm": "24mm wide, journalistic standard, environmental portraiture with presence",
  "35mm": "35mm wide-normal, classic reportage, natural perspective with context",
  "50mm": "50mm standard, human vision match, honest rendering, classic portrait",
  "75mm": "75mm short telephoto, classic portrait length, gentle compression",
  "85mm": "85mm portrait prime, beautiful subject separation, flattering compression",
  "135mm": "135mm telephoto, compressed background, paparazzi intimacy from distance",
  "200mm": "200mm+ super telephoto, extreme compression, distant subject isolation, safari lens",
};

// Helper function to get all options for a category
export function getOptions(
  map: Record<string, string>
): Array<{ value: string; label: string }> {
  return Object.keys(map).map((key) => ({
    value: key,
    label: key
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  }));
}

// Scene angle library for multi-shot generation
export const SCENE_ANGLES = [
  { key: "establishing-wide", label: "Establishing Wide" },
  { key: "over-shoulder", label: "Over the Shoulder" },
  { key: "medium", label: "Medium Shot" },
  { key: "close-up", label: "Close Up" },
  { key: "extreme-close-up", label: "Extreme Close Up" },
  { key: "birds-eye", label: "Bird's Eye View" },
  { key: "low-angle", label: "Low Angle" },
  { key: "dutch-angle", label: "Dutch Angle" },
];
