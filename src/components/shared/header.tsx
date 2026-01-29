import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import {
  IconGithub,
  IconLinkedin,
  IconBarsMenu,
  IconCloseMenu,
} from "@/components/icons";
import { ButtonLanguage } from "@/components/ui/buttons/button_language";
import { NavLink } from "@/components/ui/nav_link";

const Header = () => {
  // Estado para desplegar el menú para las pantallas responsive.
  const [openMenu, setopenMenu] = useState(false);

  // Función para abrir el menú.
  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setopenMenu(false);
  };

  // Bloquear scroll cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  // Constante para el uso del traductor de next-intl. Usamos "header"
  // para llamar al objeto que contiene la traducción.
  const t = useTranslations("header");

  // Objetos para mapearlos más adelante y optimizar el código.
  // links de redirección dentro del sitio.
  const navLinks = [
    { text: `${t("home")}`, href: "/" },
    { text: `${t("about")}`, href: "/about-me" },
    { text: `${t("projects")}`, href: "/projects" },
  ];

  // links de redirección a otras páginas fuera del sitio.
  const navIcons = [
    {
      icon: <IconGithub className="w-5 md:w-7" />,
      href: "https://github.com/ImMab08",
    },
    {
      icon: <IconLinkedin className="w-5 md:w-7 fill-secondary" />,
      href: "https://www.linkedin.com/in/franky-vargas/",
    },
  ];

  return (
    <>
      {/* Panel móvil */}
      <div
        className={`fixed inset-0 z-100 lg:hidden  transition-transform duration-400 ease-in-out overflow-hidden 
          ${openMenu ? "transform translate-x-0" : "transform -translate-x-full "}`}
      >
        {/* Este div es un background transparente para el fondo. */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${openMenu ? "translate-x-0" : "opacity-0 pointer-events-none"}`}
          onClick={closeMenu}
        ></div>
        <div className="absolute w-3/4 left-0 top-0 h-full flex flex-col justify-between bg-primary shadow-2xl px-5 py-5 ">
          {/* Header del menú desplegable. */}
          <div className="flex items-center justify-between">
            <ButtonLanguage />
            <IconCloseMenu className="w-6 text-white" onClick={closeMenu} />
          </div>

          {/* Contenido del desplegable. */}
          <div className="flex flex-col pt-10 space-y-5 items-start justify-center">
            {/* Mapeamos los objetos creados anteriormente, el 'index' es importante para poder
							declarar su indice, es decir, la cantidad de datos que hay y 'link' nos permite
							usarlo cmo parámetro para poder acceder a su contenido como tal. */}

            {navLinks.map((link, index) => (
              <NavLink href={link.href} key={index}>
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* Div de iconos. */}
          <div className="flex space-x-5">
            {/* Mapeamos y realizamos el mismo proceso que en el '.map' realizado más arriba. */}
            {navIcons.map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Link className="" href={icon.href}>
                  {icon.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Panel desktop */}
      <nav className="flex items-center justify-center absolute w-full right-0 z-40 transition-all duration-300 md:py-5">
        {/* Div de links */}
        <div className="flex w-full items-center justify-between max-w-6xl p-4 transition-all duration-300">
          <div className="hidden md:flex space-x-5">
            {/* Mapeamos y realizamos el mismo proceso que en el '.map' realizado más arriba. */}
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <NavLink href={link.href} key={index}>
                  {link.text}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Div de icono barras mobile. */}
          <div className="w-full flex justify-between md:hidden">
            <IconBarsMenu className="w-8 h-8 text-white" onClick={toggleMenu} />
            <ButtonLanguage />
          </div>

          {/* Div de iconos. */}
          <div className="md:flex items-center hidden space-x-5">
            <div className="flex items-center space-x-5">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                href="https://github.com/ImMab08"
                className="flex items-center"
              >
                <IconGithub className="w-7 h-7 fill-secondary" />,
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                href="https://www.linkedin.com/in/franky-vargas/"
                className="flex items-center"
              >
                <IconLinkedin className="w-7 h-7 fill-secondary" />,
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <ButtonLanguage />
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Header };
