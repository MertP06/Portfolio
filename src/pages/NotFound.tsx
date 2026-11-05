import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 font-mono">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-neutral-100">
        {t('notfound.title')}
      </h1>
      <p className="mt-3 max-w-xl text-sm text-neutral-400">
        {t('notfound.desc')}
      </p>
      <Link
        className="mt-6 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
        to="/"
      >
        {t('notfound.backHome')}
      </Link>
    </section>
  )
}
