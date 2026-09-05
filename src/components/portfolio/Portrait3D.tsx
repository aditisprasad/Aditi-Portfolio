import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

// Replace with Aditi's professional portrait.
// Drop the file at /public/images/aditi-portrait.png (transparent PNG/WebP supported).
const PORTRAIT_SRC = "/images/aditi-portrait.png";

export function Portrait3D() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const rotateY = useTransform(sx, [-1, 1], [-5, 5]);
  const rotateX = useTransform(sy, [-1, 1], [4, -4]);
  const glowX = useTransform(sx, [-1, 1], [-18, 18]);
  const glowY = useTransform(sy, [-1, 1], [-14, 14]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX / w) * 2 - 1);
      my.set((e.clientY / h) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full max-w-[520px]"
      style={{ perspective: "1400px" }}
    >
      {/* soft background lighting */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="soft-light pointer-events-none absolute -inset-16 rounded-full blur-2xl"
      />

      {/* colour aura behind the portrait */}
      <motion.div
        aria-hidden="true"
        style={{ x: useTransform(sx, [-1, 1], [24, -24]), y: glowY }}
        className="animate-bloom pointer-events-none absolute inset-8 rounded-full opacity-70 blur-[70px]"
      >
        <div className="bloom-rule size-full rounded-full opacity-45" />
      </motion.div>

      {/* thin metallic rings + fine lines for depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ x: useTransform(sx, [-1, 1], [14, -14]) }}
          className="animate-float-soft absolute -left-10 top-16 size-40 rounded-full border border-foreground/10"
        />
        <motion.div
          style={{ x: useTransform(sx, [-1, 1], [-18, 18]) }}
          className="absolute -right-8 bottom-24 size-56 rounded-full border border-accent/25"
        />
        <motion.div
          style={{ x: useTransform(sx, [-1, 1], [-9, 9]), y: useTransform(sy, [-1, 1], [8, -8]) }}
          className="soft-shadow absolute right-2 top-8 size-24 rounded-full border border-violet/25 bg-card/40 backdrop-blur-sm"
        />
        <motion.div
          style={{ x: useTransform(sx, [-1, 1], [20, -20]) }}
          className="animate-float-soft absolute -left-4 bottom-10 size-14 rounded-full border border-mint/40 bg-mint/10"
        />
        <div className="absolute -bottom-6 left-1/2 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet/25 to-transparent" />
      </div>

      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* depth layer behind the portrait */}
        <div
          aria-hidden="true"
          className="absolute inset-x-8 bottom-6 top-12 bg-ivory-deep/70"
          style={{ transform: "translateZ(-60px)" }}
        />

        {failed ? (
          <div
            className="flex aspect-[3/4] w-full items-center justify-center border border-dashed border-foreground/25 bg-card"
            style={{ transform: "translateZ(40px)" }}
          >
            <span className="label-xs">Add your portrait</span>
          </div>
        ) : (
          <div
            className="float-shadow relative overflow-hidden rounded-[2rem] border border-border bg-card p-2"
            style={{ transform: "translateZ(40px)" }}
          >
            <img
              src={PORTRAIT_SRC}
              alt="Portrait of Aditi S Prasad"
              width={800}
              height={1100}
              loading="eager"
              onError={() => setFailed(true)}
              className="relative block w-full rounded-[1.6rem] object-cover"
            />
            <div
              aria-hidden="true"
              className="bloom-rule pointer-events-none absolute inset-x-2 bottom-2 h-px opacity-70"
            />
          </div>
        )}

        {/* soft floor shadow */}
        <div
          aria-hidden="true"
          className="absolute -bottom-8 left-1/2 h-10 w-2/3 -translate-x-1/2 rounded-[50%] bg-foreground/12 blur-2xl"
          style={{ transform: "translateZ(-20px) translateX(-50%)" }}
        />

        {/* floating editorial chip */}
        <motion.div
          style={{ transform: "translateZ(90px)" }}
          className="absolute -left-6 bottom-16 hidden border border-border bg-card/85 px-3 py-2 backdrop-blur-sm md:block"
        >
          <span className="label-xs">Software × AI × Data × Product</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
