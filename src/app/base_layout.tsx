import { ReactNode } from 'react'
import Head from 'next/head'
import { siteConfig } from '@/config/siteConfig'

interface LayoutProps {
  children: ReactNode
  title: string
  description: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
      <div className="min-h-screen bg-[#0f0f0f] relative overflow-hidden">
        <Head>
          <title>{title} - {siteConfig.appName}</title>
          <meta name="description" content={description} />
        </Head>

        {/* Gradient backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full filter blur-[80px] opacity-60 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-full filter blur-[100px] opacity-50 animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full filter blur-[120px] opacity-40 animate-pulse-slow animation-delay-4000"></div>
          <div className="absolute top-3/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-bl from-teal-400/25 to-emerald-500/25 rounded-full filter blur-[70px] opacity-55 animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-cyan-400/20 to-blue-500/20 rounded-full filter blur-[90px] opacity-45 animate-pulse-slow animation-delay-3000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/20">
            <div className="p-6 space-y-6">
              {children}
            </div>
          </div>
        </div>
      </div>
  )
}