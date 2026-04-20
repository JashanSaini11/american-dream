import { useState } from "react"
import { socialIcons, footerLinks, legalLinks, LOGO } from "@/data/footerdata"


export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-white border-t border-slate-100">

      {/* ── Top: Logo ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12">
        <div className=" border-b border-slate-300 py-5">
          <div className="flex items-center gap-2.5">
            {/* Logo mark */}
            <img src={LOGO} alt="" className="w-[350px] h-auto" />
          </div>
        </div>

        {/* ── Main footer body ── */}
        <div className="py-10 flex flex-col lg:flex-row gap-16">

          {/* Left — Newsletter + Social */}
          <div className="flex flex-col gap-8 max-w-xs">
            <div>
              <h3
                className="text-slate-900 text-3xl leading-tight mb-3"
              >
                Sign up for the latest news
              </h3>
              <p
                className="text-slate-500 text-md leading-relaxed"
              >
                American Dream openings, events, and promotions
                straight to your inbox!
              </p>
            </div>

            {/* Email input */}
            <div className="flex items-center border border-slate-300 rounded-none overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-sm text-slate-900
                  placeholder:text-slate-400 outline-none bg-white"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <button
                className="px-4 py-3 bg-slate-900 text-white
                  hover:bg-slate-700 transition-colors duration-200
                  flex items-center justify-center flex-shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="white" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Social icons */}
            <div>
              <p
                className="text-slate-500 text-sm mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Follow us on social
              </p>
              <div className="flex items-center gap-5">
                {socialIcons.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900
                      transition-colors duration-200"
                    aria-label={s.name}
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — 3 link columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4
                  className="text-slate-900 text-xs font-bold tracking-[0.2em]
                    uppercase mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {title}
                </h4>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-500 text-sm no-underline
                          hover:text-slate-900 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Address + Phone row */}
          <div className="py-4 flex flex-col sm:flex-row items-start sm:items-center
            justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {/* Location pin */}
              <div className="w-5 h-5 rounded-full border border-slate-400
                flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
              </div>
              <span
                className="text-slate-500 text-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                1 American Dream Way, East Rutherford, NJ 07073
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="tel:18332637326"
                className="flex items-center gap-2 text-slate-500 text-xs
                  no-underline hover:text-slate-900 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.87 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                1-833-263-7326
              </a>

              <a
                href="#chat"
                className="flex items-center gap-2 text-slate-500 text-xs
                  no-underline hover:text-slate-900 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                Chat with us
              </a>
            </div>
          </div>

          {/* Legal links */}
          <div className="py-4 border-t border-slate-100 flex flex-wrap items-center
            justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-400 text-xs no-underline
                  hover:text-slate-600 transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </div>

    </footer>
  )
}