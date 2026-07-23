import React from 'react';
import './BusinessAnalytics.css';


interface Props {
  setCurrentView: (view: string) => void;
}

const BusinessAnalytics: React.FC<Props> = () => {
  const [isEmiModalOpen, setIsEmiModalOpen] = React.useState(false);
  return (
    <div className="ba-page">
      {/* Top Banner */}
      <div className="ba-top-banner">
        <div className="ba-top-banner-content">
          <p>Download the complete brochure for full details</p>
          <button className="ba-banner-btn">Download Brochure</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="ba-hero">
        <div className="ba-hero-content-wrapper">
          <div className="ba-hero-left">
            <div className="ba-hero-text">
              <div className="ba-rank-badge">
                <svg viewBox="0 0 120 120" width="130" height="130" className="badge-svg">
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fde047" />
                      <stop offset="50%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#a16207" />
                    </linearGradient>
                    <path id="curveTop" d="M 30,60 A 30,30 0 1,1 90,60" />
                    <path id="curveBottom" d="M 95,60 A 35,35 0 0,1 25,60" />
                  </defs>
                  {/* Outer circle with zig-zag could be complex, using circles for now */}
                  <circle cx="60" cy="60" r="54" fill="url(#goldGrad)" stroke="#78350f" strokeWidth="2" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#fff" strokeWidth="1" />

                  <text x="60" y="45" textAnchor="middle" fill="#000" fontSize="14" fontWeight="800">RANKED</text>
                  <text x="60" y="80" textAnchor="middle" fill="#000" fontSize="42" fontWeight="900">1</text>
                  <text x="60" y="95" textAnchor="middle" fill="#000" fontSize="11" fontWeight="800">IN INDIA</text>
                  <text fontSize="7.5" fill="#000" fontWeight="700" letterSpacing="0.5">
                    <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">BY ANALYTICS INDIA MAGAZINE</textPath>
                  </text>
                </svg>
              </div>
              <div className="ba-hero-titles">
                <h4>India's Top-Ranked</h4>
                <h1>M.Sc. in<br />Business Analytics</h1>
                <p className="ba-powered-by">Powered by AI, LLMs and Enterprise Decision Intelligence</p>
                <p className="ba-offered-by">Offered in Association with<br />AWS Academy and Microsoft Azure</p>
                <button className="ba-btn-primary">Download Brochure</button>
              </div>
            </div>
          </div>
          <div className="ba-hero-right">
            <div className="ba-lead-form">
              <form className="ba-form-inner">
                <input type="text" placeholder="Enter Name *" required />
                <div className="ba-phone-input">
                  <select className="ba-country-code" defaultValue="+91">
                    <option value="+91">+91</option>
                  </select>
                  <input type="tel" placeholder="Enter Mobile Number *" required />
                </div>
                <input type="email" placeholder="Enter Email Address *" required />
                <select defaultValue="" className="ba-select-icon">
                  <option value="" disabled>Work Experience *</option>
                  <option value="0-2">0-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
                <input type="text" placeholder="Enter Organization's Name" />
                <input type="text" placeholder="Enter Job Title" />
                <div className="ba-captcha">
                  <div className="captcha-box">
                    <span className="captcha-text">400d72</span>
                    <button type="button" className="refresh-captcha">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></svg>
                    </button>
                  </div>
                  <input type="text" placeholder="Enter Captcha" />
                </div>
                <label className="ba-agree">
                  <input type="checkbox" required />
                  <span>I agree to receive information regarding my submitted application by signing up on REVA Academy for Corporate Excellence *</span>
                </label>
                <button type="submit" className="ba-submit-btn">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="ba-key-facts">
        <div className="fact-item">
          <h5>START DATE</h5>
          <strong>Sept 2026</strong>
          <span>Enrollment open now</span>
        </div>
        <div className="fact-item">
          <h5>DURATION</h5>
          <strong>2 Years</strong>
          <span>Full time programme</span>
        </div>
        <div className="fact-item">
          <h5>RECOGNITION</h5>
          <strong>UGC</strong>
          <span>Approved & accredited</span>
        </div>
        <div className="fact-item">
          <h5>PROGRAMME FEE</h5>
          <strong>EMI from ₹9,891/month</strong>
          <span className="fact-sub-detail">₹4.8 Lakhs for 2 years</span>
          <button className="view-plans" onClick={() => setIsEmiModalOpen(true)}>View EMI Plans</button>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="ba-metrics">
        <div className="metric-item">
          <h2>39<span className="metric-unit">LPA</span></h2>
          <p>Average Salary</p>
        </div>
        <div className="metric-item">
          <h2>354<span className="metric-unit">%</span></h2>
          <p>Average Hike</p>
        </div>
        <div className="metric-item">
          <h2>30<span className="metric-unit">LPA</span></h2>
          <p>Median Salary</p>
        </div>
        <div className="metric-item">
          <h2>187<span className="metric-unit">%</span></h2>
          <p>Median Hike</p>
        </div>
        <div className="metric-item">
          <h2>100<span className="metric-unit">+</span></h2>
          <p>Hiring Partners</p>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="ba-alumni">
        <h2 className="section-title">Achieve your career goals</h2>
        <div className="alumni-grid">
          <div className="alumni-card">
            <div className="alumni-img">
              <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="Somesh Sahu" />
            </div>
            <h4 className="alumni-name">Somesh Sahu</h4>
            <p className="degree">MBA in Business Analytics, 2021</p>
            <p className="role-old">Project Manager</p>
            <p className="role-to">to</p>
            <p className="role-new">Associate Principal Product Engineering</p>
            <p className="company">LTIMindtree</p>
          </div>
          <div className="alumni-card">
            <div className="alumni-img">
              <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Anshuman Dash" />
            </div>
            <h4 className="alumni-name">Anshuman Dash</h4>
            <p className="degree">MBA in Business Analytics, 2020</p>
            <p className="role-old">Promoted</p>
            <p className="role-to">as</p>
            <p className="role-new">Senior Director Delivery Head, IIoT &<br />AI/ML</p>
            <p className="company">Microland</p>
          </div>
          <div className="alumni-card">
            <div className="alumni-img">
              <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Ashok Shetty" />
            </div>
            <h4 className="alumni-name">Ashok Shetty</h4>
            <p className="degree">MBA in Business Analytics, 2020</p>
            <p className="role-old">Promoted</p>
            <p className="role-to">as</p>
            <p className="role-new">Vice President Data Scientist</p>
            <p className="company">Swiss Re</p>
          </div>
        </div>
        <div className="carousel-dots">
          <span className="dot"></span><span className="dot"></span><span className="dot active"></span><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="dot"></span>
        </div>
      </section>

      {/* Become an Analytics Consultant */}
      <section className="ba-consultant-section">
        <h2 className="section-title">Become an AI-Enabled Analytics Consultant</h2>
        <p className="section-desc" style={{ fontSize: "16px", marginBottom: "10px", marginTop: "0", fontWeight: "400" }}>with Deep Techno-Functional Skills</p>
        <p className="section-desc" style={{ fontSize: "16px", marginBottom: "15px", color: "#475569", fontWeight: "400" }}>Different business problems need different mental models. Learn to combine domain understanding, data science, AI engineering and consulting thinking.</p>
        <p className="section-desc" style={{ fontSize: "16px", marginBottom: "20px", color: "#475569", fontWeight: "400" }}>The M.Sc. in Business Analytics helps participants build three-dimensional capability to solve complex business challenges</p>
        <div className="consultant-domains" style={{ fontSize: "16px", color: "#475569", fontWeight: "400" }}>
          <span style={{ color: "#475569" }}>Domain & Business Understanding</span> | <span style={{ color: "#475569" }}>Full-Stack Analytics & AI Skills</span> | <span style={{ color: "#475569" }}>Data-Driven Business Problem Solving</span>
        </div>

        {/* Diagram Area */}
        <div className="ba-diagram-container">
          <div className="diagram-top-title">
            <div className="icon">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
            </div>
            <h3>DATA DRIVEN<br />Enterprise<br />Leaders</h3>
          </div>
          <div className="diagram-branches">
            <div className="diagram-branch">
              <div className="branch-circle" style={{ maxWidth: "150px" }}>Deep Understanding on Business / Domain</div>
              <ul className="branch-list right-align" style={{ maxWidth: "240px", paddingRight: "5px" }}>
                <li>Management Functions, Processes, Key Metrics</li>
                <li>Domain/Industry Best Practices</li>
                <li>Supply Chain Concepts and Analytics/ML/AI Use Cases</li>
                <li>Accounting & Finance Concepts and Analytics Use Cases</li>
                <li>Marketing & Retail Concepts and Analytics/ML/AI Applications</li>
                <li>Digital Marketing, Social Media & Text Analytics Concepts and Analytics/ML/AI Applications</li>
              </ul>
            </div>
            <div className="diagram-branch center-branch">
              <div className="branch-circle">Full-Stack Analytics Skills</div>
              <ul className="branch-list center-align" style={{ maxWidth: "280px", marginTop: "0px" }}>
                <li>Programming Skills - Python/R</li>
                <li>Database Systems and Design</li>
                <li>Statistical Modeling</li>
                <li>Machine Learning Modeling for Business Applications</li>
                <li>Deep Learning - Image and Video Analytics for Business</li>
                <li>Text and NLP Applications</li>
                <li>Model Deployment and Monitoring in Cloud</li>
              </ul>
            </div>
            <div className="diagram-branch">
              <div className="branch-circle" style={{ maxWidth: "150px" }}>Data-Driven Business Problem Solving</div>
              <ul className="branch-list left-align" style={{ maxWidth: "240px", paddingLeft: "5px" }}>
                <li>Process Efficiency through AI/ML</li>
                <li>Key Metrics and KPIs based Dashboards for all Functions and Processes</li>
                <li>AI/ML Applications for Revenue and Cost Management</li>
                <li>Responding to RFPs</li>
                <li>Management of end-to-end ML/AI Projects and Products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="ba-features">
        <div className="section-title-wrap">
          <h2 className="section-title">Program feature</h2>
          <p className="section-desc">Build a lucrative career path in Analytics and Data Science with the M.Sc. in Business Analytics program. This is a 100% outcome-driven and skill-based program exclusively designed for working professionals in mid and senior positions to accomplish a smooth career transition into the highly rewarding data science field. The 24-month program is recognised by UGC and focuses on hands-on learning using proprietary or open software tools in the Analytics market today.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h4>Industry Thought Leaders as Mentors</h4>
            <p>Our industry mentors have decades of experience in the industry and hence participants will receive hands-on experience with various analytics applications to solve real-time business issues.</p>
          </div>
          <div className="feature-card">
            <h4>LMS with the best in Class Resources</h4>
            <p>An integrated Learning Management System (LMS) that provides 24/7 access support to aspirants with in-class reading support, interactive resources, real case database datasets, recordings of sessions, and other resources.</p>
          </div>
          <div className="feature-card">
            <h4>Industry Grade Projects</h4>
            <p>Real-time case studies with labs and simulations provide hands-on learning opportunities that help participants gain a thorough understanding of the subject and how it is applied in the real world.</p>
          </div>
          <div className="feature-card">
            <h4>Placements Opportunities</h4>
            <p>The lateral placement services such as career guidance, resume building, and mock interviews with industry mentors and alumni help our participants to transition their careers and bag lucrative offers.</p>
          </div>
        </div>
      </section>

      {/* Why Business Analytics */}
      <section className="ba-why-race">
        <div className="ba-why-race-container">
          <div className="ba-why-race-left">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Business Analytics with RACE?</h2>
            <div className="why-list">
              <div className="why-item">
                <span className="why-num">1.</span>
                <div className="why-content">
                  <h4>Develop Full-Stack Analytics and Decision-making Skills</h4>
                  <p>This unique program will help the learner to design data-driven processes and systems, build descriptive, diagnostic, predictive, prescriptive, and cognitive models, deploy and monitor them in a real-time business setting.</p>
                </div>
              </div>
              <div className="why-item">
                <span className="why-num">2.</span>
                <div className="why-content">
                  <h4>Designed for Creating Enterprise Leaders</h4>
                  <p>This program is designed to help enterprise leaders who can harness the web of information from internal functions and external sources into meaningful decisions, to build profitable and sustainable organizations. Modules like Enterprise Analytics and Consulting in Analytics build end-to-end performance-driven skillsets.</p>
                </div>
              </div>
              <div className="why-item">
                <span className="why-num">3.</span>
                <div className="why-content">
                  <h4>Building Techno-Functional Expertise</h4>
                  <p>A well-balanced program curriculum ensures that the learner gains deep technical and functional expertise in building Machine Learning/Deep Learning-based applications in all the enterprise functions based on the business challenges, thus making a very strong resume with hands-on skills which is a rarity today.</p>
                </div>
              </div>
              <div className="why-item">
                <span className="why-num">4.</span>
                <div className="why-content">
                  <h4>Active Learning with Industry-grade Projects</h4>
                  <p>At the end of this two-year M.Sc.(Res) in Business Analytics program, the learners get to work on 10 plus mini-projects, 2 plus full-scale projects, and research publication(s). These projects are mentored by industry thought leaders and hence career transformational. The main focus of these projects is on research and innovation, range from business use cases to cutting-edge deep learning product development.</p>
                </div>
              </div>
              <div className="why-item">
                <span className="why-num">5.</span>
                <div className="why-content">
                  <h4>Lateral Placement with Career Guidance and Support</h4>
                  <p>A wide network of 50 plus industry mentors, 100 plus marquee organizations as placement partners, and 1000 plus strong alumni network ensure a successful transition of our learners into analytics managers. The lateral placement process is uniquely designed with one-on-one career guidance and mentoring sessions, resume building support, special training, and mock interviews, to place each learner nationally and internationally with an average of 50 to 200% increase in salary.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ba-why-race-right">
            <div className="ba-lead-form">
              <div className="ba-form-header">
                <h3>Hurry! Limited Seats Available</h3>
              </div>
              <div className="ba-form-contact-bar">
                Call for Details: +91 89040 58866 <span className="divider">|</span> <span className="batch-text" style={{ color: '#f37021' }}>Batch Starting September 2</span>
              </div>
              <form>
                <input type="text" placeholder="Enter Name *" required />
                <div className="ba-phone-input">
                  <span className="country-code">+91 ▼</span>
                  <input type="tel" placeholder="Enter Mobile Number *" required />
                </div>
                <input type="email" placeholder="Enter Email Address *" required />
                <select defaultValue="">
                  <option value="" disabled>Work Experience *</option>
                  <option value="0-2">0-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
                <input type="text" placeholder="Enter Organization's Name" />
                <input type="text" placeholder="Enter Job Title" />
                <div className="ba-captcha">
                  <img src="https://via.placeholder.com/100x40/f3f4f6/475569.png?text=4c16ff" alt="captcha" />
                  <button type="button" className="refresh-captcha">↻</button>
                  <input type="text" placeholder="Enter Captcha" />
                </div>
                <label className="ba-agree">
                  <input type="checkbox" required />
                  <span>I agree to receive information regarding my submitted application by signing up on REVA Academy for Corporate Excellence *</span>
                </label>
                <button type="submit" className="ba-submit-btn">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="ba-curriculum">
        <h2 className="section-title">Curriculum Highlights</h2>
        <div className="curriculum-badges">
          <span className="cur-badge">84 Credits</span>
          <span className="cur-divider">|</span>
          <span className="cur-badge">4 Semesters</span>
          <span className="cur-divider">|</span>
          <span className="cur-badge">14 Modules</span>
          <span className="cur-divider">|</span>
          <span className="cur-badge">10+ Mini Projects</span>
          <span className="cur-divider">|</span>
          <span className="cur-badge">2 Capstone Projects with Industry Mentorship</span>
        </div>
        <div className="curriculum-badges">
          <span className="cur-badge">2 Global Certifications</span>
          <span className="cur-divider">|</span>
          <span className="cur-badge">1 Research Paper Publication</span>
        </div>
      </section>

      {/* Render the extra data sections */}
      <Curriculum />
      <GoogleReviews />
      <Partners />
      <Mentors />
      <Admission />

      {/* EMI Modal */}
      {isEmiModalOpen && (
        <div className="emi-modal-overlay" onClick={() => setIsEmiModalOpen(false)}>
          <div className="emi-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="emi-modal-close" onClick={() => setIsEmiModalOpen(false)}>✕</button>
            <div className="emi-modal-header">
              <h3>Loan Amount: <span>₹ 4,80,000</span></h3>
            </div>

            <div className="emi-table-container">
              <table className="emi-table">
                <thead>
                  <tr>
                    <th>Installment</th>
                    <th className="text-right">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12 Month EMI</td>
                    <td className="text-right">₹43,098</td>
                  </tr>
                  <tr>
                    <td>24 Month EMI</td>
                    <td className="text-right">₹23,046</td>
                  </tr>
                  <tr>
                    <td>36 Month EMI</td>
                    <td className="text-right">₹16,405</td>
                  </tr>
                  <tr>
                    <td>42 Month EMI</td>
                    <td className="text-right">₹14,522</td>
                  </tr>
                  <tr>
                    <td>48 Month EMI</td>
                    <td className="text-right">₹13,117</td>
                  </tr>
                  <tr>
                    <td>60 Month EMI</td>
                    <td className="text-right">₹11,169</td>
                  </tr>
                  <tr>
                    <td>72 Month EMI</td>
                    <td className="text-right">₹9,891</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="emi-note">
              <strong>Note:</strong>
              <ol>
                <li>A processing fee is applicable on EMI plans.</li>
                <li>EMI amounts are subject to change based on document verification.</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessAnalytics;

const Module = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`module ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <h4>{title}</h4>
      {isOpen && <div className="module-content" onClick={(e) => e.stopPropagation()}>{children}</div>}
    </div>
  );
};

export const Curriculum = () => {
  return (
    <section className="ba-curriculum-detailed">
      <h2 className="section-title">Detailed Curriculum</h2>

      <div className="semester">
        <h3>Semester I</h3>
        <Module title="Foundations of Business Analytics (4)">
          <p>Learn essentials of management; planning, organizing, directing and controlling in a real-time simulated environment through case studies. In this course, the learners will hone their decision-making skills by enacting the protagonists’ role in solving challenging managerial situations. The learners will debate and participate in designing the strategies and implementing tactics to build performance-driven, sustainable organizations. The focus would be to learn the skills to build a data-driven culture to manage performance and competitive advantage.</p>
          <p><strong>Tools:</strong> Power BI, HBR Case studies, and Simulations.</p>
        </Module>
        <Module title="Data Management and Visual Analytics (4)">
          <p>This module will provide hands-on skills with SQL, Python and Tableau required to implement business analytics projects. Through a set of mini-projects, the learners will design and implement a domain-driven system; design and build DataMarts with SQL, extract and process the data with Python and build a dynamic dashboard with Tableau/Qlik Sense on key performance metrics.</p>
          <p><strong>Tools:</strong> SQL, Python, and Power BI.</p>
        </Module>
        <Module title="Applied Statistics for Business (4)">
          <p>This module aims to provide a strong foundation in applying statistical concepts and methods in real-world situations and domains related to analytics. They will learn univariate, bivariate and multivariate statistical techniques, setting and testing hypotheses, sampling, probability and building statistical models. The participants will learn to present their cases with appropriate business relevance to non-statistical / business stakeholders.</p>
          <p><strong>Tools:</strong> Python, R, and Advanced Excel.</p>
        </Module>
        <Module title="Machine Learning for Business (4)">
          <p>This module is a combination of concepts, tools and practical workshops to familiarize and build expertise in Machine Learning algorithms and model building processes. Learners will get in-depth practical skills in building supervised and unsupervised algorithms through industry-relevant case studies and data sets. CRISP-DM framework is used for all the data science projects and sessions, to ensure that the focus business solutions and not mere model building.</p>
          <p><strong>Tools:</strong> Python, R, Keras, H 2 O</p>
        </Module>
        <Module title="Deep Learning (4)">
          <p>The objective of this module is to make the participants implement and apply state-of-the-art deep learning models in real-world problems. The participants will get in-depth understanding and hands-on exposure to applying deep learning methods to solve a variety of computer vision-based problems. The labs include building a deep neural network for a given problem, hyper-parameter tuning, and optimization to make sure it avoids overfitting, building a time sequence-based neural networks and solving the problems of forecasting, building CNN for image processing tasks, learn how and when to use Autoencoders and familiarize with the latest advances in deep learning.</p>
          <p><strong>Tools:</strong> Python</p>
        </Module>
      </div>

      <div className="semester">
        <h3>Semester II</h3>
        <Module title="Natural Language Processing and Generative AI (4)">
          <p>The objective of this course is to provide knowledge and skills to the participants to analyze the text and derive useful insights. The participants will be able to read the text data, preprocess, and classify the text. They will have a clear understanding of grouping the text/documents by similarity, detecting the topics in texts, analyze the sentiments, topics and intent with social media posts. NLP based models will be taught with hands-on sessions.</p>
          <p><strong>Tools:</strong> Python, R</p>
        </Module>
        <Module title="Marketing and Retail Analytics (4)">
          <p>Marketing analytics helps the participants to understand and apply the processes and technologies that enable marketers to evaluate the success and value of their marketing initiatives, identify trends and patterns over time, and make data-driven decisions. They will be able to apply marketing mix modelling, market basket analysis, Association rules, Customer Lifetime value calculations and recommendation engines.</p>
          <p><strong>Tools:</strong> Python, R, Azure, and Power BI.</p>
        </Module>
        <Module title="Supply Chain Analytics (4)">
          <p>Learn the best practices on supply chain analytics from global practitioners. The module provides conceptual and practical skills on the complete spectrum of supply chain and analytics applications on; operational procurement, vendor management, procurement decisions, category management, spend analytics, production systems, logistics sales & operations and customer management. At the end of the module, the learners will be able to design streamlined processes, demand forecasting, network design, predictive maintenance, warehouse zoning and management, performance reports, decision dashboards, moving from descriptive to predictive to prescriptive analytics through real-time industry case studies.</p>
          <p><strong>Tools:</strong> Python, Advanced Excel, HBR case studies, simulations and role-plays.</p>
        </Module>
        <Module title="Financial Analytics (4)">
          <p>This course deals with financial analytics concepts and its applications in real-life business environments. Concepts in Fundamental and Technical analysis, Key Financial Statements, Computation of Key Financial Metrics, Types of BFSI Products, and Profit and Loss Drivers etc., will be learnt. The learners will be able to design, build and deploy machine-learning models in BFSI segments. Algorithmic trading, Credit risk scoring, fraud analytics, portfolio management are some of the use cases.</p>
          <p><strong>Tools:</strong> Python, R, Azure, and Power BI.</p>
        </Module>
        <Module title="Capstone Project I (10)">
          <p>The first-year Business Analytics program will culminate in designing, preparing and presenting a real-time capstone project on a live business challenge. Each of the participants will be provided with a senior industry mentor for guidance spanning 6 weeks. The final certification is strictly based on the successful completion and submission of the capstone project with a favorable assessment from the panel of industry mentors. The objective is to develop your managerial and consulting capabilities by applying the lessons learnt in the program to real-life business situations.</p>
          <p><strong>Tools:</strong> Full-stack</p>
        </Module>
      </div>

      <div className="semester">
        <h3>Semester III</h3>
        <Module title="Consulting in Analytics (4)">
          <p>Through this course, the participants will learn a variety of structured problem-solving techniques and key management frameworks to solve any business problems. Furthermore, emphasis will be on how to take complex business problems and structurally break down the problem into analytical solutions and present recommendations in the storytelling format to convince stakeholders, combine management consulting skills with statistical and data science skills to solve real-world business problems.</p>
          <p><strong>Tools:</strong> Simulations, HBR/IVY case studies</p>
        </Module>
        <Module title="Enterprise Analytics (4)">
          <p>Through this course, the participants will learn to connect large Analytics/AI systems from various functions of an enterprise and build a performance-driven KPI setting per function and enterprise as a whole. They will learn to build analytical data mart, dashboards and predictive models across key functions like Finance, Operations, Marketing and Sales, HR, Supply Chain, etc. The participant will be equipped with knowledge, skill and experience to take up the identification of opportunities for analytics in an enterprise and recommend the appropriate solution. Writing and presenting techno-functional RFP’s is an outcome of this module.</p>
          <p><strong>Tools:</strong> Qlik Sense, SQL, Azure, Python</p>
        </Module>
        <Module title="Microsoft Certified Azure AI Engineer AI-102 (5)">
          <p>This is a Microsoft Azure-based module with certification. The learners will be able to design and deploy AI systems with Azure through this course. They will plan and manage an azure cognitive services solution, implement computer vision solutions, NLP solutions, knowledge solutions, and conversational AI solutions. After completing the certification exam they will be designated as Azure AI Engineer Associate</p>
          <p><strong>Tools:</strong> Azure and Python.</p>
        </Module>
        <Module title="Microsoft Certified Azure Data Scientist Associate DP-100 (5)">
          <p>This module deals with designing and implementing a data science solution on Microsoft Azure. The participants will learn to create and manage Azure and Data Bricks workspace, run and monitor models, automated MLs and tune hyper-parameters and Deploy and operationalize machine-learning solutions in the Azure cloud environment. The participants will go through the DP-100 to qualify as Microsoft certified Azure Data Scientist.</p>
          <p><strong>Tools:</strong> Azure and Python.</p>
        </Module>
      </div>

      <div className="semester">
        <h3>Semester IV</h3>
        <Module title="Capstone Project II (10)">
          <p>The second-year Business Analytics program will culminate in designing, preparing and presenting/publishing a real-time capstone project on a live business challenge. The scope and business applications of the project need to be larger than the first-year project. Designing and implementing, deploying and demonstrating an end-to-end analytics project with a reasonable monetary benefit need to be built. The program office will support with mentoring and report writing. The evaluation is based on viva-voce by an industry panel of experts.</p>
          <p><strong>Tools:</strong> Full Stack</p>
        </Module>
        <Module title="Capstone project - Publication (10)">
          <p>This module credits can be earned by writing and publishing a research paper on the capstone project done in the earlier module. The participant needs to publish or present the paper in a peer-reviewed journal or reputed international conference. The participants will learn skills in research paper writing and publishing/presenting.</p>
        </Module>
      </div>
    </section>
  )
}

export const GoogleReviews = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const reviews = [
    { name: 'Yaseen Khan', initial: 'Y', color: '#9c27b0', text: 'Excellent learning experience with RACE REVA.' },
    { name: 'Nishant Krishna', initial: 'N', color: '#f57c00', text: 'RACE (REVA Academy for Corporate Excellence) offers excellent corporate programs for working professionals and continuing education programs that prepare students for the industry. AI/ML and cybersecurity programs are the best in the industry syllabus. Moreover, the faculty members are hands-on and industry practitioners themselves, ensuring the best learning quality. Overall, it is an excellent option if you want to pursue M.Tech and M.Sc programs while working.' },
    { name: 'Shyam Sundar Mandapati', initial: 'S', color: '#1976d2', text: 'AI & ML program at REVA Academy for Corporate learning is an outstanding learning journey that not only builds technical proficiency but also fosters a deeper understanding of AI. It is highly recommended for anyone looking to gain a competitive edge in the ever-evolving landscape of artificial intelligence and machine learning. My sincere thanks to professors Dr.Simha & Dr. Shinu for their leadership and guidance through out the course.' },
    { name: 'Kavitha Kannan', initial: 'K', color: '#d32f2f', text: 'I had an excellent experience with the REVA University RACE program, through which I obtained my Certified AI.' },
    { name: 'Anirban Dasgupta', initial: 'A', color: '#388e3c', text: 'It is a very clean and green campus. The RACE has faculty mostly has of external lecturers from the IT Industry and it is great learning from them. The RACE staff are friendly and helpful. The campus is spread out and has a great vibe and relaxed atmosphere. Overall RACE is a great place to study for your higher studies.' },
    { name: 'Priya Sharma', initial: 'P', color: '#e91e63', text: 'The curriculum is well structured and the faculty brings in a lot of industry experience. The mini projects are very helpful in gaining practical knowledge.' },
    { name: 'Rahul Verma', initial: 'R', color: '#00796b', text: 'Great infrastructure and supportive mentors. The capstone projects really prepare you for real-world business problems.' },
    { name: 'Sneha Patel', initial: 'S', color: '#fb8c00', text: 'Highly recommend the Business Analytics program. The hands-on sessions on tools like Python, R, and Tableau were fantastic.' }
  ];

  return (
    <section className="ba-reviews">
      <h2 className="section-title">Google Reviews</h2>
      <div className="reviews-carousel-wrapper">
        <button className="slider-arrow left" onClick={scrollLeft}>&lt;</button>
        <div className="reviews-grid" ref={scrollRef}>
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="reviewer-avatar" style={{ backgroundColor: r.color }}>{r.initial}</div>
                <div className="reviewer-info">
                  <h4>{r.name}</h4>
                  <span>a year ago</span>
                  <div className="stars">★★★★★</div>
                </div>
                <div className="google-icon"></div>
              </div>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
        <button className="slider-arrow right" onClick={scrollRight}>&gt;</button>
      </div>
      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  )
}

export const Partners = () => {
  return (
    <section className="ba-partners">
      <h2 className="section-title">Partners</h2>
      <p className="section-desc">RACE, REVA University is an academic partner for AWS, Microsoft, and CloudxLabs and others. The program participants will get unlimited access to our educational partners’ ecosystem, which includes the Cloud labs access, Course Materials, Partners' LMS, placement services, mentoring sessions, and more.</p>

      <div className="partners-grid">
        <div className="partner-card">
          <div className="partner-logo azure">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure Logo" height="40" />
            <span className="azure-text">Azure</span>
          </div>
          <p>Microsoft Azure is the leading cloud platform and productivity company for the mobile-first, cloud-first world, and its mission is to empower every person and every organization on the planet to achieve more. Through this partnership, our participants will get access to their 100’s of courses, certification opportunities, and placement services. Cloud labs with credits will be provided to practice the real-time deployment of solutions.</p>
        </div>
        <div className="partner-card">
          <div className="partner-logo aws">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" height="45" />
            <span className="aws-academy">academy</span>
          </div>
          <p>AWS Academy partnership provides our participants, course materials to pursue industry-recognized certifications and in-demand analytics / Artificial Intelligence / Machine learning jobs. AWS curriculum helps the learners to stay at the forefront of AWS Cloud innovations. The learners will get access to the Cloud environment to build and deploy Machine Learning / Artificial Intelligence solutions.</p>
        </div>
      </div>
    </section>
  )
}

export const Mentors = () => {
  return (
    <section className="ba-mentors">
      <h2 className="section-title">Mentors</h2>
      <p className="section-desc">Industry mentors are the assets of REVA Academy for Corporate Excellence. The industry experience of our mentors helps the participants to bridge the gap between classroom learning and the industry</p>

      <div className="mentors-grid">
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Dr. J B Simha" />
          <div className="mentor-overlay">
            <h4>Dr. J B Simha</h4>
            <p className="mentor-role">Chief AI officer, AdoptAI Technologies and Professor and Chief Mentor, RACE</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ratnakar Pandey" />
          <div className="mentor-overlay">
            <h4>Ratnakar Pandey</h4>
            <p className="mentor-role">Chief Data Scientist, Granicus</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Pradeepta Mishra" />
          <div className="mentor-overlay">
            <h4>Pradeepta Mishra</h4>
            <p className="mentor-role">Vice President of Artificial Intelligence, Beghou Consulting</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Ravi Shukla" />
          <div className="mentor-overlay">
            <h4>Ravi Shukla</h4>
            <p className="mentor-role">Distinguished Engineer, Dell Technologies</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/38.jpg" alt="Shriram Vasudevan" />
          <div className="mentor-overlay">
            <h4>Shriram Vasudevan</h4>
            <p className="mentor-role">Regional Mentor of Change, Atal Innovation Mission Official</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="Bismillah Kani" />
          <div className="mentor-overlay">
            <h4>Bismillah Kani</h4>
            <p className="mentor-role">Staff AI/ML Scientist, Waygate Technologies</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Dr. Angshuman Ghosh" />
          <div className="mentor-overlay">
            <h4>Dr. Angshuman Ghosh</h4>
            <p className="mentor-role">Founder and CEO, MENRV.AI</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Prahalad Karnam" />
          <div className="mentor-overlay">
            <h4>Prahalad Karnam</h4>
            <p className="mentor-role">CEO and Co-Founder, DishaAI.com</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Akshay Kulkarni" />
          <div className="mentor-overlay">
            <h4>Akshay Kulkarni</h4>
            <p className="mentor-role">Data Science & AI Leader, Publicis Sapient</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="Usha Rengaraju" />
          <div className="mentor-overlay">
            <h4>Usha Rengaraju</h4>
            <p className="mentor-role">Chief of Research, Exa Protocol | Kaggle Grandmaster</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="Nishant Krishna" />
          <div className="mentor-overlay">
            <h4>Nishant Krishna</h4>
            <p className="mentor-role">Tech Lead</p>
          </div>
        </div>
        <div className="mentor-card">
          <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Kavitha Kannan" />
          <div className="mentor-overlay">
            <h4>Kavitha Kannan</h4>
            <p className="mentor-role">AI Specialist</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Admission = () => {
  return (
    <section className="ba-admission">
      {/* Continuous Evaluation Section */}
      <div className="continuous-evaluation">
        <div className="ce-content">
          <h2 className="ce-title">Continuous Evaluation</h2>
          <p className="ce-intro">This is a globally accredited program to make the participants truly global citizens. At par with international standards and to provide opportunities for global mobility to our participants, we follow an outcome-based education system (OBE). Experiential learning and project-based pedagogy have been employed in the design and delivery of the program.</p>
          <div className="ce-details">
            <div className="never-stop">
              <h3>Never<br />Stop<br />Learning!</h3>
            </div>
            <p className="ce-text">The objective of module assessment and evaluation is to objectively assess the learners of the program on their ability to apply the concepts, modeling techniques in various domains and verticals for different business scenarios through a continuous evaluation framework throughout the program. Detailed regulations on earning the credits and GPA's will be shared during the program.</p>
          </div>
        </div>
        <div className="ce-image">
          <div className="certificate-mock">
            <div className="cert-header">REVA UNIVERSITY</div>
            <div className="cert-body">SAMPLE</div>
            <div className="cert-footer">
              <div className="cert-seal"></div>
              <div className="cert-sign"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process Section */}
      <div className="admission-process-section">
        {/* Left Column */}
        <div className="admission-timeline-col">
          <h2 className="col-title">Admission Process</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Fill the application form</h4>
                <p>Register by filling up the <a href="#">online application form</a></p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Get Evaluated</h4>
                <p>Go through the documentation process and a screening call with the Director's office.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Join the Program</h4>
                <p>If selected, you will receive an 'offer of admission' letter for the upcoming cohort. Secure your seat by paying the admission fee.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="admission-discount-col">
          <div className="discount-card">
            <div className="discount-header">
              <h3>Upto INR 20,000 Discount</h3>
            </div>
            <div className="discount-body">
              <h4>Merit Scholarship</h4>
              <p className="desc-text">for those who scored</p>
              <div className="percentage">60%</div>
              <p className="desc-text">and above in their pre-qualifying exam</p>
              <p className="small-text">Early bird/group/referral<br />discounts are also available.</p>
            </div>
            <div className="discount-footer">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Apply Now</button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="admission-info-col">
          <h2 className="col-title">Admission Process</h2>
          <p>Financial assistance and Educational Loans from NBFC's and Banks are available with interest rate ranging from 9 to 14%. These financial institutions will allow you to repay the educational loan in easy installments and income tax benefits.</p>
          <p>Avail hassle-free educational loan to help you to join our Master's programs to power up your skills to build your dream career.</p>
        </div>
      </div>
    </section>
  )
}
