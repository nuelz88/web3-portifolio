import React from 'react';
import ProjectCard from './Card';
import { 
  Users, TrendingUp, Zap, Clock, Globe, 
  MessageSquare, Send, Layers3, CheckCircle, Calendar
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-900/20 via-cyan-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* HERO SECTION */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-medium mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-purple-400" /> Available for Full-Time Roles
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          KhiNG <br />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Web3 Community Specialist</span>
        </h1>
        
        <p className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Building better communities across the Web3 ecosystem. Battle-tested across 200+ high-pressure launches, NFT mints, and memecoin cycles. I specialize in secure server architecture, viral social engagement loops, and around-the-clock operations coordination.
        </p>

        {/* VERIFIED CONNECTIONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all">
            <span className="text-sm font-bold text-purple-400 font-mono">𝕏</span>
            <span className="text-sm font-medium">@0xKhING</span>
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all">
            <Send className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">t.me/iam0xKhiNG</span>
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all">
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium">Discord Hub</span>
          </a>
        </div>
      </header>

      {/* TRACK RECORD BANNER */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950/20 to-slate-900 border border-slate-800 text-center">
          <div><div className="text-4xl font-extrabold text-purple-400">200+</div><div className="text-sm font-semibold mt-2">Projects Steered</div></div>
          <div className="border-y md:border-y-0 md:border-x border-slate-800/80 py-6 md:py-0"><div className="text-4xl font-extrabold text-indigo-400">50+</div><div className="text-sm font-semibold mt-2">Discord Servers</div></div>
          <div><div className="text-4xl font-extrabold text-cyan-400">Multi-Meta</div><div className="text-sm font-semibold mt-2">NFTs & Memecoins</div></div>
        </div>
      </section>

      {/* PROVEN RESULTS GRID */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"><Users className="w-5 h-5 text-purple-400 mb-4" /><div className="text-2xl font-bold">0 → 10k</div><div className="text-xs text-purple-300 mt-1">Organic Scale</div></div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"><TrendingUp className="w-5 h-5 text-indigo-400 mb-4" /><div className="text-2xl font-bold">10k → 35k</div><div className="text-xs text-indigo-300 mt-1">Strategic Collabs</div></div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"><Zap className="w-5 h-5 text-cyan-400 mb-4" /><div className="text-2xl font-bold">30%</div><div className="text-xs text-cyan-300 mt-1">Daily Active Users</div></div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"><Clock className="w-5 h-5 text-emerald-400 mb-4" /><div className="text-2xl font-bold">&lt; 5 Mins</div><div className="text-xs text-emerald-300 mt-1">Ticket Resolution</div></div>
        </div>
      </section>

      {/* FEATURED PROJECTS WITH VERIFIED EXTERNAL ECOSYSTEM TARGET LINKS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Ecosystem Deployments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            imgSrc="/images/sentries-sol-logo.jpg" 
            title="Sentries Sol" 
            role="Community Moderator" 
            desc="Managed active chat feeds, maintained community security parameters, and executed robust whitelist distribution funnels for incoming users." 
            projectLink="https://x.com" 
          />
          <ProjectCard 
            imgSrc="/images/alora-nft-logo.jpg" 
            title="Alora NFT" 
            role="Community Manager" 
            desc="Directed total community alignment, built custom Discord architectures from scratch, and implemented token/whitelist gating to safeguard and organize active spaces." 
            projectLink="https://x.com" 
          />
          <ProjectCard 
            imgSrc="/images/fwd-volya-logo.avif" 
            title="FWD Volya" 
            role="Operations Manager" 
            desc="Oversaw broad daily community infrastructure, synchronized multi-timezone moderator schedules, and ensured smooth operations across shifting meta updates." 
            projectLink="https://x.com" 
          />
          <ProjectCard 
            imgSrc="/images/kayac-multimedia-logo.png" 
            title="Kayac Multimedia" 
            role="Community Mod & Social Manager" 
            desc="Engineered external growth loops via targeted social campaigns, scaled impressions across profiles, and converted web attention into active Discord entries." 
            projectLink="https://x.com" 
          />
        </div>
      </section>

      {/* GLOBAL TEAM & OPERATIONS LAYOUT */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex items-center gap-3 mb-4"><Globe className="w-5 h-5 text-purple-400" /><h3 className="text-xl font-semibold">Global Team Architecture</h3></div>
          <p className="text-slate-400 text-sm mb-6">Memecoins and NFT launches operate 24/7. I recruit, deploy, and direct high-velocity workforce structures.</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800"><div className="text-xl font-bold">4</div><div className="text-[10px] text-slate-400">Core Mods</div></div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800"><div className="text-xl font-bold">10</div><div className="text-[10px] text-slate-400">Collab Mgrs</div></div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800"><div className="text-sm font-bold">24h</div><div className="text-[10px] text-slate-400">Coverage</div></div>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex items-center gap-3 mb-4"><Zap className="w-5 h-5 text-cyan-400" /><h3 className="text-xl font-semibold">X Engagement</h3></div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Led high-velocity Twitter/X raids.</li>
            <li className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Onboarded users to fresh servers.</li>
          </ul>
        </div>
      </section>

      {/* WEB3 TOOL STACK */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center">
          <Layers3 className="w-5 h-5 mx-auto text-slate-400 mb-4" />
          <h3 className="text-xl font-bold">Native Web3 Stack Mastery</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['Discord Automation', 'Zealy Sprints', 'Galxe Campaigns', 'Guild.xyz Gated Entry', 'Snapshot Voting', 'Notion Hubs'].map((tool, idx) => (
              <span key={idx} className="px-4 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-300">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER W/ CALENDLY */}
      <footer className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-900 text-center">
        <h3 className="text-xl font-semibold">Let's Build Together</h3>
        <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto mb-6">
          Ready to securely scale your Web3 community operations? Schedule a call directly.
        </p>
        <div>
