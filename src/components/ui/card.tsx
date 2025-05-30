type CardProps = {
  title: string;
  description: string;
  badges: string[];
  image?: string;
};

export const Card = ({ title, description, badges, image }: CardProps) => {
  return (
    <div className="flex flex-col h-full w-full rounded-xl">
      <div className="bg-[#848484] rounded-t-xl overflow-hidden aspect-video"><img src={image} alt="Card Image" className="h-full w-full"/></div>
      <div className="w-full flex flex-col bg-[#0A0A0A] rounded-b-xl py-4 px-5 gap-[10px]">
        <h3 className="text-2xl text-[#FFF] font-bold">{title}</h3>
        <span className="text-[#ECECEC]">{description}</span>
        <div className="flex gap-2">
          {badges.map((name, index) => {
            return (
              <div
                className="px-3 py-2 bg-[#1F1F1F] w-fit rounded-[5px] text-[#FFF]"
                key={index}
              >
                <span className="leading-none flex">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
