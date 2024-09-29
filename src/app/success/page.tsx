import {cookies} from "next/headers";
import RootLayout from '@/app/layout';
import AuthenticationSuccess from '@/app/success/success';

export default function TermsPage({ params }) {
    if (!params.locale) {
        params.locale = cookies().get("NEXT_LOCALE")?.value || 'en';
    }
    return (
        <RootLayout params={params}>
            <AuthenticationSuccess />
        </RootLayout>
    )
}