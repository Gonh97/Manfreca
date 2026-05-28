import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Fleet } from "./components/Fleet";
import { Philosophy } from "./components/Philosophy";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-['Inter'] text-[#4A4A5A] bg-[#E8E8EE] min-h-screen">
       <Navbar />
       <main>
         <Hero />
         <Philosophy />
         <Services />
         <Projects />
         <Fleet />
         <Contact />
       </main>
       <Footer />
    </div>
  );
}