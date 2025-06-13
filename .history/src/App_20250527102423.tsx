import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Code2, Globe, Laptop, Shield, Smartphone, ArrowRight, CheckCircle2, 
  Database, Cloud, Building2, Cpu, Network, LineChart, Home, Briefcase, 
  GraduationCap, Search, MessageSquare, MapPin, AlertTriangle, Mail, X, 
  Phone, Target, Users, Zap, Server, Code, GitBranch, Database as DbIcon,
  Cloud as CloudIcon, Lock, Workflow, Languages
} from 'lucide-react';

import Bayti from './assets/logos/Bayti.png';
import Medlink from './assets/logos/medlink.png';
import Chaabik from './assets/logos/chaabik.png';
import xLogo from './assets/logos/X.png';

const LANGUAGES = [
  { code: 'en', label: 'English', icon: '🇬🇧' },
  { code: 'fr', label: 'Français', icon: '🇫🇷' },
  { code: 'ar', label: 'العربية', icon: '🇲🇷' }
];

function App() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = () => setMobileMenuOpen(false);
    window.addEventListener('resize', close);
    window.addEventListener('scroll', close);
    return () => {
      window.removeEventListener('resize', close);
      window.removeEventListener('scroll', close);
    };
  }, [mobileMenuOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setIsLangMenuOpen(false);
  };

  const liveProducts = [
    {
      icon: <img src={Bayti} alt="Bayti" className="h-16 w-16 object-contain" />,
      title: t('products.live.bayti.title'),
      description: t('products.live.bayti.description')
    },
    {
      icon: <img src={Medlink} alt="Medlink" className="h-16 w-16 object-contain" />,
      title: t('products.live.medlink.title'),
      description: t('products.live.medlink.description')
    },
    {
      icon: <img src={Chaabik} alt="Chaabik" className="h-17 w-17 object-contain" />,
      title: t('products.live.chaabik.title'),
      description: t('products.live.chaabik.description')
    }
  ];

  const comingProducts = [
    {
      icon: <Briefcase className="h-8 w-8 text-yellow-500" />,
      title: t('coming.products.khadamati.title'),
      description: t('coming.products.khadamati.description')
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      title: t('coming.products.maurijobs.title'),
      description: t('coming.products.maurijobs.description')
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
      title: t('coming.products.taalimy.title'),
      description: t('coming.products.taalimy.description')
    }
  ];

  const whyChooseUs = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: t('why.items.expertise.title'),
      description: t('why.items.expertise.description')
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: t('why.items.community.title'),
      description: t('why.items.community.description')
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: t('why.items.innovation.title'),
      description: t('why.items.innovation.description')
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title:t('why.items.security.title'),
      description: t('why.items.security.description')
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      tools: [
        { icon: <Code2 className="h-8 w-8" />, name: "React" },
        { icon: <Code className="h-8 w-8" />, name: "TypeScript" },
        { icon: <Smartphone className="h-8 w-8" />, name: "React Native" }
      ]
    },
    {
      category: "Backend",
      tools: [
        { icon: <Server className="h-8 w-8" />, name: "Node.js" },
        { icon: <DbIcon className="h-8 w-8" />, name: "PostgreSQL" },
        { icon: <CloudIcon className="h-8 w-8" />, name: "Redis" }
      ]
    },
    {
      category: "DevOps",
      tools: [
        { icon: <GitBranch className="h-8 w-8" />, name: "GitHub" },
        { icon: <Cloud className="h-8 w-8" />, name: "AWS" },
        { icon: <Lock className="h-8 w-8" />, name: "Docker" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <button
              className="flex items-center gap-0.5 text-2xl font-bold text-primary mr-12 focus:outline-none"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveLink('');
                setMobileMenuOpen(false);
              }}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img src={xLogo} alt="XAHARA Logo" className="h-8 w-8 object-contain" />
              AHARA
            </button>

            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#solutions" 
                className={`nav-link ${activeLink === 'solutions' ? 'active' : ''}`}
                onClick={() => setActiveLink('solutions')}
              >
                {t('nav.solutions')}
              </a>
              <a 
                href="#products" 
                className={`nav-link ${activeLink === 'products' ? 'active' : ''}`}
                onClick={() => setActiveLink('products')}
              >
                {t('nav.products')}
              </a>
              <a 
                href="#about" 
                className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => setActiveLink('about')}
              >
                {t('nav.about')}
              </a>
            </div>

            <div className="hidden md:flex items-center gap-6 ml-auto">
              {/* Improved Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm focus:outline-none"
                >
                  <Languages className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700 uppercase">
                    {LANGUAGES.find(l => l.code === i18n.language)?.icon}
                    <span className="ml-1">{i18n.language}</span>
                  </span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 backdrop-blur-md focus:outline-none z-50">
                    <div className="py-1">
                      {LANGUAGES.map(lng => (
                        <button
                          key={lng.code}
                          onClick={() => changeLanguage(lng.code)}
                          className={`w-full flex items-center gap-2 text-left px-4 py-2 text-sm rounded-md transition-colors
                            ${i18n.language === lng.code ? 'bg-gray-100 text-primary font-semibold' : 'text-gray-700'}
                            hover:bg-gray-50`}
                        >
                          <span>{lng.icon}</span>
                          <span>{lng.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="https://wa.me/+22237959569" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-primary hover:bg-primary-800 active:bg-primary-900 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                {t('nav.contact')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden ml-auto"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Popup */}
      {mobileMenuOpen && (
        <>
          {/* Blurred Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Top-right Popup Menu */}
          <div className="fixed top-6 right-6 z-50 w-80 max-w-[95vw] rounded-2xl bg-white shadow-2xl p-6 flex flex-col gap-6 animate-slide-in-menu">
            <button
              className="absolute top-4 right-4"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
            <nav className="flex flex-col gap-4 mt-2">
              <a
                href="#solutions"
                className="text-lg font-medium text-gray-800 hover:text-primary transition"
                onClick={() => { setActiveLink('solutions'); setMobileMenuOpen(false); }}
              >
                {t('nav.solutions')}
              </a>
              <a
                href="#products"
                className="text-lg font-medium text-gray-800 hover:text-primary transition"
                onClick={() => { setActiveLink('products'); setMobileMenuOpen(false); }}
              >
                {t('nav.products')}
              </a>
              <a
                href="#about"
                className="text-lg font-medium text-gray-800 hover:text-primary transition"
                onClick={() => { setActiveLink('about'); setMobileMenuOpen(false); }}
              >
                {t('nav.about')}
              </a>
            </nav>
            {/* Language Selector */}
            <div className="flex gap-2 mt-2">
              {LANGUAGES.map(lng => (
                <button
                  key={lng.code}
                  onClick={() => { changeLanguage(lng.code); setMobileMenuOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full border transition
                    ${i18n.language === lng.code ? 'bg-primary text-white border-primary' : 'bg-gray-100 text-gray-700 border-gray-200'}
                    hover:bg-primary hover:text-white hover:border-primary`}
                  style={{ fontFamily: 'inherit', fontSize: '1rem' }}
                >
                  <span>{lng.icon}</span>
                  <span className="hidden sm:inline">{lng.label}</span>
                </button>
              ))}
            </div>
            <a
              href="https://wa.me/+22237959569"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 bg-primary hover:bg-primary-800 text-white text-base font-semibold rounded-xl py-3 transition-all flex items-center justify-center gap-2 shadow"
            >
              <MessageSquare className="h-5 w-5" />
              {t('nav.contact')}
            </a>
          </div>
          <style>{`
            @keyframes slide-in-menu {
              from { transform: translateY(-30px) scale(0.98); opacity: 0; }
              to { transform: translateY(0) scale(1); opacity: 1; }
            }
            .animate-slide-in-menu {
              animation: slide-in-menu 0.25s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </>
      )}

      <section 
        className="min-h-[calc(100vh-5rem)] flex items-center justify-center pt-20 relative"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              {t('hero.title')}
              <span className="block text-primary-100 mt-2">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            <button className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2 mx-auto group hover:scale-105"
            onClick={() => {
              document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              setActiveLink('solutions');
                    }}
                  >
              {t('hero.cta')} <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('tech.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tech.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="relative py-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t('mission.title')}</h2>
            <p className="text-xl leading-relaxed mb-12">
            {t('mission.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <Workflow className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('mission.pillars.innovation.title')}</h3>
                <p className="text-gray-600">{t('mission.pillars.innovation.description')}</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('mission.pillars.empowerment.title')}</h3>
                <p className="text-gray-600">{t('mission.pillars.empowerment.description')}</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('mission.pillars.impact.title')}</h3>
                <p className="text-gray-600">{t('mission.pillars.empowerment.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('tech.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tech.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {techStack.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
                <div className="space-y-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                      {tool.icon}
                      <span className="font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="products">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('products.live.title')}</h2>
            <p className="text-xl text-gray-600">{t('products.live.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {liveProducts.map((product, index) => (
              <div key={index} className="group relative bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-12 w-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-semibold">{t('products.status')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="solutions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('coming.title')}</h2>
            <p className="text-xl text-gray-600">{t('coming.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {comingProducts.map((product, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-12 w-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-xl text-gray-600 mb-10">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <p className="text-gray-600">{t('about.stats.products')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-gray-600">{t('about.stats.solutions')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <p className="text-gray-600">{t('about.stats.users')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://wa.me/+22246000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white text-primary hover:bg-primary-50 px-8 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:contact@sahara.mr"
              className="group bg-white text-primary hover:bg-primary-50 px-8 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Email
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-white mb-6">
                <X className="h-8 w-8" />
                <span className="font-bold text-xl">XAHARA</span>
              </div>
              <p className="text-sm">{t('footer.description')}</p>
              <div className="mt-6 space-y-2">
                <a href="mailto:dahmedvall95@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>dahmedvall95@gmail.com</span>
                </a>
                <a href="tel:+22237959569" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+222 37959569</span>
                </a>
              </div>
            </div>
            {[
              {
                title: t('nav.products'),
                links: ["BAYTI", "MedLink", "Chaabik"]
              },
              {
                title: t('nav.solutions'),
                links: ["Khadamati", "MauriJobs", "Taalimy"]
              },
              {
                title: t('nav.about'),
                links: [
                  { text: "WhatsApp", href: "https://wa.me/+22237959569" },
                  { text: "Email", href: "mailto:dahmedvall95@gmail.com" }
                ]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {typeof link === 'string' ? (
                        <span className="hover:text-white transition-colors cursor-pointer">{link}</span>
                      ) : (
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                        >
                          {link.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;