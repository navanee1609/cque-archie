import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Chevron Icon for dropdown
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faTv, faHeartbeat, faMagic, faFootballBall, faHome, faCar, faGem, faBalanceScale, faBookOpen } from '@fortawesome/free-solid-svg-icons';

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
  const [dropdownVisible, setDropdownVisible] = useState(false); // Track dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference for dropdown container

  const handleButtonClicks = () => {
    setMenuVisible(true);
    setShowsCalendly(true);
    setOverlayVisible(true);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setDropdownVisible(false); // Close dropdown when a link is clicked
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the listener
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`rounded-md max-w-sm w-full mx-auto ${
          menuVisible ? "opacity-100 transition-opacity duration-500 ease-in" : "opacity-0"
        }`}
      >
        <div className="flex-1 space-y-4 py-1">
          <div className="sm:block">
            <div className="space-y-1 px-5 pt-2 pb-3">
              {/* About Us Link */}
              <Link
                href="/aboutus"
                className={`block py-2 rounded-md text-base font-medium ${
                  activeLink === "/aboutus" ? "text-navyblue" : "text-black hover:text-purple"
                }`}
                onClick={() => handleLinkClick("/aboutus")}
              >
                About Us
              </Link>

              {/* Dropdown for Use Cases */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="py-2 w-full text-black font-medium text-base flex items-center justify-between"
                  aria-haspopup="true"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event propagation
                    setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
                  }}
                >
                  <span>Use Cases</span>
                  <ChevronDownIcon className="h-4 w-4 text-black" />
                </button>
                {dropdownVisible && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md border-2 border-green-500 transition-all duration-300 ease-in-out"
                    style={{ maxWidth: "90vw", zIndex: 50 }}
                  >
                    <ul className="py-2">
                      {useCases.map((useCase) => (
                        <li key={useCase.name} className="px-4 py-2 hover:bg-green-100">
                          <Link
                            href={useCase.href}
                            className="block text-black hover:text-green-800"
                            onClick={() => handleLinkClick(useCase.href)}
                          >
                            <FontAwesomeIcon
                              icon={useCase.icon}
                              className="mr-2 text-green-500 h-4 w-4"
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
                className={`block py-2 rounded-md text-base font-medium ${
                  activeLink === "/pricing" ? "text-navyblue" : "text-black hover:text-purple"
                }`}
                onClick={() => handleLinkClick("/pricing")}
              >
                Pricing
              </Link>

              {/* Blog Link */}
              <Link
                href=""
                className={`block py-2 rounded-md text-base font-medium ${
                  activeLink === "" ? "text-navyblue" : "text-black hover:text-purple"
                }`}
                onClick={() => handleLinkClick("")}
              >
                Blog
              </Link>

              {/* Start for Free button */}
              <div className={`${dropdownVisible ? "mt-10" : "mt-4"} transition-all duration-500`}>
                <div className="flex items-center justify-center">
                  <button
                    className="btn-dark-blue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded-3xl"
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
