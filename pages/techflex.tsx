import { useState } from "react";
import Header from "../components/Header";

export default function Techflex() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "/techflex/tf1.jpg",
    "/techflex/tf2.jpg",
    "/techflex/tf3.jpg",
    "/techflex/tf4.jpg",
  ];

  return (
    <>
      <Header />

      <main className="w-full text-gray-900">

        {/* ================= HERO ================= */}
        <section className="px-6 pt-[120px] md:pt-[100px] pb-16 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Techflex
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Techflex je americký výrobca s viac ako 50-ročnou tradíciou, špecializujúci sa na
              ochranu kabeláže a cable management. Spoločnosť patrí medzi lídrov v oblasti
              opletených hadíc a technických riešení pre priemyselné aplikácie.
            </p>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">

            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Techflex</strong> predstavuje spoľahlivé riešenie pre ochranu káblov,
              vodičov a káblových zväzkov. Opletené hadice a ochranné návleky zabezpečujú
              efektívny cable management, organizáciu kabeláže a dlhodobú ochranu proti
              poškodeniu.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Produkty sú navrhnuté na ochranu proti oderu, vibráciám, vysokým teplotám,
              UV žiareniu a chemickým vplyvom, čím zvyšujú životnosť a spoľahlivosť kabeláže.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Portfolio:
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-16">
              <li>Expandovateľné oplety (braided sleeving)</li>
              <li>PET a nylonové hadice</li>
              <li>Flexibilné káblové chráničky</li>
              <li>Tepelne odolné ochranné systémy</li>
            </ul>

          </div>
        </section>

        {/* ================= GALÉRIA ================= */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-12">
              Produkty
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="cursor-pointer overflow-hidden rounded-2xl border border-[#01382E] bg-white/80 backdrop-blur"
                  onClick={() => setSelectedImg(img)}
                >
                  <img
                    src={img}
                    alt={`Techflex ${i + 1}`}
                    className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>

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
          <div className="flex justify-center gap-6 mt-6">

            
              href="/home#contact"
              className="bg-[#01382E] text-white px-8 py-3 rounded-full hover:bg-[#012b23] transition"
            >
              Kontaktovať nás
            </a>

            
              href="https://www.techflex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#01382E] text-white px-8 py-3 rounded-full hover:bg-[#012b23] transition"
            >
              Navštíviť web Techflex
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
