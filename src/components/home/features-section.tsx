"use client";

export default function FeaturesSection({ features }: any) {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{features.title}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{features.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.items.map((feature: any, index: number) => (
                        <div key={index} className="bg-white p-8 lg:rounded-[24px] rounded-[18px] border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}