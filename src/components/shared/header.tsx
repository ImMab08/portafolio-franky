import { useState } from "react";


import { Link } from "@/i18n/navigation";
import { useTranslations,  } from "next-intl";

import { IconGithub, IconLinkedin, IconBarsMenu, IconCloseMenu } from "@/components/icons";

const Header = () => {
	// Estado para desplegar el menú para las pantallas responsive.
  const [menuOpen, setMenuOpen] = useState(false);

	// Función para abrir el menú.
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

	// Función para cerrar el menú
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Constante para el uso del traductor de next-intl. Usamos "header"
  // para llamar al objeto que contiene la traducción.
  const t = useTranslations("header");

  // Objetos para mapearlos más adelante y optimizar el código.
  // links de redirección dentro del sitio.
  const navLinks = [
    { text: `${t("home")}`, href: "/home" },
    { text: `${t("about")}`, href: "/about-me" },
    { text: `${t("projects")}`, href: "/projects" },
  ];

  // links de redirección a otras páginas fuera del sitio.
  const navIcons = [
    { icon: <IconGithub className="w-5 md:w-7" />, href: "/" },
    { icon: <IconLinkedin className="w-5 md:w-7" />, href: "/" },
  ];

  return (
    <>
      <div className={`absolute z-100 md:hidden size-full transition-transform duration-400 ease-in-out ${menuOpen ? "transform translate-x-0" : "transform -translate-x-full"}`}>			
			{/* Este div es un background transparente para el fondo. */}
			<div className={`${menuOpen ? "size-full bg-primary/80 absolute z-40" : ""}`} onClick={closeMenu}></div>
        <div className="w-3/4 h-full bg-primary shadow-2xl px-5 py-5 absolute z-50">

					{/* Header del menú desplegable. */}
          <div className="flex justify-end">
            <IconCloseMenu className="w-6" onClick={closeMenu}/>
          </div>

					{/* Contenido del desplegable. */}
          <div className=" flex flex-col pt-10 space-y-5 items-center justify-center">

					{/* Mapeamos los objetos creados anteriormente, el 'index' es importante para poder
							declarar su indice, es decir, la cantidad de datos que hay y 'link' nos permite
							usarlo cmo parámetro para poder acceder a su contenido como tal. */}

            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                className="text-xl text-white font-semibold"
                key={index}
              >
                {link.text}
              </Link>
            ))}

          </div>
        </div>
      </div>

      <nav className="absolute z-20 w-full h-20 flex items-center justify-between px-5 md:px-48">
        {/* Div de links */}
        <div className="hidden md:flex space-x-5">
         {/* Mapeamos y realizamos el mismo proceso que en el '.map' realizado más arriba. */}
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              className="text-xl text-white font-semibold"
              key={index}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Div de icono barras mobile. */}
        <div className="block md:hidden" onClick={toggleMenu}>
          <IconBarsMenu className="w-8" />
        </div>

        {/* Div de iconos. */}
        <div className="flex space-x-5">
          {/* Mapeamos y realizamos el mismo proceso que en el '.map' realizado más arriba. */}
          {navIcons.map((icon, index) => (
            <Link key={index} href={icon.href}>
              {icon.icon}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export { Header };
