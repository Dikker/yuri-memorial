"use client";

import { useEffect, useRef } from "react";

export default function AutoPlayVideo({ src, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Browser may block autoplay for some situations
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.55
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative h-full w-full">
        <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
        className="h-full w-full object-cover"
        />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
        </div>
    </div>
    );
}