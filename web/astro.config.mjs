// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// URL pública del sitio (canonical y Open Graph). Configúrala en PUBLIC_SITE_URL al desplegar.
const { PUBLIC_SITE_URL } = loadEnv(import.meta.env?.MODE ?? 'production', new URL('.', import.meta.url).pathname, '');

export default defineConfig({
  site: PUBLIC_SITE_URL || undefined,
  output: 'static',
});
