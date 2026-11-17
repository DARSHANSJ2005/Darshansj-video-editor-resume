import type { SkillCategory, SkillItem } from '../data/resumeData';

export type SkillFilter = 'all' | SkillCategory;

/**
 * Computes normalized illumination [0, 1] for a word index inside the manifesto
 * based on scroll progress [0, 1] and a soft-edge window (in word count).
 */
export function computeWordIllumination(
  scrollProgress: number,
  wordIndex: number,
  totalWords: number,
  softEdge = 3,
): number {
  if (totalWords <= 0) return 1;
  const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
  const clampedEdge = Math.max(0.5, softEdge);
  const head = clampedProgress * (totalWords + clampedEdge);
  const raw = (head - wordIndex) / clampedEdge;
  return Math.max(0, Math.min(1, raw));
}

/**
 * Filters skills by category while preserving original order.
 */
export function filterSkillsByCategory(
  skills: readonly SkillItem[],
  filter: SkillFilter,
): SkillItem[] {
  if (filter === 'all') return [...skills];
  return skills.filter((item) => item.category === filter);
}

export interface InquiryFormInput {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface InquiryValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof InquiryFormInput, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiryForm(input: InquiryFormInput): InquiryValidationResult {
  const errors: Partial<Record<keyof InquiryFormInput, string>> = {};

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  if (!input.email.trim() || !EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!input.projectType.trim()) {
    errors.projectType = 'Please select a project format.';
  }
  if (!input.message.trim() || input.message.trim().length < 10) {
    errors.message = 'Please share a brief note about your footage or timeline (10+ characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface Vec3Tuple {
  x: number;
  y: number;
  z: number;
}

/**
 * Computes exploded sub-assembly target coordinates given base position,
 * explosion direction offset, and normalized explosion factor [0, 1].
 */
export function computeExplodedOffset(
  base: Vec3Tuple,
  offset: Vec3Tuple,
  factor: number,
): Vec3Tuple {
  const t = Math.max(0, Math.min(1, factor));
  return {
    x: base.x + offset.x * t,
    y: base.y + offset.y * t,
    z: base.z + offset.z * t,
  };
}

export type CinemaFinishId = 'noir' | 'titanium' | 'tungsten';

export interface CinemaFinishSpec {
  id: CinemaFinishId;
  label: string;
  bodyHex: number;
  accentHex: number;
  ringHex: number;
  swatchCss: string;
}

export const CINEMA_FINISHES: Record<CinemaFinishId, CinemaFinishSpec> = {
  noir: {
    id: 'noir',
    label: 'Anodized Noir',
    bodyHex: 0x1b1c1e,
    accentHex: 0xc97b36,
    ringHex: 0x8e9299,
    swatchCss: '#1b1c1e',
  },
  titanium: {
    id: 'titanium',
    label: 'Brushed Titanium',
    bodyHex: 0x6c7178,
    accentHex: 0xd9d9d6,
    ringHex: 0x26282b,
    swatchCss: '#7c8188',
  },
  tungsten: {
    id: 'tungsten',
    label: 'Tungsten Cinema',
    bodyHex: 0x2a2520,
    accentHex: 0xd97706,
    ringHex: 0xb6a895,
    swatchCss: '#b46927',
  },
};

export function resolveCinemaFinish(id: CinemaFinishId): CinemaFinishSpec {
  return CINEMA_FINISHES[id] ?? CINEMA_FINISHES.noir;
}
