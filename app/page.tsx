import Link from "next/link";

export default function Home() {
  return (
    <section className="p-4 flex flex-col items-center justify-center mx-auto min-h-screen overflow-hidden">

      <h1 className="text-center text-xl sm:text-2xl  md:text-3xl   lg:text-4xl font-extrabold text-white m-2">
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
          To Learn about Next Js Application File Structure Click the below
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

// import Link from "next/link";

// export default function Home() {
//   return (
//     <section className="p-4 flex flex-col items-center justify-center mx-auto min-h-screen">
//       <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
//         Milestone 01
//       </h1>

//       <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
//         Next Js Application
//         <div className="color-layer"></div>
//       </h1>

//       <div className="bg-green-950 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-64 sm:h-80 md:h-96 flex items-center justify-center mt-6 rounded-lg relative">
//         <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white m-6 animate-bounce">
//           Hello World
//         </h1>
//       </div>

//       <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-white font-bold rounded-lg flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-10">
//         <p className="text-center p-3 sm:p-4 md:p-5 lg:p-6">
//           To Learn about Next Js Application File Structure Click the button below
//         </p>

//         <Link
//           href={
//             "https://github.com/KanwalHeer/Milestone-1-Hello-World-Application-In-Next-js-/blob/main/README.md"
//           }
//         >
//           <button className="text-base sm:text-lg md:text-xl lg:text-xl bg-[#082525] p-3 sm:p-4 md:p-5 lg:p-6 text-center rounded-lg hover:bg-green-950 transition duration-300">
//             Click here
//           </button>
//         </Link>
//       </div>

//       <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-white font-bold rounded-lg">
//         <p className="text-center p-3 sm:p-4 md:p-5 lg:p-6">Created by: Giaic Senior Student Kanwal Heer</p>
//       </div>
//     </section>
//   );
// }
