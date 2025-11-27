import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle, Mail, ArrowRight, Award, TrendingUp, Plane, FileText, ClipboardCheck, ShieldCheck, Target, Briefcase, DollarSign, Users, MapPin } from 'lucide-react';

const MigrateAustralia = () => {
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
      // Form submission removed - contact via email
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
      window.location.href = `mailto:info@billiondreamsrunway.in?subject=Australia Migration Inquiry&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    } catch (error) {
      alert('Please contact us directly at info@billiondreamsrunway.in');
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    { name: "Skilled Independent (189)", features: ["Points-based system", "No state nomination required", "Direct PR pathway", "High demand occupations"], gradient: "from-yellow-600 to-orange-600" },
    { name: "Skilled Nominated (190)", features: ["State/territory nomination", "Additional 5 points", "State-specific occupations", "Faster processing"], gradient: "from-blue-600 to-cyan-600" },
    { name: "Skilled Work Regional (491)", features: ["Regional visa", "5-year validity", "Pathway to PR", "Regional work requirement"], gradient: "from-green-600 to-emerald-600" },
    { name: "Employer Nomination (186)", features: ["Employer sponsorship", "Direct PR", "No points test", "Permanent residency"], gradient: "from-purple-600 to-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/home/slider-3.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 via-orange-900/80 to-blue-900/80"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Migrate to Australia</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Migrate to Australia
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Start your journey to permanent residency in Australia. Expert guidance for skilled migration, state nomination, and all visa pathways.
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
                    {[{label: 'Visa Types', value: '10+'}, {label: 'Processing', value: '6-12 Months'}, {label: 'Success Rate', value: '98%'}, {label: 'PR Pathways', value: '8+'}].map((s, idx) => (
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
              {[{icon: Briefcase, label: 'Skilled Visa 189'}, {icon: MapPin, label: 'State Nomination 190'}, {icon: Target, label: 'Regional Visa 491'}, {icon: Users, label: 'Employer Sponsored'}].map((it, idx) => (
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
                  Why Migrate to Australia?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Australia offers excellent opportunities for skilled workers through its points-based immigration system. With multiple visa pathways including Skilled Independent, State Nominated, and Regional visas, Australia provides clear routes to permanent residency and citizenship.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Australia is known for its high standard of living, excellent healthcare system, world-class education, and strong economy. With a transparent immigration process and various skilled migration programs, Australia offers a secure future for immigrants and their families.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Briefcase, title: "Skilled Independent 189", desc: "Points-based PR visa without state nomination" },
                  { icon: MapPin, title: "State Nominated 190", desc: "State/territory nomination for additional points" },
                  { icon: Target, title: "Regional Visa 491", desc: "Regional work visa with pathway to PR" },
                  { icon: Users, title: "Employer Sponsored 186", desc: "Employer nomination for direct PR" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lifted p-6 hover:shadow-neon transition"
                  >
                    <benefit.icon className="text-yellow-600 mb-4" size={40} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Australia Immigration Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {programs.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative overflow-hidden bg-gradient-to-br ${program.gradient} rounded-2xl shadow-xl p-8 text-white`}
                  >
                    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                    <h3 className="relative text-2xl font-bold mb-4">{program.name}</h3>
                    <ul className="relative space-y-3">
                      {program.features.map((feature, idx) => (
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
                className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Australia Migration Services</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Skilled Independent visa (189) applications",
                    "Skilled Nominated visa (190) support",
                    "Skilled Work Regional visa (491) assistance",
                    "Employer Nomination Scheme (186) guidance",
                    "Skills assessment applications",
                    "English language test preparation (IELTS/PTE)",
                    "Expression of Interest (EOI) submission",
                    "State nomination applications",
                    "Points calculation and optimization",
                    "Document preparation and verification",
                    "Visa application submission and tracking",
                    "Post-arrival settlement support",
                    "Citizenship application guidance",
                    "Ongoing immigration support"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Immigration Process</h2>
                <div className="relative border-l-2 border-yellow-100 pl-6">
                  {[
                    { icon: ClipboardCheck, title: 'Skills Assessment', desc: 'Get your qualifications assessed by relevant authority' },
                    { icon: Target, title: 'Expression of Interest', desc: 'Submit EOI and wait for invitation' },
                    { icon: FileText, title: 'Documentation', desc: 'Prepare and organize all required documents' },
                    { icon: ShieldCheck, title: 'Visa Application', desc: 'Submit visa application after invitation' },
                    { icon: Plane, title: 'PR Approval', desc: 'Receive PR approval and plan your move to Australia' }
                  ].map((step, idx) => (
                    <div key={idx} className="mb-8 group">
                      <div className="absolute -left-[11px] mt-2 w-5 h-5 rounded-full bg-yellow-600 ring-4 ring-yellow-100 group-hover:scale-110 transition" />
                      <div className="flex items-start gap-3">
                        <step.icon className="text-yellow-600 mt-0.5" size={22} />
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
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><FileText className="mr-2 text-yellow-600" size={24} />Key Requirements</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Skills assessment from relevant authority</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>English language proficiency (IELTS/PTE)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Points test score (65+ points)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Age requirement (under 45 years)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Medical examination</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Police clearance certificate</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2 text-yellow-600" size={24} />Processing Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Processing Time: 6-12 months</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Visa Fee: AUD $4,045+ (approx. ₹2,20,000+)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Points requirement: 65+ points</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>EOI invitations: Monthly</span></li>
                      <li className="flex items-start"><CheckCircle className="text-yellow-600 mr-2 mt-1" size={18} /><span>Multiple visa pathways</span></li>
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
                    { q: 'What is the points test for Australia?', a: 'Australia uses a points-based system where you need a minimum of 65 points to be eligible. Points are awarded for age, English language skills, work experience, education, and other factors. Higher points increase your chances of receiving an invitation.' },
                    { q: 'How long does Australia PR processing take?', a: 'Processing times vary by visa type. Skilled Independent (189) and State Nominated (190) visas typically process in 6-12 months after invitation. Regional visas (491) may take 8-12 months. Processing times depend on application completeness and current processing volumes.' },
                    { q: 'What is a skills assessment?', a: 'A skills assessment verifies that your qualifications and work experience meet Australian standards for your nominated occupation. Different assessing authorities handle different occupations. This is a mandatory requirement for skilled migration visas.' },
                    { q: 'Can I apply for multiple state nominations?', a: 'Yes, you can submit Expressions of Interest (EOI) for multiple states/territories. However, you can only accept one state nomination. State nominations add 5 points to your total score and can significantly improve your chances of receiving an invitation.' }
                  ].map((item, idx) => (
                    <div key={idx} className="py-4">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        <span className="text-yellow-600">{openFaqIndex === idx ? '-' : '+'}</span>
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
                      alt="Australia Migration Expert"
                      className="w-full h-40 rounded-xl object-cover ring-4 ring-yellow-50"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Talk to an Australia Migration Expert</h3>
                  <p className="text-gray-600 mb-4">Get a free consultation within 24 hours.</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleScrollToAssessment} className="bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition flex items-center justify-center">
                      <ClipboardCheck size={18} className="mr-2" />
                      Free Assessment
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="font-semibold mb-3">Quick Requirements</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      'Skills assessment',
                      'English test (IELTS/PTE)',
                      'Points test (65+)',
                      'Age under 45',
                      'Medical & police clearance'
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start"><CheckCircle size={16} className="text-yellow-600 mr-2 mt-0.5" />{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900">
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
                  Start Your Australia Migration Journey
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below for a free migration assessment
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Preferred Program</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      placeholder="Tell us about your immigration goals, preferred program, and any questions..."
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
                        <span>Contact Us via Email</span>
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
                      <Mail className="mr-2 text-yellow-600" size={20} />
                      <a href="mailto:info@billiondreamsrunway.in" className="hover:text-yellow-600 transition-colors">info@billiondreamsrunway.in</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img
                  src="/services/study_visa.jpg"
                  alt="Australia migration consultation"
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

export default MigrateAustralia;

