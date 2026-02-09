import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center text-gray-600">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">

        <div className="text-xl font-semibold text-gray-800">
          ELMORA s.r.o.
        </div>

        <p className="max-w-xl text-sm leading-relaxed">
          Moderné technické riešenia pre náročné odvetvia.
          Spoľahlivosť, kvalita a inovácie v každom detaile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 text-green-600 font-medium">
          <a href="mailto:info@elmoraslovakia.sk">
            info@elmoraslovakia.sk
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="tel:+421912345678">
            +421 912 345 678
          </a>
        </div>

        <ScrollLink
          to="home"
          smooth
          duration={600}
          offset={-96}
          className="cursor-pointer mt-4 text-sm font-semibold text-green-600 hover:text-green-700 transition"
        >
          ↑ Späť hore
        </ScrollLink>

        <div className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} ELMORA s.r.o. Všetky práva vyhradené | Vytvorené spoločnosťou FLPstudio.sk
        </div>

      </div>
    </footer>
  );
}
