import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { brandLogos } from "@/components/constants/brands";

export default function BrandStrip() {
  return (
    <div className="relative w-full py-4 md:py-5 overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-r from-[#080810] to-transparent pointer-events-none" />

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-l from-[#080810] to-transparent pointer-events-none" />

      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={{ enabled: true, momentum: false }}
        loop
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView="auto"
        spaceBetween={16}
        allowTouchMove={false}
        className="w-full"
      >
        {[...brandLogos, ...brandLogos].map((brand, i) => (
          <SwiperSlide
            key={i}
            style={{ width: "auto" }}
            className="overflow-visible"
          >
            <div
              className="
                flex flex-col items-center justify-center
                rounded-full bg-white shadow-lg mx-2
                w-[90px] h-[90px]
                sm:w-[120px] sm:h-[120px]
                md:w-[150px] md:h-[150px]
                lg:w-[180px] lg:h-[180px]
                transition-transform duration-300 ease-out
                hover:scale-90 md:hover:scale-75
                hover:-rotate-6 hover:translate-y-1
                will-change-transform
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  object-contain
                  w-[60px]
                  sm:w-[80px]
                  md:w-[110px]
                  lg:w-[140px]
                "
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden"
                  );
                }}
              />

              <span className="hidden text-[8px] font-bold text-center text-black px-1 leading-tight">
                {brand.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}