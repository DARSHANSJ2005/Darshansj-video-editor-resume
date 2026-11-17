import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { RESUME_PROFILE } from '../data/resumeData';
import { computeWordIllumination } from '../utils/portfolioLogic';

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const words = useMemo(() => RESUME_PROFILE.manifestoText.split(' '), []);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setProgress(1);
      return;
    }

    let rafId = 0;
    const updateScroll = () => {
      rafId = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      // Progress from 0 when section top reaches 82% of viewport to 1 when center passes 35%
      const start = vh * 0.82;
      const end = vh * 0.22;
      const raw = (start - rect.top) / Math.max(start - end, 1);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      aria-label="Editorial Statement"
      className="bg-[#000000] text-[#F4F4F4]"
    >
      {/* Editorial Bar */}
      <div className="border-b border-white/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-4 md:py-6 flex flex-wrap items-center justify-between gap-3 font-display-condensed text-[11px] md:text-sm tracking-[0.06em] uppercase">
          <div className="flex items-center gap-2">
            <span>Experience</span>
            <span className="text-[#7E7E82]">Since 2022</span>
          </div>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 text-[#F4F4F4] hover:text-amber-500 transition-colors whitespace-nowrap"
          >
            <span>Explore Dossier</span>
            <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border border-white/30">
              <ArrowDown className="w-3 h-3 md:w-3.5 md:h-3.5" aria-hidden="true" />
            </span>
          </a>
          <span className="hidden sm:inline text-[#7E7E82]">Bengaluru · India</span>
        </div>
      </div>

      {/* Scroll-Illuminated Statement */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-36">
        <div className="max-w-[920px] mx-auto">
          <p
            data-testid="manifesto-statement"
            className="text-[22px] sm:text-3xl md:text-[clamp(2.25rem,3.6vw,3.15rem)] font-medium leading-[1.35] md:leading-[1.3] tracking-[-0.025em]"
          >
            {words.map((word, idx) => {
              const alpha = computeWordIllumination(progress, idx, words.length, 3);
              const channel = Math.round(111 + (244 - 111) * alpha);
              return (
                <span
                  key={`${word}-${idx}`}
                  style={{ color: `rgb(${channel}, ${channel}, ${channel})` }}
                  className="transition-colors duration-150"
                >
                  {word}
                  {idx < words.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </p>

          <p className="mt-6 md:mt-16 text-sm md:text-xl leading-relaxed text-[#A1A1AA] max-w-2xl">
            {RESUME_PROFILE.manifestoSubline}
          </p>
        </div>
      </div>
    </section>
  );
}
