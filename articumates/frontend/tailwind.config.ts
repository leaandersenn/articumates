import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  modernMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: [
    nextui({ 
      themes: {
        light: {
          layout: {},
          colors: {} 
        },
        dark: {
          layout: {}, 
          colors: {
            primary: {
              50: '#8794B2',
              100: '#8794B2',
              200: '#1F366F',
              900: '#FEECFE',
              DEFAULT: '#ffff',
            },
          }
 
        },
        modern: { 
          colors: {
            background: '#0D001A',
            foreground: '#c031e2',
            primary: {
              50: '#8794B2',
              100: '#8794B2',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#FFFFFF',
              foreground: '#DD62ED'
            },
            focus: '#F182F6'
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            }
          }
        }
      }
    })
  ]
}
export default config