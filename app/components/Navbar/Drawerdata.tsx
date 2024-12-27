import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Chevron Icon for dropdown
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

// Use Cases Data
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

interface DrawerDataProps {
  setShowsCalendly: (showsCalendly: boolean) => void;
  setOverlayVisible: (overlayVisible: boolean) => void;
}

const Data = ({ setShowsCalendly, setOverlayVisible }: DrawerDataProps) => {
  const [activeLink, setActiveLink] = useState("/roi");
  const [menuVisible, setMenuVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClicks = () => {
    setMenuVisible(true);
    setShowsCalendly(true);
    setOverlayVisible(true);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`rounded-md max-w-sm w-full mx-auto transition-opacity duration-500 ease-in ${
          menuVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex-1 space-y-4 py-1">
          <div className="sm:block">
            <div className="space-y-1 px-6 pt-3 pb-4">
              {/* About Us Link */}
              <Link
                href="/aboutus"
                className={`block py-3 px-4 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
                  activeLink === "/aboutus"
                    ? "text-navyblue bg-gray-200"
                    : "text-black hover:text-purple hover:bg-[#e5e5e5]"
                }`}
                onClick={() => handleLinkClick("/aboutus")}
              >
                About Us
              </Link>

              {/* Dropdown for Use Cases */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="py-3 px-4 w-full text-black font-medium text-base flex items-center justify-between rounded-md transition-transform duration-300 ease-in-out hover:bg-[#e5e5e5]"
                  aria-haspopup="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownVisible((prev) => !prev);
                  }}
                >
                  <span>Use Cases</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transform ${
                      dropdownVisible ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300 ease-in-out`}
                  />
                </button>
                {dropdownVisible && (
                  <div
                    className={`absolute left-0 mt-2 w-60 bg-white shadow-md rounded-md border border-green-500 transform origin-top transition-transform transition-opacity duration-500 ease-in-out ${
                      dropdownVisible
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-4"
                    }`}
                    style={{ maxWidth: "96vw", zIndex: 50 }}
                  >
                    <ul className="py-2">
                      {useCases.map((useCase) => (
                        <li
                          key={useCase.name}
                          className="px-4 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#e5e5e5]"
                        >
                          <Link
                            href={useCase.href}
                            className="text-black font-medium flex items-center transition-all duration-300"
                            onClick={() => handleLinkClick(useCase.href)}
                          >
                            <FontAwesomeIcon
                              icon={useCase.icon}
                              className="mr-3 text-green-500 h-5 w-5 transition-transform duration-300 hover:rotate-12"
                            />
                            {useCase.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Pricing Link */}
              <Link
                href="/pricing"
                className={`block py-3 px-4 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
                  activeLink === "/pricing"
                    ? "text-navyblue bg-gray-200"
                    : "text-black hover:text-purple hover:bg-[#e5e5e5]"
                }`}
                onClick={() => handleLinkClick("/pricing")}
              >
                Pricing
              </Link>

              {/* Blog Link */}
              <Link
                href="/blog"
                className={`block py-3 px-4 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
                  activeLink === "/blog"
                    ? "text-navyblue bg-gray-200"
                    : "text-black hover:text-purple hover:bg-[#e5e5e5]"
                }`}
                onClick={() => handleLinkClick("/blog")}
              >
                Blog
              </Link>

              {/* Start for Free Button */}
              <div className={`${dropdownVisible ? "mt-10" : "mt-6"} transition-all duration-500`}>
                <div className="flex items-center justify-center">
                  <button
                    className="btn-dark-blue w-full hover:text-white text-white bg-purple-600 border border-purple-600 font-medium py-3 px-6 rounded-3xl transition-transform duration-500 hover:scale-105 hover:shadow-lg"
                    onClick={handleButtonClicks}
                  >
                    Start for Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
