import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from "react-icons/fa";
import BrandCard from "../components/cards/BrandCard";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { brands } from "../data/catalog";


const AUTOPLAY_DELAY = 6000;
const PANEL_EASE = [0.22, 1, 0.36, 1];

const panelVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction * 24,
    y: 6,
    scale: 0.992,
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction * -18,
    y: -4,
    scale: 0.992,
  }),
};

function Products() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const carouselId = useId();
  const activeBrand = brands[activeBrandIndex];
  const isInteracting = isHovering || isFocused || isTouching;
  const isAutoplayActive = !isAutoplayPaused && !isInteracting && !shouldReduceMotion;
  const panelTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.62, ease: PANEL_EASE };
  const controlMotion = shouldReduceMotion
    ? {}
    : { whileHover: { y: -2, scale: 1.04 }, whileTap: { scale: 0.95 } };

  useEffect(() => {
    if (!isAutoplayActive) {
      return undefined;
    }

    const autoplayTimer = window.setTimeout(() => {
      setDirection(1);
      setActiveBrandIndex((currentIndex) => (currentIndex + 1) % brands.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(autoplayTimer);
  }, [activeBrandIndex, isAutoplayActive]);

  const changeBrand = (nextIndex, nextDirection) => {
    setDirection(nextDirection);
    setActiveBrandIndex(nextIndex);
  };

  const showPreviousBrand = () => {
    changeBrand((activeBrandIndex - 1 + brands.length) % brands.length, -1);
  };

  const showNextBrand = () => {
    changeBrand((activeBrandIndex + 1) % brands.length, 1);
  };

  const selectBrand = (nextIndex) => {
    if (nextIndex === activeBrandIndex) {
      return;
    }

    const forwardDistance = (nextIndex - activeBrandIndex + brands.length) % brands.length;
    const backwardDistance = (activeBrandIndex - nextIndex + brands.length) % brands.length;
    changeBrand(nextIndex, forwardDistance <= backwardDistance ? 1 : -1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousBrand();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextBrand();
    }
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  return (
    <section id="productos" className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle subtitle="Marcas" title="Soluciones de izaje por marca" />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          Explora las líneas HYUNDAI, KITO y SWF. Cada catálogo reúne sus productos
          y fichas técnicas en una página dedicada.
        </p>

        <div
          id={carouselId}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Marcas que comercializa Ingever"
          tabIndex="0"
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onPointerDown={() => setIsTouching(true)}
          onPointerUp={() => setIsTouching(false)}
          onPointerCancel={() => setIsTouching(false)}
          className="relative mx-auto mt-10 max-w-5xl rounded-3xl border border-[#1A1A1A]/10 bg-white/70 p-3 shadow-xl shadow-[#1A1A1A]/5 backdrop-blur-sm outline-none focus-visible:ring-4 focus-visible:ring-[#F5C518]/40 sm:mt-12 sm:p-5"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[#F5C518]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-28 h-64 w-64 rounded-full bg-[#1A1A1A]/5 blur-3xl"
          />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-4 px-2 pb-4 pt-2 sm:px-3 sm:pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C99E00]">
                  Catálogo de marcas
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-500">
                  Marca {activeBrandIndex + 1} de {brands.length}
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <motion.button
                  type="button"
                  onClick={() => setIsAutoplayPaused((paused) => !paused)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#1A1A1A]/10 bg-white text-[#1A1A1A] shadow-sm transition-colors hover:border-[#F5C518] hover:bg-[#F5C518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F5C518]/35 disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label={
                    shouldReduceMotion
                      ? "La rotación automática está desactivada por la preferencia de movimiento reducido"
                      : isAutoplayPaused
                        ? "Reanudar rotación automática"
                        : "Pausar rotación automática"
                  }
                  aria-pressed={isAutoplayPaused}
                  disabled={shouldReduceMotion}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  {...controlMotion}
                >
                  {isAutoplayPaused || shouldReduceMotion ? (
                    <FaPlay aria-hidden="true" />
                  ) : (
                    <FaPause aria-hidden="true" />
                  )}
                </motion.button>
                <motion.button
                  type="button"
                  onClick={showPreviousBrand}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#1A1A1A]/10 bg-white text-[#1A1A1A] shadow-sm transition-colors hover:border-[#F5C518] hover:bg-[#F5C518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F5C518]/35"
                  aria-label={`Ver ${brands[(activeBrandIndex - 1 + brands.length) % brands.length].name}`}
                  aria-controls={carouselId}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  {...controlMotion}
                >
                  <FaArrowLeft aria-hidden="true" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={showNextBrand}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#1A1A1A]/10 bg-white text-[#1A1A1A] shadow-sm transition-colors hover:border-[#F5C518] hover:bg-[#F5C518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F5C518]/35"
                  aria-label={`Ver ${brands[(activeBrandIndex + 1) % brands.length].name}`}
                  aria-controls={carouselId}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  {...controlMotion}
                >
                  <FaArrowRight aria-hidden="true" />
                </motion.button>
              </div>
            </div>

            <div className="relative isolate">
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                <motion.div
                  key={activeBrand.slug}
                  layout
                  custom={direction}
                  variants={panelVariants}
                  initial={shouldReduceMotion ? false : "initial"}
                  animate="animate"
                  exit="exit"
                  transition={panelTransition}
                >
                  <BrandCard brand={activeBrand} reduceMotion={shouldReduceMotion} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 px-2 pb-2 sm:mt-5 sm:px-3 sm:pb-3" aria-label="Seleccionar marca">
              {brands.map((brand, index) => {
                const isActive = index === activeBrandIndex;

                return (
                  <button
                    key={brand.slug}
                    type="button"
                    onClick={() => selectBrand(index)}
                    className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-3 py-2 text-xs font-bold tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F5C518]/35 sm:px-4 sm:text-sm ${
                      isActive
                        ? "border-[#F5C518]/60 text-[#1A1A1A]"
                        : "border-transparent bg-white/65 text-gray-500 hover:border-[#1A1A1A]/10 hover:bg-white hover:text-[#1A1A1A]"
                    }`}
                    aria-pressed={isActive}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-brand-indicator"
                        className="absolute inset-0 bg-[#F5C518]/20"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 340, damping: 28 }
                        }
                      />
                    )}
                    <span className="relative h-1.5 w-7 overflow-hidden rounded-full bg-[#1A1A1A]/15 sm:w-10">
                      {isActive && (
                        <span
                          key={activeBrand.slug}
                          className={
                            shouldReduceMotion
                              ? "absolute inset-y-0 left-0 w-full bg-[#C99E00]"
                              : "absolute inset-y-0 left-0 w-full origin-left bg-[#C99E00] animate-[carouselProgress_6s_linear_forwards]"
                          }
                          style={{
                            animationPlayState: isAutoplayActive ? "running" : "paused",
                          }}
                        />
                      )}
                    </span>
                    <span className="relative">{brand.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Products;
