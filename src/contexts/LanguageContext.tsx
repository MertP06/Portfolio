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
  'home.intro': {
    en: "Hello, I'm Mert. Computer Engineer focusing on Full-Stack Development & modern web technologies. Experienced in collaborative backend development with Java and PostgreSQL at BTK, and dedicated Frontend development with React during my Erasmus internship at the University of Bonn.",
    tr: "Merhaba, ben Mert. Full-Stack Geliştirme ve modern web teknolojilerine odaklanan bir Bilgisayar Mühendisiyim. BTK stajımda bir ekip bünyesinde Java ve PostgreSQL ile backend süreçlerinde, Bonn Üniversitesi Erasmus stajımda ise React ile frontend geliştirme süreçlerinde yer aldım.",
  },
  'home.aboutBtn': { en: 'About Me', tr: 'Hakkımda' },
  'home.contactBtn': { en: 'Contact', tr: 'İletişim' },
  'home.metric.education': { en: 'Education', tr: 'Eğitim' },
  'home.metric.educationSub': { en: 'KTÜN', tr: 'KTÜN' },
  'home.metric.internships': { en: 'Internships', tr: 'Stajlar' },
  'home.metric.internshipsSub': { en: 'BTK & Uni Bonn', tr: 'BTK & Uni Bonn' },
  'home.metric.projects': { en: 'Projects', tr: 'Projeler' },

  // About Page
  'about.title': { en: 'About Me', tr: 'Hakkımda' },
  'about.p1': {
    en: "I am a Computer Engineer graduated from Konya Technical University. I focus on developing clean, functional, and scalable software solutions.",
    tr: "Konya Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum. Temiz, fonksiyonel ve ölçeklenebilir yazılım çözümleri geliştirmeye odaklanıyorum.",
  },
  'about.p2': {
    en: "Throughout my education, I completed two distinct internships: at BTK (Information and Communication Technologies Authority), I worked within a development team contributing to the Java backend and PostgreSQL database of a Call Center system integrated with React; while at the University of Bonn (Visual Computing Incubator), I spent 2 months as an Erasmus intern focusing specifically on Frontend web development using React and Git.",
    tr: "Öğrenim hayatım boyunca iki değerli staj deneyimi edindim: BTK bünyesinde yazılımcı bir ekip projesinde yer alarak React arayüzüyle entegre çalışan Çağrı Merkezi sisteminin Java backend ve PostgreSQL veritabanı süreçlerinde görev aldım; Bonn Üniversitesi'nde (Visual Computing Incubator) ise 2 aylık Erasmus stajımda sadece Frontend web geliştirmeye odaklanarak projenin web uygulamasını React ve Git ile güncelledim.",
  },
  'about.p3': {
    en: "I work with Java, React, TypeScript, and modern database systems. I am enthusiastic about writing reliable code and exploring new technologies.",
    tr: "Java, React, TypeScript ve modern veritabanı sistemleri üzerinde çalışıyorum. Güvenilir kod üretmek ve yeni teknolojileri keşfetmekten keyif alıyorum.",
  },
  'about.educationTitle': { en: 'Education', tr: 'Eğitim' },
  'about.languagesTitle': { en: 'Languages', tr: 'Diller' },
  'about.interestsTitle': { en: 'Interests', tr: 'İlgi Alanları' },

  // Skills Page
  'skills.title': { en: 'Skills', tr: 'Yetenekler' },
  'skills.description': {
    en: "Technologies and tools I work with",
    tr: 'Kullandığım teknolojiler ve araçlar',
  },
  'skills.languages': { en: 'Programming Languages', tr: 'Programlama Dilleri' },
  'skills.web': { en: 'Web & Backend Technologies', tr: 'Web & Backend Teknolojileri' },
  'skills.mobile': { en: 'Mobile Development', tr: 'Mobil Geliştirme' },
  'skills.database': { en: 'Database', tr: 'Veritabanı' },
  'skills.tools': { en: 'Tools & IDEs', tr: 'Araçlar & IDE\'ler' },
  'skills.spoken': { en: 'Languages', tr: 'Diller' },

  // Experience Page
  'experience.title': { en: 'Experience', tr: 'Deneyim' },
  'experience.description': {
    en: 'Work experience and education background',
    tr: 'İş deneyimi ve eğitim geçmişi',
  },
  'experience.workHeading': { en: 'Work Experience', tr: 'İş & Staj Deneyimi' },
  'experience.eduHeading': { en: 'Education', tr: 'Eğitim' },

  // Projects Page
  'projects.title': { en: 'Projects', tr: 'Projeler' },
  'projects.description': {
    en: "Projects I've worked on",
    tr: 'Geliştirdiğim projeler ve çalışmalar',
  },
  'projects.featured': { en: 'Featured', tr: 'Öne Çıkan' },
  'projects.privateRepo': { en: 'Private Repository (Academic / Research)', tr: 'Gizli Depo (Akademik / Araştırma)' },
  'projects.allGithub': {
    en: 'Visit my GitHub profile for all open-source projects',
    tr: "Açık kaynaklı projelerim için GitHub profilimi ziyaret edin",
  },

  // Contact Page
  'contact.title': { en: 'Contact', tr: 'İletişim' },
  'contact.description': {
    en: "Feel free to reach out to me",
    tr: 'Benimle iletişime geçebilirsiniz',
  },
  'contact.sendMessage': { en: 'Send a Message', tr: 'Mesaj Gönderin' },
  'contact.formDesc': {
    en: "Fill out the form below and I'll get back to you as soon as possible.",
    tr: 'Formu doldurun, en kısa sürede size dönüş yapayım.',
  },
  'contact.nameLabel': { en: 'Name', tr: 'Ad Soyad' },
  'contact.namePlaceholder': { en: 'Your Name', tr: 'Adınız Soyadınız' },
  'contact.emailLabel': { en: 'Email', tr: 'E-posta' },
  'contact.emailPlaceholder': { en: 'example@email.com', tr: 'ornek@email.com' },
  'contact.msgLabel': { en: 'Message', tr: 'Mesaj' },
  'contact.msgPlaceholder': { en: 'Write your message here...', tr: 'Mesajınızı buraya yazın...' },
  'contact.sendBtn': { en: 'Send Message', tr: 'Mesajı Gönder' },
  'contact.sending': { en: 'Sending...', tr: 'Gönderiliyor...' },
  'contact.sent': { en: 'Sent Successfully!', tr: 'Başarıyla Gönderildi!' },
  'contact.error': { en: 'An error occurred', tr: 'Bir hata oluştu' },
  'contact.locationTitle': { en: 'Location', tr: 'Konum' },
  'contact.socialTitle': { en: 'Social Media', tr: 'Sosyal Medya' },

  // Not Found
  'notfound.title': { en: 'Page Not Found', tr: 'Sayfa Bulunamadı' },
  'notfound.desc': {
    en: "The page you're looking for does not exist or has been moved.",
    tr: 'Aradığınız sayfa bulunamadı veya taşınmış olabilir.',
  },
  'notfound.backHome': { en: 'Return to Home', tr: 'Ana Sayfaya Dön' },

  // Spoken Language levels
  'lang.turkish': { en: 'Turkish', tr: 'Türkçe' },
  'lang.turkishLevel': { en: 'Native', tr: 'Ana Dil' },
  'lang.english': { en: 'English', tr: 'İngilizce' },
  'lang.englishLevel': { en: 'B1', tr: 'B1' },

  // Hobbies
  'hobby.music': { en: 'Music', tr: 'Müzik' },
  'hobby.gaming': { en: 'Gaming', tr: 'Oyun' },
  'hobby.travel': { en: 'Travel', tr: 'Seyahat' },
  'hobby.cinema': { en: 'Movies & TV Shows', tr: 'Film & Dizi' },
  'hobby.tech': { en: 'Technology', tr: 'Teknoloji' },
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
