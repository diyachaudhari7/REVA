import React from 'react';
import './ContactUs.css';

interface ContactUsProps {
  setCurrentView?: (view: string) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ /* setCurrentView */ }) => {
  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-container contact-hero">
          <div className="contact-hero-left">
            <div className="contact-badge">
              <span>◆</span> Excellence in Corporate Training
            </div>
            <h1 className="contact-hero-title">REVA Academy for<br/>Corporate Excellence</h1>
            <p className="contact-hero-desc">
              Empowering professionals through world-class training and development programs. Connect with our expert team for programs, research opportunities, and corporate training solutions.
            </p>
            <div className="contact-hero-buttons">
              <button className="contact-btn-primary">
                <span className="btn-arrow">➔</span> Explore Programs
              </button>
              <button className="contact-btn-dark">
                <span className="btn-phone">📞</span> Contact Us
              </button>
            </div>
            <div className="contact-checks">
              <div className="contact-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Industry Expert Mentors
              </div>
              <div className="contact-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Globally Recognized Certifications
              </div>
            </div>
          </div>
          <div className="contact-hero-right">
            <div className="contact-image-tilt-card">
              <img src="/contact_us_hero.png" alt="Corporate Professionals" />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="contact-connect-section">
        <div className="contact-container">
          <h2 className="contact-connect-title">Let's Connect</h2>
          <p className="contact-connect-desc">Whether you're looking to upskill, partner with us, or explore new opportunities—our team is just a call or email away.</p>
          
          <div className="contact-cards-wrapper">
            
            {/* Admissions Card (Wide) */}
            <div className="contact-card-wide">
              <div className="icon">🎓</div>
              <h3>Admissions & Program Guidance</h3>
              <div className="contact-wide-contacts">
                <div className="contact-person">
                  <div className="name">Maha Samruthaa G</div>
                  <div className="phone">📞 +91 73497 97256</div>
                  <div className="email">✉️ mahasamruthaa.g@reva.edu.in</div>
                </div>
                <div className="contact-person">
                  <div className="name">Chaithra V</div>
                  <div className="phone">📞 +91 81978 58043</div>
                  <div className="email">✉️ chaithra.v@reva.edu.in</div>
                </div>
                <div className="contact-general-phone">
                  📞 +91 89040 58866
                </div>
              </div>
            </div>

            {/* Grid Cards */}
            <div className="contact-cards-grid">
              
              <div className="contact-card">
                <div className="contact-sub-section">
                  <div className="icon">🔍</div>
                  <h4>Partner With Us for Research & Consulting</h4>
                  <p>Looking to drive innovation through collaborative research or expert consulting?</p>
                  <div className="person-details">
                    <strong>Dr. Shinu Abhi</strong>
                    <span>Director - Corporate Training</span>
                    <span>📞 +91 99729 16030</span>
                    <span>✉️ shinuabhi@reva.edu.in</span>
                  </div>
                </div>

                <hr className="contact-divider" />

                <div className="contact-sub-section">
                  <div className="icon">✍️</div>
                  <h4>Publish With Us</h4>
                  <p>Have cutting-edge ideas, insights, or industry experiences to share? We welcome article, blog, and whitepaper submissions.</p>
                  <div className="person-details">
                    <strong>Dr. Rashmi Agarwal</strong>
                    <span>Associate Professor</span>
                    <span>📞 +91 89040 58866</span>
                    <span>✉️ rashmi.agarwal@reva.edu.in</span>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-sub-section">
                  <div className="icon">🎤</div>
                  <h4>Become a Certified Trainer</h4>
                  <p>Join our growing network of industry experts and train the next generation of tech leaders.</p>
                  <div className="person-details">
                    <strong>Dr. Shinu Abhi</strong>
                    <span>Director - Corporate Training</span>
                    <span>📞 +91 99729 16030</span>
                    <span>✉️ shinuabhi@reva.edu.in</span>
                  </div>
                </div>

                <hr className="contact-divider" />

                <div className="contact-sub-section">
                  <div className="icon">📬</div>
                  <h4>Have a General Query?</h4>
                  <p>We're here to help. Drop us a line at</p>
                  <div className="person-details">
                    <strong style={{fontSize: '20px', marginTop: '10px'}}>race@reva.edu.in</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="contact-social-section">
            <h3>Like and Follow us on Social Media</h3>
            <div className="contact-social-icons">
              <div className="contact-social-icon">f</div>
              <div className="contact-social-icon">in</div>
              <div className="contact-social-icon">IG</div>
              <div className="contact-social-icon">X</div>
              <div className="contact-social-icon">YT</div>
            </div>
          </div>

        </div>
      </section>

      {/* Form and Map Section */}
      <section className="contact-bottom-section">
        <div className="contact-container contact-form-row">
          
          <div className="contact-form-col">
            <h2>Drop us a line</h2>
            <p>We would like to hear from you. If you have any queries, please feel free to send a message</p>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-row-inner">
                <div className="contact-form-group">
                  <label>First Name*</label>
                  <input type="text" placeholder="Enter your first name" />
                </div>
                <div className="contact-form-group">
                  <label>Last Name*</label>
                  <input type="text" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="contact-form-group">
                <label>Email Address*</label>
                <input type="email" placeholder="Enter your email Address" />
              </div>
              <div className="contact-form-group">
                <label>Phone Number*</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="contact-form-group">
                <label>Subject*</label>
                <input type="text" placeholder="Enter the subject" />
              </div>
              <div className="contact-form-group">
                <label>Message*</label>
                <textarea placeholder="Enter your message here..."></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">Submit</button>
            </form>
          </div>

          <div className="contact-map-col">
            <h2>Visit Our Campus</h2>
            
            <div className="contact-campus-card">
              <h3>📌 Campus Address</h3>
              <p>
                <strong>REVA Academy for Corporate Excellence – RACE</strong><br/>
                <strong>REVA University</strong><br/>
                Rukmini Educational Charitable Trust<br/>
                Kattigenahalli, Yelahanka<br/>
                Bangalore, Karnataka, India<br/>
                <strong>560 064</strong>
              </p>
              <div className="contact-campus-phone">
                📞 +91 89040 58866
              </div>
            </div>

            <div className="contact-map-card">
              <h4>Location on map</h4>
              <div className="contact-map-frame">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.136894578135!2d77.63229871526438!3d13.111815890763953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19a31a004eb7%3A0xcafbc481cc572887!2sREVA%20University!5e0!3m2!1sen!2sin!4v1655225010928!5m2!1sen!2sin" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="REVA University Location"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-cta-banner">
        <div className="contact-container">
          <h2>Ready to Advance Your Career?</h2>
          <p>
            Join thousands of professionals who have transformed their careers with<br/>
            REVA Academy for Corporate Excellence.
          </p>
          <div className="contact-cta-buttons">
            <button className="contact-cta-btn-primary">Explore Programs &gt;</button>
            <button className="contact-cta-btn-secondary">Contact Our Team</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
