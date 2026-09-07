'use client';
import { withBase } from '../../../lib/basePath';

function selectPill(button, groupId) {
  const parent = document.getElementById(groupId);
  if (!parent) return;
  const buttons = parent.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.className = btn.className.replace(
      'bg-primary-container text-on-primary-container shadow-md',
      'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
    );
  });
  button.className = button.className.replace(
    'bg-surface-container-high text-on-surface-variant hover:text-on-surface',
    'bg-primary-container text-on-primary-container shadow-md'
  );
}

function toggleFaq(btn) {
  const container = btn.parentElement;
  const content = container.querySelector('.faq-content');
  const icon = btn.querySelector('.material-symbols-outlined');
  const isHidden = content.classList.contains('hidden');
  if (isHidden) {
    content.classList.remove('hidden');
    icon.classList.add('rotate-180');
  } else {
    content.classList.add('hidden');
    icon.classList.remove('rotate-180');
  }
}

function handleDossierSubmit() {
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitDossierBtn');
  submitBtn.disabled = true;
  submitBtn.classList.add('opacity-75');
  submitBtn.innerHTML = '<span>DISPATCHING DOSSIER...</span>';
  setTimeout(() => {
    submitBtn.innerHTML = '<span>DOSSIER TRANSMITTED ✓</span>';
    submitBtn.classList.remove('bg-primary-container', 'hover:bg-primary');
    submitBtn.classList.add('bg-surface-container-highest', 'text-primary');
    if (feedback) {
      feedback.classList.remove('hidden');
    }
  }, 1000);
}

export default function ContactPage() {
  return (
    <>
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-primary-container/10 blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-secondary-container/15 blur-[160px] pointer-events-none rounded-full"></div>
        <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-space-xl lg:pt-space-3xl pb-space-2xl">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-[1px] bg-primary-container"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary">07 // DIRECT DISPATCH &amp; INQUIRIES</span>
              <span className="inline-flex items-center px-space-xs py-[2px] bg-surface-container-high rounded text-[10px] tracking-widest uppercase text-on-surface-variant">Confidential Dossier</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
              <div className="lg:col-span-8">
                <h1 className="font-headline-lg lg:font-display-hero text-headline-lg lg:text-display-hero text-on-surface uppercase tracking-tight leading-tight">
              INITIATE THE <br className="hidden sm:inline" />
<span className="font-headline-lg lg:font-display-hero text-primary italic font-light lowercase selection:bg-primary selection:text-on-primary">cinematic dialogue.</span>
</h1>
              </div>
              <div className="lg:col-span-4">
                <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
              Every film begins with an intimate conversation. Whether you are orchestrating a multi-day royal palace celebration or an intimate destination vows exchange, our studio concierge and principal directors are at your service.
            </p>
              </div>
            </div>
            <div className="mt-space-md w-full bg-surface-container-low rounded-lg p-space-md shadow-md grid grid-cols-1 md:grid-cols-3 gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">timelapse</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Response Pledge</span>
                  <span className="font-body-md text-body-md text-on-surface font-medium">&lt; 24 Hours Guaranteed</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Studio Headquarters</span>
                  <span className="font-body-md text-body-md text-on-surface font-medium">Balangir, Odisha, India</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Direct Private Line</span>
                  <a className="font-body-md text-body-md text-primary font-medium hover:underline" href="tel:+919827122620">+91 98271 22620</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop pb-space-4xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg lg:p-space-2xl shadow-xl flex flex-col gap-space-xl">
              <div className="flex flex-col gap-space-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">01 // THE INQUIRY DOSSIER</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Season 2025/2026</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Curate Your Heirloom Archive</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Please provide the structural details of your celebration. We accept only 18 cinematic commissions globally per calendar year.</p>
              </div>
              <form className="flex flex-col gap-space-lg" id="inquiryForm" onSubmit={(e) => { e.preventDefault(); handleDossierSubmit(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="partnerOne">Partner One Name *</label>
                    <input className="w-full bg-surface-container-highest/60 text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded px-space-md py-space-sm transition-all focus:outline-none focus:bg-surface-container-highest shadow-inner" id="partnerOne" placeholder="e.g. Maharani Radhika" required type="text" />
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="partnerTwo">Partner Two Name *</label>
                    <input className="w-full bg-surface-container-highest/60 text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded px-space-md py-space-sm transition-all focus:outline-none focus:bg-surface-container-highest shadow-inner" id="partnerTwo" placeholder="e.g. Yuvraj Vikramaditya" required type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="emailAddr">Electronic Mail Address *</label>
                    <input className="w-full bg-surface-container-highest/60 text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded px-space-md py-space-sm transition-all focus:outline-none focus:bg-surface-container-highest shadow-inner" id="emailAddr" placeholder="concierge@estate.com" required type="email" />
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="phoneNum">WhatsApp / Direct Line *</label>
                    <input className="w-full bg-surface-container-highest/60 text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded px-space-md py-space-sm transition-all focus:outline-none focus:bg-surface-container-highest shadow-inner" id="phoneNum" placeholder="+91 00000 00000" required type="tel" />
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Celebration Scope &amp; Typology *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs" id="scopeGroup">
                    <button className="pill-scope py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-surface-container-high text-on-surface-variant hover:text-on-surface" onClick={(e) => { selectPill(e.currentTarget, 'scopeGroup'); }} type="button">
                  Royal Heritage
                </button>
                    <button className="pill-scope py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-primary-container text-on-primary-container shadow-md" onClick={(e) => { selectPill(e.currentTarget, 'scopeGroup'); }} type="button">
                  Multi-Day Grand
                </button>
                    <button className="pill-scope py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-surface-container-high text-on-surface-variant hover:text-on-surface" onClick={(e) => { selectPill(e.currentTarget, 'scopeGroup'); }} type="button">
                  Destination Vows
                </button>
                    <button className="pill-scope py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-surface-container-high text-on-surface-variant hover:text-on-surface" onClick={(e) => { selectPill(e.currentTarget, 'scopeGroup'); }} type="button">
                  Pre-Wed Editorial
                </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="eventDates">Proposed Dates / Calendar Window *</label>
                    <input className="w-full bg-surface-container-highest/60 text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded px-space-md py-space-sm transition-all focus:outline-none focus:bg-surface-container-highest shadow-inner" id="eventDates" placeholder="e.g. Nov 14 - 18, 2025" required type="text" />
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="venueLocation">Celebration Destination / Palace *</label>
                    <input className="w-full bg-surface-container-highest/60 text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded px-space-md py-space-sm transition-all focus:outline-none focus:bg-surface-container-highest shadow-inner" id="venueLocation" placeholder="e.g. The Oberoi Udaivilas, Udaipur" required type="text" />
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Expected Gathering &amp; Cine-Scale</label>
                  <div className="grid grid-cols-3 gap-space-xs" id="gatheringGroup">
                    <button className="pill-scale py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-surface-container-high text-on-surface-variant hover:text-on-surface" onClick={(e) => { selectPill(e.currentTarget, 'gatheringGroup'); }} type="button">
                  50–150 Intimate
                </button>
                    <button className="pill-scale py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-primary-container text-on-primary-container shadow-md" onClick={(e) => { selectPill(e.currentTarget, 'gatheringGroup'); }} type="button">
                  150–500 Grand
                </button>
                    <button className="pill-scale py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-surface-container-high text-on-surface-variant hover:text-on-surface" onClick={(e) => { selectPill(e.currentTarget, 'gatheringGroup'); }} type="button">
                  500+ Regal Estate
                </button>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Estimated Cinematography Investment</label>
                    <span className="font-label-sm text-label-sm text-primary">All-Inclusive Tailored</span>
                  </div>
                  <div className="grid grid-cols-3 gap-space-xs" id="budgetGroup">
                    <button className="pill-budget py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-surface-container-high text-on-surface-variant hover:text-on-surface" onClick={(e) => { selectPill(e.currentTarget, 'budgetGroup'); }} type="button">
                  ₹1.5L – ₹3L
                </button>
                    <button className="pill-budget py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-surface-container-high text-on-surface-variant hover:text-on-surface" onClick={(e) => { selectPill(e.currentTarget, 'budgetGroup'); }} type="button">
                  ₹3L – ₹6L
                </button>
                    <button className="pill-budget py-space-xs px-space-xs rounded font-label-sm text-label-sm uppercase tracking-wider text-center transition-all bg-primary-container text-on-primary-container shadow-md" onClick={(e) => { selectPill(e.currentTarget, 'budgetGroup'); }} type="button">
                  ₹6L+ Haute Couture
                </button>
                  </div>
                </div>
                <div className="flex flex-col gap-space-2xs">
                  <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant" htmlFor="visionNotes">Your Narrative, Visual References &amp; Mood Notes</label>
                  <textarea className="w-full bg-surface-container-highest/60 text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded px-space-md py-space-sm transition-all focus:outline-none focus:bg-surface-container-highest shadow-inner resize-none" id="visionNotes" placeholder="Share your music inclinations, lighting inspirations (e.g. vintage 35mm warmth, chiaroscuro twilight, slow editorial pacing), and any architectural highlights of your venue..." rows="4"></textarea>
                </div>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <button className="w-full py-space-md bg-primary-container hover:bg-primary text-on-primary-container font-label-lg text-label-lg uppercase tracking-[0.2em] rounded shadow-lg transition-all duration-300 flex items-center justify-center gap-space-xs" id="submitDossierBtn" type="submit">
                    <span className="">TRANSMIT INQUIRY DOSSIER</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                  <div className="hidden p-space-sm bg-surface-container-high rounded text-center font-body-sm text-body-sm text-primary" id="formFeedback">
                Dossier received. Our executive concierge will confirm date availability via direct telephone within 24 hours.
              </div>
                  <p className="font-label-sm text-label-sm text-outline text-center tracking-wider">
                COMMISSION AGREEMENTS REMAIN STRICTLY CONFIDENTIAL. NDAS HONORED UPON REQUEST.
              </p>
                </div>
              </form>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">02 // DIRECT DESK &amp; EXECUTIVE DISPATCH</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">videocam</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Abhishek Anand</h3>
                      <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Founder &amp; Principal Director</span>
                    </div>
                  </div>
                  <span className="px-space-xs py-[2px] bg-surface-container rounded font-label-sm text-label-sm text-outline">Priority Desk</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
              For direct high-profile commissions, royal state protocols, confidential NDAs, and bespoke directorial consultations.
            </p>
                <div className="flex items-center justify-between pt-space-2xs">
                  <a className="inline-flex items-center gap-space-xs font-body-md text-body-md text-on-surface hover:text-primary transition-colors" href="tel:+919658621038">
                    <span className="material-symbols-outlined text-[16px] text-primary">phone_iphone</span>
                    <span className="">+91 96586 21038</span>
                  </a>
                  <a className="font-label-sm text-label-sm uppercase tracking-widest text-outline hover:text-primary transition-colors" href="mailto:abhishek@slicexfilms.com">Direct Desk</a>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Studio Concierge</h3>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Date Locking &amp; Logistics Desk</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-center justify-between">
                    <span className="">Studio Hotline:</span>
                    <a className="text-on-surface font-medium hover:text-primary" href="tel:+919827122620">+91 98271 22620</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="">Direct Mailbox:</span>
                    <a className="text-on-surface font-medium hover:text-primary" href="mailto:slicexfilms@gmail.com">slicexfilms@gmail.com</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="">Atelier Archival:</span>
                    <a className="text-on-surface font-medium hover:text-primary" href="mailto:atelier@slicexfilms.com">atelier@slicexfilms.com</a>
                  </div>
                </div>
              </div>
              <a className="group bg-surface-container-high hover:bg-surface-container-highest p-space-md rounded-xl transition-all shadow-lg flex items-center justify-between" href="https://wa.me/919827122620?text=Hello%20SliceX%20Films%20Atelier,%20I%20would%20like%20to%20inquire%20about%20a%20wedding%20cinematography%20commission." rel="noopener" target="_blank">
                <div className="flex items-center gap-space-sm">
                  <div className="w-11 h-11 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors">Instant WhatsApp Concierge</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Live calendar check with producer on duty</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
              </a>
              <div className="relative overflow-hidden rounded-xl bg-surface-container shadow-xl">
                <div className="relative h-64 w-full">
                  <img className="w-full h-full object-cover brightness-90 contrast-105" data-alt="A regal Indian royal wedding couple standing gracefully on an ornate carved sandstone palace balcony at twilight. Golden diya oil lamps illuminate the sandstone balustrades and carved arches in rich chiaroscuro amber lighting. In the backdrop, the monumental Mehrangarh Fort stands majestically under a deep navy dusk sky. The groom wears a rich burgundy embroidered sherwani with antique pearl jewelry and royal turban, while the bride looks down radiant in a heavily embellished zardozi crimson lehenga and vintage gold heritage polki jewels. Analog film grain texture and cinematic atmospheric lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEZBmatjejmS2HHBQTJuri8br0Sept5pZYkr2mQNrFOkYk1RbK7MB7TWtvNXWLxxnTr4yQjA1Wyrb3nSvgMW3m2bq0SUw2vjyumsIJX4CGuj7JA4TAPYhFnUGwcXEsPUoXUZa34w7f1HYFmSi7ywN-ueFgQVszeCnFNXWK0WjX3LF98pRrLnzAAZ_DeqdWMQeHBRiCJ43D3tfcZrSNJj3dcDHdJpqypSIv6zz5-r1KlEM6gjNB_6xRiQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                  <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Commission 042 // RAJASTHAN</span>
                      <p className="font-headline-sm text-headline-sm text-on-surface italic">Maharani Vow Exchange</p>
                    </div>
                    <div className="px-space-xs py-[2px] bg-surface-container-lowest/80 backdrop-blur rounded font-label-sm text-label-sm text-outline">
                  35MM TONE
                </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-center gap-space-xs text-on-surface font-medium">
                  <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                  <span className="">Operating Studio Schedule</span>
                </div>
                <div className="flex justify-between pt-space-2xs">
                  <span className="">Mon – Sat Private Consultations:</span>
                  <span className="text-on-surface">10:00 AM – 8:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Production Transit &amp; Shoot Desk:</span>
                  <span className="text-primary font-medium">24/7 Global Hotline</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop pb-space-4xl" id="location">
          <div className="max-w-7xl mx-auto bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-primary-container/20">
            <div className="lg:col-span-6 p-space-xl lg:p-space-3xl flex flex-col justify-between gap-space-xl">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary">STUDIO LOCATION &amp; MAP</span>
                  <span className="text-outline">•</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest font-mono">VERIFIED ON GOOGLE MAPS</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Experience The Private Screening Room</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We welcome couples and wedding planners to our studio ateliers in Balangir &amp; Rajasthan. Immerse yourself in a calibrated 4K DCI-P3 theatrical projection suite, preview handcrafted heirloom albums, and review uncompressed scores over artisanal pour-over coffee.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md bg-surface-container-high/50 p-space-md rounded-lg border border-primary-container/15">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-1">Studio Address</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-semibold">SliceX Films Studio</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">Main Road, Near College Square, Balangir, Odisha 767001, India</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-1">Appointment Protocol</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-semibold">Direct Consultations</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">Hotline: +91 98271 22620 / +91 96586 21038</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-md pt-2">
                <a 
                  className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary text-surface-container-lowest font-label-md text-label-md uppercase tracking-wider rounded-md font-bold shadow-lg hover:bg-amber-300 transition-all" 
                  href="https://share.google/jmSViIkA3751IqYPo" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">map</span>
                  <span>Open in Google Maps</span>
                </a>
                <span className="font-label-sm text-label-sm text-outline tracking-wider font-mono">LOCATION CODE: jmSViIkA3751IqYPo</span>
              </div>
            </div>

            {/* Right Column: Google Maps Interactive Iframe */}
            <div className="lg:col-span-6 min-h-[420px] relative bg-surface-container-high overflow-hidden">
              <iframe
                title="SliceX Films Google Maps Location"
                src="https://maps.google.com/maps?q=SliceX+Films+Balangir+Odisha&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[420px] border-0 filter grayscale contrast-125 opacity-85 hover:opacity-100 hover:filter-none transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-space-md right-space-md bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-xs rounded shadow-lg flex items-center gap-space-xs border border-primary/30 pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">SLICEX FILMS HQ</span>
              </div>
            </div>
          </div>
        </section>
        {/* Verified Google Reviews & Client Testimonials Section */}
        <section className="w-full px-margin-mobile lg:px-margin-desktop pb-space-4xl" id="reviews">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            {/* Section Header with Overall Google Rating */}
            <div className="bg-surface-container-low rounded-2xl p-space-xl lg:p-space-2xl border border-primary-container/20 flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary font-bold">VERIFIED GOOGLE BUSINESS REVIEWS</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">5.0 Star Client Experiences</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Client testimonials and reviews fetched from our official Google Business profile.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                <div className="flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-xl border border-primary-container/30">
                  <span className="font-display-hero text-headline-lg text-primary font-bold">5.0</span>
                  <div className="flex flex-col">
                    <div className="flex items-center text-amber-400 text-[18px]">
                      ★★★★★
                    </div>
                    <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-wider">100% 5-STAR RATING</span>
                  </div>
                </div>
                
                <a 
                  href="https://share.google/jmSViIkA3751IqYPo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-space-md py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/40 rounded-lg text-[12px] font-mono uppercase tracking-widest transition-all"
                >
                  <span>Write / Read on Google Maps</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* 4 Client Reviews Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              {/* Review 1 */}
              <div className="bg-surface-container-low p-space-xl rounded-xl border border-primary-container/15 flex flex-col justify-between gap-space-md hover:border-primary/40 transition-all shadow-lg">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400 text-[16px]">
                      ★★★★★
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      VERIFIED GOOGLE REVIEW
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                    "Abhishek and the SliceX Films team captured our wedding with such perfection and emotion! The colors, lighting, and sound design were straight out of a Bollywood cinema masterpiece. Highly recommended!"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs border-t border-primary-container/10">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Piyush &amp; Dipti Sahoo</h4>
                    <span className="text-[11px] text-outline font-mono uppercase">Wedding Cinema • Balangir</span>
                  </div>
                  <span className="text-[11px] text-outline font-mono">2 months ago</span>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-surface-container-low p-space-xl rounded-xl border border-primary-container/15 flex flex-col justify-between gap-space-md hover:border-primary/40 transition-all shadow-lg">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400 text-[16px]">
                      ★★★★★
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      VERIFIED GOOGLE REVIEW
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                    "Words cannot describe how happy we are with our wedding film. Every detail from the mandap lighting to the 32-bit audio of our vows was handled with immense care and artistry."
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs border-t border-primary-container/10">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Swarup &amp; Soumya</h4>
                    <span className="text-[11px] text-outline font-mono uppercase">Royal Wedding Film</span>
                  </div>
                  <span className="text-[11px] text-outline font-mono">4 months ago</span>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-surface-container-low p-space-xl rounded-xl border border-primary-container/15 flex flex-col justify-between gap-space-md hover:border-primary/40 transition-all shadow-lg">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400 text-[16px]">
                      ★★★★★
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      VERIFIED GOOGLE REVIEW
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                    "SliceX Films is hands down the best luxury wedding filmmaking team in the region. They were unobtrusive, professional, and delivered our 4K film right on schedule. Pure 5-star experience!"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs border-t border-primary-container/10">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Pratap &amp; Supriya Mohanty</h4>
                    <span className="text-[11px] text-outline font-mono uppercase">Destination Wedding Film</span>
                  </div>
                  <span className="text-[11px] text-outline font-mono">6 months ago</span>
                </div>
              </div>

              {/* Review 4 */}
              <div className="bg-surface-container-low p-space-xl rounded-xl border border-primary-container/15 flex flex-col justify-between gap-space-md hover:border-primary/40 transition-all shadow-lg">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400 text-[16px]">
                      ★★★★★
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      VERIFIED GOOGLE REVIEW
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                    "Our pre-wedding film and main wedding documentary are absolute works of art. Reliving our special day through their lens gives us goosebumps every single time!"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs border-t border-primary-container/10">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Niharika &amp; Chandan</h4>
                    <span className="text-[11px] text-outline font-mono uppercase">Pre-Wedding &amp; Cinema</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop pb-space-4xl">
          <div className="max-w-4xl mx-auto flex flex-col gap-space-xl">
            <div className="text-center flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary">DISPATCH CLARITY</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Addressed Inquiries</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            Essential intelligence regarding commissioning parameters, logistical arrangements, and directorial availability.
          </p>
            </div>
            <div className="flex flex-col gap-space-sm" id="faqAccordion">
              <div className="bg-surface-container-low rounded-lg p-space-md transition-all">
                <button className="w-full flex items-center justify-between text-left group" onClick={(e) => { toggleFaq(e.currentTarget); }} type="button">
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">How far in advance should we reserve our wedding commission?</span>
                  <span className="material-symbols-outlined text-primary transition-transform duration-300 transform rotate-180">expand_more</span>
                </button>
                <div className="faq-content mt-space-sm text-on-surface-variant font-body-md text-body-md leading-relaxed">
              We recommend reaching out 6 to 12 months prior to your celebration dates. To ensure uncompromising dedication to color grading, sound design, and cinematography, SliceX Films strictly limits production to 18 signature commissions worldwide each year.
            </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md transition-all">
                <button className="w-full flex items-center justify-between text-left group" onClick={(e) => { toggleFaq(e.currentTarget); }} type="button">
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Do you travel internationally for destination weddings &amp; elopements?</span>
                  <span className="material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </button>
                <div className="faq-content hidden mt-space-sm text-on-surface-variant font-body-md text-body-md leading-relaxed">
              Yes. Our crew carries global transit permits, carnets for cinema equipment, and DGCA-certified drone piloting credentials. From Lake Como, Tuscany, and the French Riviera to Rajasthan palatial venues and Bali cliff-sides, we handle all equipment freight logistics autonomously.
            </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md transition-all">
                <button className="w-full flex items-center justify-between text-left group" onClick={(e) => { toggleFaq(e.currentTarget); }} type="button">
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Can we schedule a private virtual or in-person screening prior to commitment?</span>
                  <span className="material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </button>
                <div className="faq-content hidden mt-space-sm text-on-surface-variant font-body-md text-body-md leading-relaxed">
              Absolutely. We routinely host 45-minute private screening sessions via video link with uncompressed streaming bitrates, as well as private screenings in our Udaipur Atelier. You will review complete feature films (not just teaser montages) and dialogue directly with Abhishek Anand.
            </div>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md transition-all">
                <button className="w-full flex items-center justify-between text-left group" onClick={(e) => { toggleFaq(e.currentTarget); }} type="button">
                  <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">What is your delivery timeframe and archival format?</span>
                  <span className="material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                </button>
                <div className="faq-content hidden mt-space-sm text-on-surface-variant font-body-md text-body-md leading-relaxed">
              A 60-second teaser reel is delivered within 7 business days following the celebration. The complete bespoke Haute Cinema Feature (15–35 minutes) and Full Documentary Re-cut undergo meticulous color grading and audio mastering, premiering within 10 to 14 weeks via our encrypted Client Portal and master solid-state archival drive.
            </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop pb-space-3xl">
          <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-space-xl lg:p-space-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl">
            <div className="flex flex-col gap-space-2xs text-center md:text-left">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.24em]">Bespoke Commits</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Prefer a Direct Phone Dialogue?</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Connect directly with our Lead Producer for instant date availability check.</p>
            </div>
            <div className="flex items-center gap-space-md flex-wrap justify-center">
              <a className="px-space-lg py-space-sm bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider rounded shadow hover:bg-primary transition-all flex items-center gap-space-xs" href="tel:+919827122620">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span className="">+91 98271 22620</span>
              </a>
              <a className="px-space-lg py-space-sm bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider rounded hover:bg-surface-bright transition-all" href="mailto:slicexfilms@gmail.com">
            Draft Email
          </a>
            </div>
          </div>
        </section>
      </div>
    </div>
    <footer className="w-full bg-surface-container-lowest text-on-surface pt-space-4xl pb-space-2xl">
      <div className="w-full px-margin-mobile lg:px-margin-desktop">
        <div className="pb-space-3xl mb-space-3xl">
          <span className="font-label-sm text-label-sm uppercase text-primary tracking-[0.3em] block mb-space-xs">HAUTE CINEMATOGRAPHY</span>
          <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface mb-space-2xs">SLICEX FILMS</h2>
          <p className="font-headline-sm text-headline-sm italic text-outline font-light">CAPTURE. CREATE. INSPIRE.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-3xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">The Atelier</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Handcrafted heirloom wedding cinema &amp; fine-art photography for extraordinary couples across the globe. Preserving timeless romance through pure chiaroscuro and analog soul.</p>
            <div className="flex items-center gap-space-md pt-space-xs">
              <a aria-label="Instagram" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href="#">Instagram</a>
              <span className="text-outline-variant">/</span>
              <a aria-label="Facebook" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href="#">Facebook</a>
              <span className="text-outline-variant">/</span>
              <a aria-label="YouTube" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href="#">YouTube</a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-space-xs">Navigation Archive</h3>
            <ul className="grid grid-cols-2 gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="home" href={withBase("/")}>Home Archive</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="films" href={withBase("/films/")}>Cinema Collective</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="services" href={withBase("/services/")}>Editorial Offerings</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="portfolio" href={withBase("/portfolio/")}>Featured Exhibitions</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="contact" href={withBase("/contact/")}>Inquire Studio</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="client-portal" href="#">Admin Portal</a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-space-xs">Direct Inquiries</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Private consultations by appointment only.</p>
            <div className="flex flex-col gap-space-2xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
              <a className="hover:text-primary transition-colors" href="tel:+919827122620">+91 98271 22620</a>
              <a className="hover:text-primary transition-colors" href="tel:+919658621038">+91 96586 21038</a>
              <a className="hover:text-primary transition-colors pt-space-2xs text-on-surface" href="mailto:slicexfilms@gmail.com">slicexfilms@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="pt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-outline tracking-widest uppercase">
          <p className="">© 2024 SLICEX FILMS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-primary transition-colors" data-path="privacy-policy" href="#">Privacy Policy</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-primary transition-colors" data-path="terms-of-service" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
