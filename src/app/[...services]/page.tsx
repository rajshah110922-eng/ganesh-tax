
"use client";
import { usePathname } from "next/navigation";
import incomeTaxData from "@/utils/services/incomeTaxFiling.json";
import gstReturnFiling from "@/utils/services/gstReturnFiling.json";
import businessIncomeTaxReturn from "@/utils/services/businessIncomeTaxReturn.json";
import gstr9AnnualReturn from "@/utils/services/gstrr-9AnnualReturnFiling.json";
import gstr10Return from "@/utils/services/gstr10Return.json";
import gstRegistrationIndia from "@/utils/services/gstRegistrationIndia.json"
import llpRegistration from "@/utils/services/llpRegistration.json"
import partnershipFirmRegistration from "@/utils/services/partnershipFirmRegistration.json"
import privateLimitedCompany from "@/utils/services/privateLimitedCompany.json"
import proprietorshipFirm from "@/utils/services/proprietorshipFirm.json"
import msmeRegistration from "@/utils/services/msmeRegistration.json"
import drugLicense from "@/utils/services/drugLicense.json"
import dscRegistration from "@/utils/services/dscRegistration.json"
import twelvea80gRegistration from "@/utils/services/12a80gRegistration.json"
import iecCertification from "@/utils/services/iecCertification.json"
import pfRegistration from "@/utils/services/pfRegistration.json"
import iecRegistrations from "@/utils/services/iecRegistrations.json"
import professionalTax from "@/utils/services/professionalTax.json"


export default function ServiceDetail() {

  const pathname = usePathname();
  const basePath: any = pathname.split("/").pop();

  // Map slugs to JSON files
  const serviceMap: { [key: string]: any } = {
    "income-tax-filing": incomeTaxData,
    "gst-return-filing": gstReturnFiling,
    "business-income-tax-return": businessIncomeTaxReturn,
    "gstr9-annual-return": gstr9AnnualReturn,
    "gstr10-return": gstr10Return,
    "gst-registration": gstRegistrationIndia,
    "limited-liability-registration":llpRegistration,
    "partnership-firm-registration":partnershipFirmRegistration,
    "private-limited-company-registration-in-india":privateLimitedCompany,
    "sole-proprietorship-firm-registration":proprietorshipFirm,
    "msme-registration":msmeRegistration,
    "drug-licences":drugLicense,
    "digital-signature-certificate":dscRegistration,
    "12A-and-80G-registration":twelvea80gRegistration,
    "iec-certification":iecCertification,
    "pf-registration":pfRegistration,
    'esi-registration':iecRegistrations,
    "professional-tax-registration":professionalTax,
  };

  const data = serviceMap[basePath];

  if (!data) {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="text-center mb-12">
              <h1 className="text-2xl font-bold text-red-600">
                Service Not Found
              </h1>
              <p className="mt-3 text-gray-700">
                The service you are looking for does not exist.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 py-10">
          {/*... <div className="text-center mb-12">
            {/* Main Title 
            <h2 className="text-3xl font-bold mb-6">{data.title}</h2>
          </div> ...*/}

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 mb-16 text-center">
            <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
              {data.title}
              <span className="absolute left-1/2 -bottom-3 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <span className="px-5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
                ✔ 100% Online Process
              </span>
              <span className="px-5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
                ✔ Expert Assisted Filing
              </span>
              <span className="px-5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
                ✔ Fast & Hassle-Free
              </span>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {data.sections.map((section: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="space-y-10">
                  {/* Section Heading */}
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {section.heading}
                  </h2>

                  {/* Paragraphs */}
                  {section.content?.map((text: string, i: number) => (
                    <p key={i} className="text-gray-700 mb-2">
                      {text}
                    </p>
                  ))}

                  {/* Lists */}
                  {section.list?.map((item: any, i: number) => (
                    <div key={i} className="mb-3">
                      {item.title && (
                        <h3 className="font-medium">{item.title}</h3>
                      )}
                      <ul className="list-disc pl-6">
                        {item.points.map((point: string, j: number) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Tables */}
                  {section.table && (
                    <table className="w-full border border-gray-300 mt-4">
                      <thead className="bg-gray-100">
                        <tr>
                          {section.table.headers.map(
                            (header: string, i: number) => (
                              <th
                                key={i}
                                className="border px-3 py-2 text-left"
                              >
                                {header}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row: string[], i: number) => (
                          <tr key={i} className="even:bg-gray-50">
                            {row.map((cell: string, j: number) => (
                              <td key={j} className="border px-3 py-2">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

}
