"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {CheckCircle, Home, ExternalLink, Film} from "lucide-react"
import Link from "next/link"
import { siteConfig } from '@/config/siteConfig'
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Footer from "@/components/Footer";

export default function AuthenticationSuccess() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-neutral-100">
            <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-neutral-800">
                <Link className="flex items-center justify-center" href="/">
                    <Film className="h-6 w-6 mr-2 text-blue-400"/>
                    <span className="font-bold text-blue-400">{siteConfig.appName}</span>
                </Link>
                <nav className="flex items-center gap-4 sm:gap-6">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/" className="text-white hover:text-black">
                            <Home className="h-5 w-5"/>
                            <span className="sr-only">Inicio</span>
                        </Link>
                    </Button>
                    <LocaleSwitcher/>
                </nav>
            </header>
            <main className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
                <Card className="w-full max-w-md bg-neutral-950 border-neutral-800">
                    <CardHeader>
                        <div className="flex items-center justify-center mb-4">
                            <CheckCircle className="h-12 w-12 text-green-500"/>
                        </div>
                        <CardTitle className="text-2xl font-bold text-center text-blue-400">
                            Autenticación Exitosa
                        </CardTitle>
                        <CardDescription className="text-center text-neutral-400">
                            Tu cuenta de Google Drive ha sido vinculada correctamente con Kodi.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="mb-4 text-neutral-100">
                            Ya puedes volver a Kodi. Tu sesión debería estar iniciada automáticamente.
                        </p>
                        <p className="text-sm text-neutral-400">
                            Si encuentras algún problema, por favor reinicia Kodi e intenta acceder a tu contenido de
                            Google Drive nuevamente.
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4"/> Volver al Inicio
                            </Link>
                        </Button>
                        <Button variant="outline"
                                className="w-full bg-neutral-900 hover:bg-neutral-800 text-neutral-100 hover:text-neutral-250 border-neutral-700" asChild>
                            <Link href="https://kodi.wiki/view/Add-on:Google_Drive" target="_blank"
                                  rel="noopener noreferrer">
                                Ver Documentación de Kodi <ExternalLink className="ml-2 h-4 w-4"/>
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </main>
            <Footer/>
        </div>
    )
}