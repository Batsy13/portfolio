import { ReactNode } from "react";

type TecnologiesButtonProps = {

    children: ReactNode,
    icon?: string,
    variant?: "button" | "ghost" | "outline",
    className?: string;
}

export const TecnologiesButton = ({children, icon, variant, className} : TecnologiesButtonProps) => {
    return (
        <div className={`flex gap-2 items-center text-center px-4 py-1 border-[#FFF] border-[1px] rounded-xl cursor-pointer ${className}`}>
            {icon && <img src={icon} alt="button icon"></img>}
            <p>{children}</p>
        </div>
    )
}