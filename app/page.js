import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import CandleSection from "../components/CandleSection";
import FarewellMessage from "../components/FarewellMessage";
import timelineData from "../data/timeline.json";
import { Heart } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Timeline events={timelineData} />

      <CandleSection />

      <FarewellMessage />

      <footer className="border-t border-[#e5d8ca] bg-[#f8f4ed] px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-2 text-[#8d7766]">
          <Heart
            size={15}
            fill="currentColor"
            strokeWidth={1.5}
          />

          <span className="text-md tracking-[0.15em]">
            Forever in our hearts
          </span>

          <Heart
            size={15}
            fill="currentColor"
            strokeWidth={1.5}
          />
        </div>

        <p className="mt-3 text-sm text-[#aa9684]">
          A place for memories, love, and remembrance.
        </p>

        <p className="mt-10 text-xs text-[#aa9684]">
          Developed by bene_dikker
        </p>
      </footer>
    </main>
  );
}