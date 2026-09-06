'use client';

import { useEffect } from 'react';
import VideoLightbox from '../../../components/VideoLightbox';

export default function PortfolioPage() {
  useEffect(() => {
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const bound = [];
    filterButtons.forEach((btn) => {
      const handler = () => {
        const filter = btn.getAttribute('data-filter');
        filterButtons.forEach((b) => {
          b.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-semibold');
          b.classList.add('text-on-surface-variant');
        });
        btn.classList.add('bg-primary-container', 'text-on-primary-container', 'font-semibold');
        btn.classList.remove('text-on-surface-variant');
        portfolioItems.forEach((item) => {
          const categories = item.getAttribute('data-category') || '';
          if (filter === 'all' || categories.includes(filter)) {
            item.style.display = '';
            item.style.opacity = '1';
          } else {
            item.style.display = 'none';
            item.style.opacity = '0';
          }
        });
      };
      btn.addEventListener('click', handler);
      bound.push([btn, handler]);
    });
    return () => bound.forEach(([b, h]) => b.removeEventListener('click', h));
  }, []);

  return (
    <>
    <VideoLightbox />
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-72 bg-gradient-to-b from-primary/10 via-secondary-container/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
        <section className="w-full px-margin-mobile lg:px-margin-desktop pt-space-xl lg:pt-space-2xl pb-space-lg">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary">03 / CURATORIAL ARCHIVE</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-outline font-light">INDEX 2021 — 2025</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-end">
              <div className="lg:col-span-8">
                <h1 className="font-headline-lg lg:font-display-hero text-headline-lg lg:text-display-hero uppercase tracking-tight text-on-surface leading-[1.08]">
              Moments Immortalized in <span className="font-headline-lg lg:font-display-hero text-primary italic font-normal">35mm Cadence.</span>
</h1>
              </div>
              <div className="lg:col-span-4 lg:pl-space-md">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              An exhibition of destination weddings, intimate ceremonies, and editorial love stories across Udaipur, Jaipur, Lake Como, and beyond.
            </p>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-primary/40 via-outline-variant to-transparent my-space-xs"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md pt-space-xs" id="portfolio-filters">
              <div className="flex flex-wrap items-center gap-space-xs bg-surface-container-low p-space-2xs rounded-lg shadow-sm">
                <button className="portfolio-filter-btn px-space-md py-space-xs rounded font-label-md text-label-md tracking-wider uppercase transition-all duration-300 bg-primary-container text-on-primary-container font-semibold shadow-sm" data-filter="all" type="button">
              All (18)
            </button>
                <button className="portfolio-filter-btn px-space-md py-space-xs rounded font-label-md text-label-md tracking-wider uppercase transition-all duration-300 text-on-surface-variant hover:text-primary" data-filter="weddings" type="button">
              Weddings (8)
            </button>
                <button className="portfolio-filter-btn px-space-md py-space-xs rounded font-label-md text-label-md tracking-wider uppercase transition-all duration-300 text-on-surface-variant hover:text-primary" data-filter="pre-weddings" type="button">
              Pre-Weddings (4)
            </button>
                <button className="portfolio-filter-btn px-space-md py-space-xs rounded font-label-md text-label-md tracking-wider uppercase transition-all duration-300 text-on-surface-variant hover:text-primary" data-filter="engagements" type="button">
              Engagements (3)
            </button>
                <button className="portfolio-filter-btn px-space-md py-space-xs rounded font-label-md text-label-md tracking-wider uppercase transition-all duration-300 text-on-surface-variant hover:text-primary" data-filter="films" type="button">
              Films (3)
            </button>
              </div>
              <div className="hidden md:flex items-center gap-space-sm font-label-sm text-label-sm text-outline uppercase tracking-widest">
                <span className="">SORT: CHRONOLOGICAL</span>
                <span className="">•</span>
                <span className="text-primary font-medium">CURATOR'S CUT</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-md">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-y-space-2xl">
            <article data-yt="jEFML86Tk7g" className="portfolio-item md:col-span-12 group cursor-pointer relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_15px_45px_-10px_rgba(212,175,55,0.18)]" data-category="weddings films">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-[2.1/1] overflow-hidden bg-surface-container-high">
                  <img className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-105" alt="Gobinda & Mamuni wedding film still" src="https://i.ytimg.com/vi/jEFML86Tk7g/maxresdefault.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/30 lg:hidden"></div>
                  <div className="absolute top-space-md left-space-md flex items-center gap-space-xs bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-2xs rounded-full">
                    <span className="material-symbols-outlined text-primary text-[16px]">play_circle</span>
                    <span className="font-label-sm text-label-sm tracking-[0.2em] text-primary uppercase">FEATURE FILM EXCLUSIVE</span>
                  </div>
                  <div className="absolute bottom-space-md right-space-md font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-2xs rounded tracking-widest uppercase">
                4K DCI • 2.39:1 ANAMORPHIC
              </div>
                </div>
                <div className="lg:col-span-4 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex flex-wrap gap-space-2xs">
                      <span className="px-space-xs py-space-2xs rounded bg-surface-container-highest text-primary font-label-sm text-label-sm tracking-widest uppercase">4K Anamorphic</span>
                      <span className="px-space-xs py-space-2xs rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">Royal Palace</span>
                      <span className="px-space-xs py-space-2xs rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">3-Day</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300 pt-space-2xs">
                  Gobinda &amp; Mamuni — Wedding Film
                </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                  A full cinematic wedding film blending grand celebration with quiet, intimate family moments. Tap to watch on YouTube.
                </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Cinematography</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">SliceX Films</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110 shadow-md" type="button">
                      <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <article className="portfolio-item md:col-span-12 lg:col-span-5 group relative bg-surface-container rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.14)] flex flex-col justify-between" data-category="weddings">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-high">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-110" data-alt="Chiaroscuro moody bride looking into an ornate antique golden mirror while wearing sheer vintage lace veil and couture wedding dress in an atmospheric dark stone room with soft window rim lighting, fine art editorial film still" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmIDKGxODGKwZka2xcZentvxUzH3ozk1JKnjhjVy4nB83Fbcpqnd8pUq-2MIK_m1jGXUlo43VwYlY4al_70UbGj_4QwPh_ttYGJcCjXVJLLMsUU9dEsi7POTr-uDWl3NmjRBsZm_TfLa163vhfmMsTrGcpOgE5UMngDjJPgl30UEg2SQ6I2w_wKkzrQkPReC0RyqG9v9gVtgWzIMN2UinNo68PbxMu-mkjyK-Ia3FaEdSYN_uwuZNeyw" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-black/20"></div>
                <div className="absolute top-space-md left-space-md flex gap-space-2xs">
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm text-primary font-label-sm text-label-sm tracking-wider uppercase">Chiaroscuro</span>
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface font-label-sm text-label-sm tracking-wider uppercase">Portra 400</span>
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-outline font-label-sm text-label-sm tracking-widest uppercase">
                  <span className="">JAIPUR HAVELI PREP &amp; VOWS</span>
                  <span className="text-primary font-medium">35MM ANALOG</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300">
              Vikram &amp; Ananya — Heritage Monochrome
            </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Deep shadows and delicate lace reflections captured in the quiet prelude before the grand baraat procession at Samode.
            </p>
              </div>
            </article>
            <article className="portfolio-item md:col-span-12 lg:col-span-7 group relative bg-surface-container rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.14)] flex flex-col justify-between" data-category="weddings films">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95" data-alt="Indian bride and groom in opulent deep maroon velvet and antique gold zardozi sherwani embracing under majestic carved sandstone arches overlooking illuminated ancient Mehrangarh fort during blue hour twilight, ambient warm earthen oil lamps glowing around them" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOGyW9pc1EubyVnzhDQJetqOukbzc4yMaqizmOeYxR7qGgw7nOoYbCllaRapjSruhivlxG7C_F76ggL0iboys1lOY6H2uGj7unyp2iTBMylZyT2M4PpNhsuoy1GGY7FUU_sTuoPEIHnEx5O5cJnaAST1i3qWMr2JqiKWo-Y5sy_KTjFW46SiANW027UN3nDscsUH1zrvnqd3hyGi6HVKEsnPYsgpFuVDhCH7KfuqNaKcga-MZYh8yM3w" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-black/20"></div>
                <div className="absolute top-space-md left-space-md flex gap-space-2xs">
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm text-secondary font-label-sm text-label-sm tracking-wider uppercase">Twilight Vows</span>
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm text-primary font-label-sm text-label-sm tracking-wider uppercase">Jodhpur</span>
                </div>
                <div className="absolute bottom-space-md left-space-md flex items-center gap-space-2xs bg-surface-container-lowest/80 backdrop-blur-sm px-space-xs py-space-2xs rounded font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
                  <span className="material-symbols-outlined text-primary text-[14px]">hd</span>
                  <span className="">DIRECTOR'S CUT AVAILABLE</span>
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-outline font-label-sm text-label-sm tracking-widest uppercase">
                  <span className="">MEHRANGARH RAMPARTS</span>
                  <span className="text-primary font-medium">OCTOBER 2024</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300">
              Kabir &amp; Tara — Twilight Vows at Mehrangarh
            </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
              An architectural drama set against blue city ramparts. Golden rim lighting highlights raw hand-embellished silk and emotional gazes as night settles over Rajasthan.
            </p>
              </div>
            </article>
            <article className="portfolio-item md:col-span-12 lg:col-span-6 group relative bg-surface-container rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.14)] flex flex-col justify-between" data-category="pre-weddings">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-100" data-alt="Joyful bride radiant in bright yellow attire covered in golden turmeric haldi laughing euphorically surrounded by loving family members hands applying turmeric paste under cascaded marigold flower canopies in sunlit heritage courtyard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBne6J962TsrZTi3vS_ZlQJvesYvuNgtb1oXm-B0gHuqh91ErRBXLvsLza8RuQCtiG_Sq7MVgZqzOuXmcTDJt__QNQQDOR93G4N1_27iWfsn4x6rQxWp1y8HuFNo9NNfcvcP5z6NqQlY7IfzNf484ruxVNVPvyEbVvitPhoL10waz40j6pcVrh0jD5pI1Twoya1gFUQ02Od5rJ3XiNRQQhBudN2-pkPE54SjOfAhGjaKnZJreJGEsLzkg" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-black/20"></div>
                <div className="absolute top-space-md left-space-md flex gap-space-2xs">
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm text-primary font-label-sm text-label-sm tracking-wider uppercase">Kodak Portra</span>
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface font-label-sm text-label-sm tracking-wider uppercase">Raw Candid</span>
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-outline font-label-sm text-label-sm tracking-widest uppercase">
                  <span className="">MARIGOLD COURTYARD • JAIPUR</span>
                  <span className="text-secondary font-medium">DAY 01</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300">
              Dev &amp; Myra — Haldi Sunlight &amp; Festivities
            </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
              Unfiltered joy in motion. Splashes of saffron water, yellow silk dupattas, and natural laughter caught on high-speed medium format analog lenses.
            </p>
              </div>
            </article>
            <article className="portfolio-item md:col-span-12 lg:col-span-6 group relative bg-surface-container rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.14)] flex flex-col justify-between" data-category="weddings">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
                <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105" data-alt="Deeply emotional moment of an Indian father shedding genuine tears holding his daughter bride tight during the emotional vidaai wedding farewell ceremony, authentic tears of joy and bittersweet warmth captured in cinematic natural backlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfxA6nU3FE1OzPKUCY63_Gy4opS7nUrvt10bcwF4TpVULb7RXBs4Ye4UwVaptCUIfve6LTLbBcasqf6PaiHRm6O9Xzd-5WfUg-KwnKB97flgXchSSaa8xP0b7lCF_URgX_5XoQWzHkEuhMTpTzUlAIF9IzGSMmBOjXycYyyWLMDq2WAzs-EXwfCkW4OU7EcnZJFp0qrgO3wxOgq3V4aMNPLDi9h4gF1eW6PFI4gBOxx4ifOnfNJQepVQ" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-black/20"></div>
                <div className="absolute top-space-md left-space-md flex gap-space-2xs">
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm text-primary font-label-sm text-label-sm tracking-wider uppercase">Emotional Documentary</span>
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface font-label-sm text-label-sm tracking-wider uppercase">35mm Film Still</span>
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-xs">
                <div className="flex items-center justify-between text-outline font-label-sm text-label-sm tracking-widest uppercase">
                  <span className="">RAMBAGH MANDAP • CEREMONY</span>
                  <span className="text-primary font-medium">FAMILY HEIRLOOM</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300">
              Samarth &amp; Tanvi — The Varmala Embrace
            </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
              Tears of joy and ancestral pride captured without intrusion. Quiet long-focal documentations that turn split seconds into multi-generational memories.
            </p>
              </div>
            </article>
            <article className="portfolio-item md:col-span-12 group relative bg-surface-container-low rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_15px_45px_-10px_rgba(212,175,55,0.18)]" data-category="pre-weddings engagements">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-5 p-space-lg lg:p-space-xl flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-space-2xs">
                    <span className="material-symbols-outlined text-[15px]">diamond</span>
                    <span className="">EDITORIAL PRE-WEDDING ARCHIVE</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300 mb-space-xs">
                Arjun &amp; Kiara — Lake Pichola Twilight Glow
              </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Conducted at Jagmandir Island at sunset. The couple was styled in bespoke velvet smoking jackets and champagne couture chiffon, mirrored by the tranquil ripples of Udaipur's golden waters.
              </p>
                  <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    <div className="flex items-center gap-space-2xs">
                      <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                      <span className="">UDAIPUR, INDIA</span>
                    </div>
                    <div className="flex items-center gap-space-2xs">
                      <span className="material-symbols-outlined text-primary text-[16px]">schedule</span>
                      <span className="">GOLDEN HOUR SESSION</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-[16/10] overflow-hidden bg-surface-container-high order-1 lg:order-2">
                  <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95" data-alt="Luxury couple romantic portrait in regal historic palace pavilion overlooking shimmering serene lake waters at dusk, dramatic amber glow from palace chandeliers mixing with twilight deep blue sky, haute couture editorial styling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyMlQ6QdfKnj8mGvDTBt54in92xh4bBcpAZy2_wEUMh7m8vgxMFTC0T-wo6jvGD4A080I20d3RWRVdY_7d9-eLLgR1uleFQGN1PBsqmBLdJb7EdJizqV894gDHDHy_c1QBdcgvf8mHRkQ5yzyUiaplKNMhpH0KpG2VMO2g3SFfDVl7XGujlZwBxJ-ugZ8oBYptBcdRW7G2NX8D78HDFkGiMBpWBKHHcU-x9OnU9FrHG1UoL0crutg9WQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent lg:hidden"></div>
                  <div className="absolute top-space-md right-space-md bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-2xs rounded text-primary font-label-sm text-label-sm tracking-widest uppercase">
                FINE ART EXHIBITION
              </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-2xl bg-surface-container-low/60 relative overflow-hidden mt-space-xl">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xs">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary block mb-space-2xs">ARCHIVAL RIGOR</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">The Anatomy of Heirloom Cinema</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Every celebration is documented with redundant dual-system audio recording, master prime optics, and color grading tuned to master film stocks.
          </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              <div className="bg-surface-container p-space-lg rounded-lg shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-widest">Films Documented</span>
                <div className="my-space-md">
                  <span className="font-display-hero text-display-hero text-primary font-normal leading-none">142</span>
                </div>
                <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span className="">Stories Cast Worldwide</span>
                </div>
              </div>
              <div className="bg-surface-container p-space-lg rounded-lg shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-widest">Global Escapes</span>
                <div className="my-space-md">
                  <span className="font-display-hero text-display-hero text-on-surface font-normal leading-none">18</span>
                </div>
                <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">public</span>
                  <span className="">Destination Cities</span>
                </div>
              </div>
              <div className="bg-surface-container p-space-lg rounded-lg shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-widest">Candid Ratio</span>
                <div className="my-space-md flex items-baseline">
                  <span className="font-display-hero text-display-hero text-primary font-normal leading-none">100</span>
                  <span className="text-headline-md font-headline-md text-primary">%</span>
                </div>
                <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">theater_comedy</span>
                  <span className="">Unscripted Integrity</span>
                </div>
              </div>
              <div className="bg-surface-container p-space-lg rounded-lg shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-widest">Master Format</span>
                <div className="my-space-md">
                  <span className="font-display-hero text-display-hero text-on-surface font-normal leading-none">4K</span>
                </div>
                <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">album</span>
                  <span className="">DCI Archival Master</span>
                </div>
              </div>
            </div>
            <div className="p-space-lg bg-surface-container rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">camera</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Curated Optical Ecosystem</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Arri Alexa Mini LF, Cooke Anamorphic /i Full Frame Plus, Hasselblad H6D Medium Format.</p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm w-full md:w-auto justify-end">
                <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">COLOR CALIBRATION: KODAK 2383 PRINT EMULATION</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-3xl relative">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-space-xl lg:p-space-2xl rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-8 flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary">CONFIDENTIAL PROOFING VAULT</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Looking for a specific celebration or venue aesthetic?
            </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
              We maintain unlisted private screenings for iconic estates—including Taj Lake Palace, Umaid Bhawan, Villa d'Este, and Amanbagh. Request bespoke proofs tailored to your itinerary.
            </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end items-stretch">
                <a className="inline-flex items-center justify-center px-space-lg py-space-md bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider rounded font-semibold shadow-lg hover:bg-primary transition-all duration-300 text-center" data-path="contact" href="/contact">
              REQUEST PRIVATE VAULT ACCESS
            </a>
                <a className="inline-flex items-center justify-center px-space-lg py-space-md bg-surface-container-highest text-on-surface hover:text-primary font-label-md text-label-md uppercase tracking-wider rounded transition-all duration-300 text-center" data-path="contact" href="/contact">
              BOOK YOUR DATE
            </a>
              </div>
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
                <a className="hover:text-primary transition-colors" data-path="home" href="/">Home Archive</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="films" href="/films">Cinema Collective</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="services" href="/services">Editorial Offerings</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="portfolio" href="/portfolio">Featured Exhibitions</a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="contact" href="/contact">Inquire Studio</a>
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
