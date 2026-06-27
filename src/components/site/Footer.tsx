import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-extrabold tracking-[0.2em] uppercase">
              Jamal<span className="text-gold">·</span>Almari
            </h3>
            <p className="mt-4 text-background/65 text-sm leading-relaxed">{t("footer.tagline")}</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 border border-background/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-gold-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">{t("footer.shop")}</h4>
            <ul className="space-y-3 text-sm text-background/75">
              <li><a href="#attar" className="hover:text-background">{t("nav.attar")}</a></li>
              <li><a href="#perfume" className="hover:text-background">{t("nav.perfume")}</a></li>
              <li><a href="#watch" className="hover:text-background">{t("nav.watch")}</a></li>
              <li><a href="#sunglass" className="hover:text-background">{t("nav.sunglass")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">{t("footer.company")}</h4>
            <ul className="space-y-3 text-sm text-background/75">
              <li><a href="#about" className="hover:text-background">{t("footer.about")}</a></li>
              <li><a href="#" className="hover:text-background">{t("footer.contact")}</a></li>
              <li><a href="#" className="hover:text-background">{t("footer.privacy")}</a></li>
              <li><a href="#" className="hover:text-background">{t("footer.terms")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">{t("footer.visit")}</h4>
            <ul className="space-y-3 text-sm text-background/75">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Jabal Ali Parco, Dubai, UAE</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/919895352709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  +91 9895 352 709 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>hello@jamalalmari.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/55">
          <p>© {new Date().getFullYear()} Jamal Almari. {t("footer.rights")}</p>
          <p className="uppercase tracking-widest">{t("footer.crafted")}</p>
        </div>
      </div>
    </footer>
  );
}
