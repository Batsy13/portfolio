import { useState, MouseEvent } from 'react';

type TechnologiesCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const TechnologiesCard = ({ icon, title, description }: TechnologiesCardProps) => {
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
      className="relative grid grid-rows-[100px_auto] p-4 gap-[10px] bg-[#0a0a0a] rounded-[10px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-[10px] pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.4), transparent 80%)`,
            opacity: isHovered ? 1 : 0,
            WebkitMask: `
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0)
            `,
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '2px',
          }}
        />
      )}

      <div className="p-4 rounded-[5px] grid place-items-center h-auto w-auto bg-black">
        <img src={icon} alt="card-icon" className="size-[61px]" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <h4 className="text-[#FFF] font-bold text-[18px]">{title}</h4>
        <p className="text-[#ECECEC]">{description}</p>
      </div>
    </div>
  );
};