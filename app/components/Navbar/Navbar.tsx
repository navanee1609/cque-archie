"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faTv,
  faHeartbeat,
  faMagic,
  faFootballBall,
  faHome,
  faCar,
  faGem,
  faBalanceScale,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

interface NavbarProps {
  setShowsCalendly: (value: boolean) => void;
  setOverlayVisible: (value: boolean) => void;
}

const useCases = [
  { name: "Fashion / Apparel", href: "/fashion", icon: faTshirt },
  { name: "Electronics", href: "/electronics", icon: faTv },
  { name: "Health", href: "/health", icon: faHeartbeat },
  { name: "Beauty & Cosmetics", href: "/beauty", icon: faMagic },
  { name: "Sports & Life Style", href: "/sports", icon: faFootballBall },
  { name: "House & Garden", href: "/house-garden", icon: faHome },
  { name: "Automotive", href: "/automotive", icon: faCar },
  { name: "Jewelry", href: "/jewelry", icon: faGem },
  { name: "Legal", href: "/legal", icon: faBalanceScale },
  { name: "Education", href: "/education", icon: faBookOpen },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC<NavbarProps> = ({ setShowsCalendly, setOverlayVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClicks = () => {
    setShowsCalendly(true);
    setOverlayVisible(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        const dropdown = document.getElementById("dropdown-menu");
        if (dropdown && !dropdown.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Disclosure as="nav" className="navbar">
      <div className="mx-auto max-w-7xl p-3 md:p-2 lg:px-8">
        <div className="relative flex h-5 sm:h-14 items-center">
          <div className="flex flex-1 items-center sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-2xl sm:text-4xl font-semibold text-black">
                <img
                  src="/images/cque-logo.png"
                  alt="logo"
                  className="max-w-full h-auto logo-color mt-1"
                  style={{ width: 180, height: 50 }}
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center text-lg font-medium">
              <div className="flex justify-center space-x-6 text-lg font-medium">
                <Link
                  href="/aboutus"
                  className="navlinks hover:text-black px-6 py-2 rounded-md text-lg font-medium"
                >
                  About us
                </Link>
                <div className="relative">
                  <div
                    className="flex items-center space-x-1 px-6 py-2 rounded-md text-lg font-medium navlinks hover:text-green cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <span>Use Case</span>
                    {isDropdownOpen ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </div>
                  <div
  id="dropdown-menu"
  className={classNames(
    "absolute flex-wrap bg-white shadow-md rounded-md mt-3 z-10 transition-all duration-500 ease-in-out",
    isDropdownOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-3 pointer-events-none"
  )}
>
  <ul className="py-2 grid grid-cols-2 gap-x-6 gap-y-2 w-max px-4">
    {useCases.map((useCase) => (
      <li
        key={useCase.name}
        className="flex items-center px-3 py-3 bg-white rounded-md font-medium transition-all duration-500 ease-in-out hover:bg-[#e5e5e5e] hover:shadow-lg hover:border"
      >
        <FontAwesomeIcon
          icon={useCase.icon}
          className="mr-2 text-gray-600 h-4 w-4 transition-transform duration-500"
        />
        <Link
          href={useCase.href}
          className="block font-medium transition-all duration-500 hover:text-gray-900"
          onClick={handleLinkClick}
        >
          {useCase.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


                </div>
                <Link
                  href="/pricing"
                  className="navlinks hover:text-black px-6 py-2 rounded-md text-lg font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="navlinks hover:text-black px-6 py-2 rounded-md text-lg font-medium"
                >
                  Blog
                </Link>
              </div>
            </div>
            <a className="hidden lg:block">
              <button
                className="relative flex-grow max-w-full flex-1 inline-block align-middle text-center select-none border font-medium whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-dark-blue btn-rounded"
                onClick={handleButtonClicks}
              >
                Start for Free
              </button>
            </a>
          </div>
          <div className="block lg:hidden">
            <Bars3Icon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata
              setShowsCalendly={setShowsCalendly}
              setOverlayVisible={setOverlayVisible}
            />
          </Drawer>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
