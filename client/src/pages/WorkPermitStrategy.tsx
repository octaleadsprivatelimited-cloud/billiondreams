import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ClipboardCheck, Target, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

const WorkPermitStrategy = () => {
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
      const subject = 'Work Permit Application Strategy Inquiry';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-background.avif"
            alt="Background"
            className="w-full h-full object-cover"
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
              <span className="text-white">Application Strategy</span>
            </nav>
            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Application Strategy
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-lg md:text-xl mb-6 text-white/90">
                  Every case is different. We create a customized application plan designed to maximize approval rates and ensure full compliance with immigration rules.
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
                    {[{label: 'Strategies', value: '3K+'}, {label: 'Success Rate', value: '98%'}, {label: 'Countries', value: '20+'}, {label: 'Cases', value: '5K+'}].map((s, idx) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Strategy Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Tailored strategies to maximize your approval chances</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Target, title: 'Case Analysis', description: 'Deep analysis of your profile to identify strengths and challenges' },
                { icon: Lightbulb, title: 'Customized Plan', description: 'Development of a tailored application strategy' },
                { icon: ShieldCheck, title: 'Compliance Focus', description: 'Ensuring all strategies align with immigration rules' },
                { icon: TrendingUp, title: 'Optimization', description: 'Maximize approval rates while minimizing processing times' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
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
                    <p>We develop personalized application strategies based on your unique profile, ensuring the highest probability of approval while maintaining full compliance with immigration regulations.</p>
                    <p>Every case is different, and we create a customized application plan designed to maximize approval rates and ensure full compliance with immigration rules.</p>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><p><strong>Case Analysis:</strong> Deep analysis of your profile to identify strengths and potential challenges.</p></div>
                      <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><p><strong>Customized Plan:</strong> Development of a tailored application strategy specific to your circumstances.</p></div>
                      <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><p><strong>Compliance Focus:</strong> Ensuring all strategies align with current immigration rules and regulations.</p></div>
                      <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /><p><strong>Optimization:</strong> Strategies designed to maximize approval rates while minimizing processing times.</p></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      { question: 'How is the application strategy customized?', answer: 'We analyze your specific profile, work experience, qualifications, and circumstances to develop a strategy that highlights your strengths and addresses any potential weaknesses in your application.' },
                      { question: 'How long does strategy development take?', answer: 'Strategy development typically takes 3-5 business days after we receive all necessary information about your case. We ensure thorough analysis before presenting your customized plan.' },
                      { question: 'Can the strategy change during the application process?', answer: 'Yes, we can adjust the strategy if circumstances change or new information becomes available. We maintain flexibility to ensure the best possible outcome.' },
                      { question: 'What makes your strategies more effective?', answer: 'Our strategies are based on years of experience, current immigration trends, and deep understanding of what immigration officers look for in successful applications.' }
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
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="assessment" className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl sticky top-24">
                  <h3 className="text-2xl font-bold mb-4">Get Strategy Consultation</h3>
                  <p className="mb-6 text-purple-100">Contact us for a customized application strategy.</p>
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
                      <textarea placeholder="Tell us about your case" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50">{isSubmitting ? 'Submitting...' : 'Request Consultation'}</button>
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

export default WorkPermitStrategy;

