"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";
import { idText } from "typescript";
import { InlineWidget } from "react-calendly";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  // { name: "ROI Calculator", href: "/roi", current: false },
  { name: "About us", href: "/aboutus", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "Blogs", href: "", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface DrawerDataProps {
  setShowsCalendly: (showsCalendly : boolean) => void;
  setOverlayVisible: (overlayVisible: boolean) => void;
}

const Navbar = ({setShowsCalendly , setOverlayVisible}:DrawerDataProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [showsCalendly, setShowsCalendly] = useState(false);
  // const [overlayVisible, setOverlayVisible] = useState(false);
  const handleButtonClicks = () => {
    console.log("HANLDE HANDLE")
    setShowsCalendly(true);
    setOverlayVisible(true);
  };

  // const handleCalendlyClose = () => {
  //   setShowsCalendly(false);
  //   setOverlayVisible(false);
  // };



  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-2 lg:px-8">
          <div className="relative flex h-5 sm:h-14 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center border-right">
                {/* <a
                  href="/"
                  className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap flex items-center md:mb-0 text-decoration-none"
                >
                  
                </a> */}
                <Link
                  href="/"
                  className="text-2xl sm:text-4xl font-semibold text-black"
                >
                  <img
                    src="/images/new_logo.png"
                    alt="logo"
                    className="max-w-full h-auto logo-color mt-1"
                    style={{ width: 150, height: 40 }}
                  />
                </Link>
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right">
  <div className="flex justify-center space-x-6"> {/* Increased space between links */}
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className={classNames(
          item.current
            ? "bg-gray-900"
            : "navlinks hover:text-black",
          "px-6 py-2 rounded-md text-lg font-normal"
        )}
        aria-current={item.href ? "page" : undefined}
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>

              <a className="hidden lg:block">
              <div>
              <button
        className="relative flex-grow max-w-full flex-1 px-4 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
        onClick={handleButtonClicks}
      >
         Start for Free
      </button>
      {/* {showsCalendly && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
              onClick={handleCalendlyClose}
            >
              &#10005; 
            </button>
            // <InlineWidget url="https://calendly.com/" />
          </div>
        </div>
      )} */}
      {/* {overlayVisible && (
        <div
          className="fixed inset-0 z-40"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            
          }}
          onClick={handleCalendlyClose}
        />
      )} */}
    </div>
                {/* <button
                  className="text-sm md:text-xl font-semibold hover:shadow-xl text-white py-3  md:py-3 md:px-7 rounded-full hover:bg-hoblue"
                  style={{ backgroundColor: "#00356b" }}
                >
                  Start for Free
                </button> */}
              </a>

              {/* <Contactusform /> */}
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata setShowsCalendly={setShowsCalendly} setOverlayVisible={setOverlayVisible} />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
