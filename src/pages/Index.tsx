
import React from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <Features />
      
      <section className="section-padding bg-gradient-to-r from-ingenio-blue to-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empieza tu camino al éxito académico hoy
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Aprende con estudiantes que entienden tus desafíos y te ayudarán a superarlos
            con explicaciones claras y material práctico.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/agendar" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-ingenio-blue hover:bg-gray-100 w-full">
                Agenda tu Primera Clase Gratis
              </Button>
            </Link>
            <Link to="/cursos" className="w-full sm:w-auto">
              <Button size="lg" className="bg-transparent border border-white hover:bg-white/10 w-full">
                Explora Nuestros Cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tienes dudas sobre cómo podemos ayudarte?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contáctanos por WhatsApp o correo electrónico y te responderemos todas
                tus preguntas sobre nuestros cursos, metodología y cómo empezar.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/584249029639" 
                  className="flex items-center gap-2 text-ingenio-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +58 424-902-9639 (WhatsApp)
                </a>
                <a 
                  href="mailto:contacto@ingenioacademy.com" 
                  className="flex items-center gap-2 text-ingenio-blue hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  contacto@ingenioacademy.com
                </a>
              </div>
            </div>
            
            <div className="relative mt-8 md:mt-0">
              <div className="absolute -z-10 w-full h-full bg-ingenio-green/10 rounded-lg rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
                alt="Estudiante en clase"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
