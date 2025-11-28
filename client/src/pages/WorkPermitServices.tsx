import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  Target, 
  Send, 
  Building2, 
  Search as TrackIcon, 
  CheckCircle2, 
  RefreshCw, 
  Plus,
  ArrowRight,
  ClipboardCheck
} from 'lucide-react';

const WorkPermitServices = () => {
  const services = [
    {
      icon: Search,
      title: 'Eligibility Assessment',
      description: 'We evaluate your profile or business needs to determine the best work permit category. Our consultants explain requirements, processing times, and the complete approval pathway.',
      link: '/work-permit-eligibility',
      gradient: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: ['Profile Evaluation', 'Category Selection', 'Timeline Planning', 'Requirements Analysis']
    },
    {
      icon: FileText,
      title: 'Document Preparation',
      description: 'We provide a clear checklist and review all documents for accuracy and compliance. Our team assists in preparing application forms, letters, and supporting paperwork to ensure a smooth submission.',
      link: '/work-permit-documents',
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      features: ['Document Checklist', 'Document Review', 'Form Preparation', 'Supporting Documents']
    },
    {
      icon: Target,
      title: 'Application Strategy',
      description: 'Every case is different. We create a customized application plan designed to maximize approval rates and ensure full compliance with immigration rules.',
      link: '/work-permit-strategy',
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
      features: ['Case Analysis', 'Customized Plan', 'Compliance Focus', 'Optimization']
    },
    {
      icon: Send,
      title: 'Application Submission',
      description: 'Our team manages the full submission process—from compiling your application to coordinating with immigration authorities, embassies, and visa centers. You receive continuous updates until a decision is made.',
      link: '/work-permit-submission',
      gradient: 'from-cyan-500 to-blue-600',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      features: ['Application Compilation', 'Submission Coordination', 'Continuous Updates', 'Decision Tracking']
    },
    {
      icon: Building2,
      title: 'Employer Services',
      description: 'Ideal for companies hiring international talent: Employer sponsorship & registration, Labour market test support, Compliance guidance, Assistance with preparing compliant employment contracts.',
      link: '/work-permit-employer',
      gradient: 'from-orange-500 to-red-600',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: ['Sponsorship & Registration', 'Labour Market Test', 'Compliance Guidance', 'Employment Contracts']
    },
    {
      icon: TrackIcon,
      title: 'Follow-Up & Status Tracking',
      description: 'We monitor your application in real time and handle all communication with authorities, including responses to additional document requests or clarification notices.',
      link: '/work-permit-tracking',
      gradient: 'from-indigo-500 to-purple-600',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      features: ['Real-Time Monitoring', 'Communication Management', 'Document Requests', 'Status Updates']
    },
    {
      icon: CheckCircle2,
      title: 'Post-Approval Support',
      description: 'Once your work permit is approved, we help you complete all follow-up requirements such as: Visa stamping, Medical tests, Biometrics, Residence permit or national ID processing.',
      link: '/work-permit-post-approval',
      gradient: 'from-green-500 to-emerald-600',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: ['Visa Stamping', 'Medical Tests', 'Biometrics', 'Residence Permits']
    },
    {
      icon: RefreshCw,
      title: 'Compliance & Renewal Assistance',
      description: 'We offer ongoing support for work permit renewals, cancellations, changes in employment status, and updates on immigration law changes—ensuring you remain fully compliant.',
      link: '/work-permit-renewal',
      gradient: 'from-amber-500 to-yellow-600',
      iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-600',
      features: ['Renewal Assistance', 'Cancellation Support', 'Status Changes', 'Law Updates']
    },
    {
      icon: Plus,
      title: 'Additional Services',
      description: 'Enhance your work permit process with optional add-ons: Translation & document attestation, Family/dependent visa processing, Relocation and onboarding assistance, Travel & insurance guidance.',
      link: '/work-permit-additional',
      gradient: 'from-teal-500 to-cyan-600',
      iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      features: ['Translation & Attestation', 'Family Visa Processing', 'Relocation Assistance', 'Travel & Insurance']
    }
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
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Work Permit Services</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 items-center text-white">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                >
                  Work Permit Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-lg md:text-xl mb-6 text-white/90"
                >
                  Comprehensive work permit solutions for individuals and employers. From eligibility assessment to post-approval support, we guide you through every step of your work permit journey.
                </motion.p>
                <div className="flex flex-row gap-2 md:gap-3">
                  <a
                    href="#services"
                    className="bg-yellow-400 text-gray-900 px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                  >
                    <ClipboardCheck className="mr-1 md:mr-2" size={18} />
                    Explore Services
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="glass-effect rounded-2xl p-6 shadow-neon-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {[{label: 'Services', value: '9'}, {label: 'Success Rate', value: '98%'}, {label: 'Countries', value: '20+'}, {label: 'Clients', value: '8K+'}].map((s, idx) => (
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

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Work Permit Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete end-to-end work permit solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={service.link}>
                    <div className="h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-transparent shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-6">
                          <div className={`w-16 h-16 md:w-20 md:h-20 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient}`}></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Learn More Link */}
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                          <span className="text-sm md:text-base">Learn More</span>
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      {/* Decorative corner element */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Work Permit Journey?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Get expert guidance and support for your work permit application. Contact us today for a free consultation.
              </p>
              <Link
                to="/lets-start-your-journey"
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <ClipboardCheck className="mr-2" size={18} />
                Get Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPermitServices;

