import Head from 'next/head';
import { siteConfig } from '@/config/siteConfig'; // Importa las variables de configuración

export default function Terms() {
    return (
        <div style={{ padding: '20px' }}>
            <Head>
                <title>Términos y Condiciones - {siteConfig.appName}</title>
                <meta name="description" content={`Términos y condiciones de uso de la integración con Google Drive en ${siteConfig.appName}.`} />
            </Head>
            <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h1 style={{ textAlign: 'center', color: '#444', marginBottom: '20px', fontSize: '2em' }}>Términos y Condiciones de Uso</h1>
                <p style={{ textAlign: 'right', fontSize: '0.9em', color: '#777', marginBottom: '20px' }}>Última Actualización: {siteConfig.lastUpdated}</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>1. Introducción</h2>
                <p style={{ marginBottom: '20px' }}>Bienvenido a {siteConfig.appName}. Al utilizar nuestra integración con Google Drive, aceptas estos Términos y Condiciones. Te recomendamos leerlos atentamente antes de utilizar el servicio.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>2. Descripción del Servicio</h2>
                <p style={{ marginBottom: '20px' }}>{siteConfig.appName} permite a los usuarios acceder y gestionar sus archivos de Google Drive desde la interfaz de Kodi mediante OAuth 2.0. Este proceso permite a los usuarios autenticar su cuenta de Google y obtener acceso seguro a Google Drive sin que {siteConfig.appName} almacene ninguna información personal o sensible.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>3. Proceso de Autenticación</h2>
                <p>El proceso de autenticación se realiza de la siguiente manera:</p>
                <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>{siteConfig.appName} genera un código único que se debe ingresar en nuestro sitio web.</li>
                    <li style={{ marginBottom: '10px' }}>El usuario inicia sesión con su cuenta de Google a través del sistema de OAuth 2.0 de Google.</li>
                    <li style={{ marginBottom: '10px' }}>Una vez completada la autenticación, {siteConfig.appName} transfiere las credenciales de acceso directamente al cliente de Kodi.</li>
                </ol>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>4. Recopilación y Uso de Información</h2>
                <p style={{ marginBottom: '20px' }}>{siteConfig.appName} no almacena ni guarda ninguna información sensible del usuario, como tokens de acceso, credenciales de Google o cualquier otro dato personal. Todos los datos relacionados con la autenticación son transmitidos directamente al cliente de Kodi, donde se almacenan únicamente de manera local.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>5. Limitaciones de Responsabilidad</h2>
                <p style={{ marginBottom: '20px' }}>{siteConfig.appName} no se hace responsable del almacenamiento, seguridad o manejo de las credenciales dentro del cliente de Kodi. Recomendamos a los usuarios tomar las medidas de seguridad adecuadas para proteger su dispositivo y la información almacenada localmente.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>6. Seguridad</h2>
                <p style={{ marginBottom: '20px' }}>Aunque {siteConfig.appName} no almacena información sensible del usuario, implementamos medidas de seguridad razonables para asegurar que la transmisión de datos entre nuestro servidor y el cliente de Kodi sea segura y esté protegida contra accesos no autorizados.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>7. Revocación de Acceso</h2>
                <p style={{ marginBottom: '20px' }}>Puedes revocar el acceso de {siteConfig.appName} a tu cuenta de Google en cualquier momento desde la configuración de seguridad de tu cuenta de Google. Esto impedirá que el cliente de Kodi acceda a Google Drive.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>8. Modificaciones a estos Términos</h2>
                <p style={{ marginBottom: '20px' }}>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios se publicarán en esta página, y es responsabilidad del usuario revisar estos términos periódicamente.</p>

                <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>9. Contacto</h2>
                <p style={{ marginBottom: '20px' }}>Si tienes preguntas sobre estos Términos y Condiciones o sobre el proceso de autenticación, puedes contactarnos en {siteConfig.contactEmail}.</p>
            </div>
        </div>
    );
}
