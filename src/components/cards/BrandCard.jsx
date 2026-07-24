import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { getBrandProductCount } from "../../data/catalog";
import Button from "../ui/Button";

const EASE = [0.22, 1, 0.36, 1];

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: EASE },
  },
};

function BrandCard({ brand, reduceMotion = false }) {
  const productCount = getBrandProductCount(brand);

  return (
    <article className="grid overflow-hidden rounded-3xl border border-[#1A1A1A]/8 bg-white shadow-lg shadow-[#1A1A1A]/5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.64, ease: EASE }}
        className="relative isolate aspect-[4/3] min-h-56 overflow-hidden bg-[radial-gradient(circle_at_top_left,_#fff_0%,_#e9edf0_47%,_#cfd8dc_100%)] p-6 sm:min-h-80 sm:p-10 md:aspect-auto"
      >
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[18px] border-[#F5C518]/25"
        />
        <img
          src={brand.image}
          alt={brand.imageAlt}
          className="relative h-full w-full object-contain"
        />
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        className="flex flex-col items-start p-6 sm:p-8 lg:p-10"
      >
        <motion.p variants={contentItemVariants} className="text-xs font-bold uppercase tracking-[0.18em] text-[#C99E00]">
          Marca industrial
        </motion.p>
        <motion.h3 variants={contentItemVariants} className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
          {brand.name}
        </motion.h3>
        <motion.p variants={contentItemVariants} className="mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          {brand.shortDescription}
        </motion.p>

        <motion.p variants={contentItemVariants} className="mt-6 rounded-full bg-[#F5C518]/15 px-4 py-2 text-sm font-bold text-[#1A1A1A]">
          {productCount} {productCount === 1 ? "producto" : "productos"}
        </motion.p>

        <motion.div variants={contentItemVariants} className="mt-7 w-full sm:w-auto">
          <Button
            to={`/marcas/${brand.slug}`}
            className="group w-full hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            aria-label={`Ver productos ${brand.name}`}
          >
            Ver productos
            <FaArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </article>
  );
}

export default BrandCard;
