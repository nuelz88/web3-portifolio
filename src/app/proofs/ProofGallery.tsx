'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

import { proofAssets } from './proofdata';
import ProofCard from './ProofCard';
import Lightbox from './Lightbox';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'proof', label: 'Proofs' },
  { id: 'logo', label: 'Projects' },
  { id: 'host', label: 'Hostings' },
  { id: 'growth', label: 'Analytics' },
  { id: 'chat', label: 'Moderation' },
  { id: 'praise', label: 'Testimonials' },
];

export default function ProofGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredAssets = proofAssets.filter((asset) => {
    const matchesCategory =
      activeFilter === 'all' || asset.type === activeFilter;

    const matchesSearch =
      asset.title.toLowerCase().includes(search.toLowerCase()) ||
      asset.text.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="gallery"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-center text-4xl font-black">
          Portfolio Gallery
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Every screenshot below represents real moderation work,
          project management, analytics, event hosting and verified
          community contributions.
        </p>
      </motion.div>

      {/* Search */}
      <div className="relative mx-auto mb-8 max-w-2xl">
        <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

        <input
          type="text"
          placeholder="Search projects, proofs, testimonials..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelected(null);
          }}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 py-4 pl-14 pr-5 text-white outline-none transition focus:border-purple-500"
        />
      </div>

      {/* Filters */}
      <div className="mb-14 overflow-x-auto pb-2">
        <div className="flex w-max gap-3 mx-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveFilter(category.id);
              setSelected(null);
            }}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                : 'border border-slate-700 bg-slate-900/60 text-slate-400 hover:border-purple-500 hover:text-white'
            }`}
          >
            <Filter className="h-4 w-4" />
            {category.label}
          </button>
        ))}
        </div>
      </div>

      {/* Asset Counter */}
      <p className="mb-10 text-center text-sm text-slate-500">
        Showing{' '}
        <span className="font-semibold text-white">
          {filteredAssets.length}
        </span>{' '}
        of{' '}
        <span className="font-semibold text-white">
          {proofAssets.length}
        </span>{' '}
        portfolio assets
      </p>

      {/* Gallery */}
      <div className="grid gap-colos sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredAssets.map((asset, filteredIndex) => (
          <ProofCard
            key={asset.file}
            asset={asset}
            index={filteredIndex}
            onClick={() => setSelected(filteredIndex)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={filteredAssets}
        selected={selected}
        onClose={() => setSelected(null)}
        onNext={() =>
          setSelected((prev) =>
            prev === null
              ? 0
              : (prev + 1) % filteredAssets.length
          )
        }
        onPrev={() =>
          setSelected((prev) =>
            prev === null
              ? 0
              : (prev - 1 + filteredAssets.length) %
                filteredAssets.length
          )
        }
      />
    </section>
  );
}