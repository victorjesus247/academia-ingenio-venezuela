
import React from "react";
import Team from "@/components/about/Team";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-ingenio-blue text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Conócenos</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Somos un grupo de estudiantes de ingeniería comprometidos con apoyar a otros
            en su camino académico, compartiendo conocimientos y experiencias.
          </p>
        </div>
      </section>

      <Story />
      <Team />
      <Values />

      <section className="section-padding bg-ingenio-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Ya sea como estudiante que busca apoyo o como tutor que quiere
            compartir su conocimiento, hay un lugar para ti en Ingenio Academy.
          </p>
          <a
            href="https://wa.me/584141234567"
            className="inline-block bg-white text-ingenio-blue font-semibold rounded-md px-8 py-3 hover:bg-gray-100 transition duration-300"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
