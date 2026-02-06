import { IconCloseMenu } from "@/shared/icons";
import React from "react";
import { ButtonLanguage } from "../language_switcher";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <>
      {/* Vista mobile */}
      <div
        className={`${isOpen ? "transform translate-x-0" : "transform translate-x-full"} block md:hidden bg-primary fixed inset-0 z-10 transition-transform duration-300 ease-in-out overflow-hidden size-full flex-1`}
      >
        <div className="flex items-center justify-between h-16 p-4 border-b-2 border-border">
          <p className="text-text-primary text-2xl font-semibold text-center ">
            Proyectos
          </p>
          <div className="flex space-x-4">
            <ButtonLanguage />
            <IconCloseMenu
              onClick={onClose}
              width={28}
              height={28}
              className="fill-secondary mt-1"
            />
          </div>
        </div>

        <div className="size-full p-4">
          <div className="w-full h-25 group relative inline-block  transition-all duration-300">
            <div className="w-full h-full bg-gray-300 rounded-md"></div>
            <div
              className="
              absolute w-full h-full left-1/2 -translate-x-1/2 top-0
              opacity-0 translate-y-1
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-200 ease-out
              bg-primary/40 text-white p-3 rounded shadow-lg
              cursor-pointer select-none
            "
            >
              <h3 className="font-semibold">Hola mundo</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam autem maiores quasi? Eligendi, sapiente? Doloribus
                unde.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vista desktop */}
      <div
        onClick={onClose}
        className="hidden md:block max-w-xs w-full h-full flex-1 border-r-2 border-border"
      >
        <div className="h-16 p-4 border-b-2 border-border">
          <p className="text-text-primary text-2xl font-semibold text-center ">
            Proyectos
          </p>
        </div>

        <div className="size-full p-4">
          <div className="w-full h-25 group relative inline-block  transition-all duration-300">
            <div className="w-full h-full bg-gray-300 rounded-md"></div>
            <div
              className="
              absolute w-full h-full left-1/2 -translate-x-1/2 top-0
              opacity-0 translate-y-1
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-200 ease-out
              bg-primary/40 text-white p-3 rounded shadow-lg
              cursor-pointer select-none
            "
            >
              <h3 className="font-semibold">Hola mundo</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam autem maiores quasi? Eligendi, sapiente? Doloribus
                unde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
