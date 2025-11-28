import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle, Mail, ArrowRight, Award, TrendingUp, Plane, FileText, ClipboardCheck, GraduationCap, DollarSign } from 'lucide-react';

const StudyFinland = () => {
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
      const subject = 'Study in Finland Inquiry';
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

  const universities = [
    { name: "Top Universities", programs: ["University of Helsinki", "Aalto University", "University of Turku", "University of Oulu"], gradient: "from-blue-600 to-indigo-600" },
    { name: "Technology", programs: ["Aalto University", "Tampere University", "University of Oulu", "LUT University"], gradient: "from-cyan-600 to-blue-600" },
    { name: "Business Schools", programs: ["Aalto Business School", "Hanken School", "University of Vaasa", "LUT Business"], gradient: "from-green-600 to-emerald-600" },
    { name: "Applied Sciences", programs: ["Metropolia", "Tampere University", "Turku AMK", "Laurea"], gradient: "from-purple-600 to-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        {/* Country Flag Background */}
        <div className="absolute inset-0 bg-white">
          <img 
            src="https://flagcdn.com/w1280/fi.png" 
            alt="Finland Flag" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">Study in Finland</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Study in Finland
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Experience world-class education in one of the world's happiest countries. Finland offers innovative teaching methods, cutting-edge research, and excellent career opportunities.
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
                    {[{label: 'Top Universities', value: '40+'}, {label: 'International Students', value: '20K+'}, {label: 'English Programs', value: '500+'}, {label: 'Success Rate', value: '98%'}].map((s, idx) => (
                      <div key={idx} className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-extrabold">{s.value}</div>
                        <div className="text-sm text-white/80">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{icon: GraduationCap, label: 'Innovation'}, {icon: Award, label: 'Quality'}, {icon: TrendingUp, label: 'Tech Hub'}, {icon: Plane, label: 'Visa Support'}].map((it, idx) => (
                <div key={idx} className="glass-effect rounded-xl py-3 px-4 text-white/90 flex items-center gap-2 hover:bg-white/15 transition">
                  <it.icon size={18} />
                  <span className="text-sm">{it.label}</span>
                </div>
              ))}
            </div>
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
                  Why Study in Finland?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Finland is consistently ranked as one of the world's happiest countries and offers one of the best education systems globally. Finnish universities are known for their innovative teaching methods, cutting-edge research, and strong focus on practical learning. The country is particularly strong in technology, engineering, and design.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With a wide range of English-taught programs, Finland welcomes international students from around the world. The country's strong economy, especially in technology and gaming sectors, provides excellent career opportunities for graduates.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: GraduationCap, title: "Innovative Education", desc: "World's best education system" },
                  { icon: Award, title: "Quality Programs", desc: "Top-ranked universities globally" },
                  { icon: TrendingUp, title: "Tech Hub", desc: "Strong technology and gaming industry" },
                  { icon: Globe, title: "English Programs", desc: "Wide range of English-taught courses" }
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

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Top Universities & Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {universities.map((university, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative overflow-hidden bg-gradient-to-br ${university.gradient} rounded-2xl shadow-xl p-8 text-white`}
                  >
                    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                    <h3 className="relative text-2xl font-bold mb-4">{university.name}</h3>
                    <ul className="relative space-y-3">
                      {university.programs.map((program, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                          <span>{program}</span>
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
                className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Finland Study Services</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "University selection and application support",
                    "English proficiency test preparation",
                    "Residence permit application support",
                    "Financial proof and bank statements",
                    "Health insurance guidance",
                    "Accommodation search support",
                    "Pre-departure orientation",
                    "Post-arrival registration assistance",
                    "Finnish ID card application",
                    "Work permit guidance",
                    "Job search support",
                    "Permanent residency pathway"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements & Costs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><FileText className="mr-2 text-blue-600" size={24} />Academic Requirements</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>12+ years of education</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>IELTS 6.0+ or TOEFL iBT 80+</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Academic transcripts</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Motivation letter</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Letters of Recommendation</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2 text-blue-600" size={24} />Estimated Costs (Annual)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Tuition: €8,000 - €18,000</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Living: €7,000 - €9,000</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Health Insurance: €300-€500</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Total: €15,300 - €27,500/year</span></li>
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
                    { q: 'Do I need to know Finnish?', a: 'No, most programs are taught in English. However, learning Finnish can help with daily life and job opportunities after graduation.' },
                    { q: 'What is the cost of living?', a: 'Living costs vary by city. Helsinki is more expensive (€800-€1,200/month) while smaller cities are more affordable (€600-€800/month).' },
                    { q: 'Can I work while studying?', a: 'Yes, international students can work part-time during studies (up to 25 hours/week). After graduation, you can extend your residence permit for job search.' },
                    { q: 'What is the Finnish ID card?', a: 'The Finnish ID card (henkilökortti) is issued after you register your address in Finland. It\'s useful for identification and accessing services.' }
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
                      alt="Finland Study Expert"
                      className="w-full h-40 rounded-xl object-cover ring-4 ring-blue-50"
                      onError={(e) => {
                        e.currentTarget.src = '/services/immigration.jpg';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Talk to a Finland Study Expert</h3>
                  <p className="text-gray-600 mb-4">Get a free profile evaluation within 24 hours.</p>
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
                      '12+ years of education',
                      'IELTS 6.0+ or TOEFL',
                      'Financial proof €6,720/year',
                      'Residence Permit',
                      'Health Insurance'
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

      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800">
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
                  Start Your Finland Study Journey
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below for a free study assessment
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Preferred Program</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Tell us about your academic background, preferred field of study, and any questions..."
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
                  onError={(e) => {
                    e.currentTarget.src = '/services/immigration.jpg';
                  }}
                  alt="Study in Finland consultation"
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

export default StudyFinland;

