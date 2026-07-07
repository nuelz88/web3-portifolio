'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

interface ProofCardProps {
  asset: {
    file: string;
    title: string;
    text: string;
    type: string;
  };

  index: number;

  onClick: () => void;
}

export default function ProofCard({
  asset,
  index,
  onClick,
}: ProofCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl transition hover:-translate-y-2 hover:border-purple-500/40"
    >
    <div className="relative aspect-video overflow-hidden">
        <Image
        src={`/images/${asset.file}`}
        alt={asset.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />

    <div className="absolute top-4 left-4">
        <span
        className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
             asset.type === "proof"
            ? "bg-emerald-500/20 text-emerald-300"
            : asset.type === "logo"
            ? "bg-cyan-500/20 text-cyan-300"
            : asset.type === "growth"
            ? "bg-purple-500/20 text-purple-300"
            : asset.type === "host"
            ? "bg-orange-500/20 text-orange-300"
            : asset.type === "chat"
            ? "bg-blue-500/20 text-blue-300"
            : "bg-yellow-500/20 text-yellow-300"
        }`}
    >
      {asset.type.toUpperCase()}
    </span>
  </div>

  <div className="absolute bottom-4 right-4 rounded-xl bg-black/60 p-3 backdrop-blur">
    <Maximize2 className="h-5 w-5 text-white" />
  </div>
</div>

      <div className="space-y-3 p-6">
        <h3 className="text-xl font-bold text-white">
          {asset.title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-400">
          {asset.text}
        </p>
      </div>
    </motion.div>
  );
}