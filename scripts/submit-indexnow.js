const fs = require('fs');
const path = require('path');

const host = 'aerosunenergy.in';
const sitemapUrl = `https://${host}/sitemap.xml`;

async function submitIndexNow() {
  const keyPath = path.join(__dirname, '../public/indexnow-key.txt');

  if (!fs.existsSync(keyPath)) {
    return {
      status: 'skipped',
      details: `Missing IndexNow key file at ${keyPath}`,
    };
  }

  const key = fs.readFileSync(keyPath, 'utf8').trim();
  const payload = {
    host,
    key,
    urlList: [sitemapUrl],
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const body = (await response.text()).trim();

  return {
    status: response.ok ? 'success' : 'failed',
    details: body || `${response.status} ${response.statusText}`,
  };
}

async function checkGoogleIndex() {
  const apiKey = process.env.GOOGLE_CUSTOM_SEARCH_API_KEY;
  const searchEngineId = process.env.GOOGLE_CUSTOM_SEARCH_CX;

  if (!apiKey || !searchEngineId) {
    return {
      status: 'skipped',
      details:
        'Set GOOGLE_CUSTOM_SEARCH_API_KEY and GOOGLE_CUSTOM_SEARCH_CX to enable Google index verification.',
    };
  }

  const query = encodeURIComponent(`site:${host}`);
  const endpoint = `https://www.googleapis.com/customsearch/v1?key=${encodeURIComponent(apiKey)}&cx=${encodeURIComponent(searchEngineId)}&q=${query}&num=10`;

  const response = await fetch(endpoint, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || `${response.status} ${response.statusText}`;

    return {
      status: 'failed',
      details: message,
    };
  }

  const items = Array.isArray(data.items) ? data.items : [];
  const indexed = items.some((item) => typeof item.link === 'string' && item.link.includes(host));
  const topMatch = items.find((item) => typeof item.link === 'string' && item.link.includes(host));

  return {
    status: indexed ? 'success' : 'failed',
    details: indexed
      ? `Indexed in Google Custom Search (${items.length} result${items.length === 1 ? '' : 's'}). Top match: ${topMatch.link}`
      : 'No indexed result found for the site query in Google Custom Search.',
  };
}

function printResult(label, result) {
  const prefix = result.status === 'success'
    ? '[ok]'
    : result.status === 'skipped'
      ? '[skip]'
      : '[fail]';

  console.log(`${prefix} ${label}: ${result.details}`);
}

async function main() {
  console.log('Post-build SEO checks');

  const indexNowResult = await submitIndexNow().catch((error) => ({
    status: 'failed',
    details: error instanceof Error ? error.message : String(error),
  }));
  printResult('IndexNow', indexNowResult);

  const googleResult = await checkGoogleIndex().catch((error) => ({
    status: 'failed',
    details: error instanceof Error ? error.message : String(error),
  }));
  printResult('Google index', googleResult);

  const summary = [indexNowResult, googleResult];
  const hasFailure = summary.some((result) => result.status === 'failed');

  console.log(hasFailure ? 'Build finished with SEO check failures.' : 'Build finished with SEO checks complete.');

  if (hasFailure) {
    process.exitCode = 1;
  }
}

main();