import Layout from '@/app/base_layout'
import { siteConfig } from '@/config/siteConfig'
import {Home} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <Layout
            title="Política de Privacidad"
            description={`Política de privacidad para el uso de ${siteConfig.appName}.`}
        >
            <Link href="/" className="absolute top-3 left-3 p-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Home className="h-6 w-6" />
            </Link>
            <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Política de Privacidad</h1>
            <p className="text-right text-sm text-gray-400 mb-6">Última Actualización: {siteConfig.lastUpdated}</p>

            <div className="space-y-6 text-gray-200">
                <p>
                    En {siteConfig.appName}, respetamos su privacidad y estamos comprometidos a protegerla.
                    Esta política describe cómo manejamos la información personal que pueda ser proporcionada a través del uso de nuestro servicio.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-white">1. Información que Recopilamos</h2>
                    <p>{siteConfig.appName} no recopila ninguna información personal de los usuarios durante el uso de nuestra integración con Google Drive. Toda la información de autenticación se gestiona directamente entre el cliente de Kodi y Google, y no almacenamos ningún dato sensible en nuestros servidores.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-white">2. Uso de la Información</h2>
                    <p>Toda la información gestionada a través de {siteConfig.appName} se utiliza exclusivamente para autenticar tu acceso a Google Drive desde el cliente de Kodi. No vendemos, compartimos ni utilizamos tu información con otros fines.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-white">3. Seguridad de la Información</h2>
                    <p>Implementamos medidas de seguridad razonables para proteger la transmisión de datos entre nuestros servidores y el cliente de Kodi. Sin embargo, es responsabilidad del usuario asegurar que su dispositivo esté protegido contra accesos no autorizados.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-white">4. Derechos de los Usuarios</h2>
                    <p>Como usuario, tienes el derecho de revocar el acceso de {siteConfig.appName} a tu cuenta de Google en cualquier momento. Puedes gestionar estos permisos desde la configuración de seguridad de tu cuenta de Google.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-white">5. Cambios en esta Política</h2>
                    <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las modificaciones se publicarán en esta página y la fecha de última actualización se actualizará en consecuencia.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-white">6. Contacto</h2>
                    <p>Si tienes preguntas sobre esta política de privacidad o sobre el manejo de tu información, puedes contactarnos en {siteConfig.contactEmail}.</p>
                </section>
            </div>
        </Layout>
    )
}