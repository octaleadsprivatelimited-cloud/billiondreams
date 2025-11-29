import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ClipboardCheck, Languages, Users, Plane, Globe } from 'lucide-react';

const WorkPermitAdditional = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleScrollToAssessment = () => {
    const node = document.getElementById('assessment');
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      window.location.href = 'tel:+919030573605';
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert('Please contact us directly at +91-9030573605');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/additional-services.jpg"
            alt="Additional Services"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/hero-background.avif';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Work Permit Services</span>
              <span className="mx-2">/</span>
              <span className="text-white">Additional Services</span>
            </nav>
            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Additional Services
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-lg md:text-xl mb-6 text-white/90">
                  Enhance your work permit process with optional add-ons: Translation & document attestation, Family/dependent visa processing, Relocation and onboarding assistance, Travel & insurance guidance.
                </motion.p>
                <div className="flex flex-row gap-2 md:gap-3">
                  <button
                    onClick={handleScrollToAssessment}
                    className="bg-yellow-400 text-gray-900 px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                  >
                    <ClipboardCheck className="mr-1 md:mr-2" size={18} />
                    Get Started
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="glass-effect rounded-2xl p-6 shadow-neon-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {[{label: 'Services', value: '4'}, {label: 'Success Rate', value: '98%'}, {label: 'Countries', value: '20+'}, {label: 'Clients', value: '6K+'}].map((s, idx) => (
                      <div key={idx} className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-extrabold">{s.value}</div>
                        <div className="text-sm text-white/80">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Additional Services Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive add-on services to enhance your work permit journey</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Languages, title: 'Translation & Attestation', description: 'Professional translation and document attestation' },
                { icon: Users, title: 'Family Visa Processing', description: 'Assistance with family member visa applications' },
                { icon: Plane, title: 'Relocation Assistance', description: 'Support with relocation and onboarding' },
                { icon: Globe, title: 'Travel & Insurance', description: 'Expert advice on travel and insurance' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>Beyond the core work permit services, we offer additional support services to make your transition and stay as smooth as possible.</p>
                    <p>Enhance your work permit process with optional add-ons: Translation & document attestation, Family/dependent visa processing, Relocation and onboarding assistance, Travel & insurance guidance.</p>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><p><strong>Translation & Document Attestation:</strong> Professional translation services and document attestation for all required paperwork.</p></div>
                      <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><p><strong>Family/Dependent Visa Processing:</strong> Assistance with visa applications for your family members and dependents.</p></div>
                      <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><p><strong>Relocation & Onboarding:</strong> Support with relocation planning, housing, and onboarding assistance in your new country.</p></div>
                      <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><p><strong>Travel & Insurance Guidance:</strong> Expert advice on travel arrangements, health insurance, and other essential services.</p></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      { question: 'What documents need translation and attestation?', answer: 'Documents that typically need translation and attestation include educational certificates, birth certificates, marriage certificates, and other official documents required for your work permit application.' },
                      { question: 'Can you help with family member visas?', answer: 'Yes, we assist with visa applications for your spouse, children, and other dependents who wish to join you in your destination country.' },
                      { question: 'What does relocation assistance include?', answer: 'Relocation assistance includes help with finding housing, school enrollment for children, opening bank accounts, obtaining local identification, and general orientation to your new country.' },
                      { question: 'Do you provide travel and insurance guidance?', answer: 'Yes, we provide guidance on travel arrangements, health insurance requirements, travel insurance, and other essential services to ensure a smooth transition.' }
                    ].map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                        <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full text-left flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                          <span className="text-blue-600 text-xl">{openFaqIndex === index ? '−' : '+'}</span>
                        </button>
                        {openFaqIndex === index && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 text-gray-600">{faq.answer}</motion.p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="assessment" className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">Start Your Application</h3>
                  <p className="mb-6 text-teal-100">Contact us for additional services support.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    </div>
                    <div>
                      <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    </div>
                    <div>
                      <textarea placeholder="Tell us which additional services you need" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50">{isSubmitting ? 'Submitting...' : 'Request Services'}</button>
                    {isSubmitted && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-green-300 text-sm">Thank you! We'll contact you soon.</motion.p>}
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPermitAdditional;


