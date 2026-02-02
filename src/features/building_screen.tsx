import Image from "next/image";
import { motion } from "framer-motion";

const BuildingScreen = () => {
  return (
    <div className="flex flex-col size-full flex-1 items-center justify-center px-5 md:px48">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center"
      >
        <p className="text-white font-bold text-2xl md:text-5xl leading-5 md:leading-10">
          Página en <br />{" "}
          <span className="text-4xl md:text-6xl text-secondary">
            {" "}
            Construcción{" "}
          </span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Image
					className="hidden md:block"
          width={700}
          height={700}
          src="/img/projects/sitio-construccion.png"
          alt=""
        ></Image>
        <Image
					className="block md:hidden"
          width={350}
          height={350}
          src="/img/projects/sitio-construccion.png"
          alt=""
        ></Image>
      </motion.div>
    </div>
  );
};

export { BuildingScreen };
