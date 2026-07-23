import React from 'react';
import './Meetup.css';

interface MeetupProps {
  setCurrentView?: (view: string) => void;
}

const Meetup: React.FC<MeetupProps> = (/* props */) => {
  return (
    <div className="meetup-page">
      {/* Hero Section */}
      <section className="meetup-container">
        <div className="meetup-hero">
          <div className="meetup-hero-left">
            <div className="meetup-hero-title">
              <img src="/bengluru.svg" alt="Namma Bengaluru Meetup" className="meetup-hero-logo" />
            </div>
            <p className="meetup-hero-desc">
              Where Bengaluru's brightest technologists, AI architects, and security leaders come together — to learn, debate, and shape what's next.
            </p>
            <div className="meetup-hero-buttons">
              <button className="meetup-btn-primary">Explore Meetups ↓</button>
              <button className="meetup-btn-secondary">Get Notified</button>
            </div>
          </div>
          <div className="meetup-hero-right">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" alt="Meetup" className="meetup-collage-img img-1" />
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=200&q=80" alt="Meetup" className="meetup-collage-img img-2" />
            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=200&q=80" alt="Meetup" className="meetup-collage-img img-3" />
            <img src="https://images.unsplash.com/photo-1475721028070-2051152cbceb?w=400&q=80" alt="Meetup" className="meetup-collage-img img-4" />
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=200&q=80" alt="Meetup" className="meetup-collage-img img-5" />
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=200&q=80" alt="Meetup" className="meetup-collage-img img-6" />
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&q=80" alt="Meetup" className="meetup-collage-img img-7" />
            <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80" alt="Meetup" className="meetup-collage-img img-8" />
            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=200&q=80" alt="Meetup" className="meetup-collage-img img-9" />
            <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=200&q=80" alt="Meetup" className="meetup-collage-img img-10" />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="meetup-container meetup-who-we-are">
        <div className="meetup-who-row">
          <div className="meetup-who-left">
            <span className="meetup-who-badge">WHO WE ARE</span>
            <h2 className="meetup-who-heading">Built at the <span>intersection of</span> capability and execution.</h2>
            <p className="meetup-who-desc">
              REVA Academy for <span className="hl-blue">Corporate Excellence (RACE)</span> is the <span className="hl-blue">industry</span> and consulting arm of <span className="hl-blue">REVA University,</span> designing <span className="hl-blue">transformation journeys,</span> building <span className="hl-blue">AI platforms,</span> and deploying <span className="hl-blue">security architectures</span> for enterprises across India.
            </p>
            <p className="meetup-who-desc">
              The <span className="hl-blue">Namma Bengaluru Meetup series</span> is our commitment to the <span className="hl-blue">community,</span> bringing <span className="hl-blue">leaders, architects, researchers, and decision-makers</span> together to <span className="hl-blue">build the future,</span> securely.
            </p>
          </div>
          <div className="meetup-who-right">
            <div className="meetup-feature-card bg-orange">
              <div className="meetup-fc-number">01</div>
              <div className="meetup-fc-icon">🤖</div>
              <h3 className="meetup-fc-title">Agentic AI & GenAI</h3>
              <p className="meetup-fc-desc">Enterprise adoption, copilots, autonomous decisioning</p>
            </div>
            <div className="meetup-feature-card bg-green">
              <div className="meetup-fc-number">02</div>
              <div className="meetup-fc-icon">🔒</div>
              <h3 className="meetup-fc-title">Cybersecurity</h3>
              <p className="meetup-fc-desc">SOC, threat intelligence, AI-driven defence</p>
            </div>
            <div className="meetup-feature-card bg-blue">
              <div className="meetup-fc-number">03</div>
              <div className="meetup-fc-icon">☁️</div>
              <h3 className="meetup-fc-title">Cloud & DevOps</h3>
              <p className="meetup-fc-desc">Architecture, migration, AI Ops monitoring</p>
            </div>
            <div className="meetup-feature-card bg-purple">
              <div className="meetup-fc-number">04</div>
              <div className="meetup-fc-icon">📋</div>
              <h3 className="meetup-fc-title">Governance</h3>
              <p className="meetup-fc-desc">DPDPA, NIST, GDPR, CRA compliance frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meetup Events */}
      <section className="meetup-container meetup-events-section">
        <div className="meetup-events-header">
          <h2>Every edition, a new frontier.</h2>
          <p>Each meetup brings one focused theme, curated speakers, and a room full of people building what's next.</p>
        </div>

        {/* Meetup 01 */}
        <div className="meetup-event-card theme-orange">
          <div className="meetup-event-left">
            <span className="meetup-event-num">MEETUP #01</span>
            <div className="meetup-event-date">Saturday<br />7 March 2026</div>
            <div className="meetup-event-time">9:30 AM - 1:30 PM IST</div>
            <div className="meetup-event-attendees">142 attendees</div>
            <div className="meetup-event-hosted">Hosted by Terralogic Inc.<br />Bommanahalli, Bengaluru</div>
            <div className="meetup-event-big-num">01</div>
          </div>
          <div className="meetup-event-right">
            <div className="meetup-theme-label">THEME</div>
            <div className="meetup-theme-title">Cybersecurity in the Age of Agentic AI</div>
            <div className="meetup-tags">
              <span className="meetup-tag tag-orange">AI Security</span>
              <span className="meetup-tag tag-pink">Dark Web</span>
              <span className="meetup-tag tag-blue">Enterprise Threats</span>
              <span className="meetup-tag tag-green">Panel Discussion</span>
            </div>
            <div className="meetup-speakers-list">
              <div className="meetup-speaker-item">
                <div className="meetup-speaker-number num-orange">01</div>
                <div className="meetup-speaker-details">
                  <h5>Lokesh Balu</h5>
                  <div className="role">Technical Staff – Security Architect, Dell Technologies</div>
                  <div className="topic">"Beyond Guardrails: Engineering Resilience via the A2A Lifecycle"</div>
                </div>
              </div>
              <div className="meetup-speaker-item">
                <div className="meetup-speaker-number num-pink">02</div>
                <div className="meetup-speaker-details">
                  <h5>Praveen Kumar Motupalli</h5>
                  <div className="role">Cybersecurity & Privacy Leader, Airbus</div>
                  <div className="topic">"AI's Role on the Dark Web"</div>
                </div>
              </div>
              <div className="meetup-speaker-item">
                <div className="meetup-speaker-number num-green">03</div>
                <div className="meetup-speaker-details">
                  <h5>Panel – Emerging Threats & Real-World Lessons</h5>
                  <div className="role">Sandeep (Terralogic) · Sivakumar (Lenovo) · Satish (Zscaler)<br />Moderated by Dr. Shinu Abhi, RACE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meetup 02 */}
        <div className="meetup-event-card theme-green">
          <div className="meetup-event-left">
            <span className="meetup-event-num">MEETUP #02</span>
            <div className="meetup-event-date">Saturday<br />23 May 2026</div>
            <div className="meetup-event-time">9:30 AM - 1:30 PM IST</div>
            <div className="meetup-event-attendees">120 attendees</div>
            <div className="meetup-event-hosted">Hosted by REVA University<br />Yelahanka, Bengaluru</div>
            <div className="meetup-event-big-num">02</div>
          </div>
          <div className="meetup-event-right">
            <div className="meetup-theme-label">THEME</div>
            <div className="meetup-theme-title">Mastering Agentic AI — From Intelligent Agents to Secure Deployment</div>
            <div className="meetup-tags">
              <span className="meetup-tag tag-green">Agentic AI</span>
              <span className="meetup-tag tag-blue">AI SDLC</span>
              <span className="meetup-tag tag-purple">Enterprise Adoption</span>
              <span className="meetup-tag tag-orange">Fireside Chat</span>
            </div>
            <div className="meetup-speakers-list">
              <div className="meetup-speaker-item">
                <div className="meetup-speaker-number num-green">01</div>
                <div className="meetup-speaker-details">
                  <h5>Pradeepta Mishra <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#ef4444" style={{ marginLeft: '2px', verticalAlign: 'text-bottom' }}><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></h5>
                  <div className="role">VP of AI, Beghou Consulting</div>
                  <div className="topic">"From Hype to Production: Agentic AI in Enterprise Decision-Making"</div>
                </div>
              </div>
              <div className="meetup-speaker-item">
                <div className="meetup-speaker-number num-blue">02</div>
                <div className="meetup-speaker-details">
                  <h5>Shwetha Gopalakrishna <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#ef4444" style={{ marginLeft: '2px', verticalAlign: 'text-bottom' }}><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></h5>
                  <div className="role">Software Development Manager, IBM India Labs</div>
                  <div className="topic">"Agentic SDLC: Transforming Software Delivery with AI Agents (Live Demo)"</div>
                </div>
              </div>
              <div className="meetup-speaker-item">
                <div className="meetup-speaker-number num-purple">03</div>
                <div className="meetup-speaker-details">
                  <h5>Poornapragna M S <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#ef4444" style={{ marginLeft: '2px', verticalAlign: 'text-bottom' }}><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></h5>
                  <div className="role">AI Leader, Jio Platforms Limited</div>
                  <div className="topic">"Enterprise Adoption of Agentic AI — From Automation to Autonomous Decisioning"</div>
                </div>
              </div>
              <div className="meetup-speaker-item">
                <div className="meetup-speaker-number num-orange">04</div>
                <div className="meetup-speaker-details">
                  <h5>Fireside Chat with our Alumni and Chief Mentor <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#ef4444" style={{ marginLeft: '2px', verticalAlign: 'text-bottom' }}><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></h5>
                  <div className="role">Dr. J. B. Simha (Chief Mentor) · Ashok Shetty (Senior VP – Swiss Re, Alumni Batch 2020) · Dr. Shinu Abhi (Moderator)</div>
                  <div className="topic">"From Copilots to Coworkers: The Rise of Agentic AI in Software Delivery"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meetup 03 */}
        <div className="meetup-event-card theme-purple meetup-coming-soon">
          <div className="meetup-event-left">
            <span className="meetup-event-num">MEETUP #03</span>
            <div className="meetup-event-date" style={{ fontSize: '22px', fontWeight: '800', lineHeight: '1.2', marginBottom: '15px', marginTop: '40px', color: '#111' }}>Coming<br />Soon</div>
            <div className="meetup-event-time" style={{ marginBottom: '35px', fontSize: '13px', color: '#475569' }}>Date to be announced</div>
            <div className="meetup-event-hosted" style={{ position: 'static', fontSize: '12px', fontWeight: '600', color: '#111' }}>Venue TBD · Bengaluru</div>
            <div className="meetup-event-big-num">03</div>
          </div>
          <div className="meetup-event-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 className="meetup-cs-title">The Namma Bengaluru Meetup series continues to grow.</h2>
            <p className="meetup-cs-title" style={{ marginBottom: '8px' }}>New themes, new speakers, new conversations that move this community forward.</p>
            <p className="meetup-cs-subtext">Interested in speaking, co-hosting, or partnering? Reach out to our team below.</p>
            <button className="meetup-btn-primary meetup-btn-notify">Get Notified</button>
          </div>
        </div>

      </section>

      {/* Brilliant Minds */}
      <div className="meetup-minds-wrapper">
        <section className="meetup-container meetup-minds">
          <h2 className="meetup-minds-title">THE BRILLIANT MINDS WHO'VE SPOKEN</h2>
          <div className="meetup-minds-grid">

            <div className="meetup-mind-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Lokesh Balu" className="meetup-mind-img" />
              <h4>Lokesh Balu</h4>
              <div className="meetup-mind-role">Technical Staff – Security Architect, Dell Technologies</div>
              <div className="meetup-mind-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>

            <div className="meetup-mind-card">
              <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Praveen Kumar" className="meetup-mind-img" />
              <h4>Praveen Kumar Motupalli</h4>
              <div className="meetup-mind-role">Cybersecurity & Privacy Leader,<br />Airbus</div>
              <div className="meetup-mind-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>

            <div className="meetup-mind-card">
              <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Pradeepta Mishra" className="meetup-mind-img" />
              <h4>Pradeepta Mishra</h4>
              <div className="meetup-mind-role">VP of Artificial Intelligence, Beghou<br />Consulting</div>
              <div className="meetup-mind-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>

            <div className="meetup-mind-card">
              <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Shwetha" className="meetup-mind-img" />
              <h4>Shwetha Gopalakrishna</h4>
              <div className="meetup-mind-role">Software Development Manager,<br />IBM India Labs</div>
              <div className="meetup-mind-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>

            <div className="meetup-mind-card">
              <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Poornapragna" className="meetup-mind-img" />
              <h4>Poornapragna M S</h4>
              <div className="meetup-mind-role">AI Leader, Jio Platforms Limited</div>
              <div className="meetup-mind-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>

            <div className="meetup-mind-card">
              <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Sivakumar" className="meetup-mind-img" />
              <h4>Sivakumar<br />Dhakshinamoorthy</h4>
              <div className="meetup-mind-role">Head of Services Support & AI<br />Security Researcher, Lenovo</div>
              <div className="meetup-mind-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>

            <div className="meetup-mind-card">
              <img src="https://randomuser.me/api/portraits/men/72.jpg" alt="Sandeep" className="meetup-mind-img" />
              <h4>Sandeep Vijayaraghavan</h4>
              <div className="meetup-mind-role">EVP – Cybersecurity & Cloud,<br />Terralogic Inc.</div>
              <div className="meetup-mind-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>

            <div className="meetup-mind-card">
              <img src="https://randomuser.me/api/portraits/men/82.jpg" alt="Satish" className="meetup-mind-img" />
              <h4>Satish Sreenivasaiah</h4>
              <div className="meetup-mind-role">Director – Product Security<br />Engineering, Zscaler</div>
              <div className="meetup-mind-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Photo Highlights */}
      <section className="meetup-container meetup-highlights">
        <h2 className="meetup-section-title" style={{ textAlign: 'center', fontSize: '28px', marginBottom: '50px' }}>PHOTO HIGHLIGHTS</h2>
        <div className="meetup-highlights-grid">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="Highlight 1" className="large" />
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=400&q=80" alt="Highlight 2" />
          <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80" alt="Highlight 3" />
          <img src="https://images.unsplash.com/photo-1475721028070-2051152cbceb?w=400&q=80" alt="Highlight 4" />
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80" alt="Highlight 5" />
        </div>
      </section>

      {/* Organiser and Venues Section */}
      <section className="meetup-organiser-venues">
        <div className="meetup-container meetup-ov-wrapper">
          <div className="meetup-ov-left">
            <div className="meetup-ov-label">ORGANISER</div>
            <h2 className="meetup-ov-heading">Powered by <span style={{ color: '#f37021' }}>RACE</span>,<br />REVA University.</h2>
            <p>REVA Academy for Corporate Excellence (RACE) is the industry and consulting arm of REVA University — designing transformation journeys, building AI platforms, and deploying security architectures for enterprises across India.</p>
            <p>The Namma Bengaluru Meetup series is our commitment to the community — bringing leaders, architects, researchers, and decision makers together to build the future, securely.</p>

            <div className="meetup-ov-tags">
              <span>Agentic AI</span>
              <span>Cybersecurity</span>
              <span>Cloud</span>
              <span>Analytics</span>
              <span>GenAI</span>
              <span>DPDPA · NIST · GDPR</span>
              <span>NAAC Grade A+</span>
            </div>
          </div>
          <div className="meetup-ov-right">
            <div className="meetup-ov-label">PARTNERS & VENUES</div>
            <h2 className="meetup-ov-heading" style={{ fontSize: '30px', marginBottom: '40px' }}>Where we've <span style={{ color: '#f37021' }}>gathered.</span></h2>

            <div className="meetup-venue-card">
              <h4>Terralogic Software Solutions</h4>
              <p>Bommanahalli, Bengaluru · Cyber & Cloud expertise · Enterprise resilience</p>
              <div className="meetup-venue-tag">Host — Meetup #1</div>
            </div>

            <div className="meetup-venue-card">
              <h4>REVA University Campus</h4>
              <p>Rukmini Knowledge Park, Yelahanka, Bengaluru 560 064</p>
              <div className="meetup-venue-tag">Host — Meetup #2</div>
            </div>

            <div className="meetup-venue-card">
              <h4>Your Organisation?</h4>
              <p>Interested in co-hosting a future Namma Bengaluru Meetup? We'd love to connect.</p>
              <div className="meetup-venue-tag">Open for Meetup #3+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="meetup-stay-connected">
        <div className="meetup-container">
          <div className="meetup-sc-pill">STAY CONNECTED</div>
          <h2 className="meetup-sc-heading">Don't miss the next edition.</h2>
          <p className="meetup-sc-subtitle">Reach out to register for upcoming meetups, propose a talk topic, or explore partnership opportunities with RACE.</p>

          <div className="meetup-sc-contacts">
            <div className="meetup-sc-contact-card">
              {/* <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priyanka Umarji" className="meetup-sc-contact-img" /> */}
              <div>
                <div className="label">RSVP CONTACT</div>
                <div className="name">Priyanka Umarji</div>
                <div className="phone">+91 89046 16334</div>
              </div>
            </div>
            <div className="meetup-sc-contact-card">
              {/* <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Nikesh Rai" className="meetup-sc-contact-img" /> */}
              <div>
                <div className="label">RSVP CONTACT</div>
                <div className="name">Nikesh Rai</div>
                <div className="phone">+91 85977 24677</div>
              </div>
            </div>
          </div>

          <div className="meetup-sc-buttons">
            <button className="meetup-btn-dark">Visit race.reva.edu.in →</button>
            <button className="meetup-btn-outline">View All Meetups</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Meetup;
