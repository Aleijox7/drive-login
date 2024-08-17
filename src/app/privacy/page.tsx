import Head from 'next/head';
import { siteConfig } from '@/config/siteConfig';

export default function PrivacyPolicy() {
    return (
        <div style={{ padding: '20px' }}>
            <Head>
                <title>Política de Privacidad - {siteConfig.appName}</title>
                <meta name="description" content={`Política de privacidad para el uso de ${siteConfig.appName}.`} />
            </Head>
            <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h1 style={{ textAlign: 'center', color: '#444', marginBottom: '20px', fontSize: '2em' }}>Política de Privacidad</h1>
                <p style={{ textAlign: 'right', fontSize: '0.9em', color: '#777', marginBottom: '20px' }}>Última Actualización: {siteConfig.lastUpdated}</p>

                <p style={{ marginBottom: '20px' }}>En {siteConfig.appName}, respetamos su privacidad y estamos comprometidos a protegerla.
                    Esta política describe cómo manejamos la información personal que pueda ser proporcionada a través del uso de nuestro servicio.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>1. Información que Recopilamos</h2>
                <p style={{ marginBottom: '20px' }}>{siteConfig.appName} no recopila ninguna información personal de los usuarios durante el uso de nuestra integración con Google Drive. Toda la información de autenticación se gestiona directamente entre el cliente de Kodi y Google, y no almacenamos ningún dato sensible en nuestros servidores.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>2. Uso de la Información</h2>
                <p style={{ marginBottom: '20px' }}>Toda la información gestionada a través de {siteConfig.appName} se utiliza exclusivamente para autenticar tu acceso a Google Drive desde el cliente de Kodi. No vendemos, compartimos ni utilizamos tu información con otros fines.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>3. Seguridad de la Información</h2>
                <p style={{ marginBottom: '20px' }}>Implementamos medidas de seguridad razonables para proteger la transmisión de datos entre nuestros servidores y el cliente de Kodi. Sin embargo, es responsabilidad del usuario asegurar que su dispositivo esté protegido contra accesos no autorizados.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>4. Derechos de los Usuarios</h2>
                <p style={{ marginBottom: '20px' }}>Como usuario, tienes el derecho de revocar el acceso de {siteConfig.appName} a tu cuenta de Google en cualquier momento. Puedes gestionar estos permisos desde la configuración de seguridad de tu cuenta de Google.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>5. Cambios en esta Política</h2>
                <p style={{ marginBottom: '20px' }}>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las modificaciones se publicarán en esta página y la fecha de última actualización se actualizará en consecuencia.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>6. Contacto</h2>
                <p style={{ marginBottom: '20px' }}>Si tienes preguntas sobre esta política de privacidad o sobre el manejo de tu información, puedes contactarnos en {siteConfig.contactEmail}.</p>
            </div>
        </div>
    );
}
