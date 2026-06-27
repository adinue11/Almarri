import attar from "@/assets/cat-attar.jpeg";
import perfume from "@/assets/cat-perfume.jpeg";
import watch from "@/assets/cat-watch.jpeg";
import sunglass from "@/assets/cat-sunglass.jpeg";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Category } from "@/lib/products";

const CATS = [
  { key: "Attar", img: attar, tag: "Heritage" },
  { key: "Perfume", img: perfume, tag: "Signature" },
  { key: "Watch", img: watch, tag: "Timepieces" },
  { key: "Sunglass", img: sunglass, tag: "Eyewear" },
];

export function Categories({
  onCategorySelect, 
}: {
  onCategorySelect: (category:Category) => void;
}) {
  const { t } = useI18n();
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {t("cat.tag")}
            </span>
            <h2 className="mt-3 text-4xl md:text-6xl font-extrabold uppercase leading-none">
              {t("cat.title")}
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">{t("cat.desc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CATS.map((c) => (
            <button
              key={c.key}
              onClick={() => {
                onCategorySelect(c.key as Category);
                document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
                });
              }}
              className="group relative block aspect-[4/5] overflow-hidden bg-muted w-full text-left">

              <img
                src={c.img}
                alt={c.key}
                width={800}
                height={1000}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover hover-zoom-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <span className="self-start text-[10px] uppercase tracking-[0.3em] bg-white/10 backdrop-blur-sm px-3 py-1 border border-white/20">
                  {c.tag}
                </span>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase">{c.key}</h3>
                  <span className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center transition-all group-hover:bg-gold group-hover:border-gold group-hover:text-gold-foreground">
                    <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}