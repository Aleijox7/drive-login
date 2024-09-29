import {cookies} from "next/headers";
import RootLayout from '@/app/layout';
import Dashboard from '@/app/dashboard/dashboard';

export default function TermsPage({ params }) {
    if (!params.locale) {
        params.locale = cookies().get("NEXT_LOCALE")?.value || 'en';
    }
    return (
        <RootLayout params={params}>
            <Dashboard />
        </RootLayout>
    )
}