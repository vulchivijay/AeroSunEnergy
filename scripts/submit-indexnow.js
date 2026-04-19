const fs = require('fs');
const path = require('path');

const key = fs.readFileSync(path.join(__dirname, '../public/indexnow-key.txt'), 'utf8').trim();
const host = 'aerosunenergy.in';
const sitemapUrl = `https://${host}/sitemap.xml`;

const data = {
  host,
  key,
  urlList: [sitemapUrl]
};

fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
  .then(res => res.text())
  .then(response => {
    console.log('IndexNow submission response:', response);
  })
  .catch(error => {
    console.error('Error submitting to IndexNow:', error);
  });