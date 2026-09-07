import SiteFooter from '../../../components/SiteFooter';
import { withBase } from '../../../lib/basePath';
import HardwareApparatus from '../../../components/HardwareApparatus';
import HeroVideo from '../../../components/HeroVideo';
import VideoLightbox from '../../../components/VideoLightbox';
export const metadata = { title: "SliceX Films | About — The Cinema Collective" };

export default function AboutPage() {
  return (
    <>
    <div className="flex flex-col w-full text-on-surface">
      <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-space-2xl lg:pt-space-3xl pb-space-3xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 via-secondary-container/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10"></div>
        <div className="flex flex-col gap-space-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.25em]">01 // THE CINEMATOGRAPHY ATELIER • FOUNDED 2018</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface uppercase tracking-tight leading-none">
            WE DON’T JUST <br className="hidden sm:block" />
<span className="italic text-primary font-normal font-headline-lg lg:text-display-hero lowercase">capture</span> COUPLES—
            <span className="block text-secondary-fixed">WE CAST THEM.</span>
</h1>
            </div>
            <div className="lg:col-span-4 pb-space-xs">
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
            Every love story possesses an inherent cinematic weight. We treat destination weddings not as weekend events to record, but as grand three-act masterworks rendered in anamorphic chiaroscuro and 35mm celluloid cadence.
          </p>
            </div>
          </div>
          <div
            className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden bg-surface-container-lowest mt-space-md shadow-2xl group cursor-pointer border border-primary-container/20"
            data-yt="EUB8I5jshbI"
          >
            <HeroVideo videoId="EUB8I5jshbI" mobileFocusX={50} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-surface-container-lowest/60 pointer-events-none"></div>
            
            <div className="absolute inset-0 p-space-md lg:p-space-xl flex flex-col justify-between text-on-surface">
              {/* Top Camera HUD */}
              <div className="flex items-center justify-between font-label-sm text-label-sm tracking-widest uppercase pointer-events-none">
                <div className="flex items-center gap-space-xs bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-2xs rounded border border-primary-container/20">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-error animate-pulse"></span>
                  <span className="text-on-surface font-semibold">REC • 23.976 FPS</span>
                </div>
                <div className="hidden sm:flex items-center gap-space-md bg-surface-container-lowest/80 backdrop-blur-md px-space-md py-space-2xs rounded border border-primary-container/20 text-on-surface-variant">
                  <span>SHUTTER 1/48</span>
                  <span>•</span>
                  <span className="text-primary">ISO 800</span>
                  <span>•</span>
                  <span>COOKE ANAMORPHIC</span>
                </div>
                <div className="bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-2xs rounded border border-primary-container/20 text-primary font-bold">
                  4K DCI RAW
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="self-center flex flex-col items-center gap-3 transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 text-surface-container-lowest flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.6)] group-hover:bg-primary transition-all pointer-events-auto">
                  <span className="material-symbols-outlined text-[36px] sm:text-[44px] translate-x-0.5">play_arrow</span>
                </div>
                <span className="font-label-sm text-label-sm tracking-widest uppercase text-primary bg-surface-container-lowest/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary/40 shadow-lg">
                  WATCH FEATURED FILM • SWARUP &amp; SOUMYA
                </span>
              </div>

              {/* Bottom Info HUD */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs pointer-events-none">
                <div className="bg-surface-container-lowest/85 backdrop-blur-md px-space-md py-space-xs rounded max-w-md border border-primary-container/20">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-0.5">FEATURED WEDDING FILM</span>
                  <p className="font-body-sm text-body-sm text-on-surface italic">Swarup &amp; Soumya — A Royal Celebration</p>
                </div>
                <div className="hidden md:flex items-center gap-space-sm bg-surface-container-lowest/85 backdrop-blur-md px-space-md py-space-xs rounded border border-primary-container/20 text-outline font-label-sm text-label-sm tracking-widest uppercase">
                  <span>TIME: 19:42:11 IST</span>
                  <span>//</span>
                  <span className="text-secondary">SWARUP &amp; SOUMYA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-md pt-space-lg">
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-colors duration-300">
              <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-light">18</span>
              <div className="mt-space-sm">
                <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Annual Commissions</h4>
                <p className="font-body-sm text-body-sm text-outline mt-1">Strict worldwide quota guaranteeing artisanal focus</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-lg text-headline-lg text-secondary-fixed font-light">4K &amp; 35mm</span>
              <div className="mt-space-sm">
                <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Celluloid Cadence</h4>
                <p className="font-body-sm text-body-sm text-outline mt-1">Organic photochemical grain and dynamic range</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-lg text-headline-lg text-primary font-light">DGCA</span>
              <div className="mt-space-sm">
                <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Certified Aerial</h4>
                <p className="font-body-sm text-body-sm text-outline mt-1">Heritage fortress and palace airspace clearances</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-lg text-headline-lg text-secondary-fixed font-light">DaVinci</span>
              <div className="mt-space-sm">
                <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Node Grading</h4>
                <p className="font-body-sm text-body-sm text-outline mt-1">Custom skin-tone palettes &amp; chiaroscuro curves</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin-desktop py-space-3xl lg:py-space-4xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.25em]">02 // DIRECTOR’S MONOLOGUE • PRINCIPAL DESK</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero font-normal text-on-surface leading-tight">
            Abhishek Anand
          </h2>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
            Founder &amp; Principal Cinematographer
          </span>
            </div>
            <blockquote className="bg-surface-container-low p-space-xl rounded-xl relative overflow-hidden my-space-xs">
              <div className="absolute -top-4 -left-2 text-primary/10 font-headline-lg text-[100px] select-none pointer-events-none">“</div>
              <p className="font-headline-sm text-headline-sm italic text-on-surface leading-relaxed relative z-10 font-normal">
            “At SliceX Films, we don’t just capture couples—we cast them. Whether it’s a shy smile, an unsung glance, or an inside joke, we see every couple as the lead characters in their own story. To us, every couple is a hero and heroine—worthy of their own movie.”
          </p>
            </blockquote>
            <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              <p className="">
            The mainstream wedding industry has surrendered to hyperactive reels, formulaic transitions, and generic pop backing tracks that evaporate from memory within weeks. At the SliceX Atelier, we built our craft on the opposite conviction: true romance demands quiet contemplation, cinematic stillness, and unvarnished vulnerability.
          </p>
              <p className="">
            When we film within the mirrored durbar halls of Rajasthan or the mist-shrouded villas of Como, our cameras act as intimate observers. We refuse to choreograph artificial moments or disrupt sacred ceremonies. We wait in patience for that one breath before the veil lifts—the micro-cadence of true devotion.
          </p>
            </div>
            <div className="pt-space-md flex flex-wrap items-center gap-space-lg">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Studio Concierge</span>
                <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors font-medium" href="tel:+919827122620">+91 98271 22620</a>
              </div>
              <div className="w-[1px] h-8 bg-surface-container-highest hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Direct Desk</span>
                <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors font-medium" href="tel:+919658621038">+91 96586 21038</a>
              </div>
              <div className="w-[1px] h-8 bg-surface-container-highest hidden sm:block"></div>
              <a className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary-container font-label-md text-label-md uppercase rounded hover:bg-primary transition-all duration-300 shadow-lg" href="https://wa.me/919827122620" rel="noopener" target="_blank">
<span className="material-symbols-outlined text-[18px]">forum</span>
            Direct WhatsApp Consult
          </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="relative rounded-xl overflow-hidden bg-surface-container-low shadow-2xl group">
              <img alt="Abhishek Anand, founder and principal cinematographer of SliceX Films, seated in the studio holding a Sony Alpha camera under warm tungsten light" className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" src={withBase('/assets/abhishek-anand.jpg')} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 inset-x-0 p-space-lg flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary block">LEAD CINEMATOGRAPHER</span>
                  <p className="font-headline-sm text-headline-sm text-on-surface">Abhishek Anand</p>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl opacity-80">videocam</span>
              </div>
            </div>
            <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
              <span className="">MEMBERSHIP // ASIA FILM ARCHIVE</span>
              <span className="text-primary">•</span>
              <span className="">EST. MUMBAI &amp; RAJASTHAN</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-3xl lg:py-space-4xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
            <div>
              <div className="flex items-center gap-space-sm mb-space-xs">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.25em]">03 // PHILOSOPHY &amp; DOCTRINE</span>
              </div>
              <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase text-on-surface tracking-tight">
            THE TRIAD OF CINEMATIC RIGOR
          </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-light">
          Three non-negotiable artistic pillars separating our bespoke cinema from fast-turnaround consumer video production.
        </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container-low p-space-xl rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all duration-500 group relative">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">movie</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">PILLAR 01</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              Narrative vs. Generic Montage
            </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              We reject formulaic highlight reels set to algorithm-popular tracks. Every SliceX film is plotted like a festival-bound independent feature: introducing familial conflict, anticipation, intimacy, and catharsis with deliberate pacing.
            </p>
              </div>
              <div className="pt-space-xl mt-space-md flex items-center gap-space-xs text-outline font-label-sm text-label-sm tracking-widest uppercase group-hover:text-primary transition-colors">
                <span className="">DRAMATIC STRUCTURE</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-xl rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all duration-500 group relative">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">visibility_off</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">PILLAR 02</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              Invisible &amp; Immersive Presence
            </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              No blinding LED light panels, no giant stabilization cranes obstructing your parents' view of the mandap. We utilize wide-aperture cinema primes and ambient candlelight mastery to operate as unobtrusive photojournalists.
            </p>
              </div>
              <div className="pt-space-xl mt-space-md flex items-center gap-space-xs text-outline font-label-sm text-label-sm tracking-widest uppercase group-hover:text-primary transition-colors">
                <span className="">DISCREET FOOTPRINT</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-xl rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all duration-500 group relative">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                </div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">PILLAR 03</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              Archival Heirloom Longevity
            </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Trends age poorly. We color-grade in natural film emulation profiles inspired by Kodak and Fuji 35mm stocks. Delivered on bespoke solid brass hardware drives engineered to remain pristine and playable fifty years from now.
            </p>
              </div>
              <div className="pt-space-xl mt-space-md flex items-center gap-space-xs text-outline font-label-sm text-label-sm tracking-widest uppercase group-hover:text-primary transition-colors">
                <span className="">50-YEAR ENDURANCE</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HardwareApparatus />
      <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-3xl lg:py-space-4xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.25em]">05 // THE PROTOCOL</span>
            </div>
            <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase text-on-surface tracking-tight">
          HOW WE ARCHIVE YOUR SAGA
        </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
          A disciplined cinematic roadmap engineered to preserve intimacy while executing world-class technical production.
        </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest">PHASE 01</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">The Casting Interview</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              A private consultation exploring how you met, your individual aesthetics, personal music collections, and the unspoken dynamics of both families.
            </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex items-center justify-between text-outline font-label-sm text-label-sm">
                <span className="">TIMELINE</span>
                <span className="text-primary font-medium">MONTHS -06</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest">PHASE 02</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Lighting Geometry</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              We physically recce your palace courtyards or Italian villa, mapping solar trajectories for golden hour and planning acoustics around ceremony rituals.
            </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex items-center justify-between text-outline font-label-sm text-label-sm">
                <span className="">TIMELINE</span>
                <span className="text-primary font-medium">MONTHS -02</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest">PHASE 03</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Stealth Production</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              A lean team of 3-4 master cinematographers working on synchronized wireless timecode, operating like ghost documentarians across all celebration days.
            </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex items-center justify-between text-outline font-label-sm text-label-sm">
                <span className="">TIMELINE</span>
                <span className="text-primary font-medium">THE CELEBRATION</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest">PHASE 04</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Archival Vault Handover</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              Over 120 hours of surgical color grading, score arrangement, and packaging onto engraved brass encrypted solid-state drives and private 4K streaming portals.
            </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex items-center justify-between text-outline font-label-sm text-label-sm">
                <span className="">TIMELINE</span>
                <span className="text-primary font-medium">WEEKS +10</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin-desktop py-space-4xl relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-space-xl relative z-10">
          <div className="flex items-center gap-space-sm">
            <span className="w-6 h-[1px] bg-primary"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">SEASON 2025 // INQUIRIES OPEN</span>
            <span className="w-6 h-[1px] bg-primary"></span>
          </div>
          <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase text-on-surface tracking-tight">
        READY TO STEP INTO <br />
<span className="italic text-primary font-normal">your frame?</span>
</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light leading-relaxed">
        To preserve our uncompromised level of craft and intimate attention, we accept strictly 18 commissions per season across India, Europe, and destinations worldwide.
      </p>
          <div className="flex flex-col sm:flex-row items-center gap-space-md w-full justify-center pt-space-sm">
            <a className="w-full sm:w-auto px-space-2xl py-space-md bg-primary-container text-on-primary-container font-label-md text-label-md uppercase rounded tracking-[0.16em] hover:bg-primary transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] text-center" data-path="contact" href={withBase("/contact/")}>
          Secure Your Wedding Date
        </a>
            <a className="w-full sm:w-auto px-space-xl py-space-md bg-surface-container-low text-on-surface hover:text-primary font-label-md text-label-md uppercase rounded tracking-[0.16em] transition-all duration-300 text-center" data-path="portfolio" href={withBase("/portfolio/")}>
          Explore Film Portfolio
        </a>
          </div>
          <div className="pt-space-xl flex flex-wrap justify-center items-center gap-space-md text-outline font-label-sm text-label-sm tracking-widest uppercase">
            <span className="">UDAIPUR</span>
            <span className="">•</span>
            <span className="">MUMBAI</span>
            <span className="">•</span>
            <span className="">LAKE COMO</span>
            <span className="">•</span>
            <span className="">WORLDWIDE</span>
          </div>
        </div>
      </section>
    </div>
    <SiteFooter />
    <VideoLightbox />
    </>
  );
}
