import image_46ccb88ec42c12599f144f5e241ffb0fa8cef1b2 from "../../assets/46ccb88ec42c12599f144f5e241ffb0fa8cef1b2.png";
import logoManfreca from "figma:asset/3bd52dfc5ec22a7fec040fc801048b6bb455c1e3.png";
import { motion as Motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#000814] pt-16 pb-8 border-t border-[#4A4A5A]/30">
      <Motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex-shrink-0 flex items-center h-12">
            <img src={image_46ccb88ec42c12599f144f5e241ffb0fa8cef1b2} alt="Logo de Manfreca" className="h-full w-auto object-contain" />
          </div>
          
          <div className="flex space-x-6">
            <a href="#soluciones" className="font-['Inter'] text-[#E8E8EE]/70 hover:text-[#FFC300] transition-colors text-sm uppercase tracking-wider">Soluciones</a>
            <a href="#obras" className="font-['Inter'] text-[#E8E8EE]/70 hover:text-[#FFC300] transition-colors text-sm uppercase tracking-wider">Obras</a>
            <a href="#flota" className="font-['Inter'] text-[#E8E8EE]/70 hover:text-[#FFC300] transition-colors text-sm uppercase tracking-wider">Flota</a>
            <a href="#filosofia" className="font-['Inter'] text-[#E8E8EE]/70 hover:text-[#FFC300] transition-colors text-sm uppercase tracking-wider">Filosofía</a>
          </div>
        </div>
        
        <div className="border-t border-[#4A4A5A]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Inter'] text-[#E8E8EE]/50 text-sm">
            © {new Date().getFullYear()} MANFRECA, C.A. Todos los derechos reservados.
          </p>
          <p className="font-['Inter'] text-[#E8E8EE]/50 text-sm">
            Ingeniería y Construcción en Venezuela.
          </p>
        </div>
      </Motion.div>
    </footer>
  );
}
