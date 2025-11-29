import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Globe,
  Sparkles
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuCategories = {
    study: [
      { name: 'USA', path: '/study-usa' },
      { name: 'UK', path: '/study-uk' },
      { name: 'Canada', path: '/study-canada' },
      { name: 'Australia', path: '/study-australia' },
      { name: 'Germany', path: '/study-germany' },
      { name: 'France', path: '/study-france' },
      { name: 'Italy', path: '/study-italy' },
      { name: 'Ireland', path: '/study-ireland' },
      { name: 'Sweden', path: '/study-sweden' },
      { name: 'Finland', path: '/study-finland' },
      { name: 'Spain', path: '/study-spain' },
      { name: 'Switzerland', path: '/study-switzerland' },
      { name: 'New Zealand', path: '/study-new-zealand' },
      { name: 'Malaysia', path: '/study-malaysia' }
    ],
    visit: [
      { name: 'USA', path: '/visit-usa' },
      { name: 'UK', path: '/visit-uk' },
      { name: 'Canada', path: '/visit-canada' },
      { name: 'Australia', path: '/visit-australia' },
      { name: 'Netherlands', path: '/visit-netherlands' },
      { name: 'New Zealand', path: '/visit-new-zealand' },
      { name: 'Malaysia', path: '/visit-malaysia' },
      { name: 'Dubai', path: '/visit-dubai' },
      { name: 'Singapore', path: '/visit-singapore' },
      { name: 'Schengen', path: '/visit-schengen' },
      { name: 'Ireland', path: '/visit-ireland' }
    ],
    coaching: [
      { name: 'GRE', path: '/coaching-gre' },
      { name: 'IELTS', path: '/coaching-ielts' },
      { name: 'TOEFL', path: '/coaching-toefl' },
      { name: 'PTE', path: '/coaching-pte' },
      { name: 'Duolingo', path: '/coaching-duolingo' }
    ],
    workPermit: [
      { name: 'Eligibility Assessment', path: '/work-permit-eligibility', desc: 'We evaluate your profile or business needs to determine the best work permit category. Our consultants explain requirements, processing times, and the complete approval pathway.', icon: '📋' },
      { name: 'Document Preparation', path: '/work-permit-documents', desc: 'We provide a clear checklist and review all documents for accuracy and compliance. Our team assists in preparing application forms, letters, and supporting paperwork to ensure a smooth submission.', icon: '📄' },
      { name: 'Application Strategy', path: '/work-permit-strategy', desc: 'Every case is different. We create a customized application plan designed to maximize approval rates and ensure full compliance with immigration rules.', icon: '🎯' },
      { name: 'Application Submission', path: '/work-permit-submission', desc: 'Our team manages the full submission process—from compiling your application to coordinating with immigration authorities, embassies, and visa centers. You receive continuous updates until a decision is made.', icon: '📤' },
      { name: 'Employer Services', path: '/work-permit-employer', desc: 'Ideal for companies hiring international talent: Employer sponsorship & registration, Labour market test support, Compliance guidance, Assistance with preparing compliant employment contracts', icon: '🏢' },
      { name: 'Follow-Up & Status Tracking', path: '/work-permit-tracking', desc: 'We monitor your application in real time and handle all communication with authorities, including responses to additional document requests or clarification notices.', icon: '📊' },
      { name: 'Post-Approval Support', path: '/work-permit-post-approval', desc: 'Once your work permit is approved, we help you complete all follow-up requirements such as: Visa stamping, Medical tests, Biometrics, Residence permit or national ID processing', icon: '✅' },
      { name: 'Compliance & Renewal Assistance', path: '/work-permit-renewal', desc: 'We offer ongoing support for work permit renewals, cancellations, changes in employment status, and updates on immigration law changes—ensuring you remain fully compliant.', icon: '🔄' },
      { name: 'Additional Services', path: '/work-permit-additional', desc: 'Enhance your work permit process with optional add-ons: Translation & document attestation, Family/dependent visa processing, Relocation and onboarding assistance, Travel & insurance guidance', icon: '➕' }
    ],
    migrate: [
      { name: 'Canada', path: '/migrate-canada' },
      { name: 'Australia', path: '/migrate-australia' }
    ]
  };


  const mainNavigation = [
    { name: 'About Us', path: '/your-trusted-education-partner' },
    { name: 'Study', path: '/study-usa', hasDropdown: true, dropdownType: 'study' },
    { name: 'Visit', path: '/visit-usa', hasDropdown: true, dropdownType: 'visit' },
    { name: 'Coaching', path: '/coaching-gre', hasDropdown: true, dropdownType: 'coaching' },
    { name: 'Work Permit Services', path: '/work-permit-eligibility', hasDropdown: true, dropdownType: 'workPermit' },
    { name: 'Migrate', path: '/migrate-canada', hasDropdown: true, dropdownType: 'migrate' },
    { name: 'Blog', path: '/blog-resources' },
    { name: 'Contact Us', path: '/lets-start-your-journey' }
  ];

  return (
    <>
      {/* Main Header - Compact */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-200 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-12 md:h-14 lg:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative h-10 md:h-12 flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Billion Dreams Runway Logo" 
                  className="h-full w-auto object-contain max-w-[95px] md:max-w-[120px]"
                  style={{ display: logoLoaded ? 'block' : 'none' }}
                  onLoad={() => setLogoLoaded(true)}
                  onError={() => setLogoLoaded(false)}
                />
                {!logoLoaded && (
                  <span className="hidden sm:inline text-black text-base md:text-lg lg:text-xl font-bold whitespace-nowrap">
                    Billion Dreams Runway
                  </span>
                )}
              </div>
              {logoLoaded && (
                <span className="hidden sm:inline text-gray-900 text-sm md:text-base lg:text-lg font-semibold tracking-tight">
                  Billion Dreams Runway
                </span>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => setActiveDropdown(item.dropdownType || 'workPermit')}
                        onClick={() => setActiveDropdown(activeDropdown === (item.dropdownType || 'workPermit') ? null : (item.dropdownType || 'workPermit'))}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center space-x-1 ${
                          ((item.dropdownType === 'workPermit' && (location.pathname.includes('/work-permit-'))) ||
                           (item.dropdownType === 'study' && (location.pathname.includes('/study-usa') || location.pathname.includes('/study-uk') || location.pathname.includes('/study-canada') || location.pathname.includes('/study-australia') || location.pathname.includes('/study-new-zealand') || location.pathname.includes('/study-malaysia'))) ||
                           (item.dropdownType === 'visit' && (location.pathname.includes('/visit-usa') || location.pathname.includes('/visit-uk') || location.pathname.includes('/visit-canada') || location.pathname.includes('/visit-australia') || location.pathname.includes('/visit-netherlands') || location.pathname.includes('/visit-new-zealand') || location.pathname.includes('/visit-malaysia') || location.pathname.includes('/visit-dubai') || location.pathname.includes('/visit-singapore') || location.pathname.includes('/visit-schengen') || location.pathname.includes('/visit-ireland'))) ||
                           (item.dropdownType === 'coaching' && (location.pathname.includes('/coaching-gre') || location.pathname.includes('/coaching-ielts') || location.pathname.includes('/coaching-toefl') || location.pathname.includes('/coaching-pte') || location.pathname.includes('/coaching-duolingo'))) ||
                           (item.dropdownType === 'migrate' && (location.pathname.includes('/migrate-canada') || location.pathname.includes('/migrate-australia'))))
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'text-black hover:bg-gray-100 hover:text-black'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === (item.dropdownType || 'workPermit') || activeDropdown === 'study' || activeDropdown === 'visit' || activeDropdown === 'coaching' || activeDropdown === 'migrate' ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onMouseEnter={() => setActiveDropdown(null)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                          : 'text-black hover:bg-gray-100 hover:text-black'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-1.5 rounded-xl text-black hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Study Dropdown - Desktop - Creative Design */}
      <AnimatePresence>
        {activeDropdown === 'study' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 bottom-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveDropdown(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-xl shadow-2xl border-b border-indigo-500/20"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={(e) => {
                const relatedTarget = e.relatedTarget as HTMLElement;
                if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
                  setActiveDropdown(null);
                }
              }}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 md:py-12">
                {/* Creative Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 text-center relative"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <GraduationCap className="text-indigo-400" size={28} />
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Study Abroad Destinations
                    </h3>
                    <Globe className="text-purple-400" size={28} />
                  </div>
                  <p className="text-sm md:text-base text-gray-400">Choose your dream destination to pursue higher education</p>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <Sparkles className="text-yellow-400 animate-pulse" size={20} />
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {/* North America - Creative Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
                          <Globe className="text-white" size={20} />
                        </div>
                        <h4 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                          North America
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {menuCategories.study.filter(item => ['USA', 'Canada'].includes(item.name)).map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                            whileHover={{ scale: 1.05, x: 6 }}
                          >
                            <Link
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className="group/item flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-800/30 hover:from-indigo-500/20 hover:to-purple-500/20 border border-gray-700/50 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                  <GraduationCap className="text-indigo-400" size={18} />
                                </div>
                                <div>
                                  <span className="text-base font-semibold text-white group-hover/item:text-indigo-300 transition-colors block">
                                    {item.name}
                                  </span>
                                  <span className="text-xs text-gray-400 group-hover/item:text-gray-300">Top Universities</span>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-indigo-400 opacity-0 group-hover/item:opacity-100 transform translate-x-[-8px] group-hover/item:translate-x-0 transition-all duration-300" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Europe - Creative Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-3 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md">
                          <Globe className="text-white" size={14} />
                        </div>
                        <h4 className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          Europe
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        {menuCategories.study.filter(item => ['UK', 'Germany', 'France', 'Italy', 'Ireland', 'Sweden', 'Finland', 'Spain', 'Switzerland'].includes(item.name)).map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.25 + index * 0.03 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Link
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className="group/item flex flex-col items-center justify-center p-1.5 rounded-md bg-gradient-to-br from-gray-800/50 to-gray-800/30 hover:from-blue-500/20 hover:to-cyan-500/20 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg min-h-[50px]"
                            >
                              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 mb-1">
                                <GraduationCap className="text-blue-400" size={10} />
                              </div>
                              <span className="text-[10px] font-semibold text-white group-hover/item:text-blue-300 transition-colors text-center leading-tight">
                                {item.name}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Asia - Creative Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                          <Globe className="text-white" size={20} />
                        </div>
                        <h4 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                          Asia
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {menuCategories.study.filter(item => ['Malaysia'].includes(item.name)).map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.05, x: 6 }}
                          >
                            <Link
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className="group/item flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-800/30 hover:from-amber-500/20 hover:to-orange-500/20 border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                  <GraduationCap className="text-amber-400" size={18} />
                                </div>
                                <div>
                                  <span className="text-base font-semibold text-white group-hover/item:text-amber-300 transition-colors block">
                                    {item.name}
                                  </span>
                                  <span className="text-xs text-gray-400 group-hover/item:text-gray-300">Affordable Quality</span>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-amber-400 opacity-0 group-hover/item:opacity-100 transform translate-x-[-8px] group-hover/item:translate-x-0 transition-all duration-300" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Oceania - Creative Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                          <Globe className="text-white" size={20} />
                        </div>
                        <h4 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Oceania
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {menuCategories.study.filter(item => ['Australia', 'New Zealand'].includes(item.name)).map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.35 + index * 0.1 }}
                            whileHover={{ scale: 1.05, x: 6 }}
                          >
                            <Link
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className="group/item flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-800/30 hover:from-purple-500/20 hover:to-pink-500/20 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                  <GraduationCap className="text-purple-400" size={18} />
                                </div>
                                <div>
                                  <span className="text-base font-semibold text-white group-hover/item:text-purple-300 transition-colors block">
                                    {item.name}
                                  </span>
                                  <span className="text-xs text-gray-400 group-hover/item:text-gray-300">World-Class Education</span>
                                </div>
                              </div>
                              <ArrowRight size={16} className="text-purple-400 opacity-0 group-hover/item:opacity-100 transform translate-x-[-8px] group-hover/item:translate-x-0 transition-all duration-300" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Visit Dropdown - Desktop - Continent Wise */}
      <AnimatePresence>
        {activeDropdown === 'visit' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 bottom-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveDropdown(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 md:py-8">
                <div className="mb-4 md:mb-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Visit & Travel Visas
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">Travel visa services organized by continent</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {/* North America */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="space-y-3"
                  >
                    <h4 className="text-base font-semibold text-emerald-400 mb-3 pb-2 border-b border-gray-700">North America</h4>
                    <div className="space-y-2">
                      {menuCategories.visit.filter(item => ['USA', 'Canada'].includes(item.name)).map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-center justify-between p-3 rounded-lg bg-gray-900/60 hover:bg-gray-800 border border-gray-700/50 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg"
                          >
                            <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                              {item.name}
                            </span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-emerald-400 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Europe */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="space-y-3"
                  >
                    <h4 className="text-base font-semibold text-blue-400 mb-3 pb-2 border-b border-gray-700">Europe</h4>
                    <div className="space-y-2">
                      {menuCategories.visit.filter(item => ['UK', 'Ireland', 'Netherlands', 'Schengen'].includes(item.name)).map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: 0.15 + index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-center justify-between p-3 rounded-lg bg-gray-900/60 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                          >
                            <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                              {item.name}
                            </span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-blue-400 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Asia */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="space-y-3"
                  >
                    <h4 className="text-base font-semibold text-amber-400 mb-3 pb-2 border-b border-gray-700">Asia</h4>
                    <div className="space-y-2">
                      {menuCategories.visit.filter(item => ['Malaysia', 'Singapore', 'Dubai'].includes(item.name)).map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-center justify-between p-3 rounded-lg bg-gray-900/60 hover:bg-gray-800 border border-gray-700/50 hover:border-amber-500 transition-all duration-300 hover:shadow-lg"
                          >
                            <span className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                              {item.name}
                            </span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-amber-400 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Oceania */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="space-y-3"
                  >
                    <h4 className="text-base font-semibold text-purple-400 mb-3 pb-2 border-b border-gray-700">Oceania</h4>
                    <div className="space-y-2">
                      {menuCategories.visit.filter(item => ['Australia', 'New Zealand'].includes(item.name)).map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: 0.25 + index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-center justify-between p-3 rounded-lg bg-gray-900/60 hover:bg-gray-800 border border-gray-700/50 hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
                          >
                            <span className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                              {item.name}
                            </span>
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-purple-400 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Coaching Dropdown - Desktop */}
      <AnimatePresence>
        {activeDropdown === 'coaching' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 bottom-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveDropdown(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="mb-2 text-center">
                  <h3 className="text-lg font-bold text-white mb-0.5">
                    Test Preparation Coaching
                  </h3>
                  <p className="text-sm text-gray-300">Expert coaching for standardized tests</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5">
                  {menuCategories.coaching.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="group relative overflow-hidden p-2 rounded-md bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:shadow-md block h-full"
                      >
                        <h5 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                          {item.name}
                        </h5>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Migrate Dropdown - Desktop */}
      <AnimatePresence>
        {activeDropdown === 'migrate' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 bottom-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveDropdown(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="mb-2 text-center">
                  <h3 className="text-lg font-bold text-white mb-0.5">
                    Migration Services
                  </h3>
                  <p className="text-sm text-gray-300">Immigration and skilled migration support</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {menuCategories.migrate.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="group relative overflow-hidden p-2 rounded-md bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-md block h-full"
                      >
                        <h5 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                          {item.name}
                        </h5>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Work Permit Services Dropdown - Desktop */}
      <AnimatePresence>
        {activeDropdown === 'workPermit' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 bottom-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveDropdown(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block fixed top-12 md:top-14 lg:top-16 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Work Permit Services
                  </h3>
                  <p className="text-sm text-gray-300">Comprehensive work permit solutions for individuals and employers</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {menuCategories.workPermit.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="group relative overflow-hidden p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg block h-full"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div className="flex-1">
                            <h5 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-1">
                              {item.name}
                            </h5>
                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* Mobile Menu - Simple Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-12 md:top-14 bottom-0 bg-black border-t border-gray-800 shadow-lg z-40 overflow-y-auto overscroll-contain"
          >
            <div className="px-2 py-1 pb-4">
              <nav className="space-y-0">
                {mainNavigation.map((item, index) => (
              <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.hasDropdown ? (
                        <div>
                        <motion.button
                          onClick={() => toggleDropdown(item.dropdownType || 'workPermit')}
                          className="w-full flex items-center justify-between px-2.5 py-1.5 text-sm font-semibold text-white hover:bg-gray-800 rounded-md transition-all duration-200"
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === (item.dropdownType || 'workPermit') ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={14} strokeWidth={2.5} />
                          </motion.div>
                        </motion.button>
                          
                          <AnimatePresence>
                          {activeDropdown === 'study' && item.dropdownType === 'study' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-0.5 space-y-0 bg-gray-900 rounded-md p-1"
                            >
                              {menuCategories.study.map((item, idx) => (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                                >
                                  <Link
                                    to={item.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-1.5 py-1 text-xs text-gray-300 hover:bg-gray-800 hover:text-indigo-400 rounded transition-all duration-200 font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          {activeDropdown === 'visit' && item.dropdownType === 'visit' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-0.5 space-y-0 bg-gray-900 rounded-md p-1"
                            >
                              {menuCategories.visit.map((item, idx) => (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                                >
                                  <Link
                                    to={item.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-1.5 py-1 text-xs text-gray-300 hover:bg-gray-800 hover:text-emerald-400 rounded transition-all duration-200 font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          {activeDropdown === 'coaching' && item.dropdownType === 'coaching' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-0.5 space-y-0 bg-gray-900 rounded-md p-1"
                            >
                              {menuCategories.coaching.map((item, idx) => (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                                >
                                  <Link
                                    to={item.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-1.5 py-1 text-xs text-gray-300 hover:bg-gray-800 hover:text-amber-400 rounded transition-all duration-200 font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          {activeDropdown === 'workPermit' && item.dropdownType === 'workPermit' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-0.5 space-y-0 bg-gray-900 rounded-md p-1"
                            >
                              {menuCategories.workPermit.map((item, idx) => (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                                >
                                  <Link
                                    to={item.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-1.5 py-1 text-xs text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded transition-all duration-200 font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          {activeDropdown === 'migrate' && item.dropdownType === 'migrate' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-0.5 space-y-0 bg-gray-900 rounded-md p-1"
                            >
                              {menuCategories.migrate.map((item, idx) => (
                                <motion.div
                                  key={item.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                                >
                                  <Link
                                    to={item.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-1.5 py-1 text-xs text-gray-300 hover:bg-gray-800 hover:text-purple-400 rounded transition-all duration-200 font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          </AnimatePresence>
                        </div>
                      ) : (
                      <motion.div whileTap={{ scale: 0.95 }}>
                          <Link
                            to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-2.5 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                            location.pathname === item.path
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                              : 'text-white hover:bg-gray-800'
                          }`}
                        >
                          {item.name}
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </nav>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
};

export default Header;