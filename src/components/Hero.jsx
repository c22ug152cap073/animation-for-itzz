import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Stats from './Stats'

gsap.registerPlugin(ScrollTrigger)

// ─── Particle data (static so it doesn't re-generate) ──────
const PARTICLES = [
  { size: 3, top: '18%', left: '12%',  opacity: 0.35, speedY: -80,  speedX: 15,  rot: 40  },
  { size: 2, top: '72%', left: '8%',   opacity: 0.20, speedY: -55,  speedX: -10, rot: -25 },
  { size: 4, top: '25%', left: '82%',  opacity: 0.30, speedY: -100, speedX: -20, rot: 60  },
  { size: 2, top: '65%', left: '88%',  opacity: 0.22, speedY: -60,  speedX: 12,  rot: -45 },
  { size: 3, top: '45%', left: '5%',   opacity: 0.25, speedY: -70,  speedX: 8,   rot: 30  },
  { size: 2, top: '15%', left: '55%',  opacity: 0.18, speedY: -45,  speedX: -15, rot: -20 },
  { size: 4, top: '80%', left: '60%',  opacity: 0.28, speedY: -90,  speedX: 20,  rot: 50  },
  { size: 2, top: '38%', left: '93%',  opacity: 0.16, speedY: -50,  speedX: -8,  rot: -35 },
]

// ─── Letter split helper ────────────────────────────────────
const SplitText = ({ text, className = '' }) => (
  <>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className={`hero-letter ${className}`}
        data-index={i}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
)

const Hero = () => {
  const heroRef        = useRef(null)
  const objectRef      = useRef(null)
  const orbit1Ref      = useRef(null)
  const orbit2Ref      = useRef(null)
  const glowCoreRef    = useRef(null)
  const glowOuterRef   = useRef(null)
  const scrollIndRef   = useRef(null)
  const progressFillRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ── Selectors ──────────────────────────────────────────
      const letters   = gsap.utils.toArray('.hero-letter')
      const tagline   = heroRef.current.querySelector('.hero-tagline')
      const statItems = gsap.utils.toArray('.stat-item')
      const particles = gsap.utils.toArray('.particle')
      const orbit1    = orbit1Ref.current
      const orbit2    = orbit2Ref.current
      const obj       = objectRef.current
      const glowCore  = glowCoreRef.current
      const glowOuter = glowOuterRef.current
      const scrollInd = scrollIndRef.current
      const progFill  = progressFillRef.current

      // ── 1. INTRO TIMELINE (load animation) ─────────────────
      const intro = gsap.timeline({ defaults: { ease: 'expo.out' } })

      // Background glow expands
      intro.fromTo(glowCore,
        { scale: 0.4, opacity: 0 },
        { scale: 1,   opacity: 1, duration: 2.2 },
        0
      )
      intro.fromTo(glowOuter,
        { scale: 0.2, opacity: 0 },
        { scale: 1,   opacity: 1, duration: 2.8 },
        0.2
      )

      // Hero object emerges
      intro.fromTo(obj,
        { scale: 0.78, opacity: 0, filter: 'blur(30px) brightness(0.3)', rotationY: -15 },
        { scale: 1,    opacity: 1, filter: 'blur(0px) brightness(1)',    rotationY: 0,
          duration: 2.0, ease: 'power3.out' },
        0.4
      )

      // Letters stagger in — each rises + fades, slight 3D tilt
      intro.fromTo(letters,
        { y: 55, opacity: 0, rotationX: 35, skewX: -4, filter: 'blur(8px)' },
        {
          y: 0, opacity: 1, rotationX: 0, skewX: 0, filter: 'blur(0px)',
          duration: 1.1,
          stagger: { amount: 0.9, ease: 'power2.out' },
          ease: 'expo.out',
        },
        0.65
      )

      // Tagline
      intro.fromTo(tagline,
        { y: 20, opacity: 0 },
        { y: 0,  opacity: 1, duration: 1.0, ease: 'power3.out' },
        1.5
      )

      // Orbit rings appear
      intro.fromTo(orbit1,
        { scale: 0.6, opacity: 0, rotation: -60 },
        { scale: 1,   opacity: 1, rotation: 0,   duration: 1.8, ease: 'expo.out' },
        0.8
      )
      intro.fromTo(orbit2,
        { scale: 0.5, opacity: 0, rotation: 80 },
        { scale: 1,   opacity: 1, rotation: 0,  duration: 2.0, ease: 'expo.out' },
        1.0
      )

      // Stats stagger in
      intro.fromTo(statItems,
        { y: 40, opacity: 0 },
        {
          y: 0,  opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
        },
        1.4
      )

      // Scroll indicator
      intro.fromTo(scrollInd,
        { y: 12, opacity: 0 },
        { y: 0,  opacity: 1, duration: 1.0, ease: 'power3.out' },
        2.0
      )

      // Particles soft fade in
      intro.fromTo(particles,
        { opacity: 0 },
        { opacity: 'random([0.15, 0.25, 0.35])', duration: 2.0, stagger: 0.1 },
        0.5
      )

      // ── 2. SCROLLTRIGGER MASTER TIMELINE ───────────────────
      const st = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      })

      // PHASE 1 — Intro movement (0 → 30%)
      // Object moves diagonally, slight rotate + scale
      st.to(obj, {
        x: 90, y: -70, rotation: 6, scale: 1.06,
        ease: 'none',
      }, 0)

      // Orbit 1 rotates, slight scale
      st.to(orbit1, {
        rotation: 130, scale: 1.04,
        ease: 'none',
      }, 0)

      // Orbit 2 counter-rotate
      st.to(orbit2, {
        rotation: -90, scale: 1.02,
        ease: 'none',
      }, 0)

      // Background glow expands
      st.to(glowCore, {
        scale: 1.5, opacity: 0.7,
        ease: 'none',
      }, 0)

      // Particles move at different vertical speeds
      particles.forEach((p, i) => {
        const pData = PARTICLES[i] || PARTICLES[0]
        st.to(p, {
          y: pData.speedY * 0.4,
          x: pData.speedX * 0.3,
          rotation: pData.rot * 0.4,
          ease: 'none',
        }, 0)
      })

      // PHASE 2 — Headline transformation (0 → 50%)
      // All letters move up as group first
      st.to('.hero-title-wrapper', {
        y: -80, scale: 0.88,
        ease: 'none',
      }, 0)

      // Then split: odd = left, even = right + rotate
      letters.forEach((letter, i) => {
        const isEven = i % 2 === 0
        st.to(letter, {
          x: isEven ? -50 : 50,
          rotation: isEven ? -7 : 7,
          opacity: 0,
          ease: 'none',
        }, 0.15)
      })

      st.to(tagline, {
        y: -40, opacity: 0, scale: 0.9,
        ease: 'none',
      }, 0.1)

      // PHASE 3 — Stats diverge (0 → 60%)
      if (statItems[0]) st.to(statItems[0], { x: -130, y: 20,  opacity: 0, ease: 'none' }, 0.05)
      if (statItems[1]) st.to(statItems[1], { x: 0,    y: 60,  opacity: 0, scale: 0.85, ease: 'none' }, 0.05)
      if (statItems[2]) st.to(statItems[2], { x: 130,  y: 20,  opacity: 0, ease: 'none' }, 0.05)

      // PHASE 4 — Scroll indicator fades quickly
      st.to(scrollInd, {
        y: 30, opacity: 0,
        ease: 'none',
      }, 0)

      // PHASE 5 — Cinematic zoom (50% → 100%)
      st.to(obj, {
        scale: 1.85, y: -280,
        opacity: 0,
        filter: 'blur(20px) brightness(1.4)',
        ease: 'none',
      }, 0.5)

      st.to(glowCore, {
        scale: 3.2, opacity: 0,
        ease: 'none',
      }, 0.5)

      st.to(glowOuter, {
        scale: 2.5, opacity: 0.4,
        ease: 'none',
      }, 0.5)

      st.to(orbit1, {
        scale: 1.8, opacity: 0,
        ease: 'none',
      }, 0.5)

      st.to(orbit2, {
        scale: 2.2, opacity: 0,
        ease: 'none',
      }, 0.5)

      // Full remaining particle movement
      particles.forEach((p, i) => {
        const pData = PARTICLES[i] || PARTICLES[0]
        st.to(p, {
          y: pData.speedY,
          x: pData.speedX,
          rotation: pData.rot,
          opacity: 0,
          ease: 'none',
        }, 0.4)
      })

      // ── 3. SCROLL PROGRESS FILL ────────────────────────────
      gsap.to(progFill, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.4,
        },
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef} aria-label="Hero Section">
      <div className="hero-sticky">

        {/* Noise grain overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* ── Background Glow ─────────────────────────────── */}
        <div className="background-glow" aria-hidden="true">
          <div className="glow-core" ref={glowCoreRef} />
          <div className="glow-outer" ref={glowOuterRef} />
        </div>

        {/* ── Floating Particles ───────────────────────────── */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            aria-hidden="true"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: p.top,
              left: p.left,
              opacity: 0,
            }}
          />
        ))}

        {/* ── Orbit System ─────────────────────────────────── */}
        <div className="orbit-system" aria-hidden="true">
          <div className="orbit-ring orbit-ring--1" ref={orbit1Ref} />
          <div className="orbit-ring orbit-ring--2" ref={orbit2Ref} />
        </div>

        {/* ── Hero Object ──────────────────────────────────── */}
        <div className="hero-object-wrapper">
          <img
            ref={objectRef}
            src="/hero-object.png"
            alt="ITZFIZZ Crystal Object"
            className="hero-object"
            draggable={false}
          />
        </div>

        {/* ── Hero Title ───────────────────────────────────── */}
        <div className="hero-title-wrapper" aria-label="Welcome ITZFIZZ">
          <div className="hero-title-row" aria-hidden="true">
            <SplitText text="WELCOME" />
          </div>
          <div className="hero-title-row" aria-hidden="true">
            <SplitText text="ITZFIZZ" />
          </div>
          <p className="hero-tagline">
            Creative &nbsp;·&nbsp; Premium &nbsp;·&nbsp; Interactive
          </p>
        </div>

        {/* ── Statistics ───────────────────────────────────── */}
        <Stats />

        {/* ── Scroll Indicator ─────────────────────────────── */}
        <div className="scroll-indicator" ref={scrollIndRef} aria-label="Scroll to explore">
          <span className="scroll-indicator-text">Scroll to Explore</span>
          <div className="scroll-indicator-line" />
        </div>

        {/* ── Scroll Progress (desktop only) ───────────────── */}
        <div className="scroll-progress hidden md:flex" aria-hidden="true">
          <div className="scroll-progress-dot" />
          <div className="scroll-progress-track">
            <div className="scroll-progress-fill" ref={progressFillRef} />
          </div>
          <div className="scroll-progress-dot" />
        </div>

      </div>
    </section>
  )
}

export default Hero
