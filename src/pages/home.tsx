import { AuroraText } from "@/components/magicui/aurora-text";
import { Card } from "@/components/ui/card";
import { TechnologiesButton } from "@/components/ui/technologies-button";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <main className="h-dvh w-full bg-[#050505] px-[40px] pb-[86px] pt-6 sm:pt-[86px] flex flex-col items-center justify-start overflow-y-auto">
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
              Frontend
            </AuroraText>{" "}
            Developer
          </motion.h2>
          <motion.p
            className="text-[#c3c3c3] text-md"
            initial={{ x: -20, y: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            I am a front-end web developer dedicated to building visually
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
            <TechnologiesButton>Node</TechnologiesButton>
            <TechnologiesButton>NextJS</TechnologiesButton>
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
                image="/hollow hero.png"
                title="Hollow Knight (Under Development)"
                description="A Hollow Knight Wiki"
                badges={["React", "NextJs", "Node"]}
                link="https://github.com/Batsy13/hollow-knight"
                githubLink="https://github.com/Batsy13/hollow-knight"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
