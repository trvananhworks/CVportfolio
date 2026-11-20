// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the site.
// Facts below come from the CV (2026). Anything not in the CV is
// marked with `placeholder: true` or wrapped in a <Placeholder>.
// ─────────────────────────────────────────────────────────────

// Prefixes files in /public with the site's base path (needed on GitHub Pages).
export const asset = (path) => (path?.startsWith('/') ? import.meta.env.BASE_URL + path.slice(1) : path)

export const profile = {
  fullName: 'Nguyen Van Anh Tran',
  name: 'Van Anh Tran',
  location: 'Rotterdam, the Netherlands',
  email: 'annietr.works@gmail.com',
  phone: '+31624370103',
  phoneLabel: '+31 6 24 37 01 03',
  linkedin: 'https://www.linkedin.com/in/vananhtrng',
  linkedinLabel: 'linkedin.com/in/vananhtrng',
  cv: asset('/VanAnhTran_CV_2026.pdf'),
  focus: ['Branding', 'Consumer behaviour', 'Digital marketing', 'Strategic communications'],
}

// ── The 3–4 photo slots. Drop files in /public/images and set `src`.
export const images = {
  portrait: {
    src: '/images/portrait.jpg',
    alt: 'Portrait of Van Anh Tran in a brown knit cardigan, seated in warm window light',
    label: 'Image 1 · Portrait',
    hint: 'Vertical portrait, approx. 4:5',
  },
  about: {
    src: '/images/about.jpg',
    alt: 'Van Anh Tran in a graduation gown, holding a bouquet of white daisies on a stone bridge',
    label: 'Image 2 · Campus / lifestyle',
    hint: 'Vertical, approx. 4:5',
  },
  philips: {
    src: '/images/philips.jpg',
    alt: 'Colleagues gathered on the steps of a multi-storey Philips office atrium, watching a presentation on screen',
    label: 'Image 3 · Philips internship',
    hint: 'Vertical, approx. 3:4',
  },
  creative: {
    src: '/images/creative.jpg',
    alt: 'Grid of nine videos from Van Anh’s TikTok channel — vlogs and scenes around Hanoi, with view counts',
    label: 'Image 4 · Creative work',
    hint: 'Vertical, 3:4',
  },
}

export const education = [
  {
    school: 'Erasmus University Rotterdam',
    degree: 'BSc International Communication and Media',
    place: 'Rotterdam, the Netherlands',
    period: 'Expected June 2027',
  },
  {
    school: 'Chu Van An National High School for the Gifted',
    degree: 'Specialised in Geography',
    place: 'Hanoi, Vietnam',
    period: 'Sep 2021 – May 2024',
  },
]

export const philips = {
  role: 'Talent Marketing Intern',
  company: 'Philips',
  period: 'March 2026 – August 2026',
  pillars: [
    {
      no: '01',
      title: 'Employer brand storytelling',
      body: 'Crafted and distributed employer branding narratives across LinkedIn, career portals and internal newsletters, reaching a global talent pool across multiple markets.',
    },
    {
      no: '02',
      title: 'Data into direction',
      body: 'Tracked performance indicators and translated recruitment analytics into actionable insights to sharpen hiring pipeline strategies.',
    },
    {
      no: '03',
      title: 'Cross-functional alignment',
      body: 'Partnered with HR, marketing and recruitment stakeholders to align messaging with workforce planning objectives and regional hiring targets.',
    },
  ],
  channels: ['LinkedIn', 'Career portals', 'Internal newsletters'],
  stakeholders: ['HR', 'Marketing', 'Recruitment'],
  // Tools used during the internship. `kind` = what I used it for.
  tools: [
    { name: 'Phenom People', kind: 'Designing the Philips career page and Philips newsletter' },
    { name: 'Sprout Social', kind: 'Publishing LinkedIn posts and tracking performance with UTM links' },
    { name: 'Adobe Express', kind: 'Editing LinkedIn images' },
    { name: 'CapCut', kind: 'Editing short-form video' },
    { name: 'Viva Engage', kind: 'Internal communication' },
    { name: 'Advocacy', kind: 'Employee advocacy' },
  ],
  // Key learnings — selected from my internship report (July 2026).
  learnings: [
    {
      title: 'One message rarely fits every market.',
      body: 'Localisation is more than translation — what works in one market can miss in another.',
    },
    {
      title: 'Ask why, not just what.',
      body: 'Performance data only becomes useful once you understand what is behind the numbers.',
    },
    {
      title: 'Authentic beats overly polished.',
      body: 'Real, human content often connects better than heavily produced content.',
    },
    {
      title: 'Context matters as much as content.',
      body: 'In a global team, sharing context early and asking questions keeps work moving.',
    },
  ],
  // Instagram Reels edited for Philips. Paste the public link into `url`,
  // e.g. 'https://www.instagram.com/reel/ABC123xyz/'. Add more objects for more reels.
  // Optional: add `cover` (image in /public/images) AND `views` (e.g. '12.3K') to show
  // a custom card with view count only, instead of Instagram's embed (which shows likes).
  reels: [
    {
      url: 'https://www.instagram.com/reel/DX_7rksyP4z/',
      caption: 'Innovation Impact Week at Philips, HTC Eindhoven — Instagram Reel edited by Van Anh',
      cover: '/images/reel-philips.jpg',
      views: '10.2K', // update from Instagram now and then
    },
  ],
  process: [
    { step: 'Listen', body: 'Understand workforce planning objectives and regional hiring targets with stakeholders.' },
    { step: 'Shape', body: 'Craft employer branding narratives for a global talent audience.' },
    { step: 'Publish', body: 'Distribute across LinkedIn, career portals and internal newsletters.' },
    { step: 'Measure', body: 'Track performance indicators and turn recruitment analytics into insights.' },
  ],
}

export const earlierExperience = [
  {
    role: 'Public Relations & Communication Manager',
    org: 'Chu Van An Basketball Team',
    period: 'Aug 2022 – Jun 2024',
    points: [
      'Managed the team’s social media platforms, including content planning and audience engagement.',
      'Created and published posts to enhance brand visibility and community outreach.',
      'Coordinated with media partners to promote campaigns and events.',
    ],
  },
  {
    role: 'Social Media Ambassador',
    org: 'AIESEC in Vietnam for Youth',
    period: 'Sep 2022 – Jan 2023',
    points: [
      'Represented the organisation on social media to strengthen brand image and engagement.',
      'Developed creative content aligned with campaign objectives.',
      'Promoted key initiatives and events through a consistent online presence.',
      'Collaborated with the communications team to expand outreach and audience interaction.',
    ],
  },
]

export const certifications = [
  { issuer: 'Google', title: 'Fundamentals of Digital Marketing', year: '2025' },
  { issuer: 'Canva', title: 'Marketing with Canva', year: '2025' },
  { issuer: 'University of Pennsylvania', title: 'Improving Communication Skills', year: '2025' },
  { issuer: 'Microsoft', title: 'Office Specialist — PowerPoint 2016, Word 2016', year: '2023' },
  { issuer: 'IELTS', title: 'Overall band 7.0', year: '2023' },
]

export const skills = {
  technical: ['Video production & editing', 'CapCut', 'TikTok', 'Canva', 'Microsoft Word', 'Microsoft PowerPoint'],
  soft: [
    'Communication',
    'Presentation',
    'Independent & team work',
    'Self-regulation',
    'Giving & receiving feedback',
    'Time management',
  ],
}

export const achievements = [
  {
    figure: '5,000+',
    label: 'TikTok followers',
    body: 'Built and managed a TikTok channel, creating content that grew audience interaction and visibility.',
  },
  {
    figure: '412M',
    label: 'VND raised for charity',
    body: 'Co-founded the charity project “1 Student 1 N95” and, as Communication Lead, worked with influencers and KOLs to spread its impact.',
  },
]

// ── Projects. `cover` picks a typographic placeholder style until real imagery exists.
export const projects = [
  {
    slug: 'social-media-content-strategy',
    category: 'Social Media & Content Strategy',
    title: 'Building a TikTok audience of 5,000+ followers',
    summary:
      'A passion project from my high school years in Hanoi: a TikTok channel of school-life vlogs and atmospheric city moments, grown to more than 5,000 followers.',
    year: '2021 – 2024',
    role: 'Creator — passion project',
    tags: ['TikTok', 'Short-form video', 'Visual storytelling', 'CapCut'],
    cover: 'accent',
    image: '/images/tiktok-cover.jpg',
    imageAlt: 'Grid of nine videos from Van Anh’s TikTok channel, with view counts',
    sections: [
      {
        heading: 'Overview',
        body: 'What started as a creative outlet while I was a student at Chu Van An National High School for the Gifted became a channel with more than 5,000 followers. I created the content myself and learned first-hand what makes people stop scrolling.',
      },
      {
        heading: 'Content pillars',
        list: [
          'School life — vlogs from Chu Van An, like a career orientation day and early breaks with friends.',
          'Hanoi moods — short, atmospheric clips of the city: after the rain, quiet corners, still water.',
          'Everyday lifestyle — small moments such as a visit to the MUJI store.',
        ],
      },
      {
        heading: 'Style',
        body: 'A consistent, calm look: soft natural light, cinematic framing and elegant title overlays that mix a serif with handwritten script. Every video was recognisably part of the same channel.',
      },
      {
        heading: 'Reach',
        list: [
          'More than 5,000 followers.',
          'Most-viewed video: 508.4K views.',
          'Two more videos above 80K views: 163.5K and 83.3K.',
        ],
      },
      {
        heading: 'What it taught me',
        body: 'Running my own channel taught me the basics I now use professionally: a clear visual identity builds recognition, the first seconds decide whether people keep watching, and consistency matters more than any single viral post. It also sparked something lasting: I genuinely enjoy editing video and experimenting with different platforms to see what works where.',
      },
    ],
  },
  {
    slug: '1-student-1-n95',
    category: 'Campaign & Social Impact',
    title: '“1 Student 1 N95” — a student-led charity campaign',
    summary:
      'Co-founder and Communication Lead of “1 Student 1 N95”, a student-led charity project that raised 412,589,519 VND. I worked with influencers and KOLs to spread the project’s impact.',
    year: null,
    role: 'Co-founder & Communication Lead',
    tags: ['Communication', 'Influencer & KOL outreach', 'Social impact'],
    cover: 'mist',
    image: '/images/n95-cover.jpg',
    imageAlt: '“1 Student 1 N95” thank-you graphic: the amount raised and the supporters, influencers and student clubs behind the project',
    sections: [
      {
        heading: 'Overview',
        body: '“1 Student 1 N95” was a student-led charity project providing N95 masks. I was one of its co-founders and served as the project’s Communication Lead.',
      },
      {
        heading: 'My role',
        list: [
          'Reached out to influencers and KOLs and acted as the project’s main point of contact with them.',
          'Worked with these partners to share the project with their audiences and spread its impact beyond our own network.',
          'Kept communication between the project team and our partners clear and consistent.',
        ],
      },
      {
        heading: 'Impact',
        list: [
          '412,589,519 VND (roughly €14,000) raised.',
          'Influencer and KOL partnerships that carried the project’s message to a much wider audience.',
          'Backed by a large community of individual supporters, influencers and student clubs.',
        ],
      },
      {
        heading: 'What I learned',
        body: 'Trusted voices can take a message much further than any single account — and good partnerships start with clear, respectful communication that makes it easy for others to help.',
      },
    ],
  },
  {
    slug: 'youth-ambassador',
    category: 'Ambassadorships & NGOs',
    title: 'Invited ambassador for youth projects and NGOs',
    summary:
      'Invited to represent a range of youth-led projects and NGOs, helping their causes reach young audiences.',
    year: null,
    role: 'Ambassador',
    tags: ['Advocacy', 'Community', 'Social media'],
    cover: 'accent-outline',
    sections: [
      {
        heading: 'Overview',
        body: 'Over the years I have been invited to act as an ambassador for several youth projects and non-profit organisations — representing their mission and helping them connect with young people.',
      },
      {
        heading: 'Organisations',
        list: ['AIESEC in Vietnam for Youth — Social Media Ambassador (Sep 2022 – Jan 2023)'],
        placeholder: 'Add the other projects and NGOs you were invited to represent (name, role, year).',
      },
      {
        heading: 'What the role involved',
        list: [
          'Represented the organisation on social media to strengthen its brand image and engagement.',
          'Developed creative content aligned with campaign objectives.',
          'Promoted key initiatives and events through a consistent online presence.',
        ],
      },
      { heading: 'Why it matters to me', placeholder: 'What drew you to these causes, and what did representing them teach you?' },
    ],
  },
  {
    slug: 'university-marketing-projects',
    category: 'University Marketing Projects',
    title: 'Hello 24/7: pitching a new direction for an app',
    summary:
      'Digital Content course, Erasmus University Rotterdam — our team of three used company data to propose a development direction for the Hello 24/7 app. Our pitch was one of the top two the company selected for reference.',
    year: null,
    role: 'Team member & presenter (team of 3)',
    tags: ['Digital content', 'App strategy', 'Storyboarding', 'Pitching'],
    cover: 'lavender-outline',
    image: '/images/coursework-hello247.jpg',
    imageAlt: 'Van Anh presenting the Hello 24/7 final pitch, next to two pages of the video storyboard',
    featured: true,
    sections: [
      {
        heading: 'Brief',
        body: 'In the Digital Content course at Erasmus University Rotterdam, our team of three was asked to propose a direction for developing the Hello 24/7 app, based on data provided by the company.',
      },
      {
        heading: 'What we did',
        list: [
          'Worked from the company’s own data to shape a development direction for the app.',
          'Built a creative concept, “One Shared Peace of Mind”, with the line “One App, One Shared Peace of Mind.”',
          'Storyboarded a 40-second, 12-cut video to bring the concept to life.',
          'Presented our final pitch — I opened the presentation and guided the first part.',
        ],
      },
      {
        heading: 'The concept',
        body: 'The storyboard follows someone rushing out of work with the nagging feeling they have forgotten something — a child, a parent’s medication. Then a message from family arrives in Hello 24/7: don’t worry, it’s already taken care of. Shared tasks tick off one by one, and the worry turns into relief.',
      },
      {
        heading: 'Outcome',
        body: 'We competed against other teams in the course. The company selected our proposal as one of its top two for reference.',
      },
    ],
  },
  {
    slug: 'personal-creative-projects',
    category: 'Personal Creative Projects',
    title: 'Personal creative work',
    summary: 'Placeholder — video edits, design experiments or other self-initiated work made with CapCut, Canva and more.',
    year: null,
    role: 'Creator',
    tags: ['Video', 'Design', 'Canva'],
    cover: 'ink-outline',
    featured: true,
    placeholder: true,
    sections: [
      { heading: 'About the work', placeholder: 'What is it and what inspired it?' },
      { heading: 'Process', placeholder: 'Tools and creative decisions.' },
      { heading: 'Gallery', placeholder: 'Add images or video links.' },
    ],
  },
]
