import React from "react";

export default function SideMenu() {
  return (
    <div className="max-w-xs w-full h-full flex-1 border-r-2 border-border">
      <div className="h-16 p-4 border-b-2 border-border">
        <p className="text-text-primary text-2xl font-semibold text-center ">
          Proyectos
        </p>
      </div>

      <div className="size-full p-4">
        <div className="w-full h-[100px] group relative inline-block  transition-all duration-300">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              autem maiores quasi? Eligendi, sapiente? Doloribus unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
