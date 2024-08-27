"use client"

import { useRouter } from "next/navigation"
import Layout from '@/app/base_layout'
import { Home } from 'lucide-react'

export default function SuccessPage() {
    const router = useRouter()

    return (
        <Layout
            title="Autenticación Exitosa"
            description="Tu Kodi ha sido autenticado exitosamente con Google Drive"
        >
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-6">¡Autenticación Exitosa!</h1>
                <p className="text-xl text-gray-300 mb-8">Tu Kodi ha sido conectado exitosamente con Google Drive.</p>
                <button
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-md shadow-md hover:from-teal-500 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    onClick={() => router.push("/")}
                >
                    <Home className="mr-2 h-5 w-5" />
                    <span>Volver al Inicio</span>
                </button>
            </div>
        </Layout>
    )
}