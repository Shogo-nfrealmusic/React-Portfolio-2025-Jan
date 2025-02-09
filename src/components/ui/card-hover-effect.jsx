/* eslint-disable react/prop-types */
// HoverEffect.jsx
import  { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * classNames を結合する簡易ユーティリティ
 */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * ホバーエフェクト付きコンポーネント
 */
export function HoverEffect({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          // <Link> ではなく <a> に置き換え
          href={item.link || "#"}
          key={item.link || idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
}

/**
 * カード本体
 */
export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black",
        "border border-transparent dark:border-white/[0.2]",
        "group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

/**
 * カードタイトル
 */
export function CardTitle({ className, children }) {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
}

/**
 * カード説明文
 */
export function CardDescription({ className, children }) {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
}
