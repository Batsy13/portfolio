import { EnterpriseCard } from "@/components/ui/enterprise-card";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section className="flex w-full items-center justify-center bg-[#050505] px-6 md:px-10">
      <div className="flex w-full max-w-[1000px] flex-col items-center gap-6 py-10 text-center text-[#e0e0e0] md:py-20">
        <motion.img
          src="/me.jpg"
          alt="Profile"
          className="size-32 rounded-full border-[5px] border-[#222222] object-cover xl:size-40 flex"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1 }}
        />

        <div className="flex flex-col gap-4 md:gap-6">
          <motion.h2
            className="text-[20px] font-bold md:text-[24px]"
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="text-justify text-sm md:text-base"
            initial={{ x: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Hi, I'm <strong>Pedro</strong>, a passionate brazilian{" "}
            <span className="font-medium text-[#FF3333]">
              Frontend Developer
            </span>{" "}
            dedicated to crafting engaging and intuitive digital experiences. I
            am currently pursuing a{" "}
            <span className="font-medium text-[#FF3333]">
              Bachelor's Degree in Computer Science at IESB University
            </span>
            . Throughout my journey, I've been continuously building skills in
            web technologies, frameworks, and modern{" "}
            <span className="font-medium text-[#FF3333]">UI/UX</span> design
            principles. I'm excited to apply what I'm learning both academically
            and professionally, bridging the gap between design and technology
            to deliver impactful projects.
          </motion.div>
        </div>

        <div className="mt-6 gap-4 md:grid xl:grid-cols-2 md:gap-6">
          <div className="flex flex-col gap-4">
            <motion.h3
              className="text-[20px] font-bold md:text-[24px]"
              initial={{ y: -10, opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              animate={{ y: 0, opacity: 1 }}
            >
              My Career So far
            </motion.h3>
            <motion.span
              className="text-justify text-sm md:text-base"
              initial={{ y: -10, opacity: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              animate={{ y: 0, opacity: 1 }}
            >
              My professional trajectory in web development has been
              characterized by a deep immersion in modern front-end frameworks,
              particularly{" "}
              <span className="font-medium text-[#FF3333]">React</span> and{" "}
              <span className="font-medium text-[#FF3333]">Next.js</span>. While
              my proficiency extends to projects leveraging{" "}
              <span className="font-medium text-[#FF3333]">Angular</span>, my
              core focus lies in harnessing the power of component-based
              architectures and server-side rendering for optimal performance
              and scalability. A defining aspect of my career has been my
              proactive involvement in design discussions and the establishment
              of sound architectural patterns, contributing directly to the
              structural integrity and maintainability of the applications I
              build. My commitment to writing clean, scalable, and maintainable
              code is further reinforced by my understanding and application of
              <span className="font-medium text-[#FF3333]">
                {" "}
                SOLID principles
              </span>{" "}
              in object-oriented design, ensuring robust and adaptable software
              solutions.
            </motion.span>
          </div>

          <div></div>
        </div>
        <div className="flex w-full flex-col gap-4 md:gap-6">
          <motion.h3
            className="text-[20px] font-bold md:text-[24px]"
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Previous Experience
          </motion.h3>
          <motion.div
            className="grid w-full grid-cols-1 gap-4 "
            initial={{ x: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <EnterpriseCard
              icon={"/automatizai.jpg"}
              name="automatizAI"
              jobTitle="Frontend developer (trainee)"
              initialDate="May 2024"
              finalDate="May 2025"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
