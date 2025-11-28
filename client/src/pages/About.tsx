import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Heart, 
  Target, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Star,
  Eye,
  ListChecks
} from 'lucide-react';

const About: React.FC = () => {

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and services.',
      gradient: 'from-red-500 to-pink-500',
      iconBg: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, ensuring the best outcomes for our clients.',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients\' success is our success. We put their needs at the center of everything we do.',
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously adapt and innovate to provide cutting-edge education consultancy solutions.',
      gradient: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    }
  ];

  const achievements = [
    {
      number: '5000+',
      label: 'Successful Applications',
      description: 'We have successfully helped thousands of students get admitted to top universities',
      icon: CheckCircle,
      color: 'text-emerald-500'
    },
    {
      number: '98%',
      label: 'Success Rate',
      description: 'Our high success rate reflects our expertise and dedication',
      icon: Award,
      color: 'text-amber-500'
    },
    {
      number: '50+',
      label: 'Countries Covered',
      description: 'We provide study abroad services for universities in over 50 countries worldwide',
      icon: Globe,
      color: 'text-blue-500'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Over a decade of experience in overseas education consultancy and student services',
      icon: Star,
      color: 'text-purple-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Certified Experts',
      description: 'Our team consists of certified education consultants with years of experience.',
      color: 'text-green-500'
    },
    {
      icon: Sparkles,
      title: 'Personalized Service',
      description: 'Every student receives personalized attention and tailored education solutions.',
      color: 'text-purple-500'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Our 98% success rate speaks to our commitment to excellence.',
      color: 'text-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
            {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-background.avif"
            alt="About Background"
            className="w-full h-full object-cover"
            style={{ imageRendering: 'high-quality' }}
          />
        </div>
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles className="w-5 h-5 mr-2" />
              About Billion Dreams Runway
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your Trusted <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Education Partner</span>
            </h1>
            <p className="text-base md:text-lg text-blue-100 max-w-4xl mx-auto mb-6">
              <strong>Billion Dreams Runway</strong> is a premier advisory service dedicated to helping students fulfill their dream of global education. With a team of experienced counsellors, certified advisors, and international education experts, we provide personalised guidance tailored to academic goals, financial budgets, and future aspirations.
            </p>
            <div className="flex flex-row gap-2 md:gap-4 justify-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 md:px-8 md:py-4 rounded-lg md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Get Started Today</span>
                <ArrowRight size={16} className="ml-1 md:ml-2 md:w-5 md:h-5" />
              </a>
              <a
                href="/comprehensive-education-solutions"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-4 py-3 md:px-8 md:py-4 rounded-lg md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105"
              >
                <span>Our Services</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg shadow-blue-500/30"
              >
                <Target className="w-4 h-4 mr-2" />
                Mission & Vision
              </motion.div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
                Our Mission & Vision
              </h2>
            </div>

            {/* Mission & Vision Cards - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100 overflow-hidden h-full">
                  {/* Decorative gradient background */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl -mr-24 -mt-24"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full blur-3xl -ml-24 -mb-24"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 md:gap-6 mb-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                          <Target className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                      </div>
                    </div>
                    
                    {/* Text */}
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                      To simplify international admissions through <span className="text-blue-600 font-semibold">transparency</span>, <span className="text-indigo-600 font-semibold">expertise</span>, and <span className="text-purple-600 font-semibold">end-to-end support</span>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100 overflow-hidden h-full">
                  {/* Decorative gradient background */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl -mr-24 -mt-24"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-100/50 to-blue-100/50 rounded-full blur-3xl -ml-24 -mb-24"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 md:gap-6 mb-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                      </div>
                    </div>
                    
                    {/* Text */}
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                      To become the most trusted and preferred education consultancy, empowering students worldwide to achieve their academic dreams and build successful global careers through innovative solutions and unwavering commitment to excellence.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Our Strengths */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg shadow-indigo-500/30"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Our Strengths
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3">
              Our <span className="text-blue-600">Strengths</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              What sets us apart in helping you achieve your study abroad dreams.
            </p>
          </motion.div>

          {/* Strengths Grid - Responsive layout for 5 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Expert Counsellors',
                description: 'Expert counsellors with years of experience',
                gradient: 'from-green-500 to-emerald-600',
                iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
                shadow: 'shadow-green-500/20'
              },
              {
                icon: Globe,
                title: 'Global Partnerships',
                description: 'Strong global university partnerships',
                gradient: 'from-blue-500 to-cyan-600',
                iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
                shadow: 'shadow-blue-500/20'
              },
              {
                icon: Award,
                title: 'High Success Rate',
                description: 'High visa success rate',
                gradient: 'from-amber-500 to-yellow-600',
                iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-600',
                shadow: 'shadow-amber-500/20'
              },
              {
                icon: Heart,
                title: 'Ethical Guidance',
                description: 'Ethical, student-first guidance',
                gradient: 'from-red-500 to-pink-600',
                iconBg: 'bg-gradient-to-br from-red-500 to-pink-600',
                shadow: 'shadow-red-500/20'
              },
              {
                icon: Target,
                title: 'Customised Plans',
                description: 'Fully customised study plans',
                gradient: 'from-purple-500 to-indigo-600',
                iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
                shadow: 'shadow-purple-500/20'
              }
            ].map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-transparent shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 md:w-20 md:h-20 ${strength.iconBg} rounded-2xl flex items-center justify-center shadow-lg ${strength.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <strength.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {strength.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {strength.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg shadow-indigo-500/30"
            >
              <ListChecks className="w-4 h-4 mr-2" />
              Objectives of the Consultancy
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Objectives of the <span className="text-blue-600">Consultancy</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and student success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Accurate & Ethical Guidance',
                  description: 'To provide accurate and ethical education guidance',
                  gradient: 'from-blue-500 to-cyan-600',
                  iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
                  shadow: 'shadow-blue-500/20'
                },
                {
                  icon: Globe,
                  title: 'Right Global Opportunities',
                  description: 'To support students in choosing the right global opportunities',
                  gradient: 'from-emerald-500 to-teal-600',
                  iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
                  shadow: 'shadow-emerald-500/20'
                },
                {
                  icon: Star,
                  title: 'Personalised Service',
                  description: 'To enhance student success through personalised service',
                  gradient: 'from-amber-500 to-yellow-600',
                  iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-600',
                  shadow: 'shadow-amber-500/20'
                },
                {
                  icon: Heart,
                  title: 'Long-Term Trust',
                  description: 'To establish long-term trust and strong client relationships',
                  gradient: 'from-pink-500 to-rose-600',
                  iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
                  shadow: 'shadow-pink-500/20'
                }
              ].map((objective, index) => (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-transparent shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${objective.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className={`w-14 h-14 md:w-16 md:h-16 ${objective.iconBg} rounded-2xl flex items-center justify-center shadow-lg ${objective.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <objective.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {objective.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {objective.description}
                      </p>
                    </div>
                    
                    {/* Decorative corner element */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${objective.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Heart className="w-5 h-5 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              What Drives <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Us Forward</span>
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
              Our values are the foundation of everything we do. They guide our decisions and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden p-8">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 ${value.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our track record speaks for itself. These numbers represent our commitment to excellence and student success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <achievement.icon className={`w-10 h-10 ${achievement.color}`} />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-lg text-blue-200 font-medium mb-2">{achievement.label}</div>
                <div className="text-sm text-blue-300">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Make Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Dreams Reality</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of successful students who have achieved their study abroad goals with our expert guidance and personalized service.
            </p>
            
            <div className="flex flex-row gap-6 justify-center items-center">
              <a
                href="/lets-start-your-journey"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </a>
              
              <a
                href="/comprehensive-education-solutions"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                <span>Explore Services</span>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-row items-center justify-center gap-3 md:gap-8 text-white/80">
              <div className="flex items-center">
                <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium">Certified Experts</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium">98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium">5000+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
