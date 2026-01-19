import Link from 'next/link';
import servicesData from '@/utils/servicesData.json';
import EnquirySection from '@/components/shared/EnquirySection';
import AllServices from '@/components/services/allservices';

export default function Home() {


    return (
        <div className="w-full">
            {/* Services Grid */}
            <AllServices data={servicesData} />

            {/* CTA Section */}
            <EnquirySection />
        </div>
    );
}
