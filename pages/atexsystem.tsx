import Header from "../components/Header";

export default function AtexSystem() {
  return (
    <>
      <Header />

      <main className="w-full text-gray-900">

        {/* ================= HERO ================= */}
        <section className="px-6 pt-[120px] md:pt-[100px] pb-16 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atex System
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Atex System je francúzsky špecialista na návrh, výrobu a dodávku elektrických
              zariadení do výbušného prostredia (ATEX/IECEx). Spoločnosť poskytuje komplexné
              riešenia pre priemyselné odvetvia ako ropný a plynárenský priemysel, chemický
              a farmaceutický sektor či potravinárstvo.
            </p>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">

            <p className="text-gray-600 mb-6 leading-relaxed">
              Zameriavame sa na vývoj a výrobu certifikovaných rozvádzačov, osvetlenia,
              riadiacich systémov a technológií pre nebezpečné zóny, kde je bezpečnosť
              kľúčová. Naše služby zahŕňajú inžiniering, projektovanie, testovanie,
              certifikáciu, montáž aj technickú podporu.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Vďaka dlhoročným skúsenostiam a realizáciám po celom svete ponúkame
              spoľahlivé riešenia aj pre extrémne prevádzkové podmienky. <strong>Atex System</strong>{" "}
              je partner, na ktorého sa môžete spoľahnúť pri zabezpečení bezpečnosti
              a súladu s ATEX normami.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Portfolio:
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-16">
              <li>Certifikované rozvádzače pre výbušné prostredia</li>
              <li>Osvetlenie do nebezpečných zón</li>
              <li>Riadiace systémy a technológie ATEX/IECEx</li>
              <li>Inžiniering, projektovanie a certifikácia</li>
            </ul>

          </div>
        </section>

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
