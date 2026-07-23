import React, { useState } from 'react';
import './CertifiedAgenticAI.css';

interface Props {
  setCurrentView: (view: string) => void;
}

const CertifiedAgenticAI: React.FC<Props> = ({ setCurrentView }) => {
  const [activeModule, setActiveModule] = useState<number | null>(1);
  const [isEmiModalOpen, setIsEmiModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const toggleModule = (moduleNumber: number) => {
    setActiveModule(activeModule === moduleNumber ? null : moduleNumber);
  };

  return (
    <div className="caae-page">
      {/* Breadcrumb */}
      <div className="caae-breadcrumb">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Home</a> &gt; <span>Certified Agentic AI Engineer (CAAE)</span>
      </div>

      {/* Hero Section */}
      <section className="caae-hero">
        <div className="caae-hero-content-wrapper">
          <div className="caae-hero-left">
            <div className="caae-hero-text-box">
              <div className="caae-badge">
                <svg viewBox="0 0 100 100" width="140" height="140">
                  <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#f37021" strokeWidth="3" strokeDasharray="4 4" />
                  <text x="50" y="45" textAnchor="middle" fill="#f37021" fontSize="16" fontWeight="bold">CAAE</text>
                  <text x="50" y="65" textAnchor="middle" fill="#cbd5e1" fontSize="8">CERTIFIED</text>
                </svg>
              </div>
              <div className="caae-titles">
                <h3>Executive Programme In</h3>
                <h1>Certified Agentic<br />AI Engineer</h1>
                <p>Build, Automate & Deploy Autonomous AI Agents<br />for Enterprise Systems</p>
                <button className="caae-btn-primary" onClick={() => setIsFormModalOpen(true)}>Download Brochure</button>
              </div>
            </div>
          </div>
          
          <div className="caae-hero-right">
            <div className="caae-form-container">
              <h3>Get Program Information</h3>
              <p>Please enter your details to receive the program brochure.</p>
              <form className="caae-form">
                <input type="text" placeholder="Enter Name *" required />
                <input type="email" placeholder="Enter Email Address *" required />
                <div className="caae-form-phone">
                  <span className="country-code">+91 ▼</span>
                  <input type="tel" placeholder="Enter Mobile Number *" required />
                </div>
                <select defaultValue="" required>
                  <option value="" disabled>Work Experience *</option>
                  <option value="0-2">0-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
                <input type="text" placeholder="Enter Job Title" />
                <input type="text" placeholder="Enter Organization's Name" />
                <div className="caae-captcha-row">
                  <div className="caae-captcha-img">289451</div>
                  <input type="text" placeholder="Enter Captcha *" required />
                </div>
                <button type="submit" className="caae-submit-btn">APPLY NOW</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="caae-info-bar">
        <div className="caae-info-item">
          <h4>START DATE</h4>
          <strong>25 July 2026</strong>
          <span>Enrolment open now</span>
        </div>
        <div className="caae-info-item">
          <h4>DURATION</h4>
          <strong>~ 60 Hours</strong>
          <span>Intensive Training</span>
        </div>
        <div className="caae-info-item">
          <h4>MODE</h4>
          <strong>Hybrid Mode</strong>
          <span>Online & Offline</span>
        </div>
        <div className="caae-info-item">
          <h4>PROGRAMME FEE</h4>
          <strong>EMI from ₹5,525/month</strong>
          <span>₹50,000 + GST</span>
          <button className="caae-emi-btn" onClick={() => setIsEmiModalOpen(true)}>View EMI Plans</button>
        </div>
      </div>

      {/* Program Overview */}
      <section className="caae-overview">
        <h2>Program Overview</h2>
        <p>The Certified Agentic AI Engineer program empowers IT professionals, software engineers, and cloud specialists to design, train, and deploy intelligent agents that can reason, plan, and act autonomously.</p>
        <p>Through a 60-hour blend of lectures, labs, and real-world projects, participants master LLM-driven agents, multi-agent collaboration, and enterprise-scale deployment — all while building a portfolio of job-ready projects.</p>
      </section>

      {/* Learning Format & Key Features */}
      <div className="caae-features-row">
        <div className="caae-feature-card learning-format-card">
          <h3>Learning Format</h3>
          <ul>
            <li>Sundays — 9:30 AM to 1:30 PM (4 hours)</li>
            <li>Duration — 12 Sundays</li>
            <li>Campus Sessions — Last 2 Saturdays</li>
            <li>Capstone Bootcamp — On-campus intensive</li>
            <li>Final Certifications — Conducted at campus</li>
          </ul>
        </div>
        <div className="caae-feature-card key-features-card">
          <h3>Key Features</h3>
          <ul>
            <li>Access to LLM-based labs</li>
            <li>Multi-Cloud Agent Deployment Training</li>
            <li>Resume & Interview Support for AI Careers</li>
            <li>Mentorship from Industry Experts</li>
          </ul>
        </div>
      </div>

      {/* Why Choose CAAE */}
      <section className="caae-why">
        <h2>Why Choose CAAE Program?</h2>
        <p>The most comprehensive Agentic AI certification program with real-world project experience</p>
        <div className="caae-why-grid">
          <div className="caae-why-card">
            <span className="caae-why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="14" r="2"></circle>
                <path d="M12 11v1"></path>
                <path d="M12 16v1"></path>
              </svg>
            </span>
            <h4>100% Project-Based<br />Learning</h4>
            <p>Build real-world agents: IT support bots, DevOps assistants, knowledge agents, and more</p>
          </div>
          <div className="caae-why-card">
            <span className="caae-why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </span>
            <h4>Hands-On Enterprise<br />Labs</h4>
            <p>Work with LangChain, CrewAI, AutoGen, LangGraph on production-ready architectures</p>
          </div>
          <div className="caae-why-card">
            <span className="caae-why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"></path>
              </svg>
            </span>
            <h4>Multi-Cloud<br />Deployment</h4>
            <p>Master deployment on AWS, Azure, and GCP with CI/CD and serverless hosting</p>
          </div>
          <div className="caae-why-card">
            <span className="caae-why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f37021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 17l-5.6-5.6a2.83 2.83 0 0 1 4-4l2.1 2.1"></path>
                <path d="M13 7l5.6 5.6a2.83 2.83 0 0 1-4 4L12.5 14.5"></path>
                <path d="M10 13l4-4"></path>
                <path d="M8 15l4-4"></path>
              </svg>
            </span>
            <h4>Industry Expert<br />Mentorship</h4>
            <p>Learn from seasoned professionals with 25+ years of AI implementation experience</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="caae-testimonials">
        <h2>Hear From Our Certified Agentic AI Engineers</h2>
        <div className="caae-test-grid">
          <div className="caae-test-card">
            <div className="caae-test-video">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Testimonial 1" />
              <div className="caae-play-btn" onClick={() => window.open('https://youtube.com', '_blank')}>▶</div>
            </div>
            <div className="caae-test-content">
              <span className="caae-batch-tag">CAAE - Batch I</span>
              <h4>DriveLegally: Building an AI Traffic Challan Verifier with LangGraph & Gemini</h4>
              <div className="caae-author-group">
                <div className="author">Lokesh Chikkala</div>
                <div className="role">Sr. Solution Architect, Xformics</div>
              </div>
              <div className="caae-author-group">
                <div className="author">Pramod Krishnamurthy</div>
                <div className="role">Project Lead, Persistent Systems</div>
              </div>
            </div>
          </div>
          <div className="caae-test-card">
            <div className="caae-test-video">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="Testimonial 2" />
              <div className="caae-play-btn" onClick={() => window.open('https://youtube.com', '_blank')}>▶</div>
            </div>
            <div className="caae-test-content">
              <span className="caae-batch-tag">CAAE - Batch I</span>
              <h4>Redefining the Enterprise Stack: From LLMs to Autonomous Agents</h4>
              <div className="caae-author-group">
                <div className="author">Purvesh Tejani</div>
                <div className="role">Director, UPQOR</div>
              </div>
            </div>
          </div>
          <div className="caae-test-card">
            <div className="caae-test-video">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" alt="Testimonial 3" />
              <div className="caae-play-btn" onClick={() => window.open('https://youtube.com', '_blank')}>▶</div>
            </div>
            <div className="caae-test-content">
              <span className="caae-batch-tag">CAAE - Batch I</span>
              <h4>How a Dell Tech Leader Cut Through the AI Hype | Alumni Testimonial</h4>
              <div className="caae-author-group">
                <div className="author">Sumithra S</div>
                <div className="role">Strategic IT Leader, Dell Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="caae-modules">
        <h2>12 Comprehensive Modules</h2>
        <p>A structured journey from foundational concepts to advanced multi-agent enterprise deployments.</p>
        
        <div className="caae-accordion">
          {[
            { 
              id: 1, 
              title: 'Module 1: Foundations of Agentic AI', 
              hours: '5 Hours', 
              content: 'Explore the evolution from rule-based AI to autonomous, self-improving systems. Learn the key principles that power Agentic AI — perception, reasoning, and autonomy.',
              details: {
                outcomes: [
                  'Define AGENTIC AI and differentiate it from traditional AI and automation.',
                  'Explain the enterprise, societal, and ethical implications of autonomous systems.',
                  'Identify emerging use cases and trends in agentic AI for IT, automation, and business intelligence.'
                ],
                contents: [
                  'Evolution of AI: From rule-based to generative to agentic systems',
                  'Core principles: autonomy, reasoning, perception, adaptability',
                  'Agent lifecycle: sensing, thinking, acting, reflecting',
                  'Industry trends: AI copilots, self-improving workflows, AI orchestration'
                ],
                tools: 'Conceptual exploration, OpenAI Playground, visualisation tools (Draw.io, Miro)',
                lab: 'Build a simple "decision agent" simulation that reacts to user input and environment conditions.'
              }
            },
            { 
              id: 2, 
              title: 'Module 2: Python Essentials for Agentic AI', 
              hours: '4 Hours', 
              content: 'Strengthen the foundation in Python for AI: libraries like LangChain, OpenAI, and AutoGen; JSON handling; and API scripting to build agent workflows.',
              details: {
                outcomes: [
                  'Understand Python data structures critical for agent memory',
                  'Handle JSON/YAML for agent configuration and data parsing',
                  'Write API scripts to seamlessly connect LLMs to external services'
                ],
                contents: [
                  'Python Basics Refresher for AI',
                  'Working with JSON, YAML & External APIs',
                  'Introduction to LangChain & OpenAI SDKs',
                  'Building a simple script-based agent'
                ],
                tools: 'Python, Jupyter Notebooks, Postman',
                lab: 'Create a Python script that uses the OpenAI API to answer questions based on a provided JSON dataset.'
              }
            },
            { 
              id: 3, 
              title: 'Module 3: Agent Architectures', 
              hours: '5 Hours', 
              content: 'Understand symbolic, cognitive, LLM-based, Belief-Desire-Intention (BDI), and hybrid architectures that underpin agent design.',
              details: {
                outcomes: [
                  'Differentiate between various historical and modern agent architectures',
                  'Understand Belief-Desire-Intention (BDI) and cognitive models',
                  'Design a robust hybrid architecture for a specific enterprise use case'
                ],
                contents: [
                  'Symbolic vs Cognitive Architectures',
                  'LLM-based Agent Design Patterns',
                  'BDI Frameworks in modern AI',
                  'Evaluating architecture trade-offs and scalability'
                ],
                tools: 'Architecture Diagramming Tools (Lucidchart, Excalidraw), Python',
                lab: 'Design and diagram an end-to-end architecture for a customer support AI agent.'
              }
            },
            { 
              id: 4, 
              title: 'Module 4: Reasoning, Planning, and Memory', 
              hours: '4 Hours', 
              content: 'Learn how agents think — from task decomposition and goal planning to contextual memory and reflection. Implement reasoning pipelines using LLMs.',
              details: {
                outcomes: [
                  'Implement complex task decomposition using LLM reasoning',
                  'Build functional memory modules (short-term & long-term)',
                  'Create reasoning pipelines (ReAct, Chain of Thought) for complex tasks'
                ],
                contents: [
                  'Task Decomposition Techniques (Tree of Thoughts)',
                  'Goal Planning & Sequential Execution',
                  'Contextual Memory & Agent Reflection',
                  'Implementing RAG (Retrieval-Augmented Generation) for Agents'
                ],
                tools: 'LangChain, Vector Databases (Pinecone/ChromaDB)',
                lab: 'Build an agent that remembers user preferences across multiple conversational interactions.'
              }
            },
            { 
              id: 5, 
              title: 'Module 5: Multi-Agent Systems Communication', 
              hours: '4 Hours', 
              content: 'Learn how multiple agents communicate, negotiate, and collaborate to complete complex distributed tasks efficiently.',
              details: {
                outcomes: [
                  'Understand the core principles of multi-agent communication',
                  'Design negotiation protocols between distinct autonomous agents',
                  'Manage and orchestrate distributed tasks effectively'
                ],
                contents: [
                  'Multi-Agent Communication Protocols',
                  'Agent Negotiation & Strategic Collaboration',
                  'Distributed Task Allocation and Load Balancing',
                  'Conflict Resolution in Multi-Agent Systems'
                ],
                tools: 'Python, WebSockets, specialized communication protocols',
                lab: 'Simulate a structured debate between two agents with distinct, conflicting personas.'
              }
            },
            { 
              id: 6, 
              title: 'Module 6: Building Multi-Agent Systems', 
              hours: '6 Hours', 
              content: 'Architecting systems where multiple specialized agents collaborate, debate, and solve complex problems (e.g., AutoGen, CrewAI).',
              details: {
                outcomes: [
                  'Architect a multi-agent system utilizing the AutoGen framework',
                  'Implement CrewAI for complex, role-based workflows',
                  'Evaluate the performance and efficiency of collaborative agents'
                ],
                contents: [
                  'AutoGen Framework Deep Dive',
                  'CrewAI Framework Overview and Roles',
                  'Solving Complex Enterprise Problems with Multiple Agents',
                  'Debugging and Tracing Multi-Agent Systems'
                ],
                tools: 'AutoGen, CrewAI, Python',
                lab: 'Build a multi-agent software factory where one agent writes code, another tests it, and a third reviews it.'
              }
            },
            { 
              id: 7, 
              title: 'Module 7: Reasoning, Planning & Decision Making', 
              hours: '5 Hours', 
              content: 'Advanced cognitive architectures for agents to handle ambiguity, create execution plans, and recover from errors.',
              details: {
                outcomes: [
                  'Apply advanced cognitive architectures to real-world scenarios',
                  'Train agents to handle ambiguity and incomplete information gracefully',
                  'Implement autonomous error recovery and fallback mechanisms'
                ],
                contents: [
                  'Advanced Cognitive Architectures (LangGraph)',
                  'Decision Making under Uncertainty',
                  'Error Detection, Handling, & Self-Correction',
                  'Dynamic Replanning during Execution'
                ],
                tools: 'LangGraph, Custom Python Logic, LLM APIs',
                lab: 'Create an agent that can dynamically adjust its execution plan when an external API call fails.'
              }
            },
            { 
              id: 8, 
              title: 'Module 8: Evaluation & Benchmarking Agentic Systems', 
              hours: '4 Hours', 
              content: 'Methods to test agent reliability, handle hallucinations, and measure performance against specific enterprise metrics.',
              details: {
                outcomes: [
                  'Define comprehensive metrics for agent performance evaluation',
                  'Design methodologies to test agent reliability and robustness',
                  'Measure, detect, and actively mitigate LLM hallucinations'
                ],
                contents: [
                  'Agent Evaluation Metrics (Accuracy, Latency, Coherence)',
                  'Reliability Testing Methodologies & CI/CD for Agents',
                  'Hallucination Mitigation Techniques',
                  'Enterprise Performance Benchmarking'
                ],
                tools: 'LangSmith, TruLens, Ragas',
                lab: 'Evaluate a RAG-based agent using TruLens, analyze the results, and improve the prompt based on metrics.'
              }
            },
            { 
              id: 9, 
              title: 'Module 9: Security, Ethics & Guardrails', 
              hours: '4 Hours', 
              content: 'Implementing safety protocols, preventing prompt injection, and ensuring compliance in automated systems.',
              details: {
                outcomes: [
                  'Identify critical security vulnerabilities in agentic systems',
                  'Implement robust guardrails against prompt injection and jailbreaking',
                  'Ensure ethical AI behavior and regulatory compliance'
                ],
                contents: [
                  'Security Threats in Agentic AI (Data Exfiltration, Prompt Injection)',
                  'Defending against Prompt Injection & Jailbreaking',
                  'Implementing Safety Guardrails (NeMo)',
                  'Ethical Considerations, Bias, & Compliance (GDPR, AI Act)'
                ],
                tools: 'NeMo Guardrails, Promptfoo, OWASP Top 10 for LLMs',
                lab: 'Implement a strict guardrail system to prevent a customer-facing agent from answering sensitive or out-of-bounds questions.'
              }
            },
            { 
              id: 10, 
              title: 'Module 10: Deploying Agents to Production', 
              hours: '5 Hours', 
              content: 'Containerization, serverless deployment, monitoring, and scaling agentic systems in AWS/Azure environments.',
              details: {
                outcomes: [
                  'Containerize complex agentic applications for deployment',
                  'Deploy agents utilizing scalable serverless architectures',
                  'Implement monitoring, logging, and scaling for agentic systems'
                ],
                contents: [
                  'Containerization with Docker & Podman',
                  'Serverless Deployment Strategies (AWS Lambda, Azure Functions)',
                  'Monitoring Agent Performance and Costs in Production',
                  'Scaling Strategies and Load Balancing for LLM API limits'
                ],
                tools: 'Docker, AWS/Azure, Prometheus, Grafana',
                lab: 'Containerize a previously built LangChain agent and deploy it to a cloud platform.'
              }
            },
            { 
              id: 11, 
              title: 'Module 11: Enterprise Use Cases Deep Dive', 
              hours: '4 Hours', 
              content: 'Analysis of successful agentic implementations in Finance, Healthcare, Customer Support, and Software Engineering.',
              details: {
                outcomes: [
                  'Analyze successful, high-impact agentic implementations across industries',
                  'Identify high-ROI opportunities for agentic automation in your organization',
                  'Formulate comprehensive business proposals for agentic projects'
                ],
                contents: [
                  'Deep Dive: Agentic AI in Finance (Fraud Detection, Trading)',
                  'Deep Dive: Agentic AI in Healthcare (Diagnostics, Admin)',
                  'Deep Dive: Agentic AI in Customer Support (Autonomous Resolution)',
                  'Deep Dive: Agentic AI in Software Engineering (Auto-coding, QA)'
                ],
                tools: 'Case Studies, ROI Calculators, Architecture Blueprints',
                lab: 'Develop a detailed technical and business proposal for an agentic AI project tailored to your chosen industry.'
              }
            },
            { 
              id: 12, 
              title: 'Module 12: Capstone Project Execution', 
              hours: '6 Hours', 
              content: 'End-to-end development, deployment, and presentation of a custom agentic solution solving a specific business problem.',
              details: {
                outcomes: [
                  'Design, develop, and test an end-to-end agentic solution',
                  'Integrate various agentic components, APIs, and databases',
                  'Present a complete, functional business solution to stakeholders'
                ],
                contents: [
                  'Project Ideation & Architectural Planning',
                  'Iterative Development & Integration',
                  'Rigorous Testing & Refinement',
                  'Final Presentation, Demo & Peer Review'
                ],
                tools: 'All tools, frameworks, and cloud platforms learned in the course',
                lab: 'Complete and present your comprehensive Capstone Project.'
              }
            }
          ].map(module => (
            <div className="caae-acc-item" key={module.id}>
              <div 
                className="caae-acc-header"
                onClick={() => toggleModule(module.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="caae-acc-title">
                  <h4>{module.title}</h4>
                  <span className="caae-hrs-tag">{module.hours}</span>
                </div>
                <span className="caae-acc-arrow">{activeModule === module.id ? '▴' : '▼'}</span>
              </div>
              <div className="caae-acc-content">
                {module.content}
                
                {activeModule === module.id && module.details && (
                  <div className="caae-acc-details">
                    <div className="caae-acc-details-grid">
                      <div className="caae-acc-details-box">
                        <h5>Learning outcomes:</h5>
                        <ul>
                          {module.details.outcomes.map((outcome, idx) => (
                            <li key={idx}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="caae-acc-details-box">
                        <h5>Key Contents:</h5>
                        <ul>
                          {module.details.contents.map((content, idx) => (
                            <li key={idx}>{content}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="caae-acc-details-box full-width">
                      <p><strong>Key Tools:</strong> {module.details.tools}</p>
                      <p><strong>Hands-On Lab:</strong> {module.details.lab}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="caae-outcomes">
        <h2>Career Outcomes</h2>
        <p>Earn the CAAE Certification — a globally recognized credential validating your readiness for next-gen AI careers</p>
        <div className="caae-out-grid">
          <div className="caae-out-card">
            <h4>AI Automation Engineer</h4>
            <p>Design and implement autonomous systems for enterprise workflows</p>
          </div>
          <div className="caae-out-card">
            <h4>Enterprise AI Consultant</h4>
            <p>Advise organizations on AI transformation</p>
          </div>
          <div className="caae-out-card">
            <h4>Cloud AI Integrator</h4>
            <p>Deploy AI agents on AWS, Azure, and GCP platforms</p>
          </div>
          <div className="caae-out-card">
            <h4>Solutions Architect</h4>
            <p>Design enterprise-scale agentic AI solutions</p>
          </div>
          <div className="caae-out-card">
            <h4>Agentic AI Developer</h4>
            <p>Build multi-agent systems and intelligent automation solutions</p>
          </div>
          <div className="caae-out-card">
            <h4>DevOps AI Specialist</h4>
            <p>Automate DevOps workflows with intelligent agents</p>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="caae-benefits">
        <h2>Additional Benefits</h2>
        <div className="caae-benefits-row">
          <div className="caae-benefit-item">
            <h4>Digital Certificate</h4>
            <p>Verifiable CAAE credential from REVA University</p>
          </div>
          <div className="caae-benefit-item">
            <h4>LinkedIn Badge</h4>
            <p>Display your achievement to your network</p>
          </div>
          <div className="caae-benefit-item">
            <h4>Portfolio Projects</h4>
            <p>Deployable solutions for job applications</p>
          </div>
        </div>
      </section>

      {/* Industry-Standard Tools */}
      <section className="caae-tools">
        <h2>Industry-Standard Tools</h2>
        <p>Master the technologies shaping the future of AI</p>
        <div className="caae-tools-grid">
          {/* Row 1 */}
          <div className="caae-tool-card stack">
            <span className="caae-tool-emoji">🦜🔗</span>
            <span className="caae-tool-name">LangChain</span>
          </div>
          <div className="caae-tool-card center">
            <span className="caae-tool-name" style={{fontFamily: 'cursive', fontSize: '24px', fontStyle: 'italic', fontWeight: 'bold'}}>crew<span style={{color: '#ef4444'}}>ai</span></span>
          </div>
          <div className="caae-tool-card center">
            <span className="caae-tool-name" style={{fontWeight: 900, fontSize: '20px', letterSpacing: '1px'}}>AUTOGEN</span>
          </div>
          <div className="caae-tool-card stack">
            <span className="caae-tool-emoji" style={{color: '#10b981'}}>🦜🕸️</span>
            <span className="caae-tool-name">LangGraph</span>
          </div>
          <div className="caae-tool-card row">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2057 5.9847 5.9847 0 0 0 3.989-2.9001 6.051 6.051 0 0 0-.7388-7.0731zM13.2599 22.5002c-1.2215 0-2.352-.456-3.2138-1.2189l.0616-.0355 4.3598-2.5158a.9082.9082 0 0 0 .4537-.7852V9.5968l2.0433 1.1798v6.6215c0 2.8273-2.2894 5.1021-5.7046 5.1021zm-6.2415-2.6105c-.6122-1.053-.6122-2.3168 0-3.3698l4.3598 2.5158v2.8532l-2.0433 1.1798-3.1979-1.8465a4.5504 4.5504 0 0 1-2.2895-3.9635c0-1.0483.2798-2.0526.7925-2.889l2.421 1.3976-.0426.1224zM2.8598 9.5968c0-1.2215.456-2.352 1.2189-3.2138l.0355.0616 2.5158 4.3598a.9082.9082 0 0 0 .7852.4537h8.348l-1.1798 2.0433H7.9621c-2.8273 0-5.1023-2.2894-5.1023-5.7046zm12.0292-4.1485l-4.3598-2.5158V.0793l2.0433-1.1798 3.1979 1.8465a4.5504 4.5504 0 0 1 2.2895 3.9635c0 1.0483-.2798 2.0526-.7925 2.889l-2.421-1.3976.0426-.1224zm3.0125 5.5183c.6122 1.053.6122 2.3168 0 3.3698l-4.3598-2.5158v-2.8532l2.0433-1.1798 3.1979 1.8465a4.5504 4.5504 0 0 1 2.2895 3.9635c0 1.0483-.2798 2.0526-.7925 2.889l-2.421-1.3976.0426-.1224zM7.9621 1.4998c1.2215 0 2.352.456 3.2138 1.2189l-.0616.0355-4.3598 2.5158a.9082.9082 0 0 0-.4537.7852v8.348l-2.0433-1.1798V6.602c0-2.8273 2.2894-5.1022 5.7046-5.1022zM12 14.5002a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
            <span className="caae-tool-name">OpenAI</span>
          </div>
          <div className="caae-tool-card row">
            <span className="caae-tool-emoji">🌲</span>
            <span className="caae-tool-name">Pinecone</span>
          </div>
          
          {/* Row 2 */}
          <div className="caae-tool-card row">
            <span className="caae-tool-emoji" style={{letterSpacing: '-5px'}}>🟡🔴🔵</span>
            <span className="caae-tool-name" style={{marginLeft: '10px'}}>Chroma</span>
          </div>
          <div className="caae-tool-card row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" alt="Streamlit" className="caae-tool-img" />
            <span className="caae-tool-name">Streamlit</span>
          </div>
          <div className="caae-tool-card row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="caae-tool-img" />
            <span className="caae-tool-name">FastAPI</span>
          </div>
          <div className="caae-tool-card center">
            <span className="caae-tool-name" style={{fontSize: '18px', fontWeight: 800, lineHeight: 1.1}}>Amazon<br/>Bedrock</span>
          </div>
          <div className="caae-tool-card row">
            <span className="caae-tool-emoji" style={{color: '#0ea5e9', fontWeight: 900, marginRight: '5px'}}>A</span>
            <span className="caae-tool-name">OpenAI</span>
          </div>
          <div className="caae-tool-card row">
            <span className="caae-tool-emoji">🤗</span>
            <span className="caae-tool-name">Hugging Face</span>
          </div>
        </div>
      </section>

      {/* Meet Your Expert Mentors */}
      <section className="caae-mentors">
        <h2>Meet Your Expert Mentors</h2>
        <p>Learn from industry thought leaders with decades of experience in AI and ML</p>
        <div className="caae-mentors-grid">
          <div className="caae-mentor-card">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Dr. J. B. Simha" className="caae-mentor-img" />
            <h4>Dr. J. B. Simha</h4>
            <p className="caae-mentor-role">Chief AI officer, AdoptAI Tech<br/>Chief Mentor in AI at RACE</p>
            <p className="caae-mentor-desc">Thought leader with 25+ years in AI, PhD and Post Doc in AI. Former Siemens and Abiba Systems. Consults on AI implementations and product development across various organizations.</p>
          </div>
          <div className="caae-mentor-card">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Ratnakar Pandey" className="caae-mentor-img" />
            <h4>Ratnakar Pandey</h4>
            <p className="caae-mentor-role">Chief Data Scientist, Granicus<br/>Mentor, RACE</p>
            <p className="caae-mentor-desc">15+ years of experience across Tech, BFSI, FinTech, and Retail in the US &amp; India. Led 50+ professionals and delivered high-impact ML and analytics solutions.</p>
          </div>
          <div className="caae-mentor-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Pradeepta Mishra" className="caae-mentor-img" />
            <h4>Pradeepta Mishra</h4>
            <p className="caae-mentor-role">VP, AI Innovation, Beghou<br/>Mentor, RACE</p>
            <p className="caae-mentor-desc">18 years of experience leading Data Scientists and ML experts. Expertise in Image Processing, Audio Processing, NLP, NLG and expert systems design and implementation.</p>
          </div>
          <div className="caae-mentor-card">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Dr. Shinu Abhi" className="caae-mentor-img" />
            <h4>Dr. Shinu Abhi</h4>
            <p className="caae-mentor-role">Director, Corporate Training<br/>RACE, REVA University</p>
            <p className="caae-mentor-desc">Fullbright fellow, certified Entrepreneurship Educator. 20+ years in industry and academia. PhD in Strategy and Entrepreneurship, expertise in designing corporate training programs.</p>
          </div>
        </div>
      </section>

      {/* Sample Certificate */}
      <section className="caae-certificate">
        <h2>Sample Certificate of Achievement</h2>
        <p>Upon successful completion of the program and final capstone project, you will receive a globally recognized certificate issued by REVA Academy for Corporate Excellence (RACE), REVA University.</p>
        <p>This certificate not only validates your technical competencies in Agentic Artificial Intelligence but also enhances your professional credibility.</p>
        <div className="caae-cert-image-container">
          <img src="https://race.reva.edu.in/wp-content/uploads/CAAE-Sample-Certificate.png" alt="Sample Certificate" />
        </div>
        <p className="caae-cert-caption">Click on the certificate to view full size</p>
      </section>

      {/* CTA Section */}
      <section className="caae-cta">
        <span className="caae-cta-pill">Batch Starts Soon</span>
        <h2>Ready to Master Agentic AI?</h2>
        <p className="subtitle-1">Join 500+ professionals building enterprise-grade AI agents. Limited seats available for the next cohort.</p>
        <p className="subtitle-2">Investment: ₹5,525/month | Duration: 7 Saturdays | 100% Job-Ready Projects</p>
        
        <div className="caae-cta-buttons">
          <button className="caae-btn-primary" onClick={() => setIsFormModalOpen(true)}>Apply Now - Secure Your Spot</button>
          <button className="caae-btn-secondary" onClick={(e) => { e.preventDefault(); setCurrentView('consultation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Schedule a Demo</button>
        </div>

        <div className="caae-cta-stats">
          <div className="caae-stat-item">
            <div className="caae-stat-label">Program Duration</div>
            <div className="caae-stat-value">~60 Hours</div>
          </div>
          <div className="caae-stat-item">
            <div className="caae-stat-label">Format</div>
            <div className="caae-stat-value">Online + Campus</div>
          </div>
          <div className="caae-stat-item">
            <div className="caae-stat-label">Get Certified As</div>
            <div className="caae-stat-value">Certified Agentic AI Engineer<br/>(CAAE)</div>
          </div>
        </div>
      </section>

      {isEmiModalOpen && (
        <div className="caae-emi-modal-overlay">
          <div className="caae-emi-modal">
            <button className="caae-emi-modal-close" onClick={() => setIsEmiModalOpen(false)}>✕</button>
            <div className="caae-emi-modal-content">
              <p className="caae-emi-loan-amount">Loan Amount: <span>₹ 60,000</span></p>
              
              <div className="caae-emi-table-container">
                <div className="caae-emi-table-header">
                  <h4>Monthly Installment</h4>
                </div>
                <table className="caae-emi-table">
                  <thead>
                    <tr>
                      <th>Installment</th>
                      <th style={{textAlign: 'right'}}>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12 Month EMI</td>
                      <td style={{textAlign: 'right', color: '#ea580c', fontWeight: 'bold'}}>₹5,525</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="caae-emi-note">
                <strong>Note:</strong>
                <ol>
                  <li>A processing fee is applicable on EMI plans.</li>
                  <li>EMI amounts are subject to change based on document verification.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {isFormModalOpen && (
        <div className="caae-form-modal-overlay">
          <div className="caae-form-modal">
            <button className="caae-form-modal-close" onClick={() => setIsFormModalOpen(false)}>✕</button>
            <div className="caae-form-container" style={{boxShadow: 'none', padding: 0}}>
              <h3>Get Program Information</h3>
              <p>Fill out the form below and we'll send you detailed program information.</p>
              <form className="caae-form">
                <input type="text" placeholder="Enter Name *" required />
                <input type="email" placeholder="Enter Email Address *" required />
                <div className="caae-form-phone">
                  <span className="country-code">+91 ▼</span>
                  <input type="tel" placeholder="Enter Mobile Number *" required />
                </div>
                <select defaultValue="" required>
                  <option value="" disabled>Work Experience *</option>
                  <option value="0-2">0-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
                <input type="text" placeholder="Enter Job Title" />
                <input type="text" placeholder="Enter Organization's Name" />
                <div className="caae-captcha-row">
                  <div className="caae-captcha-img">b02d15 <span style={{fontSize: '14px', cursor: 'pointer', marginLeft: '8px'}}>↻</span></div>
                  <input type="text" placeholder="Enter Captcha" required />
                </div>
                <button type="submit" className="caae-submit-btn">APPLY NOW</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertifiedAgenticAI;
