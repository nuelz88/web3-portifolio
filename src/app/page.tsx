'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Stats from './Stats';
import ProjectCard from './Card';


export default function Home() {

  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-900/20 via-cyan-900/10 to-transparent blur-3xl pointer-events-none -z-10" />
        <Hero
          onViewProofs={() => router.push('/proofs')}
        />
        <div className="py-12">
          <Stats />
        </div>
      <section className="relative max-w-7xl mx-auto px-6 py-28">


        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />
        </div>

        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-purple-300">
           Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Featured Ecosystem
            <br />
            Deployments
          </h2>

           <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-8">
            Every project below represents real-world community management,
            moderation leadership, operations, and growth campaigns delivered
            across multiple Web3 ecosystems.
           </p>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ProjectCard imgSrc="/images/sentries-sol-logo.jpg" title="Sentries Sol" role="Community Moderator" desc="Managed active chat feeds, maintained community security parameters, and executed robust whitelist distribution funnels." projectLink="https://x.com" />
          <ProjectCard imgSrc="/images/alora-nft-logo.jpg" title="Alora NFT" role="Community Manager" desc="Directed total community alignment, built custom Discord architectures from scratch, and implemented token/whitelist gating." projectLink="https://x.com" />
          <ProjectCard imgSrc="/images/fwd-volya-logo.avif" title="FWD Volya" role="Operations Manager" desc="Oversaw broad daily community infrastructure, synchronized multi-timezone moderator schedules, and ensured smooth operations." projectLink="https://x.com" />
          <ProjectCard imgSrc="/images/kayac-multimedia-logo.png" title="Kayac Multimedia" role="Community Mod & Social Manager" desc="Engineered external growth loops via targeted social campaigns, scaled impressions across profiles, and converted web attention." projectLink="https://x.com" />
        </motion.div>

      </section>
      <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
         {/* Brand */}
         <div>
           <h3 className="text-xl font-bold text-white">KhiNG</h3>
           <p className="mt-2 max-w-sm text-sm text-slate-400">
              Web3 Community Manager specializing in moderation, operations,
              analytics, NFT ecosystems, and scalable community growth.
           </p>
         </div>

         {/* Quick Links */}
         <div className="flex gap-6 text-sm text-slate-400">
           <a href="/" className="hover:text-purple-400 transition-colors">
             Home
           </a>

           <a href="/proofs" className="hover:text-purple-400 transition-colors">
             Portfolio
           </a>

           <a
             href="mailto:0xkhing@gmail.com"
             className="hover:text-purple-400 transition-colors"
           >
             Contact
           </a>
         </div>

         {/* Socials */}
         <div className="flex items-center gap-4">
           <a
             href="https://x.com/0xKhiNG_"
             target="_blank"
             rel="noopener noreferrer"
             className="text-slate-400 transition-colors hover:text-white"
           >
             𝕏
           </a>

           <a
             href="https://t.me/iam0xKhiNG"
             target="_blank"
             rel="noopener noreferrer"
             className="text-slate-400 transition-colors hover:text-cyan-400"
           >
             Telegram
           </a>

           <a
             href="https://discord.com/users/987256961726808134"
             target="_blank"
             rel="noopener noreferrer"
             className="text-slate-400 transition-colors hover:text-indigo-400"
           >
             Discord
           </a>
         </div>
       </div>

       <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
         © {new Date().getFullYear()} KhiNG. All rights reserved.
       </div>
      </footer>
    </div>
  );
}
