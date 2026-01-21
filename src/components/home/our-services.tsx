import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";


export default function OurServices({ servicesData }: any) {

    const topServices = servicesData.services
        .sort((a: any, b: any) => a.order - b.order)
        .slice(0, 6);

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive compliance and tax solutions tailored for your business needs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topServices.map((service: any) => (
                        <Link
                            key={service.id}
                            href={'#'}
                            className="group bg-white border border-gray-200 lg:rounded-[24px] rounded-[18px] p-8 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-4xl">{service.icon}</div>
                                <ArrowRight size={20} className="text-green-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <span className="inline-block text-sm font-semibold text-green-600 group-hover:text-green-700 transition-colors">Learn more →</span>
                        </Link>
                    ))}
                </div>

                {/* <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-50 transition-colors duration-200"
                    >
                        View All Services
                        <ChevronRight size={20} />
                    </Link>
                </div> */}
            </div>
        </section>
    )
}