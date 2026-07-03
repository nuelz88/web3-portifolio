'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Hero from './Hero';
import Stats from './Stats';
import ProjectCard from './Card';
import { Globe, Zap, CheckCircle, Layers3, Calendar, ArrowLeft, ShieldCheck, BarChart3, MessageSquare, Award } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'proofs'>('home');

  if (activeTab === 'proofs') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-indigo-900/20 via-slate-950 to-transparent blur-3xl pointer-events-none -z-10" />
        <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
          <button onClick={() => { setActiveTab('home'); window.scrollTo(0, 0); }} className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors mb-12 group cursor-pointer">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>
          <div className="mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Verified Proof of Work</h1>
            <p className="text-slate-400 text-base md:text-lg">Visual logs, chat analytics, and operational metrics collected across major campaigns.</p>
          </div>
          <div className="space-y-12">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-xl bg-purple-500/10 text-purple-400"><ShieldCheck className="w-5 h-5" /></div><h3 className="text-xl font-bold">Alora NFT Moderation Activity</h3></div>
              <div className="w-full h-[300px] rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950 mb-4"><Image src="/images/alora-mod-proof.jpg" alt="Alora" fill className="object-contain" sizes="100vw" /></div>
              <p className="text-sm text-slate-400">Maintained strict chat flow controls and executed active anti-raid strategies during high-traffic mint intervals.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400"><BarChart3 className="w-5 h-5" /></div><h3 className="text-xl font-bold">Support Ticket Pipeline Optimizations</h3></div>
              <div className="w-full h-[300px] rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950 mb-4"><Image src="/images/mod-ticket-proof.jpg" alt="Tickets" fill className="object-contain" sizes="100vw" /></div>
              <p className="text-sm text-slate-400">Designed custom tracking dashboards to automatically tag, process, and clear technical security tickets fast.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400"><MessageSquare className="w-5 h-5" /></div><h3 className="text-xl font-semibold">Mod Chat Logs & Culture Building</h3></div>
              <div className="w-full h-[300px] rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950 mb-4"><Image src="/images/mod-chat-proof.jpg" alt="Chat Logs" fill className="object-contain" sizes="100vw" /></div>
              <p className="text-sm text-slate-400">Executed interactive gamification mechanics, daily discussion prompts, and organized trivia sessions.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400"><Award className="w-5 h-5" /></div><h3 className="text-xl font-bold">Dungeons and Degens Infrastructure</h3></div>
              <div className="w-full h-[300px] rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950 mb-4"><Image src="/images/dungeous-and-degens-mod-proof.jpg" alt="Dungeons" fill className="object-contain" sizes="100vw" /></div>
              <p className="text-sm text-slate-400">Coordinated global moderator rotas across extreme timezone spreads to ensure server stability.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-900/20 via-cyan-900/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <Hero onViewProofs={() => { setActiveTab('proofs'); window.scrollTo(0, 0); }} />
      <Stats />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Ecosystem Deployments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard imgSrc="/images/sentries-sol-logo.jpg" title="Sentries Sol" role="Community Moderator" desc="Managed active chat feeds, maintained community security parameters, and executed robust whitelist distribution funnels." projectLink="https://x.com" />
          <ProjectCard imgSrc="/images/alora-nft-logo.jpg" title="Alora NFT" role="Community Manager" desc="Directed total community alignment, built custom Discord architectures from scratch, and implemented token/whitelist gating." projectLink="https://x.com" />
          <ProjectCard imgSrc="/images/fwd-volya-logo.avif" title="FWD Volya" role="Operations Manager" desc="Oversaw broad daily community infrastructure, synchronized multi-timezone moderator schedules, and ensured smooth operations." projectLink="https://x.com" />
          <ProjectCard imgSrc="/images/kayac-multimedia-logo.png" title="Kayac Multimedia" role="Community Mod & Social Manager" desc="Engineered external growth loops via targeted social campaigns, scaled impressions across profiles, and converted web attention." projectLink="https://x.com" />
        </div>
      </section>
      <footer className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-900 text-center">
        <h3 className="text-xl font-semibold">Let's Build Together</h3>
        <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto mb-8">Ready to securely scale your Web3 community operations? Schedule a call directly.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-900/20">Book a Strategy Session</a>
          <a href="mailto:0xkhing@gmail.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all">Send a Mail</a>
        </div>
      </footer>
    </div>
  );
}
