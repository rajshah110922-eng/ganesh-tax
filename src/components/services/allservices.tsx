"use client";

import Link from 'next/link';

export default function AllServices({ data }: any) {
    const { services } = data;
    const sortedServices = [...services].sort((a, b) => a.order - b.order);
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive compliance and tax services tailored for your business needs
                    </p>
                </div>

                {/* Services by Category */}
                <div className="space-y-12">
                    {/* Group services by category */}
                    {Array.from(
                        new Map(
                            sortedServices.map((service) => [service.category, service])
                        ).entries()
                    ).map(([category]) => {
                        const categoryServices = sortedServices.filter(
                            (s) => s.category === category
                        );
                        return (
                            <div key={category}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-green-200">
                                    {category}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryServices.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={service.href}
                                            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-green-300"
                                        >
                                            <div className="text-4xl mb-4">{service.icon}</div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4">
                                                {service.description}
                                            </p>
                                            <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                                                Learn More
                                                <svg
                                                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}