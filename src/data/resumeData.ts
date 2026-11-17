export type SkillCategory = 'software' | 'technical' | 'core' | 'soft';

export interface SkillItem {
  id: string;
  label: string;
  category: SkillCategory;
  categoryLabel: string;
  context: string;
}

export interface RigPartInfo {
  partId: string;
  title: string;
  discipline: string;
  summary: string;
  tools: string;
}

export const RESUME_PROFILE = {
  name: 'Darshan S J',
  role: 'Video Editor',
  location: 'Andrahalli, D Group, Bengaluru, Karnataka',
  shortLocation: 'Bengaluru, India',
  phone: '+91 8050553427',
  email: 'darshansj2005@gmail.com',
  pdfPath: '/assets/aistudio/DOC-20260709-WA0000_3825bf3d.pdf',
  availability: 'Open for Freelance Commissions',
  experienceYears: '2+ Years',
  aboutParagraphs: [
    'I am a creative and dedicated Video Editor with a strong passion for storytelling through visuals. I transform raw footage into engaging, emotional, and high-quality content that connects with audiences. With 2 years of freelance experience, I specialize in wedding films, documentaries, and social media content.',
    'I focus on understanding client needs, delivering on time, and maintaining the highest standards of quality in every project. I am always eager to learn new techniques and take on challenging projects.',
  ],
  manifestoText:
    'I transform raw footage into engaging, emotional, and high-quality stories that connect with audiences across wedding films, documentaries, and social media.',
  manifestoSubline:
    'End-to-end post-production from timeline assembly to final delivery — built on clarity, pacing, and craft.',
};

export const KEY_METRICS = [
  { value: '2+ Years', label: 'Freelance Experience (2022 – Present)' },
  { value: '3 NLE Suites', label: 'DaVinci Resolve · Premiere Pro · Final Cut Pro' },
  { value: '4 Formats', label: 'Wedding Films · Documentaries · Social · Reels' },
  { value: '3 Languages', label: 'Kannada · English · Hindi' },
];

export const EDUCATION_ENTRY = {
  degree: 'BCA – 2nd Year',
  institution: 'Bengaluru City University (Bengaluru University)',
  period: '2023 – Present',
  focus: 'Bachelor of Computer Applications alongside active freelance post-production work.',
};

export const EXPERIENCE_ENTRY = {
  role: 'Freelance Video Editor',
  company: 'Self Employed',
  period: '2022 – Present',
  duration: '2 Years',
  highlights: [
    'Worked with clients across India on wedding films, pre-wedding videos, documentaries, and social media content.',
    'Edited cinematic wedding films, highlights, teasers, and event videos.',
    'Handled end-to-end editing from raw footage to final delivery.',
    'Added creative transitions, color grading, sound design, and motion graphics to enhance storytelling.',
    'Delivered high-quality videos optimized for platforms like YouTube, Instagram, and other social media.',
    'Maintained strong client relationships through clear communication and on-time delivery.',
  ],
};

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'sw-fcp',
    label: 'Final Cut Pro',
    category: 'software',
    categoryLabel: 'Software',
    context: 'Magnetic timeline editing & rapid social/event turnaround',
  },
  {
    id: 'sw-pr',
    label: 'Adobe Premiere Pro',
    category: 'software',
    categoryLabel: 'Software',
    context: 'Multi-cam wedding assembly, documentary pacing & dynamic motion',
  },
  {
    id: 'sw-dr',
    label: 'DaVinci Resolve',
    category: 'software',
    categoryLabel: 'Software',
    context: 'Primary/secondary color correction, cinematic grading & finishing',
  },
  {
    id: 'tech-ve',
    label: 'Video Editing',
    category: 'technical',
    categoryLabel: 'Technical',
    context: 'Narrative assembly from raw multi-camera dailies',
  },
  {
    id: 'tech-cc',
    label: 'Color Correction',
    category: 'technical',
    categoryLabel: 'Technical',
    context: 'Exposure balancing, skin tone matching & camera log conversion',
  },
  {
    id: 'tech-ae',
    label: 'Audio Enhancement',
    category: 'technical',
    categoryLabel: 'Technical',
    context: 'Dialogue cleanup, ambient leveling & music ducking',
  },
  {
    id: 'tech-mg',
    label: 'Motion Graphics (Basic)',
    category: 'technical',
    categoryLabel: 'Technical',
    context: 'Lower thirds, title cards & clean kinetic typography',
  },
  {
    id: 'tech-te',
    label: 'Transitions & Effects',
    category: 'technical',
    categoryLabel: 'Technical',
    context: 'Rhythmic match cuts, speed ramps & seamless scene bridges',
  },
  {
    id: 'tech-mc',
    label: 'Multi-Cam Editing',
    category: 'technical',
    categoryLabel: 'Technical',
    context: 'Synced multi-angle event & ceremony timeline cutting',
  },
  {
    id: 'tech-tm',
    label: 'Timeline Management',
    category: 'technical',
    categoryLabel: 'Technical',
    context: 'Structured bin organization, proxies & revision tracking',
  },
  {
    id: 'tech-ed',
    label: 'Export & Delivery Optimization',
    category: 'technical',
    categoryLabel: 'Technical',
    context: 'Bitrate & aspect-ratio mastering for YouTube, Instagram & web',
  },
  {
    id: 'core-st',
    label: 'Storytelling',
    category: 'core',
    categoryLabel: 'Core Design',
    context: 'Emotional arc construction for films, teasers & documentaries',
  },
  {
    id: 'core-ce',
    label: 'Cinematic Editing',
    category: 'core',
    categoryLabel: 'Core Design',
    context: 'Measured pacing, J/L-cuts & visual continuity',
  },
  {
    id: 'core-cg',
    label: 'Color Grading',
    category: 'core',
    categoryLabel: 'Core Design',
    context: 'Cohesive filmic mood & tonal look development',
  },
  {
    id: 'core-sd',
    label: 'Sound Design',
    category: 'core',
    categoryLabel: 'Core Design',
    context: 'Foley accents, risers, room tone & emotional score layering',
  },
  {
    id: 'core-mg',
    label: 'Motion Graphics (Basic)',
    category: 'core',
    categoryLabel: 'Core Design',
    context: 'Title sequences & subtle brand overlays',
  },
  {
    id: 'core-sm',
    label: 'Social Media Video Editing',
    category: 'core',
    categoryLabel: 'Core Design',
    context: 'Platform-native pacing for Instagram & YouTube audiences',
  },
  {
    id: 'core-sf',
    label: 'Short Form Content Editing',
    category: 'core',
    categoryLabel: 'Core Design',
    context: 'High-retention hooks, vertical framing & crisp rhythm',
  },
  {
    id: 'soft-ct',
    label: 'Creative Thinking',
    category: 'soft',
    categoryLabel: 'Soft Skill',
    context: 'Fresh visual angles tailored to each client brief',
  },
  {
    id: 'soft-ad',
    label: 'Attention to Detail',
    category: 'soft',
    categoryLabel: 'Soft Skill',
    context: 'Frame-accurate cuts, clean audio seams & color consistency',
  },
  {
    id: 'soft-tm',
    label: 'Time Management',
    category: 'soft',
    categoryLabel: 'Soft Skill',
    context: 'Reliable milestone scheduling across concurrent freelance projects',
  },
  {
    id: 'soft-ap',
    label: 'Adaptability',
    category: 'soft',
    categoryLabel: 'Soft Skill',
    context: 'Flexible workflow across camera codecs & client feedback rounds',
  },
  {
    id: 'soft-ps',
    label: 'Problem Solving',
    category: 'soft',
    categoryLabel: 'Soft Skill',
    context: 'Rescuing challenging lighting, audio, or coverage gaps in post',
  },
  {
    id: 'soft-tc',
    label: 'Team Collaboration',
    category: 'soft',
    categoryLabel: 'Soft Skill',
    context: 'Smooth handoffs with cinematographers & event producers',
  },
  {
    id: 'soft-we',
    label: 'Strong Work Ethic',
    category: 'soft',
    categoryLabel: 'Soft Skill',
    context: 'Committed to on-time delivery and high production polish',
  },
];

export interface EditingSpecialty {
  id: string;
  index: string;
  title: string;
  formats: string;
  tools: string;
  summary: string;
  workflowSteps: string[];
}

export const EDITING_SPECIALTIES: EditingSpecialty[] = [
  {
    id: 'wedding-films',
    index: '01',
    title: 'Cinematic Wedding Films',
    formats: 'Full Films · Highlights · Teasers',
    tools: 'Adobe Premiere Pro · DaVinci Resolve',
    summary:
      'Multi-camera ceremony assembly and emotional highlight storytelling for weddings across India, balancing candid dialogue, music pacing, and cohesive color.',
    workflowSteps: [
      'Ingest multi-cam raw footage & sync audio tracks cleanly',
      'Construct narrative arc across ceremony vows, highlights & teasers',
      'Apply skin-tone matching, color grading & subtle motion titles',
      'Deliver master 4K and social-ready highlight cuts on schedule',
    ],
  },
  {
    id: 'prewedding-events',
    index: '02',
    title: 'Pre-Wedding & Event Videos',
    formats: 'Pre-Wedding Stories · Event Recaps',
    tools: 'Final Cut Pro · Adobe Premiere Pro',
    summary:
      'Rhythmic, music-driven edits combining creative transitions, speed ramps, and ambient sound design to capture atmosphere and energy.',
    workflowSteps: [
      'Curate standout moments from raw shoot dailies',
      'Time visual match cuts and transitions to musical beats',
      'Layer sound design accents and dialogue enhancement',
      'Optimize color consistency across outdoor and indoor lighting',
    ],
  },
  {
    id: 'documentaries',
    index: '03',
    title: 'Documentary Storytelling',
    formats: 'Short Documentaries · Narrative Features',
    tools: 'Adobe Premiere Pro · DaVinci Resolve',
    summary:
      'Structured, story-first editing focused on voice clarity, B-roll pacing, and emotional continuity from raw interviews to finished cut.',
    workflowSteps: [
      'Organize interview transcripts, B-roll bins & proxy timelines',
      'Assemble radio edit and refine narrative pacing',
      'Clean up dialogue audio, room tone & score dynamics',
      'Perform primary/secondary color correction and final mastering',
    ],
  },
  {
    id: 'social-shortform',
    index: '04',
    title: 'YouTube & Social Media Content',
    formats: 'YouTube Features · Instagram Reels · Shorts',
    tools: 'Final Cut Pro · Premiere Pro',
    summary:
      'High-retention editing tailored to YouTube and Instagram aspect ratios with clean motion graphics, crisp audio, and export optimization.',
    workflowSteps: [
      'Craft opening visual hooks and tight rhythmic pacing',
      'Add clean lower thirds, titles & basic motion graphics',
      'Reframe and master exports for 16:9 YouTube and 9:16 Reels',
      'Verify bitrate, loudness & platform playback quality',
    ],
  },
];

export const LANGUAGES_LIST = ['Kannada', 'English', 'Hindi'];

export const RIG_PARTS_CATALOG: Record<string, RigPartInfo> = {
  chassis: {
    partId: 'chassis',
    title: 'Cinema Body & Raw Media Pipeline',
    discipline: 'End-to-End Timeline Management',
    summary:
      'Ingesting raw multi-camera footage, organizing structured proxy workflows, and assembling cohesive documentary and wedding timelines from first cut to final master.',
    tools: 'Adobe Premiere Pro · Final Cut Pro',
  },
  lens: {
    partId: 'lens',
    title: 'Anamorphic Optical Prime',
    discipline: 'Cinematic Editing & Multi-Cam Sync',
    summary:
      'Balancing wide establishing frames with intimate close-ups across multi-cam ceremony and documentary shoots to preserve visual continuity and emotional pacing.',
    tools: 'Multi-Cam Editing · Transitions & Effects',
  },
  monitor: {
    partId: 'monitor',
    title: 'Reference OLED & Waveform Scope',
    discipline: 'Color Correction & Color Grading',
    summary:
      'Matching camera profiles, balancing exposure and skin tones via waveform telemetry, and sculpting cohesive filmic looks in post-production.',
    tools: 'DaVinci Resolve · Color Grading',
  },
  mattebox: {
    partId: 'mattebox',
    title: 'Cinema Matte Box & Framing Flag',
    discipline: 'Social Media & Short-Form Mastering',
    summary:
      'Adapting cinematic compositions cleanly for widescreen YouTube films as well as vertical Instagram reels, teasers, and high-retention highlights.',
    tools: 'Export & Delivery Optimization · Motion Graphics',
  },
  dial: {
    partId: 'dial',
    title: 'Precision Jog & Sound Wheel',
    discipline: 'Sound Design & Audio Enhancement',
    summary:
      'Frame-accurate J/L-cut trimming paired with dialogue clarity, ambient layering, and rhythmic score integration to elevate storytelling.',
    tools: 'Audio Enhancement · Sound Design',
  },
};
