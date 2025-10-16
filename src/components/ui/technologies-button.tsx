import { ReactNode } from "react";

type TecnologiesButtonProps = {
    children: ReactNode,
    className?: string;
}

export const TechnologiesButton = ({children, className} : TecnologiesButtonProps) => {
    return (
        <div className={`flex items-center justify-center text-center px-4 py-[5px] border-[#4B0000] shadow-[0_0_10px_rgb(246,0,0,0.6)] border-[1px] rounded-xl  ${className}`}>
            <span className="leading-none">{children}</span>
        </div>
    )
}