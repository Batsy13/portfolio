import { useState, MouseEvent } from 'react';
import { Link } from 'react-router';

type CardProps = {
  title: string;
  description: string;
  badges: string[];
  image?: string;
  link?: string;
};

export const Card = ({ title, description, badges, image, link }: CardProps) => {
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
      className="relative flex flex-col w-full h-full overflow-hidden rounded-xl group hover:-translate-y-0.5 ease-in-out duration-500"
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
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '2px',
          }}
        />
      )}

      <Link to={link || ""} className="bg-[#848484] rounded-t-xl overflow-hidden aspect-video" target='_blank'>
        <img src={image} alt="Card Image" className="object-cover w-full h-full" />
      </Link>
      <div className="w-full flex flex-col bg-[#0A0A0A] rounded-b-xl py-4 px-5 gap-[10px]">
        <h3 className="text-2xl text-[#FFF] font-bold">{title}</h3>
        <span className="text-[#ECECEC]">{description}</span>
        <div className="flex gap-2">
          {badges.map((name, index) => (
            <div
              className="px-3 py-2 bg-[#1F1F1F] w-fit rounded-[5px] text-[#FFF]"
              key={index}
            >
              <span className="flex leading-none">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};