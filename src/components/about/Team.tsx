
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-sm card-hover">
      <div className="h-50 overflow-hidden">{/* h-50 es altura de la imagen del div */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center " /* w-full es width full h-full es la altura full */
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-ingenio-blue font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </CardContent>
    </Card>
  );
};

const teamMembers = [
  {
    name: "Victor Lefebres",
    role: "Fundador - Est. de Ingenieria Electronica / Informatica",
    bio: "Especialista en Programacion y matematicas aplicadas a Redes Neuronales. Comprometido con compartir conocimiento para la creacion de nuevas tecnologias.",
    image: "/img/victor.png",
  },
  {
    name: "Manuel Vegas",
    role: "Fundador - Est. de Ingenieria Industrial",
    bio: "Excelencia académica y experiencia en termodinámica. Mi objetivo es hacer que la ciencia sea accesible para todos.",
    image: "/img/manuel.png",
  },
  {
    name: "Hector Camacho",
    role: "Co-Fundador - Est. de Ingenieria Mecanica y Ciencias Numericas",
    bio: "Apasionado por las Matematicas a nivel de calculo, analisis y la física aplicada. Busco ayudar a estudiantes a superar los desafíos más complejos de ingeniería.",
    image: "img/hector.png",
  },
  {
    name: "Samuel Lobo",
    role: "Miembro Principal - Est. de ingenieria Mecanica",
    bio: "Creador del programa de estudio. Especialista en termodinamica y pre-calculo con un don para explicar conceptos difíciles.",
    image: "/img/samuel.png",
  },
];

const Team: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nuestro Equipo Fundador
          </h2>
          <p className="text-lg text-gray-600">
            Conoce a los estudiantes apasionados que se unieron para crear esta
            academia y apoyar a otros en su camino académico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
