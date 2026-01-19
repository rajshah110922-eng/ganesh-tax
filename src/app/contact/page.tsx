'use client';

import React from "react"

import { useState } from 'react';
import Link from 'next/link';
import contactData from '@/utils/ContactData.json';
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle } from 'lucide-react';


const iconComponents: Record<string, React.ReactNode> = {
    mail: <Mail size={20} />,
    chat: <MessageCircle size={20} />,
    phone: <Phone size={20} />,
    location: <MapPin size={20} />
};



export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const { page, contactInfo, form, supportChannels, faq } = contactData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    company: '',
                    service: '',
                    message: '',
                });

                setTimeout(() => setSubmitSuccess(false), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=Hi, I'm interested in your services. Can you help me with compliance?`;
    const phoneLink = `tel:${contactInfo.phone.replace(/\s/g, '')}`;
    const emailLink = `mailto:${contactInfo.email}`;

    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50 to-white">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                        {page.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                        {page.subtitle}
                    </p>
                </div>
            </section>

            {/* Contact Channels Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportChannels.map((channel: any, index: number) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                                {/* <div className="text-5xl mb-4">{channel.icon}</div> */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                                <p className="font-semibold text-green-600 mb-4 text-sm">{channel.contact}</p>

                                {channel.title === 'WhatsApp Chat' && (
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                                    >
                                        <MessageCircle size={16} />
                                        {channel.action}
                                    </a>
                                )}
                                {channel.title === 'Email Support' && (
                                    <a
                                        href={emailLink}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                                    >
                                        <Mail size={16} />
                                        {channel.action}
                                    </a>
                                )}
                                {channel.title === 'Phone Support' && (
                                    <a
                                        href={phoneLink}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                                    >
                                        <Phone size={16} />
                                        {channel.action}
                                    </a>
                                )}
                                {channel.title === 'Visit Our Office' && (
                                    <a
                                        href={`https://maps.google.com/?q=${encodeURIComponent(channel.contact)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                                    >
                                        <MapPin size={16} />
                                        {channel.action}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="mx-auto max-w-4xl">
                    <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{form.title}</h2>
                            <p className="text-lg text-gray-600">{form.subtitle}</p>
                        </div>

                        {submitSuccess && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <p className="font-semibold text-green-900">Thank you for your enquiry!</p>
                                    <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {form.fields.slice(0, 4).map((field: any) => (
                                    <div key={field.name}>
                                        <label htmlFor={field.name} className="block text-sm font-semibold text-gray-900 mb-2">
                                            {field.label}
                                            {field.required && <span className="text-red-500">*</span>}
                                        </label>
                                        <input
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={formData[field.name as keyof typeof formData]}
                                            onChange={handleInputChange}
                                            required={field.required}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Service Select */}
                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                                    Service Interested In<span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                                >
                                    <option value="">Select a service...</option>
                                    {form.fields[4].options && form.fields[4].options.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                    Your Message<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={form.fields[5].placeholder}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                >
                                    <Send size={20} />
                                    {isSubmitting ? 'Sending...' : form.submitButton}
                                </button>

                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors duration-200"
                                >
                                    <MessageCircle size={20} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Get quick answers to common questions</p>
                    </div>

                    <div className="space-y-4">
                        {faq.map((item: any, index: number) => (
                            <details key={index} className="bg-white rounded-lg border border-gray-200 hover:border-green-300 transition-colors overflow-hidden group">
                                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-green-600 transition-colors flex justify-between items-center">
                                    {item.question}
                                    <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-green-50 mb-8">Choose your preferred way to contact us</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors duration-200"
                        >
                            <MessageCircle size={20} />
                            Chat Now
                        </a>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-green-700/50 transition-colors duration-200"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
