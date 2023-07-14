/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme:{
      colors:{
        'facebook':'#1877f2',
      },
      extend: {
        height: {
          screen: ['20px /* fallback for Opera, IE and etc. */', '100dvh'],
          'h-68':'17rem',
        }
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [      
    require('@tailwindcss/aspect-ratio'),
] ,
}
