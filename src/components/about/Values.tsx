
import React from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-ingenio-green/10 rounded-full flex items-center justify-center mb-4 text-ingenio-green">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const values = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Colaboración",
    description:
      "Creemos en el poder del aprendizaje colaborativo y en compartir conocimientos para crecer juntos.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    title: "Excelencia Académica",
    description:
      "Nos comprometemos con los más altos estándares de calidad y rigor en todas nuestras clases.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    title: "Compromiso con la Educación",
    description:
      "Trabajamos por una educación de calidad y accesible para todos los estudiantes venezolanos.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4"></path>
        <path d="M12 18v4"></path>
        <path d="M4.93 4.93l2.83 2.83"></path>
        <path d="M16.24 16.24l2.83 2.83"></path>
        <path d="M2 12h4"></path>
        <path d="M18 12h4"></path>
        <path d="M4.93 19.07l2.83-2.83"></path>
        <path d="M16.24 7.76l2.83-2.83"></path>
      </svg>
    ),
    title: "Innovación",
    description:
      "Buscamos constantemente nuevas formas de enseñar y aprender, adaptándonos a los desafíos actuales.",
  },
];

const Values: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nuestros Valores
          </h2>
          <p className="text-lg text-gray-600">
            Estos son los principios que nos guían cada día en nuestra misión de
            apoyar a los estudiantes venezolanos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
