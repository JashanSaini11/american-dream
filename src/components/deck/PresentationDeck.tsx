import { useState, useEffect, useCallback } from "react";
import logo from "@/assets/logo-white.svg";
import { useVideoAutoplay } from "@/hooks/useVideoAutoplay"; 
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BarChart,
  ShoppingBag,
  Gem,
  Utensils,
  MapPin,
  Calendar,
  Mail,
} from "lucide-react";

// ─── Slide Data ───────────────────────────────────────────────────
const slides = [
  { id: "cover", nav: "Cover", icon: Home },
  { id: "overview", nav: "Overview", icon: BarChart },
  { id: "retail", nav: "Retail", icon: ShoppingBag },
  { id: "luxury", nav: "Luxury", icon: Gem },
  { id: "dining", nav: "Dining", icon: Utensils },
  { id: "attractions", nav: "Attractions", icon: MapPin },
  { id: "events", nav: "Events", icon: Calendar },

  { id: "contact", nav: "Contact", icon: Mail },
];

// ─── Individual Slide Content Components ──────────────────────────


function CoverSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://videos.ctfassets.net/0eh8v8vf1iw0/4kXkRNxm965EZg58SccZrF/4c0b54c91ae54268546fd440f8f1024a/Hero_Video_Desktop.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-[#080810]/60" />
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#00E5A0] text-xs font-bold tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Commercial Sales Deck · 2025
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black leading-[0.95] tracking-tight mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 10vw, 9rem)",
          }}
        >
          American
          <br />
          Dream
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="h-[2px] w-24 bg-[#00E5A0] mx-auto mb-6 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          The world's greatest entertainment and retail destination — minutes
          from Manhattan.
        </motion.p>
      </div>
      {/* Corner logo */}
      <div className="absolute bottom-10 right-10 z-10">
        <img
          src="https://images.ctfassets.net/0eh8v8vf1iw0/LDBMCLoV7dPZKOBS4azME/4733024842bedf881a3249047faa6df1/TheAvenue-Logo-White-Primary.png"
          alt="American Dream"
          className="h-8 object-contain opacity-60"
        />
      </div>
    </div>
  );
}

function OverviewSlide() {
  const stats = [
    { value: "40M+", label: "Annual Visitors", accent: "#00E5A0" },
    { value: "3M", label: "Square Feet", accent: "#38BDF8" },
    { value: "450+", label: "Brands & Retailers", accent: "#eb008b" },
    { value: "15+", label: "World-Class Attractions", accent: "#F4A261" },
  ];
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <img
        src="https://images.ctfassets.net/0eh8v8vf1iw0/l1toMXzyDA6jiQHB8q3sC/bc773110c7c8d9cddd9f8b382d37ebdd/HP-Desktop.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080810] via-[#080810]/90 to-[#080810]/50" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-16 flex flex-col gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00E5A0]" />
            <span
              className="text-[#00E5A0] text-[10px] font-bold tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Why American Dream
            </span>
          </div>
          <h2
            className="text-white font-black leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            The Scale of a City.
            <br />
            <span className="text-[#00E5A0]">The Soul of a Dream.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col gap-3"
            >
              <div
                className="w-8 h-[2px] rounded-full"
                style={{ background: s.accent }}
              />
              <span
                className="font-black leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  color: s.accent,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                }}
              >
                {s.value}
              </span>
              <span
                className="text-white/50 text-xs uppercase tracking-widest font-semibold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
        <p
          className="text-white/40 text-sm max-w-lg leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          American Dream isn't a mall. It's a global destination that combines
          the energy of a theme park, the prestige of luxury retail, and the
          scale of a city — all under one extraordinary roof. #1 most visited
          destination in New Jersey · Est. 2019 · Open 365 days
        </p>
      </div>
    </div>
  );
}

function RetailSlide() {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://videos.ctfassets.net/0eh8v8vf1iw0/3RnYKeC28TYUE0uPWIetiG/0c1ecef864eff5fb0d85d20dec0f6f54/Retail_Muted_15min.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080810]/95 via-[#080810]/70 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-16 flex flex-col gap-8 max-w-2xl">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-white/30" />
          <span
            className="text-white/45 text-[10px] font-bold tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Retail & Leasing
          </span>
        </div>
        <h2
          className="text-white font-black leading-[0.95]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          Shop the
          <br />
          Dream
        </h2>
        <p
          className="text-white/55 text-base leading-relaxed max-w-md"
          style={{ fontFamily: "var(--font-body)" }}
        >
          450+ brands across every tier — from the world's most coveted luxury
          flagships to the brands your customers love every day. Unmatched foot
          traffic. Unparalleled opportunity.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Luxury Flagship",
            "Mid-Tier Retail",
            "Food & Beverage",
            "Pop-Up & Kiosk",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-white/15 text-white/50 text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="mailto:leasing@americandream.com"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black
            text-[10px] font-bold tracking-[0.22em] uppercase w-fit hover:bg-white/90 transition-all"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Book a Leasing Call 
        </a>
      </div>
    </div>
  );
}

function LuxurySlide() {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1606132288185-ae8122b4c3a3?q=80&w=1470&auto=format&fit=crop"
        alt="The Avenue"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-16 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#C9A84C]" />
          <span
            className="text-[#C9A84C] text-[10px] font-bold tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Luxury · The Avenue
          </span>
        </div>
        <img
          src="https://images.ctfassets.net/0eh8v8vf1iw0/LDBMCLoV7dPZKOBS4azME/4733024842bedf881a3249047faa6df1/TheAvenue-Logo-White-Primary.png"
          alt="The Avenue"
          className="h-48 object-contain object-left"
        />
        <h2
          className="text-white font-black leading-tight max-w-xl"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 4.5vw, 3.5rem)",
          }}
        >
          Where the World's Most Iconic Brands{" "}
          <span className="text-[#C9A84C]">Call Home</span>
        </h2>
        <div className="flex gap-8">
          {[
            ["50+", "Luxury Flagships"],
            ["$2B+", "Annual Luxury Sales"],
            ["#1", "Luxury Destination"],
          ].map(([val, label]) => (
            <div key={label} className="flex flex-col gap-2">
              <span
                className="text-[#C9A84C] font-black text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {val}
              </span>
              <span
                className="text-white/80 text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <p
          className="text-white/50 text-sm max-w-sm leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Hermès · Louis Vuitton · Gucci · Dior · Prada · Burberry · Tiffany &
          Co · Cartier and many more.
        </p>
        <a
          href="mailto:leasing@americandream.com"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
            border border-[#C9A84C] text-[#C9A84C]
            text-[10px] font-bold tracking-[0.22em] uppercase w-fit
            hover:bg-[#C9A84C] hover:text-black transition-all"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Flagship Leasing 
        </a>
      </div>
    </div>
  );
}

function DiningSlide() {
  const videoRef = useVideoAutoplay();
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
   {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-55 z-[1]"
          ref={videoRef}
          src="https://videos.ctfassets.net/0eh8v8vf1iw0/4L6wksud5tdLYTr7v0rslB/f22eb25d5bc17e4d35b32bd204aa6233/Dining_Muted_720p.mp4"
          preload="none"
          muted
          loop
          playsInline
        />

        {/* Gradients */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#080810] via-[#080810]/30 to-[#080810]/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-16 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#4CC9F0]" />
          <span
            className="text-[#4CC9F0] text-[10px] font-bold tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Dining & Lifestyle
          </span>
        </div>
        <h2
          className="text-white font-black leading-[0.95]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
          }}
        >
          Great Eats
          <br />
          for All
        </h2>
        <p
          className="text-white/65 text-base leading-relaxed max-w-md"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Taste buds delighted here! Whatever the occasion, you'll find dozens
          of delicious options ranging from the finest cuisine to simple and
          quick bites.
        </p>
        <div className="flex gap-6">
          {[
            ["100+", "Dining Concepts"],
            ["5★", "Fine Dining"],
            ["24/7", "F&B Options"],
          ].map(([val, label]) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="text-[#4CC9F0] font-black text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {val}
              </span>
              <span
                className="text-white/40 text-xs uppercase tracking-widest"
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <a
          href="mailto:leasing@americandream.com"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
            border border-[#4CC9F0] text-[#4CC9F0]
            text-[10px] font-bold tracking-[0.22em] uppercase w-fit
            hover:bg-[#4CC9F0] hover:text-black transition-all"
          style={{ fontFamily: "var(--font-body)" }}
        >
          F&B Leasing
        </a>
      </div>
    </div>
  );
}

function AttractionsSlide() {
  const items = [
    {
      name: "Nickelodeon Universe",
      tag: "Indoor Theme Park",
      img: "https://images.ctfassets.net/0eh8v8vf1iw0/5TJEXFKUcEjTPLABTn5hoH/f528fc158da0973fdce8cf2a162c86aa/NickU-General2024-Homepage-v4_Desktop.jpg",
    },
    {
      name: "DreamWorks Water Park",
      tag: "Indoor Water Park",
      img: "https://images.ctfassets.net/0eh8v8vf1iw0/3WWRWWPjuIvbEQdt6rGYtM/34fac37b82b0c8ffea0a0d38c990c806/DWWPDesktop_2x.webp",
    },
    {
      name: "Big SNOW",
      tag: "Indoor Ski Slope",
      img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=70",
    },
  ];
  return (
    <div className="relative w-full h-full flex flex-col justify-center overflow-hidden bg-[#080810]">
      <div className="relative z-10 max-w-7xl mx-auto px-16 w-full flex flex-col gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FF6B35]" />
            <span
              className="text-[#FF6B35] text-[10px] font-bold tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Attractions & Entertainment
            </span>
          </div>
          <h2
            className="text-white font-black leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            15+ World-Class Attractions —{" "}
            <span className="text-[#FF6B35]">All Under One Roof</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ height: 280 }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="text-white/60 text-[9px] uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.tag}
                </p>
                <h3
                  className="text-white font-black text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventsSlide() {
  const items = [
    {
      icon: "🎵",
      title: "Live Concerts & Shows",
      desc: "World-class performers at dedicated event spaces — from pop icons to Broadway-style productions.",
    },
    {
      icon: "🏟️",
      title: "The Rink @ Arena",
      desc: "NHL-regulation ice rink hosting public skating, hockey events, and spectacular live shows year-round.",
    },
    {
      icon: "🎪",
      title: "Brand Activations",
      desc: "40M+ annual visitors make American Dream the #1 venue for immersive brand experiences.",
    },
    {
      icon: "🎯",
      title: "Corporate Events",
      desc: "State-of-the-art convention and exposition spaces for product launches, conferences, and galas.",
    },
  ];
  return (
    <div className="relative w-full h-full flex flex-col justify-center overflow-hidden bg-[#080810]">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.ctfassets.net/0eh8v8vf1iw0/l1toMXzyDA6jiQHB8q3sC/bc773110c7c8d9cddd9f8b382d37ebdd/HP-Desktop.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-[#080810]/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-16 w-full flex flex-col gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00E5A0]" />
            <span
              className="text-[#00E5A0] text-[10px] font-bold tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Events & Venue Platform
            </span>
          </div>
          <h2
            className="text-white font-black leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            A Global Stage for{" "}
            <span className="text-[#00E5A0]">Unforgettable Moments</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-7 flex flex-col gap-3 hover:bg-white/[0.06] transition-colors"
            >
              <span className="text-3xl">{item.icon}</span>
              <div className="w-6 h-[2px] rounded-full bg-[#00E5A0]" />
              <h3
                className="text-white font-black text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <a
          href="mailto:events@americandream.com"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full
            border border-[#00E5A0] text-[#00E5A0]
            text-[10px] font-bold tracking-[0.22em] uppercase w-fit
            hover:bg-[#00E5A0] hover:text-black transition-all"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Book a Venue 
        </a>
      </div>
    </div>
  );
}

function ContactSlide() {
  const actions = [
    {
      title: "Retail Leasing",
      sub: "Flagship, mid-tier, pop-up",
      accent: "#00E5A0",
      email: "leasing@americandream.com",
    },
    {
      title: "Sponsorship",
      sub: "Brand partnerships & activations",
      accent: "#eb008b",
      email: "sponsors@americandream.com",
    },
    {
      title: "Events & Venues",
      sub: "Concerts, launches, conventions",
      accent: "#38BDF8",
      email: "events@americandream.com",
    },
  ];
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden bg-[#080810]">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.ctfassets.net/0eh8v8vf1iw0/kUaeobN8BlzCPwg1E8D3l/8382cbd51989ddd2973677669df785e8/250304-Avenue_Homepage_Desktop.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-16 w-full text-center flex flex-col gap-10">
        <div>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-white/20" />
            <span
              className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Let's Talk
            </span>
            <div className="h-px w-8 bg-white/20" />
          </div>
          <h2
            className="text-white font-black leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            Ready to Be Part of
            <br />
            <span className="text-[#00E5A0]">Something Extraordinary?</span>
          </h2>
          <p
            className="text-white/40 text-sm max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Whether you're looking to lease a space, activate your brand, or
            book a world-class venue — the American Dream team is ready to make
            it happen.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {actions.map((a, i) => (
            <motion.a
              key={a.title}
              href={`mailto:${a.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border p-7 flex flex-col gap-3 text-left
                hover:bg-white/[0.04] transition-all duration-300 no-underline group"
              style={{ borderColor: `${a.accent}30` }}
            >
              <div
                className="w-6 h-[2px] rounded-full"
                style={{ background: a.accent }}
              />
              <h3
                className="text-white font-black text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {a.title}
              </h3>
              <p
                className="text-white/40 text-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {a.sub}
              </p>
              <span
                className="text-xs font-bold uppercase tracking-widest mt-2 group-hover:underline"
                style={{ color: a.accent, fontFamily: "var(--font-body)" }}
              >
                Get in Touch →
              </span>
            </motion.a>
          ))}
        </div>
        <p
          className="text-white/20 text-xs"
          style={{ fontFamily: "var(--font-body)" }}
        >
          1 American Dream Way, East Rutherford, NJ 07073 · 1-833-263-7326
        </p>
      </div>
    </div>
  );
}

// ─── Slide Renderer ───────────────────────────────────────────────
function SlideContent({ id }: { id: string }) {
  switch (id) {
    case "cover":
      return <CoverSlide />;
    case "overview":
      return <OverviewSlide />;
    case "retail":
      return <RetailSlide />;
    case "luxury":
      return <LuxurySlide />;
    case "dining":
      return <DiningSlide />;
    case "attractions":
      return <AttractionsSlide />;
    case "events":
      return <EventsSlide />;
    case "contact":
      return <ContactSlide />;
    default:
      return null;
  }
}

// ─── Main Deck ────────────────────────────────────────────────────
export default function PresentationDeck({ onExit }: { onExit?: () => void }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setSidebarOpen(false);
    },
    [current],
  );

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div
      className="fixed inset-0 bg-[#080810] overflow-hidden"
      style={{ zIndex: 9999 }}
    >
      {/* ── Top bar ── */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="American Dream" className="h-6" />
        </div>

        {/* Slide counter + menu */}
        <div className="flex items-center gap-5">
          <span className="text-white/30 text-xs font-mono">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-[1.5px] bg-white/60 rounded-full"
              />
            ))}
          </button>
        </div>
      </div>

      {/* ── Slide area ── */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <SlideContent id={slides[current].id} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Navigation arrows ── */}
      {current > 0 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30
            w-12 h-12 rounded-full border border-white/10 bg-black/40
            backdrop-blur-md text-white flex items-center justify-center
            hover:bg-white/10 transition-all duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <path
              d="M26 8L14 20L26 32"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      {current < slides.length - 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30
            w-12 h-12 rounded-full border border-white/10 bg-black/40
            backdrop-blur-md text-white flex items-center justify-center
            hover:bg-white/10 transition-all duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <path
              d="M14 8L26 20L14 32"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* ── Bottom dot navigation ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300 border-none p-0"
            style={{
              width: current === i ? 28 : 6,
              height: 6,
              background: current === i ? "#00E5A0" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>

      {/* ── Sidebar menu ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="absolute inset-0 z-40 bg-black/60"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 bottom-0 z-50 w-72
                bg-[#0d0d18] border-l border-white/5 flex flex-col py-16 px-6 gap-2"
            >
              <p
                className="text-white/30 text-[10px] uppercase tracking-widest mb-4 px-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Deck Navigation
              </p>
              {slides.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-left
                    transition-all duration-200 group"
                    style={{
                      background:
                        current === i ? "rgba(0,229,160,0.08)" : "transparent",
                    }}
                  >
                    <Icon
                      size={20}
                      color={
                        current === i ? "#00E5A0" : "rgba(255,255,255,0.2)"
                      }
                    />

                    <span
                      className="text-sm font-semibold transition-colors"
                      style={{
                        color:
                          current === i ? "#00E5A0" : "rgba(255,255,255,0.5)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {s.nav}
                    </span>
                    {current === i && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00E5A0]" />
                    )}
                  </button>
                );
              })}

              {/* Link to full site */}
              <button
                onClick={onExit}
                className="flex items-center gap-2 text-white/30 text-xs hover:text-white/60 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ← Back to full website
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Keyboard hint */}
      <div
        className="absolute bottom-6 right-8 z-30 text-white/15 text-[10px] hidden md:block"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Use ← → keys to navigate
      </div>
    </div>
  );
}
