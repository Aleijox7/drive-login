import { siteConfig } from '@/config/siteConfig'
import Link from 'next/link'
import { Film, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function PrivacyPolicy() {
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
            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-2 text-center">Política de Privacidad</h1>
                <p className="text-right text-sm text-neutral-400 mb-8">Última Actualización: {siteConfig.lastUpdated}</p>

                <div className="space-y-8">
                    <p>
                        En {siteConfig.appName}, respetamos su privacidad y estamos comprometidos a protegerla.
                        Esta política describe cómo manejamos la información personal que pueda ser proporcionada a
                        través del uso de nuestro servicio.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Información que Recopilamos</h2>
                        <p>{siteConfig.appName} recopila información relacionada con tu cuenta de Google, como tu perfil y acceso a Google Drive, Google Photos y la biblioteca de fotos. Esto incluye la obtención de permisos para leer archivos en Google Drive y fotos en Google Photos.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Uso de la Información</h2>
                        <p>Utilizamos la información proporcionada por Google exclusivamente para autenticar tu acceso a Google Drive y Google Photos desde el cliente de Kodi. No accedemos ni almacenamos datos adicionales fuera de los archivos necesarios para la integración.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Seguridad de la Información</h2>
                        <p>Implementamos medidas de seguridad razonables, como la encriptación de datos en tránsito y el uso de protocolos seguros (HTTPS), para proteger la información que se transmite entre nuestros servidores y Google. No almacenamos información personal en nuestros servidores, y los datos sensibles, como tokens de autenticación, se mantienen encriptados.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Derechos de los Usuarios</h2>
                        <p>Como usuario, puedes revocar en cualquier momento el acceso de {siteConfig.appName} a tu cuenta de Google desde la configuración de seguridad de tu cuenta de Google. Esto eliminará nuestra capacidad para acceder a tu información de Google Drive y Google Photos.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Protección de Datos</h2>
                        <p>Nos comprometemos a garantizar la seguridad de tus datos y a no compartir, vender o utilizar tu información para fines distintos a los descritos en esta política. Los datos obtenidos se utilizan únicamente para los fines necesarios de la integración con Google Drive y Google Photos, y no accedemos a información adicional más allá de lo necesario para proporcionar el servicio.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Cambios en esta Política</h2>
                        <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las modificaciones se publicarán en esta página y la fecha de última actualización se actualizará en consecuencia.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Contacto</h2>
                        <p>Si tienes preguntas sobre esta política de privacidad o sobre el manejo de tu información,
                            puedes contactarnos en {siteConfig.contactEmail}.</p>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}