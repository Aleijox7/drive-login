import {cookies} from "next/headers";
import RootLayout from '@/app/layout';
import Dashboard from '@/app/dashboard/dashboard';

interface Params {
    locale?: string;
}

export default function TermsPage({ params }: { params: Params }) {
    const { locale } = params;
    const cookieLocale = cookies().get("NEXT_LOCALE")?.value || 'en';
    return (
        <RootLayout params={{ locale: locale || cookieLocale }}>
            <Dashboard />
        </RootLayout>
    );
}