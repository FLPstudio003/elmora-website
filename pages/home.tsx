import { Link as ScrollLink } from "react-scroll";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full text-gray-900">

        {/* ================= HERO + VALUE GRID ================= */}
        <section
          id="home"
          className="
            min-h-screen
            flex flex-col
            items-center
            text-center
            px-6
            pt-[120px] md:pt-[100px]
            pb-24
          "
        >
          <div className="max-w-5xl w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vitajte na stránke{" "}
              <span className="text-[#01382E]">ELMORA s.r.o.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Spoločnosť ELMORA s.r.o. prináša technicky precízne riešenia tam, kde spoľahlivosť rozhoduje.
              <br/>Každý projekt je pre nás jedinečný – staviame na dôvere, transparentnej komunikácii a
              dokonalosti v detailoch...
            </p>

            <ScrollLink
              to="about"
              smooth
              duration={600}
              offset={-100}
              className="
                inline-block
                bg-[#01382E]
                text-white
                px-10 py-4
                rounded-full
                text-lg font-semibold
                hover:bg-[#012b23]
                transition
                cursor-pointer
              "
            >
              Zistiť viac
            </ScrollLink>
          </div>

          {/* VALUE GRID */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              {
                title: "Kvalita bez kompromisov",
                text:
                  "Používame certifikované materiály a spolupracujeme výhradne s overenými partnermi, aby sme zabezpečili dlhodobú spoľahlivosť."
              },
              {
                title: "Spoľahlivý partner",
                text:
                  "Klientov sprevádzame celým procesom – od úvodnej konzultácie až po realizáciu a technickú podporu."
              },
              {
                title: "Technické inovácie",
                text:
                  "Implementujeme moderné technológie, ktoré zvyšujú efektivitu, bezpečnosť a udržateľnosť riešení."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="border border-[#01382E] rounded-2xl p-10 bg-white/80 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-[#01382E] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= O NÁS ================= */}
        <section
          id="about"
          className="min-h-screen px-6 pt-[120px] md:pt-[100px] pb-24 flex items-center"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10">
              O <span className="text-[#01382E]">nás</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Spoločnosť <strong>ELMORA s.r.o.</strong>prináša technické riešenia pre náročné prevádzky, kde rozhodujú kvalita,
              bezpečnosť a odolnosť. Naše produkty sú navrhnuté tak, aby zvládli extrémne podmienky a
              splnili najprísnejšie priemyselné štandardy. Ich využitie nachádza uplatnenie v
              poľnohospodárstve, vojenskom a leteckom priemysle, farmaceutickom sektore, petrochemii
              aj potravinárstve.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Každý projekt vnímame individuálne. Staviame na dlhodobej
              spolupráci, transparentnej komunikácii a dôraze na detail.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Kombináciou odbornosti, kvalitných materiálov a moderných
              technológií pomáhame firmám rásť a optimalizovať ich procesy.
            </p>
          </div>
        </section>



<section
  id="partners"
  className="min-h-screen px-6 pt-[120px] md:pt-[100px] pb-24 flex items-center"
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10">
      Oficiálne <span className="text-[#01382E]">zastúpenia</span>
    </h2>

    <p className="text-lg text-gray-600 mb-16">
      Spolupracujeme s renomovanými výrobcami a technologickými
      partnermi.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          link: "/qlight",
          logo: "/logos/qlight.png",
        },
        {
          link: "/rte",
          logo: "/logos/marchio.png",
        },
        {
          link: "/katko",
          logo: "/logos/katko.png",
        },
      ].map((p, i) => (
        <div
          key={i}
          className="border border-[#01382E] rounded-2xl p-10 bg-white/80 backdrop-blur flex flex-col items-center gap-6"
        >
          {/* LOGO */}
          <img
            src={p.logo}
            alt="partner logo"
            className="h-48 object-contain"
          />

          {/* CTA */}
          <Link href={p.link}>
            <button className="bg-[#01382E] text-white px-6 py-2 rounded-full hover:bg-[#012b23] transition">
              Zistiť viac
            </button>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* ================= KONTAKT ================= */}
        <section
          id="contact"
          className="min-h-screen px-6 pt-[120px] md:pt-[100px] pb-24 flex items-center"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Kontaktujte <span className="text-[#01382E]">nás</span>
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Máte otázky alebo záujem o spoluprácu? Radi s vami
                prejdeme vaše požiadavky a navrhneme riešenie na mieru.
              </p>

              <p className="text-lg text-gray-600">
                Sme tu pre vás – <strong>rýchlo</strong>,{" "}
                <strong>odborne</strong> a <strong>spoľahlivo</strong>.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="border border-[#01382E] rounded-2xl px-12 py-10 bg-white/80 backdrop-blur">
                <h3 className="text-xl font-semibold text-[#01382E] mb-4">
                  E-mail
                </h3>
                <p className="text-gray-600 mb-4">
                  Napíšte nám a odpovieme vám čo najskôr.
                </p>
                <p className="text-lg font-semibold text-[#01382E]">
                  info@elmoraslovakia.sk
                </p>
              </div>

              <div className="border border-[#01382E] rounded-2xl px-12 py-10 bg-white/80 backdrop-blur">
                <h3 className="text-xl font-semibold text-[#01382E] mb-4">
                  Telefón
                </h3>
                <p className="text-gray-600 mb-4">
                  Zavolajte nám a dohodneme si ďalší postup.
                </p>
                <p className="text-lg font-semibold text-[#01382E]">
                  +421 952 099 751
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-white relative">
          <div className="w-full h-px bg-black" />

          <div className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h4 className="font-semibold mb-4">ELMORA s.r.o.</h4>

            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Moderné technické riešenia pre náročné odvetvia.
              Spoľahlivosť, kvalita a inovácie v každom detaile.
            </p>

            <p className="text-[#01382E] font-medium mb-8">
              info@elmoraslovakia.sk &nbsp;|&nbsp; +421 952 099 751
            </p>

            <ScrollLink
              to="home"
              smooth
              duration={600}
              className="cursor-pointer text-sm text-gray-500 hover:text-[#01382E] transition"
            >
              ↑ Späť hore
            </ScrollLink>

            <p className="mt-10 text-xs text-gray-400">
              © 2026 ELMORA s.r.o. Všetky práva vyhradené | Vytvorené spoločnosťou FLPstudio.sk
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}
