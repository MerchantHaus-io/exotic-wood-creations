export type Level = "Beginner" | "Intermediate" | "Advanced" | "Drop-in";

export interface ImprovClass {
  id: string;
  slug: string;
  level: Level;
  title: string;
  tagline: string;
  description: string;
  weeks: number;
  sessionLength: string;
  price: number;
  nextStart: string;
  schedule: string;
  format: "Online" | "In-person" | "Hybrid";
  color: "yellow" | "coral" | "purple" | "mint";
  image: string;
}

export const classes: ImprovClass[] = [
  {
    id: "c1",
    slug: "improv-101",
    level: "Beginner",
    title: "Improv 101: Yes, And",
    tagline: "The total beginner's on-ramp. No experience required.",
    description:
      "Your first eight weeks of improv. We'll play the foundational games, build your listening muscles, and end the course with a live student showcase. If you've ever thought \"I could never\" — this is the class for you.",
    weeks: 8,
    sessionLength: "2 hrs",
    price: 345,
    nextStart: "May 6",
    schedule: "Tuesdays · 7:00 pm ET",
    format: "Online",
    color: "yellow",
    image:
      "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c2",
    slug: "improv-201",
    level: "Intermediate",
    title: "Improv 201: Scene Craft",
    tagline: "Beyond the basics — build real scenes with real stakes.",
    description:
      "You know the rules. Now learn when to bend them. 201 focuses on character, point of view, and emotional honesty, with a heavy emphasis on long-form structures.",
    weeks: 8,
    sessionLength: "2 hrs",
    price: 395,
    nextStart: "May 8",
    schedule: "Thursdays · 7:00 pm ET",
    format: "Online",
    color: "coral",
    image:
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c3",
    slug: "improv-301",
    level: "Advanced",
    title: "Improv 301: Long-form Harold",
    tagline: "The legendary form — learned, drilled, performed.",
    description:
      "A deep dive into the Harold. Openings, beats, group games, tag runs. You'll end the session performing a Harold in front of a live audience in our showcase theater.",
    weeks: 10,
    sessionLength: "2.5 hrs",
    price: 495,
    nextStart: "May 12",
    schedule: "Mondays · 7:30 pm ET",
    format: "Hybrid",
    color: "purple",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c4",
    slug: "drop-in-jam",
    level: "Drop-in",
    title: "Friday Night Jam",
    tagline: "Open-level drop-in. First one's on us.",
    description:
      "A low-stakes, high-joy room that welcomes everyone — 101 grads, 301 lifers, and curious first-timers who just want to feel out the vibe. Hosted live every Friday.",
    weeks: 1,
    sessionLength: "90 min",
    price: 15,
    nextStart: "Every Friday",
    schedule: "Fridays · 8:00 pm ET",
    format: "Online",
    color: "mint",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c5",
    slug: "improv-for-life",
    level: "Beginner",
    title: "Improv for Life",
    tagline: "Confidence, listening, presence — no performance required.",
    description:
      "A six-week course for people who want the benefits of improv without the stage lights. Perfect for professionals, teachers, parents, or anyone who wants to be a little more present on a Tuesday.",
    weeks: 6,
    sessionLength: "90 min",
    price: 245,
    nextStart: "May 14",
    schedule: "Wednesdays · 6:30 pm ET",
    format: "Online",
    color: "yellow",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "c6",
    slug: "sketch-writing",
    level: "Intermediate",
    title: "Sketch Writing Lab",
    tagline: "Turn your best bits into tight, sharable sketches.",
    description:
      "Six weeks of writing, workshopping, and table-reading original sketches with a small cohort. You'll leave with three polished pieces ready for submission, YouTube, or your next open mic.",
    weeks: 6,
    sessionLength: "2 hrs",
    price: 325,
    nextStart: "May 20",
    schedule: "Tuesdays · 7:00 pm ET",
    format: "Online",
    color: "purple",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  },
];

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  credits: string[];
}

export const instructors: Instructor[] = [
  {
    id: "i1",
    name: "Frej Lindholm",
    title: "Founder · Head of Curriculum",
    bio: "Frej has been on stage since 2009 — Stockholm, Chicago, and a decade of UCB houses later, he started Frej Improv Collective to teach the form the way he wishes he'd learned it: slow, generous, and a little weird.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    credits: ["UCB NY · House Team", "iO Chicago · Harold Team", "Second City Touring Co."],
  },
  {
    id: "i2",
    name: "Priya Narayan",
    title: "Lead Instructor · 201 & 301",
    bio: "Priya is a writer-performer whose scene work has been described as \"mercilessly specific.\" She's coached Emmy-winning writers rooms and wants you to know that your weirdest instinct is usually the correct one.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    credits: ["The Pack Theater", "Annoyance NY", "WGA Writers Room Coach"],
  },
  {
    id: "i3",
    name: "Marcus Okafor",
    title: "Corporate Programs Lead",
    bio: "Marcus ran sales teams for a decade before trading the CRM for a stage. He translates the improv principles — listening, adaptation, yes-and — into language every exec in your Zoom squares will actually hear.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    credits: ["Google Team Days", "Stripe All-hands", "Former VP Sales, Atlas Software"],
  },
  {
    id: "i4",
    name: "Daniela Ruiz",
    title: "Lead Instructor · 101 & Drop-in",
    bio: "Daniela is the instructor everyone wants for their first class. Patient, warm, and allergic to gatekeeping. A seven-year vet of the Magnet's teaching faculty.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    credits: ["Magnet Theater Faculty", "UCB Diversity Program", "Reductress Live"],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sasha Bell",
    role: "101 Alum · Brooklyn, NY",
    text: "I signed up because I was terrified of meetings at work. Eight weeks later I'm the one cracking up the room. Daniela is a national treasure.",
  },
  {
    name: "Omar Khoury",
    role: "301 Alum · Austin, TX",
    text: "I've taken classes at UCB and iO. The 301 Harold cohort at Frej was as rigorous as either — and twice as kind. I'm still performing with people I met in that Zoom room.",
  },
  {
    name: "Linnea Park",
    role: "Corporate Client · Head of People, Atlas",
    text: "We booked Marcus for a leadership offsite and the Slack channel has been a 'yes, and' stream ever since. Best budget we spent all year.",
  },
  {
    name: "Jordan Chen",
    role: "Sketch Writing Lab · 2026 cohort",
    text: "I came in with one good bit and a notes app full of fragments. I left with three sketches, a writing group, and the confidence to actually hit send.",
  },
  {
    name: "Ravi Mehta",
    role: "Drop-in regular",
    text: "Friday Jam is my therapy, my social life, and my weekly reminder that I have a body. $15 is a crime.",
  },
];
