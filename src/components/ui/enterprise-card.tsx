import { ReactNode } from "react";

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
  return (
    <div className="flex flex-col items-start bg-[#0A0A0A] gap-4 p-4 rounded-2xl">
      <div className="flex items-center gap-4 w-full">
        <img
          src={icon}
          alt="enterprise icon"
          className="size-16 aspect-square rounded-[8px]"
        />
        <div className="flex flex-col text-start w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <span className="text-[14px]">
              {initialDate} - {finalDate}
            </span>
          </div>
          <span className="text-white ">{jobTitle}</span>
        </div>
      </div>
      <div className="hidden">{text}</div>
    </div>
  );
};
