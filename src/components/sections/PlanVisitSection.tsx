import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cards } from "../constants/Cards"

const CHARACTER_IMG =
    "https://images.ctfassets.net/0eh8v8vf1iw0/1ujpMa5zi7WTNbKWcF4Bxn/e17d7032e3f43025cd5f0b526f490436/8bd4986e23eb2030d86cbcff8d990cec-2.webp"

const MAP_IMG =
    "https://images.ctfassets.net/0eh8v8vf1iw0/4ogFGKWS3wLJBAOU1U11xr/c5a5a4523db9bafbf9db4c16e274e6db/42d8bfadf2db829d9aa2350e680cc114-2.webp"

const GOOGLE_MAPS_URL =
    "https://www.google.com/maps/place/American+Dream/@40.8092049,-74.0706843,15z/data=!4m6!3m5!1s0x89c2f98d2dc94ddd:0x41e8d13cd9b43e7c!8m2!3d40.8091292!4d-74.0685673!16zL20vMGI0dHk2?entry=ttu"

const APPLE_MAPS_URL =
    "https://maps.apple.com/place?address=1%20American%20Dream%20Way%2C%20East%20Rutherford%2C%20NJ%2007073%2C%20United%20States&map=explore&coordinate=40.809139%2C-74.068791&name=American%20Dream&place-id=ID48678EDF73392E6&_provider=9902"

export default function PlanVisitSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section
            ref={ref}
            className="w-full relative overflow-visible"
            style={{ background: "#dd0a3f", borderRadius: "40px 40px 0 0" }}
        >
            {/* Character — top right, overflows top */}
            <motion.img
                src={CHARACTER_IMG}
                alt="Character"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-[-10%] right-[20%] w-[130px] md:w-[200px] z-10
          -translate-y-[20%] pointer-events-none"
            />

            <div className="max-w-[1280px] mx-auto py-20 px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row items-stretch gap-8">

                    {/* ── Left: Heading + [Map + Cards side by side] ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 flex flex-col gap-7"
                    >
                        {/* Heading stays full width */}
                        <h2
                            className="text-white leading-[1.1] text-[clamp(2.5rem,5vw,4rem)] font-display"
                        >
                            Plan your visit
                        </h2>

                        <div className="flex flex-col lg:flex-row gap-5 items-stretch">

                            {/* Map */}
                            <div
                                className="relative flex-1 overflow-hidden"
                                style={{ borderRadius: 24, height: 520 }}
                            >
                                <img
                                    src={MAP_IMG}
                                    alt="American Dream Location Map"
                                    className="w-full h-full object-cover"
                                    style={{ filter: "saturate(0.7) brightness(0.95)" }}
                                />
                                <div className="absolute inset-0 bg-black/10" />

                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.35 }}    
                                    className="absolute top-4 left-4
          bg-black/90 backdrop-blur-md rounded-2xl px-5 py-4
          flex flex-col gap-3 z-10 max-w-[280px]"
                                >
                                    <p className="text-white text-[10px] font-bold tracking-[0.18em] uppercase m-0"
                                        style={{ fontFamily: "var(--font-body)" }}>
                                        We are located at:
                                    </p>
                                    <p className="text-white/75 text-sm leading-snug m-0"
                                        style={{ fontFamily: "var(--font-body)" }}>
                                        1 American Dream Way,<br />
                                        East Rutherford, NJ 07073
                                    </p>

                                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white rounded-full px-4 py-2
            text-black text-xs font-semibold no-underline hover:bg-white/90
            transition-colors w-fit"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        {/* Google Maps SVG */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 232597 333333">
                                            <path d="M151444 5419C140355 1916 128560 0 116311 0 80573 0 48591 16155 27269 41534l54942 46222 69232-82338z" fill="#1a73e8" />
                                            <path d="M27244 41534C10257 61747 0 87832 0 116286c0 21876 4360 39594 11517 55472l70669-84002-54942-46222z" fill="#ea4335" />
                                            <path d="M116311 71828c24573 0 44483 19910 44483 44483 0 10938-3957 20969-10509 28706 0 0 35133-41786 69232-82313-14089-27093-38510-47936-68048-57286L82186 87756c8166-9753 20415-15928 34125-15928z" fill="#4285f4" />
                                            <path d="M116311 160769c-24573 0-44483-19910-44483-44483 0-10863 3906-20818 10358-28555l-70669 84027c12072 26791 32159 48289 52851 75381l85891-102122c-8141 9628-20339 15752-33948 15752z" fill="#fbbc04" />
                                            <path d="M148571 275014c38787-60663 84026-88210 84026-158728 0-19331-4738-37552-13080-53581L64393 247140c6578 8620 13206 17793 19683 27900 23590 36444 17037 58294 32260 58294 15172 0 8644-21876 32235-58320z" fill="#34a853" />
                                        </svg>
                                        View on Google Maps
                                    </a>

                                    <a href={APPLE_MAPS_URL} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white rounded-full px-4 py-2
            text-black text-xs font-semibold no-underline hover:bg-white/90
            transition-colors w-fit"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="16" height="16">
                                            <path fill="#2d2f2f" d="M0.101 123.353C0.101 123.353 1.473 102.766 2.542 94.752C3.326 88.878 4.071 84.283 5.304 79.581C6.416 75.339 7.845 71.529 9.401 67.722C10.911 64.027 12.44 60.644 14.468 57.049C16.712 53.07 20.082 48.312 22.446 44.975C24.187 42.518 25.398 40.869 27.189 38.722C29.248 36.253 31.861 33.336 34.197 31.068C36.281 29.045 38.134 27.525 40.449 25.677C43.152 23.519 46.825 20.791 49.505 18.993C51.532 17.633 53.029 16.743 55.004 15.651C57.2 14.437 59.493 13.275 62.119 12.093C65.245 10.686 69.092 9.053 72.576 7.889C75.92 6.772 78.958 6.03 82.603 5.194C86.892 4.21 91.81 3.315 96.725 2.498C102.051 1.612 108.527 0.442 113.436 0.127C117.269 -0.119 118.744 0.238 123.727 0.259C136.954 0.314 172.544 0.067 196.227 -0.072C218.982 -0.206 237.842 -0.462 263.155 -0.553C296.344 -0.672 352.685 -1.804 378.214 -0.553C390.995 0.073 398.441 0.856 406.914 2.266C413.784 3.409 419.192 4.529 425.365 6.622C432.001 8.871 439.217 12.027 445.353 15.591C451.215 18.996 456.412 23.105 461.497 27.379C466.575 31.648 471.773 36.095 475.847 41.217C479.869 46.273 482.883 52.03 485.841 57.874C488.884 63.886 491.739 70.293 493.785 76.836C495.851 83.443 497.201 90.426 498.141 97.337C499.083 104.264 499.115 112.105 499.423 118.35C499.671 123.367 499.8 125.183 499.935 131.931C500.328 151.653 500.225 208.174 500.191 248.015C500.155 290.288 500.258 355.917 499.679 378.705C499.474 386.782 499.462 389.654 498.91 395.106C498.355 400.588 497.363 406.215 496.347 411.506C495.382 416.533 494.503 421.344 493.016 426.112C491.519 430.912 489.711 435.564 487.379 440.206C484.901 445.139 481.606 450.53 478.41 454.813C475.582 458.604 472.746 461.429 469.441 464.807C465.737 468.592 461.53 472.841 457.14 476.338C452.734 479.848 447.48 483.415 443.046 485.82C439.456 487.767 436.772 488.69 432.796 490.176C427.476 492.165 420.267 494.916 413.833 496.326C407.452 497.725 400.9 498.036 394.358 498.633C387.747 499.236 383.868 499.61 374.37 499.914C350.881 500.666 293.067 499.831 251.88 499.914C209.967 499.999 143.004 500.497 125.034 500.426C120.184 500.407 119.281 500.619 115.797 500.316C111.189 499.915 105.798 498.829 99.848 497.712C92.211 496.278 80.91 494.42 73.807 492.179C68.629 490.545 64.996 488.672 60.787 486.645C56.646 484.651 52.64 482.735 48.743 480.135C44.595 477.368 40.396 473.81 36.699 470.37C33.151 467.069 29.857 463.562 26.934 459.954C24.135 456.498 21.976 453.117 19.448 449.212C16.561 444.752 12.816 439.402 10.659 434.564C8.757 430.298 7.794 426.075 6.753 421.87C5.753 417.831 5.235 414.349 4.474 409.826C3.5 404.039 2.144 397.681 1.545 389.97C0.72 379.348 1.347 368.708 1.219 351.886C0.968 318.86 0.418 246.903 0.243 205.083C0.112 173.879 0.101 123.353 0.101 123.353Z" />
                                            <polygon fill="#0087ff" points="139.396,-0.372 139.077,198.575 239.349,199.533 238.71,-1.011" />
                                            <circle fill="#ffffff" cx="187.457" cy="305.332" r="121.246" />
                                            <circle fill="#0186ff" cx="187.935" cy="297.57" r="92.289" />
                                        </svg>
                                        View on Apple Maps
                                    </a>
                                </motion.div>
                            </div>


                            <div className="flex flex-col gap-4 w-full lg:w-[360px] flex-shrink-0">
                                {cards.map((card, i) => (
                                    <motion.a
                                        key={card.label}
                                        href={card.href}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex-1 flex flex-col items-center justify-center gap-2
            cursor-pointer text-center no-underline transition-all duration-300"
                                        style={{
                                            background: card.bg,
                                            borderRadius: 22,
                                            padding: "16px 12px",
                                        }}
                                    >
                                        <span style={{ fontSize: 60 }}>{card.icon}</span>
                                        <span
                                            className="text-slate-900 font-bold text-2xl whitespace-nowrap"
                                        >
                                            {card.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}