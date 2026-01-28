module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(255, 255, 255, 0.18)',
        soft: '0 25px 70px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'grid-muted':
          'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 55%)',
      },
    },
  },
  plugins: [],
}
