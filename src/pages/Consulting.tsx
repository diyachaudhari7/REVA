import React from 'react';
import './Consulting.css';

interface ConsultingProps {
  setCurrentView: (view: string) => void;
}

const Consulting: React.FC<ConsultingProps> = ({ setCurrentView }) => {
  return (
    <div className="consulting-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>Home</span> &gt; <span>Consulting</span>
      </div>

      {/* Hero Section */}
      <section className="consulting-hero">
        <div className="hero-left">
          <div className="pill-badge">Professional Consulting Services</div>
          <h2 className="hero-title" style={{ fontSize: '50px', color: '#4B4B4B', marginBottom: '5px' }}>Transform Your Business with <span className="highlight-orange">Expert Consulting</span></h2>
          <p className="hero-desc" style={{ fontSize: '18px', marginBottom: '10px', fontWeight: '400' }}>
            Intelligent solutions powered by exponential technologies tailor-made to bring monetary benefits to organizations. RACE consulting solutions, either turnkey or plug and play models provide end-to-end support in training and implementation.
          </p>
          <div className="hero-actions">
            <button className="btn-schedule">
              <span className="btn-icon">➜</span> Schedule Consultation
            </button>
            <button className="btn-learn">
              <span className="btn-icon">📞</span> Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Expert Consultants</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-frame">
            <img src="/consulting_handshake.png" alt="Consulting Handshake" />
          </div>
        </div>
      </section>

      {/* Our Consulting Services Section */}
      <section className="consulting-services-section">
        <div className="section-header center">
          <h2>Our Consulting Services</h2>
          <p className="subtitle" style={{ marginTop: '4px', marginBottom: '6px', fontSize: '19px', maxWidth: '1100px' }}>Comprehensive solutions tailored to your organization's unique challenges and opportunities</p>
        </div>

        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <h3>Employee Life Cycle Analytics (ELCA™)</h3>
            <p className="service-desc">Unlock the power of data within your organization's human capital management systems.</p>
            <p className="service-text">Talent pools are becoming smaller than ever. There is an increasing pressure to attract and maintain high performing talent. With ELCA™, HR teams can provide complete visibility into critical metrics ranging from recruitment, promotion to retention for enhancing the employee experience.</p>
            <div className="card-footer">
              <ul className="check-list">
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Recruitment Analytics</li>
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Promotion Tracking</li>
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Retention Insights</li>
              </ul>
              <div className="card-action">
                <button className="btn-read-more">Read More</button>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <h3>Customer Life Cycle Analytics (CLCA™) for SMEs</h3>
            <p className="service-desc">Packaged AI/DS solutions to understand and serve customers better</p>
            <p className="service-text">Customer is the major reason for business profit. Knowledge of what customer wants and how to satisfy them forms the basis of profitable business lines. CLCA™ makes advanced analytical models accessible to SMEs through Customer Intelligence solutions.</p>
            <div className="card-footer">
              <ul className="check-list">
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Customer Intelligence</li>
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Behavioral Analytics</li>
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Profit Optimization</li>
              </ul>
              <div className="card-action">
                <button className="btn-read-more">Read More</button>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <h3>Supply Chain Analytics (SCAN™)</h3>
            <p className="service-desc">Control points at the fingertips of decision-makers using ToC and Machine Learning</p>
            <p className="service-text">Flow and speed are the essences of the supply chain. SCAN™ engine brings the power of Theory of Constraints (ToC) and Machine Learning to identify bottlenecks and optimize supply chain performance.</p>
            <div className="card-footer">
              <ul className="check-list">
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Bottleneck Identification</li>
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Inventory Optimization</li>
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Performance Analytics</li>
              </ul>
              <div className="card-action">
                <button className="btn-read-more">Read More</button>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <h3>Security Analytics (DeepSec™)</h3>
            <p className="service-desc">AI-driven models for anomaly detection and cybersecurity threat prediction</p>
            <p className="service-text">RACE Labs have developed AI-driven models for anomaly detection, predicting cyberattacks and user behavior-based models. Machine Learning-based systems are more robust and adaptive than rule-based solutions.</p>
            <div className="card-footer">
              <ul className="check-list">
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Threat Detection</li>
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Anomaly Identification</li>
                <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Behavior Analysis</li>
              </ul>
              <div className="card-action">
                <button className="btn-read-more">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Projects - Call for Proposals */}
      <section className="industry-projects-section">
        <div className="section-header center">
          <h2>Industry Projects – Call for Proposals</h2>
          <p className="subtitle" style={{ maxWidth: '850px', margin: '0 auto', marginBottom: '20px', fontSize: '17.5px' }}>Partner with RACE to solve complex business and social challenges through our Industry project program. Our experienced professionals work on Master's level projects with real-world impact.</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-col">
            <div className="benefit-icon">💡</div>
            <h3>What We're Looking For</h3>
            <p>Advanced technical projects at Master's level addressing industry & social problems with high business relevance and value.</p>
            <ul className="check-list">
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Live industry-grade problems</li>
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Master's level complexity</li>
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Social impact potential</li>
            </ul>
          </div>
          <div className="benefit-col">
            <div className="benefit-icon">👨‍🏫</div>
            <h3>Our Participants</h3>
            <p>Industry professionals with 3-20+ years of experience from Cybersecurity, AI, and Analytics programs.</p>
            <ul className="check-list">
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Diverse skill sets</li>
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Real-world experience</li>
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Academic rigor</li>
            </ul>
          </div>
          <div className="benefit-col">
            <div className="benefit-icon">🏅</div>
            <h3>Benefits for You</h3>
            <p>Get viable solutions, access to talent, research publications, and potential funding opportunities.</p>
            <ul className="check-list">
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Viable solutions</li>
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Hiring opportunities</li>
              <li><span className="check-icon"><svg width="16" height="16" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#65a30d" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white" /></svg></span> Research publications</li>
            </ul>
          </div>
        </div>

        {/* Project Sponsorship Package */}
        <div className="sponsorship-package">
          <div className="sponsor-header">
            <h3>Project Sponsorship Package</h3>
            <h2>₹1,00,000 <span>per month</span></h2>
            <p>Comprehensive support package with expert resources and infrastructure</p>
          </div>
          <div className="sponsor-grid">
            <div className="sponsor-item">
              <div className="sponsor-item-header">
                <span className="sponsor-icon">⏱️</span>
                <h4>Resource Allocation</h4>
              </div>
              <p>Maximum 80 hours per month from experienced participants</p>
            </div>
            <div className="sponsor-item">
              <div className="sponsor-item-header">
                <span className="sponsor-icon">🎓</span>
                <h4>Faculty Support</h4>
              </div>
              <p>PhD faculty supervision (15 hours) and final deliverables</p>
            </div>
            <div className="sponsor-item">
              <div className="sponsor-item-header">
                <span className="sponsor-icon">💼</span>
                <h4>Industry Mentorship</h4>
              </div>
              <p>Senior industry mentor monitoring (5 hours/month)</p>
            </div>
            <div className="sponsor-item">
              <div className="sponsor-item-header">
                <span className="sponsor-icon">🏛️</span>
                <h4>Infrastructure Access</h4>
              </div>
              <p>High-performance computer labs during sponsorship period</p>
            </div>
            <div className="sponsor-item">
              <div className="sponsor-item-header">
                <span className="sponsor-icon">📄</span>
                <h4>Research Ecosystem</h4>
              </div>
              <p>E-library, IEEE Xplore, plagiarism software access</p>
            </div>
            <div className="sponsor-item">
              <div className="sponsor-item-header">
                <span className="sponsor-icon">⌛</span>
                <h4>Project Duration</h4>
              </div>
              <p>2-6 months duration, 150+ hours per phase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Projects at RACE */}
      <section className="sample-projects-section">
        <div className="section-header center">
          <h2 style={{ marginTop: "0px", marginBottom: "0px" }} >Sample Projects at RACE</h2>
        </div>
        <div className="sample-grid">
          <div className="sample-card">
            <h3>Analytics/Data Science</h3>
            <ul>
              <li>Agricultural Commodity Price Forecasting</li>
              <li>Employee Life Cycle Analytics</li>
              <li>Financial Analytics for Stock Market</li>
              <li>Sentiment Analysis & NPS Improvement</li>
              <li>Customer Base Analysis & Segmentation</li>
              <li>Voice of Customers Studies</li>
            </ul>
          </div>
          <div className="sample-card">
            <h3>Artificial Intelligence</h3>
            <ul>
              <li>Image Classification using Deep Learning</li>
              <li>Resume Classification using NLP</li>
              <li>Social Distancing Detection</li>
              <li>Speech Analytics for Languages</li>
              <li>Voice Assistants/Chat Bots</li>
              <li>Autonomous Vehicle Systems</li>
            </ul>
          </div>
          <div className="sample-card">
            <h3>Cybersecurity</h3>
            <ul>
              <li>Open Tool Cyber Range System</li>
              <li>Attack Framework for Smart Cities</li>
              <li>Threat Modelling for Cloud Solutions</li>
              <li>Ransomware Auto-Detection in IoT</li>
              <li>Industrial Environment Security</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="industry-expertise-section">
        <div className="section-header center">
          <h2>Industry Expertise</h2>
          <p className="subtitle">Deep domain knowledge and proven success across multiple industries and sectors</p>
        </div>
        <div className="expertise-grid">
          <div className="expertise-item">
            <span className="exp-icon">💻</span>
            <span>Technology & IT</span>
          </div>
          <div className="expertise-item">
            <span className="exp-icon">🏥</span>
            <span>Healthcare</span>
          </div>
          <div className="expertise-item">
            <span className="exp-icon">🏭</span>
            <span>Manufacturing</span>
          </div>
          <div className="expertise-item">
            <span className="exp-icon">🎓</span>
            <span>Education</span>
          </div>
          <div className="expertise-item">
            <span className="exp-icon">💰</span>
            <span>Financial Services</span>
          </div>
          <div className="expertise-item">
            <span className="exp-icon">🛒</span>
            <span>Retail & E-commerce</span>
          </div>
          <div className="expertise-item">
            <span className="exp-icon">🏛️</span>
            <span>Government</span>
          </div>
          <div className="expertise-item">
            <span className="exp-icon">🤝</span>
            <span>Non-Profit</span>
          </div>
        </div>
      </section>

      {/* CTA / Strategy Call */}
      <section className="strategy-cta-section">
        <div className="cta-header">
          <h2>Ready to 10X Your Business?</h2>
          <p>Book your free strategy call now and discover exactly how RACE Analytics can transform your business in 30 days</p>
        </div>
        <div className="cta-content">
          <div className="cta-left">
            <div className="cta-benefits">
              <h4>🎯 What You'll Get in Your Free Call:</h4>
              <ul className="check-list dark-bg">
                <li><span className="check-icon">✅</span> Custom ROI analysis for your business</li>
                <li><span className="check-icon">✅</span> Personalized analytics strategy roadmap</li>
                <li><span className="check-icon">✅</span> Competitive analysis report</li>
                <li><span className="check-icon">✅</span> Implementation timeline & milestones</li>
                <li><span className="check-icon">✅</span> Risk-free trial proposal</li>
              </ul>
            </div>

            <div className="contact-info-card">
              <h4>☎️ Contact Information</h4>
              <div className="contact-details">
                <p><strong>Dr. Shinu Abhi</strong></p>
                <p>+91 99808 69800</p>
                <p className="email-link">shinuabhi@reva.edu.in</p>

                <p className="address">
                  <strong>Address:</strong><br />
                  REVA Academy for Corporate Excellence<br />
                  REVA University<br />
                  Rukmini Educational Charitable Trust<br />
                  Kattigenahalli, Yelahanka, Bangalore, Karnataka, India<br />
                  560 064
                </p>
              </div>
            </div>
          </div>

          <div className="cta-right">
            <div className="form-container">
              <h3>Book Your Free Strategy Call</h3>
              <form className="strategy-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter Name *" required />
                <input type="email" placeholder="Enter Email Address *" required />
                <div className="phone-input">
                  <span className="country-code">+91 -</span>
                  <input type="tel" placeholder="Enter Mobile Number *" required />
                </div>
                <select required defaultValue="">
                  <option value="" disabled>Select Program Interested in *</option>
                  <option value="elca">Employee Life Cycle Analytics</option>
                  <option value="clca">Customer Life Cycle Analytics</option>
                  <option value="scan">Supply Chain Analytics</option>
                  <option value="deepsec">Security Analytics</option>
                </select>
                <select required defaultValue="">
                  <option value="" disabled>Work Experience *</option>
                  <option value="0-3">0-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5-10">5-10 Years</option>
                  <option value="10+">10+ Years</option>
                </select>
                <div className="captcha-row">
                  <div className="captcha-box">183e52 ⟳</div>
                  <input type="text" placeholder="Enter Captcha" required />
                </div>
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>I agree to receive program information from REVA University</span>
                </label>
                <button type="submit" className="btn-submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
