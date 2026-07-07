'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

interface CardProps {
  imgSrc: string;
  title: string;
  role: string;
  desc: string;
  projectLink: string;
}

export default function ProjectCard({
  imgSrc,
  title,
  role,
  desc,
  projectLink,
}: CardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-cyan-500/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Top Border Glow */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 p-7">

        {/* Header */}
        <div className="mb-6 flex items-start justify-between">

          <div className="flex gap-4">

            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
              <Image
                src={imgSrc}
                alt={title}
                fill
                sizes="64px"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div>

              <h3 className="text-xl font-black text-white transition group-hover:text-purple-400">
                {title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {role}
              </p>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Completed
              </div>

            </div>

          </div>

          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-slate-400 transition hover:border-purple-500 hover:text-white"
          >
            <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
          </a>

        </div>

        {/* Description */}
        <p className="leading-7 text-slate-400">
          {desc}
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">

          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
            Discord
          </span>

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
            Community
          </span>

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
            Operations
          </span>

        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">

          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Verified Deployment
          </span>

          <ExternalLink className="h-4 w-4 text-slate-600 transition group-hover:text-purple-400" />

        </div>

      </div>
    </motion.div>
  );
}