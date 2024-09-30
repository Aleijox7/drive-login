import { siteConfig } from '@/config/siteConfig'
import Link from 'next/link'
import {Film, Home} from 'lucide-react'
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
                        <p>{siteConfig.appName} no recopila ninguna información personal de los usuarios durante el uso
                            de nuestra integración con Google Drive. Toda la información de autenticación se gestiona
                            directamente entre el cliente de Kodi y Google, y no almacenamos ningún dato sensible en
                            nuestros servidores.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Uso de la Información</h2>
                        <p>Toda la información gestionada a través de {siteConfig.appName} se utiliza exclusivamente
                            para autenticar tu acceso a Google Drive desde el cliente de Kodi. No vendemos, compartimos
                            ni utilizamos tu información con otros fines.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Seguridad de la Información</h2>
                        <p>Implementamos medidas de seguridad razonables para proteger la transmisión de datos entre
                            nuestros servidores y el cliente de Kodi. Sin embargo, es responsabilidad del usuario
                            asegurar que su dispositivo esté protegido contra accesos no autorizados.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Derechos de los Usuarios</h2>
                        <p>Como usuario, tienes el derecho de revocar el acceso de {siteConfig.appName} a tu cuenta de
                            Google en cualquier momento. Puedes gestionar estos permisos desde la configuración de
                            seguridad de tu cuenta de Google.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Cambios en esta Política</h2>
                        <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las
                            modificaciones se publicarán en esta página y la fecha de última actualización se
                            actualizará en consecuencia.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Contacto</h2>
                        <p>Si tienes preguntas sobre esta política de privacidad o sobre el manejo de tu información,
                            puedes contactarnos en {siteConfig.contactEmail}.</p>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}