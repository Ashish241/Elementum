import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* Coral/red triangle behind the circular image — matching Figma */
function CoralTriangle() {
  return (
    <svg
      className="absolute -top-8 -right-8 w-[260px] h-[260px] md:w-[340px] md:h-[340px] -z-10 pointer-events-none"
      viewBox="0 0 340 340"
      fill="none"
    >
      <polygon
        points="170,15 325,300 15,300"
        fill="#F08060"
        opacity="0.85"
      />
    </svg>
  );
}

/* Small pink dot grid decoration */
function PinkDotGrid() {
  return (
    <svg
      className="absolute -bottom-6 -left-6 w-[70px] h-[70px] md:w-[90px] md:h-[90px] pointer-events-none"
      viewBox="0 0 90 90"
      fill="none"
    >
      {[0, 18, 36, 54, 72].map((x) =>
        [0, 18, 36, 54, 72].map((y) => (
          <circle key={`${x}-${y}`} cx={x + 9} cy={y + 9} r="2" fill="#F5C6D6" opacity="0.5" />
        ))
      )}
    </svg>
  );
}

function WavyLine() {
  return (
    <svg
      className="absolute -bottom-12 left-[8%] w-[200px] h-[55px] md:w-[280px] md:h-[70px] pointer-events-none"
      viewBox="0 0 300 80"
      fill="none"
    >
      <path
        d="M0 40C50 10 100 70 150 40C200 10 250 70 300 40"
        stroke="#F08060"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M0 55C50 25 100 85 150 55C200 25 250 85 300 55"
        stroke="#FFD4C8"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export default function TomorrowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
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
        imageRef.current,
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
      id="studio"
      className="relative w-full py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div ref={textRef} className="opacity-0">
            <h2 className="font-playfair text-[28px] md:text-[38px] lg:text-[42px] leading-[1.2] text-[#1A1A1A]">
              Tomorrow should
              <br />
              be better than{' '}
              <span className="highlight-green">today</span>
            </h2>

            <p className="mt-6 text-[#666666] text-sm md:text-base leading-relaxed max-w-[480px]">
              We are a team of strategists, designers, communicators and researchers.
              Together, we believe that progress only happens when you refuse
              to play things safe.
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

          {/* Circular Image with triangle graphic */}
          <div ref={imageRef} className="relative opacity-0 flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
              <CoralTriangle />
              <PinkDotGrid />
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/meeting.jpg"
                  alt="Team meeting"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WavyLine />
    </section>
  );
}
