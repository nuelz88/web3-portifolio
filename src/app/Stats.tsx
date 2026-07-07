'use client';

import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Zap,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

const overview = [
  {
    value: '200+',
    label: 'Projects Steered',
    color: 'text-purple-400',
  },
  {
    value: '50+',
    label: 'Discord Servers',
    color: 'text-indigo-400',
  },
  {
    value: 'Multi-Meta',
    label: 'NFTs & Memecoins',
    color: 'text-cyan-400',
  },
];

const stats = [
  {
    icon: Users,
    value: '0 → 10k',
    label: 'Organic Scale',
    color: 'text-purple-400',
    bg: 'from-purple-500/20 to-transparent',
  },
  {
    icon: TrendingUp,
    value: '10k → 35k',
    label: 'Strategic Collabs',
    color: 'text-indigo-400',
    bg: 'from-indigo-500/20 to-transparent',
  },
  {
    icon: Zap,
    value: '30%',
    label: 'Daily Active Users',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/20 to-transparent',
  },
  {
    icon: Clock,
    value: '< 5 Mins',
    label: 'Ticket Resolution',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/20 to-transparent',
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-700/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl md:grid-cols-3"
        >
          {overview.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className={`text-4xl font-black ${item.color}`}>
                {item.value}
              </h3>

              <p className="mt-3 text-sm tracking-wide text-slate-400 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 mb-12 text-center"
        >
          <h2 className="text-4xl font-black">
            Performance Metrics
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Measurable operational improvements delivered across Web3
            communities through moderation, engagement and infrastructure.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl"
              >

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10">

                  <div className="mb-8 flex items-center justify-between">

                    <div
                      className={`rounded-2xl bg-slate-800 p-4 ${stat.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <ArrowUpRight
                      className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                    />

                  </div>

                  <h3 className="mb-2 text-3xl font-black">
                    {stat.value}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {stat.label}
                  </p>

                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                  <p className="mt-5 text-xs uppercase tracking-widest text-slate-500">
                    Verified Performance
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}