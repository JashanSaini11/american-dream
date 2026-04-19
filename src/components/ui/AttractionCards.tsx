import { motion } from "framer-motion";
import CTAButton from "./Button";
import CharacterImages from "./CharacrerImages";


export type ImageLayout = "default" | "angrybirds" | "lego";

export type Attraction = {
  name: string;
  bgGradient: string;
  logo: string;
  images: string[];
  imageWidths?: string[];
  variant: "logo" | "single" | "characters";
  imageLayout?: ImageLayout;
  logoWidth?: string;
  logoTop?: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonColor: string;
  href: string;
};


function AttractionCard({
  attraction,
  index,
}: {
  attraction: Attraction;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full h-[400px] rounded-xl overflow-visible group cursor-pointer transition-all duration-500 hover:rounded-[2.5rem]"
      style={
        {
          "--btn-bg": attraction.buttonBg,
          "--btn-hover-bg": attraction.buttonHoverBg,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 rounded-xl overflow-hidden transition-all duration-500 group-hover:rounded-[2.5rem]"   
        style={{ background: attraction.bgGradient }}
      />

      <div className="relative w-full h-full p-6">
        {attraction.variant === "logo" && (
          <div className={`flex items-center justify-center h-full`}>
            <img
              src={attraction.logo}
              alt={attraction.name}
              style={attraction.logoWidth ? { width: attraction.logoWidth } : undefined}
              className={`object-contain transition-transform duration-500 ease-out group-hover:rotate-[-6deg] ${attraction.logoWidth ? '' : 'h-28 md:h-32'}`}
            />
          </div>
        )}


        {attraction.variant === "single" && (
          <>
            <img
              src={attraction.logo}
              alt={attraction.name}
              style={{ ...(attraction.logoWidth && { width: attraction.logoWidth }), ...(attraction.logoTop && { top: attraction.logoTop }) }}
              className={`absolute ${attraction.logoTop ? '' : 'top-6'} left-1/2 -translate-x-1/2 object-contain z-10 transition-transform duration-500 ease-out group-hover:scale-90 ${attraction.logoWidth ? '' : 'h-20 md:h-24'}`}
            />
            <img
              src={attraction.images?.[0]}
              alt=""
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 object-contain translate-y-4 w-5/6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3`}
            />
          </>
        )}

        {attraction.variant === "characters" && (
          <>
            <img
              src={attraction.logo}
              alt={attraction.name}
              style={{ ...(attraction.logoWidth && { width: attraction.logoWidth }), ...(attraction.logoTop && { top: attraction.logoTop }) }}
              className={`absolute ${attraction.logoTop ? '' : 'top-4'} left-1/2 -translate-x-1/2 object-contain z-10 transition-transform duration-500 ease-out group-hover:-translate-y-3 ${attraction.logoWidth ? '' : 'w-[70%] md:w-[65%]'}`}
            />
            <CharacterImages
              images={attraction.images}
              imageWidths={attraction.imageWidths}
              layout={attraction.imageLayout}
            />
          </>
        )}
      </div>

      {/* BUTTON */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-50">
        <CTAButton
          label="Explore More"
          className="text-[24px] whitespace-nowrap group-hover:text-white font-display"
        />
      </div>
    </motion.div>
  );
}

export default AttractionCard;
