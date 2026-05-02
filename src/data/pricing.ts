/** Visual tier for card accent (no emoji in UI). */
export type PackageTierLevel = 'basic' | 'standard' | 'premium';

export type PackageItem = {
  id: string;
  name: string;
  tier: PackageTierLevel;
  /** Featured / most popular */
  popular?: boolean;
  bullets: string[];
  price: string;
};

export type PackageCategory = {
  id: string;
  title: string;
  subtitle?: string;
  /** Short line for home section cards */
  summaryFrom: string;
  packages: PackageItem[];
};

export const packageCategories: PackageCategory[] = [
  {
    id: 'aerial',
    title: 'Aerial (drone only) packages',
    subtitle: 'Drone-led video deliverables',
    summaryFrom: 'From Rs. 10,000',
    packages: [
      {
        id: 'aerial-basic',
        name: 'Basic Aerial',
        tier: 'basic',
        bullets: [
          '1 location',
          '20–40 sec video',
          'Drone shots only',
          'Basic color grading',
          '1 revision',
        ],
        price: 'Rs. 10,000 – 15,000',
      },
      {
        id: 'aerial-cinematic',
        name: 'Cinematic Aerial',
        tier: 'standard',
        popular: true,
        bullets: [
          '1–2 locations',
          '40–60 sec cinematic video',
          'Advanced color grading',
          'Smooth transitions',
          '2 revisions',
        ],
        price: 'Rs. 18,000 – 25,000',
      },
      {
        id: 'aerial-premium',
        name: 'Premium Aerial',
        tier: 'premium',
        bullets: [
          'Multiple locations',
          '60–90 sec cinematic video',
          'High-end editing + storytelling',
          'Priority delivery',
          '3 revisions',
        ],
        price: 'Rs. 30,000 – 45,000',
      },
    ],
  },
  {
    id: 'events',
    title: 'Event coverage packages',
    subtitle: 'Drone plus ground coverage for events',
    summaryFrom: 'From Rs. 25,000',
    packages: [
      {
        id: 'event-basic',
        name: 'Basic Event',
        tier: 'basic',
        bullets: [
          '4–5 hour coverage',
          'Drone + limited ground',
          '45–60 sec highlight',
        ],
        price: 'Rs. 25,000',
      },
      {
        id: 'event-standard',
        name: 'Standard Event',
        tier: 'standard',
        popular: true,
        bullets: [
          '6–8 hour coverage',
          'Drone + full ground',
          '60–90 sec cinematic video',
          '1 reel',
          '10–15 photos',
        ],
        price: 'Rs. 35,000 – 40,000',
      },
      {
        id: 'event-premium',
        name: 'Premium Event',
        tier: 'premium',
        bullets: [
          'Full-day (8–10+ hrs)',
          'Cinematic storytelling video',
          '2 reels',
          '20+ photos',
          'Priority delivery',
        ],
        price: 'Rs. 45,000 – 50,000',
      },
    ],
  },
  {
    id: 'property',
    title: 'Hotel / villa promotion',
    subtitle: 'Property and hospitality visuals',
    summaryFrom: 'From Rs. 15,000',
    packages: [
      {
        id: 'property-starter',
        name: 'Starter Promo',
        tier: 'basic',
        bullets: ['1 property shoot', '30–45 sec video', 'Drone focus'],
        price: 'Rs. 15,000 – 20,000',
      },
      {
        id: 'property-business',
        name: 'Business Promo',
        tier: 'standard',
        popular: true,
        bullets: [
          'Full property coverage',
          '45–60 sec cinematic video',
          'Drone + ground shots',
          '10 photos',
        ],
        price: 'Rs. 25,000 – 35,000',
      },
      {
        id: 'property-luxury',
        name: 'Luxury Promo',
        tier: 'premium',
        bullets: [
          'Full storytelling video (60–90 sec)',
          'Cinematic + lifestyle shots',
          '15–25 photos',
          'Reels included',
        ],
        price: 'Rs. 40,000 – 70,000',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social media content packs',
    subtitle: 'Ongoing reels and edits',
    summaryFrom: 'From Rs. 25,000 / month',
    packages: [
      {
        id: 'social-reel-pack',
        name: 'Reel Pack (monthly)',
        tier: 'standard',
        popular: true,
        bullets: [
          '4–8 reels per month',
          'Drone + edits',
          'Trend-based content',
        ],
        price: 'Rs. 25,000 – 50,000 / month',
      },
    ],
  },
];

export type PricingAddon = {
  label: string;
  price: string;
};

export const pricingAddons: PricingAddon[] = [
  { label: 'Extra reel', price: 'Rs. 5,000' },
  { label: 'Extra photos', price: 'Rs. 2,000 – 5,000' },
  { label: 'Full video (3–5 min)', price: 'Rs. 10,000+' },
  { label: 'Express delivery', price: 'Rs. 5,000' },
  { label: 'Travel', price: 'Based on location' },
  { label: 'CAA approvals handling', price: 'Separate charge' },
];

export const pricingTerms: string[] = [
  '50% advance required',
  'Balance on delivery',
  'Weather may affect drone operations',
  'Drone flights follow Civil Aviation Authority of Sri Lanka regulations',
  'Raw footage not included (optional extra)',
];

export const bookingInfo = {
  brand: 'Drone Culture',
  tagline: 'Cinematic visual storytelling',
  phoneDisplay: '076 962 4312',
  phoneTel: 'tel:+94769624312',
  dmNote: 'DM for bookings and collaborations',
} as const;
