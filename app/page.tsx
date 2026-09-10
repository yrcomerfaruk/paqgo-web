"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Language = "EN" | "TR" | "DE" | "FR";

const languageNames: Record<Language, string> = {
  EN: "English",
  TR: "Türkçe",
  DE: "Deutsch",
  FR: "Français",
};

const content = {
  EN: {
    hero: "PAQGO IS A MANIFESTO OF MODERN SNEAKER CULTURE AND CONTEMPORARY STREETWEAR. CREATED AT THE INTERSECTION OF URBAN SUBMODERNISM, ARCHITECTURAL SILHOUETTES, AND UNCOMPROMISING AESTHETICS. WE CURATE HIGH-END FOOTWEAR, HEAVYWEIGHT GARMENTS, AND ACCENTED ACCESSORIES FOR THOSE WHO SEE CULTURAL AUTONOMY NOT MERELY AS STYLE, BUT AS AN IDENTITY.",
    status: "COLLECTION 01 / COMING SOON",
    placeholder: "ENTER EMAIL",
    success: "INDEXED.",
  },
  TR: {
    hero: "PAQGO, MODERN SNEAKER KÜLTÜRÜNÜN VE ÇAĞDAŞ SOKAK MODASININ ELEGAN BİR MANİFESTOSUDUR. ŞEHİR ALT KÜLTÜRÜNÜN, MİMARİ SİLÜETLERİN VE TAVİZSİZ BİR ESTETİĞİN KESİŞİMİNDE DOĞDU. SNEAKER FARKINDALIĞINI YÜKSEK SEGMENT GİYİM VE ÖZEL AKSESUARLARLA BİR ARAYA GETİRİYORUZ. KÜLTÜREL BAĞIMSIZLIĞI SADECE BİR TARZ DEĞİL, BİR DİSİPLİN VE KİMLİK OLARAK GÖRENLER İÇİN.",
    status: "KOLEKSİYON 01 / YAKINDA",
    placeholder: "E-POSTA GİRİN",
    success: "LİSTEYE EKLENDİN.",
  },
  DE: {
    hero: "PAQGO IST EIN MANIFEST DER MODERNEN SNEAKER-KULTUR UND ZEITGENÖSSISCHEN HIGH STREETWEAR. ENTSTANDEN AN DER SCHNITTSTELLE VON URBANEM SUBMODERNISMUS UND ARCHITEKTONISCHEN SILHOUETTEN. WIR KURATIEREN PREMIUM FOOTWEAR, SCHWERE TEXTILIEN UND ACCESSOIRES.",
    status: "KOLLEKTION 01 / DEMNÄCHST",
    placeholder: "E-MAIL EINGEBEN",
    success: "INIZIERT.",
  },
  FR: {
    hero: "PAQGO EST UN MANIFESTE DE LA CULTURE SNEAKER MODERNE ET DU STREETWEAR CONTEMPORAIN. CRÉÉ À L'INTERSECTION DU SUBMODERNISME URBAIN ET DES SILHOUETTES ARCHITECTURALES. NOUS CONCEVONS DES CHAUSSURES PREMIUM, DES VÊTEMENTS LOURDS ET DES ACCESSOIRES PRÉCIS.",
    status: "COLLECTION 01 / BIENTÔT",
    placeholder: "ENTREZ E-MAIL",
    success: "ENREGISTRÉ.",
  },
};

export default function ComingSoon() {
  const [lang, setLang] = useState<Language>("EN");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const toggleLang = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsLangOpen((prev) => !prev);
  };

  const selectLanguage = (item: Language, e?: React.SyntheticEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setLang(item);
    setIsLangOpen(false);
  };

  return (
    <main className="min-h-screen md:h-screen w-full max-w-full overflow-x-hidden bg-black text-white font-sans flex flex-col justify-between p-6 md:p-10 lg:p-12 selection:bg-white selection:text-black antialiased relative">
      {/* HEADER */}
      <header className="relative z-50 w-full flex justify-between items-center shrink-0">
        <div className="relative w-20 h-6 lg:w-28 lg:h-8">
          <Image
            src="/logo.png"
            alt="PAQGO Logo"
            fill
            sizes="(max-width: 1024px) 80px, 112px"
            className="object-contain object-left"
            priority
          />
        </div>

        {/* DİL SEÇİMİ */}
        <div className="relative z-50" ref={dropdownRef}>
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center space-x-1.5 text-[10px] tracking-widest text-zinc-400 hover:text-zinc-200 transition-colors bg-zinc-950 border border-zinc-800/60 px-2.5 py-1.5 rounded-lg select-none cursor-pointer"
            aria-label="Select Language"
          >
            <svg
              className="w-3 h-3 text-zinc-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="font-normal text-zinc-300">{lang}</span>
            <span className="text-[7px] text-zinc-600">▼</span>
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-zinc-950 border border-zinc-800/80 shadow-2xl z-50 p-1 rounded-xl backdrop-blur-md">
              {(["EN", "TR", "DE", "FR"] as Language[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={(e) => selectLanguage(item, e)}
                  className={`w-full text-left px-2.5 py-1.5 text-[9px] tracking-wider flex justify-between items-center transition-all rounded-md select-none cursor-pointer ${
                    lang === item
                      ? "bg-zinc-900 text-white font-medium"
                      : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white"
                  }`}
                >
                  <span>{languageNames[item]}</span>
                  <span className="text-[8px] text-zinc-600">{item}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* CENTER CONTENT */}
      <section className="relative z-10 my-auto py-8 md:py-0 w-full max-w-4xl mx-auto grid grid-cols-1 gap-8 lg:gap-10 items-center">
        <div className="flex flex-col justify-center w-full">
          <p className="text-[11px] lg:text-[12px] xl:text-[13px] font-light tracking-wider uppercase leading-relaxed text-zinc-300 mb-6 text-left">
            {content[lang].hero}
          </p>

          <div className="text-[9px] tracking-[0.25em] text-zinc-600 uppercase font-mono mb-6 text-left">
            [{content[lang].status}]
          </div>

          {submitted ? (
            <div className="text-[10px] tracking-widest text-zinc-400 border-b border-zinc-800 pb-2 font-mono uppercase inline-block">
              {content[lang].success}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center border-b border-zinc-800 focus-within:border-zinc-500 transition-colors pb-1 w-full sm:max-w-xs md:max-w-full md:w-full relative z-20">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content[lang].placeholder}
                className="bg-transparent text-zinc-300 text-[10px] tracking-widest focus:outline-none w-full placeholder:text-zinc-700 uppercase py-1 font-light"
              />
              <button
                type="submit"
                aria-label="Submit"
                className="text-zinc-500 hover:text-zinc-200 transition-colors pl-2 pr-1 cursor-pointer shrink-0"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 w-full flex justify-between items-end text-[9px] tracking-widest text-zinc-600 uppercase font-light shrink-0 pt-4 md:pt-0">
        <div>© {new Date().getFullYear()} PAQGO</div>
        <div>ALL RIGHTS RESERVED</div>
      </footer>
    </main>
  );
}