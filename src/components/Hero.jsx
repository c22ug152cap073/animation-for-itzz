import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stats from "./Stats";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ========================================
      // 1. INITIAL LOAD ANIMATION
      // ========================================

      const intro = gsap.timeline();

      intro
        .from(".hero-letter", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
        })
        .from(
          ".hero-object",
          {
            y: 80,
            opacity: 0,
            scale: 0.8,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".stat-item",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5"
        );

      // ========================================
      // 2. MAIN IMAGE SCROLL ANIMATION
      // ========================================

      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      imageTimeline
        .to(".hero-object", {
          x: 100,
          y: -80,
          scale: 1.1,
          rotation: 3,
          duration: 1,
          ease: "none",
        })
        .to(".hero-object", {
          x: -120,
          y: -180,
          scale: 1.25,
          rotation: -5,
          duration: 1,
          ease: "none",
        })
        .to(".hero-object", {
          x: 0,
          y: -400,
          scale: 1.5,
          rotation: 0,
          opacity: 0.2,
          duration: 1,
          ease: "none",
        });

      // ========================================
      // 3. TITLE SCROLL ANIMATION
      // ========================================

      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "60% top",
          scrub: 1,
        },
      });

      titleTimeline
        .to(".hero-title", {
          y: -100,
          scale: 0.85,
          opacity: 0.6,
          duration: 1,
          ease: "none",
        })
        .to(".hero-title", {
          y: -180,
          scale: 0.65,
          opacity: 0,
          duration: 1,
          ease: "none",
        });

      // ========================================
      // 4. STATISTICS
      // ========================================

      gsap.to(".stats", {
        y: 150,
        scale: 0.9,
        opacity: 0,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "20% top",
          end: "55% top",
          scrub: 1,
        },
      });

      // ========================================
      // 5. SCROLL PROGRESS
      // ========================================

      gsap.to(".scroll-progress", {
        scaleY: 1,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // ========================================
      // 6. SCROLL INDICATOR
      // ========================================

      gsap.to(".scroll-indicator", {
        opacity: 0,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "5% top",
          end: "20% top",
          scrub: true,
        },
      });

      // ========================================
      // 7. BACKGROUND GLOW
      // ========================================

      gsap.to(".background-glow", {
        scale: 1.5,
        opacity: 0.5,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero relative h-[200vh] bg-[#080808]"
    >
      {/* ======================================== */}
      {/* STICKY VIEWPORT */}
      {/* ======================================== */}

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ======================================== */}
        {/* BACKGROUND GLOW */}
        {/* ======================================== */}

        <div
          className="
            background-glow
            absolute
            left-1/2
            top-1/2
            h-125
            w-125
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/3
            blur-3xl
          "
        />

        {/* ======================================== */}
        {/* HERO TITLE */}
        {/* ======================================== */}

        <div
          className="
            hero-title
            absolute
            left-1/2
            top-[17%]
            z-20
            -translate-x-1/2
            text-center
          "
        >
          <h1
            className="
              flex
              whitespace-nowrap
              text-3xl
              font-medium
              tracking-[0.3em]
              text-white
              md:text-6xl
              lg:text-7xl
            "
          >
            {"WELCOME ITZFIZZ".split("").map((letter, index) => (
              <span
                key={index}
                className="hero-letter inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* ======================================== */}
        {/* MAIN HERO IMAGE */}
        {/* ======================================== */}

        <div
          className="
            hero-object
            absolute
            left-1/2
            top-1/2
            z-10
            w-[90vw]
            max-w-200
            -translate-x-1/2
            -translate-y-1/2
            md:w-[65vw]
          "
        >
          {/* Image Glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -z-10
              h-62.5
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/10
              blur-[100px]
            "
          />

          {/* Main Image */}

          <img
            src="/hero-object.png"
            alt="Hero visual"
            className="
              relative
              w-full
              object-contain
              drop-shadow-2xl
            "
          />
        </div>

        {/* ======================================== */}
        {/* STATISTICS */}
        {/* ======================================== */}

        <Stats />

        {/* ======================================== */}
        {/* SCROLL PROGRESS */}
        {/* ======================================== */}

        <div
          className="
            absolute
            right-6
            top-1/2
            z-40
            hidden
            -translate-y-1/2
            md:block
          "
        >
          <div className="h-32 w-0.5 overflow-hidden bg-white/10">
            <div
              className="
                scroll-progress
                h-full
                w-full
                origin-top
                scale-y-0
                bg-white
              "
            />
          </div>
        </div>

        {/* ======================================== */}
        {/* SCROLL INDICATOR */}
        {/* ======================================== */}

        <div
          className="
            scroll-indicator
            absolute
            bottom-5
            left-1/2
            z-30
            -translate-x-1/2
          "
        >
          <div className="flex flex-col items-center gap-3">
            <span
              className="
                text-[10px]
                tracking-[0.4em]
                text-white/40
              "
            >
              SCROLL
            </span>

            <span
              className="
                animate-bounce
                text-lg
                text-white/50
              "
            >
              ↓
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;