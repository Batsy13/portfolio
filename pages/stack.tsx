import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TechnologiesCard } from "@/components/ui/technologies-card";

export const Stack = () => {
  return (
    <section className="h-screen w-full bg-[#050505] px-[40px] py-[86px] flex flex-col items-center justify-start overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <h2 className="text-[#FFF] text-[32px] font-bold">Technologies</h2>

        <div className="flex flex-col gap-4">
          <AnimatedShinyText className="text-[24px] font-bold">
            Frontend Development
          </AnimatedShinyText>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <TechnologiesCard
              icon="/src/assets/stack/react.svg"
              title="React"
              description="A JavaScript library for building user interfaces or UI components. It enables the creation of dynamic and interactive web applications."
            />
            <TechnologiesCard
              icon="/src/assets/stack/nextjs.svg"
              title="NextJS"
              description="An open-source React framework that enables server-side rendering and the creation of full-stack web applications. It simplifies routing, data fetching, and deployment."
            />
            <TechnologiesCard
              icon="/src/assets/stack/angular.svg"
              title="Angular"
              description="A comprehensive platform and framework for building single-page client applications using HTML and TypeScript. It provides a structured approach."
            />
            <TechnologiesCard
              icon="/src/assets/stack/tailwind.svg"
              title="Tailwind CSS"
              description="A utility-first CSS framework that provides low-level utility classes. This allows for rapid and highly customized UI development."
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <AnimatedShinyText className="text-[24px] font-bold">
            Backend Development
          </AnimatedShinyText>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <TechnologiesCard
              icon="/src/assets/stack/nodejs.svg"
              title="Node"
              description="A JavaScript runtime environment for server-side execution. It's known for its efficiency in building scalable network applications."
            />
            <TechnologiesCard
              icon="/src/assets/stack/express.svg"
              title="Express"
              description="A lightweight and flexible web application framework for Node.js. It simplifies the development of APIs and web applications."
            />
            <TechnologiesCard
              icon="/src/assets/stack/python.svg"
              title="Python"
              description="A versatile and readable programming language widely used in web development, data science, automation, and more."
            />
            <TechnologiesCard
              icon="/src/assets/stack/django.svg"
              title="Django"
              description="A high-level Python web framework that facilitates rapid development of robust and feature-rich web applications."
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <AnimatedShinyText className="text-[24px] font-bold">
            Complementary Tools
          </AnimatedShinyText>
          <div className="grid grid-cols-2 gap-4">
            <TechnologiesCard
              icon="/src/assets/stack/figma.svg"
              title="Figma"
              description="A collaborative, web-based design tool for creating user interfaces and interactive prototypes. It facilitates real-time teamwork and streamlines the design process for digital products."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
