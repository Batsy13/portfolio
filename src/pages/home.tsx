import { AuroraText } from "@/components/magicui/aurora-text";
import { Card } from "@/components/ui/card";
import { TechnologiesButton } from "@/components/ui/technologies-button";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <main className="h-svh w-full bg-[#050505] px-4 sm:px-10 pb-[86px] pt-6 sm:pt-[86px] flex flex-col items-center justify-start overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <div className="flex flex-col gap-4 py-4 text-[rgb(255,255,255)] w-full">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ x: 0, y: -20, opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            Hey, I'm Pedro. <br /> A{" "}
            <AuroraText colors={["#FF4D4D", "#FF3333", "#FF1A1A", "#FF0000"]}>
              Web
              Developer
            </AuroraText>
          </motion.h2>
          <motion.p
            className="text-[#c3c3c3] text-sm md:text-md"
            initial={{ x: -20, y: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            I am a web developer dedicated to building visually
            appealing and functionally robust websites. My skills encompass
            responsive design, cross-browser compatibility, performance
            optimization, UX principles and a SOLID architeture.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ x: 0, y: 10, opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            <TechnologiesButton>React</TechnologiesButton>
            <TechnologiesButton>NextJS</TechnologiesButton>
            <TechnologiesButton>Angular</TechnologiesButton>
            <TechnologiesButton>NodeJs</TechnologiesButton>
            <TechnologiesButton>NestJs</TechnologiesButton>
          </motion.div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <motion.h2
            className="text-[#FFF] text-[24px] font-bold"
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            animate={{ opacity: 1 }}
          >
            Newest
          </motion.h2>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              animate={{ opacity: 1 }}
            >
              <Card
                image="/umbra-preview.png"
                title="Umbra"
                description="An application that shows your network traffic"
                badges={["React", "NodeJs"]}
                link="https://github.com/lucascosta224fe/Umbra-Front-End"
                githubLink="https://github.com/lucascosta224fe/Umbra-Front-End"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              animate={{ opacity: 1 }}
            >
              <Card
                image="/kana-training.png"
                title="Kana Training"
                description="A React-based Japanese Kana (Hiragana/Katakana) quiz app with a spaced repetition system. "
                badges={["React"]}
                link="https://kana-training.vercel.app"
                githubLink="https://github.com/Batsy13/kana-training"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
