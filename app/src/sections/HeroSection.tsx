import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const teamPhotos = [
  { src: '/images/team-1.jpg', size: 90,  top: '52%', left: '7%',  delay: 0 },
  { src: '/images/team-2.jpg', size: 72,  top: '25%', left: '2%',  delay: 0.05 },
  { src: '/images/team-3.jpg', size: 110, top: '48%', left: '22%', delay: 0.1 },
  { src: '/images/team-4.jpg', size: 78,  top: '28%', left: '40%', delay: 0.15 },
  { src: '/images/team-5.jpg', size: 92,  top: '22%', left: '56%', delay: 0.2 },
  { src: '/images/team-6.jpg', size: 74,  top: '45%', left: '70%', delay: 0.25 },
  { src: '/images/team-7.jpg', size: 98,  top: '58%', left: '48%', delay: 0.3 },
  { src: '/images/team-8.jpg', size: 108, top: '55%', left: '14%', delay: 0.35 },
];

function PurpleBlob() {
  return (
    <svg
      className="absolute top-[18%] right-[4%] w-[160px] h-[180px] md:w-[200px] md:h-[220px] animate-float-slow pointer-events-none"
      viewBox="0 0 200 220"
      fill="none"
    >
      <path
        d="M160 40C190 70 200 120 180 160C160 200 110 220 70 200C30 180 0 140 10 100C20 60 50 20 90 10C130 0 130 10 160 40Z"
        fill="#8B5CF6"
      />
    </svg>
  );
}

function CurvedLines() {
  return (
    <svg
      className="absolute top-[30%] left-[0%] w-[90px] h-[140px] md:w-[120px] md:h-[180px] pointer-events-none"
      viewBox="0 0 140 200"
      fill="none"
    >
      <path
        d="M10 0C10 40 50 60 50 100C50 140 10 160 10 200"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M30 20C30 50 70 70 70 100C70 130 30 150 30 180"
        stroke="#F08060"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

/* Small pink dots decoration */
function PinkDots() {
  return (
    <svg
      className="absolute top-[22%] left-[12%] w-[60px] h-[60px] md:w-[80px] md:h-[80px] pointer-events-none"
      viewBox="0 0 80 80"
      fill="none"
    >
      {[0, 20, 40, 60].map((x) =>
        [0, 20, 40, 60].map((y) => (
          <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="2.5" fill="#F5C6D6" opacity="0.6" />
        ))
      )}
    </svg>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.7 }
      );

      const photos = photosRef.current?.querySelectorAll('.team-photo');
      if (photos) {
        gsap.fromTo(
          photos,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'back.out(1.7)',
            delay: 0.5,
          }
        );

        photos.forEach((photo, i) => {
          gsap.to(photo, {
            y: '+=8',
            duration: 2 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-white pt-[72px]"
    >
      <PurpleBlob />
      <CurvedLines />
      <PinkDots />

      <div className="section-container relative z-10 pt-12 md:pt-20">
        <h1
          ref={headingRef}
          className="font-playfair text-[32px] md:text-[48px] lg:text-[56px] leading-[1.15] text-center text-[#1A1A1A] max-w-[900px] mx-auto opacity-0"
        >
          The{' '}
          <span className="highlight-yellow">thinkers</span>{' '}
          and{' '}
          <span className="highlight-pink">doers</span>{' '}
          were changing the{' '}
          <span className="highlight-green">status</span>{' '}
          Quo with
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 text-center text-[#666666] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed opacity-0 px-4"
        >
          We are a team of strategists, designers, communicators, and researchers.
          Together, we believe that progress only happens when you refuse to play
          things safe.
        </p>

        {/* Team Photos */}
        <div
          ref={photosRef}
          className="relative mt-12 md:mt-16 h-[300px] md:h-[400px] lg:h-[350px]"
        >
          {teamPhotos.map((photo, index) => (
            <div
              key={index}
              className="team-photo absolute rounded-full overflow-hidden shadow-lg border-[3px] border-white opacity-0"
              style={{
                width: photo.size,
                height: photo.size,
                top: photo.top,
                left: photo.left,
              }}
            >
              <img
                src={photo.src}
                alt={`Team member ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
