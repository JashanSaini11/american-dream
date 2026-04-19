// Slider Data
export const slides = [
  {
    id: 1,
    type: "video" as const,
    mediaSrc:
      "https://videos.ctfassets.net/0eh8v8vf1iw0/4kXkRNxm965EZg58SccZrF/4c0b54c91ae54268546fd440f8f1024a/Hero_Video_Desktop.mp4",
    headline: ["It's All Here"],
    sub: "Endless, mind blowing experiences — all in one place.",
    cta: "Watch Full Video",
    accent: "#00E5A0",
  },
  {
    id: 2,
    type: "image" as const,
    mediaSrc:
      "https://images.ctfassets.net/0eh8v8vf1iw0/l1toMXzyDA6jiQHB8q3sC/bc773110c7c8d9cddd9f8b382d37ebdd/HP-Desktop.png",
    headline: ["A New Era", "Of Retail"],
    sub: "The most dynamic retail mix in the region — from global brands to local gems.",
    cta: "Explore Retail",
    accent: "#0E2C73",
  },
  {
    id: 3,
    type: "image" as const,
    mediaSrc:
      "https://images.ctfassets.net/0eh8v8vf1iw0/5TJEXFKUcEjTPLABTn5hoH/f528fc158da0973fdce8cf2a162c86aa/NickU-General2024-Homepage-v4_Desktop.jpg",
    headline: ["Nickelodeon", "Universe"],
    sub: "North America's largest indoor theme park — right inside.",
    cta: "Leasing Opportunities",
    accent: "#89C058",
  },
  {
    id: 4,
    type: "image" as const,
    mediaSrc:
      "https://images.ctfassets.net/0eh8v8vf1iw0/3WWRWWPjuIvbEQdt6rGYtM/34fac37b82b0c8ffea0a0d38c990c806/DWWPDesktop_2x.webp",
    headline: ["DreamWorks", "Water Park"],
    sub: "The western hemisphere's largest indoor water park.",
    cta: "Partner With Us",
    accent: "#38BDF8",
  },
  {
    id: 5,
    type: "image" as const,
    mediaSrc:
      "https://images.ctfassets.net/0eh8v8vf1iw0/6THs0PUUCzKeJjZKIlzUuR/595d928ebb26c5cc7f35163eff66a0a6/Dining_Homepage-241205-v2_Desktop.jpg",
    headline: ["A Culinary", "Destination"],
    sub: "100+ concepts — from fast casual to fine dining.",
    cta: "Explore Dining",
    accent: "#F4A261",
  },
  {
    id: 6,
    type: "image" as const,
    mediaSrc:
      "https://images.ctfassets.net/0eh8v8vf1iw0/kUaeobN8BlzCPwg1E8D3l/8382cbd51989ddd2973677669df785e8/250304-Avenue_Homepage_Desktop.jpg",
    headline: ["The Avenue —", "Luxury Redefined"],
    sub: "The most prestigious luxury destination in the Americas.",
    cta: "Flagship Leasing",
    accent: "#eb008b",
  },
] as const;

export type Slide = (typeof slides)[number];

// StateSection Data

export const stats = [
  {
    value: 40,
    suffix: "M+",
    label: "Annual Visitors",
    desc: "More foot traffic than any mall in North America",
    accent: "#89C058",
  },
  {
    value: 3,
    suffix: "M Sq Ft",
    label: "Of Destination Space",
    desc: "Retail, dining, entertainment & luxury under one roof",
    accent: "#38BDF8",
  },
  {
    value: 450,
    suffix: "+",
    label: "Brands & Retailers",
    desc: "From global luxury flagships to iconic everyday brands",
    accent: "#eb008b",
  },
  {
    value: 15,
    suffix: "+",
    label: "World-Class Attractions",
    desc: "The largest indoor theme park & water park in the hemisphere",
    accent: "#F4A261",
  },
];

import type { Attraction } from "../components/ui/AttractionCards";

export const attractions: Attraction[] = [
  {
    name: "The Gameroom",
    bgGradient: "linear-gradient(rgb(0, 152, 219) 0%, rgb(71, 190, 232) 100%)",
    logo: "https://images.ctfassets.net/0eh8v8vf1iw0/7FCDB3cZbLIc3y9Y9ymiDU/e80255a9982339b6d460e7022d07b3a0/Gameroom-Attractions-InteractiveTile_Logo__1_.png",
    images: [
      "https://images.ctfassets.net/0eh8v8vf1iw0/2ISmrM3oW7ADaogZnNVeRC/4ac20c7923ca4f8a00769139b76f4e54/Gameroom-Attractions-InteractiveTile-250616_MrM.png",
    ],
    imageWidths: ["75%"],
    logoWidth: "90%",
    logoTop: "10%",
    buttonBg: "rgb(0, 152, 219)",
    buttonHoverBg: "#47BEE8",
    buttonColor: "#fff",
    variant: "single",
    href: "#nickelodeon",
  },
  {
    name: "Learn&Play",
    bgGradient: "linear-gradient(rgb(108, 194, 74) 0%, rgb(47, 114, 62) 100%)",
    logo: "https://images.ctfassets.net/0eh8v8vf1iw0/3rPlVwZvgyF0J5cRzYFTFn/d00fe45060848c81a3fe99506d6b164d/SesameStreet-LearnAndPlay-Logo_Primary-Color-Container.webp",
    images: [],
    imageWidths: [],
    logoWidth: "100%",
    buttonBg: "rgb(255, 212, 0)",
    buttonHoverBg: "#00953B",
    buttonColor: "#fff",
    variant: "logo",
    href: "#waterpark",
  },
  {
    name: "The Rink Arena",
    bgGradient: "linear-gradient(rgb(2, 41, 140) 0%, rgb(222, 227, 248) 100%)",
    logo: "https://images.ctfassets.net/0eh8v8vf1iw0/4WEmFqO0hP6Ek7YV4v1eZC/3e52a279f9cb0e004b49a0bfdb1cc971/The_Rink_Logo_for_Homepage.webp",
    images: [],
    imageWidths: [],
    buttonBg: "rgb(238, 241, 255)",
    buttonHoverBg: "#02298C",
    buttonColor: "#000",
    variant: "logo",
    href: "#bigsnow",
  },
  {
    name: "Angry Birds Mini Golf",
    bgGradient: "linear-gradient(rgb(90, 0, 29) 0%, rgb(210, 17, 62) 100%)",
    logo: "https://images.ctfassets.net/0eh8v8vf1iw0/1pcs9xFGBjUwLRMB0RT3b9/476911b2d80942232c17688f07afd95b/ANGRY_BIRDS_MINI_GOLF_LOGO_1.png",
    images: [
      "https://images.ctfassets.net/0eh8v8vf1iw0/2VZwsoLFK818hV0AlZYnr4/bb99e203e2f0586a37435f64819633b6/Brid.webp",
      "https://images.ctfassets.net/0eh8v8vf1iw0/TjrtWMDRcTbNAfV5swVgs/0c26dad47642297dbe3d1535257d50d7/Pig.webp",
    ],
    imageWidths: ["52%", "50%"],
    logoWidth: "40%",
    logoTop: "10%",
    buttonBg: "rgb(208, 238, 197)",
    buttonHoverBg: "#A10033",
    variant: "characters",
    imageLayout: "angrybirds",
    buttonColor: "#fff",
    href: "#sealife",
  },
  {
    name: "LEGOLAND Discovery",
    bgGradient: "linear-gradient(rgb(233, 172, 0) 0%, rgb(255, 207, 0) 100%)",
    logo: "https://images.ctfassets.net/0eh8v8vf1iw0/3ZYopyAHo3gUIiTA6iasIk/ed75c785260b2363625c48d73cb3e21e/Legoland_Icon.png",
    images: [
      "https://images.ctfassets.net/0eh8v8vf1iw0/6TZXNI2fhYdUDp7a5DRa4B/4674a6e437544e83db9416cf0a9b618d/Legoland_-_Character_1.webp",
      "https://images.ctfassets.net/0eh8v8vf1iw0/013YJklqh9VQplnaNfABZ5/118f25b7466ca3a1ad89946b6edc93c5/Legoland_-_Character_2.webp",
    ],
    imageWidths: ["60%", "58%"],
    logoWidth: "90%",
    logoTop: "10%",
    buttonBg: "rgb(233, 172, 0)",
    buttonHoverBg: "#006DB7",
    variant: "characters",
    imageLayout: "lego",
    buttonColor: "#000",
    href: "#legoland",
  },
  {
    name: "Sea Life Aquarium",
    bgGradient: "linear-gradient(rgb(108, 57, 230) 0%, rgb(49, 205, 255) 100%)",
    logo: "https://images.ctfassets.net/0eh8v8vf1iw0/3jH6KYCX4G1SYASLqbPuJ1/356f147201e990009a2349d2cd4df859/Sea_Life_Logo.webp",
    images: [],
    imageWidths: [],
    buttonBg: "rgb(233, 73, 188)",
    buttonHoverBg: "#6C39E7",
    variant: "logo",
    buttonColor: "#000",
    href: "#minigolf",
  },
];
