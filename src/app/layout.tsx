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
  title: 'Developer | Creative Full-Stack Engineer & Designer',
  description: 'AI-powered, high-performance portfolio showcasing immersive digital products, strategy-led UI/UX designs, and clean custom code.',
  keywords: ['developer', 'designer', 'portfolio', 'full-stack', 'React', 'Next.js', 'TypeScript', 'Creative Coding', 'WebGL'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Developer Portfolio',
    title: 'Developer | Creative Full-Stack Engineer & Designer',
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
    title: 'Developer | Creative Full-Stack Engineer & Designer',
    description: 'Immersive digital products, strategy-led UI/UX designs, and clean custom code.',
    images: ['/og-image.jpg'],
  },
  // Icons and manifest removed to prevent router resolution errors during development
}

export const viewport: Viewport = {
  themeColor: '#040508',
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
      <body className="min-h-screen flex flex-col bg-[#040508] text-white selection:bg-[#00ff88] selection:text-black antialiased relative">
        <GridOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}