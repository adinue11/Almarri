import promo from "@/assets/promo.jpeg";
import { MessageCircle } from "lucide-react";
import { waGeneral } from "@/lib/whatsapp";
import { useI18n } from "@/lib/i18n";

export function Promo() {
  const { t } = useI18n();
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden text-white">
      <img
        src={promo}
        alt="Seasonal collection promotion"
        width={1920}
        height={700}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative h-full container-x flex flex-col items-center justify-center text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-gold mb-4">{t("promo.tag")}</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase max-w-3xl text-balance leading-tight">
          {t("promo.title")}
        </h2>
        <p className="mt-5 max-w-xl text-white/80">{t("promo.desc")}</p>
        <a
          href={waGeneral()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 group inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          {t("cta.enquireWa")}
        </a>
      </div>
    </section>
  );
}
