import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, PhoneCall, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface InquirySectionProps {
  initialProduct?: string;
  onClearInitialProduct?: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  initialProduct,
  onClearInitialProduct
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: '',
    email: '',
    phone: '',
    product: 'Red Chillies',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp number is required';
    if (!formData.product) errs.product = 'Please select a product';
    if (!formData.message.trim()) errs.message = 'Please provide details about your requirement';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onClearInitialProduct) onClearInitialProduct();
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Raviraj Spices Exports,\n\nName: ${formData.fullName || 'Prospective Buyer'}\nCompany: ${formData.companyName || 'N/A'}\nCountry: ${formData.country || 'N/A'}\nProduct: ${formData.product}\nQuantity: ${formData.quantity || 'Inquiry'}\nRequirement: ${formData.message || 'I would like to inquire about specifications and price quote.'}`
    );
    window.open(`https://wa.me/919246777627?text=${text}`, '_blank');
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F291E]">
            B2B Commercial Inquiries
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Looking for Indian Spices?
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Share your requirements with Raviraj Spices Exports.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl border border-stone-200 shadow-md p-6 sm:p-10 lg:p-12">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900">
                  Inquiry Received
                </h3>
                <p className="text-base text-stone-600 max-w-lg mx-auto">
                  Thank you. Your inquiry has been received. Our team will contact you shortly.
                </p>
              </div>

              <div className="pt-4 max-w-md mx-auto p-4 bg-[#FAF8F5] rounded-lg border border-stone-200 text-xs text-stone-600 space-y-3">
                <span className="font-bold text-stone-900 block">Need an immediate response?</span>
                <p>
                  You can also dispatch your inquiry directly to our Managing Director via WhatsApp:
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200 rounded border border-emerald-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Send via WhatsApp (+91 9246777627)</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      country: '',
                      email: '',
                      phone: '',
                      product: 'Red Chillies',
                      quantity: '',
                      message: ''
                    });
                  }}
                  className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Doe / Rajesh Kumar"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F291E] ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Global Food Importers Ltd"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F291E]"
                  />
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label htmlFor="country" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    Country <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United States, UAE, Germany, India"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F291E] ${
                      errors.country ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                    }`}
                  />
                  {errors.country && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F291E] ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    Phone / WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 555-0192 / +91 92467..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F291E] ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Product Select */}
                <div className="space-y-1.5">
                  <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    Product <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="product"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F291E]"
                  >
                    <option value="Red Chillies">Red Chillies (Whole / Stemless / Powder)</option>
                    <option value="Turmeric">Turmeric (Fingers / Powder)</option>
                    <option value="Coriander">Coriander (Seeds / Powder)</option>
                    <option value="Other Spices">Other Spices (Cumin, Mustard, Fennel, etc.)</option>
                  </select>
                </div>

              </div>

              {/* Required Quantity */}
              <div className="space-y-1.5">
                <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Required Quantity (e.g. 5 MT, 1x20ft Container, Sample)
                </label>
                <input
                  id="quantity"
                  type="text"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="Estimated volume, packing preference, or container specification"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F291E]"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify varieties, grades, destination port, target shipment date, or packaging specifications..."
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F291E] ${
                    errors.message ? 'border-red-500 bg-red-50/20' : 'border-stone-300'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Buttons: Ask Email or WhatsApp */}
              <div className="pt-2 space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Select How You Want to Dispatch Your Inquiry:
                </span>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {/* Option 1: WhatsApp */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!validate()) return;
                      const text = encodeURIComponent(
                        `*COMMERCIAL INQUIRY - RAVIRAJ SPICES EXPORTS PVT LTD*\nDate: ${new Date().toLocaleDateString('en-GB')}\n---------------------------------------\n*Product:* ${formData.product}\n*Buyer Name:* ${formData.fullName}\n*Company:* ${formData.companyName || 'N/A'}\n*Country / Port:* ${formData.country}\n*Email:* ${formData.email}\n*Phone / WA:* ${formData.phone}\n*Required Quantity:* ${formData.quantity || 'Inquiry'}\n---------------------------------------\n*Requirement Details:*\n${formData.message}\n---------------------------------------\nDestination: Raviraj Spices Exports Pvt Ltd (Guntur, India)`
                      );
                      window.open(`https://wa.me/919246777627?text=${text}`, '_blank');
                      setSubmitted(true);
                      if (onClearInitialProduct) onClearInitialProduct();
                    }}
                    className="w-full sm:flex-1 py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-200" />
                    <span>Send via WhatsApp (+91 92467 77627)</span>
                  </button>

                  {/* Option 2: Email */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!validate()) return;
                      const body = encodeURIComponent(
                        `COMMERCIAL INQUIRY - RAVIRAJ SPICES EXPORTS PVT LTD\nDate: ${new Date().toLocaleDateString('en-GB')}\n\nProduct: ${formData.product}\nBuyer Name: ${formData.fullName}\nCompany: ${formData.companyName || 'N/A'}\nCountry / Port: ${formData.country}\nEmail: ${formData.email}\nPhone / WhatsApp: ${formData.phone}\nRequired Quantity: ${formData.quantity || 'Inquiry'}\n\nRequirement Details:\n${formData.message}\n\nDestination: info@ravirajspices.in`
                      );
                      const subject = encodeURIComponent(`Commercial Spice Inquiry: ${formData.product} - ${formData.companyName || formData.fullName}`);
                      window.open(`mailto:info@ravirajspices.in?cc=sales@ravirajspices.in&subject=${subject}&body=${body}`, '_blank');
                      setSubmitted(true);
                      if (onClearInitialProduct) onClearInitialProduct();
                    }}
                    className="w-full sm:flex-1 py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F291E] hover:bg-[#16382B] rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-amber-300" />
                    <span>Send via Email (info@ravirajspices.in)</span>
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
