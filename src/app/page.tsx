import LandingPage from '@/components/LandingPage';
import RootLayout from './layout';
import { cookies } from 'next/headers';

export default function Page({ params }) {
    if (!params.locale) {
        params.locale = cookies().get("NEXT_LOCALE")?.value || 'en';
    }
    return (
        <RootLayout params={params}>
            <LandingPage />
        </RootLayout>
    );
}