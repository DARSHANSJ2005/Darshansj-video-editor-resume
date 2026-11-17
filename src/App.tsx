import { useState } from 'react';
import { ArrowDownRight, Check, Download, FileText } from 'lucide-react';
import { Header } from './components/Header';
import { WorkShowcase } from './components/WorkShowcase';
import { ManifestoSection } from './components/ManifestoSection';
import { ResumeGrid } from './components/ResumeGrid';
import { ContactFooter } from './components/ContactFooter';
import { PdfModal } from './components/PdfModal';
import { MobileThumbBar } from './components/MobileThumbBar';
import { KEY_METRICS, RESUME_PROFILE } from './data/resumeData';
import { downloadResumePdf } from './utils/pdfDownload';

export default function App() {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'done' | 'error'>(
    'idle',
  );
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleDownloadPdf = async () => {
    setDownloadStatus('downloading');
    setDownloadError(null);
    const result = await downloadResumePdf(
      RESUME_PROFILE.pdfPath,
      'Darshan_SJ_Video_Editor_Resume.pdf',
    );
    if (result.ok) {
      setDownloadStatus('done');
      window.setTimeout(() => setDownloadStatus('idle'), 2500);
    } else {
      setDownloadStatus('error');
      setDownloadError(result.error ?? 'PDF download failed.');
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#E5E5E3] text-[#111111]">
      <Header
        onOpenPdf={() => setPdfOpen(true)}
        onDownloadPdf={handleDownloadPdf}
        downloadStatus={downloadStatus}
      />

      <main>
        {/* Section 1: Monochrome Editorial Hero */}
        <section
          id="about"
          aria-labelledby="hero-heading"
          className="scroll-mt-12 md:scroll-mt-16 bg-[#E5E5E3] text-[#111111] border-b border-[#111111]/12"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pt-6 pb-10 md:pt-20 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
              {/* Left Column: Editorial Title + Lead + Primary CTA */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-5 md:gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] md:text-xs font-mono text-[#52525B]">
                    <span>{RESUME_PROFILE.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{RESUME_PROFILE.shortLocation}</span>
                    <span aria-hidden="true">·</span>
                    <span>{RESUME_PROFILE.availability}</span>
                  </div>

                  <h1
                    id="hero-heading"
                    className="mt-3 md:mt-5 font-display-wide text-[28px] sm:text-4xl md:text-[clamp(3rem,6vw,5.75rem)] leading-[0.96] md:leading-[0.88] tracking-[-0.04em] md:tracking-[-0.055em] text-[#111111] [text-wrap:balance]"
                  >
                    VISUAL STORYTELLING &amp; CINEMA EDITING
                  </h1>
                </div>

                <div className="max-w-xl">
                  <p className="text-sm md:text-lg leading-relaxed text-[#27272A]">
                    {RESUME_PROFILE.aboutParagraphs[0]}
                  </p>

                  <div className="mt-5 md:mt-8 flex flex-wrap items-center gap-2.5 md:gap-3">
                    <a
                      href="#experience"
                      className="min-h-[40px] md:min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 md:px-6 md:py-3 bg-[#111111] text-[#F4F4F4] text-xs font-semibold hover:bg-[#2A2A2D] transition-colors whitespace-nowrap"
                    >
                      <span>View Experience</span>
                      <ArrowDownRight className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setPdfOpen(true)}
                      className="min-h-[40px] md:min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 md:px-5 md:py-3 border border-[#111111]/25 bg-white/50 text-[#111111] text-xs font-semibold hover:bg-white transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                      <span>Resume Sheet</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadPdf}
                      disabled={downloadStatus === 'downloading'}
                      className="min-h-[40px] md:min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 md:px-5 md:py-3 border border-[#111111]/25 bg-transparent text-[#111111] text-xs font-semibold hover:bg-white/60 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60"
                    >
                      {downloadStatus === 'done' ? (
                        <>
                          <Check className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                          <span>Downloaded</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                          <span>
                            {downloadStatus === 'downloading' ? 'Downloading…' : 'Download PDF'}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Dossier Card matching height */}
              <div className="lg:col-span-5 bg-[#111111] text-[#F4F4F4] p-5 sm:p-6 md:p-9 flex flex-col justify-between gap-4 md:gap-6">
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-3 md:pb-4 text-[11px] md:text-xs font-mono text-[#A1A1AA]">
                    <span>Curriculum Vitae</span>
                    <span>BCA 2023 – Present</span>
                  </div>

                  <h2 className="mt-4 md:mt-5 font-display-wide text-xl md:text-3xl tracking-tight text-[#F4F4F4]">
                    {RESUME_PROFILE.name}
                  </h2>
                  <p className="mt-0.5 text-xs md:text-sm text-[#A1A1AA]">
                    {RESUME_PROFILE.role} · Self Employed (2022 – Present)
                  </p>

                  <p className="mt-3 md:mt-4 text-xs md:text-sm leading-relaxed text-[#D4D4D8]">
                    {RESUME_PROFILE.aboutParagraphs[1]}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 border-y border-white/15 py-3 md:py-4 text-[11px] md:text-xs">
                  <div>
                    <div className="text-[#8E8E93]">Education</div>
                    <div className="mt-0.5 font-medium text-[#F4F4F4]">BCA – 2nd Year</div>
                    <div className="text-[#A1A1AA]">Bengaluru City University</div>
                  </div>
                  <div>
                    <div className="text-[#8E8E93]">Base &amp; Phone</div>
                    <div className="mt-0.5 font-medium text-[#F4F4F4]">Bengaluru, Karnataka</div>
                    <div className="font-mono tabular-nums text-[#A1A1AA]">
                      {RESUME_PROFILE.phone}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-[11px] md:text-xs">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#8E8E93] shrink-0">Primary Suites</span>
                    <span className="font-medium text-[#F4F4F4] text-right">
                      DaVinci Resolve · Premiere Pro · Final Cut Pro
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#8E8E93] shrink-0">Specialties</span>
                    <span className="font-medium text-[#F4F4F4] text-right">
                      Weddings · Documentaries · Social Media
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#8E8E93] shrink-0">Direct Contact</span>
                    <a
                      href={`mailto:${RESUME_PROFILE.email}`}
                      className="font-mono text-[#F4F4F4] hover:underline truncate"
                    >
                      {RESUME_PROFILE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column KPI Strip (2x2 on mobile, 4-col on desktop) */}
            <div className="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[#111111]/15">
              {KEY_METRICS.map((metric) => (
                <div
                  key={metric.value}
                  className="p-3.5 sm:p-5 md:p-6 border-r border-b border-[#111111]/15 bg-[#ECECE9]"
                >
                  <div className="font-display-wide text-lg sm:text-2xl md:text-3xl tracking-tight tabular-nums text-[#111111]">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[11px] md:text-xs leading-snug text-[#52525B]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Pure Black Editorial Manifesto (Scroll-Illuminated Words) */}
        <ManifestoSection />

        {/* Section 3: Interactive Editing Specialties & Workflow Breakdown */}
        <WorkShowcase />

        {/* Section 4: Experience, Education, Filterable Skills & Credentials */}
        <ResumeGrid
          onOpenPdf={() => setPdfOpen(true)}
          onDownloadPdf={handleDownloadPdf}
          downloadStatus={downloadStatus}
        />
      </main>

      <ContactFooter />

      <MobileThumbBar
        onOpenPdf={() => setPdfOpen(true)}
        onDownloadPdf={handleDownloadPdf}
        downloadStatus={downloadStatus}
      />

      <PdfModal
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        onDownloadPdf={handleDownloadPdf}
        downloadStatus={downloadStatus}
        downloadError={downloadError}
      />
    </div>
  );
}
