"use client";

import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Geist } from "next/font/google";
import { CharacterV1 } from "@/components/ui/text-scroll-animation";

const geist = Geist({
  subsets: ["latin"],
});

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef });

  const headlineLineOne = "Scan your meal.";
  const headlineLineTwo = "Know your macros.";
  const headlineCenterIndex = Math.floor(
    `${headlineLineOne} ${headlineLineTwo}`.length / 2,
  );

  const macroBars = [
    { label: "Calories", value: "1,840/2,200", width: "84%" },
    { label: "Protein", value: "142g", width: "72%" },
    { label: "Carbs", value: "198g", width: "63%" },
    { label: "Fat", value: "54g", width: "48%" },
  ];

  const tags = [
    {
      text: "Grilled Chicken  32g protein",
      className: "left-3 top-4 max-w-[140px] sm:top-5 sm:max-w-[150px]",
      dotClassName: "left-8 top-16 sm:top-24",
    },
    {
      text: "Brown Rice  45g carbs",
      className: "right-3 top-14 max-w-[120px] sm:top-[78px] sm:max-w-[130px]",
      dotClassName: "right-10 top-[92px] sm:right-12 sm:top-[122px]",
    },
    {
      text: "Broccoli  80 cal",
      className: "left-6 top-[86px] max-w-[110px] sm:top-[122px] sm:max-w-[120px]",
      dotClassName: "left-28 top-[72px] sm:top-[104px]",
    },
  ];

  return (
    <main
      className={`${geist.className} min-h-screen overflow-x-hidden bg-[#09090b]`}
    >
      <div ref={heroRef} className="relative h-[210vh] bg-[#09090b]">
        <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <p className="mx-auto mb-8 block w-full pt-12 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Puretrack
              </p>

              <p className="mb-6 border border-zinc-800 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                No ads. No bloat. Just macros.
              </p>

              <div
                className="w-full overflow-x-hidden px-4 text-center"
                style={{ perspective: "500px" }}
              >
                <h1 className="whitespace-nowrap text-center text-3xl font-bold leading-[0.95] tracking-normal text-white sm:text-6xl">
                  <span className="block whitespace-nowrap">
                    {headlineLineOne.split("").map((char, index) => (
                      <CharacterV1
                        key={`line-one-${char}-${index}`}
                        char={char}
                        index={index}
                        centerIndex={headlineCenterIndex}
                        scrollYProgress={scrollYProgress}
                      />
                    ))}
                  </span>
                  <span className="block whitespace-nowrap">
                    {headlineLineTwo.split("").map((char, index) => (
                      <CharacterV1
                        key={`line-two-${char}-${index}`}
                        char={char}
                        index={headlineLineOne.length + 1 + index}
                        centerIndex={headlineCenterIndex}
                        scrollYProgress={scrollYProgress}
                      />
                    ))}
                  </span>
                </h1>
              </div>

              <p className="mt-7 max-w-2xl text-balance px-2 text-base leading-7 text-zinc-400 sm:px-0 sm:text-xl">
                The fastest macro tracker ever built. Type it or snap it —
                done in 2 seconds.
              </p>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setIsModalOpen(true);
                }}
                className="mt-10 w-full border border-zinc-700 bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black sm:w-auto sm:text-base"
              >
                Get Instant Access — $4.99/mo
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="mx-auto mt-8 w-full max-w-[320px] rounded-[2.5rem] border border-zinc-700/80 bg-zinc-950 p-2 shadow-[0_0_80px_rgba(255,255,255,0.1)] sm:mt-16 sm:rounded-[3rem]"
            >
              <div className="relative h-[390px] w-full overflow-hidden rounded-[2rem] border border-zinc-800 bg-[#0c0c0f] p-4 shadow-inner sm:h-[560px] sm:rounded-[2.5rem]">
                <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

                <div className="overflow-hidden rounded-t-[2rem]">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300"
                      alt=""
                      className="h-28 w-full rounded-t-[1.5rem] object-cover sm:h-40 sm:rounded-t-[2rem]"
                    />
                    <div className="absolute inset-0 rounded-t-[1.5rem] bg-black/15 sm:rounded-t-[2rem]" />

                    {tags.map((tag, index) => (
                      <div key={tag.text}>
                        <motion.span
                          initial={{ y: 8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 0.4 + index * 0.1,
                            duration: 0.35,
                            ease: "easeOut",
                          }}
                          className={`absolute z-10 border border-white/20 bg-black/45 px-2 py-1 text-xs font-medium leading-tight text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md ${tag.className}`}
                        >
                          {tag.text}
                        </motion.span>
                        <motion.span
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.4 + index * 0.1,
                            duration: 0.35,
                            ease: "easeOut",
                          }}
                          className={`absolute z-10 h-2 w-2 rounded-full border border-white bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)] ${tag.dotClassName}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm backdrop-blur-xl sm:mt-6 sm:rounded-3xl sm:py-4">
                  <div className="space-y-2.5 sm:space-y-4">
                    {macroBars.map((macro) => (
                      <div key={macro.label}>
                        <div className="mb-1.5 flex items-center justify-between gap-4 text-sm sm:mb-2">
                          <span className="text-zinc-400">{macro.label}</span>
                          <span className="font-medium text-white">
                            {macro.value}
                          </span>
                        </div>
                        <div className="h-1.5 overflow-hidden bg-zinc-800">
                          <div
                            className="h-full bg-white"
                            style={{ width: macro.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 border border-white/10 bg-zinc-950/90 px-3 py-2.5 text-left text-xs text-zinc-500 shadow-[0_0_40px_rgba(255,255,255,0.16)] backdrop-blur-xl sm:px-4 sm:py-3 sm:text-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-white/20 bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.45)]">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7 4H5a1 1 0 0 0-1 1v2m13-3h2a1 1 0 0 1 1 1v2M7 20H5a1 1 0 0 1-1-1v-2m13 3h2a1 1 0 0 0 1-1v-2M8 12h8"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <span>Describe your meal or upload a photo...</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-md rounded-2xl border border-white bg-[#09090b] p-7 text-center shadow-[0_0_80px_rgba(255,255,255,0.1)]"
            onClick={(event) => event.stopPropagation()}
          >
            {isSubmitted ? (
              <p className="text-xl font-semibold leading-8 text-white">
                You're on the list. We'll be in touch.
              </p>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-white">You're early.</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  Server spots are limited. Lock in 50% off for life.
                </p>

                <form
                  className="mt-7 space-y-3"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setIsSubmitted(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-white"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg border border-white bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
                  >
                    Join the Waitlist
                  </button>
                </form>

                <p className="mt-4 text-xs text-zinc-500">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </motion.div>
        </div>
      ) : null}
    </main>
  );
}
