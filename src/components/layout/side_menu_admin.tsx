import { IconHome, IconLogout } from "@/shared/icons";
import Image from "next/image";
import React from "react";

export function SideMenuAdmin() {
  return (
    <div className="max-w-50 w-full h-screen bg-anotherbg">
      <div className="size-full p-4 flex flex-col justify-between">
        <div className="size-full space-y-5">
          <div className="flex w-full justify-center pb-4 border-b-2 border-border">
            <Image
              alt=""
              width={150}
              height={150}
              className="object-contain"
              src="/img/logo/picture-franky.png"
            />
          </div>
          <div className="flex space-x-2 items-stretch">
            <div className="w-1 bg-tertiary/80 rounded-full"></div>

            <div className="flex items-center space-x-1 w-full bg-tertiary/20 hover:bg-tertiary/60 duration-300 p-2 rounded-lg cursor-pointer">
              <IconHome width={20} hanging={20} className="text-secondary" />
              <p className="text-text-primary font-semibold">
                Dashboard
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-1 w-full p-2 rounded-lg cursor-pointer duration-300 text-red-500 hover:text-red-600">
          <IconLogout width={20} hanging={20} className="" />
          <p className="font-semibold">Cerrar sesión</p>
        </div>
      </div>
    </div>
  );
}
