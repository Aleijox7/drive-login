import LandingPage from '@/components/LandingPage';
import RootLayout from './layout';
import { cookies } from 'next/headers';

interface Params {
    locale?: string;
}
export default function Page({ params }: { params: Params }) {
    const { locale } = params;
    const cookieLocale = cookies().get("NEXT_LOCALE")?.value || 'en';
    return (
        <RootLayout params={{ locale: locale || cookieLocale }}>
            <LandingPage />
        </RootLayout>
    );
}