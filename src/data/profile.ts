export interface ProjectItem {
  name: string
  description: { en: string; tr: string }
  tech: string[]
  url?: string
  featured: boolean
  isPrivate?: boolean
  badge?: { en: string; tr: string }
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
      name: 'Hospital ER Management System',
      badge: {
        en: 'Graduation Project',
        tr: 'Bitirme Projesi',
      },
      description: {
        en: 'BSc Graduation Project (Capstone) — An end-to-end triage and emergency room management web platform. Designed to dynamically prioritize patients based on urgency levels (Red/Yellow/Green), manage bed allocation, and track live ER status with Spring Boot REST APIs, React, and PostgreSQL.',
        tr: 'Lisans Bitirme Projesi — Hastane acil servis süreçleri için uçtan uca triyaj ve hasta yönetim platformu. Hastaları aciliyet seviyelerine (Kırmızı/Sarı/Yeşil) göre dinamik önceliklendiren, doktor ve yatak atamalarını yöneten, Spring Boot REST API ve React ile canlı takip imkanı sunan sistem.',
      },
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'RESTful API', 'Tailwind CSS'],
      url: 'https://github.com/MertP06/Hospital-ER-Management-System',
      featured: true,
    },
    {
      name: 'VCI Web Application',
      badge: {
        en: 'Erasmus+ Research',
        tr: 'Erasmus+ Araştırma',
      },
      description: {
        en: 'Web application interface modernized for the Visual Computing Incubator (VCI) research project at the University of Bonn. Focused on refactoring component architecture, optimizing UI responsiveness, and maintaining code quality using React and Git in an international research lab.',
        tr: 'Bonn Üniversitesi Visual Computing Incubator (VCI) araştırma altyapısı için modernize edilen web uygulaması. Uluslararası bir araştırma laboratuvarı ortamında React ve Git kullanılarak bileşen mimarisinin yenilenmesi, arayüz optimizasyonu ve kod bakımı gerçekleştirildi.',
      },
      tech: ['React', 'JavaScript', 'Git', 'CSS3', 'Responsive Design'],
      featured: true,
      isPrivate: true,
    },
    {
      name: 'Deep Dive',
      badge: {
        en: 'Term Project',
        tr: 'Dönem Projesi',
      },
      description: {
        en: 'Term Project — A 2D mobile arcade game developed using Java and the LibGDX framework. Implements custom game physics, dynamic collision detection, sprite animations, sound effects, and responsive touch controls optimized for Android devices.',
        tr: 'Dönem Projesi — Java ve LibGDX oyun motoru kullanılarak geliştirilmiş 2D mobil arcade oyunu. Dinamik fizik hesaplamaları, çarpışma algılama (collision detection), sprite animasyonları, ses efektleri ve mobil cihazlar için optimize edilmiş dokunmatik kontroller içerir.',
      },
      tech: ['Java', 'LibGDX', 'Game Development', 'OOP', 'Android'],
      url: 'https://github.com/MertP06/Deep-Dive',
      featured: true,
    },
    {
      name: 'Call Center Management System',
      badge: {
        en: 'Internship Project',
        tr: 'Staj Projesi',
      },
      description: {
        en: 'Desktop management system built during the mandatory internship at BTK. Features customer records management, call logging, representative workflow tracking, and relational data persistence using Java Swing and PostgreSQL.',
        tr: 'BTK zorunlu mühendislik stajında geliştirilen masaüstü yönetim sistemi. Müşteri kayıtları, çağrı geçmişi, temsilci operasyonları ve PostgreSQL veritabanı CRUD işlemlerini Java Swing arayüzü ile yönetir.',
      },
      tech: ['Java', 'Swing', 'PostgreSQL', 'Git', 'JDBC'],
      url: 'https://github.com/MertP06/Call-Center-Management-System',
      featured: true,
    },
    {
      name: 'Neural Network Apple Quality',
      badge: {
        en: 'Machine Learning',
        tr: 'Makine Öğrenmesi',
      },
      description: {
        en: 'Deep Learning project implementing Artificial Neural Networks (ANN) to classify fruit quality metrics (sweetness, firmness, size, etc.). Features data preprocessing, model training, evaluation metrics, and prediction pipelines.',
        tr: 'Yapay Sinir Ağları (YSA/ANN) mimarisi kullanılarak meyve kalite metriklerini (tatlılık, sertlik, boyut vb.) analiz edip sınıflandıran derin öğrenme projesi. Veri önişleme, model eğitimi ve doğruluk analizi aşamalarını içerir.',
      },
      tech: ['Python', 'TensorFlow', 'Neural Networks', 'Pandas', 'NumPy'],
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
