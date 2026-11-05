export interface ExperienceItem {
  role: { en: string; tr: string }
  company: { en: string; tr: string }
  period: { en: string; tr: string }
  location: { en: string; tr: string }
  details: { en: string[]; tr: string[] }
  tags?: string[]
}

export interface EducationItem {
  school: { en: string; tr: string }
  degree: { en: string; tr: string }
  period: string
  description?: { en: string; tr: string }
}

export const profile = {
  name: 'Mert Polat',
  titles: {
    en: ['Computer Engineer', 'Web Developer', 'Software Developer'],
    tr: ['Bilgisayar Mühendisi', 'Web Geliştirici', 'Yazılım Geliştirici'],
  },
  location: {
    en: 'Ankara, Turkey',
    tr: 'Ankara, Türkiye',
  },
  photo: import.meta.env.BASE_URL + 'profile.jpeg',
  photoAlt: 'Mert Polat',

  contact: {
    email: 'mert06polat@gmail.com',
    github: 'https://github.com/MertP06',
    linkedin: 'https://www.linkedin.com/in/mert-polat-b05195302/',
    instagram: 'https://www.instagram.com/merwtpolat/',
  },

  skills: {
    languages: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C'],
    web: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Spring Boot', 'RESTful APIs', 'Vite'],
    database: ['PostgreSQL', 'MySQL', 'SQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman'],
  },

  projects: [
    {
      name: 'Hospital ER Management System',
      description: {
        en: 'Hospital emergency room triage management system with patient prioritization and live status tracking.',
        tr: 'Hastane acil servis triyaj ve hasta önceliklendirme yönetim sistemi.',
      },
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      url: 'https://github.com/MertP06/Hospital-ER-Management-System',
      featured: true,
    },
    {
      name: 'Call Center Management System',
      description: {
        en: 'Call center management desktop application developed during mandatory internship at BTK.',
        tr: 'BTK zorunlu stajı kapsamında geliştirilen çağrı merkezi yönetim masaüstü uygulaması.',
      },
      tech: ['Java', 'Swing', 'MySQL'],
      url: 'https://github.com/MertP06/Call-Center-Management-System',
      featured: true,
    },
    {
      name: 'Deep Dive',
      description: {
        en: '2D mobile game project developed using Java and LibGDX framework.',
        tr: 'Java ve LibGDX oyun motoru kullanılarak geliştirilmiş 2D mobil oyun projesi.',
      },
      tech: ['Java', 'LibGDX'],
      url: 'https://github.com/MertP06/Deep-Dive',
      featured: false,
    },
    {
      name: 'Neural Network Apple Quality',
      description: {
        en: 'Quality classification and prediction system utilizing Artificial Neural Networks.',
        tr: 'Yapay sinir ağları kullanılarak elma kalite sınıflandırması ve tahmin sistemi.',
      },
      tech: ['Python', 'TensorFlow'],
      url: 'https://github.com/MertP06/Neural-Network-Apple-Quality',
      featured: false,
    },
  ],

  experience: [
    {
      role: {
        en: 'Erasmus Intern (Web Developer)',
        tr: 'Erasmus Stajyeri (Web Geliştirici)',
      },
      company: {
        en: 'Rheinische Friedrich-Wilhelms-Universität Bonn · Visual Computing Incubator (VCI)',
        tr: 'Bonn Üniversitesi (Uni Bonn) · Visual Computing Incubator (VCI)',
      },
      period: {
        en: '1 Jul 2026 – 1 Sep 2026 (60 Days)',
        tr: '1 Tem 2026 – 1 Eyl 2026 (60 Gün)',
      },
      location: {
        en: 'Bonn, Germany',
        tr: 'Bonn, Almanya',
      },
      details: {
        en: [
          'Completed a 60-day Erasmus+ internship within the Visual Computing Incubator (VCI) project.',
          'Updated, maintained, and refactored the web application interface using React.',
          'Collaborated with the research team using Git for version control, issue tracking, and code reviews.',
          'Worked in an international academic setting focused on high-precision 3D/4D imaging and VR/XR.',
        ],
        tr: [
          'Visual Computing Incubator (VCI) araştırma projesinde 60 günlük Erasmus+ stajımı tamamladım.',
          'React teknolojisi ile projenin web uygulaması arayüzünü güncelledim, modernize ettim ve bakımını yaptım.',
          'Versiyon yönetimi, kod incelemeleri ve ekip içi koordinasyon için Git kullandım.',
          'Yüksek hassasiyetli 3D/4D görüntüleme ve VR/XR odaklı uluslararası bir araştırma ortamında tecrübe kazandım.',
        ],
      },
      tags: ['React', 'Git', 'Web Development', 'Erasmus+'],
    },
    {
      role: {
        en: 'Software Engineering Intern',
        tr: 'Yazılım Mühendisliği Stajyeri',
      },
      company: {
        en: 'Information and Communication Technologies Authority (BTK)',
        tr: 'Bilgi Teknolojileri ve İletişim Kurumu (BTK)',
      },
      period: {
        en: 'Jun 2025 – Jul 2025 (20 Days)',
        tr: 'Haz 2025 – Tem 2025 (20 Gün)',
      },
      location: {
        en: 'Ankara, Turkey',
        tr: 'Ankara, Türkiye',
      },
      details: {
        en: [
          'Completed a 20-day mandatory engineering internship.',
          'Designed and built a desktop Call Center Management System using Java and Swing.',
          'Implemented relational database operations with MySQL.',
        ],
        tr: [
          '20 iş günlük zorunlu mühendislik stajı tamamlandı.',
          'Java ve Swing teknolojileriyle masaüstü Çağrı Merkezi Yönetim Sistemi geliştirildi.',
          'MySQL ile ilişkisel veritabanı modellemesi ve CRUD operasyonları gerçekleştirildi.',
        ],
      },
      tags: ['Java', 'Swing', 'MySQL'],
    },
  ] as ExperienceItem[],

  education: [
    {
      school: {
        en: 'Konya Technical University (KTÜN)',
        tr: 'Konya Teknik Üniversitesi (KTÜN)',
      },
      degree: {
        en: "Bachelor of Science · Computer Engineering (Graduated)",
        tr: 'Lisans · Bilgisayar Mühendisliği (Mezun)',
      },
      period: '2022 – 2026',
    },
    {
      school: {
        en: 'Rheinische Friedrich-Wilhelms-Universität Bonn',
        tr: 'Rheinische Friedrich-Wilhelms-Universität Bonn',
      },
      degree: {
        en: 'Erasmus+ Internship · Visual Computing Incubator (VCI)',
        tr: 'Erasmus+ Stajı · Visual Computing Incubator (VCI)',
      },
      period: '01.07.2026 – 01.09.2026',
    },
    {
      school: {
        en: 'Süleyman Demirel Anatolian High School',
        tr: 'Süleyman Demirel Anadolu Lisesi',
      },
      degree: {
        en: 'High School · Science',
        tr: 'Lise · Sayısal',
      },
      period: '2017 – 2021',
    },
  ] as EducationItem[],
}
