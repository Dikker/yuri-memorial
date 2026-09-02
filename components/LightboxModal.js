"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, Volume2 } from "lucide-react";

export default function LightboxModal({ media, onClose }) {
  return (
    <AnimatePresence>
      {media && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close media"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
            >
              <X size={23} />
            </button>

            {media.type === "image" ? (
              <div className="relative h-[75vh] w-full overflow-hidden rounded-lg">
                <Image
                  src={media.src}
                  alt={media.title || "Memory of our beloved cat"}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-lg bg-black">
                <video
                  src={media.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[80vh] w-full"
                />

                <div className="pointer-events-none absolute bottom-16 left-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                  <Volume2 size={14} />
                  <span>Video Memory</span>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}