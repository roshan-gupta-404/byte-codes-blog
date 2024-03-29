import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

import { BiLogoPinterestAlt } from "react-icons/bi";
import Container from "../Container";
import { Link } from "react-router-dom";

function Footer() {
  const iconsTab = [
    { icon: <CiLinkedin />, name: 'linkedIn',url:'https://www.linkedin.com/in/roshan-gupta-2611792a3/' },
    { icon: <LuGithub />, name: 'github',url:'https://github.com/roshan-gupta-404' }
  ];

  return (
    <>
      <footer id="footer" className="p-4 border-t border-t-slate-500">
        <Container>
          <div className="flex flex-col-reverse sm:flex-row sm justify-between items-center text-white bottom-0 px-4">
            <div>
              <p className="text-center"> &copy; 2024 ByteCodes Blog. All rights reserved.</p>
            </div>
            <div className="flex justify-around">
              {iconsTab.map((item) => {
                return (
                  <div className="text-3xl sm:text-5xl mx-2 hover:text-orange-200 duration-300"
                    key={item.name}
                  >
                  <Link to={item.url}>
                    {item.icon}
                  </Link>
                  </div>
                )
              })}
            </div>
          </div>

        </Container>


      </footer>
    </>
  );
}

// export default Footer;
// import { FaFacebookF } from "react-icons/fa";
// import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
// import { BiLogoPinterestAlt } from "react-icons/bi";

// function Footer() {
//   const iconsTab = [
//     { icon: <FaFacebookF /> },
//     { icon: <AiOutlineTwitter /> },
//     { icon: <AiFillYoutube /> },
//     { icon: <BiLogoPinterestAlt /> },
//   ];

//   return (
//     <>
//       <footer className="bg-white">
//         <div className="container mx-auto py-10">
//           {/* footer div all */}
//           <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-5 text-left">
//             {/* logo side */}
//             <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
//               <img
//                 src={"https://i.imgur.com/520zDfd.png"}
//                 alt="footer_logo"
//                 className="w-18rem"
//               />
//               <p className="text-15px font-medium text-#646464">
//                 Take your health and body to the next level with our
//                 comprehensive program designed to help you reach your fitness
//                 goals.
//               </p>
//               {/* socials */}

//               <p className="text-16px font-medium text-#646464">
//                 Privacy Policy | © {new Date().getFullYear()} Gymate <br />{" "}
//                 {"  "}
//                 Design by {"  "}
//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://www.radiustheme.com/"
//                 >
//                   RadiusTheme
//                 </a>
//               </p>
//             </div>
//             {/* middle div */}
//             <div className="flex flex-col gap-8 relative">
//               <p className="text-22px font-bold footer-main">Our Classes</p>
//               <span className="top-33px absolute w-7rem h-4px bg-#ff0366"></span>
//               <p className="text-16px hover:text-#ff0366 cursor-pointer text-#646464 font-medium hover:font-bold">
//                 Fitness Classes
//               </p>
//               <p className="text-16px hover:text-#ff0366 cursor-pointer text-#646464 font-medium hover:font-bold">
//                 Aerobics Classes
//               </p>
//               <p className="text-16px hover:text-#ff0366 cursor-pointer text-#646464 font-medium hover:font-bold">
//                 Power Yoga
//               </p>
//               <p className="text-16px hover:text-#ff0366 cursor-pointer text-#646464 font-medium hover:font-bold">
//                 Learn Machines
//               </p>
//               <p className="text-16px hover:text-#ff0366 cursor-pointer text-#646464 font-medium hover:font-bold">
//                 Full-body Strength
//               </p>
//             </div>
//             {/* right div */}
//             <div className="flex flex-col gap-8 relative">
//               <p className="text-22px font-bold footer-main">Working Hours</p>
//               <span className="top-33px absolute w-7rem h-4px bg-#ff0366"></span>
//               <p className="text-16px text-#646464 font-bold">
//                 Monday - Friday:{" "}
//               </p>
//               <p className="text-16px text-#646464 font-medium">
//                 7:00am - 21:00pm
//               </p>
//               <p className="text-16px text-#646464 font-bold">Saturday:</p>
//               <p className="text-16px text-#646464 font-medium">
//                 7:00am - 19:00pm
//               </p>
//               <p className="text-16px text-#646464 font-bold ">
//                 Sunday - Closed
//               </p>
//             </div>
//             {/* middle div */}
//             <span></span>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
{/* <div className="flex gap-7 text-18px text-#646464 justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-#efefef p-2 rounded-full hover:bg-#ff0366 hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div> */}
export default Footer;
