'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, ChevronDown } from 'lucide-react';

export default function ProofHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <Link
        href="/"
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
     >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
     </Link>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">

       

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">

            <Sparkles className="w-4 h-4" />

            Verified Web3 Portfolio

          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .35 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
        >
          Experience

          <br />

          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            & Proof of Work
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .55 }}
          className="mx-auto mt-8 max-w-3xl text-lg text-slate-400"
        >
          Explore verified community management, moderation,
          event hosting, analytics, testimonials and project
          contributions gathered from real Web3 ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#gallery"
            className="rounded-xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-500"
          >
            View Portfolio
          </a>

          <a
            href="https://t.me/iam0xKhiNG"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-purple-500"
          >
            Contact Me
          </a>
        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="absolute bottom-10"
      >
        <ChevronDown className="h-8 w-8 text-slate-500" />
      </motion.div>

    </section>
  );
}