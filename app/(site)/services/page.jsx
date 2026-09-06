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
        <div className="max-w-7xl mx-auto flex flex-col gap-space-4xl">
          <article className="group relative bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-[580px] overflow-hidden bg-surface-container-lowest">
                <img className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Ultra-luxury Indian royal wedding in Jodhpur palace courtyard at blue hour dusk with warm lantern glows, couple in handcrafted zardozi velvet sherwani and royal crimson lehenga, cinematic shallow depth of field, anamorphic 2.39 to 1 letterbox ratio, film grain, chiaroscuro golden highlights on ancient stone pillars" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYOMf4c9GitEZvHfWkMB3QznRtQvRAM1EN0VU0TeGLlBt6tOp0zgg3j-C3HUDUti-pteVYrrL0z1JIfFFyg7-U2Y6s8o_Jg5ycd5V2I68l6JSrYAT06u8G2o35ihJ6hh_2FjkpQHG8ABTTNGQ6zYCq3fFHMYWewwKaasPJs4BOfLv6QsvGXUoAJdfSkUwVUe8MKEGwbHX6Cv7rEXWPAfdCeWmsM2-KcjlAExgHbgao64mutzchWXpEQ" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-80 lg:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container hidden lg:block"></div>
                <div className="absolute top-space-md left-space-md flex items-center gap-space-xs">
                  <span className="px-space-sm py-space-2xs bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest uppercase rounded">FLAGSHIP FEATURE</span>
                  <span className="px-space-sm py-space-2xs bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm tracking-widest uppercase rounded">6K MASTER</span>
                </div>
                <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm tracking-widest">
                  <span className="flex items-center gap-space-2xs">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                COLOR SCIENCE: ACES 33-POINT LUT
              </span>
                  <span>2.39:1 CINEMASCOPE</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-space-xl lg:p-space-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary">COLLECTION I</span>
                    <span className="font-headline-sm text-headline-sm text-outline-variant font-light">01</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-space-sm leading-tight">
                HAUTE WEDDING FILMS
              </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                Narrative feature-length cinema constructed with theatrical gravitas. Multi-angle dual cinema camera setups, bespoke original composition licensing, and multi-track dialogue mastering that anchors your vows in acoustic immortality.
              </p>
                  <div className="space-y-space-md mb-space-xl">
                    <div className="bg-surface-container-low p-space-md rounded">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-2xs">DELIVERABLES ARCHIVE</span>
                      <ul className="font-body-sm text-body-sm text-on-surface space-y-space-2xs">
                        <li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[14px]">movie</span>
                      45–60 min Master Theatrical Feature Cut
                    </li>
                        <li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[14px]">play_circle</span>
                      3–5 min Poetic Trailer (Festival Grade)
                    </li>
                        <li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[14px]">hard_drive</span>
                      Hard drive vault containing 4K HDR ProRes master
                    </li>
                      </ul>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-space-2xs">STUDIO OPTICS &amp; SENSORS</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Sony FX6 / FX3 Dual Cine Bodies • Cooke &amp; Atlas Anamorphic Prime Lenses • Lectrosonics Dual RF Audio Systems
                  </p>
                    </div>
                  </div>
                </div>
                <div className="pt-space-md flex items-center justify-between">
                  <a className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-[0.18em] hover:translate-x-1 transition-transform" data-path="contact" href={withBase("/contact/")}>
                COMMISSION WEDDING FILM
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
                  <span className="font-label-sm text-label-sm uppercase text-outline">LIMITED DATES</span>
                </div>
              </div>
            </div>
          </article>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
            <article className="group bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)]">
              <div className="relative h-80 overflow-hidden bg-surface-container-lowest">
                <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Editorial wedding photography close-up in high fashion Vogue style, bride with delicate lace veil catching golden rim light, groom in bespoke black velvet tuxedo, intimate black and white chiaroscuro aesthetic with rich tonal gradations and subtle film grain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjxlSL-iizywlSZBCQCW4PMGDaMUxAK3xOKUw2d7H4l7YmRiNl44d2TUmVQpq86j70qdJLZKO6kT7VVp1La0JrP34WCYgarcGlTo5Mmhn3dfAUlQycW9Xy6pD9RSHKULj_-bxY5xkOV_pQ6eoHEPsKJHeUZC4d-nN717hmMYKabXcVw1HwB2-ptlcxjo8Sj29zryGMCvhpbyuY8nhYb0MpP-M-q3S2IVezcSOziISkslqN_iuiSSG-vg" />
                <div className="absolute top-space-md left-space-md flex items-center gap-space-xs">
                  <span className="px-space-sm py-space-2xs bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest uppercase rounded">FINE ART STILLS</span>
                </div>
                <div className="absolute bottom-space-md right-space-md font-headline-sm text-headline-sm text-outline-variant">
              02
            </div>
              </div>
              <div className="p-space-xl flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary block mb-space-2xs">COLLECTION II</span>
                  <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-space-sm">
                EDITORIAL PHOTOGRAPHY
              </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                High-fashion editorial stills merged seamlessly with unscripted documentary photojournalism. Capturing stolen glances, sartorial silhouettes, and the palpable tension of high-magnitude emotion.
              </p>
                  <div className="space-y-space-sm mb-space-lg">
                    <div className="bg-surface-container-low p-space-sm rounded">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-2xs">DELIVERABLES</span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                    350+ Bespoke Hand-Graded High-Resolution Stills • Hand-bound Heirloom Archival Linen Album (Made in Florence) • Private Encrypted Proofing Gallery
                  </p>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-space-2xs">OPTICS</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Leica SL2 &amp; Sony A1 • Noctilux 50mm f/0.95 &amp; Master G Primes
                  </p>
                    </div>
                  </div>
                </div>
                <div className="pt-space-sm flex items-center justify-between">
                  <a className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-[0.18em] hover:translate-x-1 transition-transform" data-path="contact" href={withBase("/contact/")}>
                EXPLORE STILL PORTFOLIO
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
                </div>
              </div>
            </article>
            <article className="group bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)]">
              <div className="relative h-80 overflow-hidden bg-surface-container-lowest">
                <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Editorial pre-wedding photoshoot on Amalfi coast cliffside or Lake Como terrace at sunset, stylish couple with flowing silk haute couture gown moving in the alpine breeze, soft cinematic golden hour lighting, analog 35mm film aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3N_C5bMyMAZepo-cML5nk0Nmnsg8ugaKXRMdMhCA4O2QV0QMZvhufXKIBXOBvnVUz_vHboQ_hoxAdrHPnl-wCljcz2VAitLmWh6EIqewcuhxTJp5bCS7l_wQpkAn4GIzBLpd-P5YjBxFF0VgiJLFGIJcBS8dGijbMMua55FHsJI84w0Noj9N6autEo4KatR9jIPU1C2jupjZqxIyCdiXYW5yPa7cxhkD6CQn3aEea7d1_xH9jUTv_fw" />
                <div className="absolute top-space-md left-space-md flex items-center gap-space-xs">
                  <span className="px-space-sm py-space-2xs bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest uppercase rounded">DESTINATION PROLOGUE</span>
                </div>
                <div className="absolute bottom-space-md right-space-md font-headline-sm text-headline-sm text-outline-variant">
              03
            </div>
              </div>
              <div className="p-space-xl flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary block mb-space-2xs">COLLECTION III</span>
                  <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-space-sm">
                PRE-WEDDING FILMS
              </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Conceptual short cinematic vignettes set against extraordinary global backdrops—from Venetian canals to Lake Como and Rajasthani desert fortresses. Comprehensive wardrobe moodboards and narrative storyboarding included.
              </p>
                  <div className="space-y-space-sm mb-space-lg">
                    <div className="bg-surface-container-low p-space-sm rounded">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-2xs">DELIVERABLES</span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                    3–5 min Theatrical Narrative Vignette • 4 High-End 9:16 Vertical Cuts for Mobile Devices • Concept Moodboard &amp; Styling Direction Session
                  </p>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-space-2xs">OPTICS</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Steadicam Rigging • Zeiss Supreme Primes • Super 8mm Analog Texture Pass
                  </p>
                    </div>
                  </div>
                </div>
                <div className="pt-space-sm flex items-center justify-between">
                  <a className="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-[0.18em] hover:translate-x-1 transition-transform" data-path="contact" href={withBase("/contact/")}>
                PLAN DESTINATION PROLOGUE
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
                </div>
              </div>
            </article>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
            <article className="group bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)]">
              <div className="relative h-64 overflow-hidden bg-surface-container-lowest">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Intimate engagement session inside a candlelit private architectural library, bride wearing solitaire diamond ring embracing fiancé, muted warm bronze tones, gentle lens flare, dark moody editorial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLskSYFHb6AXTy1QJ7z-mONANdCnucrf71I-zZuYWnQqSQaQMeNXQ4a_qTovL2Cy6wh7ioe5GCCvfT1JGFyQD4Ba3W_BkK1vlY21O1qli8LyBg5T_H7rH3T9N9MkmCNqXwdspQ7j8nRsO_yUIJNT8QqowtofTQx2W1WekCjUvlChdh0xXB0gS65y0_JUiA7oqeC2iYbcg9cX9rgqNxdDty-oGHLtRTy1CMBLPd9AIL717eu2eIcP1osQ" />
                <div className="absolute top-space-md left-space-md">
                  <span className="px-space-sm py-space-2xs bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest uppercase rounded">INTIMATE PORTRAITURE</span>
                </div>
                <div className="absolute bottom-space-md right-space-md font-headline-sm text-headline-sm text-outline-variant">
              04
            </div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary block mb-space-2xs">COLLECTION IV</span>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">
                ENGAGEMENT STORIES
              </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Unvarnished micro-documentaries capturing the immediate aftermath of the proposal. Audio recordings of personal reflections paired with quiet, cinematic portraiture.
              </p>
                  <div className="bg-surface-container-low p-space-sm rounded mb-space-md space-y-space-2xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block">OUTPUT</span>
                    <p className="font-body-sm text-body-sm text-on-surface">2-Day Quick-Edits for social announcement • Complete 8-10 min archival audio-visual documentary chronicle.</p>
                  </div>
                </div>
                <a className="inline-flex items-center gap-space-2xs text-primary font-label-sm text-label-sm uppercase tracking-widest hover:translate-x-1 transition-transform" data-path="contact" href={withBase("/contact/")}>
              INQUIRE ENGAGEMENT
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
              </div>
            </article>
            <article className="group bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)]">
              <div className="relative h-64 overflow-hidden bg-surface-container-lowest">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Same day edit live screening at a luxury gala wedding reception, ballroom guests watching magnificent high definition cinema screen displaying wedding ceremony that happened earlier in the day, champagne glasses glowing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGu6ZXeVQHoSt-qAA_s-YtEY5kkK4jsHX3U2EyhVw_SnyHyOBytNFvkir0gIjkC1VKi591JjqoeJnRybVP576HdzgYCZ-LIxDjmNuDuX17OlruAT-s3QtE0sBtsF2BgBa9kQujGzKvj2VCjY9CsxvX5iKTcO2Mwr1wqhvpOXQWh37_9goWahG4KR470izfI0J2Cp8JX9Mr008Pj1aDrUJBpvisfLmxmNFwWMnIiEb3gL5sdvcisLc3dw" />
                <div className="absolute top-space-md left-space-md">
                  <span className="px-space-sm py-space-2xs bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest uppercase rounded">RAPID EDITORIAL</span>
                </div>
                <div className="absolute bottom-space-md right-space-md font-headline-sm text-headline-sm text-outline-variant">
              05
            </div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary block mb-space-2xs">COLLECTION V</span>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">
                REELS &amp; SAME-DAY EDITS
              </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                On-site editorial editing suites operating in real-time. Unmatched velocity without sacrificing our signature tone curves, film grain emulations, or acoustic punch.
              </p>
                  <div className="bg-surface-container-low p-space-sm rounded mb-space-md space-y-space-2xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block">OUTPUT</span>
                    <p className="font-body-sm text-body-sm text-on-surface">48-Hour delivery guarantee on high-velocity 9:16 vertical reels • Master Reception Cut screened same evening for guests.</p>
                  </div>
                </div>
                <a className="inline-flex items-center gap-space-2xs text-primary font-label-sm text-label-sm uppercase tracking-widest hover:translate-x-1 transition-transform" data-path="contact" href={withBase("/contact/")}>
              SAME-DAY AVAILABILITY
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
              </div>
            </article>
            <article className="group bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)]">
              <div className="relative h-64 overflow-hidden bg-surface-container-lowest">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Epic aerial drone cinema shot over a majestic heritage palace fortress in Udaipur India surrounded by tranquil reflective waters, warm evening lights, dramatic scale, cinematic widescreen perspective, 4K resolution" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSlsPntPXeKKrC_YIXx3xdp7vOKkYY8lkrsWNPTOAUPaveBSM_QUa74NFdcvm0DRrPfxDKOiXKleoICnW_z2Fhv5gqPJRjmvOoKnQE952vw20rAMjBZS0RzM7gGCzBIYuA3jNt4M2vkK6sf1Y_jmJx8_gbhmMBZuQ1UHK4F8VgfC_TG3OwWYyi-QCFKfZSErxp_Etv8w4K4RYJTFsn85Evqf4pZ9S_TEUADQs9IoI9_G6T-vh5lm8Kjg" />
                <div className="absolute top-space-md left-space-md">
                  <span className="px-space-sm py-space-2xs bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm tracking-widest uppercase rounded">CERTIFIED AERIAL</span>
                </div>
                <div className="absolute bottom-space-md right-space-md font-headline-sm text-headline-sm text-outline-variant">
              06
            </div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary block mb-space-2xs">COLLECTION VI</span>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">
                ARCHITECTURAL DRONE
              </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Certified DGCA licensed aerial operators maneuvering cinema-grade aerial platforms. Capturing majestic palace scale, sweeping mountain valleys, and monumental symmetry.
              </p>
                  <div className="bg-surface-container-low p-space-sm rounded mb-space-md space-y-space-2xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block">OUTPUT</span>
                    <p className="font-body-sm text-body-sm text-on-surface">5.1K Apple ProRes 422 HQ aerial plates • High-angle establishing master compositions for feature cinema inclusion.</p>
                  </div>
                </div>
                <a className="inline-flex items-center gap-space-2xs text-primary font-label-sm text-label-sm uppercase tracking-widest hover:translate-x-1 transition-transform" data-path="contact" href={withBase("/contact/")}>
              EXPLORE FLIGHT PROTOCOLS
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
              </div>
            </article>
          </div>
        </div>
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
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-[0.16em] rounded shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:bg-primary transition-all duration-300" data-path="contact" href={withBase("/contact/")}>
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
                <a className="hover:text-primary transition-colors" data-path="home" href={withBase("/")}>Home Archive</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="films" href={withBase("/films/")}>Cinema Collective</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="services" href={withBase("/services/")}>Editorial Offerings</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="portfolio" href={withBase("/portfolio/")}>Featured Exhibitions</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="contact" href={withBase("/contact/")}>Inquire Studio</a>
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
