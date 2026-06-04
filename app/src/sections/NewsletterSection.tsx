import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PurpleBlobRight() {
  return (
    <svg
      className="absolute top-[10%] right-[3%] w-[120px] h-[140px] md:w-[160px] md:h-[180px] animate-float-slow pointer-events-none"
      viewBox="0 0 160 180"
      fill="none"
    >
      <path
        d="M130 30C155 55 165 100 145 135C125 170 85 185 50 170C15 155 -5 115 5 80C15 45 45 10 80 5C115 0 105 5 130 30Z"
        fill="#8B5CF6"
      />
    </svg>
  );
}

function WavyDecoration() {
  return (
    <svg
      className="absolute top-[20%] left-[5%] w-[100px] h-[50px] md:w-[140px] md:h-[60px] pointer-events-none"
      viewBox="0 0 140 60"
      fill="none"
    >
      <path
        d="M0 30C30 10 60 50 90 30C120 10 140 50 140 30"
        stroke="#F08060"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
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
      id="contact"
      className="relative w-full py-20 md:py-28 bg-mint-light overflow-hidden"
    >
      <PurpleBlobRight />
      <WavyDecoration />

      <div className="section-container relative z-10">
        <div
          ref={contentRef}
          className="text-center max-w-[600px] mx-auto opacity-0"
        >
          <h2 className="font-playfair text-[28px] md:text-[38px] lg:text-[48px] leading-[1.2] text-[#1A1A1A]">
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p className="mt-6 text-[#666666] text-sm md:text-base">
            To make your stay special and even more memorable
          </p>

          <button className="mt-8 px-8 py-3.5 bg-[#1A1A1A] text-white text-sm font-medium rounded-full hover:bg-[#333333] hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
