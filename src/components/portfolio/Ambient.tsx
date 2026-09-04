/**
 * Ambient sunset-bloom colour field.
 * Fixed, behind everything, extremely soft — colour without noise.
 */
export function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora animate-drift-slow -left-32 top-[-10%] size-[46vw] bg-peach/70" />
      <div className="aurora animate-drift-slower right-[-12%] top-[8%] size-[38vw] bg-coral/45" />
      <div className="aurora animate-drift-slower left-[18%] top-[46%] size-[42vw] bg-violet/28" />
      <div className="aurora animate-drift-slow right-[6%] bottom-[4%] size-[40vw] bg-mint/35" />
      <div className="soft-light absolute inset-0 opacity-80" />
    </div>
  );
}
