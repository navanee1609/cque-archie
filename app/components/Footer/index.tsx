"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import location icon

interface LinkType {
  name: string;
  path: string;
}

interface ProductType {
  id: number;
  section: string;
  link: LinkType[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Quick Links",
    link: [
      { name: "About Us", path: "/aboutus" },
      { name: "Pricing", path: "/pricing" },
      { name: "Blogs", path: "/blogs" },
    ],
  },
];

const footer = () => {
  return (
    <div className="mt-8" id="first-section" style={{ backgroundColor: "#3f559e" }}>
      <div className="mx-auto max-w-7xl pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* LOGO AND DESCRIPTION */}
          <div className="col-span-4 flex flex-col  items-start">
            <Link href="/" className="text-2xl sm:text-4xl font-semibold text-black">
              <img
                src="/images/notch-logo.png"
                alt="logo"
                className="max-w-full h-auto logo-color mt-1 mx-auto sm:ml-0"
                style={{ width: "auto", height: 60, marginTop: "-2rem" }}
              />
            </Link>
            <h5 className="text-white text-left lg:ml-5 lg:mt-0 text-lg font-medium m-2 mt-6 mb-5 sm:mb-0 sm:text-left">
              Transform your shopping experience with Cque's revolutionary conversational AI chatbot for E-commerce crafted to boost sales by converting potential chats into revenue.
            </h5>
          </div>

          {/* COLUMN-2/3 (Quick Links) */}
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative col-span-2 flex flex-col items-start md:items-start md:text-left md:justify-start"
            >
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul className="text-left">
                {product.link.map((link, index) => (
                  <li key={index} className="mb-5">
                    <Link href={link.path} className="text-white text-lg font-medium mb-6 space-links">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* LOCATION */}
          <div className="col-span-3 flex flex-col items-start sm:items-start sm:text-left">
            <h5 className="text-white text-xl font-extrabold mb-9">Location</h5>
            <p className="mb-4 text-lg font-medium  flex justify-center items-center">
              <span className="mr-2 text-white">
                <FaMapMarkerAlt style={{ fontSize: "20px" }} />
              </span>
              <a
                className="text-white"
                href="https://maps.app.goo.gl/JqpMB7DdQkqQvkir5"
                target="_blank"
              >
                krakow, Poland
              </a>
            </p>
          </div>

          {/* FOLLOW US */}
          <div className="col-span-3 flex flex-col items-start sm:items-start sm:text-left">
            <h5 className="text-white text-xl font-extrabold mb-5">Follow us on</h5>
            <div className="text-blue py-3">
              <a href="" className="me-4">
                <i className="fab fa-linkedin" style={{ fontSize: 20, color: "white" }} />
              </a>
              <a href="" className="me-4">
                <i className="fab fa-instagram" style={{ fontSize: 20, color: "white" }} />
              </a>
              <a href="" className="me-4">
                <i className="fab fa-square-x-twitter" style={{ fontSize: 20, color: "white" }} />
              </a>
              <a href="" className="me-4">
                <i className="fab fa-square-facebook" style={{ fontSize: 20, color: "white" }} />
              </a>
            </div>
            <div>
              <a href="/contactus">
                <button
                  className="bg-white font-semibold rounded-3xl px-5 my-3 inline-block align-middle text-center select-none border whitespace-no-wrap py-2 leading-normal no-underline fw-bold"
                  style={{ fontSize: "1.2rem" }}
                >
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* All Rights Reserved */}

        <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg font-medium">
                @2024 - All Rights Reserved by{" "}
                <Link href="" target="_blank">
                  {" "}
                    CQUE
                </Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="">
                <h3 className="text-offwhite pr-6 text-lg font-medium">Privacy policy</h3>
              </Link>
              <Link href="">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer text-lg font-medium">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
