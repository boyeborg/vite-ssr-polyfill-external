import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import plugin from './plugin'

export default {
  plugins: [react(), ssr(), plugin()]
}
