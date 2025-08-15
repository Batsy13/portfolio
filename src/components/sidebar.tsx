import {
  Atom,
  ChevronLeft,
  ChevronRight,
  Compass,
  Database,
  ExternalLink,
  Mail,
  Terminal,
  UserCircle,
} from "lucide-react";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import Github from "@/assets/aside/github.svg";
import Linkedin from "@/assets/aside/linkedin.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const menuItems = [
  { title: "Explore", icon: Compass, path: "/" },
  { title: "Projects", icon: Atom, path: "/projects" },
  { title: "Stack", icon: Database, path: "/stack" },
  { title: "About", icon: UserCircle, path: "/about" },
  { title: "Achievements", icon: Terminal, path: "/achievements"}
];

const contactItems = [
  {
    title: "Email",
    icon: Mail,
    path: "/contact",
  },
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

export const Sidebar = () => {
  const [isCollapse, setCollapse] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCollapse(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`relative hidden sm:block h-full bg-[#0a0a0a] p-4 transition-all duration-300 ease-in-out ${
        isCollapse ? "w-[84px]" : "w-96"
      }`}
    >
      <div
        className={`flex items-center py-4 gap-4 ${
          isCollapse ? "py-0 justify-center" : "py-4"
        }`}
      >
        <img
          src="/jokerpersona.png"
          alt="Icon"
          className="size-[44px] shrink rounded-full"
        />
        <div className={cn(isCollapse ? "hidden" : "")}>
          <p className="font-bold text-[#FFF] text-[20px]">Pedro Costa</p>
          <AnimatedShinyText>Dev Frontend</AnimatedShinyText>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
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
              <span
                className={cn(isCollapse ? "hidden opacity-0" : "opacity-100")}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-col gap-2 mt-2">
        <AnimatedShinyText
          className={`py-2 px-1 ${isCollapse ? "text-center text-[12px]" : ""}`}
        >
          Contact me
        </AnimatedShinyText>
        <nav className="flex flex-col gap-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return item.link ? (
              <a
                className="text-[#cecece] p-4 cursor-pointer flex gap-2 items-center justify-between hover:text-[#FFF] rounded-xl hover:bg-[#161616]"
                href={item.link}
                target="_blank"
                key={index}
              >
                <div className="flex gap-2 items-center ">
                  {Icon && (
                    <img
                      src={`${Icon}`}
                      alt="Icon"
                      className="linkedin-icon size-6 flex-none"
                    ></img>
                  )}
                  <span
                    className={cn(
                      isCollapse ? "hidden opacity-0" : "opacity-100"
                    )}
                  >
                    {item.title}
                  </span>
                </div>
                <ExternalLink
                  size={18}
                  className={cn(isCollapse ? "hidden opacity-0" : "opacity-100")}
                />
              </a>
            ) : (
              <Link
                to={{pathname: item.path}}
                key={index}
                className={cn(
                  "text-[#cecece] p-4 cursor-pointer flex gap-2 items-center hover:text-[#FFF] rounded-xl hover:bg-[#161616]",
                  pathname === item.path
                    ? "bg-[#161616] text-[#FFF] brightness-200"
                    : ""
                )}
              >
                <div className="flex gap-2 items-center ">
                  {Icon && <Icon className="size-5 flex-none" />}
                  <span
                    className={cn(
                      isCollapse ? "hidden opacity-0" : "opacity-100"
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      <button
        className="absolute hidden  -right-[1rem] top-[1.2rem] bg-[#000000] border-[1px] border-[#1f1f1f] rounded-full size-8 md:grid place-items-center cursor pointer transition-all duration-200 ease-in-out"
        onClick={() => setCollapse(!isCollapse)}
      >
        {isCollapse ? (
          <ChevronRight
            className="h-4 w-4 transition-transform duration-200 ease-in-out text-[#454545] hover:text-[#FFF] cursor-pointer"
          />
        ) : (
          <ChevronLeft
            className="h-4 w-4 transition-transform duration-200 ease-in-out text-[#454545] hover:text-[#FFF] cursor-pointer"
          />
        )}
      </button>
    </aside>
  );
};