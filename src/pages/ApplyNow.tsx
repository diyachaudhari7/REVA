import React, { useRef, useState } from 'react';
import './ApplyNow.css';

interface ApplyNowProps {
  setCurrentView?: (view: string) => void;
}

const ApplyNow: React.FC<ApplyNowProps> = ({ setCurrentView }) => {
  const [activeStory, setActiveStory] = useState(0);
  const storiesScrollRef = useRef<HTMLDivElement>(null);

  const handleStoryScroll = () => {
    if (storiesScrollRef.current) {
      const scrollLeft = storiesScrollRef.current.scrollLeft;
      const cardWidth = storiesScrollRef.current.children[0].clientWidth + 30;
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== activeStory) setActiveStory(index);
    }
  };

  const scrollToStory = (index: number) => {
    if (storiesScrollRef.current) {
      const cardWidth = storiesScrollRef.current.children[0].clientWidth + 30;
      storiesScrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveStory(index);
    }
  };
  return (
    <div className="apply-now-page">
      {/* Hero Section */}
      <section className="apply-hero-section">
        <div className="apply-hero-container">
          {/* Left Content */}
          <div className="apply-hero-left">
            <div className="apply-guarantee-badge">
              <span className="apply-check-icon">✓</span> 100% Job Placement Guarantee
            </div>

            <h1 className="apply-hero-title">
              Land Your Dream<br />Tech with RACE
            </h1>

            <p className="apply-hero-subtitle">
              Join 1000+ professionals who switched to high-paying tech careers.<br />
              Industry-designed programs with guaranteed placements
            </p>

            <ul className="apply-features-list">
              <li>
                <div className="apply-feature-check"></div>
                100% Job Placement Guarantee
              </li>
              <li>
                <div className="apply-feature-check"></div>
                Industry-Recognized Certifications
              </li>
              <li>
                <div className="apply-feature-check"></div>
                Live Projects with Real Companies
              </li>
            </ul>

            <button className="apply-book-btn" onClick={() => { if (setCurrentView) setCurrentView('consultation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Book Free Career Counseling <span className="arrow">➔</span>
            </button>

            <div className="apply-trust-stats">
              <span className="star">⭐</span>
              <span className="rating">4.9/5 Rating</span>
              <span className="dot">•</span>
              <span>500+ Reviews</span>
              <span className="dot">•</span>
              <span>No Hidden Fees</span>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="apply-hero-right">
            <div className="apply-form-card">
              <h2>Get Free Career Assessment</h2>
              <form className="apply-form">
                <div className="form-row">
                  <input type="text" placeholder="Enter Name *" required />
                  <input type="email" placeholder="Enter Email Address *" required />
                </div>

                <div className="form-row phone-row">
                  <select className="country-code" defaultValue="+91">
                    <option value="+91">+91</option>
                  </select>
                  <input type="tel" placeholder="Enter Mobile Number *" required />
                </div>

                <div className="form-row">
                  <select required className="program-select" defaultValue="">
                    <option value="" disabled>Select Program Interested in *</option>
                    <option value="analytics">Business Analytics</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="cloud">Cloud Architecture</option>
                  </select>
                </div>

                <div className="form-row">
                  <select required className="experience-select" defaultValue="">
                    <option value="" disabled>Work Experience *</option>
                    <option value="0-2">0-2 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>

                <div className="form-row captcha-row">
                  <div className="captcha-display">
                    f19953 <span className="captcha-refresh">↻</span>
                  </div>
                  <input type="text" placeholder="Enter Captcha" required />
                </div>

                <label className="agree-checkbox">
                  <input type="checkbox" required />
                  <span>I agree to receive program information from REVA University</span>
                </label>

                <button type="submit" className="submit-btn">Send</button>

                <div className="form-footer">
                  <span className="chat-icon">💬</span> Get personalized career roadmap in 24 hours
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="apply-trusted-section">
        <p>Trusted by professionals from leading companies</p>
        <div className="trusted-logos">
          <span>Amazon</span>
          <span>Microsoft</span>
          <span>IBM</span>
          <span>Accenture</span>
          <span>TCS</span>
          <span>Infosys</span>
          <span>Wipro</span>
          <span>Cognizant</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="apply-stats-section">
        <h2>Why 1000+ Professionals Choose RACE</h2>
        <div className="stats-cards-container">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Senior Leaders as<br />Mentors</p>
          </div>
          <div className="stat-card divider">
            <h3>1000+</h3>
            <p>Mid and Senior<br />Executives Trained</p>
          </div>
          <div className="stat-card divider">
            <h3>15+</h3>
            <p>Industry Domains</p>
          </div>
          <div className="stat-card divider">
            <h3>4.9</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="apply-transformation-section">
        <h2>Choose Your Career Transformation</h2>
        <p className="transformation-subtitle">Limited seats available — Secure your spot today!</p>

        <h3 className="programs-category-title">Long-Term Programs</h3>

        <div className="programs-cards-grid">
          {/* Card 1 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-analytics">
              <div className="rank-badge">
                <span className="rank-number">1</span>
                <span className="rank-text">RANKED<br />IN INDIA<br />BY ANALYTICS INDIA MAGAZINE</span>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Analytics</span>
                <span className="program-duration">⏱ 12-24 months</span>
              </div>
              <h4>PG Diploma/M.Sc. in<br />Business Analytics</h4>
              <p className="association-text">In Association with<br />Microsoft Azure</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-ai-1">
              <div className="rank-badge">
                <span className="rank-number">3</span>
                <span className="rank-text">RANKED<br />IN INDIA<br />BY TECHBIS</span>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Artificial Intelligence</span>
                <span className="program-duration">⏱ 24 months</span>
              </div>
              <h4>M.Tech. in<br />Artificial Intelligence</h4>
              <p className="association-text">In Association with<br />Microsoft Azure</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-ai-2">
              <div className="rank-badge">
                <span className="rank-number">3</span>
                <span className="rank-text">RANKED<br />IN INDIA<br />BY TECHBIS</span>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Artificial Intelligence</span>
                <span className="program-duration">⏱ 12-24 months</span>
              </div>
              <h4>PG Diploma/M.Sc. in<br />Artificial Intelligence</h4>
              <p className="association-text">In Association with<br />Microsoft Azure</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cyber-1">
              <div className="rank-badge">
                <span className="rank-number">5</span>
                <span className="rank-text">RANKED<br />IN INDIA<br />BY ANALYTICS INDIA MAGAZINE</span>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Cybersecurity</span>
                <span className="program-duration">⏱ 24 months</span>
              </div>
              <h4>M.Tech. in<br />Cybersecurity</h4>
              <p className="association-text">In Association with EC-Council, Microsoft<br />Azure Cloud, and Terralogic Inc.</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cyber-2">
              <div className="rank-badge">
                <span className="rank-number">5</span>
                <span className="rank-text">RANKED<br />IN INDIA<br />BY ANALYTICS INDIA MAGAZINE</span>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Cybersecurity</span>
                <span className="program-duration">⏱ 12-24 months</span>
              </div>
              <h4>PG Diploma/M.Sc. in<br />Cybersecurity</h4>
              <p className="association-text">In Association with EC-Council, Microsoft<br />Azure Cloud, and Terralogic Inc.</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cloud">
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Cloud</span>
                <span className="program-duration">⏱ 12-24 months</span>
              </div>
              <h4>PG Diploma/M.Sc. in<br />Cloud Architecture and Security</h4>
              <p className="association-text">In Association with<br />AWS Academy and Microsoft Azure</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>
        </div>

        <h3 className="programs-category-title" style={{ marginTop: '60px' }}>Certified Programs</h3>

        <div className="programs-cards-grid">
          {/* Cert Card 1 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cert-agentic">
              <div className="cert-badge">
                <span className="cert-text">Certified<br />Agentic AI<br />Engineer</span>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Artificial Intelligence</span>
                <span className="program-duration">⏱ 60 hours</span>
              </div>
              <h4>Certified<br />Agentic AI Engineer</h4>
              <p className="association-text">Build, Automate & Deploy<br />AWS Academy and Microsoft Azure</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Cert Card 2 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cert-devops">
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Cloud</span>
                <span className="program-duration">⏱ 60 hours</span>
              </div>
              <h4>Certified<br />DevOps Specialist</h4>
              <p className="association-text">with Terraform, Kubernetes, Jenkins,<br />DevSecOps, and AIOps</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Cert Card 3 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cert-cyber1">
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Cybersecurity</span>
                <span className="program-duration">⏱ 3 months</span>
              </div>
              <h4>Advanced Diploma in<br />Cybersecurity & Privacy Management</h4>
              <p className="association-text">A comprehensive 3-month program combining CISSP certification training, ISO27001 cybersecurity, and data privacy management.</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Cert Card 4 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cert-ceh">
              <div className="ec-council-overlay">
                <strong>EC-Council</strong>
                <span>Building A Culture Of Security</span>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Cybersecurity</span>
                <span className="program-duration">⏱ 30 hours</span>
              </div>
              <h4>Certified<br />Ethical Hacker</h4>
              <p className="association-text">Become a Certified Ethical Hacker with the world's #1 ethical hacking certification<br /><br />Recognised by EC-Council</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Cert Card 5 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cert-cpent">
              <div className="cpent-overlay">
                <strong>CPENT</strong>
              </div>
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Cybersecurity</span>
                <span className="program-duration">⏱ 40 hours</span>
              </div>
              <h4>Certified<br />Penetration Testing Professional</h4>
              <p className="association-text">Establish Yourself As A World Class Penetration Testing Professional<br /><br />Recognised by EC-Council</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>

          {/* Cert Card 6 */}
          <div className="program-transform-card">
            <div className="card-image-container bg-cert-ai2">
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="program-tag">Artificial Intelligence</span>
                <span className="program-duration">⏱ 110 hours</span>
              </div>
              <h4>Certified<br />AI Engineer</h4>
              <p className="association-text">Master the future of technology with our comprehensive AI engineering program</p>
              <button className="card-apply-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Success Stories Section */}
      <section className="apply-success-stories-section">
        <h2>Real Success Stories</h2>
        <p className="success-subtitle">See how our alumni transformed their careers and salaries</p>

        <div
          className="success-cards-container"
          ref={storiesScrollRef}
          onScroll={handleStoryScroll}
        >
          {/* Card 1 */}
          <div className="success-card">
            <img src="/analytics/Abinash_Padhi.png" alt="Somesh Sahu" className="success-avatar" />
            <h4 className="success-name">Somesh Sahu</h4>
            <p className="success-degree">MBA in Business Analytics, 2021</p>
            <p className="success-role-before">Project Manager</p>
            <p className="success-transition">to</p>
            <p className="success-role-after">Associate Principal Product Engineering<br />LTIMindtree</p>
          </div>
          {/* Card 2 */}
          <div className="success-card">
            <img src="/analytics/Akshay_Kulkarni.png" alt="Anshuman Dash" className="success-avatar" />
            <h4 className="success-name">Anshuman Dash</h4>
            <p className="success-degree">MBA in Business Analytics, 2020</p>
            <p className="success-role-before">Promoted</p>
            <p className="success-transition">as</p>
            <p className="success-role-after">Senior Director Delivery Head, IIoT &<br />AI/ML Microland</p>
          </div>
          {/* Card 3 */}
          <div className="success-card">
            <img src="/analytics/Ravi_Shukla.png" alt="Ashok Shetty" className="success-avatar" />
            <h4 className="success-name">Ashok Shetty</h4>
            <p className="success-degree">MBA in Business Analytics, 2020</p>
            <p className="success-role-before">Promoted</p>
            <p className="success-transition">as</p>
            <p className="success-role-after">Vice President Data Scientist<br />Swiss Re</p>
          </div>
          {/* Card 4 */}
          <div className="success-card">
            <img src="/analytics/Dr._Angshuman_Ghosh.png" alt="Dr. Angshuman Ghosh" className="success-avatar" />
            <h4 className="success-name">Dr. Angshuman Ghosh</h4>
            <p className="success-degree">MBA in Business Analytics, 2019</p>
            <p className="success-role-before">Data Science Lead</p>
            <p className="success-transition">to</p>
            <p className="success-role-after">Chief Data Scientist<br />Grab</p>
          </div>
          {/* Card 5 */}
          <div className="success-card">
            <img src="/analytics/Dr._J_B_Simha.png" alt="Dr. J B Simha" className="success-avatar" />
            <h4 className="success-name">Dr. J B Simha</h4>
            <p className="success-degree">M.Tech in AI, 2021</p>
            <p className="success-role-before">Senior Analytics Manager</p>
            <p className="success-transition">as</p>
            <p className="success-role-after">Head of AI & Analytics<br />Tech Mahindra</p>
          </div>
          {/* Card 6 */}
          <div className="success-card">
            <img src="/analytics/Dr._Sai_Hareesh.png" alt="Dr. Sai Hareesh" className="success-avatar" />
            <h4 className="success-name">Dr. Sai Hareesh</h4>
            <p className="success-degree">M.Sc in Data Science, 2022</p>
            <p className="success-role-before">BI Developer</p>
            <p className="success-transition">to</p>
            <p className="success-role-after">Lead Machine Learning Engineer<br />Walmart Labs</p>
          </div>
        </div>

        <div className="success-pagination" style={{ marginTop: '0px' }}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              className={`success-dot ${activeStory === index ? 'active' : ''}`}
              onClick={() => scrollToStory(index)}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Don't Miss Out Section */}
      <section className="dont-miss-out-section">
        <div className="dont-miss-content">
          <h2 className="dont-miss-title">
            <span className="alarm-icon">⏰</span> Don't Miss Out!
          </h2>
          <p className="dont-miss-batch">Next batch starts on August 2026</p>
          <p className="dont-miss-discount">Early bird discount – Save ₹30,000</p>
          <div className="dont-miss-buttons">
            <button className="btn-secure">Secure Your Seat Now</button>
            <button className="btn-talk">Talk to Counselor</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ApplyNow;
