/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#15803d",
					focus: "#14532d",
				},
				/* text body base content bg opacity 80 */
				secondary: {
					DEFAULT: "#44403c",
					focus: "#78716c",
				},
				/* to make bg subtle, use bg opacity 0.1 */
				base: {
					200: "#f9fafb",
					300: "#ced3d9",
					content: "#1e2734",
					secondary: "#6b7280",
				},
				info: "#0ea5e9",
				success: "#198754 ",
				warning: "#eab308",
				error: "#dc2626",
				muted: "#4b5563",
				gray: {
					dark: "#27272a",
				},
			},
		},
	},
	plugins: [],
	darkMode: "false",
};
