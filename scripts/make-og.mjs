import { launch } from 'chrome-launcher';
import CDP from 'chrome-remote-interface';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const file = 'file://' + resolve('scripts/og-template.html');
const chrome = await launch({
  chromePath: '/Applications/Google Chrome2.app/Contents/MacOS/Google Chrome',
  chromeFlags: ['--headless=new', '--no-sandbox', '--allow-file-access-from-files'],
});
const client = await CDP({ port: chrome.port });
const { Page, Emulation } = client;
await Page.enable();
await Emulation.setDeviceMetricsOverride({ width: 1200, height: 630, deviceScaleFactor: 2, mobile: false });
await Page.navigate({ url: file });
await Page.loadEventFired();
await new Promise(r => setTimeout(r, 1200)); // let webfonts settle
const { data } = await Page.captureScreenshot({ format: 'png', captureBeyondViewport: false });
writeFileSync('public/og-default.png', Buffer.from(data, 'base64'));
await client.close(); await chrome.kill();
console.log('wrote public/og-default.png');
