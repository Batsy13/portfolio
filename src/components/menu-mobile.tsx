import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import { contactItems, menuItems } from "./sidebar";

export const MenuMobile = () => {
  const { pathname } = useLocation();

  return (
    <div className="absolute bottom-0 sm:hidden flex gap-2 overflow-x-scroll w-full z-50 h-fit bg-[#121212] py-2 px-4 items-center justify-between">
      <nav className="flex gap-2 justify-between w-full">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.path}
              key={index}
              className={cn(
                "text-[#cecece] p-4 cursor-pointer flex gap-2 items-center hover:text-[#FFF] rounded-xl hover:bg-[#161616]",
                pathname === item.path
                  ? "bg-[#161616] text-[#FFF] brightness-200"
                  : ""
              )}
            >
              {Icon && <Icon className="size-5 flex-none" />}
            </Link>
          );
        })}
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return item.link ? (
            <Link
              className="text-[#cecece] p-4 cursor-pointer flex flex-none gap-2 items-center justify-between hover:text-[#FFF] rounded-xl hover:bg-[#161616]"
              to={item.link}
              target="_blank"
              key={index}
            >
              <div className="flex gap-2 items-center ">
                {Icon && (
                  <img
                    src={`${Icon}`}
                    alt="Icon"
                    className="size-[24px] flex-none"
                  ></img>
                )}
              </div>
            </Link>
          ) : (
            <Link
              to={{ pathname: item.path }}
              key={index}
              className={cn(
                "text-[#cecece] p-4 cursor-pointer flex flex-none gap-2 items-center hover:text-[#FFF] rounded-xl hover:bg-[#161616]",
                pathname === item.path
                  ? "bg-[#161616] text-[#FFF] brightness-200"
                  : ""
              )}
            >
              <div className="flex gap-2 items-center ">
                {Icon && <Icon className="size-[24px] flex-none" />}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
