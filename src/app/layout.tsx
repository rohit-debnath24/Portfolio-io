import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import GridOverlay from '@/components/GridOverlay'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Martian Developer | Creative Full-Stack Engineer & Designer',
  description: 'Product development and creative frontend engineering showcasing interactive retro-futuristic interfaces and custom systems.',
  keywords: ['developer', 'designer', 'portfolio', 'full-stack', 'React', 'Next.js', 'TypeScript', 'Evil Martians', 'Creative Coding', 'WebGL'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Martian Portfolio',
    title: 'Martian Developer | Creative Full-Stack Engineer & Designer',
    description: 'Immersive digital products, strategy-led UI/UX designs, and clean custom code.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martian Developer | Creative Full-Stack Engineer & Designer',
    description: 'Immersive digital products, strategy-led UI/UX designs, and clean custom code.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#040806',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} custom-cursor-active`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col text-[#f4fff8] selection:bg-[#00ff88] selection:text-black antialiased relative">
        <GridOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}