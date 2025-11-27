import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import BlogPost from './pages/BlogPost';
import MigrateCanada from './pages/MigrateCanada';
import MigrateAustralia from './pages/MigrateAustralia';
import ServicesOverseasEducation from './pages/ServicesOverseasEducation';
import ServicesCoaching from './pages/ServicesCoaching';
import ServicesImmigration from './pages/ServicesImmigration';
import ServicesVirtualTraining from './pages/ServicesVirtualTraining';
import StudyUSA from './pages/StudyUSA';
import StudyUK from './pages/StudyUK';
import StudyCanada from './pages/StudyCanada';
import StudyAustralia from './pages/StudyAustralia';
import StudyNetherlands from './pages/StudyNetherlands';
import StudyNewZealand from './pages/StudyNewZealand';
import StudyPoland from './pages/StudyPoland';
import StudyMalaysia from './pages/StudyMalaysia';
import VisitUSA from './pages/VisitUSA';
import VisitUK from './pages/VisitUK';
import VisitCanada from './pages/VisitCanada';
import VisitAustralia from './pages/VisitAustralia';
import VisitNetherlands from './pages/VisitNetherlands';
import VisitNewZealand from './pages/VisitNewZealand';
import VisitMalaysia from './pages/VisitMalaysia';
import VisitDubai from './pages/VisitDubai';
import VisitSingapore from './pages/VisitSingapore';
import VisitSchengen from './pages/VisitSchengen';
import VisitIreland from './pages/VisitIreland';
import CoachingGRE from './pages/CoachingGRE';
import CoachingIELTS from './pages/CoachingIELTS';
import CoachingTOEFL from './pages/CoachingTOEFL';
import CoachingPTE from './pages/CoachingPTE';
import CoachingDuolingo from './pages/CoachingDuolingo';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/your-trusted-education-partner" element={<About />} />
            <Route path="/comprehensive-education-solutions" element={<Services />} />
            <Route path="/our-portfolio" element={<Portfolio />} />
            <Route path="/blog-resources" element={<Blog />} />
            <Route path="/success-stories" element={<Testimonials />} />
            <Route path="/build-your-career-with-us" element={<Careers />} />
            <Route path="/lets-start-your-journey" element={<Contact />} />
            <Route path="/frequently-asked-questions" element={<FAQ />} />
            
            {/* Services Pages */}
            <Route path="/services-overseas-education" element={<ServicesOverseasEducation />} />
            <Route path="/services-coaching" element={<ServicesCoaching />} />
            <Route path="/services-immigration" element={<ServicesImmigration />} />
            <Route path="/services-virtual-training" element={<ServicesVirtualTraining />} />
            
            {/* Migration Pages */}
            <Route path="/migrate-canada" element={<MigrateCanada />} />
            <Route path="/migrate-australia" element={<MigrateAustralia />} />
            
            {/* Country Study Pages */}
            <Route path="/study-usa" element={<StudyUSA />} />
            <Route path="/study-uk" element={<StudyUK />} />
            <Route path="/study-canada" element={<StudyCanada />} />
            <Route path="/study-australia" element={<StudyAustralia />} />
            <Route path="/study-netherlands" element={<StudyNetherlands />} />
            <Route path="/study-new-zealand" element={<StudyNewZealand />} />
            <Route path="/study-poland" element={<StudyPoland />} />
            <Route path="/study-malaysia" element={<StudyMalaysia />} />
            
            {/* Country Visit Pages */}
            <Route path="/visit-usa" element={<VisitUSA />} />
            <Route path="/visit-uk" element={<VisitUK />} />
            <Route path="/visit-canada" element={<VisitCanada />} />
            <Route path="/visit-australia" element={<VisitAustralia />} />
            <Route path="/visit-netherlands" element={<VisitNetherlands />} />
            <Route path="/visit-new-zealand" element={<VisitNewZealand />} />
            <Route path="/visit-malaysia" element={<VisitMalaysia />} />
            <Route path="/visit-dubai" element={<VisitDubai />} />
            <Route path="/visit-singapore" element={<VisitSingapore />} />
            <Route path="/visit-schengen" element={<VisitSchengen />} />
            <Route path="/visit-ireland" element={<VisitIreland />} />
            
            {/* Coaching Pages */}
            <Route path="/coaching-gre" element={<CoachingGRE />} />
            <Route path="/coaching-ielts" element={<CoachingIELTS />} />
            <Route path="/coaching-toefl" element={<CoachingTOEFL />} />
            <Route path="/coaching-pte" element={<CoachingPTE />} />
            <Route path="/coaching-duolingo" element={<CoachingDuolingo />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;