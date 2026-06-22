'use client';

import { motion } from 'framer-motion';
import { FragranceNotes as Notes } from '@/types';

const layers = [
  { key: 'top' as const, label: 'Top Notes', sub: 'The first impression' },
  { key: 'middle' as const, label: 'Heart Notes', sub: 'The soul of the scent' },
  { key: 'base' as const, label: 'Base Notes', sub: 'The lasting memory' },
];

export function FragranceNotes({ notes }: { notes: Notes }) {
  return (
    <div className="space-y-px">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.key}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="relative border border-gold/15 bg-charcoal/40 p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="font-serif text-lg text-gold">{layer.label}</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-bronze">
                {layer.sub}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {notes[layer.key].map((note) => (
                <span
                  key={note}
                  className="border border-gold/30 px-3 py-1.5 text-xs text-beige"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
