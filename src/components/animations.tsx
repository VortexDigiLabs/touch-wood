import { motion, useInView, useTransform, useScroll } from "motion/react";
import React, { useRef } from "react";

export function WordsPullUp({ text, className, showAsterisk = false }: { text: string, className?: string, showAsterisk?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mr-[0.25em] relative"
        >
          {word}
          {showAsterisk && i === words.length - 1 && word.endsWith("a") && (
            <span className="absolute top-[0.65em] -right-[0.3em] font-sans text-[0.31em]">*</span>
          )}
        </motion.span>
      ))}
    </div>
  );
}

export function WordsPullUpMultiStyle({ segments, className }: { segments: { text: string, className?: string }[], className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Map each word to its segment class
  const allWords: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    const words = seg.text.split(" ");
    words.forEach((w) => allWords.push({ word: w, className: seg.className }));
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((item, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`mr-[0.25em] ${item.className || ""}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
}

export const AnimatedLetter: React.FC<{ children: React.ReactNode; progress: any; index: number; total: number; }> = ({ children, progress, index, total }) => {
  const start = Math.max(0, (index / total) - 0.1);
  const end = Math.min(1, (index / total) + 0.05);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

export function TextScrollReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => (
        <AnimatedLetter key={i} index={i} total={chars.length} progress={scrollYProgress}>
          {char}
        </AnimatedLetter>
      ))}
    </p>
  );
}
