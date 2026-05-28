import { ArrowUpRight, Play, Star } from "lucide-react";
import heroImg from "figma:asset/94d549bc989a76e06c425aac42dd451bdd1f6e6b.png";
import { motion as Motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-[#000814] overflow-hidden" id="inicio">
      
      {/* Background Image & Overlay */}
      <Motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroImg}
          alt="Trabajador de Manfreca" 
          className="w-full h-full object-cover object-center md:object-center"
        />
        {/* Gradient: Dark on top for mobile text readability, left for desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/90 via-[#000814]/40 to-transparent md:bg-gradient-to-r md:from-[#000814] md:via-[#000814]/90 md:to-transparent w-full md:w-[70%] lg:w-[60%] h-[70%] md:h-full"></div>
        {/* Subtle overall dark overlay for general text contrast */}
        <div className="absolute inset-0 bg-[#000814]/10 md:bg-[#000814]/30"></div>
      </Motion.div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 mt-10 md:mt-0">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Top Pill / Tag */}
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A4A5A]/30 backdrop-blur-sm border border-[#E8E8EE]/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8EE]/70"></span>
            <span className="font-['Inter'] text-[#E8E8EE] text-xs font-medium tracking-wide uppercase">
              Ingeniería y Construcción Integral
            </span>
          </Motion.div>

          {/* Heading */}
          <Motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Barlow'] text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
          >
            Diseñamos el <br />Futuro
          </Motion.h1>
          
          {/* Description */}
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-['Inter'] text-[#E8E8EE]/80 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed"
          >
            Ejecutamos obras de infraestructura con autonomía total. Fusionamos experiencia comprobada y tecnología para construir resultados excepcionales.
          </Motion.p>
          
          {/* Action Buttons */}
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16 lg:mb-20"
          >
            <a 
              href="#obras" 
              className="group flex items-center justify-center gap-2 w-full sm:w-auto font-['Inter'] text-sm text-white bg-[#FFC300] !text-[#000814] px-7 py-3.5 rounded-md sm:rounded-full font-semibold hover:bg-white hover:text-[#000814] transition-all duration-300 shadow-lg"
            >
              Ver Proyectos
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Motion.div>
          
          {/* Bottom Stats / Social Proof */}
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-6 pt-4 border-t border-[#4A4A5A]/30"
          >
            
            {/* Rating Text */}
            <div className="flex flex-col gap-1.5">
              <p className="font-['Inter'] text-[#E8E8EE] text-sm font-light">
                Más de <strong className="font-semibold text-white">40 años</strong> de trayectoria
              </p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 text-[#FFC300] fill-current" />
                ))}
              </div>
            </div>

          </Motion.div>

        </div>
      </div>
    </section>
  );
}