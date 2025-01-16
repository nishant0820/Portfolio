import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: 'JetBrains Mono, system-ui, sans-serif',
		},
  		colors: {
			bodyColor: '#1c1c22',
			lightSky: '#00ff99',
			hoverColor: '#00e187',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
