
import { defineConfig } from 'vituum'

import glsl from 'vite-plugin-glsl'
import pug from '@vituum/pug'

export default defineConfig({
  integrations: [
    pug()
  ],
  plugins: [
    glsl()
  ],
  templates: {
    format: 'pug'
  },
  imports: {
    filenamePattern: {
      '+.css': false,
      '+.scss': false
    }
  }
})
