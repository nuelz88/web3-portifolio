import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import ProjectCard from './Card';
import { Globe, Zap, CheckCircle, Layers3, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-900/20 via-cyan-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <Hero />
      <Stats />

      {/* FEATURED PROJECTS COMPONENTS WITH ECOSYSTEM TARGET LINKS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Ecosystem Deployments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard imgSrc="/images/sentries-sol-logo.jpg" title="Sentries Sol" role="Community Moderator" desc="Managed active chat feeds, maintained community security parameters, and executed robust whitelist distribution funnels for incoming users." projectLink="https://x.com/Sentries_SOL" />
          <ProjectCard imgSrc="/images/alora-nft-logo.jpg" title="Alora NFT" role="Community Manager" desc="Directed total community alignment, built custom Discord architectures from scratch, and implemented token/whitelist gating to safeguard and organize active spaces." projectLink="https://x.com/ALORA_nft" />
          <ProjectCard imgSrc="/images/fwd-volya-logo.avif" title="FWD Volya" role="Operations Manager" desc="Oversaw broad daily community infrastructure, synchronized multi-timezone moderator schedules, and ensured smooth operations across shifting meta updates." projectLink="https://x.com/FWDNFT" />
          <ProjectCard imgSrc="/images/kayac-multimedia-logo.png" title="Kayac Multimedia" role="Community Mod & Social Manager" desc="Engineered external growth loops via targeted social campaigns, scaled impressions across profiles, and converted web attention into active Discord entries." projectLink="https://x.com/Kayac_io" />
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
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800"><div className="text-sm font-bold">24h</div><div className="text-[10px] text-slate-400">Active Raides/Shillers</div></div>
             <div className="p-4 rounded-xl bg-slate-950 border border-slate-800"><div className="text-sm font-bold">24h</div><div className="text-[10px] text-slate-400">Coverage</div></div>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="flex items-center gap-3 mb-4"><Zap className="w-5 h-5 text-cyan-400" /><h3 className="text-xl font-semibold">X Engagement</h3></div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Led high-velocity Twitter/X raids.</li>
            <li className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Onboarded users to fresh discord servers.</li>
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
        <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto mb-6">Ready to securely scale your Web3 community operations? Schedule a call directly.</p>
        <div>
          <a href="https://calendly.com/0xkhing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm transition-all shadow-lg shadow-purple-900/20">
            Book a Strategy Session <Calendar className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
