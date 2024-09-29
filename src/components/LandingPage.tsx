"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Film, HardDrive, Lock } from "lucide-react";
import Link from "next/link";
import LocaleSwitcher from './LocaleSwitcher';
import Footer from './Footer';
import { useTranslations } from "next-intl";
import { siteConfig } from '@/config/siteConfig'
import {FormEvent} from "react";
import axios from "axios";
import {getGoogleAuthUrl} from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const t = useTranslations('LandingPage');
    const router = useRouter()

    const handleAuth = async (e: FormEvent) => {
        e.preventDefault()
        // setStatus("loading")
        //
        // try {
        //     await axios.get(`/authorize?pin=${pin}`)
        // } catch (e) {
        //     setStatus("error")
        //     return
        // }
        const url = getGoogleAuthUrl('00000')
        router.push(url)
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-gray-100">
            <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-800">
                <Link className="flex items-center justify-center" href="#">
                    <Film className="h-6 w-6 mr-2 text-blue-400" />
                    <span className="font-bold text-blue-400">{siteConfig.appName}</span>
                </Link>
                <nav className="flex items-center gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#features">
                        {t('features.title')}
                    </Link>
                    <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#how-it-works">
                        {t('howItWorks.title')}
                    </Link>
                    <LocaleSwitcher />
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    {t('hero.title')}
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                    {t('hero.description')}
                                </p>
                            </div>
                            <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={handleAuth}>
                                {t('hero.cta')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 flex flex-col items-center">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            {t('features.title')}
                        </h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            {t.raw('features.items').map((feature, index) => (
                                <Card key={index} className="bg-black border-gray-800">
                                    <CardHeader>
                                        <CardTitle className="flex items-center text-blue-400">
                                            {index === 0 && <Lock className="mr-2 h-4 w-4" />}
                                            {index === 1 && <HardDrive className="mr-2 h-4 w-4" />}
                                            {index === 2 && <Film className="mr-2 h-4 w-4" />}
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-gray-300">
                                        {feature.description}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            {t('howItWorks.title')}
                        </h2>
                        <ol className="space-y-4 max-w-2xl mx-auto">
                            {t.raw('howItWorks.list').map((step, index) => (
                                <li key={index} className="flex items-center space-x-4">
                                    <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0" />
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
