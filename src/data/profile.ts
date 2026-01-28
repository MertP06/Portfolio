export const profile = {
  name: 'Mert Polat',
  title: 'Bilgisayar Mühendisliği Öğrencisi',
  titles: [
    'Bilgisayar Mühendisliği Öğrencisi',
  ],
  location: 'Ankara, Türkiye',
  photo: '/profile.jpeg',
  photoAlt: 'Mert Polat',
  summary:
    'KTÜN Bilgisayar Mühendisliği son sınıf öğrencisi. Okul projeleri ve staj deneyimim var.',
  about: [
    'Konya Teknik Üniversitesi Bilgisayar Mühendisliği bölümünde son sınıf öğrencisiyim.',
    'Java ve web teknolojileri üzerine çalışıyorum.',
  ],
  highlights: [
    'Java',
    'Web Geliştirme',
    'Öğrenmeye Açık',
  ],
  metrics: [
    { label: 'Eğitim', value: '2022-2026', sub: 'KTÜN' },
    { label: 'Staj', value: '2025', sub: 'BTK' },
    { label: 'Proje', value: '4+', sub: 'GitHub' },
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
      name: 'Triage Otomasyon Sistemi',
      description: 'Okul projesi - Hastane triaj yönetim sistemi.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      url: 'https://github.com/MertP06/Triage-Otomasyon-Sistemi',
      featured: true,
    },
    {
      name: 'Call Center',
      description: 'BTK staj projesi - Çağrı merkezi uygulaması.',
      tech: ['Java', 'Swing', 'MySQL'],
      url: 'https://github.com/MertP06/Call-Center',
      featured: true,
    },
    {
      name: 'Deep Dive',
      description: 'Okul projesi - 2D mobil oyun.',
      tech: ['Java', 'LibGDX'],
      url: 'https://github.com/MertP06/Deep-Dive',
      featured: false,
    },
    {
      name: 'YSA Elma Kalitesi',
      description: 'Okul projesi - Yapay sinir ağları ile sınıflandırma.',
      tech: ['Python', 'TensorFlow'],
      url: 'https://github.com/MertP06/YSA-Elma-Kalitesi',
      featured: false,
    },
  ],
  experience: [
    {
      role: 'Stajyer',
      company: 'Bilgi Teknolojileri ve İletişim Kurumu (BTK)',
      period: 'Haz 2025 - Tem 2025',
      location: 'Ankara',
      details: [
        '20 iş günü zorunlu staj',
        'Java/Swing ile masaüstü uygulama geliştirme',
      ],
    },
  ],
  education: [
    {
      school: 'Konya Teknik Üniversitesi',
      degree: 'Lisans · Bilgisayar Mühendisliği',
      period: '2022 - 2026',
      description: '',
    },
    {
      school: 'Süleyman Demirel Anadolu Lisesi',
      degree: 'Lise · Sayısal',
      period: '2017 - 2021',
      description: '',
    },
  ],
  languages: [
    { name: 'Türkçe', level: 'Ana dil', percentage: 100 },
    { name: 'İngilizce', level: 'B1', percentage: 50 },
  ],
  hobbies: [
    'Müzik',
    'Oyun',
    'Seyahat',
    'Film & Dizi',
    'Teknoloji',
  ],
}
