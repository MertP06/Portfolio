export const profile = {
  name: 'Mert Polat',
  title: 'Computer Engineering Student',
  titles: [
    'Computer Engineering Student',
  ],
  location: 'Ankara, Turkey',
  photo: import.meta.env.BASE_URL + 'profile.jpeg',
  photoAlt: 'Mert Polat',
  summary:
    'Final year Computer Engineering student at KTÜN. I have school projects and internship experience.',
  about: [
    'I am a final year Computer Engineering student at Konya Teknik Üniversitesi.',
    'I work on Java and web technologies.',
  ],
  highlights: [
    'Java',
    'Web Development',
    'Open to Learning',
  ],
  metrics: [
    { label: 'Education', value: '2022-2026', sub: 'KTÜN' },
    { label: 'Internship', value: '2025', sub: 'BTK' },
    { label: 'Projects', value: '4+', sub: 'GitHub' },
  ],
  contact: {
    email: 'mert06polat@gmail.com',
    github: 'https://github.com/MertP06',
    linkedin: 'https://www.linkedin.com/in/mert-polat-b05195302/',
    instagram: 'https://www.instagram.com/merwtpolat/',
  },
  skills: {
    languages: [
      { name: 'Java', level: 60 },
      { name: 'JavaScript', level: 45 },
      { name: 'Python', level: 40 },
      { name: 'C', level: 35 },
    ],
    web: [
      { name: 'HTML/CSS', level: 55 },
      { name: 'React', level: 40 },
      { name: 'Spring Boot', level: 35 },
    ],
    database: [
      { name: 'SQL', level: 50 },
      { name: 'PostgreSQL', level: 40 },
    ],
    tools: [
      { name: 'Git', level: 50 },
      { name: 'VS Code', level: 60 },
      { name: 'IntelliJ IDEA', level: 50 },
    ],
  },
  projects: [
    {
      name: 'Hospital ER Management System',
      description: 'School project - Hospital emergency room triage management system.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      url: 'https://github.com/MertP06/Hospital-ER-Management-System',
      featured: true,
    },
    {
      name: 'Call Center Management System',
      description: 'BTK internship project - Call center application.',
      tech: ['Java', 'Swing', 'MySQL'],
      url: 'https://github.com/MertP06/Call-Center-Management-System',
      featured: true,
    },
    {
      name: 'Deep Dive',
      description: 'School project - 2D mobile game.',
      tech: ['Java', 'LibGDX'],
      url: 'https://github.com/MertP06/Deep-Dive',
      featured: false,
    },
    {
      name: 'Neural Network Apple Quality',
      description: 'School project - Classification using artificial neural networks.',
      tech: ['Python', 'TensorFlow'],
      url: 'https://github.com/MertP06/Neural-Network-Apple-Quality',
      featured: false,
    },
  ],
  experience: [
    {
      role: 'Intern',
      company: 'Bilgi Teknolojileri ve İletişim Kurumu (BTK)',
      period: 'Jun 2025 - Jul 2025',
      location: 'Ankara',
      details: [
        '20-day mandatory internship',
        'Desktop application development with Java/Swing',
      ],
    },
  ],
  education: [
    {
      school: 'Konya Teknik Üniversitesi',
      degree: 'Bachelor\'s · Computer Engineering',
      period: '2022 - 2026',
      description: '',
    },
    {
      school: 'Süleyman Demirel Anadolu Lisesi',
      degree: 'High School · Science',
      period: '2017 - 2021',
      description: '',
    },
  ],
  languages: [
    { name: 'Turkish', level: 'Native', percentage: 100 },
    { name: 'English', level: 'B1', percentage: 50 },
  ],
  hobbies: [
    'Music',
    'Gaming',
    'Travel',
    'Movies & TV Shows',
    'Technology',
  ],
}
