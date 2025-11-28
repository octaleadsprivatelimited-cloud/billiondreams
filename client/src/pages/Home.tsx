import React from 'react';
import Hero from '../components/Hero';
import { 
  Users, 
  Award, 
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  Shield,
  ListChecks,
  Globe,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  const handleCountryClick = () => {
    // Country click handler
  };

  const services = [
    { 
      title: 'Eligibility Assessment', 
      desc: 'We evaluate your profile or business needs to determine the best work permit category. Our consultants explain requirements, processing times, and the complete approval pathway.', 
      link: '/work-permit-eligibility', 
      gradient: 'from-blue-500 to-cyan-500', 
      size: 'large',
      image: '/services/immigration.jpg'
    },
    { 
      title: 'Document Preparation', 
      desc: 'We provide a clear checklist and review all documents for accuracy and compliance. Our team assists in preparing application forms, letters, and supporting paperwork.', 
      link: '/work-permit-documents', 
      gradient: 'from-emerald-500 to-teal-500', 
      size: 'small',
      image: '/services/study_visa.jpg'
    },
    { 
      title: 'Application Strategy', 
      desc: 'Every case is different. We create a customized application plan designed to maximize approval rates and ensure full compliance with immigration rules.', 
      link: '/work-permit-strategy', 
      gradient: 'from-pink-500 to-rose-500', 
      size: 'medium',
      image: '/services/businessvisa.jpg'
    },
    { 
      title: 'Application Submission', 
      desc: 'Our team manages the full submission process—from compiling your application to coordinating with immigration authorities, embassies, and visa centers.', 
      link: '/work-permit-submission', 
      gradient: 'from-purple-500 to-indigo-500', 
      size: 'medium',
      image: '/services/word_visa.jpg'
    },
    { 
      title: 'Employer Services', 
      desc: 'Ideal for companies hiring international talent: Employer sponsorship & registration, Labour market test support, Compliance guidance, Compliant employment contracts', 
      link: '/work-permit-employer', 
      gradient: 'from-orange-500 to-red-500', 
      size: 'small',
      image: '/services/businessvisa.jpg'
    },
    { 
      title: 'Follow-Up & Status Tracking', 
      desc: 'We monitor your application in real time and handle all communication with authorities, including responses to additional document requests or clarification notices.', 
      link: '/work-permit-tracking', 
      gradient: 'from-amber-500 to-yellow-500', 
      size: 'small',
      image: '/services/immigration.jpg'
    },
    { 
      title: 'Post-Approval Support', 
      desc: 'Once your work permit is approved, we help you complete all follow-up requirements such as: Visa stamping, Medical tests, Biometrics, Residence permit processing', 
      link: '/work-permit-post-approval', 
      gradient: 'from-green-500 to-emerald-500', 
      size: 'small',
      image: '/services/study_visa.jpg'
    },
    { 
      title: 'Compliance & Renewal Assistance', 
      desc: 'We offer ongoing support for work permit renewals, cancellations, changes in employment status, and updates on immigration law changes—ensuring you remain fully compliant.', 
      link: '/work-permit-renewal', 
      gradient: 'from-indigo-500 to-purple-500', 
      size: 'small',
      image: '/services/word_visa.jpg'
    },
    { 
      title: 'Additional Services', 
      desc: 'Enhance your work permit process with optional add-ons: Translation & document attestation, Family/dependent visa processing, Relocation and onboarding assistance, Travel & insurance guidance', 
      link: '/work-permit-additional', 
      gradient: 'from-cyan-500 to-blue-500', 
      size: 'small',
      image: '/services/family_visa.jpg'
    }
  ];

  const features = [
    { icon: Shield, title: 'Expert Counsellors', desc: 'Years of experience in international education', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, title: 'High Success Rate', desc: '98% visa success with ethical guidance', color: 'from-yellow-500 to-orange-500' },
    { icon: Award, title: 'Global Partnerships', desc: 'Strong university partnerships worldwide', color: 'from-purple-500 to-pink-500' },
    { icon: Users, title: '5K+ Students', desc: 'Successful placements and happy clients', color: 'from-blue-500 to-cyan-500' }
  ];

  const testimonials = [
    { name: 'Priya S.', role: 'Student', country: 'Canada', text: 'Amazing service! Got admission to my dream university in Canada.', rating: 5 },
    { name: 'Rahul K.', role: 'Student', country: 'Australia', text: 'Professional team helped me secure scholarship and admission.', rating: 5 },
    { name: 'Sunita P.', role: 'Student', country: 'United Kingdom', text: 'Got into top UK university thanks to Billion Dreams Runway!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-white">
            <Hero />

      {/* Features Section - Creative Grid */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-0">
          <img
            src="/services/immigration.jpg"
            alt="Consulting Background"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Gradient Overlay for Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-purple-50/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-bold mb-4 text-sm">
              <Sparkles size={16} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-500 mb-4">
              Your Success is{' '}
              <span className="text-sky-600">Our Mission</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-3">
              Welcome to <strong>Billion Dreams Runway</strong>, your trusted partner in shaping successful international academic careers. We guide students toward top universities across the globe, offering expert counselling, seamless processes, and reliable support at every step of their study-abroad journey.
            </p>
            <p className="text-base md:text-lg font-semibold text-sky-600 italic">
              "Your Path to Global Success"
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Bento Box Layout */}
      <section className="py-8 md:py-10 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Work Permit Services
            </h2>
            <p className="text-gray-600 mt-2">
              Comprehensive work permit solutions for individuals and employers
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl ${
                  service.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  service.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 
                  'md:col-span-1'
                }`}
              >
                <Link
                  to={service.link}
                  className={`block h-full min-h-[140px] relative overflow-hidden hover:scale-[1.02] transition-all duration-500`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = '/services/immigration.jpg';
                      }}
                    />
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/70 transition-all duration-500"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-3 md:p-4">
                    <div>
                      <div className="inline-block bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-lg mb-1.5 border border-white/20">
                        <h3 className="text-base md:text-lg font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center text-white font-semibold text-xs md:text-sm group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="ml-1.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <Link
              to="/work-permit-services"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>View All Work Permit Services</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-bold mb-4 text-xs md:text-sm">
              <ListChecks size={14} className="md:w-4 md:h-4" />
              <span>Our Objectives</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Objectives of the <span className="text-indigo-600">Consultancy</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Shield,
                title: 'Accurate & Ethical Guidance',
                description: 'To provide accurate and ethical education guidance',
                gradient: 'from-blue-500 to-cyan-500',
                color: 'text-blue-500'
              },
              {
                icon: Globe,
                title: 'Right Global Opportunities',
                description: 'To support students in choosing the right global opportunities',
                gradient: 'from-emerald-500 to-teal-500',
                color: 'text-emerald-500'
              },
              {
                icon: Star,
                title: 'Personalised Service',
                description: 'To enhance student success through personalised service',
                gradient: 'from-amber-500 to-yellow-500',
                color: 'text-amber-500'
              },
              {
                icon: Heart,
                title: 'Long-Term Trust',
                description: 'To establish long-term trust and strong client relationships',
                gradient: 'from-pink-500 to-rose-500',
                color: 'text-pink-500'
              }
            ].map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card p-4 md:p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${objective.gradient} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <objective.icon size={24} className="md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{objective.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Serve Section */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
              WorldWise Study Zones
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Destinations We Offer: EduSphere Elite (USA, UK, Canada) • EuroScholars Belt (Germany, France, Italy, Netherlands) • Aussie Advantage Hub (Australia, New Zealand) • Asia Achievers Network (Singapore, Japan, South Korea, UAE) • Global Emerging Destinations (Ireland, Malaysia, Sweden, Finland)
            </p>
          </div>

          <div className="flex flex-nowrap gap-1 md:gap-3 overflow-x-auto md:overflow-x-visible pb-2 scrollbar-hide px-1 md:justify-center">
            {[
              {
                country: 'USA',
                title: 'USA',
                flag: 'https://flagcdn.com/w320/us.png',
                image: '/country/usa.jpg',
                gradient: 'from-blue-600 to-blue-800'
              },
              {
                country: 'Canada',
                title: 'Canada',
                flag: 'https://flagcdn.com/w320/ca.png',
                image: '/country/canada.jpg',
                gradient: 'from-red-600 to-red-800'
              },
              {
                country: 'Australia',
                title: 'Australia',
                flag: 'https://flagcdn.com/w320/au.png',
                image: '/country/australia.jpg',
                gradient: 'from-green-600 to-green-800'
              },
              {
                country: 'UK',
                title: 'UK',
                flag: 'https://flagcdn.com/w320/gb.png',
                image: '/country/uk.jpg',
                gradient: 'from-indigo-600 to-indigo-800'
              },
              {
                country: 'Germany',
                title: 'Germany',
                flag: 'https://flagcdn.com/w320/de.png',
                image: '/country/Germany.jpg',
                gradient: 'from-gray-700 to-gray-900'
              },
              {
                country: 'Europe',
                title: 'Europe',
                flag: 'https://flagcdn.com/w320/eu.png',
                image: '/country/Europe.jpeg',
                gradient: 'from-purple-600 to-purple-800'
              }
            ].map((country) => (
              <div
                key={country.country}
                onClick={handleCountryClick}
                className="relative overflow-hidden rounded shadow-md hover:shadow-lg cursor-pointer flex-shrink-0 w-16 md:w-40"
              >
                  <div className="relative h-14 md:h-32 overflow-hidden bg-white">
                  <img
                    src={country.flag}
                    alt={`${country.title} flag`}
                    className="w-full h-full object-contain bg-gray-50"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = country.image;
                      e.currentTarget.className = 'w-full h-full object-cover';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-0.5 py-0.5 md:px-2 md:py-1.5">
                    <h3 className="text-[9px] md:text-sm font-bold text-white text-center leading-tight">{country.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Bold & Modern */}
      <section className="py-6 md:py-10 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home/slider-1.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/home/slider-3.jpg';
            }}
          />
          {/* LinkedIn Blue Overlay with Fade */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4 md:mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
              Trusted by Thousands
            </h2>
            <p className="text-base md:text-xl text-white/90 font-semibold">
              Join the success stories
            </p>
          </motion.div>

          <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide md:overflow-x-visible">
            {[
              { icon: Users, value: '5,000+', label: 'Happy Clients' },
              { icon: Award, value: '98%', label: 'Success Rate' },
              { icon: Shield, value: '50+', label: 'Countries' },
              { icon: Zap, value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-effect p-3 md:p-4 rounded-xl md:rounded-2xl hover:scale-110 transition-all duration-300 flex-shrink-0 w-[22vw] min-w-[100px] md:w-auto"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                  <stat.icon size={16} className="md:w-5 md:h-5 text-white" />
                </div>
                <div className="text-xl md:text-3xl lg:text-4xl font-black text-white mb-0.5 md:mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-base text-white/90 font-bold leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Creative Timeline */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-10"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-bold mb-3 md:mb-4 text-xs md:text-sm">
              <Zap size={14} className="md:w-4 md:h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              Simple, Fast,{' '}
              <span className="text-gradient-neon">Effective</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { step: '01', title: 'Free Consult', desc: 'Book your free consultation' },
              { step: '02', title: 'Documents', desc: 'We prepare everything' },
              { step: '03', title: 'Submit', desc: 'Application submitted' },
              { step: '04', title: 'Success!', desc: 'Visa approved!' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-3 md:p-5 rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-purple-300 mb-2 md:mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">{process.title}</h3>
                  <p className="text-xs text-gray-600 font-semibold">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-8 md:py-12 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home/slider-1.jpg"
            alt="Professional background"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* White Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-10"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full font-bold mb-3 md:mb-4 text-xs md:text-sm">
              <Star size={14} className="md:w-4 md:h-4 fill-current" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 md:p-6 rounded-xl md:rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-2 md:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="md:w-4 md:h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-semibold text-xs md:text-base mb-3 md:mb-4 italic">
                  "{testimonial.text}"
                </p>
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                    <div>
                      <div className="font-black text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                      <div className="text-gray-600 font-semibold text-xs md:text-sm">{testimonial.role}</div>
                    </div>
                    <div className="text-xs font-bold text-gray-500">{testimonial.country}</div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern UI/UX Design */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            >
              <Sparkles size={14} className="text-yellow-300" />
              <span className="text-white/90 font-semibold text-xs">Start Your Journey Today</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
            >
              Ready to Start Your
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">
                Dream Journey?
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-white/80 font-medium max-w-2xl mx-auto"
            >
              Don't wait! Your future starts today
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            >
              <Link
                to="/lets-start-your-journey"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-gray-900 rounded-2xl font-bold text-sm md:text-base shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <Sparkles size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </Link>

              <Link
                to="/work-permit-services"
                className="group inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl font-semibold text-sm md:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <span>Explore Services</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8 pt-4 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>98% Success Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
