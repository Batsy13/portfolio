import { AuroraText } from "./magicui/aurora-text";
import { Card } from "./ui/card";
import { TecnologiesButton } from "./ui/tecnologies-button";

export const Home = () => {
  return (
    <main className="h-full w-full bg-black px-[40px] py-[86px] flex flex-col items-center justify-start">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <div className="flex flex-col gap-2 py-4 text-[rgb(255,255,255)] w-full">
          <h2 className="text-[32px] font-bold">
            Hey, I'm Pedro. <br /> A <AuroraText colors ={["#FF4D4D", "#FF3333", "#FF1A1A", "#FF0000"]}>Frontend</AuroraText> Developer
          </h2>
          <p className="text-[#c3c3c3]">
            I am a front-end web developer dedicated to building visually
            appealing and functionally robust websites. My skills encompass
            responsive design, cross-browser compatibility, performance
            optimization, UX principles and a SOLID architeture.
          </p>
          <div className="flex gap-2">
            <TecnologiesButton>React</TecnologiesButton>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[#FFF] text-[24px] font-bold">Projects</h2>
          <div className="grid grid-cols-2 h-[200px] gap-[24px]">
            <Card title="teste" description="testeeeeeeeeee" />
            <Card title="teste2" description="testeeeeeeee2" />
          </div>
        </div>
      </div>
    </main>
  );
};
