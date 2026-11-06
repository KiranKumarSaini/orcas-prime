/**
 * Copy for the fashion ad landing page, one object per language.
 *
 *   hi  Hinglish (Roman script, "aap")      /fashion     docs/growth/02b
 *   en  English                             /fashion/en
 *   gu  Gujarati (Gujarati script, "તમે")    /fashion/gu
 *
 * All three say the same things: same facts, same numbers, same order.
 * Change a fact in one, change it in all three. Client numbers are not
 * typed here; they come from results.json through the functions below.
 *
 * Gujarati style (2026-11-06): તમે, not આપ (matches Google's Gujarati
 * pages and how traders talk). Brand names and short forms stay in Latin
 * letters (Meta, Shopify, WhatsApp, RTO, COD, GST, P&L). Everyday trade
 * words are written in Gujarati script (ઓર્ડર, સ્ટોર, ડેશબોર્ડ, એડ્સ).
 *
 * Product UI drawn on the page (the "Aaj ka hisaab" phone, the WhatsApp
 * bubbles) is the dashboard itself, so it is the same in every language and
 * lives in the component, not here.
 */

export type Lang = 'hi' | 'en' | 'gu';

export interface LandingCopy {
  lang: Lang;
  htmlLang: string;
  meta: { title: string; description: string };
  ui: { skip: string; waLink: string; waLinkLabel: string; privacy: string; newTab: string };
  waMessage: string;
  cta: string;
  ctaNote: string;
  sample: string;
  hero: { kicker: string; h1: string; h1Em: string; sub: string; chipsLabel: string; profitChip: string };
  team: {
    h2: string;
    meta: { title: string; body: string };
    google: { title: string; body: string };
    tiles: { title: string; body: string }[]; // Shopify, AI photos, AI video, WhatsApp, Instagram, Festive
  };
  problems: { h2: string; nowLabel: string; withLabel: string; items: { now: string; fixTitle: string; fix: string }[] };
  dash: {
    h2: string; lead: string; demoCta: string; tabsLabel: string;
    tabs: { id: string; label: string; desc: string }[];
    chartTitle: string; chartAria: string; profit: string; loss: string;
  };
  reports: {
    h2: string;
    daily: { title: string; body: string };
    weekly: { title: string; body: string };
    call: { title: string; body: string };
    days: string[]; callCell: string;
  };
  ai: {
    eyebrow: string; h2: string; lead: string; sliderAria: string;
    before: string; after: string; thumbsLabel: string; kurti: string; aiSample: string;
  };
  fee: { h2: string; per: string; or: string; fine: string; included: string[]; pills: [string, string] };
  proof: {
    h2: string;
    roasWhat: (spend: string, revenue: string) => string;
    divineWhat: string;
    brands: (n: number) => string;
    brandsWho: string;
    storesLead: string;
  };
  faq: { h2: string; items: { q: string; a: string }[] };
  form: {
    h2: string; name: string; phone: string; link: string; spend: string; bands: string[];
    errName: string; errPhone: string; errLink: string; errSpend: string;
    submit: string; thanks: string; waFallback: string;
    waIntro: string; waLabels: { name: string; whatsapp: string; link: string; spend: string };
  };
}

/* ── Hinglish (live at /fashion) ─────────────────────────────────────── */
const hi: LandingCopy = {
  lang: 'hi',
  htmlLang: 'hi-Latn',
  meta: {
    title: 'Fashion aur ethnic wear brands ke liye: ads, store, RTO aur profit dashboard | Orcas Prime',
    description: 'Meta ads, Shopify store, RTO control aur profit dashboard. Sab ek team ke paas. ₹25,000/mahina + GST ya net sales ka 4%, jo bhi zyada ho. Koi lock-in nahi.',
  },
  ui: { skip: 'Content pe jaayein', waLink: 'WhatsApp', waLinkLabel: 'WhatsApp pe baat karein (naye tab mein khulega)', privacy: 'Privacy policy', newTab: '(naye tab mein khulega)' },
  waMessage: 'Namaste, mujhe apne fashion brand ke liye Orcas Prime ke baare mein jaanna hai.',
  cta: 'Apne brand ke baare mein batayein',
  ctaNote: 'Koi lock-in nahi · Hum har mahine sirf 3 naye brands lete hain',
  sample: 'Sample data',
  hero: {
    kicker: 'Fashion aur ethnic wear brands ke liye',
    h1: 'Meta ads, Shopify store, RTO control aur profit dashboard.',
    h1Em: 'Sab ek team ke paas.',
    sub: 'Hum aapke ads chalate hain, store sambhalte hain, RTO pe control rakhte hain, aur dashboard pe dikhate hain ki asal mein kitna profit hua.',
    chipsLabel: 'Kya kya milta hai',
    profitChip: 'Profit dashboard',
  },
  team: {
    h2: 'Ek team. Poora kaam.',
    meta: { title: 'Meta Ads, poori management', body: 'Campaign structure, audiences, creative testing, budget pacing, Pixel aur CAPI tracking. Har hafte kya badla, uska likha hua log.' },
    google: { title: 'Google Ads', body: 'Search, Shopping, Performance Max aur remarketing. Google Merchant Center pe aapke products ki free listings bhi.' },
    tiles: [
      { title: 'Shopify store', body: 'Store ke roz ke changes aur fixes, fee mein included.' },
      { title: 'AI catalogue photos', body: 'Flat-lay ya hanger photo se model shot, poore catalogue ke liye.' },
      { title: 'AI video ads', body: 'Har mahine 10 tak, fee mein included.' },
      { title: 'WhatsApp automation', body: 'Abandoned cart, order updates, reorder reminders, festival broadcasts.' },
      { title: 'Instagram', body: 'Reels, captions aur posting.' },
      { title: 'Festive calendar', body: 'Diwali, shaadi season, Rakhi, end-of-season sale. Planning 4–6 hafte pehle, creatives ready.' },
    ],
  },
  problems: {
    h2: 'Kya aapka online business aise chalta hai?',
    nowLabel: 'Abhi',
    withLabel: 'Orcas Prime ke saath',
    items: [
      { now: 'Mahine ke end mein bhi pata nahi ki RTO aur returns ke baad profit hua ya loss.', fixTitle: 'Profit dashboard:', fix: 'har din, har hafte, har mahine ka P&L, RTO, shipping aur ad spend ke baad.' },
      { now: 'COD orders dispatch hote hain, aur kai wapas aa jaate hain.', fixTitle: 'RTO control:', fix: 'WhatsApp pe COD confirmation, problem wale pincodes block, prepaid ke liye nudge.' },
      { now: 'NDR wale parcels ka kisi ko pata nahi, customer ko call kisi ne nahi kiya.', fixTitle: 'NDR desk:', fix: 'har NDR parcel ki list, kisko call karna hai, re-attempt kab hai. Sab dashboard pe.' },
      { now: 'Prepaid orders kam, COD zyada.', fixTitle: 'Meta CAPI setup,', fix: 'taaki ads zyada prepaid khareedne wale customers tak pahunchein.' },
      { now: 'Ads pe paisa jaata hai, par kaun sa ad profit de raha hai, pata nahi.', fixTitle: 'Har ad ka faisla:', fix: 'Scale, Keep ya Cut, RTO aur shipping ke baad ke profit pe.' },
      { now: 'Meta wallet khatam, ads band, aur pata baad mein chalta hai.', fixTitle: 'Wallet alert:', fix: 'paisa khatam hone se pehle hi khabar.' },
      { now: 'Ads ek freelancer, photos doosra, website teesra.', fixTitle: 'Ek team, ek fee.', fix: '' },
    ],
  },
  dash: {
    h2: 'Aapka poora business, ek dashboard pe',
    lead: 'Orders, ad spend, RTO aur profit. Ek jagah, live.',
    demoCta: 'Demo dashboard kholiye',
    tabsLabel: 'Dashboard ke screens',
    tabs: [
      { id: 'aaj', label: 'Aaj', desc: 'Aaj ke orders, sales, Meta aur Google spend, cost per order, kitne orders ship hone baaki.' },
      { id: 'pnl', label: 'P&L', desc: 'Din, hafte ya mahine ka P&L, ek click mein Excel.' },
      { id: 'ads', label: 'Ads', desc: 'Campaign se ad tak, har ad pe Scale, Keep ya Cut, asal profit ke hisaab se.' },
      { id: 'rto', label: 'RTO aur NDR', desc: 'COD vs prepaid, courier-wise RTO, risky pincodes, NDR call list.' },
      { id: 'products', label: 'Products', desc: 'Kaun sa product profit de raha hai, kaun sa nahi.' },
    ],
    chartTitle: 'Profit by day',
    chartAria: 'Sample data: 14 din ka profit. 11 din profit mein, 3 din loss mein.',
    profit: 'Profit',
    loss: 'Loss',
  },
  reports: {
    h2: 'Har din aur har hafte, hisaab aapke paas',
    daily: { title: 'Daily summary, WhatsApp, email aur dashboard pe', body: 'Aaj kitne orders aaye, marketing pe kitna kharch hua, cost per purchase (CPP) kitna raha, aur Meta wallet mein kitna paisa bacha.' },
    weekly: { title: 'Weekly report, WhatsApp pe', body: 'Orders, ad spend, RTO, returns, COD, GST, aur aakhir mein kitna profit bacha.' },
    call: { title: 'Har hafte 15 minute ki review call', body: 'Saath mein "kya badla aur kyun" ka likha hua log.' },
    days: ['Som', 'Man', 'Bud', 'Gur', 'Shu', 'Sha', 'Rav'],
    callCell: '15 min',
  },
  ai: {
    eyebrow: 'AI catalogue photos',
    h2: 'Photographer, model, studio ka kharcha nahi',
    lead: 'Aap product ki flat-lay ya hanger photo bhejiye. Model shot hum AI se banate hain, poore catalogue ke liye.',
    sliderAria: 'Hanger photo aur AI model shot ki tulna. Handle ko left ya right le jaayein.',
    before: 'Hanger photo',
    after: 'AI model shot',
    thumbsLabel: 'Kurti chuniye',
    kurti: 'Kurti',
    aiSample: 'AI se bana sample',
  },
  fee: {
    h2: 'Fee',
    per: '/mahina + GST',
    or: 'ya net sales ka 4%, jo bhi zyada ho',
    fine: 'Net sales matlab returns aur RTO ke baad ki sales.',
    included: [
      'Meta aur Google ads management',
      'Shopify store support',
      'Profit dashboard, daily aur weekly summary',
      'RTO, COD aur NDR control',
      'AI catalogue photos aur 10 tak AI video ads',
      'WhatsApp automation, Instagram, festive calendar',
      'Har hafte 15 minute ki review call',
    ],
    pills: ['Koi lock-in nahi', 'Jab chahein band kar sakte hain'],
  },
  proof: {
    h2: 'Yeh brands hamare saath hain',
    roasWhat: (spend, revenue) => `${spend} ke spend pe ${revenue} ki conversion value (lifetime).`,
    divineWhat: '30 din ka revenue.',
    brands: (n) => `${n} brands`,
    brandsWho: 'Shopify aur Flipkart pe',
    storesLead: 'Live stores, jinke saath hum kaam karte hain:',
  },
  faq: {
    h2: 'Aapke sawaal',
    items: [
      { q: 'Ads ka kharcha is fee mein shaamil hai?', a: 'Nahi. Ads ka paisa aap apne Meta aur Google account se seedha dete hain. Hamari fee alag hai.' },
      { q: '4% kis pe lagta hai?', a: 'Net sales pe, yaani returns aur RTO ke baad jo sales bachti hai. Har mahine ₹25,000 ya net sales ka 4%, jo bhi zyada ho, plus GST.' },
      { q: 'Kya aap fashion brands ke saath kaam karte hain?', a: 'Haan. Savana Kurti, Rajvanshi Suit, Vastranama aur Khamma Ghani jaise brands ke store hum sambhalte hain. Links upar diye hain.' },
      { q: 'Kaam pasand na aaye to?', a: 'Jab chahein band kar dijiye. Koi lock-in nahi, koi notice period nahi.' },
      { q: 'Ad account aur store ka access kiske paas rahega?', a: 'Aapke paas. Ads aapke apne account se chalte hain aur store bhi aapka hi rehta hai.' },
      { q: 'GST bill milega?', a: 'Haan, har mahine fee ka GST invoice milta hai.' },
    ],
  },
  form: {
    h2: 'Apne brand ke baare mein batayein',
    name: 'Aapka naam',
    phone: 'WhatsApp number',
    link: 'Store ya Instagram link',
    spend: 'Har mahine ka ad spend',
    bands: ['₹50K se kam', '₹50K–1L', '₹1–3L', '₹3L+'],
    errName: 'Apna naam likhiye.',
    errPhone: '10 digit ka WhatsApp number likhiye.',
    errLink: 'Store ya Instagram ka link likhiye.',
    errSpend: 'Ek option chuniye.',
    submit: 'Application bhejiye',
    thanks: 'Shukriya. Hamari team jaldi aapke WhatsApp pe sampark karegi.',
    waFallback: 'WhatsApp nahi khula? Yahan dabaiye',
    waIntro: 'Namaste, mujhe apne brand ke liye Orcas Prime se baat karni hai.',
    waLabels: { name: 'Naam', whatsapp: 'WhatsApp', link: 'Store / Instagram', spend: 'Har mahine ka ad spend' },
  },
};

/* ── English (/fashion/en) ───────────────────────────────────────────── */
const en: LandingCopy = {
  lang: 'en',
  htmlLang: 'en-IN',
  meta: {
    title: 'Ads, store, RTO and a profit dashboard for fashion brands | Orcas Prime',
    description: 'Meta ads, your Shopify store, RTO control and a profit dashboard, all with one team. ₹25,000/month + GST or 4% of net sales, whichever is higher. No lock-in.',
  },
  ui: { skip: 'Skip to content', waLink: 'WhatsApp', waLinkLabel: 'Chat on WhatsApp (opens in a new tab)', privacy: 'Privacy policy', newTab: '(opens in a new tab)' },
  waMessage: "Hi, I'd like to know more about Orcas Prime for my fashion brand.",
  cta: 'Tell us about your brand',
  ctaNote: 'No lock-in · We take on only 3 new brands a month',
  sample: 'Sample data',
  hero: {
    kicker: 'For fashion and ethnic wear brands',
    h1: 'Meta ads, Shopify store, RTO control and a profit dashboard.',
    h1Em: 'One team for all of it.',
    sub: 'We run your ads, look after your store, keep RTO in check, and show you on a dashboard what you actually made.',
    chipsLabel: 'What you get',
    profitChip: 'Profit dashboard',
  },
  team: {
    h2: 'One team. The whole job.',
    meta: { title: 'Meta Ads, fully managed', body: 'Campaign structure, audiences, creative testing, budget pacing, Pixel and CAPI tracking. A written log of what changed each week.' },
    google: { title: 'Google Ads', body: 'Search, Shopping, Performance Max and remarketing. Plus free listings for your products on Google Merchant Center.' },
    tiles: [
      { title: 'Shopify store', body: 'Day-to-day changes and fixes, included in the fee.' },
      { title: 'AI catalogue photos', body: 'Model shots from flat-lay or hanger photos, for your whole catalogue.' },
      { title: 'AI video ads', body: 'Up to 10 a month, included in the fee.' },
      { title: 'WhatsApp automation', body: 'Abandoned cart, order updates, reorder reminders and festive broadcasts.' },
      { title: 'Instagram', body: 'Reels, captions and posting.' },
      { title: 'Festive calendar', body: 'Diwali, wedding season, Rakhi, end-of-season sale. Planned 4–6 weeks ahead, with creatives ready.' },
    ],
  },
  problems: {
    h2: 'Does your online business run like this?',
    nowLabel: 'Now',
    withLabel: 'With Orcas Prime',
    items: [
      { now: "Even at month end, you don't know whether you made a profit or a loss after RTO and returns.", fixTitle: 'Profit dashboard:', fix: 'daily, weekly and monthly P&L, after RTO, shipping and ad spend.' },
      { now: 'COD orders go out, and many of them come back.', fixTitle: 'RTO control:', fix: 'COD confirmation on WhatsApp, problem pincodes blocked, and nudges to pay prepaid.' },
      { now: 'Nobody tracks NDR parcels, and nobody calls the customer.', fixTitle: 'NDR desk:', fix: 'every NDR parcel listed, who to call, and when the re-attempt is. All on the dashboard.' },
      { now: 'Few prepaid orders, lots of COD.', fixTitle: 'Meta CAPI setup,', fix: 'so your ads reach more customers who pay upfront.' },
      { now: "Money goes into ads, but you can't tell which ad makes a profit.", fixTitle: 'A call on every ad:', fix: 'Scale, Keep or Cut, based on profit after RTO and shipping.' },
      { now: 'Your Meta wallet runs dry, the ads stop, and you find out later.', fixTitle: 'Wallet alert:', fix: 'you hear about it before the money runs out.' },
      { now: 'Ads with one freelancer, photos with another, the website with a third.', fixTitle: 'One team, one fee.', fix: '' },
    ],
  },
  dash: {
    h2: 'Your whole business on one dashboard',
    lead: 'Orders, ad spend, RTO and profit. In one place, live.',
    demoCta: 'Open the demo dashboard',
    tabsLabel: 'Dashboard screens',
    tabs: [
      { id: 'aaj', label: 'Today', desc: "Today's orders, sales, Meta and Google spend, cost per order, and orders still to ship." },
      { id: 'pnl', label: 'P&L', desc: 'P&L by day, week or month, with one-click export to Excel.' },
      { id: 'ads', label: 'Ads', desc: 'From campaign down to each ad, marked Scale, Keep or Cut on real profit.' },
      { id: 'rto', label: 'RTO & NDR', desc: 'COD vs prepaid, RTO by courier, risky pincodes and the NDR call list.' },
      { id: 'products', label: 'Products', desc: "Which products make money, and which don't." },
    ],
    chartTitle: 'Profit by day',
    chartAria: 'Sample data: profit over 14 days. 11 days in profit, 3 days at a loss.',
    profit: 'Profit',
    loss: 'Loss',
  },
  reports: {
    h2: 'Your numbers, every day and every week',
    daily: { title: 'Daily summary on WhatsApp, email and the dashboard', body: "How many orders came in today, what you spent on marketing, your cost per purchase (CPP), and what's left in your Meta wallet." },
    weekly: { title: 'Weekly report on WhatsApp', body: "Orders, ad spend, RTO, returns, COD, GST, and what's left as profit at the end." },
    call: { title: 'A 15-minute review call every week', body: 'With a written log of what we changed and why.' },
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    callCell: '15 min',
  },
  ai: {
    eyebrow: 'AI catalogue photos',
    h2: 'Model shots without a photographer, model or studio',
    lead: 'Send us a flat-lay or hanger photo of the product. We make the model shot with AI, for your whole catalogue.',
    sliderAria: 'Compare the hanger photo with the AI model shot. Move the handle left or right.',
    before: 'Hanger photo',
    after: 'AI model shot',
    thumbsLabel: 'Choose a kurti',
    kurti: 'Kurti',
    aiSample: 'AI-made sample',
  },
  fee: {
    h2: 'Fee',
    per: '/month + GST',
    or: 'or 4% of net sales, whichever is higher',
    fine: 'Net sales means sales after returns and RTO.',
    included: [
      'Meta and Google ads management',
      'Shopify store support',
      'Profit dashboard, daily and weekly summaries',
      'RTO, COD and NDR control',
      'AI catalogue photos and up to 10 AI video ads',
      'WhatsApp automation, Instagram, festive calendar',
      'A 15-minute review call every week',
    ],
    pills: ['No lock-in', 'Stop whenever you like'],
  },
  proof: {
    h2: 'Brands that work with us',
    roasWhat: (spend, revenue) => `${revenue} in conversion value from ${spend} in ad spend (lifetime).`,
    divineWhat: 'Revenue in 30 days.',
    brands: (n) => `${n} brands`,
    brandsWho: 'on Shopify and Flipkart',
    storesLead: 'Live stores we work with:',
  },
  faq: {
    h2: 'Common questions',
    items: [
      { q: 'Is ad spend included in the fee?', a: 'No. You pay for ads directly to Meta and Google from your own account. Our fee is separate.' },
      { q: 'What is the 4% charged on?', a: "On net sales, meaning the sales left after returns and RTO. Each month you pay ₹25,000 or 4% of net sales, whichever is higher, plus GST." },
      { q: 'Do you work with fashion brands?', a: 'Yes. We manage the stores of brands like Savana Kurti, Rajvanshi Suit, Vastranama and Khamma Ghani. Their links are above.' },
      { q: "What if I'm not happy with the work?", a: 'Stop whenever you like. No lock-in, no notice period.' },
      { q: 'Who keeps access to the ad account and the store?', a: 'You do. Ads run from your own accounts, and the store stays yours.' },
      { q: 'Do I get a GST invoice?', a: 'Yes, you get a GST invoice for the fee every month.' },
    ],
  },
  form: {
    h2: 'Tell us about your brand',
    name: 'Your name',
    phone: 'WhatsApp number',
    link: 'Store or Instagram link',
    spend: 'Monthly ad spend',
    bands: ['Under ₹50K', '₹50K–1L', '₹1–3L', '₹3L+'],
    errName: 'Please enter your name.',
    errPhone: 'Please enter a 10-digit WhatsApp number.',
    errLink: 'Please enter your store or Instagram link.',
    errSpend: 'Please choose one.',
    submit: 'Send application',
    thanks: 'Thank you. Our team will reach out on WhatsApp soon.',
    waFallback: "WhatsApp didn't open? Tap here",
    waIntro: "Hi, I'd like to talk to Orcas Prime about my brand.",
    waLabels: { name: 'Name', whatsapp: 'WhatsApp', link: 'Store / Instagram', spend: 'Monthly ad spend' },
  },
};

/* ── Gujarati (/fashion/gu) ──────────────────────────────────────────── */
const gu: LandingCopy = {
  lang: 'gu',
  htmlLang: 'gu',
  meta: {
    title: 'ફેશન અને એથનિક વેર બ્રાન્ડ્સ માટે એડ્સ, સ્ટોર, RTO અને પ્રોફિટ ડેશબોર્ડ | Orcas Prime',
    description: 'Meta Ads, Shopify સ્ટોર, RTO કંટ્રોલ અને પ્રોફિટ ડેશબોર્ડ, બધું એક જ ટીમ પાસે. ₹25,000/મહિને + GST અથવા નેટ સેલ્સના 4%, જે વધારે હોય તે. કોઈ લૉક-ઇન નહીં.',
  },
  ui: { skip: 'કન્ટેન્ટ પર જાઓ', waLink: 'WhatsApp', waLinkLabel: 'WhatsApp પર વાત કરો (નવા ટૅબમાં ખુલશે)', privacy: 'પ્રાઇવસી પૉલિસી', newTab: '(નવા ટૅબમાં ખુલશે)' },
  waMessage: 'નમસ્તે, મારે મારી ફેશન બ્રાન્ડ માટે Orcas Prime વિશે જાણવું છે.',
  cta: 'તમારી બ્રાન્ડ વિશે જણાવો',
  ctaNote: 'કોઈ લૉક-ઇન નહીં · અમે દર મહિને ફક્ત 3 નવી બ્રાન્ડ્સ લઈએ છીએ',
  sample: 'સેમ્પલ ડેટા',
  hero: {
    kicker: 'ફેશન અને એથનિક વેર બ્રાન્ડ્સ માટે',
    h1: 'Meta Ads, Shopify સ્ટોર, RTO કંટ્રોલ અને પ્રોફિટ ડેશબોર્ડ.',
    h1Em: 'બધું એક જ ટીમ પાસે.',
    sub: 'અમે તમારી એડ્સ ચલાવીએ છીએ, સ્ટોર સંભાળીએ છીએ, RTO પર કંટ્રોલ રાખીએ છીએ, અને ડેશબોર્ડ પર બતાવીએ છીએ કે ખરેખર કેટલો નફો થયો.',
    chipsLabel: 'શું શું મળે છે',
    profitChip: 'પ્રોફિટ ડેશબોર્ડ',
  },
  team: {
    h2: 'એક ટીમ. આખું કામ.',
    meta: { title: 'Meta Ads, આખું મેનેજમેન્ટ', body: 'કેમ્પેન સ્ટ્રક્ચર, ઓડિયન્સ, ક્રિએટિવ ટેસ્ટિંગ, બજેટ પેસિંગ, Pixel અને CAPI ટ્રેકિંગ. દર અઠવાડિયે શું બદલ્યું, તેનો લેખિત લૉગ.' },
    google: { title: 'Google Ads', body: 'Search, Shopping, Performance Max અને રીમાર્કેટિંગ. સાથે Google Merchant Center પર તમારી પ્રોડક્ટ્સની ફ્રી લિસ્ટિંગ પણ.' },
    tiles: [
      { title: 'Shopify સ્ટોર', body: 'સ્ટોરના રોજના ફેરફાર અને ફિક્સ, ફીમાં સામેલ.' },
      { title: 'AI કેટલોગ ફોટા', body: 'ફ્લેટ-લે કે હેંગર ફોટામાંથી મોડલ શૉટ, આખા કેટલોગ માટે.' },
      { title: 'AI વિડિયો એડ્સ', body: 'દર મહિને 10 સુધી, ફીમાં સામેલ.' },
      { title: 'WhatsApp ઓટોમેશન', body: 'અધૂરી છોડેલી કાર્ટ, ઓર્ડર અપડેટ, રીઓર્ડર રિમાઇન્ડર અને તહેવારના બ્રોડકાસ્ટ.' },
      { title: 'Instagram', body: 'રીલ્સ, કેપ્શન અને પોસ્ટિંગ.' },
      { title: 'તહેવારનું કેલેન્ડર', body: 'દિવાળી, લગ્નની સીઝન, રક્ષાબંધન, એન્ડ-ઑફ-સીઝન સેલ. 4–6 અઠવાડિયા પહેલાં પ્લાનિંગ, ક્રિએટિવ્સ તૈયાર.' },
    ],
  },
  problems: {
    h2: 'શું તમારો ઓનલાઇન બિઝનેસ આ રીતે ચાલે છે?',
    nowLabel: 'અત્યારે',
    withLabel: 'Orcas Prime સાથે',
    items: [
      { now: 'મહિનાના અંતે પણ ખબર નથી પડતી કે RTO અને રિટર્ન પછી નફો થયો કે નુકસાન.', fixTitle: 'પ્રોફિટ ડેશબોર્ડ:', fix: 'દરરોજ, દર અઠવાડિયે અને દર મહિને RTO, શિપિંગ અને એડ ખર્ચ પછીનો P&L.' },
      { now: 'COD ઓર્ડર ડિસ્પેચ થાય છે, અને ઘણા પાછા આવે છે.', fixTitle: 'RTO કંટ્રોલ:', fix: 'WhatsApp પર COD કન્ફર્મેશન, પ્રોબ્લેમવાળા પિનકોડ બ્લોક, અને પ્રીપેડ માટે રિમાઇન્ડર.' },
      { now: 'NDR વાળા પાર્સલની કોઈને ખબર નથી, ગ્રાહકને કોઈએ ફોન નથી કર્યો.', fixTitle: 'NDR ડેસ્ક:', fix: 'દરેક NDR પાર્સલની યાદી, કોને ફોન કરવાનો છે, રી-એટેમ્પ્ટ ક્યારે છે. બધું ડેશબોર્ડ પર.' },
      { now: 'પ્રીપેડ ઓર્ડર ઓછા, COD વધારે.', fixTitle: 'Meta CAPI સેટઅપ,', fix: 'જેથી એડ્સ પ્રીપેડ ખરીદનારા વધુ ગ્રાહકો સુધી પહોંચે.' },
      { now: 'એડ્સ પાછળ પૈસા જાય છે, પણ કઈ એડ નફો આપે છે તે ખબર નથી.', fixTitle: 'દરેક એડનો નિર્ણય:', fix: 'Scale, Keep કે Cut, RTO અને શિપિંગ પછીના નફાના આધારે.' },
      { now: 'Meta વૉલેટ ખાલી, એડ્સ બંધ, અને ખબર પછી પડે છે.', fixTitle: 'વૉલેટ એલર્ટ:', fix: 'પૈસા પૂરા થાય તે પહેલાં જ જાણ.' },
      { now: 'એડ્સ એક ફ્રીલાન્સર પાસે, ફોટા બીજા પાસે, વેબસાઇટ ત્રીજા પાસે.', fixTitle: 'એક ટીમ, એક ફી.', fix: '' },
    ],
  },
  dash: {
    h2: 'તમારો આખો બિઝનેસ, એક ડેશબોર્ડ પર',
    lead: 'ઓર્ડર, એડ ખર્ચ, RTO અને નફો. એક જગ્યાએ, લાઇવ.',
    demoCta: 'ડેમો ડેશબોર્ડ ખોલો',
    tabsLabel: 'ડેશબોર્ડની સ્ક્રીન',
    tabs: [
      { id: 'aaj', label: 'આજ', desc: 'આજના ઓર્ડર, સેલ્સ, Meta અને Google ખર્ચ, ઓર્ડર દીઠ ખર્ચ, અને કેટલા ઓર્ડર શિપ થવાના બાકી છે.' },
      { id: 'pnl', label: 'P&L', desc: 'દિવસ, અઠવાડિયા કે મહિનાનો P&L, એક ક્લિકમાં Excel.' },
      { id: 'ads', label: 'એડ્સ', desc: 'કેમ્પેનથી લઈને દરેક એડ સુધી, દરેક એડ પર Scale, Keep કે Cut, સાચા નફાના આધારે.' },
      { id: 'rto', label: 'RTO અને NDR', desc: 'COD vs પ્રીપેડ, કુરિયર મુજબ RTO, જોખમી પિનકોડ અને NDR કૉલ લિસ્ટ.' },
      { id: 'products', label: 'પ્રોડક્ટ્સ', desc: 'કઈ પ્રોડક્ટ નફો આપે છે, અને કઈ નહીં.' },
    ],
    chartTitle: 'દરરોજનો નફો',
    chartAria: 'સેમ્પલ ડેટા: 14 દિવસનો નફો. 11 દિવસ નફો, 3 દિવસ નુકસાન.',
    profit: 'નફો',
    loss: 'નુકસાન',
  },
  reports: {
    h2: 'દરરોજ અને દર અઠવાડિયે, હિસાબ તમારી પાસે',
    daily: { title: 'ડેઇલી સમરી, WhatsApp, ઇમેઇલ અને ડેશબોર્ડ પર', body: 'આજે કેટલા ઓર્ડર આવ્યા, માર્કેટિંગ પાછળ કેટલો ખર્ચ થયો, કૉસ્ટ પર પર્ચેઝ (CPP) કેટલો રહ્યો, અને Meta વૉલેટમાં કેટલા પૈસા બાકી છે.' },
    weekly: { title: 'વીકલી રિપોર્ટ, WhatsApp પર', body: 'ઓર્ડર, એડ ખર્ચ, RTO, રિટર્ન, COD, GST, અને છેલ્લે કેટલો નફો બચ્યો.' },
    call: { title: 'દર અઠવાડિયે 15 મિનિટનો રિવ્યૂ કૉલ', body: 'સાથે "શું બદલ્યું અને કેમ" નો લેખિત લૉગ.' },
    days: ['સોમ', 'મંગળ', 'બુધ', 'ગુરુ', 'શુક્ર', 'શનિ', 'રવિ'],
    callCell: '15 મિ.',
  },
  ai: {
    eyebrow: 'AI કેટલોગ ફોટા',
    h2: 'ફોટોગ્રાફર, મોડલ કે સ્ટુડિયોના ખર્ચ વગર',
    lead: 'તમે પ્રોડક્ટનો ફ્લેટ-લે કે હેંગર ફોટો મોકલો. મોડલ શૉટ અમે AI થી બનાવીએ છીએ, આખા કેટલોગ માટે.',
    sliderAria: 'હેંગર ફોટો અને AI મોડલ શૉટની સરખામણી. હેન્ડલને ડાબે કે જમણે ખસેડો.',
    before: 'હેંગર ફોટો',
    after: 'AI મોડલ શૉટ',
    thumbsLabel: 'કુર્તી પસંદ કરો',
    kurti: 'કુર્તી',
    aiSample: 'AI થી બનાવેલ સેમ્પલ',
  },
  fee: {
    h2: 'ફી',
    per: '/મહિને + GST',
    or: 'અથવા નેટ સેલ્સના 4%, જે વધારે હોય તે',
    fine: 'નેટ સેલ્સ એટલે રિટર્ન અને RTO પછીનું સેલ્સ.',
    included: [
      'Meta અને Google એડ્સ મેનેજમેન્ટ',
      'Shopify સ્ટોર સપોર્ટ',
      'પ્રોફિટ ડેશબોર્ડ, ડેઇલી અને વીકલી સમરી',
      'RTO, COD અને NDR કંટ્રોલ',
      'AI કેટલોગ ફોટા અને 10 સુધી AI વિડિયો એડ્સ',
      'WhatsApp ઓટોમેશન, Instagram, તહેવારનું કેલેન્ડર',
      'દર અઠવાડિયે 15 મિનિટનો રિવ્યૂ કૉલ',
    ],
    pills: ['કોઈ લૉક-ઇન નહીં', 'જ્યારે ઇચ્છો ત્યારે બંધ કરી શકો'],
  },
  proof: {
    h2: 'આ બ્રાન્ડ્સ અમારી સાથે છે',
    roasWhat: (spend, revenue) => `${spend} ના એડ ખર્ચ પર ${revenue} ની કન્વર્ઝન વેલ્યૂ (લાઇફટાઇમ).`,
    divineWhat: '30 દિવસની આવક.',
    brands: (n) => `${n} બ્રાન્ડ્સ`,
    brandsWho: 'Shopify અને Flipkart પર',
    storesLead: 'લાઇવ સ્ટોર્સ, જેની સાથે અમે કામ કરીએ છીએ:',
  },
  faq: {
    h2: 'તમારા સવાલ',
    items: [
      { q: 'શું એડ્સનો ખર્ચ આ ફીમાં સામેલ છે?', a: 'ના. એડ્સના પૈસા તમે તમારા Meta અને Google એકાઉન્ટમાંથી સીધા ચૂકવો છો. અમારી ફી અલગ છે.' },
      { q: '4% શેના પર લાગે છે?', a: 'નેટ સેલ્સ પર, એટલે કે રિટર્ન અને RTO પછી જે સેલ્સ બચે તેના પર. દર મહિને ₹25,000 અથવા નેટ સેલ્સના 4%, જે વધારે હોય તે, વત્તા GST.' },
      { q: 'શું તમે ફેશન બ્રાન્ડ્સ સાથે કામ કરો છો?', a: 'હા. Savana Kurti, Rajvanshi Suit, Vastranama અને Khamma Ghani જેવી બ્રાન્ડ્સના સ્ટોર અમે સંભાળીએ છીએ. તેમની લિંક ઉપર આપેલી છે.' },
      { q: 'કામ પસંદ ન આવે તો?', a: 'જ્યારે ઇચ્છો ત્યારે બંધ કરી દો. કોઈ લૉક-ઇન નહીં, કોઈ નોટિસ પિરિયડ નહીં.' },
      { q: 'એડ એકાઉન્ટ અને સ્ટોરનો એક્સેસ કોની પાસે રહેશે?', a: 'તમારી પાસે. એડ્સ તમારા પોતાના એકાઉન્ટથી ચાલે છે અને સ્ટોર પણ તમારો જ રહે છે.' },
      { q: 'GST બિલ મળશે?', a: 'હા, દર મહિને ફીનું GST ઇન્વૉઇસ મળે છે.' },
    ],
  },
  form: {
    h2: 'તમારી બ્રાન્ડ વિશે જણાવો',
    name: 'તમારું નામ',
    phone: 'WhatsApp નંબર',
    link: 'સ્ટોર કે Instagram લિંક',
    spend: 'દર મહિને એડ ખર્ચ',
    bands: ['₹50K થી ઓછું', '₹50K–1L', '₹1–3L', '₹3L+'],
    errName: 'તમારું નામ લખો.',
    errPhone: '10 આંકડાનો WhatsApp નંબર લખો.',
    errLink: 'સ્ટોર કે Instagram ની લિંક લખો.',
    errSpend: 'એક વિકલ્પ પસંદ કરો.',
    submit: 'અરજી મોકલો',
    thanks: 'આભાર. અમારી ટીમ ટૂંક સમયમાં તમારા WhatsApp પર સંપર્ક કરશે.',
    waFallback: 'WhatsApp ના ખૂલ્યું? અહીં દબાવો',
    waIntro: 'નમસ્તે, મારે મારી બ્રાન્ડ માટે Orcas Prime સાથે વાત કરવી છે.',
    waLabels: { name: 'નામ', whatsapp: 'WhatsApp', link: 'સ્ટોર / Instagram', spend: 'દર મહિને એડ ખર્ચ' },
  },
};

export const fashionCopy: Record<Lang, LandingCopy> = { hi, en, gu };
