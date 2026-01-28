import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-neutral-100">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 max-w-xl text-sm text-neutral-300">
        Aradığınız sayfa taşınmış olabilir. Ana sayfaya dönerek gezinmeye devam
        edebilirsiniz.
      </p>
      <Link
        className="mt-6 rounded-full bg-neutral-100 px-5 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
        to="/"
      >
        Ana sayfaya dön
      </Link>
    </section>
  )
}
