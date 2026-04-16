import { useState } from "react";

function CTAButton({
  label,
  accent,
  isVideo,
}: {
  label: string;
  accent: string;
  isVideo: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const videoUrl =
    "https://www.youtube.com/embed/nqL41g0k2Kw?si=N9UKAdVZZ1FcpiT8";

  const baseClasses =
    "inline-flex items-center justify-center gap-0 group px-8 py-6 rounded-full  text-[12px] tracking-[0.22em] uppercase cursor-pointer outline-none transition-all duration-300 min-w-[180px] transform hover:scale-105";

  if (isVideo) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`${baseClasses} font-body font-semibold gap-2.5 border border-white/32 bg-white/16 text-white backdrop-blur-[18px] hover:shadow-[0_12px_32px_rgba(255,255,255,0.18)]`}
          style={{
            gap: hovered ? "10px" : "0",
          }}
        >
          {label}
          {/* Arrow — only visible on hover */}
          <span className="inline-flex overflow-hidden w-0 opacity-0 group-hover:w-3.5 group-hover:opacity-100 transition-all duration-300 ease-out">
            <svg width="20" height="18" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Modal */}
        {showModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Video iframe */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${baseClasses} gap-2.5 text-[#06060a] hover:shadow-lg font-body`}
      style={{
        backgroundColor: accent,
        gap: hovered ? "10px" : "0",
        boxShadow: hovered ? `${accent}55 0 8px 32px` : "none",
      }}
    >
      {label}
      {/* Arrow — only visible on hover */}
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
    </button>
  );
}

export default CTAButton;
