import React from "react";
import { Link } from "@/i18n/navigation";
import { IconArrowBack, IconBarsMenu } from "@/shared/icons";
import { ButtonLanguage } from "../language_switcher";

interface HeaderProjectsProps {
  onMenuClick: () => void;
}

export function HeaderProjects({ onMenuClick }: HeaderProjectsProps) {
  return (
    <>
      {/* Navbar mobile */}
      <nav className="block md:hidden w-full h-16 p-4 bg-complementary">
        <div className="flex justify-between">
          <p className="text-text-primary text-lg font-semibold text-center ">
            Proyectos
          </p>
          <button onClick={onMenuClick}>
            <IconBarsMenu
              width={28}
              height={28}
              className="block md:hidden fill-secondary cursor-pointer"
            />
          </button>
        </div>
      </nav>
      {/* Navbar desktop */}

      <nav className="hidden md:block w-full h-16 p-4 bg-complementary">
        <div className="flex justify-between ">
          <Link
            href="/"
            className="group flex items-center space-x-2 border px-4 rounded-lg transition-all duration-300 text-text-primary hover:bg-secondary"
          >
            <IconArrowBack className="mt-0.5 transition-colors duration-300 group-hover:text-text-secondary" />
            <p className="text-base font-semibold transition-colors duration-300 group-hover:text-text-secondary">
              Volver atrás
            </p>
          </Link>
          <ButtonLanguage />  
        </div>
      </nav>
    </>
  );
}
