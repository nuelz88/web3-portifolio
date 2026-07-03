import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Send, MessageSquare, ExternalLink } from 'lucide-react';

interface HeroProps {
  onViewProofs: () => void;
}

export default function Hero({ onViewProofs }: HeroProps) {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24 text-center">
      {/* BRAND PROFILE PICTURE */}
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 relative border-2 border-purple-500/40 shadow-xl shadow-purple-950/20 bg-slate-900">
        <Image src="/images/my-pfp.png" alt="KhiNG Profile" fill sizes="96px" className="object-cover" priority />
      </div>

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

      {/* ZERO-DELAY ACTION OVERLAY TRIGGER */}
      <div className="mt-8 mb-4">
        <button 
          onClick={onViewProofs}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600/10 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/60 font-semibold text-sm transition-all cursor-pointer"
        >
          Explore Case Study Evidence & Proofs <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all">
          <span className="text-sm font-bold text-purple-400 font-mono">𝕏</span>
          <span className="text-sm font-medium">Follow on X</span>
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all">
          <Send className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium">Chat on Telegram</span>
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all">
          <MessageSquare className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-medium">Chat on Discord</span>
        </a>
      </div>
    </header>
  );
}