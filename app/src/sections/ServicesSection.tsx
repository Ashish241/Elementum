import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    label: 'Office of multiple\ninterest, content',
    title: 'Collaborative & partnership',
  },
  {
    label: 'The hanger US Air force\ndigital experimental',
    title: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      const rows = rowsRef.current?.querySelectorAll('.service-row');
      if (rows) {
        gsap.fromTo(
          rows,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rowsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Wavy decoration top right */}
      <svg
        className="absolute top-8 right-[10%] w-[150px] h-[50px] md:w-[200px] md:h-[60px] pointer-events-none"
        viewBox="0 0 200 60"
        fill="none"
      >
        <path
          d="M0 30C40 5 80 55 120 30C160 5 200 55 200 30"
          stroke="#F08060"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="section-container">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-playfair text-[28px] md:text-[38px] lg:text-[42px] leading-[1.2] text-[#1A1A1A] mb-12 md:mb-16 opacity-0"
        >
          What we <span className="highlight-green">can</span>
          <br />
          offer you!
        </h2>

        {/* Service Rows */}
        <div ref={rowsRef} className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-row group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-t border-[#E0E0E0] cursor-pointer opacity-0 hover:bg-gray-50/50 transition-colors duration-300 px-2 -mx-2 rounded-lg"
            >
              {/* Label */}
              <div className="md:w-[280px] lg:w-[320px] flex-shrink-0">
                <p className="text-[#888888] text-xs md:text-sm whitespace-pre-line leading-relaxed">
                  {service.label}
                </p>
              </div>

              {/* Title */}
              <div className="flex-1 mt-3 md:mt-0 md:px-8">
                <h3 className="font-playfair text-xl md:text-2xl lg:text-[28px] text-[#1A1A1A]">
                  {service.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="md:w-[60px] flex-shrink-0 flex justify-end mt-3 md:mt-0">
                <ArrowRight
                  size={24}
                  className="text-[#1A1A1A] transition-transform duration-200 group-hover:translate-x-2"
                />
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-b border-[#E0E0E0]" />
        </div>
      </div>
    </section>
  );
}
