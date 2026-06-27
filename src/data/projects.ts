export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  gallery?: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Sendo Ramen",
    category: "Restaurant / Branding",
    description: "Water is the soul of every great bowl. Sendo Ramen was born from the concept of 'ramen from the stream' — a newly opened restaurant where every element flows with intention.",
    image: "/images/framer01.png",
    tags: ["Logo Design", "Art Direction", "Branding"],
    gallery: ["/images/work01.jpg", "/images/work02.jpg", "/images/work03.jpg"],
  },
  {
    id: "02",
    title: "RosTurbo",
    category: "Food / Branding",
    description: "Forty years of flavour — finally matched by a brand that deserves it. RosTurbo is a beloved braised duck noodle shop with deep roots and loyal regulars.",
    image: "/images/framer02.png",
    tags: ["Branding", "Logo Design", "Copywriting"],
    gallery: ["/images/work02.jpg", "/images/work03.jpg", "/images/work01.jpg"],
  },
  {
    id: "03",
    title: "My Job is Pâté",
    category: "Food / Packaging Design",
    description: "The name says it all — and the brand had to live up to it. My Job is Pâté is a food brand with singular focus and real craft behind it.",
    image: "/images/framer03.jpg",
    tags: ["Logo Design", "Packaging Design", "Art Direction"],
    gallery: ["/images/work03.jpg", "/images/work01.jpg", "/images/work02.jpg"],
  },
  {
    id: "04",
    title: "kouign.",
    category: "Cafe / Branding",
    description: "Lopburi has more to offer than lotus fields — it has kouign. A café that doesn't shout, but draws people in anyway. We built the brand from the ground up.",
    image: "/images/framer04.png",
    tags: ["Logo Design", "Packaging Design", "Branding"],
    gallery: ["/images/work01.jpg", "/images/work03.jpg", "/images/work02.jpg"],
  },
  {
    id: "05",
    title: "Delta",
    category: "Construction / Branding",
    description: "The construction industry needed a workshop brand — one that didn't look like a government brochure. Delta is a knowledge platform for builders and contractors.",
    image: "/images/framer05.png",
    tags: ["Content", "Logo Design", "Art Direction"],
    gallery: ["/images/work02.jpg", "/images/work01.jpg", "/images/work03.jpg"],
  },
  {
    id: "06",
    title: "Farm D",
    category: "Livestock / Packaging Design",
    description: "Thai farmers work hard. They deserve a brand that respects that. Farm D is CPF's livestock feed brand — built from the ground up with a clear purpose.",
    image: "/images/framer06.png",
    tags: ["Brand Strategy", "Packaging", "Art Direction"],
    gallery: ["/images/work03.jpg", "/images/work02.jpg", "/images/work01.jpg"],
  },
  {
    id: "07",
    title: "Canva Creator Thailand",
    category: "Online Platform / Templates",
    description: "Explore Designer B's portfolio — branding, logo design, and art direction across restaurants, cafés, and national brands in Thailand.",
    image: "/images/framer07.png",
    tags: ["Art Direction", "Logo Design", "Branding"],
    gallery: [
      "/images/canva-creator-1.png",
      "/images/canva-creator-2.png",
      "/images/canva-creator-3.png",
      "/images/canva-creator-4.png"
    ],
  }
];
