import { launch } from 'chrome-launcher';
import CDP from 'chrome-remote-interface';
import { writeFileSync } from 'fs';

const stores = [
  { slug: 'ladakh-berry',  url: 'https://ladakhberry.in' },
  { slug: 'vastramahal',   url: 'https://thevastramahal.in' },
  { slug: 'savana-kurti',  url: 'https://thesavanakurti.com' },
];

const chrome = await launch({
  chromePath: '/Applications/Google Chrome2.app/Contents/MacOS/Google Chrome',
  chromeFlags: ['--headless=new', '--no-sandbox', '--hide-scrollbars'],
});
const client = await CDP({ port: chrome.port });
const { Page, Emulation, Runtime, Network } = client;
await Page.enable(); await Runtime.enable(); await Network.enable();

// Desktop viewport, 4:3 crop of the top of the homepage.
await Emulation.setDeviceMetricsOverride({ width: 1440, height: 1080, deviceScaleFactor: 1, mobile: false });

for (const s of stores) {
  try {
    await Page.navigate({ url: s.url });
    await Page.loadEventFired();
    // let lazy images / hero media settle
    await new Promise(r => setTimeout(r, 5000));
    // dismiss common popups/cookie bars that would ruin the shot
    await Runtime.evaluate({ expression: `
      document.querySelectorAll('[class*="popup"],[class*="modal"],[id*="popup"],[class*="cookie"],[class*="newsletter"]').forEach(e=>{
        const r=e.getBoundingClientRect(); if(r.width>200&&r.height>100) e.style.display='none';
      });
      window.scrollTo(0,0);
    `});
    await new Promise(r => setTimeout(r, 800));
    const { data } = await Page.captureScreenshot({ format: 'png', clip: { x:0, y:0, width:1440, height:1080, scale:1 } });
    writeFileSync(`public/work/${s.slug}.png`, Buffer.from(data, 'base64'));
    console.log(`✓ ${s.slug}  ${s.url}`);
  } catch (e) {
    console.log(`✗ ${s.slug}  ${e.message}`);
  }
}
await client.close(); await chrome.kill();
