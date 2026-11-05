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
    languages: ['Java', 'C', 'Python', 'JavaScript', 'Dart'],
    web: ['React', 'Spring Boot', 'RESTful APIs', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    mobile: ['Java (Android)', 'Flutter', 'LibGDX'],
    database: ['PostgreSQL', 'SQL'],
    tools: [
      'Git',
      'GitHub',
      'Android Studio',
      'IntelliJ IDEA',
      'VS Code',
      'Postman',
      'DBeaver',
      'SQL Server Management Studio (SSMS)',
    ],
  },

  projects: [
    {
      name: 'Hospital ER Management System',
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
      description: {
        en: 'Term Project — A 2D mobile arcade game developed using Java and the LibGDX framework. Implements custom game physics, dynamic collision detection, sprite animations, sound effects, and responsive touch controls optimized for Android devices.',
        tr: 'Dönem Projesi — Java ve LibGDX oyun motoru kullanılarak geliştirilmiş 2D mobil arcade oyunu. Dinamik fizik hesaplamaları, çarpışma algılama (collision detection), sprite animasyonları, ses efektleri ve mobil cihazlar için optimize edilmiş dokunmatik kontroller içerir.',
      },
      tech: ['Java', 'LibGDX', 'Game Development', 'OOP', 'Android'],
      url: 'https://github.com/MertP06/Deep-Dive',
      featured: false,
    },
    {
      name: 'Call Center Management System',
      description: {
        en: 'A collaborative team project developed during the mandatory internship at BTK. Contributed primarily to the Java backend and database architecture, integrating with a React frontend and PostgreSQL to manage customer records, call logs, and representative workflows.',
        tr: 'BTK zorunlu stajı kapsamında ekip çalışmasıyla geliştirilen çağrı merkezi yönetim sistemi. Müşteri kayıtları, çağrı geçmişi ve temsilci iş akışlarını yönetmek için ağırlıklı olarak Java backend ve PostgreSQL veritabanı mimarisinde yer alıp React arayüz entegrasyonu sağlandı.',
      },
      tech: ['Java', 'React', 'PostgreSQL', 'Git', 'RESTful API'],
      url: 'https://github.com/MertP06/Call-Center-Management-System',
      featured: true,
    },
    {
      name: 'Neural Network Apple Quality',
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
        en: 'Frontend Developer Intern (Erasmus+)',
        tr: 'Frontend Geliştirici Stajyer (Erasmus+)',
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
          'Completed a 60-day Erasmus+ internship focused purely on Frontend Web Development.',
          'Updated, modernized, and maintained the VCI project web application interface using React.',
          'Worked on responsive design, modern UI components, and state management.',
          'Used Git for version control and collaborative code reviews in an international research lab.',
        ],
        tr: [
          'Sadece Frontend Web Geliştirme odaklı 60 günlük Erasmus+ stajımı tamamladım.',
          'React kullanarak VCI araştırma projesinin web uygulaması arayüzünü güncelledim ve modernize ettim.',
          'Duyarlı tasarım (responsive), modern UI bileşenleri ve arayüz bakımı üzerine çalıştım.',
          'Uluslararası bir araştırma laboratuvarı ortamında Git ile versiyon yönetimi ve kod takibi sağladım.',
        ],
      },
      tags: ['React', 'JavaScript', 'Frontend', 'Git', 'Erasmus+'],
    },
    {
      role: {
        en: 'Software Engineering Intern (Backend / Team Project)',
        tr: 'Yazılım Mühendisliği Stajyeri (Backend / Ekip Projesi)',
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
          'Completed a 20-day mandatory internship working in a collaborative developer team.',
          'Contributed to the backend services of the Call Center Management System using Java.',
          'Designed and implemented relational database CRUD operations with PostgreSQL.',
          'Collaborated with team members to integrate backend APIs with the React web frontend.',
          'Managed project workflow, branching, and team collaboration using Git.',
        ],
        tr: [
          '20 günlük zorunlu stajımı yazılımcı bir ekip bünyesinde grup projesi olarak tamamladım.',
          'Çağrı Merkezi Yönetim Sistemi projesinin Java ile backend servislerinin geliştirilmesinde yer aldım.',
          'PostgreSQL ile ilişkisel veritabanı CRUD operasyonlarını ve veri yönetimini gerçekleştirdim.',
          'Backend servislerinin React arayüzü ile entegre çalışması sürecinde ekip içi koordinasyon sağladım.',
          'İş akışı, dal yönetimi (branching) ve versiyon kontrolü için Git kullandım.',
        ],
      },
      tags: ['Java', 'React', 'PostgreSQL', 'Git', 'Backend', 'Teamwork'],
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
