import Header from "../components/Header";

export default function RTE() {
  return (
    <>
      <Header />

      <main className="w-full text-gray-900">

        {/* ================= HERO ================= */}
        <section className="px-6 pt-[120px] md:pt-[100px] pb-16 text-center">
          <div className="max-w-5xl mx-auto">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              R.T.E. componenti
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Taliansky výrobca izolačných návlekov a priemyselných komponentov
              s viac ako 60-ročnou tradíciou.
            </p>

          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">

            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>R.T.E. componenti</strong> je talianska spoločnosť so sídlom
              v Pandino (CR), ktorá pôsobí v priemyselnom sektore už viac ako 60 rokov.
              Je považovaná za referenčný bod v oblasti izolačných návlekov a
              priemyselných riešení.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Produkty a riešenia
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-10">
              <li>
                Izolačné návleky a ochranné kryty (PVC, silikón, sklenené vlákno)
              </li>
              <li>
                Pletené a zmršťovacie izolačné riešenia
              </li>
              <li>
                Alarmové signalizačné zariadenia pre priemysel
              </li>
              <li>
                Riešenia pre energetiku, dopravu a chemický priemysel
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Typy izolačných prvkov
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-10">
              <li>Teplom zmršťovateľné návleky (heat-shrink tubing)</li>
              <li>Silikónové vysokoteplotné návleky</li>
              <li>Sklenené návleky so silikónovým povrchom</li>
              <li>Pletené (expandovateľné) ochranné návleky</li>
              <li>PVC izolačné návleky</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Servis a podpora
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-10">
              <li>Expedícia objednávok do 24–48 hodín</li>
              <li>Technická podpora a návrh riešení na mieru</li>
              <li>Globálne dodávky po celom svete</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#01382E]">
              Certifikácie
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-10">
              <li>ISO 9001:2015</li>
              <li>UL</li>
              <li>CSA</li>
              <li>RoHS (RoHS 2 / RoHS 3)</li>
              <li>REACH</li>
            </ul>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 pb-24 text-center">
          <div className="max-w-3xl mx-auto">

            <h3 className="text-2xl font-semibold mb-6">
              Máte záujem o produkty R.T.E.?
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