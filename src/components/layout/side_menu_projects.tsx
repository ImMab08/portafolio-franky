import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

import { ButtonLanguage } from "../language_switcher";
import { Project } from "@/shared/types/types";

import { IconCloseMenu } from "@/shared/icons";
import Image from "next/image";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const t = useTranslations("projects");
  const tPreview = t.raw("preview") as Array<Record<string, Project>>;

  const projects = tPreview.map((item) => {
    const key = Object.keys(item)[0];
    const data = item[key];

    return {
      id: key,
      title: data.title,
      description: data.description,
      image: data.image,
    };
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpieza por si el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Vista mobile */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen ? "" : "pointer-events-none"
        }`}
      >
        {/* Fondo oscuro (backdrop) */}
        <div
          className={`absolute inset-0 bg-primary/80 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={onClose}
        />

        {/* Panel lateral */}
        <div
          className={`absolute top-0 right-0 h-full w-[75%] max-w-sm bg-primary transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 p-4 border-b-2 border-border">
            <div className="flex w-full justify-between space-x-4">
              <ButtonLanguage />
              <IconCloseMenu
                width={28}
                height={28}
                onClick={onClose}
                className="fill-secondary mt-1 cursor-pointer"
              />
            </div>
          </div>

          <div className="size-full p-6 space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full h-32 group relative inline-block  transition-all duration-300"
              >
                <div className="w-full h-full rounded-md overflow-hidden relative">
                  <Image
                    fill
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                  />
                </div>
                <div
                  className="
                absolute w-full h-full left-1/2 -translate-x-1/2 top-0
                opacity-0 translate-y-1
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-200 ease-out
                bg-primary/80 text-white p-3 rounded shadow-lg
                cursor-pointer select-none
              "
                >
                  <h3 className="font-semibold mb-1 text-text-tertiary">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-primary/80">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vista desktop */}
      <div
        onClick={onClose}
        className="hidden md:block max-w-62.5 w-full h-full flex-1 border-r-2 border-border"
      >
        <div className="h-16 p-4 border-b-2 border-border">
          <p className="text-text-primary text-2xl font-semibold text-center ">
            Proyectos
          </p>
        </div>

        <div className="size-full p-4 space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full h-32 group relative inline-block  transition-all duration-300"
            >
              <div className="w-full h-full rounded-md overflow-hidden relative">
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                />
              </div>
              <div
                className="
                absolute w-full h-full left-1/2 -translate-x-1/2 top-0
                opacity-0 translate-y-1
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-200 ease-out
                bg-primary/80 text-white p-3 rounded shadow-lg
                cursor-pointer select-none
              "
              >
                <h3 className="font-semibold mb-1 text-text-tertiary">
                  {project.title}
                </h3>
                <p className="text-xs text-text-primary/80">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
