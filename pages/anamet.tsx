import Header from "../components/Header";

export default function Anamet() {
  return (
    <>
      <Header />

      <main className="w-full text-gray-900">

        {/* ================= HERO ================= */}
        <section className="px-6 pt-[120px] md:pt-[100px] pb-16 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Anamet Europe
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Anamet Europe je popredný európsky výrobca systémov pre ochranu káblov,
              vodičov a priemyselných rozvodov. Spoločnosť sa špecializuje na kovové
              hadice, flexibilné chráničky, potrubia a komplexné káblové ochranné
              systémy, ktoré zabezpečujú spoľahlivú ochranu v náročných podmienkach.
            </p>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">

            <p className="text-gray-600 mb-6 leading-relaxed">
              Portfólio zahŕňa nerezové hadice, kovové oplety, liquid-tight hadice,
              flexibilné kovové chráničky, potrubia pre kvapaliny a plyny, káblové
              priechodky a systémy pre tepelnú ochranu kabeláže. Produkty spĺňajú
              medzinárodné normy ako UL / CSA a IECEx / ATEX, čo ich predurčuje pre
              použitie aj v nebezpečných a výbušných prostrediach.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Riešenia Anamet Europe poskytujú vysokú odolnosť voči mechanickému
              poškodeniu, vibráciám, vlhkosti, chemikáliám a extrémnym teplotám,
              čím zabezpečujú dlhú životnosť a bezpečnosť prevádzky. Produkty sú
              ideálne pre priemysel, automotive, energetiku, železničnú dopravu,
              robotiku a strojárstvo, kde je kľúčová spoľahlivá ochrana kabeláže,
              potrubí a médií (kvapaliny / plyny).
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Portfolio:
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-16">
              <li>Nerezové hadice a kovové oplety</li>
              <li>Liquid-tight hadice a flexibilné kovové chráničky</li>
              <li>Potrubia pre kvapaliny a plyny</li>
              <li>Káblové priechodky a tepelná ochrana kabeláže</li>
            </ul>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 pb-24 text-center">
          <div className="flex justify-center gap-6 mt-6">

            
              href="/home#contact"
              className="bg-[#01382E] text-white px-8 py-3 rounded-full hover:bg-[#012b23] transition"
            >
              Kontaktovať nás
            </a>

            
              href="https://www.anameteurope.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#01382E] text-white px-8 py-3 rounded-full hover:bg-[#012b23] transition"
            >
              Navštíviť web Anamet Europe
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
}          </div>
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
                    alt={`Atex System ${i + 1}`}
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

            <a
              href="/home#contact"
              className="bg-[#01382E] text-white px-8 py-3 rounded-full hover:bg-[#012b23] transition"
            >
              Kontaktovať nás
            </a>

            <a
              href="https://www.atex-system.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#01382E] text-white px-8 py-3 rounded-full hover:bg-[#012b23] transition"
            >
              Navštíviť web Atex System
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
