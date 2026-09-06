'use client';

function selectPkgTab(btn, key) {
  document.querySelectorAll('.pkg-tab-btn').forEach((b) => {
    b.className =
      'pkg-tab-btn px-space-md py-space-xs rounded-full border border-outline-variant text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors';
  });
  btn.className =
    'pkg-tab-btn px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest font-semibold transition-colors';
  document.querySelectorAll('.pkg-panel').forEach((p) => {
    if (p.getAttribute('data-panel') === key) {
      p.classList.remove('hidden');
    } else {
      p.classList.add('hidden');
    }
  });
}

export default function BookYourDatePage() {
  return (
    <>
    <div className="flex flex-col w-full">
      <div className="relative w-full px-margin-mobile lg:px-margin-desktop py-space-xl lg:py-space-3xl overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="pointer-events-none absolute bottom-1/3 -left-32 w-80 h-80 rounded-full bg-secondary-container/10 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md mb-space-2xl">
          <div className="flex flex-wrap items-center gap-space-sm text-outline">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">RESERVATION PROTOCOL // WORLDWIDE COMMISSIONS 2025–2026</span>
            <span className="text-outline-variant">•</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">ANALOG SOUL &amp; CHIAROSCURO</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display-hero text-display-hero uppercase tracking-tight text-on-surface leading-tight">
            SECURE YOUR <span className="text-primary-container italic font-serif">CINEMATIC DATE.</span>
</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-sm">
            We accept a strictly limited number of commissions per season to ensure unwavering director involvement, bespoke analog color grading, and intimate heirloom storytelling for every couple.
          </p>
            </div>
            <div className="lg:col-span-4 bg-surface-container-low/80 backdrop-blur-md p-space-md rounded-lg shadow-xl relative">
              <div className="flex items-center justify-between gap-space-xs mb-space-xs">
                <div className="flex items-center gap-space-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">CALENDAR TELEMETRY</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">2025–2026</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden my-space-xs">
                <div className="bg-gradient-to-r from-primary via-primary-container to-secondary h-full rounded-full" style={{ width: "78%" }}></div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
<span className="text-on-surface font-semibold">78% Committed</span> — Q3: 3 Available Slots • Q4 (Peak Winter): Reserving Now.
          </p>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-outline">
                <span className="font-label-sm text-label-sm tracking-wider uppercase">Direct Response Pledge</span>
                <span className="font-label-sm text-label-sm text-primary">≤ 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mb-space-3xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">COMMISSION CATALOGUE</span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Signature Packages</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-2xs">Five curated commissions, each engineered around the scale of your celebration. Select a collection to view full deliverables, timelines, and investment.</p>
          </div>
          <div className="flex flex-wrap gap-space-sm mb-space-xl" id="pkg-tabs" role="tablist">
            <button className="pkg-tab-btn px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest font-semibold transition-colors" data-panel="single-side" onClick={(e) => { selectPkgTab(e.currentTarget,'single-side'); }} type="button">Single Side Wedding</button>
            <button className="pkg-tab-btn px-space-md py-space-xs rounded-full border border-outline-variant text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors" data-panel="both-side" onClick={(e) => { selectPkgTab(e.currentTarget,'both-side'); }} type="button">Both Side Wedding</button>
            <button className="pkg-tab-btn px-space-md py-space-xs rounded-full border border-outline-variant text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors" data-panel="engagement" onClick={(e) => { selectPkgTab(e.currentTarget,'engagement'); }} type="button">Engagement</button>
            <button className="pkg-tab-btn px-space-md py-space-xs rounded-full border border-outline-variant text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors" data-panel="pre-wedding" onClick={(e) => { selectPkgTab(e.currentTarget,'pre-wedding'); }} type="button">Pre-Wedding</button>
            <button className="pkg-tab-btn px-space-md py-space-xs rounded-full border border-outline-variant text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors" data-panel="christian-wedding" onClick={(e) => { selectPkgTab(e.currentTarget,'christian-wedding'); }} type="button">Christian Wedding</button>
          </div>
          <div className="pkg-panel grid grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low/60 rounded-lg p-space-lg lg:p-space-xl border border-primary-container/10" data-panel="single-side">
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">Single Side Wedding</span>
                <p className="font-display-lg-mobile text-display-lg-mobile text-on-surface mt-space-2xs">&#8377;1,50,000</p>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Excluding taxes, travel beyond 50km, accommodation, food &amp; add-on services</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Event Flow &amp; Team</span>
                <table className="w-full mt-space-xs">
                  <tbody>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Engagement</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">2P + 1C + 1A</td>
                    </tr>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Sangeet / Mehendi</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">1P + 1C + 1A</td>
                    </tr>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Haldi</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">1P + 1C + 1A</td>
                    </tr>
                    <tr className="border-t border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Wedding</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">2P + 2C + 1D</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">P = Photographer • C = Cinematographer • D = Drone • A = Assistant</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Payment Terms</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">50% Advance • 30% on the First Day of the Event • 20% During Delivery</p>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Deliverables</span>
                <ul className="mt-space-xs space-y-space-2xs font-body-sm text-body-sm text-on-surface-variant list-disc list-inside">
                  <li>Approx. 250–300 high-resolution edited images</li>
                  <li>Delivered via a cloud-based, password-protected gallery — active for 2 months</li>
                  <li>Up to 3–5 minute wedding teaser</li>
                  <li>1 reel of each event, plus Sangeet performance (if any)</li>
                  <li>Up to 45–60 minute long wedding film</li>
                  <li>All videos delivered via cloud platform (active 4 months) or one pendrive</li>
                </ul>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Delivery Timeline</span>
                <table className="w-full mt-space-xs">
                  <thead>
                    <tr className="border-b border-primary-container/10">
                      <th className="py-space-2xs text-left font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Output</th>
                      <th className="py-space-2xs text-left font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Timeline</th>
                      <th className="py-space-2xs text-right font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Revision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Edited Photos</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">30 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">Not Available</td>
                    </tr>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Reels</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">4 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">Not Available</td>
                    </tr>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Wedding Teaser</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">20 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">Not Available</td>
                    </tr>
                    <tr>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Full Film &amp; Performance Videos</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">60 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">1 Round within 10 Days</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Timelines commence from the date of the last event or final payment, whichever is later.</p>
              </div>
            </div>
          </div>
          <div className="pkg-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low/60 rounded-lg p-space-lg lg:p-space-xl border border-primary-container/10" data-panel="both-side">
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">Both Side Wedding</span>
                <p className="font-display-lg-mobile text-display-lg-mobile text-on-surface mt-space-2xs">&#8377;2,40,000</p>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Team travelling, accommodation, and food expenses excluded</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">4-Day Event Flow</span>
                <table className="w-full mt-space-xs">
                  <tbody>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Day 1 — Mehendi / Sangeet</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">2P + 1C</td>
                    </tr>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Day 2 — Pooja &amp; Haldi</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">2P + 1C</td>
                    </tr>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Day 3 — Wedding</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">2P + 2C</td>
                    </tr>
                    <tr className="border-t border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Day 4 — Reception</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">2P + 2C</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Any additional Pooja or Thread Ceremony is not included — additional charges apply if added.</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Payment Terms</span>
                <table className="w-full mt-space-xs">
                  <tbody>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Booking Confirmation</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">&#8377;2,000</td>
                    </tr>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Advance — before 1 month of wedding</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">50%</td>
                    </tr>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">During shoot / 2 days prior</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">30%</td>
                    </tr>
                    <tr className="border-t border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Final — after wedding, before deliverables</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Deliverables</span>
                <ul className="mt-space-xs space-y-space-2xs font-body-sm text-body-sm text-on-surface-variant list-disc list-inside">
                  <li>Candid + portrait + traditional photography — 2 cinematographers + 2 photographers (team coverage)</li>
                  <li>1 drone coverage (subject to permissions)</li>
                  <li>Full wedding cinematic film (1 hour to 1.5 hours)</li>
                  <li>All raw timeline videos provided if required</li>
                  <li>Wedding highlights teaser (3–5 minutes)</li>
                  <li>300+ edited images, high resolution</li>
                  <li>Premium wedding album — 50 sheets / 90 pages</li>
                  <li>All raw data (photos + videos) on hard drive (provided by client)</li>
                  <li>Final videos in Full HD or 4K, plus hard-copy album</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pkg-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low/60 rounded-lg p-space-lg lg:p-space-xl border border-primary-container/10" data-panel="engagement">
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">Engagement</span>
                <p className="font-display-lg-mobile text-display-lg-mobile text-on-surface mt-space-2xs">&#8377;35,000</p>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Excluding travel, accommodation, food &amp; add-on services</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Payment Terms</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">50% Advance at booking • 50% balance during shoot</p>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Delivery Timeline</span>
                <table className="w-full mt-space-xs">
                  <thead>
                    <tr className="border-b border-primary-container/10">
                      <th className="py-space-2xs text-left font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Service</th>
                      <th className="py-space-2xs text-right font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Quick Edits (10 photos)</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">2 Days After Event</td>
                    </tr>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Edited Photos</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">10 Days After Selection</td>
                    </tr>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Engagement Reel</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">2 Days</td>
                    </tr>
                    <tr>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Engagement Film</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">35 Days (1 Revision)</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Timelines commence from the date of the last event or final payment, whichever is later.</p>
              </div>
            </div>
          </div>
          <div className="pkg-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low/60 rounded-lg p-space-lg lg:p-space-xl border border-primary-container/10" data-panel="pre-wedding">
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">Pre-Wedding</span>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Excluding taxes, travel beyond 50km, accommodation, food &amp; add-on services</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Duration &amp; Investment</span>
                <table className="w-full mt-space-xs">
                  <thead>
                    <tr className="border-b border-primary-container/10">
                      <th className="py-space-2xs text-left font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Duration</th>
                      <th className="py-space-2xs text-left font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Team</th>
                      <th className="py-space-2xs text-right font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Investment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">1 Day</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">1P + 1C + 2A</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">&#8377;35,000</td>
                    </tr>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">2 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">1P + 1C + 2A</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">&#8377;45,000</td>
                    </tr>
                    <tr>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">3 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">1P + 1C + 2A</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">&#8377;60,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Payment Terms</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">50% Advance • 30% During Shoot • 20% During Delivery</p>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Deliverables</span>
                <ul className="mt-space-xs space-y-space-2xs font-body-sm text-body-sm text-on-surface-variant list-disc list-inside">
                  <li>Approx. 50–60 high-resolution edited images</li>
                  <li>Up to 3–5 minute pre-wedding film</li>
                  <li>3–4 cinematic reels</li>
                  <li>Delivered via cloud-based password-protected gallery — active 1 month</li>
                </ul>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Delivery Timeline</span>
                <table className="w-full mt-space-xs">
                  <thead>
                    <tr className="border-b border-primary-container/10">
                      <th className="py-space-2xs text-left font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Output</th>
                      <th className="py-space-2xs text-right font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Edited Photos</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">10 Days</td>
                    </tr>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Reels</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">10 Days</td>
                    </tr>
                    <tr>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Pre-Wedding Film</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">20 Days</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="mt-space-2xs space-y-space-2xs font-body-sm text-body-sm text-outline list-disc list-inside">
                  <li>Covers only the bride and groom — family or guest coverage is available on request at additional charge</li>
                  <li>Raw photos and footage are not included, and are only provided if mutually agreed with additional charges</li>
                  <li>Printed album, frames, or other physical products are not included unless specifically mentioned</li>
                  <li>Schedule changes must be communicated at least 48 hours in advance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pkg-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low/60 rounded-lg p-space-lg lg:p-space-xl border border-primary-container/10" data-panel="christian-wedding">
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">Christian Wedding — Single Side</span>
                <p className="font-display-lg-mobile text-display-lg-mobile text-on-surface mt-space-2xs">&#8377;1,10,000</p>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Excluding taxes, travel beyond 50km, accommodation, food &amp; add-on services</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Event Flow &amp; Team</span>
                <table className="w-full mt-space-xs">
                  <tbody>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Engagement / Banbas</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">2P + 1C + 1A</td>
                    </tr>
                    <tr className="border-t border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Saradi</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">1P + 1C + 1A</td>
                    </tr>
                    <tr className="border-t border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Wedding</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface text-right">2P + 2C + 1D</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">P = Photographer • C = Cinematographer • D = Drone • A = Assistant</p>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Payment Terms</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">50% Advance • 30% on the First Day of the Event • 20% During Delivery</p>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Deliverables</span>
                <ul className="mt-space-xs space-y-space-2xs font-body-sm text-body-sm text-on-surface-variant list-disc list-inside">
                  <li>Approx. 250–300 high-resolution edited images</li>
                  <li>Delivered via a cloud-based, password-protected gallery — active for 2 months</li>
                  <li>Up to 3–5 minute wedding teaser</li>
                  <li>1 reel of each event, plus Sangeet performance (if any)</li>
                  <li>Up to 45–60 minute long wedding film</li>
                  <li>All videos delivered via cloud platform (active 4 months) or one pendrive</li>
                </ul>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Delivery Timeline</span>
                <table className="w-full mt-space-xs">
                  <thead>
                    <tr className="border-b border-primary-container/10">
                      <th className="py-space-2xs text-left font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Output</th>
                      <th className="py-space-2xs text-left font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Timeline</th>
                      <th className="py-space-2xs text-right font-label-sm text-label-sm text-outline uppercase tracking-widest font-normal">Revision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Edited Photos</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">30 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">Not Available</td>
                    </tr>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Reels</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">4 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">Not Available</td>
                    </tr>
                    <tr className="border-b border-primary-container/10">
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Wedding Teaser</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">20 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">Not Available</td>
                    </tr>
                    <tr>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">Full Film &amp; Performance Videos</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant">60 Days</td>
                      <td className="py-space-2xs font-body-sm text-body-sm text-on-surface-variant text-right">1 Round within 10 Days</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-body-sm text-body-sm text-outline mt-space-2xs">Timelines commence from the date of the last event or final payment, whichever is later.</p>
              </div>
            </div>
          </div>
          <div className="mt-space-lg p-space-md rounded-lg border border-primary-container/10 bg-surface-container-lowest/40">
            <p className="font-body-sm text-body-sm text-on-surface-variant">All commissions are subject to our standard terms: booking dates are held only upon receipt of advance; travel, accommodation &amp; dining for the team are arranged separately; SliceX Films retains the right to feature select work for portfolio &amp; promotional use (usage restriction available for an additional 20% fee); drone coverage is subject to DGCA &amp; venue permissions; and equipment remains our liability-covered property throughout the commission.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mb-space-3xl grid grid-cols-1 md:grid-cols-12 gap-space-md">
          <div className="md:col-span-7 relative h-72 lg:h-96 rounded-lg overflow-hidden group shadow-2xl">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="An ethereal fine-art wedding photograph of a bride and groom embracing at sunset amidst glowing mountain haze and timeless chiaroscuro lighting, reminiscent of haute couture Vogue editorial portraits with rich grain, deep obsidian contrast, and champagne light." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSLHOz5QhHS4YLzMdVsUdIyNk1oIdp3-RuYN3SKoF1FuAPu5k0kOAYo4hn2MGgJpzwT7V2bS9e7PbWPTncJh-7GjX4i4BlrNO7_SxUItHLb_69GL_D5JfCtZv_L13bmUaLfS4IhLsFbVYfF8naM6vXQZImjHg1hloNqKXfQHzGkwn1LPg4f53nsDIhEnjYakhWkckM022HijVnB-5ts29-t5Af7U-Vmt-BzmWuUgxVI_vYDzQDZp5ELg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
            <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">PORTFOLIO ARCHIVE / TUSCANY &amp; UDAIPUR</span>
                <p className="font-headline-sm text-headline-sm text-on-surface italic">Timeless Romance In Chiaroscuro</p>
              </div>
              <span className="font-label-sm text-label-sm tracking-widest text-outline uppercase">35MM MASTERED</span>
            </div>
          </div>
          <div className="md:col-span-5 relative h-72 lg:h-96 rounded-lg overflow-hidden group shadow-2xl">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A grand royal Indian palace courtyard night celebration illuminated by hundreds of floating glass lantern candles, showing a couple in royal bridal ivory and crimson attire walking the illuminated marble colonnade under warm amber glows and moody atmospheric cinema." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxCXFhkfJ70DAbsjtb18Hej6SDBbthZdiWTkuOv6vyQpIC2wJf4OqjVUUHM7As4Mhw9RX0_K9M6Osaz6Qg4pQL66GG2ZuMo9gi8shxQELAJOr8i42XK69MWW-Xevt4Yv-PCPdL5UnHWhhi_kbkbJmoVRkojHi4BEZ1HFi3E92fjH8CHpSCGzyFOLu7kET9eIEkELWkHsPKCQDv8p2S_0lL4awWp1kqsy0rDw55NLHSER5OIBcA5ahXyg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
            <div className="absolute bottom-space-md left-space-md right-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">ROYAL HERITAGE EDITIONS</span>
              <p className="font-headline-sm text-headline-sm text-on-surface">The Leela Palace • Udaipur</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-8 flex flex-col gap-space-2xl">
            <form className="flex flex-col gap-space-2xl" id="booking-intake-form" onSubmit={(e) => { e.preventDefault(); document.getElementById('success-state').classList.remove('hidden'); e.currentTarget.classList.add('opacity-40', 'pointer-events-none'); }}>
              <div className="bg-surface-container-low p-space-lg lg:p-space-xl rounded-lg shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-headline-sm text-headline-sm text-primary font-serif">01</span>
                    <div>
                      <h2 className="font-label-lg text-label-lg uppercase tracking-[0.16em] text-on-surface">THE COUPLE</h2>
                      <p className="font-body-sm text-body-sm text-outline">Lead contacts &amp; celebration principals</p>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">STEP 01 / 04</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="client-name">Your Full Name *</label>
                    <input className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="client-name" placeholder="e.g., Alistair Vance" required type="text" />
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="partner-name">Partner's Full Name *</label>
                    <input className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="partner-name" placeholder="e.g., Katherine Sterling" required type="text" />
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="contact-email">Contact Email Address *</label>
                    <input className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="contact-email" placeholder="vance.sterling@atelier.com" required type="email" />
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="contact-phone">Mobile Phone Number *</label>
                    <input className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="contact-phone" placeholder="+91 98000 00000" required type="tel" />
                  </div>
                  <div className="sm:col-span-2 flex flex-col gap-space-2xs">
                    <div className="flex items-center justify-between">
                      <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="whatsapp-number">WhatsApp Number</label>
                      <span className="font-label-sm text-label-sm text-secondary">Recommended for instant quote drafts &amp; schedule syncing</span>
                    </div>
                    <input className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="whatsapp-number" placeholder="+91 98000 00000" type="tel" />
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-lg lg:p-space-xl rounded-lg shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-headline-sm text-headline-sm text-primary font-serif">02</span>
                    <div>
                      <h2 className="font-label-lg text-label-lg uppercase tracking-[0.16em] text-on-surface">THE CELEBRATION</h2>
                      <p className="font-body-sm text-body-sm text-outline">Date, destination geometry, and itinerary depth</p>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">STEP 02 / 04</span>
                </div>
                <div className="flex flex-col gap-space-xs mb-space-lg">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Commission Scale &amp; Scope *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-space-xs">
                    <label className="cursor-pointer">
                      <input defaultChecked className="peer sr-only" name="event-scope" type="radio" value="single-side" />
                      <div className="h-full px-space-sm py-space-sm rounded bg-surface-container text-center transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high">
                        <span className="block font-label-md text-label-md uppercase">Wedding</span>
                        <span className="font-label-sm text-label-sm opacity-80">(Single-Side)</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="event-scope" type="radio" value="both-side" />
                      <div className="h-full px-space-sm py-space-sm rounded bg-surface-container text-center transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high">
                        <span className="block font-label-md text-label-md uppercase">Wedding</span>
                        <span className="font-label-sm text-label-sm opacity-80">(Both-Side)</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="event-scope" type="radio" value="pre-wedding" />
                      <div className="h-full px-space-sm py-space-sm rounded bg-surface-container text-center transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high">
                        <span className="block font-label-md text-label-md uppercase">Pre-Wedding</span>
                        <span className="font-label-sm text-label-sm opacity-80">Editorial Film</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="event-scope" type="radio" value="engagement" />
                      <div className="h-full px-space-sm py-space-sm rounded bg-surface-container text-center transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high">
                        <span className="block font-label-md text-label-md uppercase">Engagement</span>
                        <span className="font-label-sm text-label-sm opacity-80">Intimate</span>
                      </div>
                    </label>
                    <label className="cursor-pointer col-span-2 sm:col-span-1">
                      <input className="peer sr-only" name="event-scope" type="radio" value="multi-day-destination" />
                      <div className="h-full px-space-sm py-space-sm rounded bg-surface-container text-center transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high">
                        <span className="block font-label-md text-label-md uppercase">Destination</span>
                        <span className="font-label-sm text-label-sm opacity-80">Multi-Day</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="event-date">Exact Event Date or Preferred Month *</label>
                    <input className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="event-date" placeholder="e.g., November 18–21, 2025" required type="text" />
                  </div>
                  <div className="flex flex-col gap-space-2xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="event-location">Primary City / Venue Destination *</label>
                    <input className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" id="event-location" placeholder="e.g., Taj Lake Palace, Udaipur / Lake Como" required type="text" />
                  </div>
                  <div className="sm:col-span-2 flex flex-col gap-space-2xs">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Number of Expected Functions / Days</label>
                    <div className="grid grid-cols-4 gap-space-xs">
                      <label className="cursor-pointer">
                        <input defaultChecked className="peer sr-only" name="event-duration" type="radio" value="1-day" />
                        <div className="py-space-sm text-center rounded bg-surface-container peer-checked:bg-primary peer-checked:text-on-primary font-label-md text-label-md uppercase transition-all">1 Day</div>
                      </label>
                      <label className="cursor-pointer">
                        <input className="peer sr-only" name="event-duration" type="radio" value="2-days" />
                        <div className="py-space-sm text-center rounded bg-surface-container peer-checked:bg-primary peer-checked:text-on-primary font-label-md text-label-md uppercase transition-all">2 Days</div>
                      </label>
                      <label className="cursor-pointer">
                        <input className="peer sr-only" name="event-duration" type="radio" value="3-days" />
                        <div className="py-space-sm text-center rounded bg-surface-container peer-checked:bg-primary peer-checked:text-on-primary font-label-md text-label-md uppercase transition-all">3 Days</div>
                      </label>
                      <label className="cursor-pointer">
                        <input className="peer sr-only" name="event-duration" type="radio" value="4-plus-days" />
                        <div className="py-space-sm text-center rounded bg-surface-container peer-checked:bg-primary peer-checked:text-on-primary font-label-md text-label-md uppercase transition-all">4+ Days</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-lg lg:p-space-xl rounded-lg shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-headline-sm text-headline-sm text-primary font-serif">03</span>
                    <div>
                      <h2 className="font-label-lg text-label-lg uppercase tracking-[0.16em] text-on-surface">THE VISION &amp; INVESTMENT</h2>
                      <p className="font-body-sm text-body-sm text-outline">Tier selection, cinematic add-ons, and visual grammar</p>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">STEP 03 / 04</span>
                </div>
                <div className="flex flex-col gap-space-xs mb-space-lg">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Preferred Package Archetype</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-xs">
                    <label className="cursor-pointer">
                      <input defaultChecked className="peer sr-only" name="package-tier" type="radio" value="single-side-pkg" />
                      <div className="p-space-sm rounded bg-surface-container transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high flex flex-col justify-between h-full">
                        <div className="flex justify-between items-start">
                          <span className="font-label-md text-label-md uppercase">Single-Side Wedding</span>
                          <span className="font-label-sm text-label-sm font-bold">₹1.10L</span>
                        </div>
                        <span className="font-body-sm text-body-sm opacity-75 mt-space-2xs">Full Ceremony &amp; Reception Master Reel</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="package-tier" type="radio" value="both-side-pkg" />
                      <div className="p-space-sm rounded bg-surface-container transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high flex flex-col justify-between h-full">
                        <div className="flex justify-between items-start">
                          <span className="font-label-md text-label-md uppercase">Both-Side Wedding</span>
                          <span className="font-label-sm text-label-sm font-bold">₹2.40L</span>
                        </div>
                        <span className="font-body-sm text-body-sm opacity-75 mt-space-2xs">Unified Dual-Family Comprehensive Unit</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="package-tier" type="radio" value="pre-wedding-pkg" />
                      <div className="p-space-sm rounded bg-surface-container transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high flex flex-col justify-between h-full">
                        <div className="flex justify-between items-start">
                          <span className="font-label-md text-label-md uppercase">Pre-Wedding</span>
                          <span className="font-label-sm text-label-sm font-bold">₹35k–₹60k</span>
                        </div>
                        <span className="font-body-sm text-body-sm opacity-75 mt-space-2xs">Editorial Fashion Story &amp; Short Film</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="package-tier" type="radio" value="engagement-pkg" />
                      <div className="p-space-sm rounded bg-surface-container transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high flex flex-col justify-between h-full">
                        <div className="flex justify-between items-start">
                          <span className="font-label-md text-label-md uppercase">Intimate Ring / Roka</span>
                          <span className="font-label-sm text-label-sm font-bold">₹35,000</span>
                        </div>
                        <span className="font-body-sm text-body-sm opacity-75 mt-space-2xs">Candid Analog Stills + 3-Min Cinema</span>
                      </div>
                    </label>
                    <label className="cursor-pointer sm:col-span-2">
                      <input className="peer sr-only" name="package-tier" type="radio" value="bespoke-quote" />
                      <div className="p-space-sm rounded bg-surface-container transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container hover:bg-surface-container-high flex flex-col justify-between h-full">
                        <div className="flex justify-between items-start">
                          <span className="font-label-md text-label-md uppercase">Bespoke Destination Commission</span>
                          <span className="font-label-sm text-label-sm font-bold">Custom Quote</span>
                        </div>
                        <span className="font-body-sm text-body-sm opacity-75 mt-space-2xs">Multi-day worldwide coverage with director squad &amp; full mobile color-grading rig</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs mb-space-lg">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Estimated Cinema &amp; Photography Investment Bracket *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                    <label className="cursor-pointer">
                      <input defaultChecked className="peer sr-only" name="budget-bracket" type="radio" value="tier-1" />
                      <div className="p-space-sm rounded bg-surface-container text-center peer-checked:bg-primary-container peer-checked:text-on-primary-container font-label-md text-label-md uppercase transition-all">
                    ₹1,00,000 – ₹2,50,000
                  </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="budget-bracket" type="radio" value="tier-2" />
                      <div className="p-space-sm rounded bg-surface-container text-center peer-checked:bg-primary-container peer-checked:text-on-primary-container font-label-md text-label-md uppercase transition-all">
                    ₹2,50,000 – ₹5,00,000
                  </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="budget-bracket" type="radio" value="tier-3" />
                      <div className="p-space-sm rounded bg-surface-container text-center peer-checked:bg-primary-container peer-checked:text-on-primary-container font-label-md text-label-md uppercase transition-all">
                    ₹5,00,000+ (High Couture)
                  </div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs mb-space-lg">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Archival Add-ons of Interest</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                    <label className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input className="w-4 h-4 rounded bg-surface-container-lowest text-primary-container focus:ring-0 focus:outline-none accent-primary-container" type="checkbox" />
                      <span className="font-body-sm text-body-sm text-on-surface">Aerial 4K Dual-Operator Drone Stream</span>
                    </label>
                    <label className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input className="w-4 h-4 rounded bg-surface-container-lowest text-primary-container focus:ring-0 focus:outline-none accent-primary-container" type="checkbox" />
                      <span className="font-body-sm text-body-sm text-on-surface">Same-Day Reception Teaser Reel (60s)</span>
                    </label>
                    <label className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input className="w-4 h-4 rounded bg-surface-container-lowest text-primary-container focus:ring-0 focus:outline-none accent-primary-container" type="checkbox" />
                      <span className="font-body-sm text-body-sm text-on-surface">Handcrafted Italian Linen Archival Album</span>
                    </label>
                    <label className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input className="w-4 h-4 rounded bg-surface-container-lowest text-primary-container focus:ring-0 focus:outline-none accent-primary-container" type="checkbox" />
                      <span className="font-body-sm text-body-sm text-on-surface">Raw Master Cinema DNG Hard Drive Delivery</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-space-2xs">
                  <div className="flex justify-between items-center">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="narrative-notes">Your Story, Mood &amp; Aesthetic Preferences</label>
                    <span className="font-label-sm text-label-sm text-outline">Optional but appreciated</span>
                  </div>
                  <textarea className="w-full bg-surface-container-lowest p-space-md rounded text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none" id="narrative-notes" placeholder="Tell us how you met, the energy of your event, and the visual mood you envision (e.g. moody chiaroscuro cinema, nostalgic 35mm warmth, quiet documentary intimacy, grand editorial feast)..." rows="4"></textarea>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-lg rounded-lg shadow-xl flex flex-col gap-space-md">
                <div className="flex items-start gap-space-sm">
                  <input className="mt-1 w-4 h-4 rounded bg-surface-container-lowest text-primary-container focus:ring-0 accent-primary-container cursor-pointer" id="terms-affirmation" required type="checkbox" />
                  <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="terms-affirmation">
                I understand that dates are strictly confirmed on a first-deposit basis upon mutual alignment, signed commission charter, and advance retainer receipt.
              </label>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                  <div className="flex items-center gap-space-2xs text-outline font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                    <span>256-BIT ENCRYPTED STUDIO INTAKE TRANSMISSION</span>
                  </div>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md bg-gradient-to-r from-primary-fixed-dim via-primary to-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-widest rounded shadow-xl hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] transition-all duration-300 group" type="submit">
                    <span>TRANSMIT BOOKING INTAKE</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="hidden bg-surface-container p-space-xl rounded-lg shadow-2xl flex flex-col items-center text-center gap-space-md -mt-space-xl border-t-2 border-primary" id="success-state">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-4xl">done_all</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">PROTOCOL DISPATCHED</span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Your Date Has Been Logged.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
            Thank you. Director Abhishek Anand and the studio production desk have received your celebration details. Expect your bespoke lookbook, tailored estimate, and availability confirmation within 24 hours.
          </p>
              <div className="flex gap-space-md pt-space-xs">
                <a className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-high text-primary font-label-md text-label-md uppercase rounded hover:bg-surface-bright transition-colors" href="https://wa.me/919658621038" target="_blank">
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Open Fast-Track WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-lg">
            <div className="bg-surface-container-low p-space-lg rounded-lg shadow-xl flex flex-col gap-space-md relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">DIRECT DESK DISPATCH</span>
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Priority Consultations</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
            For urgent weekend dates, international multi-destination logistics, or agency inquiries, connect directly with studio leadership.
          </p>
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <a className="flex items-center justify-between p-space-sm rounded bg-surface-container hover:bg-surface-container-high transition-all group" href="tel:+919827122620">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[18px]">phone</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase text-outline block">Studio Lead Desk</span>
                      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors font-medium">+91 98271 22620</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">arrow_outward</span>
                </a>
                <a className="flex items-center justify-between p-space-sm rounded bg-surface-container hover:bg-surface-container-high transition-all group" href="tel:+919658621038">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[18px]">person</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase text-outline block">Director Abhishek Anand</span>
                      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors font-medium">+91 96586 21038</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">arrow_outward</span>
                </a>
                <a className="flex items-center justify-between p-space-sm rounded bg-surface-container hover:bg-surface-container-high transition-all group" href="mailto:slicexfilms@gmail.com">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase text-outline block">Electronic Mail</span>
                      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors font-medium">slicexfilms@gmail.com</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">arrow_outward</span>
                </a>
              </div>
              <div className="pt-space-xs">
                <a className="w-full inline-flex items-center justify-center gap-space-xs py-space-sm bg-secondary-container/30 hover:bg-secondary-container/50 text-secondary-fixed rounded font-label-md text-label-md uppercase tracking-wider transition-colors" href="https://wa.me/919658621038" target="_blank">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Instant WhatsApp Concierge</span>
                </a>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-lg shadow-xl flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">BASE OF OPERATIONS</span>
                <span className="font-label-sm text-label-sm text-outline">WORLDWIDE TRANSIT</span>
              </div>
              <div className="w-full h-44 bg-cover bg-center rounded relative overflow-hidden shadow-inner" data-alt="A dark moody architectural rendering of a luxury boutique film atelier with dark slate surfaces, ambient gold gallery track lighting, and widescreen monitors displaying wedding cinema in 4K." data-location="Bhopal, India" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnJYnJg8B0HstmSk-euUDqct0uH-HKZ_SLIZDc5Hu8L8MIQlHscpMDAFcmJdrx1zfatHWqVti4rDs7xETjsFNxVjK9KEWlBZ-udZj3VzGFkkmsl3cSEz7A3YXEnWr7sMYtf7Ak4lyUd1G0Al_Bm_G8Rtt9PYKP_Waw4C5xb_tzw7TCl6-cPpap6T1nyJJmKSUFoeNrtGhQ1ti4Q2WKc7YdFfyyGTb5GsOYxAq28x_ajFeMKyPF9ns2Zg')" }}>
                <div className="absolute inset-0 bg-surface-container-lowest/40 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-space-sm">
                  <span className="material-symbols-outlined text-primary text-3xl mb-space-2xs">explore</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">SLICEX ATELIER</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Madhya Pradesh • Available Worldwide</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-outline">Private preview screenings &amp; album material review available at our studio sanctuary by prior reservation.</p>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-lg shadow-xl flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">THE SLICEX STANDARDS</span>
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">lock_clock</span>
                  <div>
                    <h4 className="font-label-md text-label-md uppercase text-on-surface">100% Date Exclusivity</h4>
                    <p className="font-body-sm text-body-sm text-outline">No double bookings. Our principal director and first-squad focus entirely on your weekend.</p>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">flight</span>
                  <div>
                    <h4 className="font-label-md text-label-md uppercase text-on-surface">DGCA Certified Aerial Fleet</h4>
                    <p className="font-body-sm text-body-sm text-outline">Fully legal, commercially licensed pilots for complex palace and waterfront fly-throughs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">movie_filter</span>
                  <div>
                    <h4 className="font-label-md text-label-md uppercase text-on-surface">Dedicated DaVinci Suite</h4>
                    <p className="font-body-sm text-body-sm text-outline">Each film receives custom film-grain emulation and couture color passes calibrated on reference monitors.</p>
                  </div>
                </div>
              </div>
              <div className="mt-space-2xs p-space-md rounded bg-surface-container-lowest/80 flex flex-col gap-space-2xs">
                <p className="font-headline-sm text-headline-sm italic text-on-surface-variant font-serif">
              "We do not document events; we author heirlooms that defy the passage of decades."
            </p>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mt-space-2xs">— Abhishek Anand, Founder &amp; Director</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-space-3xl pt-space-2xl border-t border-surface-container-high flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">COMMISSION PROTOCOL INSIGHTS</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Contemplated Questions</h2>
            </div>
            <span className="font-body-sm text-body-sm text-outline max-w-xs">Everything you need to know regarding travel logistics, deliverables, and timeline reservation.</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="p-space-lg rounded-lg bg-surface-container-low flex flex-col gap-space-xs shadow-lg">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">LOGISTICS</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Destination Travel &amp; Lodging</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
            For destination affairs in Rajasthan, Goa, or international ports, travel flights and stay are arranged either directly by the couple or invoiced at strict cost without markup.
          </p>
            </div>
            <div className="p-space-lg rounded-lg bg-surface-container-low flex flex-col gap-space-xs shadow-lg">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">TIMELINE</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Delivery Turnaround</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
            Same-day teasers within 24 hours; editorial photo previews within 7 calendar days. Master film and documentary cut undergo full color-grading within 8 to 12 weeks.
          </p>
            </div>
            <div className="p-space-lg rounded-lg bg-surface-container-low flex flex-col gap-space-xs shadow-lg">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">RESERVATION</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Payment &amp; Retainer Terms</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
            A 50% advance secures your date exclusively on our calendar. 40% is cleared during the celebration week, with the 10% balance due on master drive dispatch.
          </p>
            </div>
          </div>
        </div>
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
              <li>
                <a className="hover:text-primary transition-colors" data-path="home" href="/">Home Archive</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="films" href="/films">Cinema Collective</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="services" href="/services">Editorial Offerings</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="portfolio" href="/portfolio">Featured Exhibitions</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="contact" href="/contact">Inquire Studio</a>
              </li>
              <li>
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
          <p>© 2024 SLICEX FILMS. ALL RIGHTS RESERVED.</p>
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
