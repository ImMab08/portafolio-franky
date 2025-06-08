import {
  IconBriefcase,
  IconCalendar,
  IconCode,
  IconGraduationcap,
  IconLightBulb,
  IconUsers,
} from "@/components/icons";
import { ExperienceItem } from "@/components/types/types";

export const experience: ExperienceItem[] = [
  {
    id: 1,
    type: "",
    title: "",
    organization: "",
    period: "",
    location: "",
    description: "",
    skills: ["", "", "", ""],
    icon: IconGraduationcap,
    color: "from-green-500 to-teal-600",
  },
  {
    id: 2,
    type: "",
    title: "",
    organization: "",
    period: "",
    location: "",
    description: "",
    skills: ["", "", "", ""],
    icon: IconCode,
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    type: "",
    title: "",
    organization: "",
    period: "",
    location: "",
    description: "",
    skills: ["", "", "", ""],
    icon: IconBriefcase,
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    type: "",
    title: "",
    organization: "",
    period: "",
    location: "",
    description: "",
    skills: ["", "", "", ""],
    icon: IconUsers,
    color: "from-pink-500 to-purple-600",
  },
];

// Datos complementarios de la experiencia.
export const MoreExperienceIcons = [
  IconCalendar,
  IconCode,
  IconLightBulb,
  IconUsers,
];
