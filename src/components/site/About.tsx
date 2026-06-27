import about from "@/assets/about.jpeg";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
          <img
            src={about}
            alt="Jamal Almari boutique"
            width={1200}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t("about.tag")}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05]">
            {t("about.title1")} <span className="italic font-light">{t("about.title2")}</span> {t("about.title3")}
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">{t("about.p1")}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t("about.p2")}</p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "12+", v: t("about.years") },
              { k: "200+", v: t("about.brands") },
              { k: "10k", v: t("about.clients") },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl md:text-4xl font-extrabold text-gold">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
