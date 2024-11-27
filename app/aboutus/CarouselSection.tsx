import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import './CarouselSection.css'; // Custom CSS for pulse animation

const CarouselSection = () => {
  return (
    <div className="container mx-auto sm:px-4 max-w-full pt-12 mt-8 pb-12">
      <div className="flex flex-wrap items-center justify-center">
        <h3 className="text-center text-4xl font-semibold mb-8 w-full">
          Why customers win with CQUE AI?
        </h3>
        <div className="w-full lg:w-5/6 pr-4 pl-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true} // Enable infinite scrolling
            autoplay={{
              delay: 0, // No delay between slides
              disableOnInteraction: false, // Keep autoplay running even when interacting
              pauseOnMouseEnter: true, // Pause autoplay on hover
            }}
            speed={3000} // Control the scroll speed
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            className="swiper"
            id="owl-carousell"
          >
            {/* Carousel Items */}
            {[
              {
                title: 'Happier Shoppers',
                description:
                  'CQUE AI provides delightful conversations, making shopping experiences more engaging and enjoyable.',
                icon: 'fa-star', // FontAwesome icon
                bgColor: 'bg-[#FEDD9E]', // Background color
              },
              {
                title: 'Effortless Assistance',
                description:
                  'Get instant answers and product recommendations, leading to faster purchases and fewer frustrated customers.',
                icon: 'fa-lightbulb', // FontAwesome icon
                bgColor: 'bg-[#AFD5F0]', // Background color
              },
              {
                title: 'Personalized Touch',
                description:
                  'CQUE AI learns buyer preferences, offering relevant suggestions and boosting customer satisfaction.',
                icon: 'fa-bullseye', // FontAwesome icon
                bgColor: 'bg-[#F8C8DC]', // Background color
              },
              {
                title: '24/7 Support',
                description:
                  'With round-the-clock AI assistance that continues conversations even after business hours, you’ll never miss a sale.',
                icon: 'fa-clock', // FontAwesome icon
                bgColor: 'bg-[#FEDD9E]', // Background color
              },
              {
                title: 'Data-Driven Insights',
                description:
                  'Through CQUE AI interactions, obtain useful consumer data that can be used to improve marketing strategies and product suggestions.',
                icon: 'fa-chart-bar', // FontAwesome icon
                bgColor: 'bg-[#AFD5F0]', // Background color
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`p-6 rounded-lg shadow-lg ${item.bgColor} transform transition-transform duration-500 hover:scale-105 flex flex-col h-[280px]`}
                >
                  <div className="flex items-center justify-start mb-4">
                    <i
                      className={`fas ${item.icon} text-4xl mr-3 text-black pulse-animation`}
                    />
                    <h3 className="text-2xl font-semibold text-black">
                      {item.title}
                    </h3>
                  </div>
                  <hr
                    className="mx-auto mb-3"
                    style={{ width: '80%', color: 'black' }}
                  />
                  <p className="text-center py-3 text-black">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
