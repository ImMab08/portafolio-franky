import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { Figures } from "./figures";
import { ImageLogo } from "./image_logo";

import { IconArrowRight, IconDownload } from "@/components/icons";

const HomeScreen = () => {
  const t = useTranslations("hero");
  return (
    <section className="h-screen flex flex-col items-center justify-center px-5 md:px-48">
      <div className="flex flex-col md:flex-row md:w-full justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="md:w-1/2 md:flex md:flex-col md:justify-center"
        >
          <h3 className="text-white text-2xl md:text-3xl 2xl:text-5xl font-bold">
            {t("title")}
          </h3>
          <h1 className="text-white text-4xl md:text-5xl 2xl:text-6xl font-bold md:my-2">
            {t("subtitle")}
          </h1>
          <h2 className="text-white text-2xl md:text-3xl 2xl:text-5xl font-bold">
            <span className="text-secondary h-14">
              {"{"} {t("description")} {"}"}
            </span>
          </h2>

          <div className="flex items-center mt-5 md:mt-14">
            <a
              download=""
              target="_blank"
              href="/HV_Franky_Vargas.pdf"
              className="flex mr-4 rounded-lg bg-white text-dark py-1 md:py-2 px-3 md:px-6 text-sm md:text-lg font-semibold"
            >
              {t("cv")}
              <IconDownload className="size-4 mt-0.5 ml-0.5 block md:hidden" />
              <IconDownload className="mt-1 hidden md:block" />
            </a>

            <div className="flex items-center border-white border rounded-lg py-1 px-3 md:py-2 md:px-4">
              <Link
                className="flex text-white text-sm md:text-lg font-semibold "
                href="/about-me"
              >
                {t("learnMore")}
                <IconArrowRight className="size-3 mt-1 ml-1 block md:hidden" />
                <IconArrowRight className="ml-2 mt-1.5 size-5 hidden md:block" />
              </Link>
            </div>
          </div>
        </motion.div>

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
