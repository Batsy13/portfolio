import { Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

type AchievementCardProps = {
  image: string;
  imageLink: string;
  title: string;
  subtitle: string;
  date: string;
  icon: string;
};

export const AchievementCard = ({
  image,
  imageLink,
  title,
  subtitle,
  date,
  icon,
}: AchievementCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="w-full rounded-[24px] relative "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          className="rounded-[14px] object-cover w-full h-full transition-opacity duration-300 aspect-[16/12]"
          alt={title}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-gray-600/10 to-black/70 rounded-[14px] transition-opacity duration-1000 ease-in-out opacity-100">
            <div className="flex justify-start p-4">
              <a
                href={imageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 font-bold text-[14px] text-white bg-black rounded-md hover:text-[#FF4D4D] hover:border-[#FF4D4D] border border-black"
              >
                <ExternalLink size={20}/> See Certificate
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-3 px-0 py-4">
        <img src={icon} className="size-[50px] rounded-[8px]"></img>
        <div className="flex flex-col ">
          <h3 className="text-[16px] text-white font-semibold">{title}</h3>
          <h4 className="text-[14px] text-white">{subtitle}</h4>
          <span className="flex items-center justify-start gap-2 text-[14px] text-[#979797] mt-1">
            <Calendar size={16} /> {date}
          </span>
        </div>
      </div>
    </div>
  );
};
