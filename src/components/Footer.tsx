"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('LandingPage');

    return (
        <footer
            className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
            <p className="text-xs text-gray-400">
                {t('footer.copyright', {year: new Date().getFullYear()})}
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="/terms">
                    {t('footer.terms')}
                </Link>
                <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="/privacy">
                    {t('footer.privacy')}
                </Link>
            </nav>
        </footer>
    );
}
