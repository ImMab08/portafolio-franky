import {
	IconBriefcase,
  IconCalendar,
  IconCode,
  IconGraduationcap,
  IconLightBulb,
  IconUsers,
} from "@/components/icons";
import { ExperienceItem } from "@/components/types/types";

// Experiences data
export const experience: ExperienceItem[] = [
  {
    id: 1,
    type: "education",
    title: "Ingeniería en Sistemas",
    organization: "Universidad Tecnológica",
    period: "2018 - 2022",
    location: "Ciudad, País",
    description:
      "Especialización en desarrollo de software y arquitectura de sistemas. Proyecto de tesis enfocado en inteligencia artificial aplicada.",
    skills: ["Algoritmos", "Estructuras de Datos", "Base de Datos", "Redes"],
    icon: IconGraduationcap,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    type: "work",
    title: "Desarrollador Frontend Senior",
    organization: "TechCorp Solutions",
    period: "2022 - Presente",
    location: "Remoto",
    description:
      "Liderazgo de equipo de 5 desarrolladores. Implementación de arquitecturas escalables y optimización de rendimiento en aplicaciones React.",
    skills: ["React", "TypeScript", "Next.js", "Liderazgo"],
    icon: IconCode,
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    type: "work",
    title: "Desarrollador Full Stack",
    organization: "StartupXYZ",
    period: "2021 - 2022",
    location: "Ciudad, País",
    description:
      "Desarrollo completo de plataforma SaaS desde cero. Implementación de APIs REST y integración con servicios de terceros.",
    skills: ["Node.js", "MongoDB", "AWS", "Docker"],
    icon: IconBriefcase,
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    type: "work",
    title: "Desarrollador Junior",
    organization: "WebAgency Pro",
    period: "2020 - 2021",
    location: "Ciudad, País",
    description:
      "Primer experiencia profesional desarrollando sitios web corporativos y e-commerce. Aprendizaje acelerado en tecnologías modernas.",
    skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress"],
    icon: IconUsers,
    color: "from-pink-500 to-purple-600",
  },
];

export const experiencia = [
  {
    label: "Años de Experiencia",
    value: "4+",
    icon: IconCalendar,
  },
  {
    label: "Proyectos Completados",
    value: "25+",
    icon: IconCode,
  },
  {
    label: "Tecnologías Dominadas",
    value: "15+",
    icon: IconLightBulb,
  },
  {
    label: "Equipos Liderados",
    value: "3",
    icon: IconUsers,
  },
];
