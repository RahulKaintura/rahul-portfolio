# Rahul's React portfolio

## Run in VS Code
1. Install Node.js (22 LTS recommended).
2. Extract the ZIP and open the rahul-portfolio folder in VS Code.
3. Open Terminal > New Terminal. Run `npm install`, then `npm run dev`.
4. Open the local URL printed by Vite. Stop with Ctrl+C.
5. For production run `npm run build`, then `npm run preview` to check the build.

## Customize
- `src/data.js`: profile, skills, project descriptions, confirmed repository and demo URLs. Add `repo: 'https://github.com/...'` to individual projects only after checking the URL.
- `src/App.jsx`: page sections and content.
- `src/styles.css`: layout, CSS variables, colors, responsive rules.
- `public/resume.pdf`: replace with a public-safe resume before deploying. The supplied PDF contains a phone number and email; remove anything you do not wish to publish.
- `index.html`: browser title and description.

No backend, API keys, or environment variables required. Contact uses mailto; it does not send messages from the site. Coding statistics are manually maintained, not live API data. Missing project links are intentionally hidden.

## Study order
1. main.jsx: DOM mounting, JSX, StrictMode.
2. data.js and ProjectCard: modules, props, map, keys and conditional rendering.
3. App: state, event handlers, filtering and derived values.
4. Navbar: responsive menu, conditional classes, lifting state via props.
5. Theme: useEffect, browser localStorage, CSS custom properties.
6. useTyping: custom hooks, timers, effect dependencies and cleanup.
7. CSS: grid, flexbox, media queries and accessibility.
8. Vite: dev server, production bundle and deployment.
