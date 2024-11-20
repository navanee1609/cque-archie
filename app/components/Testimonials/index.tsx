"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
    text:string;
}

const postData: DataType[] = [
    {
        name: "Founder & CEO",
        profession: 'United States',
        comment: "It's beautifully designed, seamlessly integrates with my Ecommerce platform, and is exceptionally trained on my specific content. Right out of the box, it's easy to use and actually knows my products! It answers most questions and seamlessly escalates the tricky ones to my support team. I couldn't be happier with its conversational ecommerce integration, which includes generative AI chatbot capabilities, elevating customer interaction",
        imgSrc: '/images/b-logo.webp',
        text: "Smartle AI? Different story."
    },
    {
        name: "Director of Operations",
        profession: 'India',
        comment: "This AI chatbot exceeded our expectations. Just a month ago, we were planning to recruit two live chat agents, which meant app installation, training, and ongoing costs. Instead, we discovered this Smartle AI's amazing conversational AI for ecommerce. Without any initial effort, it impressed us with its accurate responses. And after a single day of refining its answers, it transformed our customer interactions, boosting both conversion rates and average order value! Now, our team can focus on strategic tasks while the AI assistance handles routine queries effortlessly.",
        imgSrc: '/images/shopify-plus.webp',
        text: "Say goodbye to hiring hassles!"
    },
    {
        name: "Head Of Marketing",
        profession: 'United States',
        comment: "I was truly impressed by Smartle AI's Conversational AI assistance for ecommerce. It's highly accurate and constantly learning. The answers it provided were spot-on and it amazed me to see how quickly it adapted to my store after just a day of setup. It's like having an interactive and incredibly knowledgeable FAQ always ready to assist customers. Although it's still evolving, I can already see the incredible potential for this platform to offer even more features. I'm genuinely excited to see what the future holds with AI chat assistance.",
        imgSrc: '/images/woo.webp',
        text:"aa"
    },
    {
        name: "Customer Support Manager",
        profession: 'United States',
        comment: " With its cutting-edge AI chatbot for ecommerce, our response times have drastically improved, and customer satisfaction has soared. The conversational AI platform anticipates questions and provides personalized assistance, making every interaction seamless and efficient. Thanks to Smartle AI, we've elevated our customer service to new heights, setting a benchmark for excellence in Ecommerce support",
        imgSrc: '/images/word-press.webp',
        text:"bb"
    },
    {
        name: "Director Of Customer Executive",
        profession: 'United States',
        comment: ' In just 26 days, it has surpassed my expectations, providing swift and precise responses to queries. It effortlessly navigates our product websites, delivering accurate answers with a professional and friendly touch. Moreover, its generative AI, combined with the efficiency of an AI chatbot, enhances our customer interactions, distinguishing us in the retail sector. With its advanced features, Smartle AI revolutionizes the retail experience, integrating seamlessly with our AI chat support system.',
        imgSrc: '/images/unknown-logo.webp',
        text:"cc"
    },
    {
        name: "Sales Manager",
        profession: 'India',
        comment: "Even without training, I could find answers to complex customer questions instantly. Plus, the AI chatbot's responses are insightful and go beyond just providing basic information. It feels like having a real expert at my fingertips. Smartle AI is doing great, offering an exceptional conversational AI platform for Ecommerce. Its generative AI chatbot capabilities elevate customer interactions, making it a standout choice in the market.Thank you Smartle AI",
        imgSrc: '/images/shopify.webp',
        text:"dd"
    },
    {
        name: "Customer Experience Specialist",
        profession: 'United States',
        comment: " Now, with this Smartle AI chatbot for ecommerce, I can resolve most issues in seconds! The accuracy and clarity of the responses are impressive and customers truly appreciate the quick, helpful interactions. Thanks for saving me time and boosting customer satisfaction! 26 days using the app have shown me the power of Smartle AI's AI chat assistance and conversational AI for retail. With its advanced features, it's truly a game-changer in the industry.",
        imgSrc: '/images/shopify.webp',
        text:"dd"
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Why is Smartle AI being loved?</h3>
                        {/* <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Why is Smartle AI being loved?</h3> */}
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Why is Smartle AI being loved?</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    {/* <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" /> */}
                                    <h4 className='text-base font-medium text-testColor my-4'><span style={{fontWeight:"800"}}>{items.text}</span>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
