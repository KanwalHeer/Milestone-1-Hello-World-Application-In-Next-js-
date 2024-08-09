import Link from "next/link";

export default function Home() {
  return (
    <section className="p-4 flex flex-col items-center">
        
      <h1 className="text-center text-xl sm:text-2xl sm:text-center md:text-3xl md:text-center lg:text-center lg:text-4xl font-extrabold text-white m-2">
        Milestone 01
      </h1>

      <h1 className="text-center text-3xl font-extrabold text-white mb-4 relative">
        Next Js Application
        <div className="color-layer"></div>
      </h1>

      <div className="border-collapse bg-green-950 w-80 h-80 flex items-center mt-6 justify-center rounded-lg">
        <h1 className="text-center text-4xl font-extrabold text-white m-6 animate-bounce">
          Hello World
        </h1>
      </div>

      <div className="mt-2 text-white font-bold rounded-lg flex flex-col items-center w-full p-6">
       
        <p className="p-5">
          To Learn about Next Js Application File Structure Click the billow
        </p>

        <Link
          href={
            "https://github.com/KanwalHeer/Milestone-1-Hello-World-Application-In-Next-js-/blob/main/README.md"
          }
        >
          <button className="text-xl bg-[#082525] p-4 text-center rounded-lg hover:bg-green-950">
            Click here
          </button>
        </Link>

      </div>

      <div className="mt-4 text-white font-bold rounded-lg">
        <p className="p-5">Created by: Giaic Senior Student Kanwal Heer</p>
      </div>

    </section>
  );
}
