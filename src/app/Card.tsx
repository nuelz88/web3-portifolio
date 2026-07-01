import React from 'react';
import Image from 'next/image';

interface CardProps {
  imgSrc: string;
  title: string;
  role: string;
  desc: string;
}

export default function ProjectCard({ imgSrc, title, role, desc }: CardProps) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 relative border border-slate-700">
            <Image src={imgSrc} alt={title} fill className="object-cover" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">{title}</h4>
            <span className="inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {role}
            </span>
          </div>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
