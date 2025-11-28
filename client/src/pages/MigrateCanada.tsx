import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, ArrowRight, Plane, FileText, ClipboardCheck, ShieldCheck, Target, Briefcase, DollarSign, Users, MapPin } from 'lucide-react';

const MigrateCanada = () => {
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
      window.location.href = `mailto:info@billiondreamsrunway.in?subject=Canada Migration Inquiry&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    } catch (error) {
      alert('Please contact us directly at info@billiondreamsrunway.in');
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    { name: "Express Entry", features: ["Federal Skilled Worker", "Federal Skilled Trades", "Canadian Experience Class", "Comprehensive Ranking System"], gradient: "from-red-600 to-red-800" },
    { name: "Provincial Nominee Program", features: ["Provincial nominations", "Enhanced CRS points", "Province-specific streams", "Faster processing"], gradient: "from-blue-600 to-indigo-600" },
    { name: "Family Sponsorship", features: ["Spouse/Partner sponsorship", "Parent/Grandparent program", "Dependent children", "Family reunification"], gradient: "from-green-600 to-emerald-600" },
    { name: "Business Immigration", features: ["Start-up Visa", "Investor programs", "Self-employed persons", "Entrepreneur programs"], gradient: "from-purple-600 to-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        {/* Country Flag Background */}
        <div className="absolute inset-0 bg-white">
          <img 
            src="https://flagcdn.com/w1280/ca.png" 
            alt="Canada Flag" 
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
              <span className="text-white">Migrate to Canada</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Migrate to Canada
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Start your journey to permanent residency in Canada. Expert guidance for Express Entry, Provincial Nominee Programs, and all immigration pathways.
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
                    {[{label: 'Programs', value: '20+'}, {label: 'Processing', value: '6-12 Months'}, {label: 'Success Rate', value: '98%'}, {label: 'PR Pathways', value: '10+'}].map((s, idx) => (
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
              {[{icon: Briefcase, label: 'Express Entry'}, {icon: MapPin, label: 'PNP Programs'}, {icon: Users, label: 'Family Sponsorship'}, {icon: Target, label: 'Business Visa'}].map((it, idx) => (
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
                  Why Migrate to Canada?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Canada offers one of the world's most welcoming immigration systems with multiple pathways to permanent residency. With Express Entry, Provincial Nominee Programs, and family sponsorship options, Canada provides excellent opportunities for skilled workers, families, and entrepreneurs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Canada is known for its high quality of life, excellent healthcare, world-class education, and strong economy. With a points-based system and transparent immigration processes, Canada offers clear pathways to citizenship and a secure future for immigrants and their families.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Briefcase, title: "Express Entry", desc: "Fast-track PR through points-based system" },
                  { icon: MapPin, title: "Provincial Nominee", desc: "Province-specific immigration programs" },
                  { icon: Users, title: "Family Sponsorship", desc: "Reunite with family members in Canada" },
                  { icon: Target, title: "Business Immigration", desc: "Investor and entrepreneur programs" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lifted p-6 hover:shadow-neon transition"
                  >
                    <benefit.icon className="text-red-600 mb-4" size={40} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Canada Immigration Programs</h2>
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
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Canada Migration Services</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Express Entry profile creation and optimization",
                    "CRS score improvement strategies",
                    "Provincial Nominee Program applications",
                    "Federal Skilled Worker program support",
                    "Canadian Experience Class guidance",
                    "Federal Skilled Trades program assistance",
                    "Family sponsorship applications",
                    "Business immigration programs",
                    "Investor and entrepreneur visa support",
                    "Language test preparation (IELTS/CELPIP)",
                    "Educational credential assessment (ECA)",
                    "Document preparation and verification",
                    "Application submission and tracking",
                    "Post-landing settlement support"
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
                <div className="relative border-l-2 border-red-100 pl-6">
                  {[
                    { icon: ClipboardCheck, title: 'Eligibility Assessment', desc: 'Assess your profile and determine best immigration pathway' },
                    { icon: Target, title: 'Profile Creation', desc: 'Create Express Entry profile or apply to PNP programs' },
                    { icon: FileText, title: 'Documentation', desc: 'Prepare and organize all required documents' },
                    { icon: ShieldCheck, title: 'Application Submission', desc: 'Submit application and track progress' },
                    { icon: Plane, title: 'PR Approval', desc: 'Receive PR approval and plan your move to Canada' }
                  ].map((step, idx) => (
                    <div key={idx} className="mb-8 group">
                      <div className="absolute -left-[11px] mt-2 w-5 h-5 rounded-full bg-red-600 ring-4 ring-red-100 group-hover:scale-110 transition" />
                      <div className="flex items-start gap-3">
                        <step.icon className="text-red-600 mt-0.5" size={22} />
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
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><FileText className="mr-2 text-red-600" size={24} />Key Requirements</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Language proficiency (IELTS/CELPIP)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Educational credential assessment (ECA)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Work experience verification</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Proof of funds</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Medical examination</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Police clearance certificate</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2 text-red-600" size={24} />Processing Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Processing Time: 6-12 months</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Application Fee: CAD $1,325+ (approx. ₹80,000+)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Express Entry draws: Bi-weekly</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>CRS score requirement: 400-500+</span></li>
                      <li className="flex items-start"><CheckCircle className="text-red-600 mr-2 mt-1" size={18} /><span>Multiple pathways available</span></li>
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
                    { q: 'What is Express Entry?', a: 'Express Entry is Canada\'s online system for managing applications for permanent residence from skilled workers. It uses a Comprehensive Ranking System (CRS) to rank candidates based on factors like age, education, work experience, and language skills.' },
                    { q: 'How long does Canada PR processing take?', a: 'Express Entry applications typically process in 6-8 months after receiving an Invitation to Apply (ITA). Provincial Nominee Programs may take 12-18 months. Processing times vary based on the program and individual circumstances.' },
                    { q: 'What is a good CRS score?', a: 'CRS scores in Express Entry draws typically range from 450-500+ for Federal Skilled Worker and Canadian Experience Class. Recent draws have seen scores as low as 400-450. Higher scores increase your chances of receiving an ITA.' },
                    { q: 'Can I apply for multiple programs?', a: 'Yes, you can create an Express Entry profile and also apply to Provincial Nominee Programs simultaneously. A provincial nomination adds 600 points to your CRS score, significantly improving your chances of receiving an ITA.' }
                  ].map((item, idx) => (
                    <div key={idx} className="py-4">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        <span className="text-red-600">{openFaqIndex === idx ? '-' : '+'}</span>
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
                      alt="Canada Migration Expert"
                      className="w-full h-40 rounded-xl object-cover ring-4 ring-red-50"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Talk to a Canada Migration Expert</h3>
                  <p className="text-gray-600 mb-4">Get a free consultation within 24 hours.</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleScrollToAssessment} className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-500 transition flex items-center justify-center">
                      <ClipboardCheck size={18} className="mr-2" />
                      Free Assessment
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="font-semibold mb-3">Quick Requirements</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      'Language test (IELTS/CELPIP)',
                      'Educational assessment (ECA)',
                      'Work experience proof',
                      'Proof of funds',
                      'Medical & police clearance'
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start"><CheckCircle size={16} className="text-red-600 mr-2 mt-0.5" />{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-red-900 to-red-800">
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
                  Start Your Canada Migration Journey
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                      <Mail className="mr-2 text-red-600" size={20} />
                      <a href="mailto:info@billiondreamsrunway.in" className="hover:text-red-600 transition-colors">info@billiondreamsrunway.in</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img
                  src="/services/study_visa.jpg"
                  alt="Canada migration consultation"
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

export default MigrateCanada;

