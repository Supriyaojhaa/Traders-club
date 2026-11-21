// Central content file — edit copy here without touching components.

export const site = {
  name: "The Professional Traders Club",
  shortName: "PTC",
  philosophy: ["Trade Better.", "Think Better.", "Live Better."],
  positioning: "Trading is your profession. Make it your community.",
  eligibility:
    "Exclusively for traders deploying more than ₹1,00,000 in trading capital.",
  eligibilityFull:
    "Membership is exclusively open to traders actively deploying more than ₹1,00,000 in trading capital. All applications are subject to verification and approval.",
  // TODO: replace with the real address once confirmed
  email: "membership@example.com",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Vision", href: "/vision" },
  { label: "The Club", href: "/club" },
  { label: "Membership", href: "/membership" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const letter = {
  heading: "An Open Letter to the Professional Trader",
  subheading: "We believe trading deserves a better ecosystem.",
  salutation: "Dear Trader,",
  // Paragraphs. Items with `pull: true` render as editorial pull-quotes.
  body: [
    { text: "Trading is an interesting profession." },
    {
      text: "You can spend years mastering your craft, developing strategies, understanding markets and learning to manage risk. Yet, much of the journey happens alone.",
    },
    {
      text: "You make decisions independently. You celebrate your victories quietly. You learn from your mistakes, often without anyone around who truly understands what you go through.",
    },
    {
      text: "And somewhere along the way, trading becomes more than just a profession. It becomes a way of life.",
    },
    {
      text: "We believe that people who take trading seriously deserve more than just another Telegram group, another stream of market updates or another platform selling recommendations.",
    },
    { text: "They deserve an ecosystem.", pull: true },
    {
      text: "A place where traders can sit together, exchange perspectives and have meaningful conversations about the markets.",
      place: true,
    },
    {
      text: "A place where algorithmic traders can showcase their work, challenge ideas and discover new possibilities.",
      place: true,
    },
    {
      text: "A place where experienced and consistently profitable traders can share their journeys, lessons and experiences with others.",
      place: true,
    },
    {
      text: "A place where performance is discussed openly, mistakes are acknowledged and improvement is a continuous process.",
      place: true,
    },
    {
      text: "But we also believe that life as a trader should extend beyond the trading screen.",
    },
    {
      text: "Your physical health matters. Your mental well-being matters. The relationships you build and the businesses you create matter.",
    },
    { text: "That's why our vision goes beyond trading." },
    {
      text: "We want to bring together people who share a common profession but have different experiences, ambitions, ideas and perspectives.",
    },
    {
      text: "Through meaningful conversations, learning experiences, business connections, wellness initiatives and a community that understands the realities of trading, we want to create something different.",
    },
    { text: "We aren't here to tell you what to buy or sell." },
    { text: "We aren't here to promise profits." },
    {
      text: "We are here to build an environment where serious traders can learn from one another, challenge themselves and grow together.",
    },
    {
      text: "Because we believe the future of professional trading isn't just about better strategies.",
    },
    {
      text: "It's about better professionals, stronger networks and healthier lives.",
      pull: true,
    },
    { text: "This is more than a trading community." },
    { text: "This is a place where traders belong." },
  ] as { text: string; pull?: boolean; place?: boolean }[],
  closing: "Welcome to the club.",
};

export type Pillar = {
  numeral: string;
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  formats: string[];
  note?: string;
  motif:
    | "floor"
    | "innovation"
    | "business"
    | "knowledge"
    | "performance"
    | "stillness"
    | "conditioning"
    | "reflection";
};

export const pillars: Pillar[] = [
  {
    numeral: "1",
    slug: "trading-floor",
    name: "The Trading Floor",
    tagline: "Where serious traders come together.",
    description: [
      "A live online space where members can interact during market hours, discuss market developments, exchange perspectives and learn from one another.",
      "The emphasis is on genuine conversations between traders — not recommendations, buy/sell calls or signals.",
    ],
    formats: ["Live during market hours", "Member discussion", "No calls or signals"],
    motif: "floor",
  },
  {
    numeral: "2",
    slug: "innovation-room",
    name: "The Innovation Room",
    tagline: "Where strategies meet scrutiny.",
    description: [
      "A dedicated platform for algorithmic traders to showcase their systems, demonstrate their strategies, share their approaches and engage with other technically minded traders.",
      "Online algo showcases, strategy presentations and community events.",
    ],
    formats: ["Algo showcases", "Strategy presentations", "Peer review"],
    motif: "innovation",
  },
  {
    numeral: "3",
    slug: "business-circle",
    name: "The Business Circle",
    tagline: "Beyond trading. Beyond the charts.",
    description: [
      "A networking space for traders who are also entrepreneurs, founders, investors and business owners.",
      "Opportunities for meaningful professional relationships, business discussions, collaborations and online networking meetups.",
    ],
    formats: ["Networking meetups", "Founder conversations", "Collaborations"],
    motif: "business",
  },
  {
    numeral: "4",
    slug: "knowledge-exchange",
    name: "The Knowledge Exchange",
    tagline: "Learn from those who have walked the path.",
    description: [
      "Exclusive online webinars and interactive sessions featuring experienced, consistently profitable traders.",
      "Members get an opportunity to understand their journeys, approaches, experiences, mistakes and lessons. The objective is knowledge exchange, not trade recommendations.",
    ],
    formats: ["Expert webinars", "Interactive Q&A", "Journeys & lessons"],
    motif: "knowledge",
  },
  {
    numeral: "5",
    slug: "performance-room",
    name: "The Performance Room",
    tagline: "An honest conversation about performance.",
    description: [
      "Fortnightly P&L review sessions where members review their trading performance, discuss consistency, reflect on mistakes and identify areas for improvement.",
      "A performance-accountability and learning initiative.",
    ],
    formats: ["Fortnightly", "Accountability", "Reflection"],
    note: "P&L submissions are voluntary, confidential and accessible only to authorised people. A member's financial information is never displayed without explicit consent.",
    motif: "performance",
  },
  {
    numeral: "6",
    slug: "stillness-room",
    name: "The Stillness Room",
    tagline: "Find your balance beyond the markets.",
    description: [
      "Dedicated online yoga, breathing and mindfulness sessions designed to help members slow down, disconnect from market noise and reconnect with themselves.",
      "The focus is on relaxation, flexibility, mindfulness and creating healthier routines.",
    ],
    formats: ["Yoga", "Breathwork", "Mindfulness"],
    motif: "stillness",
  },
  {
    numeral: "7",
    slug: "conditioning-club",
    name: "The Conditioning Club",
    tagline: "A strong trading mind deserves a healthy body.",
    description: [
      "Online fitness sessions, group challenges and physical wellness initiatives designed to encourage strength, stamina, movement and healthier lifestyles.",
      "A culture where physical fitness is treated as an important part of professional life.",
    ],
    formats: ["Fitness sessions", "Group challenges", "Movement"],
    motif: "conditioning",
  },
  {
    numeral: "8",
    slug: "reflection-room",
    name: "The Reflection Room",
    tagline: "The psychological side of trading deserves attention too.",
    description: [
      "A dedicated space for mental wellness, emotional awareness and professional support.",
      "Sessions with qualified mental health professionals, including discussions around trading psychology, emotional regulation, stress, burnout and managing the pressures of trading.",
    ],
    formats: ["Trading psychology", "Emotional regulation", "Professional support"],
    note: "All therapy and counselling is conducted by appropriately qualified professionals, with clear confidentiality and consent practices.",
    motif: "reflection",
  },
];

export const people = [
  "Intraday Traders",
  "Swing Traders",
  "Positional Traders",
  "Futures & Options Traders",
  "Algorithmic Traders",
  "Full-Time Traders",
  "Trader-Entrepreneurs",
];

// Recurring programme formats — not dated events. Add real dates later.
export const programme = [
  { name: "Live Market Discussions", room: "The Trading Floor", cadence: "During market hours" },
  { name: "Algo Strategy Showcases", room: "The Innovation Room", cadence: "Scheduled sessions" },
  { name: "Expert Trader Webinars", room: "The Knowledge Exchange", cadence: "Scheduled sessions" },
  { name: "Performance Reviews", room: "The Performance Room", cadence: "Fortnightly" },
  { name: "Business Networking Meetups", room: "The Business Circle", cadence: "Scheduled sessions" },
  { name: "Yoga & Mindfulness", room: "The Stillness Room", cadence: "Scheduled sessions" },
  { name: "Fitness Programmes", room: "The Conditioning Club", cadence: "Scheduled sessions" },
  { name: "Mental Wellness Sessions", room: "The Reflection Room", cadence: "Scheduled sessions" },
];

export const eligibility = [
  "Actively trading with more than ₹1,00,000 in trading capital.",
  "Willingness to participate constructively in the community.",
  "Agreement to the club's community guidelines.",
  "Application and verification subject to approval.",
];

export const process = [
  { title: "Submit an application", body: "Tell us who you are and how you trade." },
  { title: "Share your background", body: "Provide your basic trading background and capital bracket." },
  { title: "Complete verification", body: "Complete any verification the club requires." },
  { title: "Review by the club", body: "Your application is reviewed by the club." },
  { title: "Welcome", body: "Approved applicants receive membership access and onboarding instructions." },
];
