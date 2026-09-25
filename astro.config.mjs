// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // TODO: confermare il dominio definitivo con il cliente
  site: 'https://sunsetbarcarello.it',
  adapter: vercel(),
  redirects: {
    '/menu': { destination: 'https://www.gofoodmenu.it/sunset-barcarello', status: 302 },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
