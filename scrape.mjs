import * as cheerio from 'cheerio';
import fs from 'fs';

async function scrapeData() {
  try {
    const url = 'https://race.reva.edu.in/pg-diploma-msc-in-business-analytics/';
    console.log(`Fetching data from ${url}...`);
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    let content = `Title: ${$('title').text().trim()}\n\n`;
    
    $('h1, h2, h3, h4, p, li').each((i, el) => {
      const text = $(el).text().replace(/\s+/g, ' ').trim();
      if (text.length > 0) {
        content += `${text}\n`;
      }
    });

    fs.writeFileSync('scraped_reva_data.txt', content);
    console.log('Successfully scraped data and saved to scraped_reva_data.txt');
  } catch (error) {
    console.error('Error scraping data:', error.message);
  }
}

scrapeData();
