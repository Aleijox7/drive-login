import {cookies} from "next/headers";
import RootLayout from '@/app/layout';
import Terms from '@/app/terms/terms';

export default function TermsPage({ params }) {
    if (!params.locale) {
        params.locale = cookies().get("NEXT_LOCALE")?.value || 'en';
    }
    return (
        <RootLayout params={params}>
            <Terms />
        </RootLayout>
    )
}