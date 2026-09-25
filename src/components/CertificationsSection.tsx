import React from 'react';
import { CERTIFICATIONS_DATA, COMPANY_INFO } from '../data/companyData';

export const CertificationsSection: React.FC = () => {
  const certificationImages: Record<string, string> = {
    fssai: '/src/assets/images/fassai.jpg',
    apeda: '/src/assets/images/apeda.jpg',
    'spices-board': '/src/assets/images/spices board.jpg',
    iso: '/src/assets/images/iso.jpg'
  };

  return (
    <section id="certifications" className="border-t border-stone-200 bg-[#FAF8F5] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            Compliance &amp; Registrations
          </span>
          <h2 className="font-serif-brand text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Certifications &amp; Registrations
          </h2>
          <p className="text-base text-stone-600">
            Recognized registrations and quality frameworks supporting our domestic and export trade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS_DATA.map((credential) => (
            <article
              key={credential.id}
              className="flex min-h-[230px] flex-col items-center rounded-sm border border-stone-200 bg-white text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-36 w-full items-center justify-center border-b border-stone-100 bg-stone-50 px-4">
                <img
                  src={certificationImages[credential.id]}
                  alt={`${credential.title} logo`}
                  className="h-24 w-full object-contain"
                />
              </div>
              <div className="flex flex-1 items-center px-4 py-5">
                <h3 className="font-serif-brand text-base font-bold text-stone-900 sm:text-lg">
                  {credential.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center text-xs text-stone-500">
          Authenticated certificate copies and registration records are available upon direct request at{' '}
          <a href={`mailto:${COMPANY_INFO.contact.email}`} className="font-medium text-amber-800 underline">
            {COMPANY_INFO.contact.email}
          </a>.
        </div>
      </div>
    </section>
  );
};
