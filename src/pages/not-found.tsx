import { Link } from "react-router"

export const NotFound = () => {
  return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4 text-white bg-[#050505]">
            <h1 className="text-[40px] font-bold">404</h1>
            <h2 className="text-[24px]">Page not found</h2>
            <Link to={"/"} className="px-4 py-3 bg-primary rounded-xl hover:bg-primary/70">Go back to main page</Link>
        </div>
  )
}