import { useState, type FormEvent } from 'react';
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { RESUME_PROFILE } from '../data/resumeData';
import { validateInquiryForm, type InquiryFormInput } from '../utils/portfolioLogic';

export function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<InquiryFormInput>({
    name: '',
    email: '',
    projectType: 'Wedding Film',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormInput, string>>>({});
  const [submittedNote, setSubmittedNote] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formState);
    if (!result.valid) {
      setErrors(result.errors);
      setSubmittedNote(null);
      return;
    }
    setErrors({});
    setSubmittedNote(
      `Project brief drafted for ${formState.name.trim()} (${formState.projectType}). Reach Darshan directly at ${RESUME_PROFILE.email} or ${RESUME_PROFILE.phone}.`,
    );
  };

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-12 md:scroll-mt-16 bg-[#E5E5E3] text-[#111111] border-t border-[#111111]/15"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pt-10 pb-20 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Direct Contact Column */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div>
              <p className="text-[11px] md:text-xs font-mono tracking-wider text-[#52525B]">
                Direct Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-2 font-display-wide text-2xl md:text-4xl tracking-tight text-[#111111]"
              >
                Commission an Edit
              </h2>
              <p className="mt-2.5 text-sm md:text-[15px] leading-relaxed text-[#3F3F46]">
                Available for wedding films, pre-wedding stories, documentaries, YouTube features,
                and short-form social campaigns across India.
              </p>
            </div>

            <div className="divide-y divide-[#111111]/12 border-y border-[#111111]/12">
              <div className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#52525B] shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs text-[#52525B]">Email</div>
                    <a
                      href={`mailto:${RESUME_PROFILE.email}`}
                      className="text-sm font-medium text-[#111111] hover:underline"
                    >
                      {RESUME_PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[#111111]/20 bg-white/60 hover:bg-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="py-4 flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#52525B] shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs text-[#52525B]">Phone</div>
                  <a
                    href={`tel:${RESUME_PROFILE.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-medium font-mono tabular-nums text-[#111111] hover:underline"
                  >
                    {RESUME_PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="py-4 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#52525B] shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs text-[#52525B]">Location</div>
                  <div className="text-sm font-medium text-[#111111]">
                    {RESUME_PROFILE.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Validated Project Brief Form */}
          <div className="lg:col-span-7 bg-[#F4F4F2] border border-[#111111]/15 p-7 md:p-10">
            <h3 className="text-lg font-semibold text-[#111111]">Send a Project Brief</h3>
            <p className="mt-1 text-xs text-[#52525B]">
              Specify your deliverables, raw camera format, and target delivery window.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="inq-name" className="block text-xs font-medium text-[#111111]">
                    Your Name
                  </label>
                  <input
                    id="inq-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Rohan Kulkarni"
                    className="mt-1.5 w-full bg-white border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1 text-xs text-red-700">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="inq-email" className="block text-xs font-medium text-[#111111]">
                    Email Address
                  </label>
                  <input
                    id="inq-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@studio.com"
                    className="mt-1.5 w-full bg-white border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1 text-xs text-red-700">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="inq-format" className="block text-xs font-medium text-[#111111]">
                  Project Format
                </label>
                <select
                  id="inq-format"
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="mt-1.5 w-full bg-white border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-[#111111]"
                >
                  <option value="Wedding Film">Wedding Film &amp; Highlights</option>
                  <option value="Documentary">Documentary Edit</option>
                  <option value="YouTube / Long-Form">YouTube / Long-Form</option>
                  <option value="Social Reels / Shorts">Social Reels &amp; Short-Form</option>
                </select>
                {errors.projectType && (
                  <p role="alert" className="mt-1 text-xs text-red-700">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="inq-message" className="block text-xs font-medium text-[#111111]">
                  Project Notes &amp; Timeline
                </label>
                <textarea
                  id="inq-message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share footage volume, edit style, and deadline..."
                  className="mt-1.5 w-full bg-white border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:outline-none focus:border-[#111111]"
                />
                {errors.message && (
                  <p role="alert" className="mt-1 text-xs text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#111111] text-[#F4F4F4] text-xs font-semibold hover:bg-[#2A2A2D] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Prepare Inquiry
                </button>

                {submittedNote && (
                  <div
                    role="status"
                    data-testid="inquiry-success"
                    className="text-xs text-[#111111] bg-white border border-[#111111]/20 px-3.5 py-2.5"
                  >
                    {submittedNote}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Quiet Copyright Footer */}
        <div className="mt-16 pt-6 border-t border-[#111111]/12 flex flex-wrap items-center justify-between gap-4 text-xs text-[#52525B]">
          <span>
            &copy; {new Date().getFullYear()} {RESUME_PROFILE.name} — Video Editor
          </span>
          <span>{RESUME_PROFILE.shortLocation}</span>
        </div>
      </div>
    </footer>
  );
}
