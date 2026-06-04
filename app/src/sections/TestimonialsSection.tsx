import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* Avatars placed far from center text so they never overlap the quote card */
const avatars = [
  { src: '/images/avatar-1.jpg', size: 56, top: '5%',   left: '3%' },
  { src: '/images/avatar-2.jpg', size: 68, top: '75%',  left: '2%' },
  { src: '/images/avatar-3.jpg', size: 52, top: '5%',   right: '3%' },
  { src: '/images/avatar-4.jpg', size: 62, top: '78%',  right: '2%' },
  { src: '/images/avatar-5.jpg', size: 48, top: '45%',  right: '1%' },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);

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

      const avatarEls = avatarsRef.current?.querySelectorAll('.avatar');
      if (avatarEls) {
        gsap.fromTo(
          avatarEls,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );

        avatarEls.forEach((avatar, i) => {
          gsap.to(avatar, {
            y: '+=6',
            duration: 2.5 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.3,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Decorative wavy line */}
      <svg
        className="absolute top-[8%] left-[15%] w-[120px] h-[40px] md:w-[160px] md:h-[50px] pointer-events-none"
        viewBox="0 0 160 50"
        fill="none"
      >
        <path
          d="M0 25C30 5 60 45 90 25C120 5 150 45 160 25"
          stroke="#F08060"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </svg>

      <div className="section-container relative">
        {/* Heading */}
        <h2 className="font-playfair text-[28px] md:text-[38px] lg:text-[42px] leading-[1.2] text-[#1A1A1A] text-center mb-12 md:mb-16">
          What our <span className="highlight-green">customer</span>
          <br />
          says About Us
        </h2>

        {/* Quote Card */}
        <div ref={contentRef} className="relative max-w-[600px] mx-auto opacity-0 z-10">
          {/* Large opening quote mark */}
          <div className="absolute -top-8 left-0 md:left-4 text-[80px] md:text-[120px] font-playfair text-[#E0E0E0] leading-none select-none">
            &ldquo;
          </div>

          <div className="relative z-10 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#F0F0F0]">
            <p className="text-[#444444] text-sm md:text-base leading-[1.8] text-center">
              Elementum delivered the site within the timeline as requested.
              In the end, the client found a 50% increase in traffic within days
              since its launch. They also had an impressive ability to use
              technologies that the company hadn't used, which have also proved
              to be easy to use and reliable.
            </p>

            {/* Closing quote */}
            <div className="text-right mt-4 text-[40px] md:text-[60px] font-playfair text-[#E0E0E0] leading-none select-none">
              &rdquo;
            </div>
          </div>
        </div>

        {/* Floating Avatars — pushed to edges so they don't overlap text */}
        <div ref={avatarsRef} className="absolute inset-0 pointer-events-none hidden md:block">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="avatar absolute rounded-full overflow-hidden shadow-md border-2 border-white opacity-0 pointer-events-auto cursor-pointer"
              style={{
                width: avatar.size,
                height: avatar.size,
                top: avatar.top,
                left: avatar.left,
                right: avatar.right,
              }}
            >
              <img
                src={avatar.src}
                alt={`Customer ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
