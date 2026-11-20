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
    src: null,
    alt: 'Van Anh Tran at Erasmus University Rotterdam',
    label: 'Image 2 · Campus / lifestyle',
    hint: 'Landscape or square, approx. 4:3',
  },
  philips: {
    src: null,
    alt: 'Van Anh Tran during the Philips Talent Marketing internship',
    label: 'Image 3 · Philips internship',
    hint: 'Landscape, approx. 16:10',
  },
  creative: {
    src: null,
    alt: 'Behind-the-scenes of a creative or content project',
    label: 'Image 4 · Creative work',
    hint: 'Vertical or square',
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
    figure: '1,200+',
    label: 'Protective masks distributed',
    body: 'Co-founded and led the charity project “1 Student 1 N95”, partnering with influencers for outreach.',
  },
]

// ── Projects. `cover` picks a typographic placeholder style until real imagery exists.
export const projects = [
  {
    slug: 'employer-branding-philips',
    category: 'Talent Marketing & Employer Branding',
    title: 'Telling the Philips employer story to a global talent pool',
    summary:
      'Employer branding narratives distributed across LinkedIn, career portals and internal newsletters during my Talent Marketing internship.',
    year: '2026',
    role: 'Talent Marketing Intern',
    tags: ['Employer branding', 'LinkedIn', 'Recruitment analytics'],
    cover: 'navy',
    featured: true,
    sections: [
      {
        heading: 'Context',
        body: 'As a Talent Marketing Intern at Philips (March – August 2026), I worked on how the company presents itself to prospective talent across multiple markets.',
      },
      {
        heading: 'What I did',
        list: [
          'Crafted and distributed employer branding narratives across LinkedIn, career portals and internal newsletters.',
          'Tracked performance indicators and translated recruitment analytics into actionable insights for hiring pipeline strategies.',
          'Partnered with HR, marketing and recruitment stakeholders to align messaging with workforce planning objectives and regional hiring targets.',
        ],
      },
      { heading: 'A closer look', placeholder: 'Add one or two specific campaigns or stories you worked on (only what you’re allowed to share publicly).' },
      { heading: 'Outcomes', placeholder: 'Add any results you can share — e.g. qualitative feedback or approved metrics. Leave out if confidential.' },
      { heading: 'Key learnings', placeholder: 'What did this internship teach you about employer branding and stakeholder communication?' },
    ],
  },
  {
    slug: 'social-media-content-strategy',
    category: 'Social Media & Content Strategy',
    title: 'Building a TikTok audience of 5,000+ followers',
    summary:
      'A self-built TikTok channel, alongside social media management for a school basketball team and AIESEC in Vietnam.',
    year: '2022 – 2024',
    role: 'Creator · PR & Communication Manager · Social Media Ambassador',
    tags: ['TikTok', 'Content planning', 'CapCut', 'Community'],
    cover: 'accent',
    featured: true,
    sections: [
      {
        heading: 'Overview',
        body: 'Content creation has been a constant thread: building my own TikTok channel to 5,000+ followers, and running social media for organisations I was part of.',
      },
      {
        heading: 'Across three channels',
        list: [
          'TikTok — built and managed a channel with 5,000+ followers, creating content to grow audience interaction and visibility.',
          'Chu Van An Basketball Team — managed social platforms, content planning and audience engagement; coordinated with media partners to promote campaigns and events.',
          'AIESEC in Vietnam for Youth — developed campaign-aligned content and promoted key initiatives through a consistent online presence.',
        ],
      },
      { heading: 'Content approach', placeholder: 'Describe the content pillars, formats or tone you used on TikTok and why.' },
      { heading: 'Selected work', placeholder: 'Add screenshots or links to 3–4 posts you are proud of.' },
    ],
  },
  {
    slug: '1-student-1-n95',
    category: 'Campaign & Social Impact',
    title: '“1 Student 1 N95” — a student-led charity campaign',
    summary:
      'Co-founded and led a charity project that distributed 1,200+ protective masks, partnering with influencers for outreach.',
    year: null,
    role: 'Co-founder & Lead',
    tags: ['Campaign', 'Influencer outreach', 'Community'],
    cover: 'mist',
    featured: true,
    sections: [
      {
        heading: 'Overview',
        body: 'I co-founded and led “1 Student 1 N95”, a charity project that distributed more than 1,200 protective masks and partnered with influencers to reach a wider audience.',
      },
      { heading: 'The idea', placeholder: 'Why did you start the project, and who was it for?' },
      { heading: 'Outreach strategy', placeholder: 'How did you choose and work with influencer partners?' },
      { heading: 'Key learnings', placeholder: 'What did leading this campaign teach you?' },
    ],
  },
  {
    slug: 'brand-consumer-research',
    category: 'Brand & Consumer Research',
    title: 'Brand & consumer research project',
    summary: 'Placeholder — a research project exploring a brand, audience or consumer behaviour question.',
    year: null,
    role: null,
    tags: ['Consumer behaviour', 'Research'],
    cover: 'outline',
    placeholder: true,
    sections: [
      { heading: 'Research question', placeholder: 'What did you set out to understand?' },
      { heading: 'Method', placeholder: 'Survey, interviews, content analysis, desk research…' },
      { heading: 'Insights', placeholder: 'Key findings — only real results.' },
      { heading: 'Implications for the brand', placeholder: 'What would you recommend, and why?' },
    ],
  },
  {
    slug: 'university-marketing-projects',
    category: 'University Marketing Projects',
    title: 'Coursework at Erasmus University Rotterdam',
    summary: 'Placeholder — a selected marketing or communication project from the International Communication and Media programme.',
    year: null,
    role: null,
    tags: ['Strategy', 'Coursework'],
    cover: 'accent-outline',
    placeholder: true,
    sections: [
      { heading: 'Brief', placeholder: 'Course name and the brief you were given.' },
      { heading: 'Approach', placeholder: 'How your team tackled it and your specific contribution.' },
      { heading: 'Deliverables', placeholder: 'Campaign plan, presentation, report — add visuals if possible.' },
      { heading: 'Feedback & learnings', placeholder: 'Grade or lecturer feedback (if you want to share), and what you learned.' },
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
    placeholder: true,
    sections: [
      { heading: 'About the work', placeholder: 'What is it and what inspired it?' },
      { heading: 'Process', placeholder: 'Tools and creative decisions.' },
      { heading: 'Gallery', placeholder: 'Add images or video links.' },
    ],
  },
]
