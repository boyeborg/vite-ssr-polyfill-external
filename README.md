See: [Vite plugin isn't evaluated during SSR in dev mode](https://github.com/vitejs/vite/issues/10261)

# Steps to Reproduce

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

It should say `REPLACED` in the center h1 on the index page. However, if you view page source (what the server sent you), you'll see that it says `qVNuxEd35_9iOAyAr1en9` (not exactly, but a similar string). Hence, the the plugin (`plugin.js`) that polyfills nanoid isn't evaluated during SSR. You can also see react complaining about it in the browser console.

If you run the production version of the app (`npm run build` and then `npm run preview`), you'll see that the plugin **is** evaluated during SSR (i.e. it says `REPLACED` everywhere, also during SSR). So it seems it's only a problem in dev mode.

You'll also see similar results in the server console output.
