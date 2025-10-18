import { MouseEvent, ReactNode, useState } from "react";

type EnterpriseCardProps = {
  icon: string;
  name: string;
  jobTitle: string;
  initialDate: string;
  finalDate: string;
  text?: ReactNode;
};

export const EnterpriseCard = ({
  icon,
  name,
  jobTitle,
  initialDate,
  finalDate,
  text,
}: EnterpriseCardProps) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative flex flex-col items-start bg-[#0A0A0A] gap-4 p-4 rounded-2xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none rounded-xl"
          style={{
            background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.4), transparent 80%)`,
            opacity: isHovered ? 1 : 0,
            WebkitMask: `
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0)
            `,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "2px",
          }}
        />
      )}
      <div className="flex items-center gap-4 w-full">
        <img
          src={icon}
          alt="enterprise icon"
          className="size-16 aspect-square rounded-[8px]"
        />
        <div className="flex flex-col text-start w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <span className="text-[14px]">
              {initialDate} - {finalDate}
            </span>
          </div>
          <span className="text-white ">{jobTitle}</span>
        </div>
      </div>
      <div>{text}</div>
    </div>
  );
};
