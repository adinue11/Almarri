import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { waGeneral } from "@/lib/whatsapp";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { key: "nav.attar", href: "#attar" },
  { key: "nav.perfume", href: "#perfume" },
  { key: "nav.watch", href: "#watch" },
  { key: "nav.sunglass", href: "#sunglass" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg md:text-xl font-extrabold tracking-[0.2em] uppercase">
            Jamal<span className="text-gold">·</span>Almari
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="relative text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:start-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <LanguageSwitcher />
          <a
            href={waGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("cta.enquireWa")}
            className="hidden sm:inline-flex items-center gap-2 ms-1 px-4 py-2 text-xs uppercase tracking-widest font-semibold border border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            {t("cta.enquire")}
          </a>
          <button aria-label="Menu" className="md:hidden p-2" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-wider py-1"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
