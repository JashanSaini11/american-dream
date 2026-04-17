import { useState } from "react";

interface CTAButtonProps {
  label: string;
  accent?: string;
  isVideo?: boolean;
  className?: string;
  variant?: "solid" | "glass";
}

function CTAButton({
  label,
  accent = "#00E5A0",
  isVideo = false,
  className = "",
  variant = "solid",
}: CTAButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const videoUrl =
    "https://www.youtube.com/embed/nqL41g0k2Kw?si=N9UKAdVZZ1FcpiT8";

  const baseClasses =
    "inline-flex items-center justify-center group px-8 py-6 rounded-full text-[12px] tracking-[0.22em]  cursor-pointer outline-none transition-all duration-300 min-w-[180px] transform hover:scale-105";

  const variants = {
    solid: "text-[#06060a] font-body font-semibold  text-[12px] ",
    glass:
      "text-white border border-white/30 bg-white/10 backdrop-blur-[16px] font-body uppercase",
  };


  const finalClass = `${baseClasses} ${variants[variant]} ${className}`;


  const dynamicStyle =
    variant === "solid"
      ? {
          backgroundColor: accent,
          boxShadow: hovered ? `${accent}55 0 8px 32px` : "none",
        }
      : {
          boxShadow: hovered
            ? `0 0 0 1px ${accent}55, 0 8px 32px ${accent}33`
            : "none",
        };

  const ButtonContent = (
    <>
      {label}
      <span className="inline-flex overflow-hidden w-0 opacity-0 group-hover:w-3.5 group-hover:opacity-100 transition-all duration-300 ease-out">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  if (isVideo) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={finalClass}
          style={{
            ...dynamicStyle,
            gap: hovered ? "10px" : "0",
          }}
        >
          {ButtonContent}
        </button>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-12 right-0 text-white"
              >
                ✕
              </button>

              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // 🔘 NORMAL BUTTON
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={finalClass}
      style={{
        ...dynamicStyle,
        gap: hovered ? "10px" : "0",
      }}
    >
      {ButtonContent}
    </button>
  );
}

export default CTAButton;