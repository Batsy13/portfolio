type TechnologiesCardProps = {
    icon: string;
    title: string;
    description: string;
}

export const TechnologiesCard = ({icon, title, description}: TechnologiesCardProps) => {    
    return (
        <div className="grid grid-rows-[100px_auto] p-4 gap-[10px] bg-[#0a0a0a] rounded-[10px]">
            <div className="p-4 rounded-[5px] grid place-items-center h-auto w-auto bg-black"> 
                <img src={icon} alt="card-icon" className="size-[61px]" />
            </div>
            <div className="flex flex-col gap-[10px]">
                <h4 className="text-[#FFF] font-bold text-[18px]">{title}</h4>
                <p className="text-[#ECECEC]">{description}</p>
            </div>  
        </div>
    )
}