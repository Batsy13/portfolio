import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

export const Projects = () => {
  return (
    <section className="h-dvh w-full bg-[#050505] px-[40px] py-[100px] flex flex-col items-center justify-start overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <div className="flex flex-col w-full gap-4">
          <motion.h2
            className="text-[#FFF] text-[24px] font-bold"
            initial={{ x: 0, y: -20, opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-rows-2 gap-[24px]"
            initial={{ x: 0, y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            <Card
              image="/umbra-preview.png"
              title="Umbra"
              description="An application that shows your network traffic"
              badges={["React", "NodeJs"]}
              link="https://github.com/lucascosta224fe/Umbra-Front-End"
            />
            <Card
              image="/hollow hero.png"
              title="Hollow Knight (Under Development)"
              description="A Hollow Knight Wiki"
              badges={["React", "NextJs", "Node"]}
              link="https://github.com/Batsy13/hollow-knight"
              githubLink="https://github.com/Batsy13/hollow-knight"
            />
            <Card
              image="/batlib.png"
              title="Bat-lib (Under Development)"
              description="A React component library built as a personal study project."
              badges={["React"]}
              link="https://github.com/Batsy13/bat-ui"
              githubLink="https://github.com/Batsy13/bat-ui"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
