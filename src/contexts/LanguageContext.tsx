import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'en' | 'tr'

type Translations = Record<string, Record<Lang, string>>

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', tr: 'Ana Sayfa' },
  'nav.about': { en: 'About', tr: 'Hakkımda' },
  'nav.skills': { en: 'Skills', tr: 'Yetenekler' },
  'nav.projects': { en: 'Projects', tr: 'Projeler' },
  'nav.experience': { en: 'Experience', tr: 'Deneyim' },
  'nav.contact': { en: 'Contact', tr: 'İletişim' },

  // Home Page
  'home.role': { en: 'Computer Engineer', tr: 'Bilgisayar Mühendisi' },
  'home.intro1': {
    en: "Hello! I'm Mert. I graduated with a degree in Computer Engineering from Konya Technical University.",
    tr: "Merhaba! Ben Mert. Konya Teknik Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum.",
  },
  'home.intro2': {
    en: "I completed a 60-day Erasmus internship at the University of Bonn, updating and developing the web application for the Visual Computing Incubator (VCI) project using React and Git.",
    tr: "Bonn Üniversitesi'nde 60 günlük Erasmus stajımı tamamladım; React ve Git kullanarak Visual Computing Incubator (VCI) projesinin web uygulamasını güncelleyip geliştirdim.",
  },
  'home.aboutBtn': { en: 'About Me', tr: 'Hakkımda' },
  'home.contactBtn': { en: 'Contact', tr: 'İletişim' },
  'home.metric.education': { en: 'Education', tr: 'Eğitim' },
  'home.metric.educationSub': { en: 'KTÜN Graduate', tr: 'KTÜN Mezun' },
  'home.metric.internships': { en: 'Internships', tr: 'Stajlar' },
  'home.metric.internshipsSub': { en: 'BTK & Uni Bonn', tr: 'BTK & Uni Bonn' },
  'home.metric.projects': { en: 'Projects', tr: 'Projeler' },

  // About Page
  'about.title': { en: 'About Me', tr: 'Hakkımda' },
  'about.p1': {
    en: "I am a Computer Engineer graduated from Konya Technical University (Class of 2026).",
    tr: "Konya Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum (2026).",
  },
  'about.p2': {
    en: "During my 60-day Erasmus+ internship (July 1 – September 1, 2026) at Rheinische Friedrich-Wilhelms-Universität Bonn, I contributed to the Visual Computing Incubator (VCI) by updating and maintaining their modern web application with React and Git.",
    tr: "Rheinische Friedrich-Wilhelms-Universität Bonn bünyesindeki Visual Computing Incubator (VCI) projesinde 60 günlük Erasmus+ stajım (1 Temmuz – 1 Eylül 2026) boyunca, projenin modern web uygulamasını React ve Git teknolojileriyle güncelledim ve geliştirdim.",
  },
  'about.p3': {
    en: "I specialize in Java, web technologies (React, TypeScript, modern frontend), and database systems. I enjoy solving real-world engineering problems and continuously learning new technologies.",
    tr: "Java, modern web teknolojileri (React, TypeScript) ve veritabanı sistemleri üzerine yoğunlaşıyorum. Gerçek dünya problemlerini çözmeyi ve yeni teknolojiler öğrenmeyi seviyorum.",
  },
  'about.educationTitle': { en: 'Education & Academic Background', tr: 'Eğitim & Akademik Geçmiş' },
  'about.languagesTitle': { en: 'Languages', tr: 'Diller' },
  'about.interestsTitle': { en: 'Interests', tr: 'İlgi Alanları' },

  // Skills Page
  'skills.title': { en: 'Skills & Technologies', tr: 'Yetenekler & Teknolojiler' },
  'skills.description': {
    en: "Technologies, tools, and programming languages I actively work with",
    tr: 'Aktif olarak çalıştığım ve kullandığım teknolojiler, araçlar ve diller',
  },
  'skills.languages': { en: 'Programming Languages', tr: 'Programlama Dilleri' },
  'skills.web': { en: 'Web Technologies & Frameworks', tr: 'Web Teknolojileri & Kütüphaneler' },
  'skills.database': { en: 'Databases & Storage', tr: 'Veritabanları' },
  'skills.tools': { en: 'Developer Tools & Platforms', tr: 'Geliştirici Araçları & Platformlar' },
  'skills.spoken': { en: 'Spoken Languages', tr: 'Yabancı Diller' },

  // Experience Page
  'experience.title': { en: 'Experience', tr: 'Deneyim' },
  'experience.description': {
    en: 'Professional internships and educational milestones',
    tr: 'Staj deneyimleri ve eğitim kilometre taşları',
  },
  'experience.workHeading': { en: 'Work & Internship Experience', tr: 'İş & Staj Deneyimi' },
  'experience.eduHeading': { en: 'Education', tr: 'Eğitim' },

  // Projects Page
  'projects.title': { en: 'Projects', tr: 'Projeler' },
  'projects.description': {
    en: 'A selection of software and research projects I have developed',
    tr: 'Geliştirdiğim yazılım ve araştırma projelerinden seçmeler',
  },
  'projects.featured': { en: 'Featured', tr: 'Öne Çıkan' },
  'projects.allGithub': {
    en: 'View all repositories on GitHub',
    tr: "GitHub'daki tüm depolarımı görüntüle",
  },

  // Contact Page
  'contact.title': { en: 'Contact', tr: 'İletişim' },
  'contact.description': {
    en: "Let's get in touch for collaborations, opportunities, or questions",
    tr: 'İş birliği, fırsatlar veya sorularınız için iletişime geçebilirsiniz',
  },
  'contact.sendMessage': { en: 'Send a Message', tr: 'Mesaj Gönderin' },
  'contact.formDesc': {
    en: "Fill out the form below and I will get back to you promptly.",
    tr: 'Aşağıdaki formu doldurun, en kısa sürede size geri dönüş yapayım.',
  },
  'contact.nameLabel': { en: 'Name', tr: 'Ad Soyad' },
  'contact.namePlaceholder': { en: 'Your Name', tr: 'Adınız Soyadınız' },
  'contact.emailLabel': { en: 'Email', tr: 'E-posta' },
  'contact.emailPlaceholder': { en: 'example@email.com', tr: 'ornek@email.com' },
  'contact.msgLabel': { en: 'Message', tr: 'Mesajınız' },
  'contact.msgPlaceholder': { en: 'Write your message here...', tr: 'Mesajınızı buraya yazın...' },
  'contact.sendBtn': { en: 'Send Message', tr: 'Mesajı Gönder' },
  'contact.sending': { en: 'Sending...', tr: 'Gönderiliyor...' },
  'contact.sent': { en: 'Sent Successfully!', tr: 'Başarıyla Gönderildi!' },
  'contact.error': { en: 'Something went wrong', tr: 'Bir hata oluştu' },
  'contact.locationTitle': { en: 'Location', tr: 'Konum' },
  'contact.socialTitle': { en: 'Social Profiles', tr: 'Sosyal Medya' },

  // Not Found
  'notfound.title': { en: 'Page Not Found', tr: 'Sayfa Bulunamadı' },
  'notfound.desc': {
    en: "The page you're looking for does not exist or has been moved.",
    tr: 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
  },
  'notfound.backHome': { en: 'Back to Home', tr: 'Ana Sayfaya Dön' },

  // Spoken Language levels
  'lang.turkish': { en: 'Turkish', tr: 'Türkçe' },
  'lang.turkishLevel': { en: 'Native', tr: 'Ana Dil' },
  'lang.english': { en: 'English', tr: 'İngilizce' },
  'lang.englishLevel': { en: 'Professional / B1', tr: 'Mesleki / B1' },

  // Hobbies
  'hobby.music': { en: 'Music', tr: 'Müzik' },
  'hobby.gaming': { en: 'Gaming', tr: 'Oyun' },
  'hobby.travel': { en: 'Travel', tr: 'Seyahat' },
  'hobby.cinema': { en: 'Movies & TV Series', tr: 'Sinema & Dizi' },
  'hobby.tech': { en: 'Emerging Tech', tr: 'Yeni Teknolojiler' },
}

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('portfolio_lang') as Lang
    if (saved === 'en' || saved === 'tr') return saved
    // Default to Turkish or English based on browser
    return navigator.language.startsWith('tr') ? 'tr' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
  }

  const toggleLang = () => {
    setLangState((prev) => (prev === 'en' ? 'tr' : 'en'))
  }

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
