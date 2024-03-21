"use client";

import React from "react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

import { AnimatePresence, motion } from "framer-motion";

export default function Search() {
  const suggestedSearches = [
    "Graduatorie",
    "Esami",
    "Avvisi",
    "Modifica piano di studi",
    "Cambio corso",
  ];

  const [isFocused, setFocused] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div ref={ref}>
      <Input
        placeholder="Cosa vuoi cercare?"
        className="lg:min-w-64 text-[16px] h-10 sm:h-9 sm:text-sm"
        onFocus={() => setFocused(true)}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="md:hidden flex gap-2 flex-wrap z-0 relative"
            initial={{ opacity: 0, y: -10, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, y: 0, height: 80, marginTop: 10 }}
            exit={{ opacity: 0, y: -10, height: 0, marginTop: 0 }}
          >
            {suggestedSearches.map((search, k) => (
              <Badge key={k} variant={"outline"} className="font-medium h-8">
                {search}
              </Badge>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
