import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import preact from '@preact/preset-vite'

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    "name": "Prudoo List",
    "short_name": "Prudoo List",
    "description": "Simple todo list using Preact and localStorage",
    "icons": [
      {
        src: "/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    "theme_color": "#643cbc",
    "background_color": "#ffffff",
    "display": "standalone",
    "scope": "/",
    "start_url": "/"
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    preact(),
    VitePWA(manifestForPlugin),
  ],
})
