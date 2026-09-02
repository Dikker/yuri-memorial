"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/hero2.jpg"
          alt="A cherished memory of our beloved fur-baby"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/70" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
              <Heart size={28} strokeWidth={1.5} fill="currentColor" />
            </div>
          </motion.div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/80">
            Forever Loved
          </p>

          <h1 className="text-5xl font-normal leading-tight sm:text-6xl md:text-8xl">
            Yuri
          </h1>

          <p className="mt-5 text-lg italic text-white/90 sm:text-xl">
            2017 – August 31, 2026
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-white/50" />

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/90 sm:text-2xl">
            “You were only a part of our lives for a while,
            but you made those years unforgettable.”
          </p>

          <motion.a
            href="#memories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm backdrop-blur-sm transition hover:bg-white/20"
          >
            Remember Her
            <ChevronDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}