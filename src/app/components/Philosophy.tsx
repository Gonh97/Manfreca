import React from "react";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { motion as Motion } from "motion/react";
import image_d85f914d8b87a8e658c87eb074aada5e3c6b10f9 from "../../assets/d85f914d8b87a8e658c87eb074aada5e3c6b10f9.png";
export function Philosophy() {
  return (
    <section id="filosofia" className="bg-white overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-16">
          {/* Left: Image (approx 65%) */}
          <Motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[65%] flex h-[450px] sm:h-[500px] lg:h-auto lg:min-h-[500px]"
          >
             <div 
               className="w-full h-full"
               style={{
                 width: 'calc(100% + max(0px, (100vw - 1400px) / 2))',
                 marginLeft: 'calc(-1 * max(0px, (100vw - 1400px) / 2))'
               }}
             >
               <img 
                 src={image_d85f914d8b87a8e658c87eb074aada5e3c6b10f9} 
                 alt="Estructura moderna" 
                 className="w-full h-full object-cover object-left"
               />
             </div>
          </Motion.div>
          
          {/* Right: Text (approx 35%) */}
          <Motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[35%] lg:pr-8 px-4 sm:px-6 lg:px-0 pt-10 pb-16 lg:py-24 flex flex-col justify-center relative z-10"
          >
            <h2 className="font-['Barlow'] text-4xl lg:text-5xl font-bold text-[#000814] leading-[1.1] mb-6 tracking-tight">Quienes Somos<br /></h2>
            <p className="font-['Inter'] text-[#4A4A5A] text-sm md:text-base leading-relaxed">Somos Manfreca, una constructora multidisciplinaria con más de 40 años de trayectoria forjando la infraestructura que impulsa el desarrollo. Para las entidades y corporaciones que exigen más que una simple ejecución, nosotros entregamos certeza. Combinamos ingeniería de precisión, solidez financiera y un equipo de especialistas dedicados a transformar proyectos de alta complejidad en realidades tangibles. Nuestro compromiso es inquebrantable: garantizamos que cada hito de su obra civil, mecánica o eléctrica se cumpla con estándares de clase mundial, sin excusas ni demoras.</p>
          </Motion.div>
        </div>
      </div>

      {/* Bottom Section - Mision, Vision, Valores in Dark Background */}
      <div className="bg-[#000814] py-24 relative w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header of Dark Section */}
          <Motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 mb-24"
          >
            <div>
              <span className="block text-[#FFC300] font-['Inter'] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Nuestra Filosofía
              </span>
              <h2 className="font-['Barlow'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Construimos el progreso con solidez y propósito.
              </h2>
            </div>
            <div className="flex flex-col justify-end lg:pb-2">
              <p className="font-['Inter'] text-[#E8E8EE]/70 text-base leading-relaxed">
                Cada obra ejecutada representa nuestro compromiso con el desarrollo integral. Nos guiamos por principios inquebrantables para entregar infraestructuras de envergadura que perduran y transforman realidades.
              </p>
            </div>
          </Motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Step 1: Misión */}
            <Motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="w-16 h-16 rounded-full bg-[#FFC300] flex items-center justify-center mb-8 shrink-0 relative z-10 shadow-[0_0_20px_rgba(255,195,0,0.3)]">
                  <Target className="w-8 h-8 text-[#000814]" strokeWidth={2.5} />
                </div>
                {/* Connecting Line to next col */}
                <div className="hidden md:block absolute top-8 left-16 w-[calc(100%-1.5rem)] h-[2px] bg-[#FFC300]/80 -translate-y-1/2">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-[#FFC300] rotate-45"></div>
                </div>
              </div>
              <h4 className="font-['Barlow'] text-2xl font-bold text-white mb-4 tracking-wide">Misión</h4>
              <p className="font-['Inter'] text-[#E8E8EE]/70 text-sm leading-relaxed pr-4">
                Construir la infraestructura que es el motor y pilar del desarrollo de Venezuela. Ejecutamos obras civiles, mecánicas y eléctricas con los más altos estándares de calidad, seguridad y eficiencia del sector.
              </p>
            </Motion.div>

            {/* Step 2: Visión */}
            <Motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10 flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="w-16 h-16 rounded-full bg-[#FFC300] flex items-center justify-center mb-8 shrink-0 relative z-10 shadow-[0_0_20px_rgba(255,195,0,0.3)]">
                  <Eye className="w-8 h-8 text-[#000814]" strokeWidth={2.5} />
                </div>
                {/* Connecting Line to next col */}
                <div className="hidden md:block absolute top-8 left-16 w-[calc(100%-1.5rem)] h-[2px] bg-[#FFC300]/80 -translate-y-1/2">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-[#FFC300] rotate-45"></div>
                </div>
              </div>
              <h4 className="font-['Barlow'] text-2xl font-bold text-white mb-4 tracking-wide">Visión</h4>
              <p className="font-['Inter'] text-[#E8E8EE]/70 text-sm leading-relaxed pr-4">
                Ser reconocida como la empresa constructora más confiable y profesional de Venezuela, erigiéndonos como el referente definitivo en infraestructura de gran envergadura y adoptando innovación tecnológica.
              </p>
            </Motion.div>

            {/* Step 3: Valores */}
            <Motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative z-10 flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="w-16 h-16 rounded-full bg-[#FFC300] flex items-center justify-center mb-8 shrink-0 relative z-10 shadow-[0_0_20px_rgba(255,195,0,0.3)]">
                  <ShieldCheck className="w-8 h-8 text-[#000814]" strokeWidth={2.5} />
                </div>
              </div>
              <h4 className="font-['Barlow'] text-2xl font-bold text-white mb-4 tracking-wide">Valores</h4>
              <ul className="font-['Inter'] text-[#E8E8EE]/70 text-sm leading-relaxed space-y-3 pr-4">
                <li><strong className="text-white">Excelencia:</strong> Soluciones que resisten el paso del tiempo.</li>
                <li><strong className="text-white">Seguridad:</strong> Valor innegociable; protección en cada obra.</li>
                <li><strong className="text-white">Compromiso:</strong> Honor a plazos y especificaciones.</li>
                <li><strong className="text-white">Innovación:</strong> Tecnologías de vanguardia constructiva.</li>
              </ul>
            </Motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
