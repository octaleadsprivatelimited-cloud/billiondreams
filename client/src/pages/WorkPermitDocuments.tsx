import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, ClipboardCheck, FolderOpen, ListChecks, FileCheck } from 'lucide-react';

const WorkPermitDocuments = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
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

  const features = [
    { icon: ListChecks, title: 'Document Checklist', description: 'Comprehensive checklist tailored to your specific work permit category' },
    { icon: FileCheck, title: 'Document Review', description: 'Thorough review of all documents for accuracy and compliance' },
    { icon: FileText, title: 'Form Preparation', description: 'Assistance with completing all application forms correctly' },
    { icon: FolderOpen, title: 'Supporting Documents', description: 'Help preparing letters, certificates, and supporting paperwork' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-background.avif"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/home/slider-1.jpg';
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
              <span className="text-white">Document Preparation</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Document Preparation
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  We provide a clear checklist and review all documents for accuracy and compliance. Our team assists in preparing application forms, letters, and supporting paperwork to ensure a smooth submission.
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
                    {[{label: 'Documents', value: '10K+'}, {label: 'Success Rate', value: '98%'}, {label: 'Review Time', value: '24hrs'}, {label: 'Accuracy', value: '100%'}].map((s, idx) => (
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Document Preparation Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive document support to ensure your work permit application is complete and compliant
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Proper documentation is crucial for work permit approval. Our document preparation service ensures all your paperwork is accurate, complete, and compliant with immigration requirements.
                    </p>
                    <p>
                      We provide a clear checklist tailored to your specific work permit category and review all documents for accuracy and compliance. Our team assists in preparing application forms, letters, and supporting paperwork to ensure a smooth submission process.
                    </p>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p><strong>Customized Checklist:</strong> We provide a detailed, category-specific checklist of all required documents for your work permit application.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p><strong>Document Review:</strong> Our experts review all your documents for accuracy, completeness, and compliance before submission.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p><strong>Form Assistance:</strong> We help you complete all application forms correctly, avoiding common errors that can lead to delays or rejections.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p><strong>Supporting Documents:</strong> We assist in preparing letters, certificates, translations, and other supporting paperwork required for your application.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      {
                        question: 'What documents do I need for my work permit application?',
                        answer: 'Document requirements vary by work permit category and country. We provide a customized checklist based on your specific situation, including educational certificates, work experience letters, language test results, job offers, and other supporting documents.'
                      },
                      {
                        question: 'How long does document preparation take?',
                        answer: 'Document preparation typically takes 1-2 weeks, depending on the complexity of your case and how quickly you can gather the required documents. We work efficiently to ensure all documents are ready for submission.'
                      },
                      {
                        question: 'Do you help with document translation and attestation?',
                        answer: 'Yes, we can assist with document translation and attestation services. We work with certified translators and can guide you through the attestation process for documents that need to be verified.'
                      },
                      {
                        question: 'What if I\'m missing some documents?',
                        answer: 'If you\'re missing documents, we\'ll help you identify alternatives or guide you on how to obtain them. We can also assist with preparing letters of explanation for any missing documents where applicable.'
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                          className="w-full text-left flex items-center justify-between"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                          <span className="text-blue-600 text-xl">{openFaqIndex === index ? '−' : '+'}</span>
                        </button>
                        {openFaqIndex === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 text-gray-600"
                          >
                            {faq.answer}
                          </motion.p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  id="assessment"
                  className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl sticky top-24"
                >
                  <h3 className="text-2xl font-bold mb-4">Get Document Support</h3>
                  <p className="mb-6 text-emerald-100">
                    Contact us for expert document preparation assistance.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your document needs"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Support'}
                    </button>
                    {isSubmitted && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-green-300 text-sm"
                      >
                        Thank you! We'll contact you soon.
                      </motion.p>
                    )}
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

export default WorkPermitDocuments;



