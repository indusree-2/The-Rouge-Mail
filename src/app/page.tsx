import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cherry overflow-hidden relative selection:bg-wax selection:text-parchment">
      {/* Dynamic Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-wax/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-wax/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Narrative Container */}
      <div className="z-10 text-center flex flex-col items-center space-y-10 px-6 animate-fade-in">
        {/* The Title */}
        <div className="space-y-2">
          <h1 className="text-7xl md:text-9xl font-serif text-parchment tracking-tighter italic drop-shadow-2xl">
            Rouge Mail
          </h1>
          <p className="text-parchment/40 font-sans tracking-[0.5em] uppercase text-[10px] md:text-xs">
            Witty words for the nocturnal heart.
          </p>
        </div>

        {/* The Interactive Visual Hook (Wax Seal Icon) */}
        <div className="py-8 relative group cursor-default">
          <div className="w-24 h-24 bg-wax rounded-full shadow-[0_0_60px_rgba(139,0,0,0.3)] flex items-center justify-center border border-wax/40 transition-all duration-1000 group-hover:shadow-[0_0_80px_rgba(139,0,0,0.6)] group-hover:scale-105">
            <span className="text-parchment text-4xl font-serif select-none">
              R
            </span>
          </div>
          {/* Pulsing Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-wax/10 rounded-full animate-ping pointer-events-none" />
        </div>

        {/* Navigation Actions */}
        <nav className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12 pt-8">
          <Link
            href="/write"
            className="group relative px-10 py-4 overflow-hidden"
          >
            <span className="relative z-10 text-parchment/70 group-hover:text-parchment transition-colors duration-500 font-sans text-xs tracking-[0.3em] uppercase">
              Compose Letter
            </span>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-wax transition-all duration-700 group-hover:w-full" />
          </Link>

          <Link
            href="/inbox"
            className="px-10 py-4 bg-parchment text-cherry hover:bg-wax hover:text-parchment transition-all duration-700 shadow-xl font-sans text-xs tracking-[0.3em] uppercase"
          >
            Check Inbox
          </Link>
        </nav>

        {/* The Rule of the App */}
        <div className="pt-16 max-w-xs">
          <p className="text-parchment/20 text-[10px] italic leading-relaxed tracking-wider">
            "We write during the day, so that we may have something to reveal
            when the sun retreats."
          </p>
        </div>
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
    </main>
  );
}
