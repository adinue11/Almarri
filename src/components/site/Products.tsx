import { useMemo, useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import { PRODUCTS, CATEGORIES, Category, Product } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useI18n } from "@/lib/i18n";

type SortKey = "az" | "za" | "popular" | "viewed";
const PAGE_SIZE = 12;

export function Products({
  filter,
  setFilter,
}: {
  filter: "All" | Category;
  setFilter: React.Dispatch<React.SetStateAction<"All" | Category>>;
}) {
  const { t, lang } = useI18n();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("popular");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const list = useMemo(() => {
    let r: Product[] = PRODUCTS;
    if (filter !== "All") r = r.filter((p) => p.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      r = r.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    const sorted = [...r];
    switch (sort) {
      case "az": sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "za": sorted.sort((a, b) => b.name.localeCompare(a.name)); break;
      case "popular": sorted.sort((a, b) => b.popularity - a.popularity); break;
      case "viewed": sorted.sort((a, b) => b.views - a.views); break;
    }
    return sorted;
  }, [filter, query, sort]);

  const shown = list.slice(0, visible);

  // Reset visible when filters change
  const onFilter = (f: "All" | Category) => { setFilter(f); setVisible(PAGE_SIZE); };
  const onQuery = (v: string) => { setQuery(v); setVisible(PAGE_SIZE); };
  const onSort = (v: SortKey) => { setSort(v); setVisible(PAGE_SIZE); };

  const catLabel = (c: "All" | Category) =>
    c === "All" ? t("products.all") : t(`nav.${c.toLowerCase()}`);

  return (
    <section id="products" className="py-20 md:py-32 bg-secondary">
      <div className="container-x">
        <div className="flex flex-col gap-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {t("products.tag")}
              </span>
              <h2 className="mt-3 text-4xl md:text-6xl font-extrabold uppercase leading-none">
                {t("products.title")}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="relative">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => onQuery(e.target.value)}
                  placeholder={t("products.search")}
                  className="ps-10 pe-4 py-2.5 w-full sm:w-64 bg-background border border-border focus:border-foreground outline-none text-sm"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => onSort(e.target.value as SortKey)}
                aria-label={t("sort.label")}
                className="px-4 py-2.5 bg-background border border-border focus:border-foreground outline-none text-sm uppercase tracking-wider"
              >
                <option value="popular">{t("sort.popular")}</option>
                <option value="viewed">{t("sort.viewed")}</option>
                <option value="az">{t("sort.az")}</option>
                <option value="za">{t("sort.za")}</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["All", ...CATEGORIES] as const).map((f) => (
              <button
                key={f}
                onClick={() => onFilter(f)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold border transition-all ${
                  filter === f
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent border-border hover:border-foreground"
                }`}
              >
                {catLabel(f)}
              </button>
            ))}
          </div>

          <div className="text-xs text-muted-foreground uppercase tracking-widest">
            {t("products.showing")} {Math.min(visible, list.length)} {t("products.of")} {list.length}
          </div>
        </div>

        {list.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">{t("products.noResults")}</p>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {shown.map((p) => {
                const msg = `${t("wa.enquireMsg")} ${p.name}. ${t("wa.priceMsg")}`;
                const href = getWhatsAppLink(msg);
                return (
                  <article
                    key={p.id}
                    className="group bg-background border border-transparent hover:border-border hover:shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--gold)_35%,transparent)] transition-all flex flex-col"
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.name}
                        width={800}
                        height={800}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover hover-zoom-img"
                      />
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("cta.enquireWa")}: ${p.name}`}
                        className="absolute bottom-0 inset-x-0 bg-[#25D366] text-white py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {t("cta.enquireWa")}
                      </a>
                    </div>
                    <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                          {t(`nav.${p.category.toLowerCase()}`)}
                        </span>
                        <h3 className="mt-1 font-semibold text-sm md:text-base line-clamp-1">
                          {p.name}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                          {p.description}
                        </p>
                      </div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 border border-foreground/80 py-2.5 text-[11px] uppercase tracking-widest font-semibold hover:bg-foreground hover:text-background transition-colors"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        {t("cta.enquire")}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {visible < list.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="px-10 py-4 text-xs uppercase tracking-widest font-semibold border border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  {t("cta.loadMore")}
                </button>
              </div>
            )}
          </>
        )}
        {/* lang dep marker for re-render */}
        <span className="hidden">{lang}</span>
      </div>
    </section>
  );
}
