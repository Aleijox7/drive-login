"use client";

import { useTranslations } from 'next-intl';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Globe} from "lucide-react";

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');

    function onSelectLocale(newLocale: string) {
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
        window.location.reload();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-black">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">{t('selectLanguage')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black text-gray-100">
                <DropdownMenuItem className="hover:bg-gray-900" onSelect={() => onSelectLocale('en')}>
                    🇬🇧 {t('english')}
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900" onSelect={() => onSelectLocale('es')}>
                    🇪🇸 {t('spanish')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}