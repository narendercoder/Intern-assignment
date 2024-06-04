"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { motion } from "framer-motion";
import { fadeIn } from "../Config/varients";


export const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const pathname = usePathname();
  const navitems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About Us",
      link: "/about",
    },
    {
      id: 3,
      name: "Pricing",
      link: "/pricing",
    },
    {
      id: 4,
      name: "Features",
      link: "/features",
    },
  ];
  return (
    <nav className="w-full p-5 flex items-center">
      <div className={menuIcon ? "navbar active w-full flex items-center justify-center" : "navbar w-full flex items-center justify-center"}>
        <div className="custom-container w-full flex justify-between  items-center">
          <motion.div
            variants={fadeIn("up", 0.1, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="logo"
          >
            <Link href="/">
              <img src="logo.png" alt="logo" className="h-[35px] max-w-none" />
            </Link>
          </motion.div>

          <div className="navbar-items flex w-full px-5">
          <div className="nav-items flex w-full">
          <div className="logo px-3">
           <Link href="/">
              <img src="logo.png" alt="logo" className="h-[35px] max-w-none" />
            </Link>
            <CgClose
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(!menuIcon)}
            />
           </div>
            <ul className="nav-lists flex">
              {navitems.map((item, index) => {
                return (
                  <motion.li
                    key="item.id"
                    variants={fadeIn("up", 0.1*(index+2), 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="flex justify-center items-center"
                  >
                    <Link
                      href={item.link}
                      className={`link ${
                        pathname === `${item.link}`
                          ? "active navbar-link text-black text-xl font-bold px-3"
                          : "navbar-link text-black text-xl font-bold px-3"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <motion.div
          variants={fadeIn("up", 0.6, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
           className="btn text-white cursor-pointer bg-black px-3 py-3 h-[60px] w-[180px] text-lg flex justify-center items-center rounded-md">
            <button>Download</button>
          </motion.div>
          </div>

          <div className="mobile-navbar">
          <div className="mobile-navbar-btn text-3xl">
             <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(!menuIcon)}
            /> 
          </div>
        </div>
        </div>

      
      </div>


    </nav>
  );
};
