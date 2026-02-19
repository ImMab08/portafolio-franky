import React from "react";
import { Link } from "@/i18n/navigation";
import { IconBarsMenu } from "@/shared/icons";

interface HeaderProjectsProps {
  onMenuClick: () => void;
}

export function HeaderProjects({ onMenuClick }: HeaderProjectsProps) {
  return (
    <>
      {/* Navbar mobile */}
      <nav className="block md:hidden w-full h-16 p-4 border-b-2 border-border">
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

      <nav className="hidden md:block w-full h-16 p-4 border-b-2 border-border">
        <div>
          <Link
            href="/"
            className="flex items-center text-text-primary hover:text-text-tertiary transition-all duration-300"
          >
            Regresar
          </Link>
        </div>
      </nav>
    </>
  );
}
