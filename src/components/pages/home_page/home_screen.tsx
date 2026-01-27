import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { Figures } from "./figures";
import { ImageLogo } from "./image_logo";

import { IconArrowRight, IconDownload } from "@/components/icons";

const HomeScreen = () => {
  const t = useTranslations("hero");
  return (
    <section className="h-screen flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:w-full justify-between">
        <div className="md:w-1/2 md:flex md:flex-col md:justify-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-text-primary text-2xl md:text-3xl xl:text-4xl font-bold"
          >
            {t("title")}
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-text-primary text-4xl md:text-5xl xl:text-5xl font-bold md:my-2"
          >
            {t("subtitle")}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-text-primary text-2xl md:text-3xl xl:text-4xl font-bold"
          >
            <span className="text-text-tertiary  h-14">
              {"{"} {t("description")} {"}"}
            </span>
          </motion.h2>

          <div className="flex items-center mt-5 md:mt-14">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              download=""
              target="_blank"
              href="/download/HV Franky Vargas López.pdf"
              className="flex mr-4 rounded-lg bg-white text-dark py-1 md:py-2 px-3 md:px-6 text-sm md:text-lg font-semibold"
            >
              {t("cv")}
              <IconDownload className="size-4 mt-0.5 ml-0.5 block md:hidden" />
              <IconDownload className="mt-1 hidden md:block" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center border-white border rounded-lg py-1 px-3 md:py-2 md:px-4"
            >
              <Link
                className="flex text-text-primary text-sm md:text-lg font-semibold "
                href="/about-me"
              >
                {t("learnMore")}
                <IconArrowRight className="size-3 mt-1 ml-1 block md:hidden" />
                <IconArrowRight className="ml-2 mt-1.5 size-5 hidden md:block" />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative flex items-center justify-center z-50 top-0 left-0 pt-32 md:py-0"
        >
          <ImageLogo />
          <Figures />
        </motion.div>
      </div>
    </section>
  );
};

export { HomeScreen };
