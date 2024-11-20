import React, { useState } from "react";
import Link from "next/link";
import { InlineWidget } from "react-calendly";

interface NavigationItem {
    name: string;
    href: string;
}

const navigation: NavigationItem[] = [
    // { name: 'ROI', href: '/roi' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '' },
    { name: 'Contact Us', href: '/contactus' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
interface DrawerDataProps {
    setShowsCalendly: (showsCalendly : boolean) => void;
    setOverlayVisible: (overlayVisible: boolean) => void;
}

const Data = ({setShowsCalendly , setOverlayVisible}:DrawerDataProps) => {
    const [activeLink, setActiveLink] = useState('/roi');
    const [menuVisible, setMenuVisible] = useState(true);
 console.log()
    const handleButtonClicks = () => {
        setMenuVisible(true);
        setShowsCalendly(true);
        setOverlayVisible(true);
        // setTimeout(() => {
        //    console.log("RUNNING")
        // }, 500); // Adjust the delay to match your transition duration
    };

    // const handleCalendlyClose = () => {
    //     setShowsCalendly(false);
    //     setOverlayVisible(false);
    //     setTimeout(() => {
    //         setMenuVisible(true);
    //     }, 500); 
    // };

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
    };

    return (
        <div className="relative">
            <div className={`rounded-md max-w-sm w-full mx-auto ${menuVisible ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
                <div className="flex-1 space-y-4 py-1">
                    <div className="sm:block">
                        <div className="space-y-1 px-5 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.href === activeLink ? 'text-navyblue' : 'text-black hover:text-purple',
                                        'block py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.href === activeLink ? 'page' : undefined}
                                    onClick={() => handleLinkClick(item.href)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-4"></div>
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
    );
}

export default Data;
