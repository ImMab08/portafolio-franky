import { useState } from "react";
import { motion } from "framer-motion";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import {
  IconGithub,
  IconLinkedin,
  IconBarsMenu,
  IconCloseMenu,
} from "@/components/icons";
import { ButtonLanguage } from "@/components/ui/buttons/button_language"

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
    { text: `${t("home")}`, href: "/" },
    { text: `${t("about")}`, href: "/about-me" },
    { text: `${t("projects")}`, href: "/projects" },
  ];

  // links de redirección a otras páginas fuera del sitio.
  const navIcons = [
    { icon: <IconGithub className="w-5 md:w-7" />, href:"https://github.com/ImMab08" },
    { icon: <IconLinkedin className="w-5 md:w-7 fill-secondary" />, href:"https://www.linkedin.com/in/franky-vargas/" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-100 md:hidden size-full transition-transform duration-400 ease-in-out ${
          menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } overflow-hidden`}
      >
        {/* Este div es un background transparente para el fondo. */}
        <div
          className={`${
            menuOpen ? "size-full bg-primary/80 absolute z-40" : ""
          }`}
          onClick={closeMenu}
        ></div>
        <div className="w-3/4 h-full flex flex-col justify-between bg-primary shadow-2xl px-5 py-5 absolute z-50">
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
              <Link
                href={link.href}
                className="text-xl text-white font-semibold"
                key={index}
              >
                {link.text}
              </Link>
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
                <Link href={icon.href}>{icon.icon}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-center absolute w-full right-0 z-40 transition-all duration-300">
        {/* Div de links */}
        <div className="flex w-full items-center justify-between max-w-6xl p-6 transition-all duration-300">
          <div className="hidden md:flex space-x-5">
            {/* Mapeamos y realizamos el mismo proceso que en el '.map' realizado más arriba. */}
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-xl text-white font-semibold"
                  key={index}
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Div de icono barras mobile. */}
          <div className="w-full flex justify-between md:hidden" >
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
                transition={{ duration: 0.5, delay: 0.8 }}
                href="https://www.linkedin.com/in/franky-vargas/"
                className="flex items-center"
              >
                <IconLinkedin className="w-7 h-7 fill-secondary" />, 
              </motion.a>
            </div>

            <ButtonLanguage />
          </div>

        </div>
      </nav>
    </>
  );
};

export { Header };
