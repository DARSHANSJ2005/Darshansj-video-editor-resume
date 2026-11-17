import { useEffect, useState } from 'react';
import { Download, Menu, Phone, X } from 'lucide-react';
import { RESUME_PROFILE } from '../data/resumeData';

interface HeaderProps {
  onOpenPdf: () => void;
  onDownloadPdf: () => void;
  downloadStatus: 'idle' | 'downloading' | 'done' | 'error';
}

export function Header({ onOpenPdf, onDownloadPdf, downloadStatus }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#specialties', label: 'Specialties' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#E5E5E3] border-b border-[#111111]/12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 h-12 md:h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={() => setMobileMenuOpen(false)}
          className="font-display-wide text-base md:text-lg tracking-tight text-[#111111] whitespace-nowrap shrink-0"
        >
          {RESUME_PROFILE.name}
        </a>

        {/* Zone 2: Clean single-line desktop navigation links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#111111]/75 hover:text-[#111111] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary desktop action + Mobile Touch Drawer Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenPdf}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-[#111111] text-[#F4F4F4] hover:bg-[#2A2A2D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Resume PDF
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden min-h-[40px] min-w-[40px] inline-flex items-center justify-center border border-[#111111]/20 bg-[#F4F4F2] text-[#111111] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Interactive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-[#111111]/15 bg-[#E5E5E3] px-4 py-3 space-y-2"
        >
          <nav aria-label="Mobile Navigation" className="divide-y divide-[#111111]/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[40px] flex items-center justify-between text-sm font-medium text-[#111111]"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#52525B]">&rarr;</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadPdf();
              }}
              className="min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#111111] text-[#F4F4F4] text-xs font-semibold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {downloadStatus === 'downloading'
                  ? 'Downloading…'
                  : downloadStatus === 'done'
                    ? 'Downloaded'
                    : 'Download PDF'}
              </span>
            </button>
            <a
              href={`tel:${RESUME_PROFILE.phone.replace(/\s+/g, '')}`}
              className="min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-[#111111]/25 bg-[#F4F4F2] text-[#111111] text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Call Darshan</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
