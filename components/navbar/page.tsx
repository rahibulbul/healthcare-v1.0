// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isClick, setIsClick] = useState(false);
//   const [currentPath, setCurrentPath] = useState("");

//   useEffect(() => {
//     // Check if window is defined to ensure we're in the client environment
//     if (typeof window !== "undefined") {
//       const { pathname } = window.location;
//       setCurrentPath(pathname);
//     }
//   }, []); // Empty dependency array ensures this runs only once on mount

//   const toggleNavbar = () => {
//     setIsClick(!isClick);
//   };

//   const isActive = (href) => currentPath === href;

//   return (
//     <nav className="bg-white w-full shadow-md sticky top-0 z-50">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-36">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link
//                 href="/"
//                 className="text-gray-500 font-semibold text-[26px] cursor-pointer hover:text-white hover:bg-black duration-500 rounded-lg p-2"
//               >
//                 HealthCare
//               </Link>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center space-x-10">
//               <Link
//                 href="/"
//                 className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                   isActive("/") ? "text-white bg-black" : ""
//                 }`}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                   isActive("/about") ? "text-white bg-black" : ""
//                 }`}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/services"
//                 className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                   isActive("/services") ? "text-white bg-black" : ""
//                 }`}
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/contact"
//                 className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                   isActive("/contact") ? "text-white bg-black" : ""
//                 }`}
//               >
//                 Contact
//               </Link>
//               <Link
//                 href="/login"
//                 className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                   isActive("/login") ? "text-white bg-black" : ""
//                 }`}
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button
//               className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:right-2 focus:ring-inset focus:ring-black"
//               onClick={toggleNavbar}
//             >
//               {isClick ? (
//                 <svg
//                   className="h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isClick && (
//         <div className="md:hidden">
//           <div className="px-10 pt-2 pb-3 space-y-2 sm:px-3">
//             <Link
//               href="/"
//               className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                 isActive("/") ? "text-white bg-black" : ""
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                 isActive("/about") ? "text-white bg-black" : ""
//               }`}
//             >
//               About
//             </Link>
//             <Link
//               href="/services"
//               className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                 isActive("/services") ? "text-white bg-black" : ""
//               }`}
//             >
//               Services
//             </Link>
//             <Link
//               href="/contact"
//               className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                 isActive("/contact") ? "text-white bg-black" : ""
//               }`}
//             >
//               Contact
//             </Link>
//             <Link
//               href="/login"
//               className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
//                 isActive("/login") ? "text-white bg-black" : ""
//               }`}
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;
      setCurrentPath(pathname);
    }
  }, []);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const isActive = (href) => currentPath === href;

  return (
    <nav className="bg-white w-full shadow-md sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-36">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-gray-500 font-semibold text-[26px] cursor-pointer hover:text-white hover:bg-black duration-500 rounded-lg p-2"
              >
                HealthCare
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-10">
              <Link
                href="/"
                className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
                  isActive("/") ? "text-white bg-black" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
                  isActive("/about") ? "text-white bg-black" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
                  isActive("/services") ? "text-white bg-black" : ""
                }`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
                  isActive("/contact") ? "text-white bg-black" : ""
                }`}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className={`text-gray-500 font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
                  isActive("/login") ? "text-white bg-black" : ""
                }`}
              >
                Login
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:right-2 focus:ring-inset focus:ring-black"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease ${
          isClick ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-10 pt-2 pb-3 space-y-2 sm:px-3">
          <Link
            href="/"
            className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
              isActive("/") ? "text-white bg-black" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
              isActive("/about") ? "text-white bg-black" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
              isActive("/services") ? "text-white bg-black" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
              isActive("/contact") ? "text-white bg-black" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="/login"
            className={`text-gray-500 block font-semibold hover:text-white hover:bg-black duration-500 rounded-lg p-2 ${
              isActive("/login") ? "text-white bg-black" : ""
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
