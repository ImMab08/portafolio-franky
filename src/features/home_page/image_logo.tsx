import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageLogo = () => {
  return (
    <div>
      <motion.div
        className="hidden md:flex"
        animate={{ y: [15, 0, -15, 0, 15], x: [0, 15, 0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      >
        <Image
          className="relative"
          src="/img/logo/picture-franky.png"
          width={330}
          height={330}
          alt=""
        />
      </motion.div>

      <motion.div
        className="md:hidden"
        animate={{ y: [10, 0, -10, 0, 10], x: [0, 10, 0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      >
        <Image
          className="relative"
          src="/img/logo/picture-franky.png"
          width={300}
          height={300}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export { ImageLogo };
