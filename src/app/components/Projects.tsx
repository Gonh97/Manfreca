import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import stadiumImage from 'figma:../../assets/47a05e5f769614243ed43738ccc0a7ea9c8b9040.png';
import ucvImage from 'figma:../../assets/ff7bef193d0d6004b325b091c723445023fef8b6.png';
import autopistaImage from 'figma:../../assets/e2c46b5d75fe26422f62c99124239119ccaa19e2.png';

const projects = [
  {
    id: 1,
    title: "Estadio Olímpico José Antonio Anzoátegui",
    subtitle: "Copa América 2007",
    investment: "~$40 millones USD",
    challenge: "Remodelación estructural completa y reconstrucción, pasando de 8.000 a 40.000 espectadores. Un proyecto de alta exigencia.",
    execution: "Instalación de estructura techada de 800 toneladas, 4 niveles, rampas monumentales y cabinas de transmisión en tiempo récord bajo estándares FIFA.",
    img: stadiumImage
  },
  {
    id: 2,
    title: "Universidad Central de Venezuela",
    subtitle: "Distrito Capital",
    challenge: "Edificio Laboratorio de Pre-grado de la Facultad de Ciencias en el campus principal de la universidad.",
    execution: "Construcción en la principal casa de estudios del país (Patrimonio de la Humanidad), demostrando capacidad para obras con exigencias científicas.",
    img: ucvImage
  },
  {
    id: 3,
    title: "Autopista Nacional de Oriente",
    subtitle: "Puerto Píritu — Barcelona",
    challenge: "Desarrollo de infraestructura vial crítica en terrenos irregulares de gran exigencia topográfica.",
    execution: "Demostración de nuestro músculo logístico para el movimiento masivo de tierras, conformación de bases y pavimentación continua.",
    img: autopistaImage
  },
  {
    id: 4,
    title: "Complejo Industrial del Sur",
    subtitle: "Planta de Procesamiento",
    challenge: "Construcción de nave industrial pesada en zona de alta actividad sísmica.",
    execution: "Montaje electromecánico integral y cimentación profunda para equipos de alta vibración industrial.",
    img: "https://images.unsplash.com/photo-1577553792670-3982f3f81352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGxhbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc0NTAxMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Acueducto Metropolitano",
    subtitle: "Red Troncal",
    challenge: "Sustitución de 15km de tubería de acero matriz de agua potable.",
    execution: "Excavación en terrenos de alta complejidad topográfica sin interrupción de servicios básicos en comunidades aledañas.",
    img: "https://images.unsplash.com/photo-1768967271510-0d6858f089a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMGNvbnN0cnVjdGlvbiUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3NDU1MDAxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find(p => p.id === activeId)!;
  const topRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (id: number) => {
    setActiveId(id);
    // Smooth scroll to the top image area only on mobile devices
    if (window.innerWidth < 768) {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="obras" className="bg-[#E8E8EE] flex flex-col min-h-screen">
      
      {/* Top Display Area (Hero) */}
      <div ref={topRef} className="relative w-full h-[60vh] min-h-[500px] lg:h-[65vh] lg:min-h-[600px] bg-[#000814] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24"
          >
            {/* Background Image */}
            <img
              src={activeProject.img}
              alt={activeProject.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlays for Text Contrast */}
            <div className="absolute inset-0 bg-[#000814]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/70 to-transparent md:bg-gradient-to-r md:from-[#000814] md:via-[#000814]/80 md:to-transparent" />
            
            {/* Content Layer */}
            <div className="relative z-10 flex items-center h-full w-full max-w-7xl mx-auto pt-12 md:pt-0">
              <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col justify-center">
                {/* Title */}
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mb-8 md:mb-10">
                  <span className="block text-[#FFC300] font-['Inter'] text-xs font-bold tracking-widest uppercase mb-4">
                    {activeProject.subtitle}
                  </span>
                  <h3 className="font-['Barlow'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                    {activeProject.title}
                  </h3>
                </motion.div>
                
                {/* Details (Challenge & Execution) */}
                <div className="flex flex-col space-y-6 md:space-y-8 text-[#E8E8EE]">
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <span className="flex items-center gap-2 text-[10px] md:text-xs font-['Inter'] text-[#FFC300] uppercase tracking-widest mb-3 font-semibold">
                      <span className="w-6 h-px bg-[#FFC300]"></span>
                      El Reto
                    </span>
                    <p className="font-['Inter'] text-sm md:text-base font-light leading-relaxed text-[#E8E8EE]/90">
                      {activeProject.challenge}
                    </p>
                  </motion.div>
                  
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                    <span className="flex items-center gap-2 text-[10px] md:text-xs font-['Inter'] text-[#FFC300] uppercase tracking-widest mb-3 font-semibold">
                      <span className="w-6 h-px bg-[#FFC300]"></span>
                      Ejecución
                    </span>
                    <p className="font-['Inter'] text-sm md:text-base font-light leading-relaxed text-[#E8E8EE]/90">
                      {activeProject.execution}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Grid Selector Area */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto lg:h-[400px]"
      >
        
        {/* Col 1: Introduction block */}
        <div className="bg-white p-10 lg:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#E8E8EE] h-full">
          <span className="text-[10px] font-['Inter'] text-[#4A4A5A] uppercase tracking-[0.2em] mb-4 block">Portafolio</span>
          <h2 className="font-['Barlow'] text-3xl md:text-4xl font-bold text-[#000814] leading-tight mb-6">
            40 Años de <br/> Trayectoria
          </h2>
          <p className="font-['Inter'] text-sm text-[#4A4A5A] leading-relaxed">
            Selecciona un proyecto destacado de nuestra galería interactiva para conocer los detalles técnicos y nuestra probada capacidad de ejecución a nivel nacional.
          </p>
        </div>
        
        {/* Col 2: Large image project (index 0) */}
        <div 
          className="relative group cursor-pointer overflow-hidden h-[400px] lg:h-full border-b md:border-b-0 md:border-r border-[#000814]"
          onClick={() => handleProjectClick(projects[0].id)}
        >
          <img src={projects[0].img} alt={projects[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className={`absolute inset-0 transition-all duration-500 ${activeId === projects[0].id ? 'bg-black/10' : 'bg-[#000814]/40 group-hover:bg-black/20'}`} />
          
          {/* Active indicator: Blinking Circle */}
          {activeId === projects[0].id && (
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#FFC300] animate-pulse shadow-[0_0_10px_#FFC300] z-20" />
          )}
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-black/20">
               <ArrowUpRight className="text-white w-5 h-5" />
            </div>
          </div>
          
          <div className={`absolute bottom-8 left-8 right-8 transition-opacity duration-300 z-10 ${activeId === projects[0].id ? 'opacity-0' : 'opacity-100'}`}>
            <h4 className="font-['Barlow'] text-2xl font-bold text-white drop-shadow-md leading-tight">{projects[0].title}</h4>
          </div>
        </div>

        {/* Col 3: UCV Image Project (index 1) - Now identical to others */}
        <div 
          className="relative group cursor-pointer overflow-hidden h-[400px] lg:h-full border-b md:border-b-0 lg:border-r border-[#000814]"
          onClick={() => handleProjectClick(projects[1].id)}
        >
          <img src={projects[1].img} alt={projects[1].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className={`absolute inset-0 transition-all duration-500 ${activeId === projects[1].id ? 'bg-black/10' : 'bg-[#000814]/40 group-hover:bg-black/20'}`} />
          
          {/* Active indicator: Blinking Circle */}
          {activeId === projects[1].id && (
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#FFC300] animate-pulse shadow-[0_0_10px_#FFC300] z-20" />
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-black/20">
               <ArrowUpRight className="text-white w-5 h-5" />
            </div>
          </div>

          <div className={`absolute bottom-8 left-8 right-8 transition-opacity duration-300 z-10 ${activeId === projects[1].id ? 'opacity-0' : 'opacity-100'}`}>
            <h4 className="font-['Barlow'] text-2xl font-bold text-white drop-shadow-md leading-tight">{projects[1].title}</h4>
          </div>
        </div>
        
        {/* Col 4: Autopista Image Project (index 2) */}
        <div 
          className="relative group cursor-pointer overflow-hidden h-[400px] lg:h-full"
          onClick={() => handleProjectClick(projects[2].id)}
        >
          <img src={projects[2].img} alt={projects[2].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className={`absolute inset-0 transition-all duration-500 ${activeId === projects[2].id ? 'bg-black/10' : 'bg-[#000814]/50 group-hover:bg-black/30'}`} />
          
          {/* Active indicator: Blinking Circle */}
          {activeId === projects[2].id && (
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#FFC300] animate-pulse shadow-[0_0_10px_#FFC300] z-20" />
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-black/20">
               <ArrowUpRight className="text-white w-5 h-5" />
            </div>
          </div>

          <div className={`absolute bottom-8 left-8 right-8 transition-opacity duration-300 z-10 ${activeId === projects[2].id ? 'opacity-0' : 'opacity-100'}`}>
            <h4 className="font-['Barlow'] text-2xl font-bold text-white drop-shadow-md leading-tight">{projects[2].title}</h4>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
