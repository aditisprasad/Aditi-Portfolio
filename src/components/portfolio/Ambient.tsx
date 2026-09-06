/**
 * Ambient backdrop — fine dot matrix over a warm near-black field,
 * with slow crimson/violet bloom drifting behind it.
 */
export function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora animate-drift-slow -left-32 top-[-10%] size-[46vw] bg-coral/70" />
      <div className="aurora animate-drift-slower right-[-12%] top-[8%] size-[38vw] bg-violet/50" />
      <div className="aurora animate-drift-slower left-[18%] top-[46%] size-[42vw] bg-coral/40" />
      <div className="aurora animate-drift-slow right-[6%] bottom-[4%] size-[40vw] bg-mint/28" />
      <div className="dot-grid absolute inset-0 opacity-70" />
      <div className="soft-light absolute inset-0 opacity-90" />
    </div>
  );
}
