const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'App.css');

const fluidCss = `
/* --- GLOBAL FLUID SCALING (100% Zoom Fix) --- */
@media (max-width: 1700px) {
  /* Header Adjustments */
  .main-logo { 
    height: clamp(50px, 5vw, 75px); 
    margin-left: clamp(10px, 2vw, 40px); 
  }
  .header-right-section { 
    margin-right: clamp(10px, 2vw, 48px); 
    gap: 12px;
  }
  .consultation-btn { 
    font-size: clamp(14px, 1.2vw, 19px); 
    width: auto; 
    padding: 8px 16px; 
    margin-top: 12px;
  }
  .main-nav a { 
    font-size: clamp(14px, 1.1vw, 18px); 
    gap: 4px; 
  }
  .main-nav ul { 
    gap: clamp(4px, 0.8vw, 10px); 
    flex-wrap: nowrap;
    white-space: nowrap;
  }
  
  /* Hero Adjustments */
  .hero-title { 
    font-size: clamp(40px, 5.5vw, 94px); 
    margin-bottom: 8px;
  }
  .hero-subtitle { 
    font-size: clamp(18px, 1.8vw, 26px); 
    margin-bottom: 8px;
  }
  .hero-desc { 
    font-size: clamp(16px, 1.4vw, 20px); 
    max-width: 100%;
  }
  .limited-seats { 
    font-size: clamp(18px, 1.6vw, 25px); 
  }
  .apply-now-btn { 
    font-size: clamp(16px, 1.4vw, 20px); 
    width: clamp(280px, 25vw, 380px);
    padding: 12px 20px;
  }
  .hero-text-col {
    padding: 24px clamp(20px, 4vw, 108px) 0px clamp(20px, 4vw, 108px);
  }
  
  /* Floating Elements */
  .floating-whatsapp, .floating-chatbot {
    width: clamp(45px, 4vw, 60px);
    height: clamp(45px, 4vw, 60px);
  }
  
  /* Other Global Adjustments */
  .stat-value {
    font-size: clamp(40px, 4vw, 66px);
  }
  .stat-label {
    font-size: clamp(16px, 1.5vw, 24px);
  }
  .stats-row {
    margin-left: clamp(20px, 5vw, 264px);
    margin-right: clamp(20px, 5vw, 12px);
  }
  .outcome-program {
    font-size: clamp(24px, 2.5vw, 38px);
  }
  .section-title {
    font-size: clamp(32px, 4vw, 60px);
  }
}
`;

if (fs.existsSync(cssPath)) {
  fs.appendFileSync(cssPath, '\n' + fluidCss);
  console.log('Appended fluid CSS to App.css');
} else {
  console.log('App.css not found');
}
