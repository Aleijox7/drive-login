'use client'

import {useState, useEffect, FormEvent} from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {CheckCircle, Copy, ExternalLink, RefreshCw, Film, Home} from "lucide-react"
import Link from "next/link"
import { siteConfig } from '@/config/siteConfig'
import LocaleSwitcher from "@/components/LocaleSwitcher"
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {getGoogleAuthUrl} from "@/utils/auth";

export default function DashboardPage() {
    const [pin, setPin] = useState('')
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [refreshToken, setRefreshToken] = useState<string | null>(null)
    const [expiresIn, setExpiresIn] = useState<number | null>(null)
    const [copiedToken, setCopiedToken] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const oauthCookie = document.cookie.split(';').find(c => c.trim().startsWith('oauth='));
        if (!oauthCookie) {
            // Si no hay cookie de OAuth, redirigir a la página de inicio
            window.location.href = '/'
            return
        }
        // before using json parse, we need to get the value of the cookie and format it as a json object
        const oauthData = JSON.parse(decodeURIComponent(oauthCookie.split('=')[1]))
        setAccessToken(oauthData.access_token)
        setRefreshToken(oauthData.refresh_token)
        setExpiresIn(oauthData.expires_in)

        const pinCookie = document.cookie.split(';').find(c => c.trim().startsWith('pin='));
        if (pinCookie) {
            setPin(pinCookie.split('=')[1])
        }
    }, [])

    const handlePinSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await fetch('/kodi-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pin })
            });
            const data = await response.json();

            if (response.ok) {
                if (data.redirect) {
                    window.location.href = data.redirect;
                } else {
                    console.log('PIN verificado correctamente:', data);
                    console.log('URL Redirect:', data.redirect);
                }
            } else {
                setError(data.message || 'Error al verificar el PIN');
            }
        } catch (err) {
            setError('Error de conexión. Por favor, intenta de nuevo.');
        }
    };

    const handleCopyToken = () => {
        if (accessToken) {
            navigator.clipboard.writeText(accessToken)
            setCopiedToken(true)
            setTimeout(() => setCopiedToken(false), 3000)
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-gray-100">
            <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-800">
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
            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Conexión exitosa con Google Drive</h1>

                <Alert className="mb-6 bg-gray-950 border border-blue-400">
                    <CheckCircle className="h-4 w-4 text-blue-400"/>
                    <AlertTitle className="text-blue-400">Autenticación completada</AlertTitle>
                    <AlertDescription className="text-white">
                        Has iniciado sesión correctamente en tu cuenta de Google Drive.
                    </AlertDescription>
                </Alert>

                <Card className="mb-6 bg-gray-950 border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-blue-400">Ingresa el PIN de Kodi</CardTitle>
                        <CardDescription>Introduce el PIN generado por Kodi para obtener tus tokens de acceso</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handlePinSubmit} className="space-y-4">
                            <Input
                                type="text"
                                placeholder="PIN de Kodi"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="bg-gray-900 border-gray-700 text-gray-100"
                            />
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Verificar PIN
                            </Button>
                        </form>
                        {error && (
                            <Alert className="mt-4 bg-red-900 border-red-700">
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                    </CardContent>
                </Card>

                <Card className="mb-6 bg-gray-950 border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-blue-400">Información de acceso</CardTitle>
                        <CardDescription className="text-white">Utiliza esta información para configurar el add-on de Kodi</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-gray-300">Token de acceso:</p>
                                <div className="flex items-center mt-1">
                                    <code className="bg-black p-2 rounded flex-1 overflow-x-auto text-blue-300">
                                        {accessToken}
                                    </code>
                                    <Button variant="outline" size="icon"
                                            className="ml-2 bg-gray-900 hover:bg-gray-800 border-gray-700"
                                            onClick={handleCopyToken}>
                                        <Copy className="h-4 w-4"/>
                                    </Button>
                                </div>
                                {copiedToken &&
                                    <p className="text-sm text-green-400 mt-1">¡Copiado al portapapeles!</p>}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-300">Token de actualización:</p>
                                <code className="bg-black p-2 rounded block overflow-x-auto text-blue-300">
                                    {refreshToken}
                                </code>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-300">Expira en:</p>
                                <p className="text-white">{expiresIn} segundos</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline"
                                className="w-full bg-gray-900 hover:bg-gray-800 text-gray-100 border-gray-700">
                            <RefreshCw className="mr-2 h-4 w-4"/> Actualizar tokens
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="bg-gray-950 border-gray-800">
                    <CardHeader>
                        <CardTitle className="text-blue-400">Próximos pasos</CardTitle>
                        <CardDescription>Sigue estas instrucciones para completar la configuración en Kodi</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal list-inside space-y-4 text-gray-300">
                            <li>Abre Kodi en tu dispositivo</li>
                            <li>Ve a &quot;Complementos&quot; y selecciona &quot;Instalar desde repositorio&quot;</li>
                            <li>Busca y selecciona el complemento &quot;Google Drive para Kodi&quot;</li>
                            <li>En la configuración del complemento, introduce el token de acceso y el token de
                                actualización
                            </li>
                            <li>Guarda la configuración y reinicia Kodi si es necesario</li>
                        </ol>
                    </CardContent>
                    <CardFooter>
                        <Link href="https://kodi.wiki/view/Add-on:Google_Drive" target="_blank"
                              rel="noopener noreferrer">
                            <Button variant="link" className="text-blue-400 hover:text-blue-300">
                                Ver documentación de Kodi <ExternalLink className="ml-2 h-4 w-4"/>
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
            <Footer/>
        </div>
    )
}