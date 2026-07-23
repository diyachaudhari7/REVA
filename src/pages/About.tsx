import React from 'react';
import './About.css';

interface AboutProps {
  setCurrentView: (view: string) => void;
}

const coreTeam = [
  {
    name: "Dr. Shinu Abhi",
    role: "Professor and Director - Corporate Training",
    image: "/Dr-Shinu-Abhi.png",
    fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sandeep Vijayaraghavan K",
    role: "Chief Mentor - Cyber & Cloud Security - RACE | EVP - Terralogic Inc.",
    image: "/img/images/cybersecurity-cloud-architecture/Sandeep_Vijayaraghavan.png",
    fallback: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Dr. J B Simha",
    role: "Chief AI officer, AdoptAI Technologies and Professor and Chief Mentor, RACE",
    image: "/img/images/analytics/Dr._J_B_Simha.png",
    fallback: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  }
];

const staffTeam = [
  {
    name: "Dr. Rashmi Agarwal",
    role: "Associate Professor",
    image: "/img/team/Dr-Rashmi-Agarwal.png",
    fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Paramesh G",
    role: "Assistant Professor",
    image: "/img/team/Paramesh-G.png",
    fallback: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Kiran Kumar K V",
    role: "Assistant Professor",
    image: "/img/team/Kiran-Kumar.png",
    fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sreedhu Nidheesh",
    role: "HR-BP",
    image: "/img/team/Sreedhu-Nidheesh.png",
    fallback: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Priyanka Umarji",
    role: "Senior Manager-Corporate Partnership & Solutions",
    image: "/img/team/Priyanka-Umarji.png",
    fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Belavendra Jordan C",
    role: "Senior Technical Lead",
    image: "/img/team/Belavendra-Jordan.png",
    fallback: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Samarth Mandvekar",
    role: "AI Product Engineer",
    image: "/img/team/Samarth-Mandvekar.png",
    fallback: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Vikas Sharma",
    role: "Program Manager",
    image: "/img/team/Vikas-Sharma.png",
    fallback: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Nikesh Rai",
    role: "Performance Manager - Digital",
    image: "/img/team/Nikesh-Rai.png",
    fallback: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Irshad Ahmed",
    role: "Senior Program Manager",
    image: "/img/team/Irshad-Ahmed.png",
    fallback: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "D R Manmohan Rao",
    role: "Team Lead - Branding",
    image: "/img/team/DR-Manmohan-Rao.png",
    fallback: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Arthi V",
    role: "Content Strategist",
    image: "/img/team/Arthi-V.png",
    fallback: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  }
];

const About: React.FC<AboutProps> = ({ setCurrentView }) => {
  return (
    <div className="about-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>Home</span> &gt; <span>About Us</span>
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-left" style={{ maxWidth: '700px' }}>
          <div className="pill-badge orange-bg">Developing Visionary Enterprise Leaders</div>
          <h1 className="hero-title">Reva Academy for<br />Corporate Excellence</h1>
          <p className="hero-desc">
            Progressive and integrated learning capabilities for working professionals. Specialized techno-functional and interdisciplinary programs designed to suit the needs of working professionals.
          </p>
          <div className="hero-actions">
            <button className="btn-explore">Explore Program</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-frame-rounded">
            <img src="/About_us_img.svg" alt="RACE About Us" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-journey-section">
        <div className="section-header center">
          <h2>Our Journey</h2>
          <p className="subtitle">Progressive and integrated learning capabilities for working professionals</p>
        </div>

        <div className="stats-box-full">
          <div className="j-stat">
            <div className="j-stat-number orange-text">10+</div>
            <div className="j-stat-label">Years of Educational Excellence</div>
          </div>
          <div className="j-stat">
            <div className="j-stat-number orange-text">35+</div>
            <div className="j-stat-label">Corporate Partnerships</div>
          </div>
          <div className="j-stat">
            <div className="j-stat-number orange-text">2000+</div>
            <div className="j-stat-label">Working Professionals Trained</div>
          </div>
          <div className="j-stat">
            <div className="j-stat-number orange-text">100%</div>
            <div className="j-stat-label">Industry Relevant Pedagogy</div>
          </div>
          <div className="j-stat">
            <div className="j-stat-number orange-text">15+</div>
            <div className="j-stat-label">Domain Specializations</div>
          </div>
        </div>
      </section>

      {/* About & Features Grid */}
      <section className="about-features-section">
        <div className="about-grid">
          {/* Left Column: Vision & Mission */}
          <div className="about-text-column">
            <h2 className="section-title">Who We Are</h2>
            <p className="about-text">
              REVA Academy for Corporate Excellence (RACE) is a premier executive education institution offering specialized programs for working professionals. We develop visionary leaders equipped with future-ready competencies.
            </p>
            <div className="vision-mission-grid">
              <div className="vm-box">
                <div className="vm-header">
                  <span className="vm-icon">👁️</span>
                  <h3>Vision</h3>
                </div>
                <p>To develop fast rising executives into global leaders through analytics, cybersecurity, and deep technology programs.</p>
              </div>
              <div className="vm-box">
                <div className="vm-header">
                  <span className="vm-icon">🎯</span>
                  <h3>Mission</h3>
                </div>
                <p>Provide state-of-the-art corporate programs in deep tech domains through collaborative, experiential learning models.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Features & Campus Image */}
          <div className="about-features-column">
            <div className="key-features-box">
              <h3>Key Features</h3>
              <ul className="features-list">
                <li>Designed for working professionals with flexible schedules</li>
                <li>Mentorship from top industry practitioners</li>
                <li>State-of-the-art cloud labs and hands-on case studies</li>
                <li>Rigorous evaluation and career advancement support</li>
              </ul>
            </div>
            <div className="campus-image-box">
              <img src="/RACE-Aboutus-Infra.png" alt="REVA Campus" />
            </div>
          </div>
        </div>
      </section>

      {/* RACE Values */}
      <section className="race-values-section">
        <div className="section-header center">
          <h2>RACE Values</h2>
        </div>
        <div className="values-image-container">
          <img src="/RACE_values.svg" alt="RACE Values" className="values-section-img" />
        </div>
      </section>

      {/* RACE Credo */}
      <section className="race-credo-section">
        <div className="section-header center">
          <h2>RACE Credo</h2>
        </div>
        <div className="credo-image-container">
          <img src="/About_us_img.svg" alt="RACE Credo" className="credo-section-img" />
        </div>
      </section>

      {/* Partners Section */}
      <section className="about-partners-section">
        <div className="section-header center">
          <h2>Partners</h2>
        </div>
        <div className="partners-grid-about">
          <div className="partner-logo-box">
            <img src="/img/partners/logo-terralogic.png" alt="Terralogic" />
          </div>
          <div className="partner-logo-box">
            <img src="/img/partners/logo-ibm.png" alt="IBM Software Lab" />
          </div>
          <div className="partner-logo-box">
            <img src="/img/partners/logo-purple-synapz.png" alt="Purple Synapz" />
          </div>
          <div className="partner-logo-box">
            <img src="/img/partners/logo-security-innovation-placeholder.png" alt="Security Innovation" onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/200x80/ffffff/475569.png?text=Security+Innovation';
            }} />
          </div>
          <div className="partner-logo-box">
            <img src="/img/partners/logo-dsci.png" alt="DSCI" />
          </div>
          <div className="partner-logo-box">
            <img src="/img/partners/logo-jigsaw-academy-placeholder.png" alt="Jigsaw Academy" onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/200x80/ffffff/475569.png?text=Jigsaw+Academy';
            }} />
          </div>
          <div className="partner-logo-box">
            <img src="/img/partners/logo-cloudxlab.png" alt="CloudxLab" />
          </div>
          <div className="partner-logo-box">
            <img src="/img/partners/logo-times-professional-learning-placeholder.png" alt="Times Professional Learning" onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/200x80/ffffff/475569.png?text=Times+Professional';
            }} />
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="about-director-section">
        <div className="section-header center">
          <h2>Director's Message</h2>
        </div>
        <div className="director-card">
          <div className="director-left">
            <div className="director-img-container">
              <img src="/Dr-Shinu-Abhi.png" alt="Dr. Shinu Abhi" onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
              }} />
            </div>
            <div className="director-caption">
              <h4>Dr. Shinu Abhi</h4>
              <p className="director-title">Professor and Director</p>
              <p className="director-dept">Corporate Training</p>
            </div>
          </div>
          <div className="director-right">
            <p>Welcome to REVA University and the REVA Academy for Corporate Excellence (RACE), where learning is a continuous pursuit of excellence. At RACE, we have built an ecosystem where learners and mentors collaborate to drive innovation and create knowledge that benefits both organizations and society. RACE accelerates the careers of professionals while building the future-ready competencies that organizations need.</p>
            <p>Our corporate training programs in deep technologies are designed and delivered by senior industry leaders who bring years of experience. We boast best-in-class content, tools and pedagogy in all our Masters programs and short-term programs in AI, Cybersecurity, Cloud Computing and other emerging tech areas. All our Masters programs are certified by regulatory bodies and leading industry partners. We also design and deliver niche and bespoke corporate training programs for marquee organizations.</p>
            <p>We use a blended learning approach, where participants experience a combination of flexible online content and on-campus classes in state-of-the-art facilities. An adaptive Learning Management System (LMS) and One-on-One mentoring by senior industry leaders make our programs stand apart from the rest. The unique pedagogy blends practical and experiential learning, focusing on empowering learners and building transformative capabilities.</p>
            <p>Our programs are top-ranked in Quality and Return-on-Investments by various industry partners. We are deeply committed to our participants' success, helping them learn and implement cutting-edge solutions, and also creating opportunities for career advancement, with many participants advancing to C-level roles and other leadership positions.</p>
            <p>At RACE, we are committed to fostering a techno-functional and entrepreneurial mindset and a research-driven approach, equipping our learners with the skills and confidence to lead organizations and drive meaningful change.</p>
            <div className="director-quote">
              Join us at RACE, where the journey of learning never ends, and the future of innovation and inspired learning begins.
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & RACE Team Section */}
      <section className="about-team-section">
        <div className="chancellor-block">
          <div className="chancellor-img-container">
            <img src="/Dr-P-Shyama-Raju.png" alt="Dr. P. Shyama Raju" onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
            }} />
          </div>
          <div className="chancellor-caption">
            <h3>Dr. P. Shyama Raju</h3>
            <p>Chief Patron and Honorable Chancellor, REVA University</p>
          </div>
        </div>

        <div className="race-team-block">
          <div className="section-header center">
            <h2>RACE Team</h2>
            <p className="subtitle">Creating a culture of excellence by implementing RACE values with an actionable approach</p>
          </div>
          <div className="team-grid">
            {coreTeam.map((member, index) => (
              <div className="team-member-card" key={index}>
                <div className="member-img-container">
                  <img src={member.image} alt={member.name} onError={(e) => {
                    e.currentTarget.src = member.fallback;
                  }} />
                  <div className="member-overlay">
                    <div className="social-links-overlay">
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-caption">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RACE Staff & Faculty Section */}
      <section className="about-staff-section">
        <div className="staff-grid">
          {staffTeam.map((member, index) => (
            <div className="staff-member-card" key={index}>
              <div className="staff-img-container">
                <img src={member.image} alt={member.name} onError={(e) => {
                  e.currentTarget.src = member.fallback;
                }} />
                <div className="member-overlay">
                  <div className="social-links-overlay">
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="staff-caption">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
