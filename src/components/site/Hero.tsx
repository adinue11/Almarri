import hero from "@/assets/hero.jpeg";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden text-white">
      <img
        src={hero}
        alt="Luxury collection of attar, watch and sunglasses"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      <div className="relative h-full container-x flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.4em] text-gold mb-5">
            {t("hero.tag")}
          </span>
          <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] uppercase">
            {t("hero.title1")}<br />
            <span className="italic font-light">{t("hero.title2")}</span>
          </h1>
          <p className="mt-6 max-w-md text-base md:text-lg text-white/75">{t("hero.desc")}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-gold transition-colors"
            >
              {t("cta.explore")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 border border-white/40 px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors"
            >
              {t("cta.discover")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
