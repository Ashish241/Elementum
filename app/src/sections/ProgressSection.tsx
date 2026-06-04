import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* Coral semicircle behind circular image */
function CoralSemiCircle() {
  return (
    <svg
      className="absolute -top-6 -left-6 w-[200px] h-[200px] md:w-[260px] md:h-[260px] -z-10 pointer-events-none"
      viewBox="0 0 260 260"
      fill="none"
    >
      <path
        d="M130 10 A120 120 0 0 1 130 250"
        fill="#F08060"
        opacity="0.85"
      />
    </svg>
  );
}

/* Small coral triangle decoration */
function SmallTriangle() {
  return (
    <svg
      className="absolute -bottom-4 right-[10%] w-[60px] h-[60px] md:w-[80px] md:h-[80px] pointer-events-none"
      viewBox="0 0 80 80"
      fill="none"
    >
      <polygon
        points="40,5 75,70 5,70"
        fill="#F08060"
        opacity="0.6"
      />
    </svg>
  );
}

/* Wavy coral line between sections */
function WavyCoralLine() {
  return (
    <svg
      className="absolute top-[12%] right-[5%] w-[200px] h-[50px] md:w-[300px] md:h-[65px] pointer-events-none"
      viewBox="0 0 300 65"
      fill="none"
    >
      <path
        d="M0 32C50 5 100 60 150 32C200 5 250 60 300 32"
        stroke="#F08060"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export default function ProgressSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 bg-white overflow-hidden"
    >
      <WavyCoralLine />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Circular Image with semicircle graphic */}
          <div ref={imageRef} className="relative opacity-0 order-1 lg:order-1 flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
              <CoralSemiCircle />
              <SmallTriangle />
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/working.jpg"
                  alt="Team working together"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="opacity-0 order-2 lg:order-2">
            <h2 className="font-playfair text-[28px] md:text-[38px] lg:text-[42px] leading-[1.2] text-[#1A1A1A]">
              See how we can
              <br />
              help you{' '}
              <span className="highlight-yellow">progress</span>
            </h2>

            <p className="mt-6 text-[#666666] text-sm md:text-base leading-relaxed max-w-[480px]">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design,
              digital, comms and social research.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 mt-8 text-[#1A1A1A] font-medium text-sm group"
            >
              Read more
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
              <span className="block w-12 h-[1px] bg-[#1A1A1A] ml-1 transition-all duration-300 group-hover:w-16" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
