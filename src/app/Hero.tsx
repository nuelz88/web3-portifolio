'use client';

import React, { useRef } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onViewProofs: () => void;
}

const EXPERIENCE_TAGS = [
  'Discord',
  'Telegram',
  'X',
  'NFT',
  'Memecoins',
  'GameFi',
  'Analytics',
  'Community',
];

export default function Hero({ onViewProofs }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <header
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-slate-950" />

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(139,92,246,.15),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,.12),transparent_40%)]" />

      {/* Aurora Lights */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[140px]" />
        <div className="absolute left-20 top-40 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* =========================
            LEFT CONTENT
        ========================== */}

        <motion.section
          initial={{ opacity: 0, x: -60, y: 40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            <span>Available for Web3 Community Management</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Building
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Communities
            </span>
            <br />
            That Scale.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;m KhiNG, a Web3 Community Manager specializing in Discord
            moderation, community operations, NFT launches, growth
            campaigns, analytics, event hosting, and scalable community
            infrastructure across fast-moving blockchain ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
               href="/proofs"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(139,92,246,.45)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Explore Portfolio</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:0xkhing@gmail.com"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/60 px-8 py-4 font-semibold text-slate-300 backdrop-blur-xl transition-all hover:border-purple-500 hover:text-white"
            >
              Contact Me
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://x.com/0xKhiNG_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit X Profile"
              className="rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-3 transition-all hover:border-purple-500 hover:bg-slate-900"
            >
              𝕏
            </a>

            <a
              href="https://t.me/iam0xKhiNG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Telegram"
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 transition-all hover:border-cyan-500"
            >
              <Send className="h-5 w-5 text-cyan-400" />
            </a>

            <a
              href="https://discord.com/users/987256961726808134"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Discord"
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 transition-all hover:border-indigo-500"
            >
              <MessageSquare className="h-5 w-5 text-indigo-400" />
            </a>
          </div>

          {/* Experience Tags */}
          <div className="mt-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-slate-500">
              EXPERIENCE ACROSS
            </p>

            <div className="flex flex-wrap gap-3">
              {EXPERIENCE_TAGS.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 260 }}
                  className="rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2 text-sm text-slate-300 backdrop-blur-xl"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* =========================
            RIGHT CONTENT
        ========================== */}

        <motion.section
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl" />

            {/* Glass Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              {/* Mouse Spotlight */}
              <motion.div
                className="absolute inset-0 opacity-40"
                style={{
                  x: mouseX,
                  y: mouseY,
                  background:
                    'radial-gradient(circle at center, rgba(168,85,247,.35), transparent 65%)',
                }}
              />

              {/* Grid Overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right,#ffffff 1px,transparent 1px),
                    linear-gradient(to bottom,#ffffff 1px,transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="relative h-80 w-80 overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src="/images/my-pfp.png"
                  alt="KhiNG"
                  fill
                  priority
                  sizes="(max-width:768px) 100vw, 320px"
                  className="object-cover"
                />
              </motion.div>

              {/* Availability Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-6 right-6 rounded-2xl border border-emerald-500/20 bg-slate-900/80 p-4 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Available
                    </p>
                    <p className="text-xs text-slate-400">
                      Open for Full-Time
                    </p>
                  </div>
                </div>
              </motion.div>

          </div>
        </div>
      </motion.section>
    </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-slate-500">
          <span className="mb-2 text-xs uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </motion.div>
    </header>
  );
}