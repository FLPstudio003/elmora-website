import { useEffect, useState } from "react";
import { Link as ScrollLink, scrollSpy } from "react-scroll";
import { FaEnvelope, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const navItems = [
    { id: "home", label: "Domov" },
    { id: "about", label: "O nás" },
    { id: "partners", label: "Oficiálne zastúpenia" },
    { id: "contact", label: "Kontakt" },
  ];

  const navLinkClasses = (id: string) =>
    `cursor-pointer font-medium px-4 py-2 rounded-md transition ${
      activeSection === id
        ? "bg-[#01382E] text-white"
        : "text-gray-700 hover:text-[#01382E]"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_header.png"
            alt="ELMORA"
            width={200}
            height={60}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy
              smooth
              duration={600}
              offset={-90}
              onSetActive={() => setActiveSection(item.id)}
              className={navLinkClasses(item.id)}
            >
              {item.label}
            </ScrollLink>
          ))}

          <a
            href="mailto:info@elmoraslovakia.sk"
            className="text-gray-600 hover:text-[#01382E] ml-2"
            title="Napísať e-mail"
          >
            <FaEnvelope size={18} />
          </a>

          <a
            href="tel:+421952099751"
            className="text-gray-600 hover:text-[#01382E]"
            title="Zavolať"
          >
            <FaPhone size={18} />
          </a>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-[#01382E]"
          aria-label="Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-2">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy
                smooth
                duration={600}
                offset={-90}
                onSetActive={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={navLinkClasses(item.id)}
              >
                {item.label}
              </ScrollLink>
            ))}

            <div className="flex gap-4 mt-4 pt-4 border-t">
              <a
                href="mailto:info@elmoraslovakia.sk"
                className="text-gray-600 hover:text-[#01382E]"
              >
                <FaEnvelope size={18} />
              </a>

              <a
                href="tel:+421952099751"
                className="text-gray-600 hover:text-[#01382E]"
              >
                <FaPhone size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
