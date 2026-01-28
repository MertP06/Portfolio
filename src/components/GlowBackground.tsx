export default function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Static gradient orbs - no animations for better performance */}
      <div className="absolute -top-56 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-br from-neutral-500/10 to-neutral-700/5 blur-[140px]" />
      <div className="absolute top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-bl from-neutral-400/8 to-neutral-600/5 blur-[150px]" />
      <div className="absolute bottom-[-20%] left-[-5%] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-neutral-600/10 to-neutral-500/5 blur-[160px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-muted [background-size:60px_60px] opacity-20" />
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-radial-fade opacity-40" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.5)_100%)]" />
    </div>
  )
}
