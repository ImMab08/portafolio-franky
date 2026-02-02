import React from "react";
import { Link } from "@/i18n/navigation";

import { IconArrowBack } from "@/shared/icons";

export default function AuthScreen() {
  return (
    <div className="flex flex-1 h-full min-h-screen text-text-primary">
      <div className="absolute top-0 w-full mx-auto p-8">
        <nav className="relative flex items-center justify-between sm:h-10">
					<Link href="/">
						<IconArrowBack className="" />
					</Link>
        </nav>
      </div>
      <div className="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r border-border shadow-lg bg-anotherbg">
        <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
          <div className="mb-20 space-y-1">
            <h2 className="text-3xl font-semibold">Bienvenido de vuelta</h2>
            <h3 className="text-base text-text-primary/40">
              inicia sesión con tu cuenta
            </h3>
          </div>

          <div className="flex flex-col space-y-6">
            {/* Correo */}
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-sm">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="h-10 rounded-lg border border-border px-3 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Contraseña */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <label className="font-semibold text-sm">Contraseña</label>
                <Link
                  href="/forgot-password"
                  className="font-semibold text-sm text-text-primary/40 hover:text-text-primary duration-300 transition-all hover:underline"
                >
                  Olvidé mi contraseña
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="h-10 rounded-lg border border-border px-3 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <button className="w-full p-4 bg-tertiary/60 hover:bg-tertiary transition-all duration-200 rounded-3xl mt-10 cursor-pointer text-lg font-semibold">
            Ingresar
          </button>
        </div>
        <div className="text-center text-balance text-xs text-foreground-lighter sm:mx-auto sm:max-w-sm space-y-2 select-none">
          <p className="">Hecho con 💚 para el mundo</p>
          <p className="">© Franky Vargas - 2026</p>
        </div>
      </div>

      <div className="flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex">
        <div className="relative flex flex-col gap-6 text-text-primary">
          <div className="absolute select-none -top-12 -left-14">
            <span className="text-[160px] leading-none ">“</span>
          </div>
          <blockquote className="z-10 max-w-lg text-3xl">
            Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha,
            y te dice: No temas, yo te ayudo.
          </blockquote>
          <p className="italic font-medium text-foreground-light whitespace-nowrap">
            Isaías 41:13
          </p>
        </div>
      </div>
    </div>
  );
}
