import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, ArrowRight, Plane, FileText, ClipboardCheck, ShieldCheck, Target, DollarSign, Calendar, MapPin } from 'lucide-react';

const VisitUK = () => {
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
      const subject = 'Visit UK Visa Inquiry';
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = `mailto:info@billiondreamsrunway.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert('Please contact us directly at info@billiondreamsrunway.in');
    } finally {
      setIsSubmitting(false);
    }
  };

  const visaTypes = [
    { name: "Standard Visitor Visa", features: ["Tourism", "Family visits", "Business trips", "Medical treatment"], gradient: "from-blue-600 to-indigo-600" },
    { name: "Business Visitor Visa", features: ["Meetings", "Conferences", "Training", "Negotiations"], gradient: "from-purple-600 to-pink-600" },
    { name: "Transit Visa", features: ["Airport transit", "Short stays", "Connecting flights", "24-48 hour transit"], gradient: "from-cyan-600 to-blue-600" },
    { name: "Long-term Visit Visa", features: ["Multiple entries", "2-10 years validity", "Extended stays", "Frequent travel"], gradient: "from-rose-600 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        {/* Country Flag Background */}
        <div className="absolute inset-0 bg-white">
          <img 
            src="https://flagcdn.com/w1280/gb.png" 
            alt="UK Flag" 
            className="w-full h-full object-cover"
            style={{ imageRendering: 'high-quality' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Visit UK</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Visit UK
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Experience the historic charm of the United Kingdom with expert visa assistance. Explore London, Edinburgh, and more with seamless travel documentation.
                </motion.p>
                <div className="flex flex-row gap-2 md:gap-3">
                  <button
                    onClick={handleScrollToAssessment}
                    className="bg-yellow-400 text-gray-900 px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                  >
                    <ClipboardCheck className="mr-1 md:mr-2" size={18} />
                    Free Assessment
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="glass-effect rounded-2xl p-6 shadow-neon-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {[{label: 'Visa Types', value: '4+'}, {label: 'Processing', value: '15-30 Days'}, {label: 'Success Rate', value: '98%'}, {label: 'Validity', value: '2-10 Years'}].map((s, idx) => (
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

          <div className="mt-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{icon: Plane, label: 'Tourist Visa'}, {icon: MapPin, label: 'Business Visa'}, {icon: Calendar, label: 'Quick Processing'}, {icon: ShieldCheck, label: 'Expert Support'}].map((it, idx) => (
                <div key={idx} className="glass-effect rounded-xl py-3 px-4 text-white/90 flex items-center gap-2 hover:bg-white/15 transition">
                  <it.icon size={18} />
                  <span className="text-sm">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Visit UK?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The United Kingdom offers rich history, stunning architecture, and vibrant culture. From the royal palaces and museums of London to the breathtaking landscapes of Scotland and Wales, the UK is a dream destination for travelers seeking unique experiences.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  UK visitor visas allow you to explore this beautiful country for tourism, business, or visiting family and friends. With proper guidance and documentation, you can obtain a Standard Visitor Visa or Long-term Visit Visa that enables multiple visits over several years.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Plane, title: "Standard Visitor Visa", desc: "For tourism, family visits, and short stays up to 6 months" },
                  { icon: MapPin, title: "Business Visitor Visa", desc: "Perfect for business meetings, conferences, and training" },
                  { icon: Calendar, title: "Quick Processing", desc: "15-30 days processing with expert assistance" },
                  { icon: ShieldCheck, title: "Long-term Options", desc: "2-10 year visas available for frequent travelers" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lifted p-6 hover:shadow-neon transition"
                  >
                    <benefit.icon className="text-blue-600 mb-4" size={40} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">UK Visa Types</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {visaTypes.map((visa, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative overflow-hidden bg-gradient-to-br ${visa.gradient} rounded-2xl shadow-xl p-8 text-white`}
                  >
                    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                    <h3 className="relative text-2xl font-bold mb-4">{visa.name}</h3>
                    <ul className="relative space-y-3">
                      {visa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our UK Visit Visa Services</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Online visa application assistance",
                    "Document checklist preparation",
                    "Financial documentation support",
                    "Travel itinerary planning",
                    "Biometric appointment booking",
                    "Visa application submission",
                    "Application tracking and updates",
                    "Interview preparation (if required)",
                    "Post-visa travel guidance",
                    "Visa renewal assistance",
                    "Priority visa services",
                    "Family visa applications",
                    "Business visitor visa support",
                    "Long-term visa applications"
                  ].map((service, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <CheckCircle className="mr-3 flex-shrink-0" size={22} />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visa Application Process</h2>
                <div className="relative border-l-2 border-blue-100 pl-6">
                  {[
                    { icon: ClipboardCheck, title: 'Document Preparation', desc: 'Gather required documents and financial proof' },
                    { icon: FileText, title: 'Online Application', desc: 'Complete UK visa application form online' },
                    { icon: Target, title: 'Biometric Appointment', desc: 'Book and attend biometric appointment' },
                    { icon: ShieldCheck, title: 'Processing & Decision', desc: 'Visa processing and decision notification' },
                    { icon: Plane, title: 'Visa Collection', desc: 'Collect passport with visa and travel' }
                  ].map((step, idx) => (
                    <div key={idx} className="mb-8 group">
                      <div className="absolute -left-[11px] mt-2 w-5 h-5 rounded-full bg-blue-600 ring-4 ring-blue-100 group-hover:scale-110 transition" />
                      <div className="flex items-start gap-3">
                        <step.icon className="text-blue-600 mt-0.5" size={22} />
                        <div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements & Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><FileText className="mr-2 text-blue-600" size={24} />Required Documents</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Valid passport (6+ months validity)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Completed visa application form</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Recent photographs</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Financial documents (bank statements)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Travel itinerary and accommodation</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Employment letter (if applicable)</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2 text-blue-600" size={24} />Processing Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Processing Time: 15-30 days</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Visa Fee: £100 (approx. ₹10,500)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Validity: 6 months to 10 years</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Stay Duration: Up to 6 months</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Multiple entries allowed</span></li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="divide-y divide-gray-200">
                  {[
                    { q: 'How long can I stay in the UK on a visitor visa?', a: 'A Standard Visitor Visa typically allows stays of up to 6 months per visit. Long-term visitor visas (2-10 years) allow multiple entries, with each stay limited to 6 months.' },
                    { q: 'Do I need to provide biometrics for UK visa?', a: 'Yes, most applicants need to provide biometric information (fingerprints and photograph) at a Visa Application Centre. This is usually done during the application process.' },
                    { q: 'Can I work in the UK on a visitor visa?', a: 'No, visitor visas do not permit work. However, you can attend business meetings, conferences, and training sessions. Any paid work requires a different visa category.' },
                    { q: 'How early can I apply for a UK visitor visa?', a: 'You can apply up to 3 months before your intended travel date. It\'s recommended to apply well in advance to allow for processing time and any unexpected delays.' }
                  ].map((item, idx) => (
                    <div key={idx} className="py-4">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        <span className="text-blue-600">{openFaqIndex === idx ? '-' : '+'}</span>
                      </button>
                      {openFaqIndex === idx && (
                        <p className="mt-2 text-gray-600">{item.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="relative mb-4">
                    <img
                      src="/services/study_visa.jpg"
                      alt="UK Visit Visa Expert"
                      className="w-full h-40 rounded-xl object-cover ring-4 ring-blue-50"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Talk to a UK Visa Expert</h3>
                  <p className="text-gray-600 mb-4">Get a free visa consultation within 24 hours.</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleScrollToAssessment} className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition flex items-center justify-center">
                      <ClipboardCheck size={18} className="mr-2" />
                      Free Assessment
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="font-semibold mb-3">Quick Requirements</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      'Valid passport (6+ months)',
                      'Online application form',
                      'Financial proof',
                      'Travel itinerary',
                      'Biometric appointment'
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start"><CheckCircle size={16} className="text-blue-600 mr-2 mt-0.5" />{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Start Your UK Visit Journey
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below for a free visa assessment
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Purpose of Visit</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Tell us about your travel plans, purpose of visit, and any questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full ${isSubmitted ? 'bg-green-500' : 'bg-yellow-400'} text-gray-900 py-3.5 rounded-lg font-semibold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" size={18} />
                        <span>Submitted Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Assessment</span>
                        <ArrowRight className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
                    <div className="flex items-center">
                      <Mail className="mr-2 text-blue-600" size={20} />
                      <a href="mailto:info@billiondreamsrunway.in" className="hover:text-blue-600 transition-colors">info@billiondreamsrunway.in</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img
                  src="/services/study_visa.jpg"
                  alt="Visit UK visa consultation"
                  className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitUK;

