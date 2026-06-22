'use client';

import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, SizeOption } from '@/types';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/Button';

interface AddToCartButtonProps {
  product: Product;
  size: SizeOption;
  quantity?: number;
  className?: string;
}

export function AddToCartButton({
  product,
  size,
  quantity = 1,
  className,
}: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem(product, size, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Button onClick={handleClick} className={className} size="lg">
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="inline-flex items-center gap-2"
          >
            <Check className="h-4 w-4" /> Added to Bag
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="inline-flex items-center gap-2"
          >
            <ShoppingBag className="h-4 w-4" /> Add to Bag
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
