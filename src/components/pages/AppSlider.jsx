import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const AppSlider = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl md:text-4xl text-blue-950 font-bold text-center mt-4">
        Our Newly Launched Apps
      </h1>

      <div className="max-w-5xl mx-auto p-4 my-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          
          modules={[Autoplay, Pagination]}
          className="mySwiper rounded-2xl shadow-lg"
        >
          
          <SwiperSlide className="relative rounded-2xl overflow-hidden">
            <img
              src="https://i.postimg.cc/Bnx3C4hR/realistic-phone-studio-social-media-concept-1.jpg"
              alt="Social App"
              className="w-full h-64 sm:h-80 md:h-150 object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-start p-6 rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Social App
              </h2>
              <p className="mt-2 max-w-md text-sm sm:text-base text-white">
                Connect and chat with your friends worldwide instantly.
              </p>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-green-300">
                Join the social buzz today!
              </h3>
            </div>
          </SwiperSlide>

          
          <SwiperSlide className="relative rounded-2xl overflow-hidden">
            <img
              src="https://i.postimg.cc/76hjjkVH/3d-rendering-customizing-avatar-concept.jpg"
              alt="Create Avatar App"
              className="w-full h-64 sm:h-80 md:h-150 object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-start p-6 rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Create Avatar App
              </h2>
              <p className="mt-2 max-w-md text-sm sm:text-base text-white">
                Design your own unique 3D avatars and stand out in the digital
                world.
              </p>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-pink-400">
                Create your avatar now!
              </h3>
            </div>
          </SwiperSlide>

          
          <SwiperSlide className="relative rounded-2xl overflow-hidden">
            <img
              src="https://i.postimg.cc/kM6gb3mP/hand-holding-smartphone-with-white-background.jpg"
              alt="Reels App"
              className="w-full h-64 sm:h-80 md:h-150 object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-start p-6 rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Reels Now
              </h2>
              <p className="mt-2 max-w-md text-sm sm:text-base text-white">
                Create and share short exciting reels with a global audience.
              </p>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-orange-400">
                Start your reel journey!
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AppSlider;
