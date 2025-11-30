import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, PhoneCall, ArrowRight, Award, Target, FileText, ClipboardCheck, Clock, DollarSign, Users, Mic, PenTool } from 'lucide-react';
import SEO from '../components/SEO';

const CoachingIELTS = () => {
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

  const testSections = [
    { name: "Listening", features: ["4 sections, 40 questions", "30 minutes + 10 transfer", "Multiple question types", "Academic & General"], gradient: "from-blue-600 to-cyan-600" },
    { name: "Reading", features: ["3 passages, 40 questions", "60 minutes duration", "Academic & General versions", "Comprehension skills"], gradient: "from-green-600 to-emerald-600" },
    { name: "Writing", features: ["2 tasks, 60 minutes", "Task 1: Report/Letter", "Task 2: Essay", "Academic & General"], gradient: "from-purple-600 to-pink-600" },
    { name: "Speaking", features: ["3 parts, 11-14 minutes", "Face-to-face interview", "Fluency assessment", "Pronunciation evaluation"], gradient: "from-orange-600 to-red-600" }
  ];

  return (
    <>
      <SEO
        title="IELTS Coaching - Best IELTS Training & Preparation"
        description="Get expert IELTS coaching from Billion Dreams Runway. Comprehensive IELTS training, practice tests, speaking preparation, and exam strategies to achieve your target band score."
        keywords="IELTS coaching, IELTS training, IELTS preparation, IELTS classes, IELTS online coaching, IELTS exam preparation, IELTS speaking, IELTS writing, IELTS listening, IELTS reading, best IELTS coaching"
        canonical="/coaching-ielts"
        ogImage="/hero-background.avif"
      />
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
              <span className="text-white">IELTS Coaching</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  IELTS Coaching
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Master the International English Language Testing System with expert coaching. Achieve your target band score for study, work, and migration.
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
                    {[{label: 'Test Duration', value: '2h 45m'}, {label: 'Band Score', value: '0-9'}, {label: 'Validity', value: '2 Years'}, {label: 'Success Rate', value: '98%'}].map((s, idx) => (
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
              {[{icon: BookOpen, label: '4 Modules'}, {icon: Target, label: 'Band 7+ Guarantee'}, {icon: Clock, label: 'Flexible Schedule'}, {icon: Users, label: 'Expert Trainers'}].map((it, idx) => (
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
                  Why Choose Our IELTS Coaching?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  IELTS (International English Language Testing System) is the world's most popular English language test for study, work, and migration. Recognized by over 11,000 organizations globally, including universities, employers, and immigration authorities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our comprehensive IELTS coaching program helps you master all four modules: Listening, Reading, Writing, and Speaking. With expert instructors, personalized feedback, and proven strategies, we help students achieve Band 7+ scores for their academic and professional goals.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: BookOpen, title: "Complete Module Coverage", desc: "Expert coaching for all 4 IELTS modules" },
                  { icon: Target, title: "Band Score Improvement", desc: "Average improvement of 1.5-2 bands" },
                  { icon: Clock, title: "Flexible Learning", desc: "Online and offline classes with flexible schedules" },
                  { icon: Users, title: "Expert Instructors", desc: "Certified IELTS trainers with years of experience" }
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

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">IELTS Test Modules</h2>
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
                className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our IELTS Coaching Services</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Comprehensive test preparation curriculum",
                    "Listening strategies and practice tests",
                    "Reading comprehension techniques",
                    "Writing task 1 & 2 workshops",
                    "Speaking interview practice sessions",
                    "Official IELTS practice tests and mock exams",
                    "Personalized study plans and assessments",
                    "Band score improvement guarantee",
                    "Vocabulary building and grammar sessions",
                    "Time management strategies",
                    "Test-taking tips and tricks",
                    "One-on-one tutoring sessions",
                    "Post-test score analysis and feedback",
                    "Academic & General Training preparation"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Test Structure & Details</h2>
                <div className="relative border-l-2 border-blue-100 pl-6">
                  {[
                    { icon: Mic, title: 'Listening', desc: '4 sections, 40 questions, 30 minutes + 10 transfer time' },
                    { icon: BookOpen, title: 'Reading', desc: '3 passages, 40 questions, 60 minutes (Academic/General)' },
                    { icon: PenTool, title: 'Writing', desc: '2 tasks, 60 minutes (Report/Letter + Essay)' },
                    { icon: Users, title: 'Speaking', desc: '3 parts, 11-14 minutes, face-to-face interview' },
                    { icon: Award, title: 'Band Scores', desc: 'Each module scored 0-9, overall band 0-9' }
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Test Details & Preparation</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><FileText className="mr-2 text-blue-600" size={24} />Test Format</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Computer or paper-based test</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Total duration: 2h 45m</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Band score: 0-9 per module</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Validity: 2 years</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Test dates: Multiple per month</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Results: 5-7 days (computer) or 13 days (paper)</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center"><DollarSign className="mr-2 text-blue-600" size={24} />Course Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Duration: 6-8 weeks</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Classes: 3-4 per week</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Mock tests: 8+ practice tests</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Study materials included</span></li>
                      <li className="flex items-start"><CheckCircle className="text-blue-600 mr-2 mt-1" size={18} /><span>Band guarantee: 7+</span></li>
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
                    { q: 'What is a good IELTS score?', a: 'A good IELTS score depends on your purpose. For universities, Band 6.5-7.5 is typically required. For immigration, Band 6-7 is common. Band 7+ is considered excellent and opens doors to top universities and professional opportunities.' },
                    { q: 'How long is IELTS valid?', a: 'IELTS scores are valid for 2 years from the test date. You can take the test multiple times if needed, and institutions will accept your most recent valid score.' },
                    { q: 'Can I retake just one module of IELTS?', a: 'No, you must retake all four modules (Listening, Reading, Writing, Speaking) in a single test session. However, you can retake the entire test as many times as needed.' },
                    { q: 'How long does IELTS preparation take?', a: 'Most students need 6-8 weeks of dedicated preparation depending on their current English level. Our intensive coaching program is designed to help you achieve your target band score within this timeframe, though extended programs are available.' }
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
                  onError={(e) => {
                    e.currentTarget.src = '/services/immigration.jpg';
                  }}
                      alt="IELTS Coaching Expert"
                      className="w-full h-40 rounded-xl object-cover ring-4 ring-blue-50"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Talk to an IELTS Expert</h3>
                  <p className="text-gray-600 mb-4">Get a free test assessment within 24 hours.</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleScrollToAssessment} className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition flex items-center justify-center">
                      <ClipboardCheck size={18} className="mr-2" />
                      Free Assessment
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="font-semibold mb-3">Quick Test Info</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      'Duration: 2h 45m',
                      'Modules: 4 sections',
                      'Band Score: 0-9',
                      'Validity: 2 years',
                      'Format: Computer/Paper'
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

      <section id="assessment" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
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
                  Start Your IELTS Preparation
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below for a free IELTS assessment
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Target Band Score</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Tell us about your target band score, preferred format (Academic/General), and any questions..."
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
                      <PhoneCall className="mr-2 text-blue-600" size={20} />
                      <a href="tel:+919030573605" className="hover:text-blue-600 transition-colors">+91-9030573605</a>
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
                  alt="IELTS coaching consultation"
                  className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CoachingIELTS;



