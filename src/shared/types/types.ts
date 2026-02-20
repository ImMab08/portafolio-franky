import { ElementType } from "react";

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
};


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


export interface NavLinksProps {
  href: string;
  children: React.ReactNode;
}