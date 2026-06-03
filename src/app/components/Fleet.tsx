import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgControlAbsoluto from "../../assets/eabff3f6f5bd1377800bd5b082c1102423c079ef.png";
import imgMaquinariaAmarilla from "../../assets/b039d80e332fb88c32bcda32369e5be7997e2e9a.png";
import imgRespuestaIntegral from "../../assets/fc46ef2736af63e5d14edf6a00afe5ca718ac167.png";

const fleetData = [
  {
    id: 1,
    category: "Movilización y Carga",
    watermark: "Logística.",
    title: "Control Absoluto.",
    description: "Nuestra autonomía es su mayor garantía de cumplimiento. Al no depender del alquiler de equipos a terceros, blindamos los tiempos de entrega con control absoluto sobre la cadena de suministro logístico. Movilizamos estructuras gigantescas a través de la geografía nacional.",
    list: [
      { name: "Chutos", detail: "Mack Granite GU813 L, Mack CH 613 97, Chevrolet Kodiak." },
      { name: "Volteos", detail: "Chevrolet Kodiak 8500 W/B, Tipo Tractor." },
      { name: "Camiones", detail: "Chevrolet C3500, Mitsubishi FM 657, NPR, FVR." }
    ],
    img: imgControlAbsoluto
  },
  {
    id: 2,
    category: "Maquinaria Amarilla",
    watermark: "Amarilla.",
    title: "Desarrollo Masivo.",
    description: "Despejamos, excavamos y acondicionamos terrenos a escala masiva. Operamos uno de los parques de maquinaria pesada propia más completos para la ejecución de obras de alta exigencia topográfica, desde movimientos de tierra hasta nivelación de bases.",
    list: [
      { name: "Excavadoras", detail: "John Deere y Caterpillar (Múltiples modelos)." },
      { name: "Cargadores", detail: "Caterpillar (Frontales y de Oruga)." },
      { name: "Motoniveladoras", detail: "Caterpillar Patrol y de Oruga." },
      { name: "Compactación", detail: "Compactadores Pata de Cabra." }
    ],
    img: imgMaquinariaAmarilla
  },
  {
    id: 3,
    category: "Especializados",
    watermark: "Especiales.",
    title: "Respuesta Integral.",
    description: "Equipamiento especializado para brindar respuesta inmediata y garantizar la seguridad industrial en sitio. Nuestra flota de apoyo logístico y dotación médica asegura operaciones continuas y protegidas en los entornos más hostiles.",
    list: [
      { name: "Logística Pesada", detail: "Volquetas, Bateas, Low Boy para maquinaria." },
      { name: "Bombeo y Concreto", detail: "Camión Bomba Astra, Mezcladoras." },
      { name: "Salud Ocupacional", detail: "Ambulancias de dotación médica en sitio." }
    ],
    img: imgRespuestaIntegral
  }
];

export function Fleet() {
  const [activeId, setActiveId] = useState(fleetData[0].id);
  const activeItem = fleetData.find(item => item.id === activeId)!;

  return (
    <section id="flota" className="bg-white min-h-screen relative flex flex-col justify-center overflow-hidden">
      
      {/* Main Content Area */}
      <div className="w-full flex items-center py-16 md:py-24">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
           
           {/* Left Image Side & Tabs */}
           <div className="flex flex-col w-full h-full">
             
             {/* Image container - dynamic height to match right column */}
             <div className="relative w-full flex-1 min-h-[300px] md:min-h-[400px] flex justify-center items-center overflow-hidden rounded-xl shadow-2xl mb-8">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeItem.id} 
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    src={activeItem.img} 
                    alt={activeItem.title}
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </AnimatePresence>
             </div>

             {/* Tab Links - Underneath the image without background */}
             <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 justify-center lg:justify-start items-start sm:items-center w-full mt-auto">
                {fleetData.map(item => (
                  <button 
                    key={item.id} 
                    onClick={() => setActiveId(item.id)}
                    className="flex items-center gap-3 group outline-none w-fit"
                  >
                    <div className={`w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-b-[4px] border-b-transparent transition-colors duration-300 ${activeId === item.id ? 'border-l-[#FFC300]' : 'border-l-[#4A4A5A] group-hover:border-l-[#FFC300]'}`}></div>
                    <span className={`font-['Inter'] text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${activeId === item.id ? 'text-[#000814] font-bold' : 'text-[#4A4A5A] group-hover:text-[#000814]'}`}>
                      {item.category}
                    </span>
                  </button>
                ))}
             </div>

           </div>

           {/* Right Content Side */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="flex flex-col h-full relative z-10 pl-0 lg:pl-16"
           >
              <div className="flex flex-col space-y-2">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="text-6xl md:text-7xl lg:text-[100px] font-['Barlow'] font-bold text-[#FFC300] mb-2 block leading-none">
                       0{activeItem.id}
                    </span>
                    <div className="w-16 h-px bg-[#E8E8EE] mb-8"></div>
                    <h3 className="text-4xl md:text-5xl lg:text-[64px] font-['Barlow'] font-light text-[#000814] leading-[1.1] mb-8 tracking-tight">
                      {activeItem.title}
                    </h3>
                    <p className="font-['Inter'] text-[#4A4A5A] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                      {activeItem.description}
                    </p>
                    
                    <ul className="space-y-4 font-['Inter'] text-sm text-[#4A4A5A] max-w-lg">
                      {activeItem.list.map((item, i) => (
                         <li key={i} className="flex gap-3 items-start">
                           <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-b-[4px] border-b-transparent border-l-[#FFC300] mt-1 shrink-0"></div>
                           <span><strong className="text-[#000814]">{item.name}:</strong> {item.detail}</span>
                         </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
           </motion.div>

        </div>
      </div>

      {/* We removed the bottom div since we moved it above the main content area */}
    </section>
  );
}
