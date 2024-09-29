import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const { nextUrl: url, cookies } = req;
    const langCookie = cookies.get('NEXT_LOCALE')?.value;
    const acceptLang = req.headers.get('accept-language');
    const browserLocale = langCookie || acceptLang?.split(',')[0].slice(0, 2) || 'en';

    // Si el idioma no está en la URL, redirige.
    if (url.searchParams.get('lang') !== browserLocale) {
        url.searchParams.set('lang', browserLocale);
        return NextResponse.redirect(url); // Redirige a la URL con el idioma
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};