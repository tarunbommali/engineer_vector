"use client";

import React, { useEffect, useState } from "react";
import {
  Send,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Laugh,
  Code2,
  Network,
  Briefcase,
  BookMarked,
  Target,
  TrendingUp,
  GraduationCap,
  Sparkles,
  ChevronDown,
  Vote,
  Zap,
  Users,
  Clock,
  CheckCircle,
  Star,
  Heart,
  Navigation,
} from "lucide-react";

import JoinButton from "@/components/JoinButton";
import LaunchCountdown from "@/components/LaunchCountdown";
import Reveal from "@/components/Reveal";
import ShareBar, { TELEGRAM_URL, ACCENT } from "@/components/ShareBar";
import { SectionEyebrow, VectorDivider } from "@/components/VectorDivider";
import WhatsappIcon from "@/components/WhatsappIcon";

export default function EngineerVectorLanding() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [heroDrawn, setHeroDrawn] = useState<boolean>(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredRoadmap, setHoveredRoadmap] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroDrawn(true), 150);
    return () => clearTimeout(t);
  }, []);

  const faqs = [
    {
      q: "Is Engineer Vector free?",
      a: "Yes. Daily MCQs and memes are free on Telegram, and they'll stay that way. Upcoming tracks like DSA and system design will roll out the same way.",
    },
    {
      q: "How much time does it take each day?",
      a: "5–10 minutes. A short MCQ set in the morning, a meme break in between — built to fit into a commute or a coffee, not compete with your day.",
    },
    {
      q: "Who is this actually for?",
      a: "Students preparing for placements, engineers prepping for interviews, and anyone switching domains into software or AI roles. If you want structured daily input instead of random scrolling, it's for you.",
    },
    {
      q: "What topics are covered?",
      a: "JavaScript, React, Node.js, Python, SQL, DBMS, Operating Systems, Computer Networks, and System Design — with DSA, AI/tech updates, and jobs coming next.",
    },
    {
      q: "Do you post jobs and internships?",
      a: "That's on the roadmap — off-campus drives, remote roles, and referrals, curated the same way as the daily MCQs: no noise, just what's relevant.",
    },
  ];

  const currentFeatures = [
    {
      icon: Vote,
      title: "Daily Poll MCQ",
      copy: "A quick-fire poll-style MCQ posted right in the channel — answer in one tap, see how the community voted, no scrolling to a separate post.",
      tags: ["In-channel", "One tap", "Live results"],
      stats: "95% engagement rate",
    },
    {
      icon: Laugh,
      title: "Engineer Memes",
      copy: "Programming humor you'll actually relate to. Because debugging at 2 AM deserves a laugh.",
      tags: ["Relatable", "No cringe", "Daily"],
      stats: "10K+ shares",
    },
  ];

  const roadmap = [
    { icon: Code2, title: "Daily DSA Challenges", copy: "Sharpen problem-solving skills, one problem at a time.", status: "Coming soon" },
    { icon: Network, title: "System Design", copy: "Learn scalable architectures with real-world examples.", status: "In development" },
    { icon: Sparkles, title: "AI & Tech Updates", copy: "Latest AI tools, frameworks, and engineering news.", status: "Planned" },
    { icon: Briefcase, title: "Jobs & Internships", copy: "Off-campus drives, remote jobs, and referrals.", status: "Planned" },
    { icon: BookMarked, title: "Curated Learning Resources", copy: "Top repos, cheat sheets, and roadmaps.", status: "Coming soon" },
    { icon: Target, title: "Interview Preparation", copy: "Questions, tips, and mock interview content.", status: "In development" },
  ];

  const audience = [
    { icon: GraduationCap, label: "Student", color: "#4F46E5" },
    { icon: Code2, label: "Software Engineer", color: "#0EA5E9" },
    { icon: Sparkles, label: "AI Engineer", color: "#8B5CF6" },
    { icon: Network, label: "Full Stack Developer", color: "#10B981" },
    { icon: Target, label: "Preparing for Interviews", color: "#F59E0B" },
  ];

  const stats = [
    { icon: Users, value: "1,000+", label: "Engineers Learning" },
    { icon: Clock, value: "5-10 min", label: "Daily Time Investment" },
    { icon: CheckCircle, value: "100%", label: "Free Always" },
    { icon: Star, value: "4.8/5", label: "Community Rating" },
  ];

  return (
    <div className="ev-root min-h-screen bg-[#0a0a0a] text-white antialiased">
      {/* NAV - Enhanced with glassmorphism */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ background: ACCENT }} />
              <Navigation
                size={22}
                style={{ color: ACCENT }}
                className="relative transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="ev-font-display font-bold tracking-tight text-[15px] sm:text-base bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Engineer Vector
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <JoinButton size="sm" className="shadow-lg shadow-[#6C63FF]/20 hover:shadow-[#6C63FF]/40 transition-shadow">
                Join Telegram
              </JoinButton>
            </div>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="sm:hidden rounded-full p-2.5 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              style={{ background: ACCENT }}
              aria-label="Join Telegram"
            >
              <Send size={16} className="text-black" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO - Enhanced with gradient and particle effect */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-20 sm:pb-28 px-5 sm:px-8">
        <div className="absolute inset-0 ev-grid-bg pointer-events-none" />

        {/* Animated gradient orb */}
        <div className="absolute top-[-30%] left-[-20%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-30 animate-pulse"
          style={{ background: `radial-gradient(circle, ${ACCENT}33, transparent 70%)` }} />

        <svg
          className="absolute right-[-10%] top-10 w-[70%] max-w-md opacity-70 pointer-events-none hidden sm:block"
          viewBox="0 0 300 220"
          fill="none"
        >
          <path
            d="M20 200 L150 90 L280 20"
            stroke={ACCENT}
            strokeWidth="2"
            strokeLinecap="round"
            className={`ev-vector-path ${heroDrawn ? "ev-vector-drawn" : ""}`}
          />
          <path d="M280 20 L262 24 M280 20 L272 36" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className="relative max-w-3xl mx-auto text-center">
          <LaunchCountdown className="mb-8" />

          <h1 className="ev-font-display font-extrabold leading-[1.05] text-[2.8rem] sm:text-6xl md:text-7xl tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Level Up
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#A78BFA] to-[#6C63FF] bg-clip-text text-transparent animate-gradient">
              Every Day.
            </span>
          </h1>

          <p className="mt-6 text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-light">
            Daily engineering content that helps software engineers become
            interview-ready, stay consistent, and grow their careers.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <JoinButton size="lg" className="shadow-2xl shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50 transition-all duration-300 hover:scale-105">
              Join Telegram
            </JoinButton>
            <span className="text-white/50 text-sm flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Join <span className="text-white font-semibold">1,000+</span> engineers learning every day
            </span>
          </div>
        </div>
      </section>

      {/* STATS - New section */}
      <section className="px-5 sm:px-8 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="ev-card rounded-2xl p-5 text-center backdrop-blur-sm bg-white/5 border border-white/10 hover:border-[#6C63FF]/30 transition-all duration-300 hover:scale-105">
                  <stat.icon className="mx-auto mb-2" size={20} style={{ color: ACCENT }} />
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-white/40">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VectorDivider />

      {/* WHY - Enhanced with equal height uniform cards */}
      <section className="px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionEyebrow>Start with why</SectionEyebrow>
            <h2 className="ev-font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              Why <span className="bg-gradient-to-r from-[#229ED9] to-[#6C63FF] bg-clip-text text-transparent">Engineer Vector</span>?
            </h2>
          </Reveal>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 items-stretch">
            <Reveal delay={80} className="h-full">
              <div className="ev-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between border-l-4 border-l-[#229ED9]">
                <div>
                  <h3 className="ev-font-display font-semibold text-lg text-white mb-2">The Problem</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Most engineers consume random content — a reel here, a thread there, none of it adding up to anything.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="h-full">
              <div className="ev-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between border-l-4 border-l-[#229ED9]">
                <div>
                  <h3 className="ev-font-display font-semibold text-lg text-white mb-2">Our Solution</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    We believe engineers should have <span className="text-white font-semibold">one place</span> that delivers valuable content every day, without hours lost scrolling through social media.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-6">
            <div className="ev-card rounded-2xl p-6 sm:p-8 text-center border-l-4 border-l-[#229ED9] bg-white/[0.02]">
              <p className="ev-font-display font-semibold text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
                Our mission: help every engineer learn consistently, crack
                interviews, and grow their career — one day at a time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VectorDivider flip />

      {/* CURRENT FEATURES - Enhanced with hover effects */}
      <section className="px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionEyebrow>What you get today</SectionEyebrow>
            <h2 className="ev-font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Every single day, in the channel.
            </h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {currentFeatures.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 100}
                className="group h-full"
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`ev-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 ${hoveredFeature === i ? 'border-[#229ED9]/50 shadow-2xl shadow-[#229ED9]/10 scale-[1.01]' : ''}`}>
                  <div>
                    <div className="flex items-start justify-between">
                      <f.icon size={28} style={{ color: ACCENT }} strokeWidth={1.75} />
                      <span className="text-xs text-white/30 font-mono">{f.stats}</span>
                    </div>
                    <h3 className="ev-font-display font-semibold text-xl text-white mt-4">{f.title}</h3>
                    <p className="text-white/60 text-sm sm:text-base mt-2 leading-relaxed">{f.copy}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="ev-font-mono text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/50 hover:border-[#229ED9]/30 hover:text-white/80 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON — ROADMAP - Enhanced with progress indicators */}
      <section className="px-5 sm:px-8 py-20 sm:py-28 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionEyebrow>The roadmap</SectionEyebrow>
            <h2 className="ev-font-display font-bold text-3xl sm:text-4xl tracking-tight">
              We&apos;re building an automated engineering ecosystem.
            </h2>
            <p className="text-white/50 mt-3 max-w-lg text-lg">
              Shipping in this order, next.
            </p>
          </Reveal>

          <div className="mt-12 relative">
            <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[#6C63FF] via-[#6C63FF]/50 to-transparent" />
            <div className="space-y-8">
              {roadmap.map((r, i) => (
                <Reveal
                  as="div"
                  key={r.title}
                  delay={i * 70}
                  className="group"
                  onMouseEnter={() => setHoveredRoadmap(i)}
                  onMouseLeave={() => setHoveredRoadmap(null)}
                >
                  <div className="relative flex gap-5 sm:gap-6 pl-0 items-start">
                    <div
                      className="ev-font-mono relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold bg-[#0d0d0d] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ borderColor: ACCENT, color: ACCENT }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pt-1 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="ev-font-display font-semibold text-lg flex items-center gap-2 group-hover:text-white transition-colors">
                          <r.icon size={20} style={{ color: ACCENT }} />
                          {r.title}
                        </h3>
                        <span className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/30 font-mono">
                          {r.status}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm mt-1 group-hover:text-white/70 transition-colors">{r.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR - Enhanced with card grid */}
      <section className="px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionEyebrow>Built for</SectionEyebrow>
            <h2 className="ev-font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Whatever stage you&apos;re at, this fits.
            </h2>
          </Reveal>

          <Reveal delay={100} className="flex flex-wrap justify-center gap-3 mt-10">
            {audience.map((a) => (
              <div
                key={a.label}
                className="group flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 hover:border-[#6C63FF]/50 hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <a.icon size={16} style={{ color: a.color }} />
                {a.label}
              </div>
            ))}
          </Reveal>

          <Reveal delay={160} className="mt-10">
            <div className="ev-card rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
              <p className="text-white/50 text-base leading-relaxed">
                Engineer Vector is designed to help you improve a little every day —
                whether you&apos;re prepping for placements, switching into tech, or
                sharpening skills for your next role.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOIN US - Enhanced with card grid */}
      <section className="px-5 sm:px-8 py-20 sm:py-28 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionEyebrow>Join With Us!</SectionEyebrow>
            <h2 className="ev-font-display font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl mx-auto">
              If you&apos;re interested — <span className="bg-gradient-to-r from-[#6C63FF] to-[#A78BFA] bg-clip-text text-transparent">you already qualify.</span>
            </h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto text-lg">
              No stream requirements. No experience requirements. No &quot;right
              background.&quot; Just people who want to get a little better,
              every day.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: GraduationCap,
                title: "Student, any stream",
                copy: "CSE, ECE, mechanical, commerce — doesn't matter. If you're headed into a tech-adjacent career, start here.",
              },
              {
                icon: Briefcase,
                title: "Working professional",
                copy: "Already employed and want to stay sharp or switch roles? The daily reps keep you interview-ready without extra study time.",
              },
              {
                icon: Target,
                title: "Looking for a job",
                copy: "Actively applying and want structured practice instead of random videos? This is your daily set.",
              },
              {
                icon: BookOpen,
                title: "Preparing for interviews",
                copy: "First interview or fifth company switch — daily MCQs keep the fundamentals fresh either way.",
              },
            ].map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 80}
                className="group h-full"
              >
                <div className="ev-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 hover:border-[#229ED9]/45 hover:scale-[1.01]">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#229ED9]/40 transition-colors bg-white/[0.03]"
                      style={{ color: ACCENT }}
                    >
                      <a.icon size={22} />
                    </div>
                    <div>
                      <h3 className="ev-font-display font-semibold text-base sm:text-lg text-white">{a.title}</h3>
                      <p className="text-white/60 text-sm sm:text-base mt-2 leading-relaxed">{a.copy}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320} className="mt-12 flex flex-col items-center gap-5">
            <p className="ev-font-display font-semibold text-xl sm:text-2xl">
              Whoever you are — <span style={{ color: ACCENT }} className="relative">
                always join us.
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent" />
              </span>
            </p>
            <JoinButton
              size="lg"
              href="https://wa.me/919581193026?text=Hi%20Engineer%20Vector%20Team%2C%20I%20want%20to%20join!"
              bgColor="#25D366"
              icon={<WhatsappIcon size={20} className="text-black" />}
              className="shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all hover:scale-105"
            >
              Join Team Contact
            </JoinButton>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY - Enhanced with animation */}
      <section className="px-5 sm:px-8 py-24 sm:py-32 bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d] border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#6C63FF]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#6C63FF]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#6C63FF]" />
        </div>
        <div className="max-w-2xl mx-auto text-center relative">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Zap size={32} style={{ color: ACCENT }} strokeWidth={1.5} />
              <TrendingUp size={32} style={{ color: ACCENT }} strokeWidth={1.5} />
              <Heart size={32} style={{ color: ACCENT }} strokeWidth={1.5} />
            </div>
            <p className="ev-font-display font-bold text-3xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
              Small improvements every day
              <br />
              create{" "}
              <span className="bg-gradient-to-r from-[#6C63FF] via-[#A78BFA] to-[#6C63FF] bg-clip-text text-transparent animate-gradient">
                extraordinary engineers.
              </span>
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#6C63FF]" />
              <p className="text-white/40 ev-font-mono text-sm tracking-[0.2em] uppercase">
                consistency &gt; intensity
              </p>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#6C63FF]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ - Enhanced with accordion animation */}
      <section className="px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <SectionEyebrow>Questions</SectionEyebrow>
            <h2 className="ev-font-display font-bold text-3xl sm:text-4xl tracking-tight mb-10">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal
                  as="div"
                  key={f.q}
                  delay={i * 40}
                  className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-[#6C63FF]/30 shadow-lg shadow-[#6C63FF]/5' : 'hover:border-white/20'}`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between text-left px-5 py-4 gap-4 cursor-pointer group"
                  >
                    <span className={`font-medium text-sm sm:text-base transition-colors ${open ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                      {f.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 transition-all duration-300 ${open ? "rotate-180 text-[#6C63FF]" : "text-white/40 group-hover:text-white/70"}`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-white/55 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Enhanced with gradient */}
      <section className="relative px-5 sm:px-8 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 ev-grid-bg pointer-events-none opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <Reveal className="relative max-w-xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#6C63FF]/20 bg-[#6C63FF]/5">
            <span className="text-xs font-medium text-[#6C63FF] tracking-wider uppercase">Join the community</span>
          </div>
          <h2 className="ev-font-display font-extrabold text-4xl sm:text-6xl tracking-tight leading-tight">
            Join Engineer Vector
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#A78BFA] bg-clip-text text-transparent">Today.</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg max-w-md mx-auto">
            Become part of a community committed to learning, building, and
            growing together.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6">
            <JoinButton size="lg" className="shadow-2xl shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50 transition-all hover:scale-105">
              Join Telegram
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </JoinButton>
            <ShareBar className="mt-2" />
          </div>
        </Reveal>
      </section>

      {/* FOOTER - Enhanced with social links */}
      <footer className="border-t border-white/10 px-5 sm:px-8 py-10 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5">
              <Navigation size={16} style={{ color: ACCENT }} />
            </div>
            <span className="ev-font-display font-semibold text-white/70">Engineer Vector</span>
            <span className="text-white/20">•</span>
            <span className="text-white/30 text-xs">v2.0</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
            >
              <Send size={14} />
              @engineer_vector
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="text-white/10">|</span>
            <span className="text-white/20 text-xs">© 2026</span>
          </div>
        </div>
      </footer>

      {/* Add global styles */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}