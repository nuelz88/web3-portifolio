import React from 'react';
import { Users, TrendingUp, Zap, Clock } from 'lucide-react';

export default function Stats() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950/20 to-slate-900 border border-slate-800 text-center">
          <div><div className="text-4xl font-extrabold text-purple-400">200+</div><div className="text-sm font-semibold mt-2">Projects Steered</div></div>
          <div className="border-y md:border-y-0 md:border-x border-slate-800/80 py-6 md:py-0"><div className="text-4xl font-extrabold text-indigo-400">50+</div><div className="text-sm font-semibold mt-2">Discord Servers</div></div>
          <div><div className="text-4xl font-extrabold text-cyan-400">Multi-Meta</div><div className="text-sm font-semibold mt-2">NFTs & Memecoins</div></div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"><Users className="w-5 h-5 text-purple-400 mb-4" /><div className="text-2xl font-bold">0 → 10k</div><div className="text-xs text-purple-300 mt-1">Organic Scale</div></div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"><TrendingUp className="w-5 h-5 text-indigo-400 mb-4" /><div className="text-2xl font-bold">10k → 35k</div><div className="text-xs text-indigo-300 mt-1">Strategic Collabs</div></div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"><Zap className="w-5 h-5 text-cyan-400 mb-4" /><div className="text-2xl font-bold">30%</div><div className="text-xs text-cyan-300 mt-1">Daily Active Users</div></div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"><Clock className="w-5 h-5 text-emerald-400 mb-4" /><div className="text-2xl font-bold">&lt; 5 Mins</div><div className="text-xs text-emerald-300 mt-1">Ticket Resolution</div></div>
        </div>
      </section>
    </>
  );
}
