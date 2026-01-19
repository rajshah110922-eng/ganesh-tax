"use client";

export default function HowItWorks({ howItWorks }: any) {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{howItWorks.title}</h2>
                    <p className="text-lg text-gray-600">{howItWorks.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {howItWorks.steps.map((step: any, index: number) => (
                        <div key={index} className="relative">
                            <div className="flex flex-col items-start">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                                    <span className="text-white font-bold text-xl">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                            {index < howItWorks.steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}