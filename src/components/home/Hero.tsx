
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-ingenio-lightblue/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ingenio-blue tracking-tight mb-6">
              Impulsa tu Éxito Académico en{" "}
              <span className="text-ingenio-green">Ingeniería</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Aprende de estudiantes para estudiantes. En Ingenio Academy hemos pasado 
              por los mismos desafíos que enfrentas hoy y te ayudaremos a superarlos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cursos">
                <Button size="lg" className="btn-primary w-full sm:w-auto">
                  Explorar Cursos
                </Button>
              </Link>
              <Link to="/agendar">
                <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto">
                  Clase de Prueba Gratis
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-gray-600">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">+200 estudiantes</span> ya mejoraron sus calificaciones
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-lg h-auto aspect-square bg-gradient-to-tr from-ingenio-blue to-ingenio-green rounded-full opacity-10 absolute -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Estudiantes colaborando"
                className="rounded-lg shadow-lg max-w-lg"
              />
              <div className="bg-white p-3 shadow-lg rounded-lg absolute -bottom-5 -left-5 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
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
                    className="text-green-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600">Tasa de aprobación</p>
                  <p className="font-bold text-gray-900">98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
