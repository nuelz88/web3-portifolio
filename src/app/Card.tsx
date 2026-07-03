import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface CardProps {
  imgSrc: string;
  title: string;
  role: string;
  desc: string;
  projectLink: string;
}

export default function ProjectCard({ imgSrc, title, role, desc, projectLink }: CardProps) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 relative border border-slate-700">
              <Image 
              src={imgSrc} 
              alt={title} 
              fill sizes="48px"
              className="object-cover" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h4>
              <span className="inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-0.5">
                {role}
              </span>
            </div>
          </div>
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 text-slate-400 hover:text-purple-400 transition-all">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
