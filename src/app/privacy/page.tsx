import {cookies} from "next/headers";
import RootLayout from '@/app/layout';
import PrivacyPolicy from '@/app/privacy/privacy';

export default function TermsPage({ params }) {
    if (!params.locale) {
        params.locale = cookies().get("NEXT_LOCALE")?.value || 'en';
    }
    return (
        <RootLayout params={params}>
            <PrivacyPolicy />
        </RootLayout>
    )
}