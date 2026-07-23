const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const cssAdditions = {
  'App.css': `
/* --- RESPONSIVE APP --- */
@media (max-width: 1024px) {
  .brochure-top-bar, .top-bar { padding: 12px 5%; font-size: 15px; }
  .header-wrapper, .main-header { padding: 0 5%; }
  .main-nav ul { gap: 12px; }
  .main-nav a { font-size: 16px; }
  .hero-title { font-size: 60px; }
  .stats-row { margin-left: 0; margin-right: 0; justify-content: center; gap: 24px; flex-wrap: wrap; }
  .outcome-card { margin: 0 5%; flex-direction: column; }
  .finest-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .masonry-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .footer-columns { margin-right: 0; flex-wrap: wrap; gap: 40px; }
  .wpcal-widget { flex-direction: column; }
  .wpcal-left, .wpcal-right, .wpcal-time, .wpcal-form-view { padding: 30px; }
}

@media (max-width: 768px) {
  .brochure-top-bar { flex-direction: column; text-align: center; gap: 10px; padding: 15px 5%; }
  .top-bar { flex-direction: column; height: auto; gap: 15px; padding: 15px 5%; text-align: center; }
  .top-bar-left { flex-direction: column; gap: 12px; align-items: center; }
  .header-actions { flex-direction: column; width: 100%; align-items: stretch; margin-top: 15px; }
  .consultation-btn { width: 100%; margin-top: 10px; justify-content: center; }
  .main-header { flex-direction: column; padding: 20px 5%; gap: 20px; align-items: center; }
  .main-logo { margin-left: 0; height: 50px; }
  .main-nav ul { flex-wrap: wrap; justify-content: center; gap: 15px; }
  
  .hero-content { flex-direction: column; height: auto; padding-top: 40px; align-items: center; }
  .hero-text-col { padding: 20px 5%; align-items: center; text-align: center; }
  .hero-title { font-size: 40px; }
  .hero-subtitle { font-size: 20px; }
  .apply-now-btn { width: 100%; justify-content: center; gap: 10px; font-size: 18px; }
  .hero-thumbnails { flex-direction: column; margin-top: 40px; gap: 20px; }
  .thumb-item { height: auto; border-radius: 8px; overflow: hidden; }
  
  .programs-grid { grid-template-columns: 1fr; gap: 30px; }
  .stat-item { width: 48%; padding: 20px 10px; }
  .stat-value { font-size: 48px; }
  .outcome-left, .outcome-right { padding: 30px; }
  .finest-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
  .masonry-grid { grid-template-columns: 1fr; gap: 20px; }
  .next-gen-cards { flex-direction: column; align-items: center; gap: 24px; }
  .next-gen-card { max-width: 100%; width: 100%; }
  
  .footer-columns { flex-direction: column; gap: 40px; text-align: center; align-items: center; }
  .footer-col ul { text-align: center; width: 100%; }
  .footer-col ul li { margin-right: 0; }
  .social-links-grid { grid-template-columns: repeat(3, 1fr); justify-content: center; margin: 0 auto; max-width: 300px; }
  .copyright-container { flex-direction: column; margin-left: 0; gap: 15px; text-align: center; }
  .back-to-top { margin-left: 0; margin-top: 20px; }
  .partners-marquee-container { gap: 15px; }
  .partner-logo { height: 70px; width: 160px; padding: 10px; }
  
  .chart-row { flex-direction: column; align-items: flex-start; gap: 10px; padding: 20px; }
  .bar-container { width: 100%; margin: 10px 0; }
  .chart-value { align-self: flex-end; }
  .career-starts-section p { margin-left: 0; margin-right: 0; padding: 0 5%; font-size: 18px; }
  .career-actions { flex-direction: column; padding: 0 5%; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 32px; }
  .stat-item { width: 100%; }
  .finest-grid { grid-template-columns: 1fr; gap: 20px; }
  .btn-primary, .btn-secondary { min-width: 100%; width: 100%; }
  .j-stat-number { font-size: 36px; }
  .social-links-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 200px; }
  .outcome-tags { flex-direction: column; align-items: center; }
  .tag-orange { text-align: center; width: 100%; }
  .program-card { height: auto; min-height: 500px; }
}
`,
  'pages/About.css': `
/* --- RESPONSIVE ABOUT --- */
@media (max-width: 1024px) {
  .about-hero { flex-direction: column; padding: 60px 5%; text-align: center; gap: 40px; }
  .hero-left, .hero-right { max-width: 100%; justify-content: center; }
  .hero-title { font-size: 40px; margin: 0 auto 20px; }
  .hero-desc { margin: 0 auto 30px; }
  
  .stats-box-full { grid-template-columns: repeat(3, 1fr); gap: 30px; padding: 30px; margin: 0 5%; max-width: 90%; }
  .j-stat { border-right: none; border-bottom: 1px solid #eee; padding: 20px 0; height: auto; }
  .j-stat:last-child { border-bottom: none; }
  
  .about-grid { grid-template-columns: 1fr; gap: 40px; padding: 0 5%; }
}

@media (max-width: 768px) {
  .stats-box-full { grid-template-columns: repeat(2, 1fr); }
  .hero-title { font-size: 32px; }
  .about-grid { gap: 30px; }
}

@media (max-width: 480px) {
  .stats-box-full { grid-template-columns: 1fr; gap: 15px; }
  .j-stat { border-bottom: 1px solid #eee; padding: 15px 0; }
  .hero-desc { font-size: 16px; }
}
`,
  'pages/BusinessAnalytics.css': `
/* --- RESPONSIVE BA --- */
@media (max-width: 1024px) {
  .ba-hero-content-wrapper { flex-direction: column; align-items: center; gap: 40px; padding: 40px 0; }
  .ba-hero-left, .ba-hero-right { width: 100%; max-width: 100%; }
  .ba-hero-text { flex-direction: column; text-align: center; margin: 0 auto; max-width: 90%; }
  .ba-hero-titles h1 { font-size: 48px; margin-bottom: 20px; }
  
  .curriculum-grid, .ba-benefits-grid, .ba-career-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; padding: 0 5%; }
  .ba-program-features { flex-direction: column; padding: 0 5%; gap: 30px; }
  
  .ba-feature-card { height: auto; min-height: 200px; }
}

@media (max-width: 768px) {
  .curriculum-grid, .ba-benefits-grid, .ba-career-grid { grid-template-columns: 1fr; gap: 20px; }
  .ba-hero-titles h1 { font-size: 36px; }
  .ba-hero-text { padding: 30px 20px; }
  .ba-btn-primary { width: 100%; }
  .ba-stats-row { flex-direction: column; gap: 20px; }
  
  .ba-stat-item { width: 100%; border-right: none; border-bottom: 1px solid #eee; padding: 20px 0; }
  .ba-stat-item:last-child { border-bottom: none; }
  .ba-lead-form { max-width: 90%; margin: 0 auto; }
}

@media (max-width: 480px) {
  .ba-hero-titles h1 { font-size: 32px; }
}
`,
  'pages/CertifiedAgenticAI.css': `
/* --- RESPONSIVE AI --- */
@media (max-width: 1024px) {
  .ai-hero-content-wrapper { flex-direction: column; align-items: center; gap: 40px; padding: 40px 5%; }
  .ai-hero-left, .ai-hero-right { width: 100%; max-width: 100%; text-align: center; align-items: center; }
  .ai-hero-title { font-size: 48px; }
  
  .ai-modules-grid, .ai-benefits-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; padding: 0 5%; }
  .ai-stats-row { flex-wrap: wrap; justify-content: center; gap: 20px; }
  .ai-stat-box { width: 45%; }
}

@media (max-width: 768px) {
  .ai-hero-title { font-size: 36px; }
  .ai-modules-grid, .ai-benefits-grid { grid-template-columns: 1fr; gap: 20px; }
  .ai-stat-box { width: 100%; flex-direction: column; padding: 20px; }
  .ai-btn-primary { width: 100%; }
  .ai-lead-form { max-width: 100%; }
}
`,
  'pages/Consulting.css': `
/* --- RESPONSIVE CONSULTING --- */
@media (max-width: 1024px) {
  .consulting-hero-wrapper, .consulting-hero { flex-direction: column; align-items: center; padding: 40px 5%; gap: 40px; }
  .consulting-hero-left, .consulting-hero-right { width: 100%; max-width: 100%; text-align: center; }
  .consulting-grid, .services-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; padding: 0 5%; }
  .consulting-hero-title, .hero-title { font-size: 48px; }
}

@media (max-width: 768px) {
  .consulting-grid, .services-grid { grid-template-columns: 1fr; gap: 20px; }
  .consulting-hero-title, .hero-title { font-size: 36px; }
  .consulting-hero-left { padding: 20px 0; }
  .consulting-btn { width: 100%; }
}
`,
  'pages/ContactUs.css': `
/* --- RESPONSIVE CONTACT --- */
@media (max-width: 1024px) {
  .contact-wrapper, .contact-container { flex-direction: column; gap: 40px; padding: 40px 5%; }
  .contact-info, .contact-form-section, .contact-form { width: 100%; max-width: 100%; }
}

@media (max-width: 768px) {
  .contact-info { padding: 30px 20px; text-align: center; }
  .contact-info-item { flex-direction: column; align-items: center; text-align: center; }
  .contact-form-section { padding: 30px 20px; }
  .contact-submit-btn, .submit-btn { width: 100%; }
}
`,
  'pages/Meetup.css': `
/* --- RESPONSIVE MEETUP --- */
@media (max-width: 1024px) {
  .meetup-hero-container, .meetup-hero { flex-direction: column; align-items: center; gap: 40px; padding: 40px 5%; }
  .meetup-left, .meetup-right, .hero-left, .hero-right { width: 100%; max-width: 100%; text-align: center; }
  .meetup-speakers-grid, .speakers-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; padding: 0 5%; }
  .meetup-title, .hero-title { font-size: 48px; }
}

@media (max-width: 768px) {
  .meetup-speakers-grid, .speakers-grid { grid-template-columns: 1fr; gap: 20px; }
  .meetup-schedule-row, .schedule-row { flex-direction: column; gap: 15px; padding: 20px; text-align: center; }
  .meetup-time, .schedule-time { width: 100%; border-right: none; border-bottom: 2px solid #eee; padding-bottom: 10px; }
  .meetup-title, .hero-title { font-size: 36px; }
  .meetup-btn, .btn-primary { width: 100%; }
}
`,
  'pages/Mentors.css': `
/* --- RESPONSIVE MENTORS --- */
@media (max-width: 1024px) {
  .mentors-hero, .mentors-header { padding: 50px 5%; text-align: center; }
  .mentors-hero h1, .mentors-header h1 { font-size: 48px; }
  .mentors-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; padding: 0 5%; }
}

@media (max-width: 768px) {
  .mentors-hero h1, .mentors-header h1 { font-size: 36px; }
  .mentors-grid { grid-template-columns: 1fr; gap: 20px; }
  .mentor-card { flex-direction: column; text-align: center; }
  .mentor-card-img { width: 100%; height: 250px; }
}
`,
  'pages/RaceLabs.css': `
/* --- RESPONSIVE LABS --- */
@media (max-width: 1024px) {
  .labs-hero, .racelabs-hero { flex-direction: column; text-align: center; padding: 50px 5%; gap: 40px; }
  .labs-hero-left, .labs-hero-right, .hero-left, .hero-right { width: 100%; max-width: 100%; align-items: center; }
  .labs-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; padding: 0 5%; }
  .labs-title, .hero-title { font-size: 48px; }
}

@media (max-width: 768px) {
  .labs-grid { grid-template-columns: 1fr; gap: 20px; }
  .labs-title, .hero-title { font-size: 36px; }
  .lab-card { padding: 30px 20px; }
}
`
};

for (const [file, additions] of Object.entries(cssAdditions)) {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    fs.appendFileSync(filePath, '\n' + additions);
    console.log('Appended to', filePath);
  } else {
    console.log('File not found', filePath);
  }
}
