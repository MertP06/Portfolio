import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: repo adından base path (örn. /website/). .github.io repo ise /.
// Local/build: GITHUB_REPOSITORY yoksa / kullan.
function getBase() {
  if (process.env.NODE_ENV !== 'production') return '/'
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repo) return '/'
  return repo.endsWith('.github.io') ? '/' : `/${repo}/`
}

export default defineConfig({
  base: getBase(),
  plugins: [react(), tailwindcss()],
})
