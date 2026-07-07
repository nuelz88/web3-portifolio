'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

type Asset = {
  file: string;
  title: string;
  text: string;
  type: string;
};

type Props = {
  images: Asset[];
  selected: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  selected,
  onClose,
  onNext,
  onPrev,
}: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (selected === null) return;

      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    }

    window.addEventListener('keydown', handleKey);

    return () =>
      window.removeEventListener('keydown', handleKey);
  }, [selected, onClose, onNext, onPrev]);

  if (selected === null) return null;

  const asset = images[selected];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-xl bg-slate-900/80 p-3 hover:bg-slate-800 transition"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Previous */}

        <button
          onClick={onPrev}
          className="absolute left-6 rounded-full bg-slate-900/80 p-3 hover:bg-purple-600 transition"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>

        {/* Next */}

        <button
          onClick={onNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-3 hover:bg-purple-600 transition"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

        <motion.div
          key={asset.file}
          initial={{ scale: .95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: .95, opacity: 0 }}
          transition={{ duration: .25 }}
          className="w-full max-w-6xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
            <Image
              src={`/images/${asset.file}`}
              alt={asset.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <span className="rounded-full bg-purple-600/20 px-3 py-1 text-xs font-semibold text-purple-300">
                {asset.type.toUpperCase()}
              </span>

              <h2 className="mt-4 text-3xl font-black">
                {asset.title}
              </h2>

              <p className="mt-3 max-w-3xl text-slate-400">
                {asset.text}
              </p>
            </div>

            <div className="text-right">
              <p className="text-slate-500 text-sm">
                Image
              </p>

              <p className="text-2xl font-bold text-white">
                {selected + 1} / {images.length}
              </p>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}