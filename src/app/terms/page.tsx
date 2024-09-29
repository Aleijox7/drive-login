import {cookies} from "next/headers";
import RootLayout from '@/app/layout';
import Terms from '@/app/terms/terms';

interface Params {
    locale?: string;
}
export default function TermsPage({ params }: { params: Params }) {
    const { locale } = params;
    const cookieLocale = cookies().get("NEXT_LOCALE")?.value || 'en';
    return (
        <RootLayout params={{ locale: locale || cookieLocale }}>
            <Terms />
        </RootLayout>
    )
}