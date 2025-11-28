import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Mail, ArrowRight, Target, FileText, ClipboardCheck, ShieldCheck, Clock, DollarSign, Users } from 'lucide-react';

const CoachingGRE = () => {
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
      const subject = 'GRE Coaching Inquiry';
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

  const testSections = [
    { name: "Verbal Reasoning", features: ["Reading Comprehension", "Text Completion", "Sentence Equivalence", "Critical Analysis"], gradient: "from-purple-600 to-indigo-600" },
    { name: "Quantitative Reasoning", features: ["Arithmetic & Algebra", "Geometry & Data Analysis", "Problem Solving", "Quantitative Comparison"], gradient: "from-blue-600 to-cyan-600" },
    { name: "Analytical Writing", features: ["Issue Essay", "Argument Essay", "Critical Thinking", "Logical Reasoning"], gradient: "from-green-600 to-emerald-600" },
    { name: "Unscored Sections", features: ["Experimental Questions", "Research Section", "Variable Sections", "Test Adaptation"], gradient: "from-orange-600 to-amber-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-background.avif"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ imageRendering: 'high-quality' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm text-white/80 mb-6">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white">GRE Coaching</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  GRE Coaching
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Master the Graduate Record Examination with expert coaching. Achieve your target score for graduate school admissions worldwide.
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
                    {[{label: 'Test Duration', value: '3h 45m'}, {label: 'Score Range', value: '130-170'}, {label: 'Validity', value: '5 Years'}, {label: 'Success Rate', value: '95%'}].map((s, idx) => (
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
              {[{icon: BookOpen, label: 'Comprehensive Prep'}, {icon: Target, label: 'Score Guarantee'}, {icon: Clock, label: 'Flexible Schedule'}, {icon: Users, label: 'Expert Trainers'}].map((it, idx) => (
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
                  Why Choose Our GRE Coaching?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The GRE (Graduate Record Examination) is a standardized test required for admission to graduate schools worldwide, including MBA programs. Our comprehensive coaching program helps you master all three sections: Verbal Reasoning, Quantitative Reasoning, and Analytical Writing.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With expert instructors, personalized study plans, and proven strategies, we help students achieve scores of 320+ and unlock opportunities at top universities in the USA, UK, Canada, and Australia.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: BookOpen, title: "Comprehensive Curriculum", desc: "Cover all sections with detailed study materials" },
                  { icon: Target, title: "Score Improvement", desc: "Average score improvement of 15-20 points" },
                  { icon: Clock, title: "Flexible Learning", desc: "Online and offline classes with flexible schedules" },
                  { icon: Users, title: "Expert Instructors", desc: "Certified trainers with years of experience" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lifted p-6 hover:shadow-neon transition"
                  >
                    <benefit.icon className="text-purple-600 mb-4" size={40} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">GRE Test Sections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testSections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative overflow-hidden bg-gradient-to-br ${section.gradient} rounded-2xl shadow-xl p-8 text-white`}
                  >
                    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                    <h3 className="relative text-2xl font-bold mb-4">{section.name}</h3>
                    <ul className="relative space-y-3">
                      {section.features.map((feature, idx) => (
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
                className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our GRE Coaching Services</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Comprehensive test preparation curriculum",
                    "Verbal reasoning strategy sessions",
                    "Quantitative reasoning practice sessions",
                    "Analytical writing workshops",
                    "Official GRE practice tests and mock exams",
                    "Personalized study plans and assessments",
                    "Score improvement guarantee program",
                    "Vocabulary building and word lists",
                    "Math concepts and problem-solving techniques",
                    "Essay writing and argument analysis",
                    "Time management strategies",
                    "Test-taking tips and tricks",
                    "One-on-one tutoring sessions",
                    "Post-test score analysis and feedback"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">GRE Test Structure</h2>
                <div className="relative border-l-2 border-purple-100 pl-6">
                  {[
                    { icon: ClipboardCheck, title: 'Analytical Writing', desc: '2 essays (Issue & Argument) - 60 minutes, scored 0-6' },
                    { icon: BookOpen, title: 'Verbal Reasoning', desc: '2 sections, 20 questions each - 60 minutes, scored 130-170' },
                    { icon: Target, title: 'Quantitative Reasoning', desc: '2 sections, 20 questions each - 70 minutes, scored 130-170' },
                    { icon: ShieldCheck, title: 'Unscored Sections', desc: 'Experimental or research section - variable' },
                    { icon: Clock, title: 'Total Duration', desc: '3 hours 45 minutes (including breaks)' }
                  ].map((step, idx) => (
                    <div key={idx} className="mb-8 group">
                      <div className="absolute -left-[11px] mt-2 w-5 h-5 rounded-full bg-purple-600 ring-4 ring-purple-100 group-hover:scale-110 transition" />
                      <div className="flex items-start gap-3">
                        <step.icon className="text-purple-600 mt-0.5" size={22} />
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Test Details & Preparation</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><FileText className="mr-2 text-purple-600" size={24} />Test Format</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Computer-based test (CBT)</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Section-adaptive scoring</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Total duration: 3h 45m</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Score range: 260-340</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Validity: 5 years</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Multiple test attempts allowed</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2 text-purple-600" size={24} />Course Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Duration: 6-8 weeks</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Classes: 3-4 per week</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Mock tests: 10+ practice tests</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Study materials included</span></li>
                      <li className="flex items-start"><CheckCircle className="text-purple-600 mr-2 mt-1" size={18} /><span>Score guarantee: 320+</span></li>
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
                    { q: 'What is a good GRE score?', a: 'A good GRE score depends on your target program. Generally, scores above 320 (160+ in each section) are competitive for top programs. Engineering programs may focus more on Quantitative scores, while humanities programs value Verbal scores.' },
                    { q: 'How long is GRE valid?', a: 'GRE scores are valid for 5 years from the test date. You can send scores to multiple institutions, and schools will receive both current and past scores if you\'ve taken the test multiple times.' },
                    { q: 'Can I retake the GRE?', a: 'Yes, you can take the GRE once every 21 days, up to 5 times within any continuous rolling 12-month period. Many students improve their scores significantly on retakes.' },
                    { q: 'How long does GRE preparation take?', a: 'Most students need 3-6 months of preparation depending on their starting level. Our intensive coaching program is designed for 6-8 weeks with dedicated study, though extended programs are available for those needing more time.' }
                  ].map((item, idx) => (
                    <div key={idx} className="py-4">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        <span className="text-purple-600">{openFaqIndex === idx ? '-' : '+'}</span>
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
                      alt="GRE Coaching Expert"
                      className="w-full h-40 rounded-xl object-cover ring-4 ring-purple-50"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Talk to a GRE Expert</h3>
                  <p className="text-gray-600 mb-4">Get a free test assessment within 24 hours.</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleScrollToAssessment} className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-500 transition flex items-center justify-center">
                      <ClipboardCheck size={18} className="mr-2" />
                      Free Assessment
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="font-semibold mb-3">Quick Test Info</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      'Duration: 3h 45m',
                      'Sections: 3 main sections',
                      'Score: 260-340 total',
                      'Validity: 5 years',
                      'Format: Computer-based'
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start"><CheckCircle size={16} className="text-purple-600 mr-2 mt-0.5" />{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
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
                  Start Your GRE Preparation
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below for a free GRE assessment
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Target Score</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="Tell us about your target score, preferred program, and any questions..."
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
                      <Mail className="mr-2 text-purple-600" size={20} />
                      <a href="mailto:info@billiondreamsrunway.in" className="hover:text-purple-600 transition-colors">info@billiondreamsrunway.in</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img
                  src="/services/study_visa.jpg"
                  alt="GRE coaching consultation"
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

export default CoachingGRE;

