import { ElementType } from "react";

export interface ExperienceItem {
  id: number;
  type: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  icon: ElementType;
  color: string;
}
