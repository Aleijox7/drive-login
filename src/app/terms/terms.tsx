import { siteConfig } from '@/config/siteConfig'
import Link from 'next/link'
import {Film, Home} from 'lucide-react'
import { Button } from "@/components/ui/button"
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Footer from "@/components/Footer";

export default function Terms() {
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
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Inicio</span>
                        </Link>
                    </Button>
                    <LocaleSwitcher/>
                </nav>
            </header>
            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-2 text-center">Términos y Condiciones de Uso</h1>
                <p className="text-right text-sm text-gray-400 mb-8">Última Actualización: {siteConfig.lastUpdated}</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Introducción</h2>
                        <p>Bienvenido a {siteConfig.appName}. Al utilizar nuestra integración con Google Drive, aceptas
                            estos Términos y Condiciones. Te recomendamos leerlos atentamente antes de utilizar el
                            servicio.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Descripción del Servicio</h2>
                        <p>{siteConfig.appName} permite a los usuarios acceder y gestionar sus archivos de Google Drive
                            desde la interfaz de Kodi mediante OAuth 2.0. Este proceso permite a los usuarios autenticar
                            su cuenta de Google y obtener acceso seguro a Google Drive sin
                            que {siteConfig.appName} almacene ninguna información personal o sensible.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Proceso de Autenticación</h2>
                        <p>El proceso de autenticación se realiza de la siguiente manera:</p>
                        <ol className="list-decimal list-inside ml-4 mt-4 space-y-2">
                            <li>{siteConfig.appName} genera un código único que se debe ingresar en nuestro sitio web.
                            </li>
                            <li>El usuario inicia sesión con su cuenta de Google a través del sistema de OAuth 2.0 de
                                Google.
                            </li>
                            <li>Una vez completada la autenticación, {siteConfig.appName} transfiere las credenciales de
                                acceso directamente al cliente de Kodi.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Recopilación y Uso de
                            Información</h2>
                        <p>{siteConfig.appName} no almacena ni guarda ninguna información sensible del usuario, como
                            tokens de acceso, credenciales de Google o cualquier otro dato personal. Todos los datos
                            relacionados con la autenticación son transmitidos directamente al cliente de Kodi, donde se
                            almacenan únicamente de manera local.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Limitaciones de
                            Responsabilidad</h2>
                        <p>{siteConfig.appName} no se hace responsable del almacenamiento, seguridad o manejo de las
                            credenciales dentro del cliente de Kodi. Recomendamos a los usuarios tomar las medidas de
                            seguridad adecuadas para proteger su dispositivo y la información almacenada localmente.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Seguridad</h2>
                        <p>Aunque {siteConfig.appName} no almacena información sensible del usuario, implementamos
                            medidas de seguridad razonables para asegurar que la transmisión de datos entre nuestro
                            servidor y el cliente de Kodi sea segura y esté protegida contra accesos no autorizados.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Revocación de Acceso</h2>
                        <p>Puedes revocar el acceso de {siteConfig.appName} a tu cuenta de Google en cualquier momento
                            desde la configuración de seguridad de tu cuenta de Google. Esto impedirá que el cliente de
                            Kodi acceda a Google Drive.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Modificaciones a estos
                            Términos</h2>
                        <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los
                            cambios se publicarán en esta página, y es responsabilidad del usuario revisar estos
                            términos periódicamente.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Contacto</h2>
                        <p>Si tienes preguntas sobre estos Términos y Condiciones o sobre el proceso de autenticación,
                            puedes contactarnos en {siteConfig.contactEmail}.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}