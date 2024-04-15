import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { closeSidebarHandler } from "../../store/actions/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { HiMiniChevronDoubleLeft } from "react-icons/hi2";

export const Sidebar = () => {
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpen);

  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch(closeSidebarHandler());
  };

  const pages = [
    {
      name: "Discover",
      icon: (
        <span className="inline-block cursor-pointer">
          <IconContext.Provider value={{ size: "1.6rem", color: "#f8f9fa" }}>
            <RiCompassDiscoverFill />
          </IconContext.Provider>
        </span>
      ),
      path: "/",
    },
  ];

  return (
    <aside
      className={`bg-gray-900 fixed inset-0 top-0 z-[120] h-[100vh] w-72
       transition-transform duration-300 xl:translate-x-0
       ${isOpenSidebar ? "translate-x-0" : "-translate-x-80"}
       border-r-[1px] border-gray-800`}
    >
      <div className="relative">
        <span
          onClick={() => handleCloseSidebar()}
          className="cursor-pointer absolute right-5 top-10 grid 
          sxl:hidden z-20"
        >
          <IconContext.Provider value={{ size: "1.0rem", color: "#f8f9fa" }}>
            <HiMiniChevronDoubleLeft />
          </IconContext.Provider>
        </span>
      </div>
      <div
        className="flex items-center justify-start gap-0 relative 
         w-full h-16 pl-5 mt-4"
      >
        <span
          className="text-gray-50 text-lg font-semibold hidden
          sm:block"
        >
          character.ai
        </span>
      </div>
      <div className="m-4 mt-1">
        <ul className="mb-4 flex flex-col gap-1">
          {pages.map(({ icon, name, path }) => (
            <li key={name}>
              <NavLink to={`/$/${path}`}>
                {({ isActive }) => (
                  <Button
                    className={`flex items-center gap-4 bg-inherit px-4 
                      capitalize text-gray-50 shadow-none hover:bg-gray-300
                      hover:shadow-none relative outline-none
                    ${
                      isActive &&
                      `bg-gray-300 before:absolute before:left-0 before:top-0 
                       before:h-full before:w-2 before:bg-primary before:rounded-l-md`
                    }`}
                    fullWidth
                    placeholder={""}
                  >
                    {icon}
                    <Typography
                      color="inherit"
                      className={`font-medium capitalize ${
                        isActive && "text-gray-800"
                      }`}
                      placeholder={""}
                    >
                      {name}
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className="flex items-center justify-start gap-3
           rounded-md p-2 text-white bg-gray-800
           absolute left-4 bottom-4 w-[88%]"
        >
          <span
            className="cursor-pointer grid place-items-center  bg-gray-300 p-1
              w-14 h-14 rounded-[50%]"
          >
            <IconContext.Provider value={{ size: "1.8rem", color: "#495057" }}>
              <IoPerson />
            </IconContext.Provider>
          </span>
          <p className="flex flex-col justify-center">
            <span className="text-gray-50">{"username"}</span>
            <span
              className="cursor-pointer flex items-center gap-1
              text-gray-400 text-sm"
            >
              {"Log out"}
            </span>
          </p>
        </div>
      </div>
    </aside>
  );
};
