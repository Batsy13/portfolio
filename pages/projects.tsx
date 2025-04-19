import { Card } from "../src/components/ui/card";

export const Projects = () => {
  return (
    <section className="h-full w-full bg-black px-[40px] py-[86px] flex flex-col items-center justify-start">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFF] text-[24px] font-bold">Projects</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-[24px]">
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
              title="Hollow Knight"
              description="lorem ipsum dolor it amet"
              badges={["React", "Node", "NextJs"]}
            />
            <Card
              title="Bat-lib"
              description="lorem ipsum dolor it amet"
              badges={["React", "Python"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
