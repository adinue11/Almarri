import p1 from "@/assets/p1.jpeg";
import p2 from "@/assets/p2.jpeg";
import p3 from "@/assets/p3.jpeg";
import p4 from "@/assets/p4.jpeg";

export type Category = "Attar" | "Perfume" | "Watch" | "Sunglass";

export type Product = {
  id: number;
  name: string;
  category: Category;
  image: string;
  description: string;
  popularity: number; // 0-100
  views: number;
};

const SEEDS: Record<Category, { base: string[]; tag: string[]; img: string }> = {
  Attar: {
    base: ["Royal Oud", "Amber Musk", "Saffron Rose", "Black Oud", "White Musk", "Sandal Heritage", "Velvet Amber", "Misk Tahara", "Dehn Al Oud", "Rose Taifi", "Hindi Oud", "Cambodi Oud"],
    tag: ["aged 12 years", "smoky amber depth", "warm rose finish", "soft musk dry-down", "long-lasting heritage scent", "bold leather notes", "smooth sandal core", "gentle floral trail"],
    img: p1,
  },
  Perfume: {
    base: ["Noir", "Velvet Rose", "Midnight Oud", "Amber Wood", "Imperial Bloom", "Royal Saffron", "Cedar Reign", "Smoke & Iris", "Onyx Leather", "Gold Bloom", "Black Vanilla", "Eclipse Musk"],
    tag: ["bold leather and pepper", "damask rose with oud", "vetiver and bergamot", "warm vanilla amber", "fresh citrus opening", "spicy oriental finish", "smoky woods base", "powdery floral heart"],
    img: p2,
  },
  Watch: {
    base: ["Chronograph Steel", "Heritage Gold", "Skeleton Automatic", "Diver Pro", "Classic Moonphase", "Pilot GMT", "Royal Tourbillon", "Sport Titanium", "Dress Slim", "Field Bronze", "Racing Carbon", "Marine Blue"],
    tag: ["sapphire crystal, 42mm", "automatic movement", "100m water resistance", "brushed steel bracelet", "leather strap, deployant clasp", "skeleton dial", "ceramic bezel", "exhibition caseback"],
    img: p3,
  },
  Sunglass: {
    base: ["Matte Wayfarer", "Aviator Classic", "Pilot Black", "Round Heritage", "Sport Shield", "Cat Eye Noir", "Square Bold", "Hexagon", "Clubmaster", "Oversized Lux", "Wrap Sport", "Titanium Edge"],
    tag: ["polarised UV400", "acetate frame", "gradient lens", "matte finish", "lightweight titanium", "anti-glare coating", "wrap-around fit", "scratch-resistant"],
    img: p4,
  },
};

function buildCategory(cat: Category, count: number, startId: number): Product[] {
  const seed = SEEDS[cat];
  const out: Product[] = [];
  let id = startId;
  for (let i = 0; i < count; i++) {
    const base = seed.base[i % seed.base.length];
    const variant = String.fromCharCode(65 + (Math.floor(i / seed.base.length) % 26)); // A,B,C...
    const num = Math.floor(i / (seed.base.length * 26)) + 1;
    const variantLabel = num > 1 ? `${variant}${num}` : variant;
    const name = `${base} — Edition ${variantLabel}`;
    const desc = seed.tag[i % seed.tag.length];
    out.push({
      id: id++,
      name,
      category: cat,
      image: seed.img,
      description: desc.charAt(0).toUpperCase() + desc.slice(1),
      popularity: ((i * 37 + (cat.length * 11)) % 100),
      views: 100 + ((i * 91 + cat.length * 53) % 9000),
    });
  }
  return out;
}

export const PRODUCTS: Product[] = (() => {
  const list: Product[] = [];
  let id = 1;
  for (const cat of ["Attar", "Perfume", "Watch", "Sunglass"] as Category[]) {
    const items = buildCategory(cat, 50, id);
    list.push(...items);
    id += items.length;
  }
  return list;
})();

export const CATEGORIES: Category[] = ["Attar", "Perfume", "Watch", "Sunglass"];
