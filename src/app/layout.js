import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rajdeep Chatterjee | Full-Stack Developer & Software Engineer',
  description: 'Full Stack Developer & Java Enthusiast. Specializing in React, Next.js, Node.js, and scalable web solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased selection:bg-blue-600/20 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  )
}

