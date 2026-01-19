

"use client";

export default function StateSection({ stats }: any) {
    return (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-b border-gray-200">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat: any, index: number) => (
                        <div key={index} className="text-center">
                            <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.number}</p>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
