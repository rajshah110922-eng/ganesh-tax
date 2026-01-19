"use client";
import Link from "next/link";

export default function EnquirySection() {
    return (
        <section className="bg-gradient-to-r from-green-50 to-white py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Ready to Simplify Your Compliance?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Our expert team is ready to help you with all your tax and compliance needs.
                    Get started today with a free consultation.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
                >
                    Schedule Consultation
                </Link>
            </div>
        </section>
    )
}