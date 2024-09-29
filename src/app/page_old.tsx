"use client"
import { getGoogleAuthUrl } from "@/utils/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Link from "next/link";

export default function Component() {
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [pin, setPin] = useState("")

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await axios.get(`/authorize?pin=${pin}`)
    } catch (e) {
      setStatus("error")
      return
    }
    const url = getGoogleAuthUrl(pin)
    router.push(url)
  }

  return (
      <main
          className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#0f0f0f] relative overflow-hidden">
        {/* Gradient backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
              className="absolute top-1/4 left-1/4 w-[700px] h-[400px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full filter blur-[80px] opacity-70 animate-pulse"></div>
          <div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-full filter blur-[100px] opacity-70 animate-pulse animation-delay-2000"></div>
          <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full filter blur-[120px] opacity-70 animate-pulse animation-delay-4000"></div>
          <div
              className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-gradient-to-bl from-teal-400/25 to-emerald-500/25 rounded-full filter blur-[70px] opacity-75 animate-pulse animation-delay-6000"></div>
          <div
              className="absolute bottom-1/1 right-1/3 w-[1850px] h-[1450px] bg-gradient-to-tl from-cyan-400/10 to-blue-500/10 rounded-full filter blur-[90px] opacity-10"></div>
          <div
              className="absolute bottom-1/1 left-1/3 w-[1850px] h-[1450px] bg-gradient-to-tl from-purple-400/40 to-red-500/20 rounded-full filter blur-[90px] opacity-20"></div>

        </div>

        {/* Glass-like modal */}
        <div
            className="w-full max-w-md bg-black/60 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden relative z-10">
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
              Autenticar tu Kodi
            </h2>
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <input
                    id="pin"
                    type="text"
                    placeholder="Ingresa tu PIN"
                    className="w-full px-3 py-2 bg-black/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 backdrop-blur-sm"
                    onChange={(e) => {
                      setStatus("idle")
                      setPin(e.target.value)
                    }}
                />
                {status === "error" && (
                    <p className="mt-2 mb-3 px-1 text-sm text-red-400">PIN inválido</p>
                )}
              </div>
              <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-md shadow-md hover:from-teal-500 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  disabled={status === "loading"}
              >
              <span className="relative z-10">
                {status === "loading" ? "Cargando..." : "Continuar"}
              </span>
                <div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </button>
            </form>
          </div>
          <div className="px-6 py-4 bg-black/10 backdrop-blur-sm flex justify-between text-sm text-gray-300">
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Términos de uso</Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Política de
              privacidad</Link>
          </div>
        </div>
      </main>
  )
}