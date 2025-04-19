import { TechnologiesCard } from "@/components/ui/technologies-card";

export const Stack = () => {
  return (
    <section className="h-full w-full bg-black px-[40px] py-[86px] flex flex-col items-center justify-start">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <h2 className="text-[#FFF] text-[32px] font-bold">Technologies</h2>

        <div className="flex flex-col gap-4">
          <h3 className="text-[#999999] text-[24px] font-bold">
            Frontend Development
          </h3>
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
      </div>
    </section>
  );
};
