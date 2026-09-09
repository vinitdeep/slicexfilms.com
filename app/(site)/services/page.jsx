import SiteFooter from '../../../components/SiteFooter';
import ServicesCollections from '../../../components/ServicesCollections';
import { withBase } from '../../../lib/basePath';
export const metadata = { title: "SliceX Films | Services — Technical Architecture" };

export default function ServicesPage() {
  return (
    <>
    <div className="flex flex-col w-full">
      <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-space-2xl pb-space-3xl overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-container/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary">02 / CINEMATIC EXPERTISE</span>
          </div>
          <h1 className="font-display-hero text-display-hero uppercase tracking-tight text-on-surface max-w-5xl mb-space-lg leading-[1.08]">
        CRAFTED WITH <span className="text-primary italic font-headline-lg">INTENT.</span><br />
        FILMED FOR ETERNITY.
      </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg w-full items-end pt-space-xs">
            <p className="lg:col-span-7 font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
          Every service is engineered with bespoke prime glass, multi-axis motion, and surgical color science. We do not document events; we orchestrate cinema that outlives generation upon generation.
        </p>
            <div className="lg:col-span-5 flex flex-wrap gap-space-xs lg:justify-end items-center">
              <span className="px-space-sm py-space-2xs bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest rounded">2.39:1 Anamorphic</span>
              <span className="px-space-sm py-space-2xs bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest rounded">ProRes 422 HQ</span>
              <span className="px-space-sm py-space-2xs bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest rounded">DaVinci ACES 12-Bit</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-space-md px-margin-mobile lg:px-margin-desktop overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md text-outline font-label-sm text-label-sm uppercase tracking-[0.24em] whitespace-nowrap overflow-x-auto">
            <span>KODAK VISION3 TONE EMULATION</span>
            <span className="text-primary">•</span>
            <span>SOUNDTRACK ORCHESTRATION</span>
            <span className="text-primary">•</span>
            <span>UNOBTRUSIVE EDITORIAL CHOREOGRAPHY</span>
            <span className="text-primary">•</span>
            <span>DGCA CERTIFIED PILOTS</span>
          </div>
          <div className="hidden md:flex items-center gap-space-2xs text-primary font-label-sm text-label-sm tracking-widest">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>WORLDWIDE DISPATCH</span>
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-4xl">
        <ServicesCollections />
      </section>
      <section className="w-full bg-surface-container-low py-space-3xl px-margin-mobile lg:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary block mb-space-xs">STANDARDS OF PURSUIT</span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">TECHNICAL ARCHITECTURE</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          We maintain absolute refusal of generic wedding standards. Every production undergoes surgical calibration from capture through physical archival delivery.
        </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="bg-surface-container p-space-lg rounded-lg">
              <div className="text-primary font-headline-lg text-headline-lg font-light mb-space-xs">16-BIT</div>
              <div className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-space-2xs">COLOR DEPTH PIPELINE</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Full ACES linear color transformation guaranteeing unclipped skin tones and velvety shadow rolloff.</p>
            </div>
            <div className="bg-surface-container p-space-lg rounded-lg">
              <div className="text-primary font-headline-lg text-headline-lg font-light mb-space-xs">32-BIT</div>
              <div className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-space-2xs">FLOAT AUDIO FIDELITY</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Dual-transmitter redundancy rendering whispered vows and explosive celebrations with zero clipping.</p>
            </div>
            <div className="bg-surface-container p-space-lg rounded-lg">
              <div className="text-primary font-headline-lg text-headline-lg font-light mb-space-xs">T1.5</div>
              <div className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-space-2xs">CINEMA GLASS APERTURES</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">True anamorphic lenses creating elliptical bokeh, horizontal flare streaks, and three-dimensional pop.</p>
            </div>
            <div className="bg-surface-container p-space-lg rounded-lg">
              <div className="text-primary font-headline-lg text-headline-lg font-light mb-space-xs">100 YRS</div>
              <div className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-space-2xs">M-DISC &amp; LINEN ARCHIVE</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Dual physical vault delivery guaranteed to resist optical decay, light exposure, and humidity.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-4xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-space-3xl text-center max-w-3xl mx-auto">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary block mb-space-xs">PHILOSOPHY &amp; ETHOS</span>
            <h2 className="font-display-hero text-display-hero uppercase text-on-surface mb-space-md">THE 5 PILLARS OF OUR CRAFT</h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light">
          A disciplined synthesis of high-end optics, emotional intuition, and meticulous post-production engineering.
        </p>
          </div>
          <div className="space-y-space-xs">
            <div className="group bg-surface-container p-space-xl rounded-lg transition-all duration-300 hover:bg-surface-container-high flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex items-start lg:items-center gap-space-lg">
                <span className="font-headline-sm text-headline-sm text-primary">01</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">PRIME OPTICS</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-space-2xs">
                We never rely on clinical zoom lenses. Every sequence is shot on hand-calibrated cinema prime lenses that yield distinct analog warmth, organic focus falloff, and cinematic presence.
              </p>
                </div>
              </div>
              <div className="flex items-center gap-space-md self-end lg:self-center">
                <span className="px-space-sm py-space-2xs bg-surface-container-lowest text-outline font-label-sm text-label-sm tracking-widest uppercase rounded">ANAMORPHIC GLASS</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">east</span>
              </div>
            </div>
            <div className="group bg-surface-container p-space-xl rounded-lg transition-all duration-300 hover:bg-surface-container-high flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex items-start lg:items-center gap-space-lg">
                <span className="font-headline-sm text-headline-sm text-primary">02</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">AUDIO CADENCE</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-space-2xs">
                Cinema is half what you see and half what you hear. We weave multi-layered sound design: the flutter of silk, reverberant temple bells, and pristine speech clarity scored to custom orchestral compositions.
              </p>
                </div>
              </div>
              <div className="flex items-center gap-space-md self-end lg:self-center">
                <span className="px-space-sm py-space-2xs bg-surface-container-lowest text-outline font-label-sm text-label-sm tracking-widest uppercase rounded">DOLBY-MASTERED VOX</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">east</span>
              </div>
            </div>
            <div className="group bg-surface-container p-space-xl rounded-lg transition-all duration-300 hover:bg-surface-container-high flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex items-start lg:items-center gap-space-lg">
                <span className="font-headline-sm text-headline-sm text-primary">03</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">DAVINCI COLOR GRADE</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-space-2xs">
                Zero automated filters or cookie-cutter presets. Every frame passes through an editorial colorist calibrated on Sony BVM reference monitors to mirror vintage film prints.
              </p>
                </div>
              </div>
              <div className="flex items-center gap-space-md self-end lg:self-center">
                <span className="px-space-sm py-space-2xs bg-surface-container-lowest text-outline font-label-sm text-label-sm tracking-widest uppercase rounded">CUSTOM FILM PRINT EMULATION</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">east</span>
              </div>
            </div>
            <div className="group bg-surface-container p-space-xl rounded-lg transition-all duration-300 hover:bg-surface-container-high flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex items-start lg:items-center gap-space-lg">
                <span className="font-headline-sm text-headline-sm text-primary">04</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">UNOBTRUSIVE PRESENCE</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-space-2xs">
                The most magnetic moments happen when you forget a camera exists. We move like silent observers dressed in formal couture, ensuring authentic unforced vulnerability.
              </p>
                </div>
              </div>
              <div className="flex items-center gap-space-md self-end lg:self-center">
                <span className="px-space-sm py-space-2xs bg-surface-container-lowest text-outline font-label-sm text-label-sm tracking-widest uppercase rounded">STEALTH OBSERVATION</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">east</span>
              </div>
            </div>
            <div className="group bg-surface-container p-space-xl rounded-lg transition-all duration-300 hover:bg-surface-container-high flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex items-start lg:items-center gap-space-lg">
                <span className="font-headline-sm text-headline-sm text-primary">05</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">ARCHIVAL LONGEVITY</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-space-2xs">
                We design for 50 years into the future. Master deliverables are provided in non-proprietary uncompressed Apple ProRes HQ alongside Italian archival paper bindings that outlive digital obsolescence.
              </p>
                </div>
              </div>
              <div className="flex items-center gap-space-md self-end lg:self-center">
                <span className="px-space-sm py-space-2xs bg-surface-container-lowest text-outline font-label-sm text-label-sm tracking-widest uppercase rounded">HEIRLOOM LIFETIME</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">east</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop pb-space-4xl">
        <div className="max-w-7xl mx-auto relative rounded-xl overflow-hidden bg-surface-container-high shadow-2xl p-space-2xl lg:p-space-4xl">
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-space-xs mb-space-xs text-primary font-label-sm text-label-sm tracking-[0.24em] uppercase">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            LIMITED PRODUCTION SLOTS ANNUALLY
          </div>
              <h2 className="font-display-hero text-display-hero uppercase text-on-surface leading-tight mb-space-sm">
            READY TO CAST <span className="text-primary italic">YOUR STORY?</span>
</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
            We accept a maximum of 18 couples worldwide each calendar year to maintain surgical focus and uncompromising cinema grade.
          </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-md lg:items-end">
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-[0.16em] rounded shadow-[0_0_30px_rgba(0,184,200,0.35)] hover:bg-primary transition-all duration-300" data-path="contact" href={withBase("/contact/")}>
                <span>INQUIRE FOR YOUR DATES</span>
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </a>
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-xs bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-widest rounded hover:text-primary transition-colors" data-path="packages" href={withBase("/book-your-date/")}>
                <span>VIEW CURATED PACKAGES</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
              <p className="font-label-sm text-label-sm text-outline tracking-widest uppercase text-center lg:text-right">
            Direct Concierge: slicexfilms@gmail.com
          </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <SiteFooter />
    </>
  );
}
