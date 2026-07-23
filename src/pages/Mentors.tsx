import React, { useState } from 'react';
import './Mentors.css';

interface MentorsProps {
  setCurrentView: (view: string) => void;
}

const mentorsData = [
  {
    id: 1,
    name: 'Dr. J B Simha',
    role: 'Chief AI officer, AdoptAI Technologies and Professor and Chief Mentor, RACE',
    desc: 'Dr. J.B. Simha has designed and deployed analytical systems across BFSI, Telecom, Healthcare, and Manufacturing. He has...',
    category: 'Analytics/Data Science',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
  },
  {
    id: 2,
    name: 'Ratnakar Pandey',
    role: 'Chief Data Scientist, Granicus',
    desc: 'AI & Data Science Leader with 15+ years of experience across Tech, BFSI, FinTech, and Retail in the US & India. Led 50+ professionals and delivered high-impact...',
    category: 'Analytics/Data Science',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80'
  },
  {
    id: 3,
    name: 'Pradeepta Mishra',
    role: 'Vice President of Artificial Intelligence, Beghou Consulting',
    desc: 'Pradeepta Mishra is a seasoned AI leader with 20+ years of experience in applied AI, deep learning, and data science...',
    category: 'Analytics/Data Science',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    id: 4,
    name: 'Ravi Shukla',
    role: 'Distinguished Engineer, Dell Technologies',
    desc: 'Ravi Shukla is a Distinguished Engineer at Dell Technologies with over 17 years of experience in Artificial Intelligence, ...',
    category: 'Analytics/Data Science',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    id: 5,
    name: 'Shriram Vasudevan',
    role: 'Regional Mentor of Change, Atal Innovation Mission Official',
    desc: 'Shriram Vasudevan (FIE, FIETE, SMIEEE) is a multifaceted AI Engineering Leader with over 17 years of experience spanning industry, R&D, and academia. A TEDx ...',
    category: 'Analytics/Data Science',
    image: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    id: 6,
    name: 'Bismillah Kani',
    role: 'Staff AI/ML Scientist, Waygate Technologies',
    desc: 'Innovative AI leader with 15+ years of experience delivering enterprise-scale AI solutions across aerospace, ...',
    category: 'Analytics/Data Science',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
  {
    id: 7,
    name: 'Dr. Angshuman Ghosh',
    role: 'Founder and CEO, MENRV.AI',
    desc: 'Dr. Angshuman Ghosh is the Founder & CEO of MENRV.AI, Menrva Technologies, and Menrva Enterprises, building impactful AI-ML products for global ...',
    category: 'Analytics/Data Science',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 8,
    name: 'Prahalad Karnam',
    role: 'CEO and Co-Founder, DishaAI.com',
    desc: 'An alumnus of Columbia and Harvard Business Schools with 25+ years of global experience in strategy, marketing, and consulting. Has worked with top brands ...',
    category: 'Analytics/Data Science',
    image: 'https://randomuser.me/api/portraits/men/52.jpg'
  },
  {
    id: 9,
    name: 'Akshay Kulkarni',
    role: 'Data Science & AI Leader, Publicis Sapient',
    desc: 'Akshay is a globally recognized AI and ML expert, author of multiple top-selling books on data science, and an open-source contributor ...',
    category: 'Analytics/Data Science',
    image: 'https://randomuser.me/api/portraits/men/62.jpg'
  },
  {
    id: 10,
    name: 'Usha Rengaraju',
    role: 'Chief of Research, Exa Protocol | Kaggle Grandmaster',
    desc: 'Usha is the world\'s first woman Triple Kaggle Grandmaster and an expert in deep learning and generative AI with a passion for building communities ...',
    category: 'Analytics/Data Science',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 11,
    name: 'Sayandeb Banerjee',
    role: 'Co-Founder and CEO, TheMathCompany',
    desc: 'Co-founder and CEO of MathCo, member of the Forbes Tech Council, and AIM data science leader recognized for building impactful ...',
    category: 'Analytics/Data Science',
    image: 'https://randomuser.me/api/portraits/men/72.jpg'
  },
  {
    id: 12,
    name: 'Amaralingeswara Rao Kaka',
    role: 'Director of Professional Services - APJ, EnterpriseDB',
    desc: 'Amaralingeswara Rao is an experienced technology leader with a strong background in professional services and cloud architectures across APJ region ...',
    category: 'Analytics/Data Science',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  }
];

const categories = [
  'Analytics/Data Science',
  'Artificial Intelligence',
  'Cybersecurity/Cloud Architecture',
  'Leadership'
];

const Mentors: React.FC<MentorsProps> = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredMentors = mentorsData.filter(m => m.category === activeTab);

  return (
    <div className="mentors-page">
      {/* Breadcrumb */}
      <div className="breadcrumb" style={{ padding: '5px 5%' }}>
        <span onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>Home</span> &gt; <span>Mentors</span>
      </div>

      {/* Hero Section */}
      <section className="mentors-hero">
        <h1 className="mentors-title">Meet Our Expert Mentors</h1>
        <p className="mentors-subtitle">
          Connect with industry leaders, researchers, and entrepreneurs who are passionate about guiding the next generation of innovators and helping you achieve your career goals.
        </p>

        {/* Stats Bar */}
        <div className="mentors-stats-bar">
          <div className="m-stat">
            <span className="m-stat-number orange-text">50+</span>
            <span className="m-stat-label">Senior Leaders as<br />Mentors</span>
          </div>
          <div className="m-stat">
            <span className="m-stat-number orange-text">1000+</span>
            <span className="m-stat-label">Mid and Senior<br />Executives Trained</span>
          </div>
          <div className="m-stat">
            <span className="m-stat-number orange-text">15+</span>
            <span className="m-stat-label">Industry Domains</span>
          </div>
          <div className="m-stat">
            <span className="m-stat-number orange-text">4.9</span>
            <span className="m-stat-label">Average Rating</span>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="mentor-network-section">
        <div className="section-header center">
          <h2>Our Mentor Network</h2>
          <p className="subtitle">Choose from our diverse pool of mentors based on your interests and career goals</p>
        </div>

        {/* Tabs */}
        <div className="mentor-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`mentor-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mentors-grid">
          {filteredMentors.length > 0 ? (
            filteredMentors.map(mentor => (
              <div className="mentor-card" key={mentor.id}>
                <div className="mentor-img-wrapper">
                  <img src={mentor.image} alt={mentor.name} className="mentor-img" />
                </div>
                <div className="mentor-social-section">
                  <div className="social-row">
                    <span className="social-icon twitter">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
                    </span>
                    <span className="social-icon linkedin">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </span>
                  </div>
                </div>
                <div className="mentor-content">
                  <h3 className="mentor-name">{mentor.name}</h3>
                  <p className="mentor-role">{mentor.role}</p>
                  <div className="mentor-divider"></div>
                  <p className="mentor-desc">{mentor.desc} <span className="read-more-text">(more...)</span></p>
                  <div className="mentor-divider bottom-divider"></div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-mentors">Mentors coming soon for this category.</div>
          )}
        </div>
      </section>

      {/* Ready to Connect Footer */}
      <section className="mentors-footer-cta">
        <h2>Ready to Connect with a Mentor?</h2>
        <p>Take the next step in your career journey. Book a session with one of our expert mentors today.</p>
        <button className="btn-book-session">Book a session</button>
      </section>

      {/* Social Media Follow Section */}
      <section className="mentors-social-follow-section">
        <h3>Like and Follow us on Social Media</h3>
        <div className="social-follow-icons">
          <a href="#" className="social-follow-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="social-follow-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" className="social-follow-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="social-follow-icon" aria-label="Twitter">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" className="social-follow-icon" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Mentors;
