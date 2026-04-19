import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.svg";

// ─── Types ─────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

// ─── Constants ─────────────────────────────────────
const LEFT_LINKS: NavLink[] = [
  { label: "Entertainment", href: "#entertainment" },
  { label: "Dining", href: "#dining" },
  { label: "Retail & Leasing", href: "#retail" },
];

const RIGHT_LINKS: NavLink[] = [
  { label: "Events & Venues", href: "#events" },
  { label: "Luxury / The Avenue", href: "#luxury" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenuOnScroll = () => menuOpen && setMenuOpen(false);
    window.addEventListener("scroll", closeMenuOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const scrolled = scrollY > 20;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center px-8 transition-all duration-500 ${scrolled ? 'shadow-lg' : ''}`}
        style={{
          background: scrolled
            ? `linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)`
            : `rgba(8,8,16,${Math.min(scrollY / 200, 0.15)})`,
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.08)"
            : "0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* LEFT */}
        <nav className="hidden xl:flex items-center gap-9 flex-1">
          {LEFT_LINKS.map((link) => (
            <NavItem key={link.href} {...link} scrolled={scrolled} />
          ))}
        </nav>

        {/* CENTER LOGO */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <img src={Logo} alt="Logo" className="h-8" />
        </a>

        {/* RIGHT */}
        <nav className="hidden xl:flex items-center gap-9 flex-1 justify-end">
          {RIGHT_LINKS.map((link) =>
            link.label === "Contact Us" ? (
              <CTAButton key={link.href} href={link.href} scrolled={scrolled} />
            ) : (
              <NavItem key={link.href} {...link} scrolled={scrolled} />
            )
          )}
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden ml-auto"
        >
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-[2px] transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-white'}`}
                style={{
                  transform:
                    menuOpen && i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : menuOpen && i === 2
                        ? "translateY(-6px) rotate(-45deg)"
                        : menuOpen && i === 1
                          ? "scaleX(0)"
                          : "none",
                }}
              />
            ))}
          </div>
        </button>
      </motion.header>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        className="fixed top-[72px] left-0 right-0 z-[99] xl:hidden rounded-b-lg mx-4"
        style={{
          background: "rgba(8,8,16,0.97)",
          backdropFilter: "blur(12px)",
          padding: menuOpen ? "24px" : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {[...LEFT_LINKS, ...RIGHT_LINKS].map((link) => (
          <MobileLink
            key={link.href}
            {...link}
            onClick={() => setMenuOpen(false)}
          />
        ))}
      </motion.div>
    </>
  );
}

// ─── Nav Item ─────────────────────────────────────
// Background is always dark — text stays white at all scroll depths.
function NavItem({ href, label, scrolled }: NavLink & { scrolled: boolean }) {
  return (
    <a
      href={href}
      className={`relative text-lg font-medium transition-colors duration-300 ${
        scrolled ? "text-black hover:text-black/60" : "text-white/70 hover:text-white"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 w-full h-[1px] scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left ${
          scrolled ? "bg-black/60" : "bg-white"
        }`}
      />
    </a>
  );
}

// ─── CTA Button ───────────────────────────────────
// Always white border/text; inverts to white bg + dark text on hover.
function CTAButton({ href, scrolled }: { href: string; scrolled: boolean }) {
  return (
    <a
      href={href}
      className={`px-4 py-1.5 rounded-full text-lg font-medium border transition-all duration-300 ${
        scrolled
          ? "border-black/60 text-black hover:bg-black hover:text-white"
          : "border-white/30 text-white/70 hover:bg-white hover:text-black hover:border-white"
      }`}
    >
      Contact Us
    </a>
  );
}

// ─── Mobile Link ──────────────────────────────────
function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block py-3 text-white/70 hover:text-white transition-colors duration-300"
    >
      {label}
    </a>
  );
}