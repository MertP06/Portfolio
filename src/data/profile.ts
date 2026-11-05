export interface ProjectItem {
  name: string
  description: { en: string; tr: string }
  tech: string[]
  url?: string
  featured: boolean
  isPrivate?: boolean
}

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
    en: ['Computer Engineer', 'Web Developer'],
    tr: ['Bilgisayar Mühendisi', 'Web Geliştirici'],
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
    database: ['PostgreSQL', 'SQL'],
    tools: [
      'Git',
      'GitHub',
      'VS Code',
      'IntelliJ IDEA',
      'Android Studio',
      'Postman',
      'DBeaver',
      'pgAdmin 4',
      'SSMS',
    ],
  },

  projects: [
    {
      name: 'VCI Web Application',
      description: {
        en: 'Updated, maintained, and optimized the web application for the Visual Computing Incubator (VCI) research project at the University of Bonn.',
        tr: 'Bonn Üniversitesi bünyesindeki Visual Computing Incubator (VCI) araştırma projesinin web uygulamasının güncellenmesi, bakımı ve optimizasyonu.',
      },
      tech: ['React', 'JavaScript', 'Git', 'CSS3'],
      featured: true,
      isPrivate: true,
    },
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
      tech: ['Java', 'Swing', 'PostgreSQL', 'Git'],
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
  ] as ProjectItem[],

  experience: [
    {
      role: {
        en: 'Intern Student (Erasmus+)',
        tr: 'Stajyer Öğrenci (Erasmus+)',
      },
      company: {
        en: 'Rheinische Friedrich-Wilhelms-Universität Bonn · Visual Computing Incubator (VCI)',
        tr: 'Rheinische Friedrich-Wilhelms-Universität Bonn · Visual Computing Incubator (VCI)',
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
          'Updated and maintained the project web application using React.',
          'Used Git for version control, collaborative development, and workflow management.',
          'Gained international hands-on experience in an academic research environment.',
        ],
        tr: [
          'Visual Computing Incubator (VCI) projesinde 60 günlük Erasmus+ stajımı tamamladım.',
          'React kullanarak projenin web uygulamasını güncelledim ve geliştirdim.',
          'Versiyon kontrolü, iş akışı ve ekip içi koordinasyon için Git kullandım.',
          'Akademik bir araştırma ortamında uluslararası çalışma tecrübesi edindim.',
        ],
      },
      tags: ['React', 'Git', 'Web Development', 'Erasmus+'],
    },
    {
      role: {
        en: 'Intern (Software Engineering)',
        tr: 'Stajyer (Yazılım Mühendisliği)',
      },
      company: {
        en: 'Bilgi Teknolojileri ve İletişim Kurumu (BTK)',
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
          'Completed 20-day mandatory engineering internship.',
          'Developed a desktop Call Center Management System using Java and Swing.',
          'Integrated relational database operations and CRUD architecture with PostgreSQL.',
          'Used Git for version control and project tracking.',
        ],
        tr: [
          '20 günlük zorunlu mühendislik stajı tamamlandı.',
          'Java ve Swing ile masaüstü Çağrı Merkezi Yönetim Sistemi geliştirildi.',
          'PostgreSQL ile ilişkisel veritabanı CRUD işlemleri ve veri yönetimi sağlandı.',
          'Versiyon yönetimi ve proje takibi için Git kullanıldı.',
        ],
      },
      tags: ['Java', 'Swing', 'PostgreSQL', 'Git'],
    },
  ] as ExperienceItem[],

  education: [
    {
      school: {
        en: 'Konya Technical University',
        tr: 'Konya Teknik Üniversitesi',
      },
      degree: {
        en: "Bachelor's Degree · Computer Engineering (Graduated)",
        tr: 'Lisans · Bilgisayar Mühendisliği (Mezun)',
      },
      period: '2022 – 2026',
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
