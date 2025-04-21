import {
  Atom,
  Compass,
  Database,
  ExternalLink,
  UserCircle,
} from "lucide-react";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import Github from "@/assets/aside/github.svg"
import Linkedin from "@/assets/aside/linkedin.svg"

export const Sidebar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { title: "Explore", icon: Compass, path: "/" },
    { title: "Projects", icon: Atom, path: "/projects" },
    { title: "Stack", icon: Database, path: "/stack" },
    { title: "About", icon: UserCircle, path: "/about" },
  ];

  const contactItems = [
    {
      title: "Github",
      icon: Github,
      link: "https://github.com/Batsy13",
    },
    {
      title: "Linkedin",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/pedro-costa-b189262b3/",
    },
  ];

  return (
    <aside className="h-full w-[400px] bg-[#0a0a0a] p-4">
      <div className="flex items-center p-4 gap-4">
        <img src="" alt="" className="size-[44px] bg-red-500 rounded-full" />
        <div>
          <p className="font-bold text-[#FFF] text-[20px]">Pedro Costa</p>
          <AnimatedShinyText>Dev Frontend</AnimatedShinyText>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          console.log(item)
          return (
            <Link
              to={item.path}
              key={index}
              className={cn("text-[#cecece] p-4 cursor-pointer flex gap-2 items-center hover:text-[#FFF] rounded-xl hover:bg-[#161616]", pathname === item.path ? "bg-[#161616] text-[#FFF] brightness-200" : "")}
            >
              {Icon && <Icon className="size-5 flex-none" />}
              <p>{item.title}</p>
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-col gap-2 mt-2">
        <AnimatedShinyText className="py-2 px-1">Contact me</AnimatedShinyText>
        <nav className="flex flex-col gap-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                className="text-[#cecece] p-4 cursor-pointer flex gap-2 items-center justify-between hover:text-[#FFF] rounded-xl hover:bg-[#161616]"
                href={item.link}
                target="_blank"
                key={index}
              >
                <div className="flex gap-2 items-center ">
                  {Icon && <img src={`${Icon}`} alt="Icon" className="linkedin-icon size-6 flex-none"></img>}
                  <p>{item.title}</p>
                </div>
                <ExternalLink size={18} />
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
