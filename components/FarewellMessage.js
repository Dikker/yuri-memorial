"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FarewellMessage() {
  return (
    <section className="bg-[#f8f4ed] px-6 pb-28 pt-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-[#e2d4c5] bg-[#fffdf9] px-7 py-12 shadow-[0_15px_50px_rgba(91,70,54,0.06)] sm:px-14 sm:py-16"
        >
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#efe3d5]" />
          <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-[#f3e9df]" />

          <div className="relative">
            <div className="flex justify-center">
              <Heart
                size={27}
                className="text-[#a18160]"
                fill="currentColor"
                strokeWidth={1.5}
              />
            </div>

            <p className="mt-6 text-center text-sm uppercase tracking-[0.3em] text-[#a18160]">
              My Last Farewell
            </p>

            <blockquote className="mt-8 text-center text-xl leading-9 text-[#695547] sm:text-2xl sm:leading-10">
              I wish you could live on forever. I wish I could hear your little meows once more. I wish I could hold and hug you tightly again. I wish you could be with us together again. I wish I could've given you the happy life you deserved. I wish I could tell you one last time how much I love you. And I regret not being by your side during your final seconds. 
              <br/>
              <br/>
              After finding you that day, lying on the floor thinking you were only asleep, 
              my heart sank as I hope it was only a dream. But looking at you after lifting you, you had a peaceful look, as if you were just sleeping peacefully. It was like all your pain has gone away. My only hope was that I have given you a happy life. 
              <br/>
              <br/>
              You were loved every day you were here, and you will
              be loved for every day that follows. Your fur-sisters and I 
              will remember you in our hearts.
              <br/>
              <br/>
              Sleep peacefully, my sassy princess. We will carry you 
              in our hearts, always. I hope to be with you again someday. 
              I love you forever Yuri girl♡
            </blockquote>

            <div className="mt-10 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8d7766]">
                With all our love
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}