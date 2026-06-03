import React, { useState, useRef } from 'react';
import imgService1 from "../../assets/09923c551a644f3441292de7d89f57d657ca2247.png";
import imgService2 from "../../assets/dca313a29e88b7c1a90cce15583a6c091806aa2a.png";
import imgService3 from "../../assets/9685852d0741470664b3a81428057d1e8834c942.png";
import imgService4 from "../../assets/563e31df66baa99ee65b1358a57b3fd60c84e226.png";
import imgService5 from "../../assets/a73e10ecbb5a8145eddf1c1294e64a3ec6d15f28.png";
import { motion as Motion } from "motion/react";

const services = [
  {
    image: imgService3,
    tags: ["Topografía", "Terrenos", "Precisión"],
    title: "Topografía y Movimiento de Tierra",
    description: "Ejecutamos triangulaciones, parcelaciones, deslindes y preparación masiva de terrenos. Garantizamos la precisión absoluta desde el primer momento del proyecto.",
  },
  {
    image: imgService1,
    tags: ["Vialidad", "Autopistas", "Puentes"],
    title: "Infraestructura Vial",
    description: "Construcción, estudio y replanteo de carreteras, autopistas, caminos vecinales y puentes para el país, asegurando durabilidad y conectividad.",
  },
  {
    image: imgService2,
    tags: ["Obras Civiles", "Edificaciones", "Estadios"],
    title: "Construcción Civil y Edificaciones",
    description: "Levantamiento de infraestructuras complejas, desde recintos universitarios hasta estadios con estándares internacionales y tecnología de punta.",
  },
  {
    image: imgService4,
    tags: ["Industrial", "Mecánica", "Eléctrica"],
    title: "Construcción Mecánica y Eléctrica",
    description: "Soluciones técnicas \"end-to-end\" para proyectos industriales y comerciales que requieren la máxima exigencia, seguridad y eficiencia energética.",
  },
  {
    image: imgService5,
    tags: ["Inmobiliaria", "Desarrollo", "Rentabilidad"],
    title: "Desarrollo y Gestión Inmobiliaria",
    description: "Ejecución integral de obras para la compra, venta y desarrollo de inmuebles, maximizando la rentabilidad y el valor a largo plazo de la inversión.",
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (index: number) => {
    setActiveIndex(index);
    if (window.innerWidth < 1024) {
      imageContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="soluciones" className="py-16 lg:py-0 bg-white relative overflow-hidden lg:h-[1080px] w-full flex items-center">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 xl:gap-16 min-h-[700px] lg:h-[800px] xl:h-[860px]">

          {/* Columna Izquierda: Texto y Lista de Títulos */}
          <Motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[40%] xl:w-[35%] flex flex-col pt-4 md:pt-12 z-20"
          >
            
            {/* Cabecera de Texto */}
            <div className="mb-12 lg:mb-16">
              <h2 className="font-['Barlow'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#000814] uppercase tracking-tight mb-6 leading-tight">
                Soluciones Integrales de <span className="text-[#FFC300]">Infraestructura.</span>
              </h2>
              <p className="font-['Inter'] text-[#4A4A5A] text-lg lg:text-xl leading-relaxed max-w-md">
                Abarcamos todas las fases críticas de desarrollo garantizando calidad y precisión de clase mundial.
              </p>
            </div>

            {/* Lista interactiva de servicios (Reemplazando las miniaturas) */}
            <div className="flex flex-col w-full max-w-lg mt-auto lg:mt-0 pb-8 lg:pb-0">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(index)}
                    className={`group flex items-center justify-between w-full px-4 md:px-5 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive 
                        ? 'bg-[#000814] rounded-xl shadow-xl py-5 md:py-6 my-1' 
                        : 'bg-transparent border-b border-[#E8E8EE] hover:bg-[#E8E8EE]/40 py-3 md:py-4'
                    }`}
                  >
                    {/* Número y Título */}
                    <div className="flex items-center gap-3 md:gap-4 pr-4">
                      <span className={`font-['JetBrains_Mono'] text-xs md:text-sm font-medium w-5 md:w-6 text-left transition-colors duration-500 ${
                        isActive ? 'text-[#FFC300]' : 'text-[#4A4A5A] group-hover:text-[#000814]'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      
                      <h3 className={`font-['Barlow'] text-left text-base md:text-lg lg:text-xl font-bold leading-tight transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-[#000814]'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Botón Circular de Flecha */}
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'bg-white text-[#000814]' 
                        : 'bg-transparent border border-[#4A4A5A]/30 text-[#4A4A5A] group-hover:border-[#000814] group-hover:text-[#000814]'
                    }`}>
                      {isActive ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            
          </Motion.div>

          {/* Columna Derecha: Imagen Activa Expandida (Se mantiene la animación solicitada) */}
          <Motion.div 
            ref={imageContainerRef as any} 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[60%] xl:w-[65%] relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl min-h-[550px] sm:min-h-[600px] lg:h-full z-10"
          >
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Imagen de Fondo (Lento efecto de escala) */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
                      isActive ? 'scale-100' : 'scale-110'
                    }`}
                  />

                  {/* Gradientes Oscuros para legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/95 via-[#000814]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000814]/40 to-transparent opacity-60" />

                  {/* Contenedor de Textos con Animación Blur */}
                  <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-end">
                    <div
                      className={`w-full max-w-3xl transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isActive
                          ? 'opacity-100 blur-0 translate-y-0'
                          : 'opacity-0 blur-md translate-y-16'
                      }`}
                    >
                      {/* Etiquetas / Tags */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 md:mb-8">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs md:text-sm font-['Inter'] tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Título de la Tarjeta */}
                      <h3 className="font-['Barlow'] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6 leading-[1.1] drop-shadow-xl">
                        {service.title}
                      </h3>

                      {/* Descripción de la Tarjeta */}
                      <p className="font-['Inter'] text-[#E8E8EE] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md max-w-2xl font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Motion.div>

        </div>
      </div>
    </section>
  );
}
