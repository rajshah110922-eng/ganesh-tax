


"use client";

export default function TrustedBySection({ trustedBy }: any) {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{trustedBy.title}</h2>
                    <p className="text-lg text-gray-600">{trustedBy.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                    {trustedBy.companies.map((company: any, index: number) => (
                        <div key={index} className="flex items-center justify-center h-20 px-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                            <span className="font-semibold text-gray-700 text-center">{company}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
