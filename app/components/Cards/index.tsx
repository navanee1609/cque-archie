import Image from "next/image";
import HowItWorks from "./HowItWorks";
import RealGrowthSection from "./RealGrowthSection";
import Secure from "./Secure";
import Integration from "./Integration";
import Revenue from "./Revenue";
import SocialIntegrations from "./SocialIntegrations";
import SeamlessIntegration from "./SeamlessIntegration";
import WorkProcess from "./workProcess";
import PowerOfCque from "./PowerOfCque";
import Resolution from "./Resolution";
import Insight from "./Insight";
import Escalation from "./Escalation";
import SeamlessIntegrations from "./SeamlessIntegrations";
import Conversionrates from "./Conversionrates";
import ChatWidgets from "./chatWidgets";
import InsightfulResponse from "./InsightfulResponse";
import GenAi from "./GenAi";



interface datatype {
    heading: string; // String for heading
    imgSrc: string;
    paragraph: string;
    link: string;
    bg: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Advanced AI", // String value
        imgSrc: "/images/aboutus/service.svg",
        paragraph: "Our machine learning understands customer intent.",
        link: "Learn more",
        bg: "#AFD5F0",
    },
    {
        heading: "Personalized Journey", // String value
        imgSrc: "/images/aboutus/package.svg",
        paragraph: "Guide visitors from greeting to checkout.",
        link: "Learn more",
        bg: "#F8C8DC",
    },
    {
        heading: "24/7 Availability", // String value
        imgSrc: "/images/aboutus/support.svg",
        paragraph: "Provide immediate, accurate assistance.",
        link: "Learn more",
        bg: "#FEDD9E",
    },
];

const Cards = () => {
    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 py-20 my-10 lg:px-10 bg-lightgrey rounded-3xl relative">
                <Image
                    src="/images/aboutus/dots.svg"
                    width={100}
                    height={100}
                    alt="dots-image"
                    className="absolute bottom-1 -left-20"
                />
                <h3 className="text-center text-lg mb-4 tracking-widest text-blue font-bold">
                    CQUE
                </h3>
                <h4 className="text-center text-5xl lg:text-70xl font-bold">
                Why choose CQUE AI?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-12 gap-x-16 lg:gap-x-32">
                    {Aboutdata.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-3xl mt-6 pt-8 pl-8 pb-10 pr-6 shadow-xl group card"
                            style={{ backgroundColor: item.bg }}
                        >
                            <h4 className="text-3xl font-semibold mb-5 number-text group-hover:text-black">
                                {item.heading} {/* Use the string directly */}
                            </h4>

                            <Image
                                src={item.imgSrc}
                                alt={item.imgSrc}
                                width={40}
                                height={40}
                                className="mb-5"
                            />
                            <h4 className="text-lg font-medium text-black mb-5">
                                {item.paragraph}
                            </h4>
                            {/* <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                            </Link> */}
                        </div>
                    ))}
                </div>
            </div>
           <HowItWorks/>

           <RealGrowthSection/>
           <Integration/>
           <Secure/>
           <Revenue/>
           <SocialIntegrations/>
           <SeamlessIntegration/>
           <WorkProcess/>
           <PowerOfCque/>
           <Resolution/>
           <Insight/>
           {/* <Escalation/> */}
           <SeamlessIntegrations/>
           <Conversionrates/>
           <ChatWidgets/>
           <InsightfulResponse/>
           <GenAi/>
           

        </div>
    );
};

export default Cards;
