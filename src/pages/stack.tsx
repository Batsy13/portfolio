import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TechnologiesCard } from "@/components/ui/technologies-card";
import { motion } from "motion/react";

export const Stack = () => {
  return (
    <section className="h-dvh w-full bg-[#050505] px-[40px] py-[100px] flex flex-col items-center justify-start overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <motion.h2
          className="text-[#FFF] text-[32px] font-bold"
          initial={{ y: -20, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Technologies
        </motion.h2>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1 }}
        >
          <AnimatedShinyText className="text-[24px] font-bold">
            Frontend Development
          </AnimatedShinyText>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
            <TechnologiesCard
              icon="/stack/react.svg"
              title="React"
              description="A JavaScript library for building user interfaces or UI components. It enables the creation of dynamic and interactive web applications."
            />
            <TechnologiesCard
              icon="/stack/nextjs.svg"
              title="NextJS"
              description="An open-source React framework that enables server-side rendering and the creation of full-stack web applications. It simplifies routing, data fetching, and deployment."
            />
            <TechnologiesCard
              icon="/stack/angular.svg"
              title="Angular"
              description="A comprehensive platform and framework for building single-page client applications using HTML and TypeScript. It provides a structured approach."
            />
            <TechnologiesCard
              icon="/stack/tailwind.svg"
              title="Tailwind CSS"
              description="A utility-first CSS framework that provides low-level utility classes. This allows for rapid and highly customized UI development."
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <AnimatedShinyText className="text-[24px] font-bold">
            Backend Development
          </AnimatedShinyText>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 lg:grid-cols-2">
            <TechnologiesCard
              icon="/stack/nodejs.svg"
              title="Node"
              description="A JavaScript runtime environment for server-side execution. It's known for its efficiency in building scalable network applications."
            />
            <TechnologiesCard
              icon="/stack/express.svg"
              title="Express"
              description="A lightweight and flexible web application framework for Node.js. It simplifies the development of APIs and web applications."
            />
            {/* <TechnologiesCard
              icon="/stack/python.svg"
              title="Python"
              description="A versatile and readable programming language widely used in web development, data science, automation, and more."
            />
            <TechnologiesCard
              icon="/stack/django.svg"
              title="Django"
              description="A high-level Python web framework that facilitates rapid development of robust and feature-rich web applications."
            /> */}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          animate={{ opacity: 1 }}
        >
          <AnimatedShinyText className="text-[24px] font-bold">
            Complementary Tools
          </AnimatedShinyText>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <TechnologiesCard
              icon="/stack/figma.svg"
              title="Figma"
              description="A collaborative, web-based design tool for creating user interfaces and interactive prototypes. It facilitates real-time teamwork and streamlines the design process for digital products."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
