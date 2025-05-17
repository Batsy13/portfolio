import { motion } from "motion/react";
import { AuroraText } from "../src/components/magicui/aurora-text";
import { Card } from "../src/components/ui/card";
import { TechnologiesButton } from "../src/components/ui/technologies-button";

export const Home = () => {
  return (
    <main className="h-screen w-full bg-[#050505] px-[40px] py-[86px] flex flex-col items-center justify-start overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <div className="flex flex-col gap-4 py-4 text-[rgb(255,255,255)] w-full">
          <motion.h2
            className="text-[32px] font-bold"
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
            className="text-[#c3c3c3]"
            initial={{ x: -20, y: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5  }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            I am a front-end web developer dedicated to building visually
            appealing and functionally robust websites. My skills encompass
            responsive design, cross-browser compatibility, performance
            optimization, UX principles and a SOLID architeture.
          </motion.p>
          <motion.div
            className="flex gap-3"
            initial={{ x: 0, y: 10, opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            <TechnologiesButton>React</TechnologiesButton>
            <TechnologiesButton>Node</TechnologiesButton>
            <TechnologiesButton>NextJS</TechnologiesButton>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 w-full">
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
                image="/hollow hero.png"
                title="Hollow Knight"
                description="lorem ipsum dolor it amet"
                badges={["React", "Node", "NextJs"]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              animate={{ opacity: 1 }}
            >
              <Card
                title="Bat-lib"
                description="lorem ipsum dolor it amet"
                badges={["React", "Python"]}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
