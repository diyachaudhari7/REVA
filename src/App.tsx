import { useState, useEffect, useRef } from 'react';
import './App.css';

const AnimatedCounter = ({ target, prefix = '', suffix = '', duration = 1500 }: { target: number, prefix?: string, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // use easeOutQuad for smoother counting
            const easeOutProgress = progress * (2 - progress);
            setCount(Math.floor(easeOutProgress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
};
import './App.css';
import BusinessAnalytics from './pages/BusinessAnalytics';
import RaceLabs from './pages/RaceLabs';
import Consulting from './pages/Consulting';
import Mentors from './pages/Mentors';
import About from './pages/About';
import CertifiedAgenticAI from './pages/CertifiedAgenticAI';
import Meetup from './pages/Meetup';
import ContactUs from './pages/ContactUs';
import ApplyNow from './pages/ApplyNow';
interface Mentor {
  name: string;
  role: string;
  image: string;
  desc: string;
}

function App() {
  const [activeTab, setActiveTab] = useState('Artificial Intelligence');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [currentView, setCurrentView] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('view') || 'home';
  });
  const [isGridMenuOpen, setIsGridMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<'calendar' | 'form'>('calendar');
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatbotView, setChatbotView] = useState<'home' | 'messages'>('home');

  const OUTCOME_DATA = {
    'Business Analytics': {
      category: 'BUSINESS ANALYTICS',
      title: 'M.Sc. in Business Analytics',
      desc: 'Turn raw data into board-level decisions, with AWS Academy and Microsoft Azure built into the curriculum.',
      tags: ['354% avg. hike', '₹4.8L programme fee', 'UGC approved'],
      salary: '₹39L',
      avgHike: '354%',
      medianHike: '187%',
      salaryWidth: '100%',
      avgHikeWidth: '90%',
      medianHikeWidth: '45%',
      link: 'business-analytics'
    },
    'Cybersecurity': {
      category: 'CYBERSECURITY',
      title: 'M.Tech. / M.Sc. in Cybersecurity',
      desc: 'Train on a live cyber range, not slides — built with EC-Council, Microsoft Azure, and Terralogic Inc.',
      tags: ['310% avg. hike', '₹6.0L programme fee', 'AICTE/UGC approved'],
      salary: '₹32L',
      avgHike: '310%',
      medianHike: '155%',
      salaryWidth: '82%',
      avgHikeWidth: '80%',
      medianHikeWidth: '40%',
      link: 'cybersecurity'
    },
    'Artificial Intelligence': {
      category: 'ARTIFICIAL INTELLIGENCE',
      title: 'M.Tech. / M.Sc. in Artificial Intelligence',
      desc: 'Design, deploy, and monitor full-stack AI systems, backed by two global certifications from Azure and AWS.',
      tags: ['145% avg. hike', '₹6.0L programme fee', 'AICTE/UGC approved'],
      salary: '₹30L',
      avgHike: '145%',
      medianHike: '104%',
      salaryWidth: '77%',
      avgHikeWidth: '35%',
      medianHikeWidth: '25%',
      link: 'artificial-intelligence'
    },
    'Cloud Architecture & Security': {
      category: 'CLOUD ARCHITECTURE & SECURITY',
      title: 'M.Sc. in Cloud Architecture and Security',
      desc: 'Design and secure multi-cloud platforms on AWS and Azure, walking away with five industry certifications.',
      tags: ['303% avg. hike', '₹4.5L programme fee', 'UGC approved'],
      salary: '₹24L',
      avgHike: '303%',
      medianHike: '303%',
      salaryWidth: '60%',
      avgHikeWidth: '75%',
      medianHikeWidth: '75%',
      link: 'cloud-architecture'
    }
  };

  const [selectedOutcome, setSelectedOutcome] = useState<keyof typeof OUTCOME_DATA>('Business Analytics');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150); // Top bar + some header height
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAlert = (message: string) => {
    alert(message);
  };

  return (
    <div className="app-container">
      {/* Brochure Top Bar */}
      {currentView !== 'home' && (
        <div className="brochure-top-bar">
          <div className="brochure-left">
            Download the complete brochure for full details
          </div>
          <div className="brochure-right">
            <button className="download-brochure-btn" onClick={() => handleAlert('Downloading Brochure...')}>Download Brochure</button>
          </div>
        </div>
      )}

      {/* Contact Top Bar */}
      <div className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="top-bar-left">
          <a href="tel:+918904058866" className="phone">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +91 89040 58866
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="email">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            enquiry@race.reva.edu.in
          </a>
        </div>
        <div className="top-bar-right">
          <button className="admission-btn" onClick={() => setIsAdmissionModalOpen(true)}>Admission Open 2025-26</button>
        </div>
      </div>

      {/* Header and Nav Wrapper for Sticky Effect */}
      <div className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        {/* Header */}
        <header className="main-header">
          <div className="logos">
            <img
              src="/RACE-REVA-University-logo.svg"
              alt="RACE REVA University Logo"
              className="main-logo"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.history.pushState(null, '', '/');
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          <div className="header-right-section">
            <div className="header-actions" style={{ position: 'relative' }}>
              <button className="consultation-btn" onClick={() => { setCurrentView('consultation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Book Your Free Consultation
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="#999" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </button>
              <div
                className="grid-menu-wrapper"
                onMouseEnter={() => setIsGridMenuOpen(true)}
                onMouseLeave={() => setIsGridMenuOpen(false)}
              >
                <div className="grid-menu">
                  <svg viewBox="0 0 24 24" width="37" height="37" fill="currentColor">
                    <rect x="3" y="3" width="5" height="5" />
                    <rect x="9.5" y="3" width="5" height="5" />
                    <rect x="16" y="3" width="5" height="5" />
                    <rect x="3" y="9.5" width="5" height="5" />
                    <rect x="9.5" y="9.5" width="5" height="5" />
                    <rect x="16" y="9.5" width="5" height="5" />
                    <rect x="3" y="16" width="5" height="5" />
                    <rect x="9.5" y="16" width="5" height="5" />
                    <rect x="16" y="16" width="5" height="5" />
                  </svg>
                </div>

                {isGridMenuOpen && (
                  <div className="mega-menu-dropdown">
                    <div className="mega-menu-col">
                      <div className="mega-menu-category">
                        <div className="mega-menu-header">Analytics / Data Science</div>
                        <ul>
                          <li><a href="#">PG Diploma/M.Sc. in<br />Business Analytics</a></li>
                          <li><a href="#">Certification in<br />HR Analytics</a></li>
                        </ul>
                      </div>
                      <div className="mega-menu-category" style={{ marginTop: '20px' }}>
                        <div className="mega-menu-header">Artificial Intelligence</div>
                        <ul>
                          <li><a href="#">M.Tech. in<br />Artificial Intelligence</a></li>
                          <li><a href="#">PG Diploma/M.Sc. in<br />Artificial Intelligence</a></li>
                          <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('certified-agentic-ai-engineer'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsGridMenuOpen(false); }}>Certified<br />Agentic AI Engineer</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-col">
                      <div className="mega-menu-category">
                        <div className="mega-menu-header">Cybersecurity</div>
                        <ul>
                          <li><a href="#">M.Tech. in<br />Cybersecurity</a></li>
                          <li><a href="#">PG Diploma/M.Sc. in<br />Cybersecurity</a></li>
                          <li><a href="#">Certified<br />Ethical Hacker</a></li>
                          <li><a href="#">Certified<br />Penetration Testing Professional</a></li>
                          <li><a href="#">Advanced Diploma in<br />Cybersecurity and Privacy Management</a></li>
                        </ul>
                      </div>
                      <div className="mega-menu-category" style={{ marginTop: '20px' }}>
                        <div className="mega-menu-header">Cloud Architecture</div>
                        <ul>
                          <li><a href="#">PG Diploma/M.Sc. in<br />Cloud Architecture and Security</a></li>
                          <li><a href="#">Certified<br />DevOps Specialist</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Nav */}
            <nav className="main-nav">
              <ul>
                <li className="nav-item-dropdown">
                  <a href="#">PG Programs <span className="caret">▼</span></a>
                  <div className="nav-dropdown-menu">
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('business-analytics'); }}>PG Diploma/M.Sc. in<br />Business Analytics</a>
                    <a href="#">M.Tech. in<br />Artificial Intelligence</a>
                    <a href="#">PG Diploma/M.Sc. in<br />Artificial Intelligence</a>
                    <a href="#">M.Tech. in<br />Cybersecurity</a>
                    <a href="#">PG Diploma/M.Sc. in<br />Cybersecurity</a>
                    <a href="#">PG Diploma/M.Sc. in<br />Cloud Architecture and Security</a>
                  </div>
                </li>
                <li className="separator"></li>
                <li className="nav-item-dropdown">
                  <a href="#">Get Certified <span className="caret">▼</span></a>
                  <div className="nav-dropdown-menu">
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('certified-agentic-ai-engineer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Certified<br />Agentic AI Engineer</a>
                    <a href="#">Certified<br />DevOps Specialist</a>
                    <a href="#">Advanced Diploma in<br />Cybersecurity and Privacy Management</a>
                    <a href="#">Certified<br />Ethical Hacker</a>
                    <a href="#">Certified<br />AI Engineer</a>
                  </div>
                </li>
                <li className="separator"></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('race-labs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>RACE Labs</a></li>
                <li className="separator"></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('consulting'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Consulting</a></li>
                <li className="separator"></li>
                <li className="nav-item-dropdown">
                  <a href="#">Events <span className="caret">▼</span></a>
                  <div className="nav-dropdown-menu">
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('meetup'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Namma Bengaluru<br />Meetup</a>
                    <a href="#">Sponsorship<br />RACE360 2026</a>
                    <a href="#">Emerging Technology<br />Conference<br />RACE360 2019</a>
                    <a href="#">Awards<br />Top 10 Women Tech<br />Leaders India Awards</a>
                    <a href="#">Sports<br />REVA Cricket League<br />2026</a>
                    <a href="#">Past Events</a>
                  </div>
                </li>
                <li className="separator"></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('mentors'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Mentors</a></li>
                <li className="separator"></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>About RACE</a></li>
                <li className="separator"></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {currentView === 'home' ? (
        <>
          {/* Notification Banner */}
          <div className="notification-banner">
            <div className="notification-content">
              📅 Start Your Master's Journey - <span className="flicker-text">Limited Seats</span> <a href="?view=apply-now" className="apply-link" target="_blank" rel="noopener noreferrer">Click here</a> to Apply Now!
            </div>
          </div>

          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content-wrapper">
              <div className="hero-content">
                <div className="hero-text-col">
                  <h1 className="hero-title" style={{ color: "white" }}>BATCHES STARTING SOON</h1>
                  <h3 className="hero-subtitle">
                    Data Science | Cybersecurity | Artificial Intelligence |<br />
                    Cloud Architecture <span className="text-orange">and more...</span>
                  </h3>
                  <p className="hero-desc" style={{ color: "white" }}>
                    Industry-aligned programs for working professionals with<br />
                    hands-on projects and expert mentorship.
                  </p>
                  <div className="limited-seats">
                    🚀 Limited seats available
                  </div>
                  <button className="apply-now-btn" onClick={() => setCurrentView('apply-now')}>
                    Apply now to secure your spot! <span className="arrow">›</span>
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* Career Path Section */}
          <section className="career-path-section">
            <h2 className="section-title" style={{ marginBottom: "0px", fontSize: "45px" }}>Choose Your Career Path</h2>
            <p className="section-subtitle">Pick your power-up - every program is a launchpad.</p>

            <div className="programs-grid">
              {/* Card 1 */}
              <div className="program-card bg-1">
                <div className="card-header-content">
                  <span className="card-tag">INDIA'S TOP-RANKED</span>
                  <h4 className="card-degree">PG Diploma/M.Sc. in</h4>
                  <h3 className="card-program">Business Analytics</h3>
                </div>
                <div className="card-hover-details">
                  <span className="ugc-tag">AICTE Recognised Degree</span>
                  <div className="association-text-border">
                    Offered in Association with<br />Microsoft Azure
                  </div>
                  <div className="program-details-grid">
                    <div className="detail-item">
                      <span className="detail-label">DURATION</span>
                      <span className="detail-value">12-24 months</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">FORMAT</span>
                      <span className="detail-value">Weekend + On Campus</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">AVG. SALARY</span>
                      <span className="detail-value">39 LPA</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">NEXT COHORT</span>
                      <span className="detail-value">Aug 2026</span>
                    </div>
                  </div>
                  <button className="learn-more-btn" onClick={() => handleAlert('Loading Details...')}>LEARN MORE</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="program-card bg-2">
                <div className="card-header-content">
                  <span className="card-tag">INDIA'S FIRST RESEARCH DRIVEN</span>
                  <h4 className="card-degree">M.Tech. in</h4>
                  <h3 className="card-program">Artificial Intelligence</h3>
                </div>
                <div className="card-hover-details">
                  <span className="ugc-tag">AICTE Recognised Degree</span>
                  <div className="association-text-border">
                    Offered in Association with<br />Microsoft Azure
                  </div>
                  <div className="program-details-grid">
                    <div className="detail-item">
                      <span className="detail-label">DURATION</span>
                      <span className="detail-value">12-24 months</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">FORMAT</span>
                      <span className="detail-value">Weekend + On Campus</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">AVG. SALARY</span>
                      <span className="detail-value">31 LPA</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">NEXT COHORT</span>
                      <span className="detail-value">Aug 2026</span>
                    </div>
                  </div>
                  <button className="learn-more-btn" onClick={() => handleAlert('Loading Details...')}>LEARN MORE</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="program-card bg-3">
                <div className="card-header-content">
                  <span className="card-tag">INDIA'S FIRST SIMULATION INTEGRATED</span>
                  <h4 className="card-degree">M.Tech. in</h4>
                  <h3 className="card-program">Cybersecurity</h3>
                </div>
                <div className="card-hover-details">
                  <span className="ugc-tag">AICTE Recognised Degree</span>
                  <div className="association-text-border">
                    Offered in Association with<br />Microsoft Azure
                  </div>
                  <div className="program-details-grid">
                    <div className="detail-item">
                      <span className="detail-label">DURATION</span>
                      <span className="detail-value">12-24 months</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">FORMAT</span>
                      <span className="detail-value">Weekend + On Campus</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">AVG. SALARY</span>
                      <span className="detail-value">32 LPA</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">NEXT COHORT</span>
                      <span className="detail-value">Aug 2026</span>
                    </div>
                  </div>
                  <button className="learn-more-btn" onClick={() => handleAlert('Loading Details...')}>LEARN MORE</button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="program-card bg-4">
                <div className="card-header-content">
                  <span className="card-tag">INDIA'S FIRST RESEARCH DRIVEN</span>
                  <h4 className="card-degree">PG Diploma/M.Sc. in</h4>
                  <h3 className="card-program">Artificial<br />Intelligence</h3>
                </div>
                <div className="card-hover-details">
                  <span className="ugc-tag">UGC Recognised Degree</span>
                  <div className="association-text-border">
                    Offered in Association with<br />Microsoft Azure
                  </div>
                  <div className="program-details-grid">
                    <div className="detail-item">
                      <span className="detail-label">DURATION</span>
                      <span className="detail-value">12-24 months</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">FORMAT</span>
                      <span className="detail-value">Weekend + Online</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">AVG. SALARY</span>
                      <span className="detail-value">30 LPA</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">NEXT COHORT</span>
                      <span className="detail-value">Aug 2026</span>
                    </div>
                  </div>
                  <button className="learn-more-btn" onClick={() => handleAlert('Loading Details...')}>LEARN MORE</button>
                </div>
              </div>

              {/* Card 5 */}
              <div className="program-card bg-5">
                <div className="card-header-content">
                  <span className="card-tag">INDIA'S FIRST SIMULATION INTEGRATED</span>
                  <h4 className="card-degree">PG Diploma/M.Sc. in</h4>
                  <h3 className="card-program">Cybersecurity</h3>
                </div>
                <div className="card-hover-details">
                  <span className="ugc-tag">UGC Recognised Degree</span>
                  <div className="association-text-border">
                    Offered in Association with EC-Council, Microsoft Azure Cloud and Terralogic Inc.
                  </div>
                  <div className="program-details-grid">
                    <div className="detail-item">
                      <span className="detail-label">DURATION</span>
                      <span className="detail-value">12-24 months</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">FORMAT</span>
                      <span className="detail-value">Weekend + Online</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">TOP TRACK</span>
                      <span className="detail-value">CISO pathway</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">NEXT COHORT</span>
                      <span className="detail-value">Aug 2026</span>
                    </div>
                  </div>
                  <button className="learn-more-btn" onClick={() => handleAlert('Loading Details...')}>LEARN MORE</button>
                </div>
              </div>

              {/* Card 6 */}
              <div className="program-card bg-6">
                <div className="card-header-content">
                  <span className="card-tag">INDIA'S FIRST INDUSTRY DRIVEN</span>
                  <h4 className="card-degree">PG Diploma/M.Sc. in</h4>
                  <h3 className="card-program">Cloud Architecture<br />and Security</h3>
                </div>
                <div className="card-hover-details">
                  <span className="ugc-tag">UGC Recognised Degree</span>
                  <div className="association-text-border">
                    Offered in Association with<br />AWS Academy
                  </div>
                  <div className="program-details-grid">
                    <div className="detail-item">
                      <span className="detail-label">DURATION</span>
                      <span className="detail-value">12-24 months</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">FORMAT</span>
                      <span className="detail-value">Weekend + Online</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">AVG. SALARY</span>
                      <span className="detail-value">24 LPA</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">NEXT COHORT</span>
                      <span className="detail-value">Aug 2026</span>
                    </div>
                  </div>
                  <button className="learn-more-btn" onClick={() => handleAlert('Loading Details...')}>LEARN MORE</button>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Outcomes Section */}
          <section className="roi-section">
            <div className="roi-header">
              <span className="roi-label">Our programs are ranked No. 1 in ROI</span>
              <h2 className="roi-title">Four programs. Four real outcomes.</h2>
              <p className="roi-subtitle">
                Every number below is an average salary our graduates are earning right now.<br />
                Pick the one closest to where you want to be, then go deep on what gets you there.
              </p>
            </div>

            <div className="stats-row">
              <div className={`stat-item ${selectedOutcome === 'Business Analytics' ? 'active' : ''}`} onClick={() => setSelectedOutcome('Business Analytics')} style={{ cursor: 'pointer' }}>
                <h3 className="stat-value"><AnimatedCounter target={39} prefix="₹" suffix="L" /></h3>
                <span className="stat-label">Business Analytics</span>
              </div>
              <div className={`stat-item ${selectedOutcome === 'Cybersecurity' ? 'active' : ''}`} onClick={() => setSelectedOutcome('Cybersecurity')} style={{ cursor: 'pointer' }}>
                <h3 className="stat-value"><AnimatedCounter target={32} prefix="₹" suffix="L" /></h3>
                <span className="stat-label">Cybersecurity</span>
              </div>
              <div className={`stat-item ${selectedOutcome === 'Artificial Intelligence' ? 'active' : ''}`} onClick={() => setSelectedOutcome('Artificial Intelligence')} style={{ cursor: 'pointer' }}>
                <h3 className="stat-value"><AnimatedCounter target={30} prefix="₹" suffix="L" /></h3>
                <span className="stat-label">Artificial Intelligence</span>
              </div>
              <div className={`stat-item ${selectedOutcome === 'Cloud Architecture & Security' ? 'active' : ''}`} onClick={() => setSelectedOutcome('Cloud Architecture & Security')} style={{ cursor: 'pointer' }}>
                <h3 className="stat-value"><AnimatedCounter target={24} prefix="₹" suffix="L" /></h3>
                <span className="stat-label">Cloud Architecture &amp; Security</span>
              </div>
            </div>

            <div className="outcome-card">
              <div className="outcome-left">
                <span className="outcome-category">{OUTCOME_DATA[selectedOutcome].category}</span>
                <h3 className="outcome-program">{OUTCOME_DATA[selectedOutcome].title}</h3>
                <p className="outcome-desc">
                  {OUTCOME_DATA[selectedOutcome].desc}
                </p>
                <div className="outcome-tags">
                  {OUTCOME_DATA[selectedOutcome].tags.map((tag, i) => (
                    <span key={i} className="tag-orange">{tag}</span>
                  ))}
                </div>
                <button className="explore-btn" onClick={() => { setCurrentView(OUTCOME_DATA[selectedOutcome].link); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Explore the programme →</button>
              </div>
              <div className="outcome-right">
                <h4 className="chart-title">CAREER OUTCOMES</h4>
                <div className="chart-row">
                  <span className="chart-label">Avg. salary</span>
                  <div className="bar-container"><div className="bar" key={`sal-${selectedOutcome}`} style={{ '--target-width': OUTCOME_DATA[selectedOutcome].salaryWidth } as React.CSSProperties}></div></div>
                  <span className="chart-value">{OUTCOME_DATA[selectedOutcome].salary}</span>
                </div>
                <div className="chart-row">
                  <span className="chart-label">Avg. hike</span>
                  <div className="bar-container"><div className="bar" key={`hike-${selectedOutcome}`} style={{ '--target-width': OUTCOME_DATA[selectedOutcome].avgHikeWidth } as React.CSSProperties}></div></div>
                  <span className="chart-value">{OUTCOME_DATA[selectedOutcome].avgHike}</span>
                </div>
                <div className="chart-row">
                  <span className="chart-label">Median hike</span>
                  <div className="bar-container"><div className="bar" key={`med-${selectedOutcome}`} style={{ '--target-width': OUTCOME_DATA[selectedOutcome].medianHikeWidth } as React.CSSProperties}></div></div>
                  <span className="chart-value">{OUTCOME_DATA[selectedOutcome].medianHike}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Real People Section */}
          <section className="real-people-section">
            <h2 className="section-title">Real People, Real Transformations</h2>
            <p className="section-subtitle">From career switches to salary jumps - discover how RACE Alumni are leading innovation at the world's biggest tech companies.</p>
            <div className="people-cards-container">
              <div className="people-card">
                <div className="person-img"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sathya Subbiah" /></div>
                <h4 className="person-name">Sathya Subbiah</h4>
                <p className="degree">M.Tech in Cybersecurity - 2022</p>
                <p className="role-old">Software Architect</p>
                <p className="role-to">to</p>
                <p className="role-new">Lead Research Engineer - OT security</p>
                <p className="company">Signify Innovation Labs</p>
              </div>
              <div className="people-card">
                <div className="person-img"><img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Lisa Biswas" /></div>
                <h4 className="person-name">Lisa Biswas</h4>
                <p className="degree">M.Sc. in Cybersecurity - 2022</p>
                <p className="role-old">Software Engineer - IT</p>
                <p className="role-to">to</p>
                <p className="role-new">Information Security Engineer</p>
                <p className="company">Commvault system Inc.</p>
              </div>
              <div className="people-card">
                <div className="person-img"><img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sai Sharanya Anand" /></div>
                <h4 className="person-name">Sai Sharanya Anand</h4>
                <p className="degree">M.Sc. in Cybersecurity - 2023</p>
                <p className="role-old">Home maker</p>
                <p className="role-to">to</p>
                <p className="role-new">Technical Support Engineer 3</p>
                <p className="company">Deloitte</p>
              </div>
              <div className="people-card">
                <div className="person-img"><img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Parimala Mudimela" /></div>
                <h4 className="person-name">Parimala Mudimela</h4>
                <p className="degree">MBA in Business Analytics, 2019</p>
                <p className="role-old">Software Engineer</p>
                <p className="role-to">to</p>
                <p className="role-new">Senior Data Scientist</p>
                <p className="company">Honeywell HTS</p>
              </div>
              <div className="people-card">
                <div className="person-img"><img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Rahul Sharma" /></div>
                <h4 className="person-name">Rahul Sharma</h4>
                <p className="degree">M.Tech in AI, 2021</p>
                <p className="role-old">Data Analyst</p>
                <p className="role-to">to</p>
                <p className="role-new">Machine Learning Engineer</p>
                <p className="company">Amazon</p>
              </div>
              <div className="people-card">
                <div className="person-img"><img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Karthik Narayan" /></div>
                <h4 className="person-name">Karthik Narayan</h4>
                <p className="degree">M.Sc. in Cloud Computing, 2022</p>
                <p className="role-old">System Administrator</p>
                <p className="role-to">to</p>
                <p className="role-new">Cloud Solutions Architect</p>
                <p className="company">Microsoft</p>
              </div>
            </div>
          </section>

          {/* Silicon Valley Finest Section */}
          <section className="silicon-valley-section">
            <h2 className="section-title">Learn from India's Silicon Valley's Finest</h2>
            <p className="section-subtitle">Master emerging tech with insights from top industry minds and gain the edge to lead your domain with confidence.</p>

            <div className="finest-tabs">
              <span className={`finest-tab ${activeTab === 'Artificial Intelligence' ? 'active' : ''}`} onClick={() => setActiveTab('Artificial Intelligence')}>Artificial Intelligence</span>
              <span className={`finest-tab ${activeTab === 'Analytics' ? 'active' : ''}`} onClick={() => setActiveTab('Analytics')}>Analytics</span>
              <span className={`finest-tab ${activeTab === 'Cybersecurity' ? 'active' : ''}`} onClick={() => setActiveTab('Cybersecurity')}>Cybersecurity/Cloud Architecture</span>
              <span className={`finest-tab ${activeTab === 'Leadership' ? 'active' : ''}`} onClick={() => setActiveTab('Leadership')}>Leadership</span>
            </div>

            <div className="finest-grid">
              {[...Array(15)].map((_, i) => {
                const getTabOffset = (tab: string) => {
                  switch (tab) {
                    case 'Analytics': return 15;
                    case 'Cybersecurity': return 30;
                    case 'Leadership': return 45;
                    case 'Artificial Intelligence':
                    default: return 0;
                  }
                };
                const index = i + getTabOffset(activeTab);
                return (
                  <div
                    key={i}
                    className="finest-portrait"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setSelectedMentor({
                        name: "Ravi Shukla",
                        role: "Distinguished Engineer at Dell Technologies",
                        image: `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${30 + (index % 50)}.jpg`,
                        desc: "Ravi Shukla is a Distinguished Engineer at Dell Technologies with over 17 years of experience in Artificial Intelligence,"
                      });
                    }}
                  >
                    <img src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${30 + (index % 50)}.jpg`} alt={`Mentor ${i}`} />
                    <div className="finest-overlay">
                      <h4 className="mentor-name">Ravi Shukla</h4>
                      <p className="mentor-role">Distinguished Engineer,<br />Dell Technologies</p>
                      <div className="mentor-socials">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Partners Section */}
          <section className="partners-section">
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle">We collaborate with industry leaders to provide world-class education and career opportunities.</p>

            <div className="partners-marquee-container">
              <div className="marquee-track left-to-right">
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/2/28/EC-Council_logo.png" alt="EC-Council" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" alt="TCS" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture_2017_logo.svg" alt="Accenture" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" alt="CISCO" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" alt="SIEMENS" /></div>
                {/* Duplicate for infinite scroll */}
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/2/28/EC-Council_logo.png" alt="EC-Council" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" alt="TCS" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture_2017_logo.svg" alt="Accenture" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" alt="CISCO" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg" alt="SIEMENS" /></div>
              </div>

              <div className="marquee-track right-to-left">
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png" alt="Sony" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Qualcomm_Logo.svg/1200px-Qualcomm_Logo.svg.png" alt="Qualcomm" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/2/28/EC-Council_logo.png" alt="EC-Council" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" /></div>
                {/* Duplicate for infinite scroll */}
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png" alt="Sony" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Qualcomm_Logo.svg/1200px-Qualcomm_Logo.svg.png" alt="Qualcomm" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/2/28/EC-Council_logo.png" alt="EC-Council" /></div>
                <div className="partner-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" /></div>
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section className="journey-section">
            <h2 className="section-title">Eventful Journey of RACE</h2>
            <div className="journey-grid masonry-grid">
              <div className="masonry-col">
                <div className="journey-card">
                  <div className="journey-img-container"><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80" alt="Event 1" /></div>
                  <div className="journey-content">
                    <span className="journey-date">12 Jun 2024</span>
                    <h4>Co-Intelligence by Ethan Mollick</h4>
                    <p>What It Really Means to Work With AI, Not Just Use It</p>
                    <a href="#" className="read-more">Read More {'>'}</a>
                  </div>
                </div>
                <div className="journey-card">
                  <div className="journey-img-container"><img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" alt="Event 4" /></div>
                  <div className="journey-content">
                    <span className="journey-date">15 Mar 2024</span>
                    <h4>GRAND INAUGURATION</h4>
                    <p>The event began with a warm welcome to the distinguished guests...</p>
                    <a href="#" className="read-more">Read More {'>'}</a>
                  </div>
                </div>
              </div>

              <div className="masonry-col">
                <div className="journey-card">
                  <div className="journey-img-container"><img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80" alt="Event 2" /></div>
                  <div className="journey-content">
                    <span className="journey-date">05 May 2024</span>
                    <h4>When Robots Dream of Ruler 1, Robot and the Real AI</h4>
                    <p>Robot was not a warning about future machines. It was...</p>
                    <a href="#" className="read-more">Read More {'>'}</a>
                  </div>
                </div>
                <div className="journey-card">
                  <div className="journey-img-container banner-img"><img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80" alt="Event 5" /></div>
                  <div className="journey-content dark-overlay purple-bg">
                    <h4>LEARN CUTTING-EDGE TECHNOLOGIES</h4>
                    <p>Dr. J.R. Sinha - Chief Mentor, RACE | CTO at Data Streams</p>
                  </div>
                </div>
              </div>

              <div className="masonry-col">
                <div className="journey-card">
                  <div className="journey-img-container banner-img"><img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80" alt="Event 6" /></div>
                  <div className="journey-content dark-overlay blue-bg">
                    <h4>LEARN FROM THE BEST</h4>
                    <p>Sandeep Vijayaraghavan K - Mentor at RACE</p>
                  </div>
                </div>
                <div className="journey-card">
                  <div className="journey-img-container"><img src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=400&q=80" alt="Event 3" /></div>
                  <div className="journey-content">
                    <span className="journey-date">24 Feb 2024</span>
                    <h4>What The Alchemist Can Teach Us About AI</h4>
                    <p>Ambition, and Adaptability...</p>
                    <a href="#" className="read-more">Read More {'>'}</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next-Gen Technology Education */}
          <section className="next-gen-section">
            <h2 className="section-title">Next-Gen Technology Education</h2>
            <p className="section-subtitle" style={{ fontSize: '18px', letterSpacing: '0.08px' }}>Being a thought leader in the world of next-gen tech education, RACE supports its program participants to reinvent their career through actionable learning.</p>
            <div className="next-gen-cards">
              <div className="next-gen-card">
                <div className="ng-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#F37021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22h20" />
                    <path d="M10 22V12h4v10" />
                    <path d="M8 12l4-4 4 4" />
                    <path d="M4 22V14h4" />
                    <path d="M20 22V14h-4" />
                    <rect x="5" y="16" width="2" height="2" />
                    <rect x="5" y="19" width="2" height="2" />
                    <rect x="17" y="16" width="2" height="2" />
                    <rect x="17" y="19" width="2" height="2" />
                    <rect x="11" y="15" width="2" height="2" />
                    <path d="M12 8V4l2 1.5L12 7" />
                  </svg>
                </div>
                <div className="ng-text">
                  <h4>About RACE</h4>
                  <p>RACE is a one-stop platform to learn emerging technologies through a progressive and integrated learning process.</p>
                </div>
              </div>
              <div className="next-gen-card">
                <div className="ng-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#F37021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M16.5 19v-1.5c0-1.9-1.5-3.5-3.5-3.5h-2c-2 0-3.5 1.6-3.5 3.5V19" />
                    <circle cx="6" cy="10" r="2.5" />
                    <path d="M4 19v-1.5c0-1.4 1-2.5 2.5-3" />
                    <circle cx="18" cy="10" r="2.5" />
                    <path d="M20 19v-1.5c0-1.4-1-2.5-2.5-3" />
                  </svg>
                </div>
                <div className="ng-text">
                  <h4>RACE Team</h4>
                  <p>Believes in changing the world of others with committed and collaborative work.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Career Starts Now */}
          <section className="career-starts-section">
            <h2>Your Tech Career Starts Now</h2>
            <p>Don't wait for the "perfect moment." Join 5,000+ professionals who took action and transformed their careers with RACE.</p>
            <div className="career-actions">
              <button className="btn-primary" onClick={() => { setCurrentView('apply-now'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Apply Now - Limited Seats {'>'}</button>
              <button className="btn-secondary" onClick={() => { setCurrentView('consultation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Talk to Career Counselor</button>
            </div>
          </section>
        </>
      ) : currentView === 'business-analytics' ? (
        <BusinessAnalytics setCurrentView={setCurrentView} />
      ) : currentView === 'certified-agentic-ai-engineer' ? (
        <CertifiedAgenticAI setCurrentView={setCurrentView} />
      ) : currentView === 'meetup' ? (
        <Meetup setCurrentView={setCurrentView} />
      ) : currentView === 'contact' ? (
        <ContactUs setCurrentView={setCurrentView} />
      ) : currentView === 'apply-now' ? (
        <ApplyNow setCurrentView={setCurrentView} />
      ) : currentView === 'race-labs' ? (
        <RaceLabs setCurrentView={setCurrentView} />
      ) : currentView === 'consulting' ? (
        <Consulting setCurrentView={setCurrentView} />
      ) : currentView === 'mentors' ? (
        <Mentors setCurrentView={setCurrentView} />
      ) : currentView === 'about' ? (
        <About setCurrentView={setCurrentView} />
      ) : (
        <div className="consultation-page">
          <div className="breadcrumb">
            <span onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>Home</span> &raquo; Connect with RACE, REVA University
          </div>
          <div className="scheduler-container">
            <div className={`wpcal-widget ${selectedDate ? 'expanded' : ''}`}>
              <div className="wpcal-left">
                <div className="avatar-circle">
                  <svg viewBox="0 0 24 24" width="50" height="50" fill="#ccc"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
                <p className="team-name">RACE TEAM</p>
                <h2>REVARACE</h2>
                <p className="duration">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  30 mins
                </p>
              </div>

              {bookingStep === 'calendar' ? (
                <>
                  <div className="wpcal-right">
                    {!selectedDate && <div className="wpcal-powered">POWERED BY<br /><strong>WPCal.io</strong></div>}
                    <h3>Select a Date</h3>
                    <div className="calendar-header">
                      <button className="cal-nav">&lt;</button>
                      <span>July 2026</span>
                      <button className="cal-nav">&gt;</button>
                    </div>
                    <div className="calendar-grid">
                      <span className="cal-day-header">S</span><span className="cal-day-header">M</span><span className="cal-day-header">T</span><span className="cal-day-header">W</span><span className="cal-day-header">T</span><span className="cal-day-header">F</span><span className="cal-day-header">S</span>
                      {(() => {
                        const days = [];
                        const inactiveDays = [1, 5, 11, 12, 18, 19, 25, 26];
                        for (let i = 0; i < 3; i++) days.push(<span key={`empty-start-${i}`} className="cal-day empty"></span>);
                        for (let i = 1; i <= 31; i++) {
                          const isInactive = inactiveDays.includes(i);
                          const isToday = i === 2;
                          const isSelected = selectedDate === i;

                          const classes = `cal-day ${isInactive ? 'inactive' : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`;

                          days.push(
                            <span
                              key={`day-${i}`}
                              className={classes}
                              onClick={() => { if (!isInactive) setSelectedDate(i); }}
                            >
                              {i}
                              {isToday && <div className="today-label">TODAY</div>}
                            </span>
                          );
                        }
                        days.push(<span key="empty-end" className="cal-day empty"></span>);
                        return days;
                      })()}
                    </div>
                    <div className="timezone-select-wrapper">
                      <svg className="tz-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                      <select defaultValue="Asia/Calcutta" className="timezone-select">
                        <option value="Africa/Abidjan">Africa - Abidjan</option>
                        <option value="Africa/Accra">Africa - Accra</option>
                        <option value="Africa/Addis_Ababa">Africa - Addis Ababa</option>
                        <option value="Africa/Algiers">Africa - Algiers</option>
                        <option value="Africa/Asmara">Africa - Asmara</option>
                        <option value="Africa/Bamako">Africa - Bamako</option>
                        <option value="Africa/Bangui">Africa - Bangui</option>
                        <option value="Africa/Banjul">Africa - Banjul</option>
                        <option value="Africa/Bissau">Africa - Bissau</option>
                        <option value="Africa/Blantyre">Africa - Blantyre</option>
                        <option value="Africa/Brazzaville">Africa - Brazzaville</option>
                        <option value="Africa/Bujumbura">Africa - Bujumbura</option>
                        <option value="Africa/Cairo">Africa - Cairo</option>
                        <option value="America/New_York">America - New York</option>
                        <option value="America/Los_Angeles">America - Los Angeles</option>
                        <option value="America/Toronto">America - Toronto</option>
                        <option value="America/Sao_Paulo">America - Sao Paulo</option>
                        <option value="Asia/Calcutta">Asia - Calcutta (India)</option>
                        <option value="Asia/Dubai">Asia - Dubai</option>
                        <option value="Asia/Singapore">Asia - Singapore</option>
                        <option value="Asia/Tokyo">Asia - Tokyo</option>
                        <option value="Australia/Sydney">Australia - Sydney</option>
                        <option value="Europe/London">Europe - London</option>
                        <option value="Europe/Paris">Europe - Paris</option>
                        <option value="Europe/Berlin">Europe - Berlin</option>
                        <option value="Pacific/Auckland">Pacific - Auckland</option>
                      </select>
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="wpcal-time">
                      <div className="wpcal-powered">POWERED BY<br /><strong>WPCal.io</strong></div>
                      <h3>Select a Time</h3>
                      <p className="selected-date-text">Friday, July {selectedDate}th</p>
                      <div className="time-slots-list">
                        {(() => {
                          const times = [];
                          for (let h = 9; h <= 17; h++) {
                            for (const m of ['00', '15', '30', '45']) {
                              const ampm = h >= 12 ? 'pm' : 'am';
                              const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h);
                              const strH = displayH < 10 ? `0${displayH}` : displayH;
                              times.push(`${strH}:${m} ${ampm}`);
                            }
                          }
                          return times;
                        })().map(time => (
                          selectedTime === time ? (
                            <div key={time} className="time-slot-selected-row">
                              <span className="selected-time-label">{time}</span>
                              <button className="confirm-btn" onClick={() => setBookingStep('form')}>Confirm</button>
                            </div>
                          ) : (
                            <button key={time} className="time-slot-btn" onClick={() => setSelectedTime(time)}>{time}</button>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="wpcal-form-view">
                  <div className="wpcal-powered">POWERED BY<br /><strong>WPCal.io</strong></div>
                  <button className="back-btn" onClick={() => setBookingStep('calendar')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    Back
                  </button>

                  <div className="booking-summary">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#22c55e" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <div className="summary-details">
                      <span className="time-text">{selectedTime} - {selectedTime},</span>
                      <span className="date-text">Wednesday, {selectedDate}th July, 2026</span>
                      <span className="tz-text">(Asia - Calcutta).</span>
                    </div>
                  </div>

                  <h3>Please enter your details</h3>
                  <form className="booking-form">
                    <div className="form-group error">
                      <div className="form-label-row">
                        <label>Full Name</label>
                        <span className="required-text">required</span>
                      </div>
                      <input type="text" />
                      <span className="error-text">This field is required.</span>
                    </div>

                    <div className="form-group">
                      <div className="form-label-row">
                        <label>Email Address</label>
                        <span className="required-text">required</span>
                      </div>
                      <input type="email" />
                    </div>

                    <div className="form-group">
                      <div className="form-label-row">
                        <label>How shall we connect?</label>
                        <span className="required-text">required</span>
                      </div>
                      <div className="connect-type">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="#f97316"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        <span>Phone call</span>
                      </div>
                      <p className="field-desc">Enter your phone number. RACE Team will call you here at the scheduled time.</p>
                      <input type="tel" />
                      <p className="field-hint">Please enter phone number with country code. E.g. +1 555 555 1234</p>
                    </div>

                    <button type="button" className="btn-primary schedule-event-btn" onClick={() => handleAlert('Event Scheduled!')}>Schedule My Event</button>
                  </form>
                </div>
              )}
            </div>
            <div className="scheduler-footer">
              Want your own scheduler for Free? This booking is powered by WPCal.io
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-columns" style={{ width: '350px' }}>
          <div className="footer-col quick-links-col" style={{ width: '650px' }}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">About RACE</a></li>
              <li><a href="#">RACE Labs – Blogs</a></li>
              <li><a href="#">Mentors</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Upcoming Events</a></li>
              <li><a href="#">Careers at RACE</a></li>
              <li><a href="#">Razorpay</a></li>
              <li><a href="#">Bill Desk</a></li>
              <li><a href="#">RACE LMS – Student Login</a></li>
            </ul>
          </div>
          <div className="footer-col programs-col">
            <h4>Programs</h4>
            <ul>
              <li><a href="#">M.Sc. in Business Analytics</a></li>
              <li><a href="#">M.Sc. in Artificial Intelligence</a></li>
              <li><a href="#">M.Sc. in Cybersecurity</a></li>
              <li><a href="#">M.Sc. in Cloud Architecture and Security</a></li>
              <li><a href="#">M.Tech. in Artificial Intelligence</a></li>
              <li><a href="#">M.Tech. in Cybersecurity</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('certified-agentic-ai-engineer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Certified Agentic AI Engineer</a></li>
              <li><a href="#">Certified DevOps Specialist</a></li>
              <li><a href="#">Advanced Diploma in Cybersecurity and Privacy Management</a></li>
              <li><a href="#">Certified Ethical Hacker</a></li>
              <li><a href="#">Certified Penetration Testing Professional</a></li>
              <li><a href="#" className="text-orange">Certified AI Engineer</a></li>
            </ul>
          </div>
          <div className="footer-col social-col">
            <h4>Social</h4>
            <div className="social-links-grid" style={{ width: '650px' }}>
              <a href="#" className="social-item" style={{ fontSize: '20px' }}>
                <span className="social-icon" style={{ width: '48px', height: '48px' }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </span>
                Facebook
              </a>
              <a href="#" className="social-item" style={{ fontSize: '20px' }}>
                <span className="social-icon" style={{ width: '48px', height: '48px' }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </span>
                Linkedin
              </a>
              <a href="#" className="social-item" style={{ fontSize: '20px' }}>
                <span className="social-icon" style={{ width: '48px', height: '48px' }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </span>
                Instagram
              </a>
              <a href="#" className="social-item" style={{ fontSize: '20px' }}>
                <span className="social-icon" style={{ width: '48px', height: '48px' }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </span>
                Twitter
              </a>
              <a href="#" className="social-item" style={{ fontSize: '20px' }}>
                <span className="social-icon" style={{ width: '45px', height: '45px' }}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </span>
                Youtube
              </a>
            </div>

            <h4 style={{ marginTop: '40px' }}>Address</h4>
            <p className="address-text">
              RACE, REVA University<br />
              Rukmini Educational Charitable Trust<br />
              Kattigenahalli, Yelahanka, Bangalore, Karnataka, India, 560 064<br />
              Phone: +91 89040 58866
            </p>
          </div>
        </div>
      </footer>
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom">
          <div className="footer-bottom-logos">
            <img src="/Race_Logo.png" alt="RACE REVA University Logo" className="footer-reva-logo" />
          </div>
          <div className="copyright-container">
            <span className="copyright">© 2025 RACE. All Rights Reserved</span>
            <span className="security-badge">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
              Security With SSL
            </span>
          </div>
          <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="whatsapp-widget-container">
        {isWhatsappOpen && (
          <div className="whatsapp-popup">
            <div className="whatsapp-header">
              <div className="whatsapp-header-content">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                <span>WhatsApp</span>
              </div>
              <button className="whatsapp-close" onClick={(e) => { e.stopPropagation(); setIsWhatsappOpen(false); }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
              </button>
            </div>
            <div className="whatsapp-body">
              <p>Greetings and thank you for connecting with RACE, REVA University. I am your Admission Counselor, ready to assist you.</p>
              <a href="https://wa.me/918904058866" target="_blank" rel="noopener noreferrer" className="whatsapp-open-btn">
                Open chat
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white" style={{ marginLeft: '8px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              </a>
            </div>
          </div>
        )}

        {!isWhatsappOpen && (
          <div className="floating-whatsapp" onClick={() => setIsWhatsappOpen(true)}>
            <svg viewBox="0 0 24 24" width="34" height="34" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
          </div>
        )}
      </div>

      <div className="chatbot-widget-container">
        {isChatbotOpen && (
          <div className="chatbot-popup">
            {chatbotView === 'home' ? (
              <div className="chatbot-header">
                <div className="chatbot-logo">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12 2L2 12l10 10 10-10L12 2zm0 2.8l7.2 7.2-7.2 7.2-7.2-7.2L12 4.8zM12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" /></svg>
                </div>
                <p>Please fill out the form below and we will get back to you as soon as possible.</p>
              </div>
            ) : (
              <div className="chatbot-header messages-header">
                <button className="messages-back-btn" onClick={() => setChatbotView('home')}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /></svg>
                </button>
                <h3>Messages</h3>
              </div>
            )}

            <div className="chatbot-inner">
              <div className="chatbot-body">
                {chatbotView === 'home' ? (
                  <form className="chatbot-form" onSubmit={(e) => { e.preventDefault(); handleAlert('Form submitted!'); }}>
                    <div className="cb-input-group">
                      <label>* Name</label>
                      <input type="text" required />
                    </div>
                    <div className="cb-input-group">
                      <label>* Email</label>
                      <input type="email" required />
                    </div>
                    <div className="cb-phone-group">
                      <label>* Phone</label>
                      <div className="cb-phone-inputs">
                        <select defaultValue="+91">
                          <option value="+91">🇮🇳 +91</option>
                        </select>
                        <input type="tel" required />
                      </div>
                    </div>
                    <div className="cb-radio-group">
                      <label>* I am interested to know more about master's in</label>
                      <label className="cb-radio"><input type="radio" name="program" value="ba" /> Business Analytics</label>
                      <label className="cb-radio"><input type="radio" name="program" value="cs" /> Cybersecurity</label>
                      <label className="cb-radio"><input type="radio" name="program" value="ai" /> Artificial Intelligence</label>
                      <label className="cb-radio"><input type="radio" name="program" value="cloud" /> Cloud Architecture and Security</label>
                      <label className="cb-radio"><input type="radio" name="program" value="other" /> I have other query</label>
                    </div>
                    <div className="cb-radio-group">
                      <label>* Relevant work experience to meet the (Masters Program) eligibility criteria?</label>
                      <label className="cb-radio"><input type="radio" name="experience" value="below2" /> Below 2 years</label>
                      <label className="cb-radio"><input type="radio" name="experience" value="above2" /> More than 2 years of experience</label>
                    </div>
                    <div className="cb-input-group">
                      <label>* State your most recent academic accomplishment (Graduation)</label>
                      <textarea rows={2} required></textarea>
                    </div>
                    <div className="cb-input-group">
                      <label>* State your query</label>
                      <textarea rows={1} required></textarea>
                    </div>
                    <button type="submit" className="chatbot-submit">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: '6px' }}><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                      Submit
                    </button>
                  </form>
                ) : (
                  <div className="chatbot-messages-body">
                    <div className="messages-section-title">Recent</div>
                    <div className="message-card">
                      <div className="msg-card-header">
                        <span className="msg-sender">Customer Support</span>
                        <span className="msg-time">now</span>
                      </div>
                      <div className="msg-card-content">
                        <p>Welcome to RACE! We're online and eager to assist you with a...</p>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="#9ca3af"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="chatbot-footer">
                <button className={`cb-icon-btn ${chatbotView === 'home' ? 'active' : ''}`} onClick={() => setChatbotView('home')}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </button>
                <button className={`cb-icon-btn ${chatbotView === 'messages' ? 'active' : ''}`} onClick={() => setChatbotView('messages')}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {isChatbotOpen && (
          <div className="chatbot-powered-by">
            <img src="https://tawk.to/favicon.ico" alt="tawk.to" width="12" height="12" style={{ marginRight: '4px' }} />
            Powered by tawk.to
          </div>
        )}

        <div className="floating-chatbot" onClick={() => setIsChatbotOpen(!isChatbotOpen)}>
          {isChatbotOpen ? (
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
          )}
        </div>
      </div>

      <div className="request-callback" onClick={() => window.open('/?view=consultation', '_blank')}>
        Request a Callback
      </div>

      {/* Admission Modal */}
      {isAdmissionModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAdmissionModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsAdmissionModalOpen(false)}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M15 9l-6 6M9 9l6 6"></path></svg>
            </button>
            <h2 className="modal-title">Admissions Open</h2>
            <form className="admission-form">
              <input type="text" placeholder="Enter Name *" required />
              <input type="email" placeholder="Enter Email Address *" required />

              <div className="phone-input-group">
                <select className="country-code" defaultValue="+91">
                  <option value="+91">+91</option>
                </select>
                <input type="tel" placeholder="Enter Mobile Number *" required />
              </div>

              <input type="text" placeholder="Enter Organization's Name *" required />
              <input type="text" placeholder="Enter Job Title *" required />

              <select defaultValue="" required>
                <option value="" disabled hidden>Work Experience</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>

              <select defaultValue="" required>
                <option value="" disabled hidden>Select Program Interested in *</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="ds">Data Science</option>
                <option value="cyber">Cybersecurity</option>
              </select>

              <div className="captcha-group">
                <div className="captcha-image">
                  <div className="captcha-text">
                    <span className="c1">6</span><span className="c2">2</span><span className="c3">4</span><span className="c4">e</span><span className="c5">0</span><span className="c6">6</span>
                  </div>
                  <button type="button" className="refresh-captcha">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
                  </button>
                </div>
                <input type="text" placeholder="Enter Captcha" required />
              </div>

              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to receive information regarding my submitted application by signing up on REVA Academy for Corporate Excellence *</span>
              </label>

              <button type="submit" className="submit-btn" onClick={(e) => { e.preventDefault(); alert("Form Submitted!"); setIsAdmissionModalOpen(false); }}>SUBMIT</button>
            </form>
          </div>
        </div>
      )}
      {/* Mentor Modal */}
      {selectedMentor && (
        <div className="mentor-modal-overlay" onClick={() => setSelectedMentor(null)}>
          <div className="mentor-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="mentor-modal-close" onClick={() => setSelectedMentor(null)}>×</button>
            <div className="mentor-modal-header">
              <h2>{selectedMentor.name}</h2>
            </div>
            <div className="mentor-modal-body">
              <div className="mentor-modal-image-col">
                <img src={selectedMentor.image} alt={selectedMentor.name} />
                <div className="mentor-modal-socials">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#F37021"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#F37021"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </div>
              </div>
              <div className="mentor-modal-text-col">
                <p>{selectedMentor.desc} <span style={{ color: '#F37021' }}>(more...)</span></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
