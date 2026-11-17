import { Briefcase, Download, Layers, User } from 'lucide-react';

interface MobileThumbBarProps {
  onOpenPdf: () => void;
  onDownloadPdf: () => void;
  downloadStatus: 'idle' | 'downloading' | 'done' | 'error';
}

export function MobileThumbBar({
  onOpenPdf,
  onDownloadPdf,
  downloadStatus,
}: MobileThumbBarProps) {
  return (
    <div
      data-mobile-thumb-bar
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden h-12 bg-[#111111] text-[#F4F4F4] border-t border-white/15 grid grid-cols-4"
    >
      <a
        href="#about"
        className="flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-[#D4D4D8] active:bg-white/10"
      >
        <User className="w-4 h-4" aria-hidden="true" />
        <span>About</span>
      </a>
      <a
        href="#experience"
        className="flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-[#D4D4D8] active:bg-white/10"
      >
        <Briefcase className="w-4 h-4" aria-hidden="true" />
        <span>Work</span>
      </a>
      <button
        type="button"
        onClick={onOpenPdf}
        className="flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-[#D4D4D8] active:bg-white/10 cursor-pointer"
      >
        <Layers className="w-4 h-4" aria-hidden="true" />
        <span>Resume</span>
      </button>
      <button
        type="button"
        onClick={onDownloadPdf}
        disabled={downloadStatus === 'downloading'}
        className="flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold text-amber-400 active:bg-white/10 cursor-pointer disabled:opacity-60"
      >
        <Download className="w-4 h-4" aria-hidden="true" />
        <span>{downloadStatus === 'done' ? 'Saved' : 'PDF'}</span>
      </button>
    </div>
  );
}
