'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Users,
  Zap,
  MessageSquare,
  Terminal,
} from 'lucide-react';

const stats = [
  {
    icon: Shield,
    value: "8+",
    label: "Verified Proofs",
    color: "text-emerald-400",
  },
  {
    icon: Award,
    value: "6+",
    label: "Client Testimonials",
    color: "text-yellow-400",
  },
  {
    icon: Users,
    value: "200+",
    label: "Communities Supported",
    color: "text-cyan-400",
  },
  {
    icon: Zap,
    value: "35+",
    label: "Portfolio Assets",
    color: "text-purple-400",
  },
  {
    icon: MessageSquare,
    value: "50+",
    label: "Events Hosted",
    color: "text-pink-400",
  },
];

export default function ProofStats() {
  return (
    <section className="relative py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-14 text-center text-4xl font-black">
            Portfolio Highlights
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-7 backdrop-blur-xl"
              >
                <div className="mb-8 flex items-center justify-between">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950 ${item.color}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <Terminal className="h-5 w-5 text-slate-600" />

                </div>

                <h3 className="text-4xl font-black">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {item.label}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}