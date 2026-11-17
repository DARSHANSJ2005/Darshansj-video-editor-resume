import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { EDITING_SPECIALTIES } from '../data/resumeData';

export function WorkShowcase() {
  const [activeId, setActiveId] = useState<string>(EDITING_SPECIALTIES[0].id);

  return (
    <section
      id="specialties"
      aria-labelledby="specialties-heading"
      className="scroll-mt-12 md:scroll-mt-16 bg-[#E5E5E3] text-[#111111] border-b border-[#111111]/12"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-6 md:pb-8 border-b border-[#111111]/15">
          <div>
            <p className="text-[11px] md:text-xs font-mono tracking-wider text-[#52525B]">
              Editing Disciplines
            </p>
            <h2
              id="specialties-heading"
              className="mt-1.5 font-display-wide text-xl md:text-4xl tracking-tight text-[#111111]"
            >
              Specializations &amp; Post Workflow
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#3F3F46] max-w-md">
            Select any format below to inspect the end-to-end timeline, grading, and delivery
            workflow.
          </p>
        </div>

        {/* Interactive Accordion / Expandable Format Rows */}
        <div className="divide-y divide-[#111111]/15 border-b border-[#111111]/15">
          {EDITING_SPECIALTIES.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div key={item.id} className="bg-transparent">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`specialty-panel-${item.id}`}
                  onClick={() => setActiveId(isOpen ? '' : item.id)}
                  className="w-full min-h-[52px] py-3.5 md:py-5 flex items-center justify-between gap-3 text-left cursor-pointer group"
                >
                  <div className="flex items-baseline gap-3 md:gap-8 min-w-0">
                    <span className="font-mono text-[11px] md:text-xs tabular-nums text-[#52525B] shrink-0">
                      {item.index}.
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display-wide text-base md:text-2xl tracking-tight text-[#111111] group-hover:underline underline-offset-4">
                        {item.title}
                      </h3>
                      <div className="mt-0.5 text-[11px] md:text-xs text-[#52525B]">
                        {item.formats} · {item.tools}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`w-9 h-9 md:w-11 md:h-11 shrink-0 flex items-center justify-center border border-[#111111]/20 transition-colors ${
                      isOpen ? 'bg-[#111111] text-[#F4F4F4]' : 'bg-white/60 text-[#111111]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`specialty-panel-${item.id}`}
                    className="pb-7 pl-0 md:pl-12 grid grid-cols-1 lg:grid-cols-12 gap-6"
                  >
                    <div className="lg:col-span-5">
                      <p className="text-sm leading-relaxed text-[#27272A]">{item.summary}</p>
                    </div>
                    <div className="lg:col-span-7 bg-[#F4F4F2] border border-[#111111]/12 p-5">
                      <div className="text-xs font-mono text-[#52525B]">
                        Post-Production Steps
                      </div>
                      <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.workflowSteps.map((step, stepIdx) => (
                          <li key={stepIdx} className="text-xs leading-relaxed text-[#111111] flex gap-2">
                            <span className="font-mono tabular-nums text-[#52525B] shrink-0">
                              {stepIdx + 1}.
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
