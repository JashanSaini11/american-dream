// Slider Data
export const slides = [
  {
    id: 1,
    type: "video" as const,
    mediaSrc:
      "https://videos.ctfassets.net/0eh8v8vf1iw0/4kXkRNxm965EZg58SccZrF/4c0b54c91ae54268546fd440f8f1024a/Hero_Video_Desktop.mp4",
    eyebrow: "It's All Here",
    headline: ["Beyond Shopping.", "Beyond Imagination."],
    sub: "Endless, mind blowing experiences — all in one place.",
    cta: "Watch Full Video",
    accent: "#00E5A0",
  },
  {
    id: 2,
    type: "image" as const,
    mediaSrc:
      "https://images.ctfassets.net/0eh8v8vf1iw0/l1toMXzyDA6jiQHB8q3sC/bc773110c7c8d9cddd9f8b382d37ebdd/HP-Desktop.png",
    eyebrow: "Retail",
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
    eyebrow: "Entertainment",
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
    eyebrow: "Attractions",
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
    eyebrow: "Dining & Lifestyle",
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
    eyebrow: "Luxury",
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
