// All site data — canonical source of truth

export const METRICS = [
  { value: '$100M+', label: 'production rev contributed' },
  { value: '193+',   label: 'projects shipped (4 yrs)' },
  { value: '100%',   label: 'on-time delivery rate' },
  { value: '12+',    label: 'years in program mgmt' },
] as const

export interface CaseStudy {
  id: string
  year: string
  client: string
  title: string
  blurb: string
  metrics: string[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'hbo',
    year: '2022',
    client: 'hbo max',
    title: 'House of the Dragon · Profile Analyzer',
    blurb: 'interactive social campaign assigning users a house targaryen dragon-rider via personality analysis. raven-messenger automated responses. latam + brazil.',
    metrics: ['110K opt-ins MX', '105K opt-ins BR', '$0.56 cost per opt-in', '585K mentions'],
  },
  {
    id: 'vix',
    year: '2023',
    client: 'vix',
    title: 'De Viaje Con Los Derbez · Custom Content + Tech',
    blurb: '7 image variations × 7 copy variations, served by user interaction. notifications delivered show content + trailers. shipped in 3 weeks.',
    metrics: ['18.2M reach', '$0.77 cpe', '75K clicks', '0.57% engagement'],
  },
  {
    id: 'pepsico',
    year: '2024',
    client: 'pepsico mx',
    title: 'Mixes · Polls to OOH',
    blurb: 'music + snack polls on x, results piped to digital out-of-home billboards every 4 hours. assisted on tech and OOH template design.',
    metrics: ['141.4M impressions', '270K poll votes', '$0.20 cpe', '$172K spend'],
  },
  {
    id: 'playdoit',
    year: '2025',
    client: 'playdoit',
    title: 'Groknalyzer · AI Profile Analyzer',
    blurb: 'users like a post; grok analyzes their sports / betting preferences and replies with personalized brand differentiators. one-to-one at scale.',
    metrics: ['grok-powered', 'personalized', 'automated'],
  },
  {
    id: 'lionsgate',
    year: '2026',
    client: 'lionsgate',
    title: 'Michael Jackson Microsite · Profile Hack',
    blurb: 'verified x profile appears compromised. sponsored teaser drives users to a microsite mimicking a hacked profile, looping a tribute video → fandango ticket purchase.',
    metrics: ['microsite', 'video → cta → fandango', 'frictionless funnel'],
  },
  {
    id: 'trend-matcher',
    year: '2021–2026',
    client: 'michelob · ruffles',
    title: 'Trend Matcher · Real-Time Ad Optimization',
    blurb: "x's ads api selects best-performing copy/media from pre-defined pools, deploys into live trending conversations. auto-pauses during low velocity.",
    metrics: ['+15% engagement rate', '5x more replies', '2x more reposts'],
  },
]

export interface CaseStudySection {
  tag: string
  body: string
}

export interface CaseStudyDetail {
  title: string
  intro: string
  sections: CaseStudySection[]
  metrics: { value: string; label: string }[]
}

export const CASE_STUDY_DETAIL: Record<string, CaseStudyDetail> = {
  hbo: {
    title: 'House of the Dragon\nProfile Analyzer',
    intro: 'Advertising as entertainment. brands transforming social into interactive experiences that blur the line between marketing and content.',
    sections: [
      { tag: 'concept', body: 'Interactive social-media campaign where HBO Max engaged users with personalized House Targaryen dragon-rider assignments based on their personality traits — creating viral moments through shareable results and direct fan interaction.' },
      { tag: 'mechanics', body: 'Automated response system delivered immersive, fantasy-themed notifications via raven-messenger metaphor. maintained brand authenticity while driving engagement and anticipation for the premiere.' },
    ],
    metrics: [
      { value: '111,582', label: 'reach · MX' },
      { value: '105,638', label: 'reach · BR' },
      { value: '110K / 105K', label: 'opt-ins MX / BR' },
      { value: '$0.56 / $0.62', label: 'cost per opt-in' },
      { value: '585K / 517K', label: 'mentions MX / BR' },
      { value: '10%', label: 'production cost share' },
    ],
  },
  vix: {
    title: 'De Viaje Con\nLos Derbez',
    intro: 'lead the custom content creation process for the brand: 7 image variations and 7 copy variations. users interact, receive notifications with show content + trailers.',
    sections: [
      { tag: 'scope', body: 'custom content creation across 7 images and 7 copy variants. custom tech implementation served combinations dynamically based on user interaction.' },
      { tag: 'delivery', body: 'shipped in 3 weeks. content production: 6% of total investment. efficient engagement at scale with rapid time-to-market.' },
    ],
    metrics: [
      { value: '$79,557', label: 'total spend' },
      { value: '18.2M', label: 'total reach' },
      { value: '0.57%', label: 'engagement rate' },
      { value: '$0.77', label: 'cost per engagement' },
      { value: '75,247', label: 'total clicks' },
      { value: '3 weeks', label: 'production time' },
    ],
  },
  pepsico: {
    title: 'Mixes · Polls\nto OOH',
    intro: 'connected music-listening preferences with snack-mix choices in mexico. took user engagement from x to the real world: digital out-of-home billboards updating every 4 hours.',
    sections: [
      { tag: 'concept', body: 'polls on x captured user music + snack preferences. results piped to digital OOH billboards across mexico, refreshed every 4 hours. real-world feedback loop on a social campaign.' },
      { tag: 'scope', body: 'assisted the brand with both the tech implementation and the OOH template design. unified visual language across platform and OOH.' },
    ],
    metrics: [
      { value: '141.4M', label: 'impressions' },
      { value: '270K', label: 'poll votes' },
      { value: '46.3K', label: 'likes' },
      { value: '0.63%', label: 'engagement rate' },
      { value: '$0.20', label: 'cost per engagement' },
      { value: '$172K', label: 'total cta spend' },
    ],
  },
  playdoit: {
    title: 'Groknalyzer\nAI Profile Analyzer',
    intro: 'ai-powered profile analyzer · grok-enhanced social engagement. one-to-one personalization at viral scale.',
    sections: [
      { tag: 'hook', body: 'users like the post to receive personalized AI analysis of their X profile. Grok examines their sports preferences and betting behavior, creating a viral engagement loop.' },
      { tag: 'ai analysis', body: 'automated responses identify each user\'s favorite sport — tennis, basketball, or other — and deliver tailored messaging. authentic one-to-one feel.' },
      { tag: 'conversion path', body: 'each personalized response includes sport-specific betting features and one of multiple brand differentiators. direct CTAs guide users from engagement to action.' },
    ],
    metrics: [
      { value: 'grok', label: 'ai engine' },
      { value: '1:1', label: 'personalization' },
      { value: 'auto', label: 'response system' },
    ],
  },
  lionsgate: {
    title: 'Michael Jackson\nMicrosite',
    intro: 'the concept: profile hack. a verified x profile appears compromised. a sponsored post teases the hack — platform-native, doesn\'t look like an ad.',
    sections: [
      { tag: 'the hook', body: 'a verified X profile appears compromised. sponsored post teases the hack, stopping scrollers mid-feed with platform-native authenticity. doesn\'t look like an ad.' },
      { tag: 'the strategy', body: 'generate curiosity and organic engagement before the reveal. users share, speculate, amplify — turning disruption into conversation around the lionsgate michael jackson movie launch.' },
      { tag: 'the experience', body: 'users land on a custom microsite replicating a hacked X profile — familiar UI, profile layout, branding cues. a looping video auto-plays, taking viewers through Jackson\'s iconic journey, his rise, evolution, and enduring legacy.' },
      { tag: 'funnel', body: 'video engagement → CTA appears at peak interest → direct to fandango → conversion. emotional momentum drives ticket sales at maximum engagement.' },
    ],
    metrics: [
      { value: 'microsite', label: 'format' },
      { value: 'video → cta', label: 'primary funnel' },
      { value: 'fandango', label: 'destination' },
    ],
  },
  'trend-matcher': {
    title: 'Trend Matcher\nReal-Time Ad Optimization',
    intro: "x's ads api selects the best-performing copy and media from pre-defined asset pools, deploys instantly into live trending conversations. an innovative model used 2021 → 2026.",
    sections: [
      { tag: 'how it works', body: 'conversation monitoring tracks real-time conversation volume around relevant topics. velocity detection measures conversation speed via dynamic algorithm. intelligent activation deploys ads when velocity hits optimal thresholds.' },
      { tag: 'smart pausing', body: 'during low-activity periods, ads pause to conserve budget. ad spend matches conversation intensity; brands maximize ROI and reach users when most receptive.' },
      { tag: 'in market', body: 'brands like ruffles MX leverage this tool to insert themselves into trending moments, capturing attention during cultural conversations.' },
    ],
    metrics: [
      { value: '+15%', label: 'engagement rate (vs evergreen)' },
      { value: '5×', label: 'more replies (vs same-brand)' },
      { value: '2×', label: 'more reposts (vs same-brand)' },
    ],
  },
}

export const EXPERIENCE = [
  {
    role: 'Brand Project Manager L5',
    sub: 'Senior Program Manager equivalent',
    company: 'X / xAI',
    period: 'Jul 2023 — Mar 2026',
    bullets: [
      'Led custom tech production for X\'s internal Lab across US, Mexico, Brazil, and broader LATAM. Scaled from 42 → 80 projects/year. 193+ projects in 4 years. $100M+ in production revenue.',
      'Held vendor COGs under 5% — half the company\'s 10% target — across 5 years of contract negotiations.',
      'Ran 10–15 concurrent custom tech projects per cycle, $5M–$15M portfolio, 100% on-time.',
      'Coordinated PepsiCo, Netflix, ViX, McDonald\'s, HBO, Lionsgate, Michelob across US / CA / LATAM. Mentored 3 junior PMs.',
    ],
  },
  {
    role: 'Brand Project Manager L4',
    sub: undefined,
    company: 'Twitter',
    period: 'May 2021 — Jul 2023',
    bullets: [
      'Owned 4–7 external production vendor relationships across LATAM and US. Streamlined onboarding by weeks.',
      'Tracked $250K regional budget across MX / BR / Miami / broader LATAM — under-budget every cycle.',
      'Led brainstorming for disruptive ideas tailored to the LATAM market.',
    ],
  },
  {
    role: 'Senior Project Manager',
    sub: undefined,
    company: 'Ogilvy Miami',
    period: 'Mar 2019 — May 2021',
    bullets: [
      'Led American Express IDC across LATAM, Spain, Switzerland — spend, retention, acquisition.',
      '50+ email campaigns annually including 4 monthly brand comms. Owned client budget + staffing.',
    ],
  },
  {
    role: 'Marketing Coordinator',
    sub: undefined,
    company: 'J.D. Mellberg Financial',
    period: 'Feb 2017 — Mar 2019',
    bullets: ['Email marketing through Marketo + Google Ads. Negotiated and monitored media.'],
  },
  {
    role: 'Online Specialist',
    sub: undefined,
    company: 'Google',
    period: 'Nov 2014 — Feb 2017',
    bullets: ['Supported 15–20 B2B/SMB clients daily across Google Ads, Analytics, Merchant Center. 250+ hrs of product training.'],
  },
] as const

export const STACK_TAGS = [
  'Jira', 'Marketo', 'Salesforce', 'Slack', 'Monday.com',
  'BaseCamp', 'SharePoint', 'Google Workspace', 'Microsoft Office',
  'Google Ads', 'Claude', 'ChatGPT', 'xAI',
]

export const CERT_TAGS = [
  { label: 'agile master', solid: true },
  { label: 'scrum master', solid: true },
  { label: 'english (fluent)', solid: false },
  { label: 'español (native)', solid: false },
]
