"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Flame, Heart } from "lucide-react";

const STORAGE_KEY = "pet-memorial-candle-lit";

export default function CandleSection() {
  const [isLit, setIsLit] = useState(false);
  const [candleCount, setCandleCount] = useState(0);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === "true") {
      setIsLit(true);
    }

    const count = window.localStorage.getItem(
      "pet-memorial-candle-count"
    );

    if (count) {
      setCandleCount(Number(count));
    }
  }, []);

  const lightCandle = () => {
    if (isLit) {
      return;
    }

    setIsLit(true);

    const newCount = candleCount + 1;
    setCandleCount(newCount);

    window.localStorage.setItem(STORAGE_KEY, "true");
    window.localStorage.setItem(
      "pet-memorial-candle-count",
      String(newCount)
    );

    confetti({
      particleCount: 45,
      spread: 60,
      startVelocity: 18,
      origin: {
        x: 0.5,
        y: 0.65
      },
      scalar: 0.7,
      ticks: 90
    });
  };

  return (
    <section className="bg-[#f1e9df] px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-[#ddcdbb] bg-[#fffdf9] px-7 py-14 text-center shadow-[0_20px_60px_rgba(91,70,54,0.08)] sm:px-12"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f2e7da] text-[#9a7958]">
            <Heart size={27} fill="currentColor" strokeWidth={1.5} />
          </div>

          <p className="mt-7 text-sm uppercase tracking-[0.3em] text-[#a18160]">
            A Small Gesture
          </p>

          <h2 className="mt-4 text-4xl font-normal text-[#5b4636] sm:text-5xl">
            Light a Candle in Her Memory
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#806c5c]">
            Give a quiet moment to remember her. Light a candle as
            a small symbol of the love, warmth, and memories she
            left behind.
          </p>

          <div className="relative mx-auto mt-12 h-56 w-40">
            {/* Candle body */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto h-36 w-28 rounded-b-2xl rounded-t-md border border-[#d4c1ad] bg-gradient-to-r from-[#eee0cf] via-[#fffaf3] to-[#e4d1bc] shadow-[0_15px_35px_rgba(91,70,54,0.12)]">
                {/* Wick */}
                <div className="absolute left-0 right-0 top-5 mx-auto h-8 w-1 rounded-full bg-[#b69b7f]" />
            </div>

            {isLit ? (
                <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.08, 0.96, 1],
                    y: 0
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    scale: {
                    repeat: Infinity,
                    duration: 1.6
                    }
                }}
                className="absolute left-0 right-0 top-0 mx-auto flex h-28 w-20 items-center justify-center"
                >
                {/* Glow */}
                <div className="absolute h-20 w-20 rounded-full bg-orange-300/20 blur-xl" />

                {/* Flame */}
                <motion.div
                    animate={{
                    scaleY: [1, 1.12, 0.92, 1],
                    scaleX: [1, 0.94, 1.05, 1]
                    }}
                    transition={{
                    repeat: Infinity,
                    duration: 1.2
                    }}
                    className="relative h-16 w-10 rounded-[50%_50%_45%_45%] bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 shadow-[0_0_25px_rgba(245,158,11,0.7)]"
                />
                </motion.div>
            ) : (
                <div className="absolute left-0 right-0 top-8 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f4ede4] text-[#b39a83]">
                <Flame size={28} />
                </div>
            )}
            </div>

          <button
            type="button"
            onClick={lightCandle}
            disabled={isLit}
            className={`mt-8 rounded-full px-7 py-3.5 text-sm font-medium transition ${
              isLit
                ? "cursor-default bg-[#d8c8b7] text-[#715e4f]"
                : "bg-[#80664c] text-white shadow-sm hover:bg-[#6d553f]"
            }`}
          >
            {isLit ? "Candle Lit in Her Memory" : "Light a Candle"}
          </button>

          <p className="mt-5 text-sm text-[#9a8573]">
            {isLit
              ? "Your candle will remain remembered on this device."
              : "A quiet gesture can carry a lot of love."}
          </p>

          {candleCount > 0 && (
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#a18160]">
              {candleCount} candle{" "}
              {candleCount === 1 ? "has" : "have"} been lit on this device
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}