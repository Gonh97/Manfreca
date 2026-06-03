import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../assets/46ccb88e42c12599f144f5e241ffb0fa8cef1b2.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["inicio", "filosofia", "soluciones", "obras", "flota"];
      let current = "inicio";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to change active section when it's near the top of viewport
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClasses = (section: string) => {
    const isActive = activeSection === section;
    return `font-['Inter'] text-sm px-6 py-2 rounded-full font-medium transition-all duration-500 ease-in-out ${
      isActive
        ? "text-[#000814] bg-[#FFC300] shadow-sm"
        : "text-[#E8E8EE] hover:text-[#FFC300]"
    }`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/10 py-4" 
          : "pt-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center h-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isScrolled ? "justify-start" : "justify-between"}`}>
          
          {/* Left: Logo (Hides on scroll) */}
          <div className={`flex-shrink-0 flex items-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isScrolled ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100 mr-8"}`}>
            <div className="flex items-center gap-2">
              <ImageWithFallback src={logoImage} alt="Manfreca Logo" className="h-8 md:h-10 w-auto object-contain drop-shadow-sm" />
            </div>
          </div>
          
          {/* Center/Left: Desktop Navigation (Pill shape) */}
          <div className={`hidden lg:flex items-center backdrop-blur-md rounded-full p-1.5 border transition-all duration-700 ${isScrolled ? "bg-black/20 border-transparent shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" : "bg-[#4A4A5A]/30 border-[#E8E8EE]/10"} ${isScrolled ? "mr-auto" : ""}`}>
            <a href="#inicio" className={getLinkClasses("inicio")}>Inicio</a>
            <a href="#filosofia" className={getLinkClasses("filosofia")}>Filosofía</a>
            <a href="#soluciones" className={getLinkClasses("soluciones")}>Soluciones</a>
            <a href="#obras" className={getLinkClasses("obras")}>Proyectos</a>
            <a href="#flota" className={getLinkClasses("flota")}>Flota</a>
          </div>

          {/* Right: CTA */}
          <div className={`hidden lg:flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`}>
            <a 
              href="https://yang-quick-28849360.figma.site" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-['Inter'] text-sm text-[#000814] bg-[#FFC300] px-6 py-2.5 rounded-full font-semibold hover:bg-white transition-all shadow-md"
            >
              Manual
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#contacto" 
              className="group flex items-center gap-2 font-['Inter'] text-sm text-[#000814] bg-[#FFC300] px-6 py-2.5 rounded-full font-semibold hover:bg-white transition-all shadow-md"
            >
              Hablemos
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#000814]/95 backdrop-blur-md border-t border-[#4A4A5A]/20 pb-6 shadow-xl">
          <div className="px-4 py-6 space-y-2 flex flex-col items-center">
            <a href="#inicio" onClick={() => setIsOpen(false)} className={`font-['Barlow'] text-2xl py-2 transition-colors ${activeSection === 'inicio' ? 'text-[#FFC300]' : 'text-white'}`}>Inicio</a>
            <a href="#filosofia" onClick={() => setIsOpen(false)} className={`font-['Barlow'] text-2xl py-2 transition-colors ${activeSection === 'filosofia' ? 'text-[#FFC300]' : 'text-white'}`}>Filosofía</a>
            <a href="#soluciones" onClick={() => setIsOpen(false)} className={`font-['Barlow'] text-2xl py-2 transition-colors ${activeSection === 'soluciones' ? 'text-[#FFC300]' : 'text-white'}`}>Soluciones</a>
            <a href="#obras" onClick={() => setIsOpen(false)} className={`font-['Barlow'] text-2xl py-2 transition-colors ${activeSection === 'obras' ? 'text-[#FFC300]' : 'text-white'}`}>Proyectos</a>
            <a href="#flota" onClick={() => setIsOpen(false)} className={`font-['Barlow'] text-2xl py-2 transition-colors ${activeSection === 'flota' ? 'text-[#FFC300]' : 'text-white'}`}>Flota</a>
            <div className="flex flex-col gap-3 mt-4 w-full max-w-[200px]">
              <a href="https://yang-quick-28849360.figma.site" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 font-['Barlow'] text-xl text-[#000814] bg-[#FFC300] px-8 py-3 rounded-full">
                Manual
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 font-['Barlow'] text-xl text-[#000814] bg-[#FFC300] px-8 py-3 rounded-full">
                Hablemos
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
