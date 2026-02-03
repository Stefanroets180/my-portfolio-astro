/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray: {
					0: 'var(--gray-0)',
					50: 'var(--gray-50)',
					100: 'var(--gray-100)',
					200: 'var(--gray-200)',
					300: 'var(--gray-300)',
					400: 'var(--gray-400)',
					500: 'var(--gray-500)',
					600: 'var(--gray-600)',
					700: 'var(--gray-700)',
					800: 'var(--gray-800)',
					900: 'var(--gray-900)',
					999: 'var(--gray-999)',
				},
				accent: {
					light: 'var(--accent-light)',
					regular: 'var(--accent-regular)',
					dark: 'var(--accent-dark)',
					overlay: 'var(--accent-overlay)',
					'subtle-overlay': 'var(--accent-subtle-overlay)',
					'text-over': 'var(--accent-text-over)',
				},
			},
			fontFamily: {
				system: 'var(--font-system)',
				body: 'var(--font-body)',
				brand: 'var(--font-brand)',
			},
			fontSize: {
				sm: 'var(--text-sm)',
				base: 'var(--text-base)',
				md: 'var(--text-md)',
				lg: 'var(--text-lg)',
				xl: 'var(--text-xl)',
				'2xl': 'var(--text-2xl)',
				'3xl': 'var(--text-3xl)',
				'4xl': 'var(--text-4xl)',
				'5xl': 'var(--text-5xl)',
			},
			backgroundImage: {
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-accent-orange': 'var(--gradient-accent-orange)',
				'gradient-stroke': 'var(--gradient-stroke)',
			},
			boxShadow: {
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
			},
			transitionDuration: {
				'theme': 'var(--theme-transition)',
			},
		},
	},
	plugins: [],
}
