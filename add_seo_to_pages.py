#!/usr/bin/env python3
"""
Script to add SEO components to all React pages
"""
import os
import re
from pathlib import Path

# SEO data mapping
SEO_MAP = {
    'StudyUK': {
        'title': 'Study in UK - UK Student Visa & University Admission',
        'description': 'Study in UK with expert guidance from Billion Dreams Runway. Get UK student visa, university admission support, Tier 4 visa processing, and study abroad counseling for top UK universities.',
        'keywords': 'study in UK, UK student visa, Tier 4 visa, study abroad UK, UK universities, student visa UK, UK education consultancy, study in England, UK admission, UK visa consultancy, top UK universities, UK study visa',
        'canonical': '/study-uk',
        'ogImage': '/country/uk.jpg'
    },
    'StudyCanada': {
        'title': 'Study in Canada - Canadian Student Visa & University Admission',
        'description': 'Study in Canada with Billion Dreams Runway. Expert guidance for Canadian student visa, university admission, study permit processing, and study abroad counseling for top Canadian universities.',
        'keywords': 'study in Canada, Canada student visa, study permit Canada, study abroad Canada, Canada universities, student visa Canada, Canada education consultancy, study in Toronto, Canada admission, Canada visa consultancy, top Canadian universities',
        'canonical': '/study-canada',
        'ogImage': '/country/canada.jpg'
    },
    'StudyAustralia': {
        'title': 'Study in Australia - Australian Student Visa & University Admission',
        'description': 'Study in Australia with expert guidance from Billion Dreams Runway. Get Australian student visa, university admission support, student visa processing, and study abroad counseling for top Australian universities.',
        'keywords': 'study in Australia, Australia student visa, Australian universities, study abroad Australia, student visa Australia, Australia education consultancy, study in Sydney, Australia admission, Australia visa consultancy, top Australian universities',
        'canonical': '/study-australia',
        'ogImage': '/country/australia.jpg'
    },
    'CoachingIELTS': {
        'title': 'IELTS Coaching - Best IELTS Training & Preparation',
        'description': 'Get expert IELTS coaching from Billion Dreams Runway. Comprehensive IELTS training, practice tests, speaking preparation, and exam strategies to achieve your target band score.',
        'keywords': 'IELTS coaching, IELTS training, IELTS preparation, IELTS classes, IELTS online coaching, IELTS exam preparation, IELTS speaking, IELTS writing, IELTS listening, IELTS reading, best IELTS coaching',
        'canonical': '/coaching-ielts',
        'ogImage': '/hero-background.avif'
    },
    'CoachingGRE': {
        'title': 'GRE Coaching - GRE Preparation & Training Classes',
        'description': 'Get expert GRE coaching from Billion Dreams Runway. Comprehensive GRE preparation, practice tests, quantitative reasoning, verbal reasoning, and analytical writing training.',
        'keywords': 'GRE coaching, GRE preparation, GRE training, GRE classes, GRE online coaching, GRE exam preparation, GRE quantitative, GRE verbal, GRE analytical writing, best GRE coaching',
        'canonical': '/coaching-gre',
        'ogImage': '/hero-background.avif'
    },
    'WorkPermitServices': {
        'title': 'Work Permit Services - Expert Work Visa Solutions',
        'description': 'Comprehensive work permit services from Billion Dreams Runway. Expert guidance for work visa applications, employer services, document preparation, and work permit processing for multiple countries.',
        'keywords': 'work permit services, work visa services, work permit consultancy, work visa application, work permit India, work visa consultancy, employer services, work permit processing',
        'canonical': '/work-permit-services',
        'ogImage': '/hero-background.avif'
    }
}

def add_seo_to_file(file_path, component_name):
    """Add SEO component to a React file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if SEO is already added
    if 'import SEO' in content or 'from \'../components/SEO\'' in content:
        print(f'✓ SEO already added to {component_name}')
        return
    
    # Get SEO data
    seo_data = SEO_MAP.get(component_name, {
        'title': f'{component_name} - Billion Dreams Runway',
        'description': f'Expert services from Billion Dreams Runway. Get professional guidance and support.',
        'keywords': 'study abroad, visa consultancy, education consultancy',
        'canonical': f'/{component_name.lower().replace(/([A-Z])/g, "-$1").toLowerCase()}',
        'ogImage': '/hero-background.avif'
    })
    
    # Add import
    import_pattern = r'(import\s+.*?from\s+[\'"].*?[\'"];)'
    imports = re.findall(import_pattern, content)
    if imports:
        last_import = imports[-1]
        if 'lucide-react' in last_import or 'framer-motion' in last_import:
            new_import = last_import + '\nimport SEO from \'../components/SEO\';'
            content = content.replace(last_import, new_import)
    
    # Add SEO component before return
    return_pattern = r'(return\s*\([^)]*<div)'
    if re.search(return_pattern, content):
        seo_component = f'''  return (
    <>
      <SEO
        title="{seo_data['title']}"
        description="{seo_data['description']}"
        keywords="{seo_data['keywords']}"
        canonical="{seo_data['canonical']}"
        ogImage="{seo_data['ogImage']}"
      />
      <div'''
        content = re.sub(return_pattern, seo_component, content, count=1)
        
        # Close fragment before final closing
        content = re.sub(r'(</div>\s*\);\s*};)', r'</div>\n    </>\n  );\n};', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ Added SEO to {component_name}')

def main():
    pages_dir = Path('client/src/pages')
    if not pages_dir.exists():
        print('Pages directory not found')
        return
    
    for file_path in pages_dir.glob('*.tsx'):
        component_name = file_path.stem
        if component_name not in ['Home', 'StudyUSA']:  # Already done
            add_seo_to_file(file_path, component_name)

if __name__ == '__main__':
    main()

