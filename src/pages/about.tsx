import { motion } from "motion/react";

export const About = () => {
  return (
    <section className="h-screen w-full bg-[#050505] px-6 py-10 flex flex-col items-center justify-start overflow-y-auto md:px-10 md:py-[100px] md:justify-center">
      <div className="flex flex-col items-center text-center gap-6 max-w-[1000px] w-full text-[#e0e0e0]">
        <motion.img
          src="/jokerpersona.png"
          alt="Profile"
          className="size-32 md:size-40 border-[5px] border-[#222222] rounded-full"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1 }}
        />

        <div className="flex flex-col gap-4 md:gap-6">
          <motion.h2
            className="font-bold text-[20px] md:text-[24px]"
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="text-sm text-justify md:text-base"
            initial={{ x: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Hi, I'm <strong>Pedro</strong>, a passionate brazilian{" "}
            <span className="text-[#FF3333] font-medium">
              Frontend Developer
            </span>{" "}
            dedicated to crafting engaging and intuitive digital experiences. I
            am currently pursuing a{" "}
            <span className="text-[#FF3333] font-medium">
              Bachelor's Degree in Computer Science at IESB University
            </span>
            . Throughout my journey, I've been continuously building skills in
            web technologies, frameworks, and modern{" "}
            <span className="text-[#FF3333] font-medium">UI/UX</span> design
            principles. I'm excited to apply what I'm learning both academically
            and professionally, bridging the gap between design and technology
            to deliver impactful projects.
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 mt-6 md:gap-6 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <motion.h3
              className="font-bold text-[20px] md:text-[24px]"
              initial={{ y: -10, opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              animate={{ y: 0, opacity: 1 }}
            >
              My Career So far
            </motion.h3>
            <motion.span
              className="text-sm text-justify md:text-base"
              initial={{ y: -10, opacity: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              animate={{ y: 0, opacity: 1 }}
            >
              My professional trajectory in web development has been
              characterized by a deep immersion in modern front-end frameworks,
              particularly{" "}
              <span className="text-[#FF3333] font-medium">React</span> and{" "}
              <span className="text-[#FF3333] font-medium">Next.js</span>. While
              my proficiency extends to projects leveraging{" "}
              <span className="text-[#FF3333] font-medium">Angular</span>, my
              core focus lies in harnessing the power of component-based
              architectures and server-side rendering for optimal performance
              and scalability. A defining aspect of my career has been my
              proactive involvement in design discussions and the establishment
              of sound architectural patterns, contributing directly to the
              structural integrity and maintainability of the applications I
              build. My commitment to writing clean, scalable, and maintainable
              code is further reinforced by my understanding and application of
              <span className="text-[#FF3333] font-medium">
                {" "}
                SOLID principles
              </span>{" "}
              in object-oriented design, ensuring robust and adaptable software
              solutions.
            </motion.span>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};