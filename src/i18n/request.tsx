import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    const langCookie = cookies().get("NEXT_LOCALE");
    const locale = langCookie?.value || 'en';

    return {
        locale,
        locales: ['en', 'es'],
        defaultLocale: 'en',
        getLocale: () => locale,
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});
