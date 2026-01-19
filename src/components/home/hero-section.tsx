
"use client";

import { ChevronRight} from 'lucide-react';
import Link from 'next/link';

export default function HeroSection({ hero }: any) {
    return (
        <section className="relative pt-[100px] pb-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50 to-white">
            <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 mb-6 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm font-medium text-gray-700">{hero.eyebrow}</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                    {hero.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
                    {hero.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href={hero.primaryLink}
                        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                    >
                        {hero.primaryCTA}
                        <ChevronRight size={20} />
                    </Link>
                    <Link
                        href={hero.secondaryLink}
                        className="px-4 py-2 border-2 border-green-600 text-green-600 font-semibold  rounded-full hover:bg-green-50 transition-colors duration-200 inline-flex items-center justify-center"
                    >
                        {hero.secondaryCTA}
                    </Link>
                </div>
            </div>
        </section>
    )
}