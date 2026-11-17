import { useEffect, useState } from 'react';
import { Check, Download, Printer, X } from 'lucide-react';
import {
  EDUCATION_ENTRY,
  EXPERIENCE_ENTRY,
  LANGUAGES_LIST,
  RESUME_PROFILE,
  SKILLS_LIST,
} from '../data/resumeData';

interface PdfModalProps {
  open: boolean;
  onClose: () => void;
  onDownloadPdf: () => void;
  downloadStatus: 'idle' | 'downloading' | 'done' | 'error';
  downloadError: string | null;
}

export function PdfModal({
  open,
  onClose,
  onDownloadPdf,
  downloadStatus,
  downloadError,
}: PdfModalProps) {
  const [viewMode, setViewMode] = useState<'sheet' | 'pdf'>('sheet');

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const software = SKILLS_LIST.filter((s) => s.category === 'software');
  const technical = SKILLS_LIST.filter((s) => s.category === 'technical');
  const core = SKILLS_LIST.filter((s) => s.category === 'core');
  const soft = SKILLS_LIST.filter((s) => s.category === 'soft');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview and Download"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 md:p-8"
    >
      <div className="w-full max-w-4xl h-[90vh] bg-[#111111] border border-white/20 flex flex-col">
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-white/15 flex flex-wrap items-center justify-between gap-3 text-[#F4F4F4]">
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#1C1C1F] border border-white/15 p-1">
              <button
                type="button"
                onClick={() => setViewMode('sheet')}
                className={`min-h-[36px] px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  viewMode === 'sheet'
                    ? 'bg-[#F4F4F4] text-[#111111]'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                Resume Sheet
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`min-h-[36px] px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#F4F4F4] text-[#111111]'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                Original PDF
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-[40px] hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 text-[#F4F4F4] text-xs font-medium hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={onDownloadPdf}
              disabled={downloadStatus === 'downloading'}
              className="min-h-[40px] inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F4F4F4] text-[#111111] text-xs font-semibold hover:bg-white transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60"
            >
              {downloadStatus === 'done' ? (
                <>
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>
                    {downloadStatus === 'downloading' ? 'Downloading…' : 'Download PDF'}
                  </span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume PDF preview"
              className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center border border-white/20 text-[#F4F4F4] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {downloadError && (
          <div
            role="alert"
            className="px-5 py-2.5 bg-red-950/90 border-b border-red-500/40 text-xs text-red-100"
          >
            {downloadError} You can still view the full Resume Sheet below or use Print to save as
            PDF.
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-[#F4F4F2] text-[#111111]">
          {viewMode === 'sheet' ? (
            <div className="max-w-3xl mx-auto p-4 sm:p-10 space-y-5 sm:space-y-8">
              <div className="border-b-2 border-[#111111] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h2 className="font-display-wide text-2xl sm:text-3xl tracking-tight text-[#111111]">
                    {RESUME_PROFILE.name}
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#52525B]">
                    {RESUME_PROFILE.role}
                  </p>
                </div>
                <div className="text-[11px] sm:text-xs space-y-0.5 text-[#27272A] sm:text-right">
                  <div className="font-mono">{RESUME_PROFILE.phone}</div>
                  <div className="font-mono">{RESUME_PROFILE.email}</div>
                  <div>{RESUME_PROFILE.location}</div>
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-mono uppercase tracking-wider text-[#52525B]">
                  About Me
                </h3>
                <div className="mt-1.5 space-y-2 text-xs sm:text-sm leading-relaxed text-[#27272A]">
                  {RESUME_PROFILE.aboutParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#111111]/15 pt-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#52525B]">
                    Education
                  </h3>
                  <div className="mt-2">
                    <div className="font-semibold text-sm">{EDUCATION_ENTRY.degree}</div>
                    <div className="text-xs text-[#3F3F46]">{EDUCATION_ENTRY.institution}</div>
                    <div className="text-xs font-mono text-[#52525B] mt-0.5">
                      {EDUCATION_ENTRY.period}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#52525B]">
                    Software &amp; Languages
                  </h3>
                  <div className="mt-2 text-sm text-[#111111]">
                    <div>
                      <span className="font-semibold">Software:</span>{' '}
                      {software.map((s) => s.label).join(', ')}
                    </div>
                    <div className="mt-1">
                      <span className="font-semibold">Languages:</span> {LANGUAGES_LIST.join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#111111]/15 pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#52525B]">
                    Project Experience
                  </h3>
                  <span className="font-mono text-xs text-[#52525B]">
                    {EXPERIENCE_ENTRY.period} · {EXPERIENCE_ENTRY.duration}
                  </span>
                </div>
                <div className="mt-2 font-semibold text-base">
                  {EXPERIENCE_ENTRY.role} — {EXPERIENCE_ENTRY.company}
                </div>
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-sm text-[#27272A]">
                  {EXPERIENCE_ENTRY.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#111111]/15 pt-6 text-xs">
                <div>
                  <h4 className="font-mono uppercase tracking-wider text-[#52525B]">
                    Technical Skills
                  </h4>
                  <ul className="mt-2 space-y-1 text-[#27272A]">
                    {technical.map((item) => (
                      <li key={item.id}>{item.label}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono uppercase tracking-wider text-[#52525B]">
                    Core Design Skills
                  </h4>
                  <ul className="mt-2 space-y-1 text-[#27272A]">
                    {core.map((item) => (
                      <li key={item.id}>{item.label}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono uppercase tracking-wider text-[#52525B]">
                    Soft Skills
                  </h4>
                  <ul className="mt-2 space-y-1 text-[#27272A]">
                    {soft.map((item) => (
                      <li key={item.id}>{item.label}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full min-h-[480px] bg-[#1A1A1D]">
              <object
                data={RESUME_PROFILE.pdfPath}
                type="application/pdf"
                className="w-full h-full min-h-[480px]"
              >
                <div className="p-8 text-center text-sm text-[#D4D4D8] space-y-4">
                  <p>
                    Inline PDF rendering is not supported by this browser viewport. Use Download PDF
                    above or switch to the formatted Resume Sheet tab.
                  </p>
                  <button
                    type="button"
                    onClick={onDownloadPdf}
                    className="min-h-[44px] px-5 py-2.5 bg-[#F4F4F4] text-[#111111] text-xs font-semibold cursor-pointer"
                  >
                    Download Original PDF
                  </button>
                </div>
              </object>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
