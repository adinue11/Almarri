import { useI18n, Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "hi", label: "HI" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex items-center gap-1.5 p-2 hover:text-gold transition-colors text-xs font-semibold uppercase tracking-widest"
      >
        <Globe className="h-4 w-4" />
        {lang.toUpperCase()}
      </button>
      {open && (
        <div className="absolute end-0 mt-2 min-w-[100px] bg-background border border-border shadow-lg z-50 animate-fade-in">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full text-start px-4 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-secondary transition-colors ${
                lang === l.code ? "text-gold" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
