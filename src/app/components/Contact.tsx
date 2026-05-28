import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion as Motion } from "motion/react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent default and mock submit
    alert("Mensaje enviado correctamente.");
  };

  return (
    <section id="contacto" className="bg-[#E8E8EE] py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <Motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden shadow-2xl rounded-2xl"
        >
          
          {/* Left Column - Contact Info & Branding */}
          <div className="bg-[#000814] p-10 md:p-16 lg:p-20 relative flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnRzfGVufDF8fHx8MTc3NDU1MjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
            
            <div className="relative z-10 mb-16">
              <span className="block text-[#FFC300] font-['Inter'] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Contacto
              </span>
              <h2 className="font-['Barlow'] text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                Iniciemos su próximo <br className="hidden md:block"/> gran proyecto.
              </h2>
              <p className="font-['Inter'] text-[#E8E8EE]/70 text-base leading-relaxed max-w-md">
                Nuestro equipo de especialistas está preparado para analizar las exigencias de su obra. Contáctenos para agendar una reunión técnica o comercial.
              </p>
            </div>

            <div className="relative z-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFC300]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#FFC300] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Barlow'] text-white text-lg font-semibold mb-1">Sede Principal</h4>
                  <p className="font-['Inter'] text-[#E8E8EE]/60 text-sm leading-relaxed">
                    Torre Empresarial Manfreca, Piso 8.<br/>
                    Caracas, Venezuela.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFC300]/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#FFC300] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Barlow'] text-white text-lg font-semibold mb-1">Teléfono</h4>
                  <p className="font-['Inter'] text-[#E8E8EE]/60 text-sm leading-relaxed">
                    +58 (212) 555-0000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFC300]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#FFC300] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Barlow'] text-white text-lg font-semibold mb-1">Correo Electrónico</h4>
                  <p className="font-['Inter'] text-[#E8E8EE]/60 text-sm leading-relaxed">
                    proyectos@manfreca.com.ve
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#FFC300]/20 to-transparent opacity-50 blur-2xl pointer-events-none"></div>
          </div>
          
          {/* Right Column - The Form */}
          <div className="bg-white p-10 md:p-16 lg:p-20">
            <h3 className="font-['Barlow'] text-2xl md:text-3xl font-bold text-[#000814] mb-8">
              Envíenos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-['Inter'] font-semibold text-[#4A4A5A] uppercase tracking-wider">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-[#E8E8EE]/50 border border-[#E8E8EE] focus:border-[#FFC300] focus:ring-1 focus:ring-[#FFC300] text-[#000814] px-4 py-3 outline-none transition-all font-['Inter']"
                    placeholder="Ej. Carlos Mendoza"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs font-['Inter'] font-semibold text-[#4A4A5A] uppercase tracking-wider">
                    Empresa / Entidad
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    value={formState.company}
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                    className="w-full bg-[#E8E8EE]/50 border border-[#E8E8EE] focus:border-[#FFC300] focus:ring-1 focus:ring-[#FFC300] text-[#000814] px-4 py-3 outline-none transition-all font-['Inter']"
                    placeholder="Ej. Constructora Andina"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-['Inter'] font-semibold text-[#4A4A5A] uppercase tracking-wider">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-[#E8E8EE]/50 border border-[#E8E8EE] focus:border-[#FFC300] focus:ring-1 focus:ring-[#FFC300] text-[#000814] px-4 py-3 outline-none transition-all font-['Inter']"
                  placeholder="ejemplo@empresa.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-['Inter'] font-semibold text-[#4A4A5A] uppercase tracking-wider">
                  Detalles del Proyecto
                </label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-[#E8E8EE]/50 border border-[#E8E8EE] focus:border-[#FFC300] focus:ring-1 focus:ring-[#FFC300] text-[#000814] px-4 py-3 outline-none transition-all font-['Inter'] resize-none"
                  placeholder="Describa brevemente el tipo de obra, ubicación y requerimientos principales..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#FFC300] text-[#000814] font-['Inter'] font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-[#E5B000] w-full md:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Enviar Mensaje
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </form>
            
          </div>
        </Motion.div>
        
      </div>
    </section>
  );
}