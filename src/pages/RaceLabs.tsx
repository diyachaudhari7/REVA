import React from 'react';
import './RaceLabs.css';

interface RaceLabsProps {
  setCurrentView: (view: string) => void;
}

const RaceLabs: React.FC<RaceLabsProps> = ({ setCurrentView }) => {
  return (
    <div className="race-labs-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>Home</span> &raquo; RACE Labs
      </div>

      {/* Hero Section */}
      <section className="race-hero">
        <div className="race-hero-content">
          <h1 className="race-hero-title">RACE Labs</h1>
          <p className="race-hero-desc">
            RACE Labs is your go-to source for sharp insights and research on emerging tech.<br />
            Explore articles on AI, Analytics, Cybersecurity, Cloud, and Leadership—<br />
            designed for forward-thinking professionals.
          </p>

          <div className="race-hero-cards">
            <div className="hero-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h4>Browse Curated Articles</h4>
              <p>Access blogs, research, news,<br />webinars, and whitepapers<br />in one place.</p>
            </div>
            
            <div className="hero-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </div>
              <h4>Stay Informed</h4>
              <p>Get the latest updates in<br />AI, Data Science,<br />Cybersecurity, and more.</p>
            </div>

            <div className="hero-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h4>Learn from Trusted Sources</h4>
              <p>Read well-researched content<br />with practical insights<br />you can apply.</p>
            </div>

            <div className="hero-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>
              </div>
              <h4>Your Go-To Knowledge Source</h4>
              <p>RACE Labs is your space for<br />trusted, well-written tech<br />and leadership content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="featured-research">
        <h2 className="section-title">Featured Research</h2>
        <p className="section-desc">Discover our latest research breakthroughs and innovations in emerging technologies and real-world applications.</p>
        
        <div className="featured-card">
          <div className="featured-img-col">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" alt="RIA - REVA Intelligent Assistant" />
            <div className="featured-img-overlay">
              <span className="featured-overlay-title">RIA</span>
              <span className="featured-overlay-subtitle">REVA Intelligent Assistant</span>
            </div>
          </div>
          <div className="featured-text-col">
            <div className="featured-date">
              <span style={{ marginRight: '8px' }}>🗓️</span> 09/01/2026
            </div>
            <h3>RIA – REVA Intelligent Assistant</h3>
            <p>RIA is an AI-powered humanoid assistant designed to enhance the campus experience through natural, intuitive interaction.</p>
            
            <div className="featured-footer">
              <span className="featured-tag">Innovation</span>
              <a href="#" className="read-more-link">
                Read More 
                <span className="read-more-icon">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 11H7v-2h5V9l4 3-4 3v-3z"/></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog and Sidebar Section */}
      <section className="labs-main-content">
        <div className="labs-container">
          {/* Sidebar */}
          <aside className="labs-sidebar">
            <div className="sidebar-widget">
              <h3>Categories</h3>
              <ul className="sidebar-list" style={{ marginBottom: '30px' }}>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Customized Training</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Webinars</a></li>
                <li><a href="#">Whitepapers</a></li>
              </ul>
            
              <h3>Topics</h3>
              <ul className="sidebar-list">
                <li><a href="#">Analytics/Data Science</a></li>
                <li><a href="#">Artificial Intelligence</a></li>
                <li><a href="#">Cybersecurity</a></li>
                <li><a href="#">HR & Leadership</a></li>
                <li><a href="#">Other Topics</a></li>
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="labs-grid">
            {/* Card 1 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80" alt="Co-Intelligence by Ethan Mollick" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">12</span>
                    <span className="date-month">JUN</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>Co-Intelligence by Ethan Mollick—What It Really Means to Work With AI, Not Just Use It</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Blog</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">Co-Intelligence has quietly become one of the most-discussed books among knowledge workers, educators, and business leaders.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80" alt="When Robots Dream of Rules" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">30</span>
                    <span className="date-month">MAY</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>When Robots Dream of Rules: I, Robot and the Real AI Revolution</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Blog</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">I, Robot was not a warning about killer machines. It was something far more sophisticated.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="Grand Inauguration" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">16</span>
                    <span className="date-month">MAR</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>Grand Inauguration of Master's Programs</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Blog</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">The event began with a warm welcome to the distinguished guests and participants present for the occasion.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80" alt="Cyber Attacks" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">20</span>
                    <span className="date-month">FEB</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>Biggest Cyber Attacks of 2026 & their Impact</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Cybersecurity</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">A comprehensive look at the major cybersecurity breaches of the year and how enterprises are responding.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80" alt="Strategic Roadmap" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">10</span>
                    <span className="date-month">FEB</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>A Strategic Roadmap for AI-Native Enterprises</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">How organizations are transitioning from AI-assisted workflows to completely AI-native operational models.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80" alt="When Robots Dream of Rules" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">30</span>
                    <span className="date-month">MAY</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>When Robots Dream of Rules: I, Robot and the Real AI Revolution</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Blog</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">I, Robot was not a warning about killer machines. It was something far more sophisticated.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 7 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="Grand Inauguration" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">16</span>
                    <span className="date-month">MAR</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>Grand Inauguration of Master's Programs</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Events</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">The event began with a warm welcome to the distinguished guests and participants present for the occasion.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 8 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80" alt="Cyber Attacks" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">20</span>
                    <span className="date-month">FEB</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>Biggest Cyber Attacks of 2026 & their Impact</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Cybersecurity</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">A comprehensive look at the major cybersecurity breaches of the year and how enterprises are responding.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>
            
            {/* Card 9 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80" alt="Strategic Roadmap" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">10</span>
                    <span className="date-month">FEB</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>A Strategic Roadmap for AI-Native Enterprises</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">How organizations are transitioning from AI-assisted workflows to completely AI-native operational models.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 10 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80" alt="Cyber Attacks" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">20</span>
                    <span className="date-month">FEB</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>Biggest Cyber Attacks of 2026 & their Impact</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Cybersecurity</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">A comprehensive look at the major cybersecurity breaches of the year and how enterprises are responding.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>
            
            {/* Card 11 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80" alt="Strategic Roadmap" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">10</span>
                    <span className="date-month">FEB</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>A Strategic Roadmap for AI-Native Enterprises</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">How organizations are transitioning from AI-assisted workflows to completely AI-native operational models.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 12 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80" alt="When Robots Dream of Rules" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">30</span>
                    <span className="date-month">MAY</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>When Robots Dream of Rules: I, Robot and the Real AI Revolution</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Blog</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">I, Robot was not a warning about killer machines. It was something far more sophisticated.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 13 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="Grand Inauguration" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">16</span>
                    <span className="date-month">MAR</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>Grand Inauguration of Master's Programs</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Events</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">The event began with a warm welcome to the distinguished guests and participants present for the occasion.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>

            {/* Card 14 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80" alt="Cyber Attacks" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">20</span>
                    <span className="date-month">FEB</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>Biggest Cyber Attacks of 2026 & their Impact</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">Cybersecurity</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">A comprehensive look at the major cybersecurity breaches of the year and how enterprises are responding.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>
            
            {/* Card 15 */}
            <div className="lab-post-card">
              <div className="post-img">
                <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80" alt="Strategic Roadmap" />
              </div>
              <div className="post-content">
                <div className="post-header-row">
                  <div className="post-date-block">
                    <span className="date-day">10</span>
                    <span className="date-month">FEB</span>
                    <span className="date-year">2026</span>
                  </div>
                  <div className="post-title-block">
                    <h4>A Strategic Roadmap for AI-Native Enterprises</h4>
                    <div className="post-meta">
                      <div className="meta-item">
                        <span className="meta-label">Posted By</span>
                        <span className="meta-value">RACE Labs</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="post-excerpt">How organizations are transitioning from AI-assisted workflows to completely AI-native operational models.</p>
                <a href="#" className="read-more-link orange">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginLeft: '4px', marginTop: '2px' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RaceLabs;
