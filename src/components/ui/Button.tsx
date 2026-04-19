import { useState } from "react";

interface CTAButtonProps {
  label: string;
  isVideo?: boolean;
  className?: string;
  variant?: "solid" | "glass";
}

function CTAButton({
  label,
  isVideo = false,
  className = "",
  variant = "solid",
}: CTAButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const baseClasses =
    "inline-flex items-center justify-center group px-8 py-6 rounded-full cursor-pointer outline-none transition-all duration-300 min-w-[180px] transform hover:scale-105";

  const variants = {
    solid: "font-body font-semibold tracking-tight ",
    glass:
      "text-white border border-white/30 bg-white/10 backdrop-blur-[16px] font-body uppercase",
  };

  const finalClass = `${baseClasses} ${variants[variant]} ${className}`;

  const ButtonContent = (
    <span className="flex items-center gap-2 whitespace-nowrap">
      <span>{label}</span>

      <span className="inline-flex items-center justify-center w-4 h-4">
        <svg
          className="opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );

  if (isVideo) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className={finalClass}
        >
          {ButtonContent}
        </button>

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

              <div className="relative w-full pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/nqL41g0k2Kw"
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

  return (
    <button
      className={`
        ${finalClass}
        bg-[var(--btn-bg)]
        group-hover:bg-[var(--btn-hover-bg)]
        transition-all duration-300
      `}
    >
      {ButtonContent}
    </button>
  );
}

export default CTAButton;