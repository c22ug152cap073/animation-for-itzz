import React from 'react'

// ── Second Section ────────────────────────────────────────────────────────────
const SecondSection = () => (
  <section
    className="second-section relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    aria-label="Keep Moving Section"
  >
    {/* Subtle top gradient to blend from hero */}
    <div
      className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, #060608 0%, transparent 100%)',
        zIndex: 2,
      }}
      aria-hidden="true"
    />

    {/* Background accent line grid */}
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(109,90,247,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(109,90,247,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        zIndex: 0,
      }}
    />

    {/* Glow accent */}
    <div
      className="absolute pointer-events-none"
      aria-hidden="true"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(109,90,247,0.06) 0%, transparent 65%)',
        filter: 'blur(60px)',
        zIndex: 1,
      }}
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.4em',
          color: 'rgba(109, 90, 247, 0.7)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
        }}
      >
        What comes next
      </p>

      {/* Main heading */}
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 100,
          fontSize: 'clamp(3.5rem, 10vw, 9rem)',
          letterSpacing: '0.18em',
          color: '#f0eeff',
          lineHeight: 1,
          marginBottom: '2rem',
        }}
      >
        KEEP
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #6d5af7 20%, #38bdf8 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          MOVING
        </span>
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)',
          letterSpacing: '0.06em',
          color: 'rgba(240, 238, 255, 0.35)',
          maxWidth: '540px',
          margin: '0 auto 3.5rem',
          lineHeight: 1.8,
        }}
      >
        Every scroll, every interaction — a step into something more.
        The journey does not stop here.
      </p>

      {/* CTA Button */}
      <button
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(240, 238, 255, 0.7)',
          border: '1px solid rgba(109, 90, 247, 0.3)',
          background: 'rgba(109, 90, 247, 0.06)',
          padding: '0.9em 2.4em',
          borderRadius: '2px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.target.style.background = 'rgba(109, 90, 247, 0.14)'
          e.target.style.borderColor = 'rgba(109, 90, 247, 0.7)'
          e.target.style.color = '#f0eeff'
        }}
        onMouseLeave={e => {
          e.target.style.background = 'rgba(109, 90, 247, 0.06)'
          e.target.style.borderColor = 'rgba(109, 90, 247, 0.3)'
          e.target.style.color = 'rgba(240, 238, 255, 0.7)'
        }}
      >
        Explore More
      </button>

      {/* Bottom decorative line */}
      <div
        style={{
          width: '1px',
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(109,90,247,0.4), transparent)',
          margin: '4rem auto 0',
        }}
        aria-hidden="true"
      />
    </div>
  </section>
)

export default SecondSection
