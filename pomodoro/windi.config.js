// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    extract: {
        include: ['index.html', 'src/**/*.{vue,js,ts,jsx,tsx}'],
    },
    theme: {
        extend: {},
    },
    plugins: [],
})
