"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  MapPin,
  Play,
  CalendarDays
} from "lucide-react";
import LightboxModal from "./LightboxModal";
import AutoPlayVideo from "./AutoPlayVideo";

const filters = [
  "All",
  "Milestones",
  "Favorite Spots",
  "Traits"
];

export default function Timeline({ events }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") {
      return events;
    }

    return events.filter(
      (event) => event.category === activeFilter
    );
  }, [activeFilter, events]);

  return (
    <section
      id="memories"
      className="bg-[#f8f4ed] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#a18160]">
            Her Story
          </p>

          <h2 className="mt-4 text-4xl font-normal text-[#5b4636] sm:text-5xl">
            A Life Full of Little Moments
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#806c5c]">
            Some of our precious moments we never want to forget.
            The milestones, the favorite places, and all the
            little traits that made her uniquely herself.
          </p>
        </motion.div>

        <div className="mt-12 flex gap-3 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0rounded-full border px-5 py-2.5 text-sm transition ${
                  isActive
                    ? "border-[#80664c] bg-[#80664c] text-white"
                    : "border-[#d6c5b4] bg-white/50 text-[#6b5849] hover:bg-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-[#dfd2c5] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {filteredEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={event.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -30 : 30
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.05
                  }}
                  className="relative grid md:grid-cols-2 md:gap-12"
                >
                  <div
                    className={`${
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    } ml-8 md:ml-0`}
                  >
                    <div
                      className={`absolute left-0 top-7 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#f8f4ed] bg-[#a18160] shadow-sm md:left-1/2`}
                    >
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-[#e5d8ca] bg-[#fffdf9] shadow-[0_10px_40px_rgba(91,70,54,0.06)]">
                      {event.mediaType === "image" ? (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedMedia({
                              type: "image",
                              src: event.media,
                              title: event.title
                            })
                          }
                          className="group relative block aspect-[16/10] w-full overflow-hidden"
                          aria-label={`Open photo for ${event.title}`}
                        >
                          <Image
                            src={event.media}
                            alt={event.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                            <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-[#5b4636] opacity-0 shadow-lg transition group-hover:scale-100 group-hover:opacity-100">
                              <Camera size={20} />
                            </div>
                          </div>
                        </button>
                      ) : (
                        <div className="group relative aspect-[16/10] w-full overflow-hidden">
                          <AutoPlayVideo
                            src={event.media}
                            title={event.title}
                          />

                          <button
                            type="button"
                            onClick={() =>
                              setSelectedMedia({
                                type: "video",
                                src: event.media,
                                title: event.title
                              })
                            }
                            className="absolute inset-0 flex items-center justify-center bg-black/0 transition hover:bg-black/20"
                            aria-label={`Open video for ${event.title}`}
                          >
                            <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-[#5b4636] opacity-0 shadow-lg transition group-hover:scale-100 group-hover:opacity-100">
                              <Play size={20} fill="currentColor" />
                            </div>
                          </button>

                          <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                            Video Memory
                          </div>
                        </div>
                      )}

                      <div className="p-7 sm:p-8">
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#a18160]">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={14} />
                            {event.date}
                          </span>

                          <span className="hidden text-[#cfbda9] sm:inline">
                            •
                          </span>

                          <span className="rounded-full bg-[#f1e9df] px-3 py-1 text-[10px] tracking-[0.15em]">
                            {event.category}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-normal text-[#5b4636] sm:text-3xl">
                          {event.title}
                        </h3>

                        {event.location && (
                          <div className="mt-3 flex items-center gap-2 text-sm text-[#8c7868]">
                            <MapPin size={16} />
                            {event.location}
                          </div>
                        )}

                        <p className="mt-5 text-base leading-8 text-[#715e4f]">
                          {event.description}
                        </p>

                        {event.mediaType === "image" && (
                          <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[#a18d7c]">
                            Click photo to enlarge
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {filteredEvents.length === 0 && (
          <div className="mt-12 rounded-2xl border border-[#e4d8cb] bg-white/60 p-12 text-center">
            <p className="text-[#806c5c]">
              No memories found in this category.
            </p>
          </div>
        )}
      </div>

      <LightboxModal
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </section>
  );
}