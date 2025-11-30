export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
}

export const seoData: Record<string, SEOData> = {
  home: {
    title: "Study Abroad & Visa Consultancy Services",
    description: "Billion Dreams Runway offers expert study abroad consultancy, visa services, and immigration support. Get guidance for studying in USA, UK, Canada, Australia, and 14+ countries. Expert visa counseling, IELTS/GRE coaching, and work permit services.",
    keywords: "study abroad consultancy, visa consultancy India, study in USA, study in UK, study in Canada, study in Australia, student visa services, education consultancy, immigration services, IELTS coaching, GRE coaching, work permit services, study abroad counseling",
    canonical: "/",
    ogImage: "/home/hero-1.avif"
  },
  'study-usa': {
    title: "Study in USA - Student Visa & University Admission",
    description: "Study in USA with Billion Dreams Runway. Expert guidance for USA student visa, university admission, F1 visa processing, and study abroad counseling. Get admission to top US universities with 98% success rate.",
    keywords: "study in USA, USA student visa, F1 visa, study abroad USA, USA universities, student visa USA, USA education consultancy, study in America, USA admission, USA visa consultancy, top US universities, USA study visa",
    canonical: "/study-usa",
    ogImage: "/country/usa.jpg"
  },
  'study-uk': {
    title: "Study in UK - UK Student Visa & University Admission",
    description: "Study in UK with expert guidance from Billion Dreams Runway. Get UK student visa, university admission support, Tier 4 visa processing, and study abroad counseling for top UK universities.",
    keywords: "study in UK, UK student visa, Tier 4 visa, study abroad UK, UK universities, student visa UK, UK education consultancy, study in England, UK admission, UK visa consultancy, top UK universities, UK study visa",
    canonical: "/study-uk",
    ogImage: "/country/uk.jpg"
  },
  'study-canada': {
    title: "Study in Canada - Canadian Student Visa & University Admission",
    description: "Study in Canada with Billion Dreams Runway. Expert guidance for Canadian student visa, university admission, study permit processing, and study abroad counseling for top Canadian universities.",
    keywords: "study in Canada, Canada student visa, study permit Canada, study abroad Canada, Canada universities, student visa Canada, Canada education consultancy, study in Toronto, Canada admission, Canada visa consultancy, top Canadian universities",
    canonical: "/study-canada",
    ogImage: "/country/canada.jpg"
  },
  'study-australia': {
    title: "Study in Australia - Australian Student Visa & University Admission",
    description: "Study in Australia with expert guidance from Billion Dreams Runway. Get Australian student visa, university admission support, student visa processing, and study abroad counseling for top Australian universities.",
    keywords: "study in Australia, Australia student visa, Australian universities, study abroad Australia, student visa Australia, Australia education consultancy, study in Sydney, Australia admission, Australia visa consultancy, top Australian universities",
    canonical: "/study-australia",
    ogImage: "/country/australia.jpg"
  },
  'study-germany': {
    title: "Study in Germany - German Student Visa & University Admission",
    description: "Study in Germany with Billion Dreams Runway. Expert guidance for German student visa, university admission, study visa processing, and study abroad counseling for top German universities.",
    keywords: "study in Germany, Germany student visa, German universities, study abroad Germany, student visa Germany, Germany education consultancy, study in Berlin, Germany admission, Germany visa consultancy, top German universities",
    canonical: "/study-germany",
    ogImage: "/country/Germany.jpg"
  },
  'study-france': {
    title: "Study in France - French Student Visa & University Admission",
    description: "Study in France with expert guidance from Billion Dreams Runway. Get French student visa, university admission support, and study abroad counseling for top French universities.",
    keywords: "study in France, France student visa, French universities, study abroad France, student visa France, France education consultancy, study in Paris, France admission, France visa consultancy, top French universities",
    canonical: "/study-france",
    ogImage: "/hero-background.avif"
  },
  'study-italy': {
    title: "Study in Italy - Italian Student Visa & University Admission",
    description: "Study in Italy with Billion Dreams Runway. Expert guidance for Italian student visa, university admission, and study abroad counseling for top Italian universities.",
    keywords: "study in Italy, Italy student visa, Italian universities, study abroad Italy, student visa Italy, Italy education consultancy, study in Rome, Italy admission, Italy visa consultancy, top Italian universities",
    canonical: "/study-italy",
    ogImage: "/hero-background.avif"
  },
  'study-ireland': {
    title: "Study in Ireland - Irish Student Visa & University Admission",
    description: "Study in Ireland with expert guidance from Billion Dreams Runway. Get Irish student visa, university admission support, and study abroad counseling for top Irish universities.",
    keywords: "study in Ireland, Ireland student visa, Irish universities, study abroad Ireland, student visa Ireland, Ireland education consultancy, study in Dublin, Ireland admission, Ireland visa consultancy, top Irish universities",
    canonical: "/study-ireland",
    ogImage: "/hero-background.avif"
  },
  'study-sweden': {
    title: "Study in Sweden - Swedish Student Visa & University Admission",
    description: "Study in Sweden with Billion Dreams Runway. Expert guidance for Swedish student visa, university admission, and study abroad counseling for top Swedish universities.",
    keywords: "study in Sweden, Sweden student visa, Swedish universities, study abroad Sweden, student visa Sweden, Sweden education consultancy, study in Stockholm, Sweden admission, Sweden visa consultancy, top Swedish universities",
    canonical: "/study-sweden",
    ogImage: "/hero-background.avif"
  },
  'study-finland': {
    title: "Study in Finland - Finnish Student Visa & University Admission",
    description: "Study in Finland with expert guidance from Billion Dreams Runway. Get Finnish student visa, university admission support, and study abroad counseling for top Finnish universities.",
    keywords: "study in Finland, Finland student visa, Finnish universities, study abroad Finland, student visa Finland, Finland education consultancy, study in Helsinki, Finland admission, Finland visa consultancy, top Finnish universities",
    canonical: "/study-finland",
    ogImage: "/hero-background.avif"
  },
  'study-spain': {
    title: "Study in Spain - Spanish Student Visa & University Admission",
    description: "Study in Spain with Billion Dreams Runway. Expert guidance for Spanish student visa, university admission, and study abroad counseling for top Spanish universities.",
    keywords: "study in Spain, Spain student visa, Spanish universities, study abroad Spain, student visa Spain, Spain education consultancy, study in Madrid, Spain admission, Spain visa consultancy, top Spanish universities",
    canonical: "/study-spain",
    ogImage: "/hero-background.avif"
  },
  'study-switzerland': {
    title: "Study in Switzerland - Swiss Student Visa & University Admission",
    description: "Study in Switzerland with expert guidance from Billion Dreams Runway. Get Swiss student visa, university admission support, and study abroad counseling for top Swiss universities.",
    keywords: "study in Switzerland, Switzerland student visa, Swiss universities, study abroad Switzerland, student visa Switzerland, Switzerland education consultancy, study in Zurich, Switzerland admission, Switzerland visa consultancy, top Swiss universities",
    canonical: "/study-switzerland",
    ogImage: "/hero-background.avif"
  },
  'study-new-zealand': {
    title: "Study in New Zealand - NZ Student Visa & University Admission",
    description: "Study in New Zealand with Billion Dreams Runway. Expert guidance for New Zealand student visa, university admission, and study abroad counseling for top NZ universities.",
    keywords: "study in New Zealand, New Zealand student visa, NZ universities, study abroad New Zealand, student visa New Zealand, New Zealand education consultancy, study in Auckland, New Zealand admission, New Zealand visa consultancy, top NZ universities",
    canonical: "/study-new-zealand",
    ogImage: "/hero-background.avif"
  },
  'study-malaysia': {
    title: "Study in Malaysia - Malaysian Student Visa & University Admission",
    description: "Study in Malaysia with expert guidance from Billion Dreams Runway. Get Malaysian student visa, university admission support, and study abroad counseling for top Malaysian universities.",
    keywords: "study in Malaysia, Malaysia student visa, Malaysian universities, study abroad Malaysia, student visa Malaysia, Malaysia education consultancy, study in Kuala Lumpur, Malaysia admission, Malaysia visa consultancy, top Malaysian universities",
    canonical: "/study-malaysia",
    ogImage: "/hero-background.avif"
  },
  'visit-usa': {
    title: "USA Visit Visa - Tourist & Business Visa Services",
    description: "Apply for USA visit visa with Billion Dreams Runway. Expert guidance for USA tourist visa, business visa, B1/B2 visa processing, and travel visa services with high success rate.",
    keywords: "USA visit visa, USA tourist visa, USA business visa, B1 visa, B2 visa, USA travel visa, USA visa consultancy, USA visa application, USA visa services, visit USA, USA visa processing",
    canonical: "/visit-usa",
    ogImage: "/hero-background.avif"
  },
  'visit-uk': {
    title: "UK Visit Visa - Tourist & Business Visa Services",
    description: "Apply for UK visit visa with expert guidance from Billion Dreams Runway. Get UK tourist visa, business visa, standard visitor visa processing, and travel visa services.",
    keywords: "UK visit visa, UK tourist visa, UK business visa, UK standard visitor visa, UK travel visa, UK visa consultancy, UK visa application, UK visa services, visit UK, UK visa processing",
    canonical: "/visit-uk",
    ogImage: "/hero-background.avif"
  },
  'visit-canada': {
    title: "Canada Visit Visa - Tourist & Business Visa Services",
    description: "Apply for Canada visit visa with Billion Dreams Runway. Expert guidance for Canada tourist visa, business visa, visitor visa processing, and travel visa services.",
    keywords: "Canada visit visa, Canada tourist visa, Canada business visa, Canada visitor visa, Canada travel visa, Canada visa consultancy, Canada visa application, Canada visa services, visit Canada, Canada visa processing",
    canonical: "/visit-canada",
    ogImage: "/hero-background.avif"
  },
  'visit-australia': {
    title: "Australia Visit Visa - Tourist & Business Visa Services",
    description: "Apply for Australia visit visa with expert guidance from Billion Dreams Runway. Get Australia tourist visa, business visa, visitor visa processing, and travel visa services.",
    keywords: "Australia visit visa, Australia tourist visa, Australia business visa, Australia visitor visa, Australia travel visa, Australia visa consultancy, Australia visa application, Australia visa services, visit Australia, Australia visa processing",
    canonical: "/visit-australia",
    ogImage: "/hero-background.avif"
  },
  'coaching-ielts': {
    title: "IELTS Coaching - Best IELTS Training & Preparation",
    description: "Get expert IELTS coaching from Billion Dreams Runway. Comprehensive IELTS training, practice tests, speaking preparation, and exam strategies to achieve your target band score.",
    keywords: "IELTS coaching, IELTS training, IELTS preparation, IELTS classes, IELTS online coaching, IELTS exam preparation, IELTS speaking, IELTS writing, IELTS listening, IELTS reading, best IELTS coaching",
    canonical: "/coaching-ielts",
    ogImage: "/hero-background.avif"
  },
  'coaching-gre': {
    title: "GRE Coaching - GRE Preparation & Training Classes",
    description: "Get expert GRE coaching from Billion Dreams Runway. Comprehensive GRE preparation, practice tests, quantitative reasoning, verbal reasoning, and analytical writing training.",
    keywords: "GRE coaching, GRE preparation, GRE training, GRE classes, GRE online coaching, GRE exam preparation, GRE quantitative, GRE verbal, GRE analytical writing, best GRE coaching",
    canonical: "/coaching-gre",
    ogImage: "/hero-background.avif"
  },
  'work-permit-eligibility': {
    title: "Work Permit Eligibility Assessment - Expert Evaluation",
    description: "Get professional work permit eligibility assessment from Billion Dreams Runway. We evaluate your profile to determine the best work permit category and provide expert guidance.",
    keywords: "work permit eligibility, work visa eligibility, work permit assessment, work visa evaluation, work permit consultancy, work permit services, work visa services, work permit India",
    canonical: "/work-permit-eligibility",
    ogImage: "/services/eligibility-assessment.jpg"
  }
};

export const getSEOData = (path: string): SEOData => {
  const key = path.replace(/^\//, '').replace(/\//g, '-') || 'home';
  return seoData[key] || {
    title: "Billion Dreams Runway - Study Abroad & Visa Consultancy",
    description: "Expert study abroad consultancy and visa services. Get guidance for studying abroad, visa processing, and immigration support.",
    keywords: "study abroad, visa consultancy, education consultancy, immigration services",
    canonical: path,
    ogImage: "/home/hero-1.avif"
  };
};

