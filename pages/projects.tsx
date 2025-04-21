import { motion } from "motion/react";
import { Card } from "../src/components/ui/card";

export const Projects = () => {
  return (
    <section className="h-screen w-full bg-black px-[40px] py-[86px] flex flex-col items-center justify-start overflow-scroll">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <div className="flex flex-col gap-4 w-full">
          <motion.h2
            className="text-[#FFF] text-[24px] font-bold"
            initial={{ x: 0, y: -20, opacity: 0 }}
            transition={{ duration: 2 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 grid-rows-2 gap-[24px]"
            initial={{ x: 0, y: -20, opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
          >
            <Card
              title="Hollow Knight"
              description="lorem ipsum dolor it amet"
              badges={["React", "Node", "NextJs"]}
            />
            <Card
              title="Bat-lib"
              description="lorem ipsum dolor it amet"
              badges={["React", "Python"]}
            />
            <Card
              title="Notes"
              description="lorem ipsum dolor it amet"
              badges={["React", "Node", "NextJs"]}
            />
            <Card
              title="XXXXXXXX"
              description="lorem ipsum dolor it amet"
              badges={["React", "Python"]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
