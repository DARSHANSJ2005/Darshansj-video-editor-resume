import { useState } from 'react';
import { Check, Download, FileText } from 'lucide-react';
import {
  EDUCATION_ENTRY,
  EXPERIENCE_ENTRY,
  LANGUAGES_LIST,
  RESUME_PROFILE,
  SKILLS_LIST,
} from '../data/resumeData';
import { filterSkillsByCategory, type SkillFilter } from '../utils/portfolioLogic';

interface ResumeGridProps {
  onOpenPdf: () => void;
  onDownloadPdf: () => void;
  downloadStatus: 'idle' | 'downloading' | 'done' | 'error';
}

const FILTER_TABS: { id: SkillFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'software', label: 'Software' },
  { id: 'technical', label: 'Technical' },
  { id: 'core', label: 'Core Design' },
  { id: 'soft', label: 'Soft Skills' },
];

export function ResumeGrid({ onOpenPdf, onDownloadPdf, downloadStatus }: ResumeGridProps) {
  const [skillFilter, setSkillFilter] = useState<SkillFilter>('all');
  const [focusedSkillId, setFocusedSkillId] = useState<string | null>(null);
  const visibleSkills = filterSkillsByCategory(SKILLS_LIST, skillFilter);

  return (
    <div className="bg-[#000000] text-[#F4F4F4]">
      {/* Section: Experience & Education Dossier */}
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="scroll-mt-12 md:scroll-mt-16 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-20 border-t border-white/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Editorial Bio + Education */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 md:gap-10">
            <div>
              <p className="text-[11px] md:text-xs font-mono tracking-wider text-[#8E8E93]">
                Profile &amp; Education
              </p>
              <h2
                id="experience-heading"
                className="mt-2 font-display-wide text-2xl md:text-4xl tracking-tight text-[#F4F4F4]"
              >
                About &amp; Background
              </h2>
              <div className="mt-4 md:mt-6 space-y-3 text-sm md:text-[15px] leading-relaxed text-[#D4D4D8]">
                {RESUME_PROFILE.aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-white/15 pt-5 md:pt-6">
              <p className="text-[11px] md:text-xs font-mono tracking-wider text-[#8E8E93]">
                Education
              </p>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base md:text-lg font-semibold text-[#F4F4F4]">
                  {EDUCATION_ENTRY.degree}
                </h3>
                <span className="font-mono text-xs tabular-nums text-[#A1A1AA]">
                  {EDUCATION_ENTRY.period}
                </span>
              </div>
              <p className="mt-1 text-xs md:text-sm text-[#D4D4D8]">{EDUCATION_ENTRY.institution}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#8E8E93]">
                {EDUCATION_ENTRY.focus}
              </p>
            </div>
          </div>

          {/* Right Column: Freelance Project Experience */}
          <div className="lg:col-span-7 border border-white/20 bg-[#0A0A0B] p-5 sm:p-7 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 md:pb-6 border-b border-white/15">
              <div>
                <p className="text-[11px] md:text-xs font-mono text-amber-500">Project Experience</p>
                <h3 className="mt-1.5 font-display-wide text-xl md:text-3xl tracking-tight text-[#F4F4F4]">
                  {EXPERIENCE_ENTRY.role}
                </h3>
                <p className="mt-0.5 text-xs md:text-sm text-[#A1A1AA]">
                  {EXPERIENCE_ENTRY.company} · {RESUME_PROFILE.shortLocation}
                </p>
              </div>
              <div className="sm:text-right font-mono text-xs tabular-nums text-[#D4D4D8]">
                <div>{EXPERIENCE_ENTRY.period}</div>
                <div className="text-[#8E8E93] mt-0.5">{EXPERIENCE_ENTRY.duration}</div>
              </div>
            </div>

            <ul className="mt-4 md:mt-6 divide-y divide-white/10">
              {EXPERIENCE_ENTRY.highlights.map((item, idx) => (
                <li key={idx} className="py-3 md:py-4 flex items-start gap-3 md:gap-4">
                  <span className="font-mono text-[11px] md:text-xs tabular-nums text-[#7E7E82] pt-0.5 shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-[#E4E4E7]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Filterable Capabilities & NLE Software Matrix */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="scroll-mt-12 md:scroll-mt-16 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-20 border-t border-white/15"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
          <div>
            <p className="text-[11px] md:text-xs font-mono tracking-wider text-[#8E8E93]">
              Post-Production Stack
            </p>
            <h2
              id="skills-heading"
              className="mt-2 font-display-wide text-2xl md:text-4xl tracking-tight text-[#F4F4F4]"
            >
              Software &amp; Core Capabilities
            </h2>
          </div>

          {/* Touch-friendly Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter capabilities by category"
            className="flex flex-wrap items-center gap-1 bg-[#121214] border border-white/15 p-1"
          >
            {FILTER_TABS.map((tab) => {
              const active = skillFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSkillFilter(tab.id)}
                  className={`min-h-[36px] md:min-h-[40px] px-2.5 py-1.5 md:px-3.5 md:py-2 text-[11px] md:text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#F4F4F4] text-[#111111]'
                      : 'text-[#A1A1AA] hover:text-[#F4F4F4]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Interactive Grid of Capabilities */}
        <div
          data-testid="skills-grid"
          className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/15"
        >
          {visibleSkills.map((skill) => {
            const focused = focusedSkillId === skill.id;
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => setFocusedSkillId(focused ? null : skill.id)}
                className={`text-left p-4 md:p-6 border-r border-b border-white/15 transition-colors cursor-pointer ${
                  focused ? 'bg-[#161619]' : 'bg-[#050506] hover:bg-[#101012]'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-[11px] md:text-xs font-mono text-[#8E8E93]">
                  <span>{skill.categoryLabel}</span>
                  {focused && <span className="text-amber-500">Selected</span>}
                </div>
                <h3 className="mt-1.5 text-sm md:text-base font-semibold text-[#F4F4F4]">
                  {skill.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#A1A1AA]">{skill.context}</p>
              </button>
            );
          })}
        </div>

        {/* Bordered Credentials & Reliable PDF Download Panel */}
        <div className="mt-10 md:mt-16 border border-white/25 bg-[#070708] p-5 sm:p-7 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="md:col-span-5">
            <h3 className="font-display-wide text-xl md:text-3xl tracking-tight text-[#F4F4F4]">
              Ready for Multi-Format Post-Production
            </h3>
            <p className="mt-2 md:mt-3 text-xs md:text-sm leading-relaxed text-[#A1A1AA]">
              Serving production teams and independent clients across India from Bengaluru with
              clear milestone communication and frame-accurate final masters.
            </p>
          </div>

          <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8 space-y-4">
            <div>
              <div className="text-xs font-mono text-[#8E8E93]">Languages Spoken</div>
              <div className="mt-1 text-base font-medium text-[#F4F4F4]">
                {LANGUAGES_LIST.join(' · ')}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-[#8E8E93]">Primary NLE Workflow</div>
              <div className="mt-1 text-base font-medium text-[#F4F4F4]">
                DaVinci Resolve · Premiere Pro · Final Cut Pro
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3 md:items-end">
            <button
              type="button"
              onClick={onOpenPdf}
              className="w-full md:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F4F4F4] text-[#111111] text-xs font-semibold hover:bg-white transition-colors whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>Inspect Resume</span>
            </button>
            <button
              type="button"
              onClick={onDownloadPdf}
              disabled={downloadStatus === 'downloading'}
              className="w-full md:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/25 text-[#F4F4F4] text-xs font-medium hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60"
            >
              {downloadStatus === 'done' ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  <span>PDF Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {downloadStatus === 'downloading' ? 'Downloading…' : 'Download PDF'}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
