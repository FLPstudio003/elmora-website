import { useState } from "react";
import Header from "../components/Header";

export default function Katko() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "/katko/1.jpg",
    "/katko/2.jpg",
    "/katko/3.jpg",
    "/katko/4.jpg",
  ];

  return (
    <>
      <Header />

      <main className="w-full text-gray-900">

        {/* ================= HERO ================= */}
        <section className="px-6 pt-[120px] md:pt-[100px] pb-16 text-center">
          <div className="max-w-5xl mx-auto">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Katko Oy
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Fínsky výrobca riešení pre bezpečné riadenie elektrickej energie
              s viac ako 80-ročnou tradíciou.
            </p>

          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">

            <p className="text-gray-600 mb-6 leading-relaxed">
              Ako autorizovaný dodávateľ produktov <strong>Katko Oy</strong>
               prinášame spoľahlivé riešenia pre bezpečné riadenie elektrickej
              energie v priemyselných aplikáciách.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Katko poskytuje široké portfólio od základných spínacích zariadení
              až po špecializované riešenia navrhnuté pre maximálnu bezpečnosť,
              spoľahlivosť a dlhodobú prevádzku.
            </p>

            {/* SPÍNACIE ZARIADENIA */}
            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Spínacie zariadenia
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-10">
              <li>Bezpečnostné vypínače (hlavné a núdzové)</li>
              <li>Odpínače a odpínacie spínače</li>
              <li>Prepínače medzi zdrojmi energie</li>
              <li>Motorové a riadiace spínače</li>
            </ul>

            {/* POISTKY */}
            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Poistkové riešenia
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-10">
              <li>Poistkové odpínače</li>
              <li>Poistkové skrine a kombinované riešenia</li>
            </ul>

            {/* INŠTALÁCIE */}
            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Inštalačné riešenia
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-10">
              <li>Inštalačné skrine a rozvádzače</li>
              <li>Krabice a rozvodné boxy</li>
            </ul>

            {/* KOMPONENTY */}
            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Pripojovacie komponenty
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-10">
              <li>Svorkovnice</li>
              <li>Káblové konektory a priechodky</li>
            </ul>

            {/* PRÍSLUŠENSTVO */}
            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Príslušenstvo
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-10">
              <li>Pomocné kontakty</li>
              <li>Rukoväte a ovládacie prvky</li>
              <li>Montážne sady a kryty</li>
              <li>Káblové vývodky a uzemnenie</li>
            </ul>

            {/* ŠPECIÁLNE */}
            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Špecializované riešenia
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-16">
              <li>ATEX spínače (výbušné prostredie)</li>
              <li>EMC riešenia</li>
              <li>Nerezové a IP69K prevedenia</li>
              <li>UL/CSA certifikované produkty</li>
            </ul>

          </div>
        </section>

        

        {/* ================= LIGHTBOX ================= */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <img
              src={selectedImg}
              className="max-w-[90%] max-h-[90%] rounded-xl"
            />
          </div>
        )}

        {/* ================= CTA ================= */}
        <section className="px-6 pb-24 text-center">
          <div className="max-w-3xl mx-auto">

            <h3 className="text-2xl font-semibold mb-6">
              Máte záujem o produkty Katko?
            </h3>

            <p className="text-gray-600 mb-8">
              Kontaktujte nás a radi vám pripravíme riešenie na mieru.
            </p>

            <a
              href="/home#contact"
              className="bg-[#01382E] text-white px-8 py-3 rounded-full hover:bg-[#012b23] transition"
            >
              Kontaktovať nás
            </a>

          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-white relative">
          <div className="w-full h-px bg-black" />

          <div className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h4 className="font-semibold mb-4">ELMORA s.r.o.</h4>

            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Moderné technické riešenia pre náročné odvetvia.
            </p>

            <p className="text-[#01382E] font-medium mb-8">
              info@elmoraslovakia.sk | +421 952 099 751
            </p>

            <p className="text-xs text-gray-400">
              © 2026 ELMORA s.r.o.
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}