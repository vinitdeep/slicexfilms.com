import SiteFooter from '../../../components/SiteFooter';
import { withBase } from '../../../lib/basePath';

export const metadata = {
  title: 'SliceX Films | Privacy Policy',
  description:
    'How SliceX Films collects, uses and protects the personal information you share with us through our website, inquiry forms, Chitra chat assistant and WhatsApp.',
};

const EFFECTIVE = '8 September 2026';

const SECTIONS = [
  {
    n: '01',
    title: 'Who we are',
    body: (
      <>
        <p>
          SliceX Films (&ldquo;SliceX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a cinematic wedding photography and film studio
          based at Main Road, near College Square, Balangir, Odisha 767001, India, and the operator of <b>slicexfilms.com</b>.
          This policy explains what personal information we collect through this website and our related channels, why we
          collect it, and the choices you have.
        </p>
        <p>
          Questions about this policy or your data can be sent to{' '}
          <a href="mailto:slicexfilms@gmail.com">slicexfilms@gmail.com</a> or by WhatsApp to +91&nbsp;98271&nbsp;22620.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'Information you give us',
    body: (
      <>
        <p>We collect information only when you choose to share it with us, for example when you:</p>
        <ul>
          <li>Fill in the inquiry form on the Contact page or the booking form on the Packages page. Depending on what you enter, this can include your and your partner&rsquo;s names, email address, phone or WhatsApp number, celebration dates, venue or destination, guest count, approximate budget, and any notes or references you add.</li>
          <li>Talk to <b>Chitra</b>, the chat assistant on this site. Chitra may ask for your first name and, optionally, a WhatsApp number so the studio can follow up.</li>
          <li>Message us on WhatsApp, email us, call us, or book a consultation.</li>
          <li>Become a client, in which case we also hold the details needed to plan, film, deliver and invoice your commission.</li>
        </ul>
        <p>You are never required to give us more than you are comfortable with. Any field can be left blank, and you can simply call or WhatsApp us instead.</p>
      </>
    ),
  },
  {
    n: '03',
    title: 'Information collected automatically',
    body: (
      <>
        <p>
          We do not run advertising trackers, analytics pixels or marketing cookies on this website. Like almost every website, our
          hosting provider may keep standard server logs (such as IP address, browser type, pages requested and time of request)
          for security and operational purposes.
        </p>
        <p>
          Some pages embed content from third parties which may set their own cookies or collect usage data under their own policies:
        </p>
        <ul>
          <li><b>YouTube</b> video players (served in privacy-enhanced mode) for our films.</li>
          <li><b>Google Maps</b> for our studio location on the Contact page.</li>
          <li><b>Google Fonts</b> for typography.</li>
        </ul>
      </>
    ),
  },
  {
    n: '04',
    title: 'The Chitra chat assistant',
    body: (
      <>
        <p>
          Chitra is an automated assistant that answers questions about our services, packages, availability and process. To
          generate its replies, the messages you type in the chat are sent to our chat service and processed by an artificial
          intelligence language model provided by a third-party AI provider. Only the current conversation is sent, together with
          the first name you give, so that replies can be personalised.
        </p>
        <ul>
          <li>Chat messages are used solely to produce the reply you see and are not used to train AI models.</li>
          <li>Conversations are kept in your own browser for the duration of your visit so the chat survives moving between pages; they are not stored on our servers as a permanent record.</li>
          <li>If you share a WhatsApp number with Chitra, it is passed to the studio through WhatsApp so a team member can contact you. It is not shared with anyone else.</li>
          <li>Please avoid typing sensitive information (such as financial details or identity documents) into the chat. A human is always available on WhatsApp or by phone.</li>
        </ul>
      </>
    ),
  },
  {
    n: '05',
    title: 'Cookies and browser storage',
    body: (
      <>
        <p>
          This site uses a small amount of local browser storage for the chat assistant: to remember the conversation during your
          visit and to remember if you have closed the chat so it does not keep re-opening. This information stays in your
          browser and is not sent to us. You can clear it at any time through your browser settings. Third-party embeds
          (YouTube, Google Maps) may set cookies as described in section 03.
        </p>
      </>
    ),
  },
  {
    n: '06',
    title: 'How we use your information',
    body: (
      <>
        <p>We use the information you share to:</p>
        <ul>
          <li>Respond to your inquiry, check date availability and prepare a quotation.</li>
          <li>Plan, film, edit and deliver your commission, and manage the related agreement, invoices and payments.</li>
          <li>Send you updates about your own project, such as teaser releases, portal access and delivery notices.</li>
          <li>Keep the website and our services secure and working properly.</li>
        </ul>
        <p>
          We do not send marketing newsletters unless you ask for them, and we never sell personal information.
        </p>
      </>
    ),
  },
  {
    n: '07',
    title: 'Your films, photographs and portfolio consent',
    body: (
      <>
        <p>
          Films and photographs we create for you contain personal information about you, your family and your guests. We treat
          them as confidential client work. We publish a film or image on this website, YouTube, Instagram or elsewhere only with
          the couple&rsquo;s consent, which is normally agreed in your commission contract. You may withdraw that consent at any
          time by contacting us, and we will remove the material from channels we control within a reasonable period.
        </p>
      </>
    ),
  },
  {
    n: '08',
    title: 'Who we share information with',
    body: (
      <>
        <p>We share personal information only with service providers who help us run the studio, and only as needed:</p>
        <ul>
          <li><b>WhatsApp (Meta)</b>, when you choose to contact us there or ask Chitra to connect you.</li>
          <li><b>Our chat infrastructure and AI provider</b>, to generate Chitra&rsquo;s replies (section 04).</li>
          <li><b>Google / YouTube</b>, for embedded maps, fonts and video players.</li>
          <li><b>Delivery and portal services</b> used to hand over your finished films and photographs.</li>
          <li><b>Professional advisers or authorities</b>, where the law requires it.</li>
        </ul>
        <p>Some of these providers operate outside India. Where that is the case, we rely on their contractual and security commitments to protect your information.</p>
      </>
    ),
  },
  {
    n: '09',
    title: 'How long we keep information',
    body: (
      <>
        <ul>
          <li>Inquiries that do not become a booking: up to 24 months, so we can follow up on future dates, then deleted.</li>
          <li>Client records, contracts and invoices: for the life of the commission and as long afterwards as Indian tax and accounting law requires.</li>
          <li>Delivered films and master archives: retained as part of our archive so re-deliveries are possible, unless you ask us to delete them.</li>
          <li>Chat conversations: not stored by us beyond generating the reply; your browser copy is cleared when your session ends or when you clear site data.</li>
        </ul>
      </>
    ),
  },
  {
    n: '10',
    title: 'Your rights and choices',
    body: (
      <>
        <p>
          Under India&rsquo;s Digital Personal Data Protection Act, 2023, and similar laws elsewhere, you can ask us to:
        </p>
        <ul>
          <li>Tell you what personal information we hold about you and give you a copy.</li>
          <li>Correct information that is inaccurate or incomplete.</li>
          <li>Delete your information, where we have no legal reason to keep it.</li>
          <li>Withdraw consent you previously gave, including portfolio consent.</li>
          <li>Nominate another person to exercise these rights on your behalf.</li>
        </ul>
        <p>
          To make a request, email <a href="mailto:slicexfilms@gmail.com">slicexfilms@gmail.com</a>. We will respond within 30 days.
          If you are not satisfied with our response, you may complain to the Data Protection Board of India or your local
          supervisory authority.
        </p>
      </>
    ),
  },
  {
    n: '11',
    title: 'Security',
    body: (
      <>
        <p>
          This website is served over HTTPS. Client footage and files are stored on encrypted drives and access-controlled cloud
          storage, and only the studio team working on your commission can access them. No method of transmission or storage
          is completely secure, so we cannot guarantee absolute security, but we take reasonable steps appropriate to the
          sensitivity of the information.
        </p>
      </>
    ),
  },
  {
    n: '12',
    title: 'Children',
    body: (
      <>
        <p>
          Our services are contracted by adults. This website is not directed to children, and we do not knowingly collect
          personal information from anyone under 18 through it. Children who appear in the films and photographs we create for a
          family are covered by the consent given by their parents or guardians.
        </p>
      </>
    ),
  },
  {
    n: '13',
    title: 'Changes to this policy',
    body: (
      <>
        <p>
          We may update this policy when our services or the law change. The effective date at the top will be revised, and
          significant changes will be noted on this page. Continued use of the website after a change means you accept the
          updated policy.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
    <div className="flex flex-col w-full">
      <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-space-2xl pb-space-2xl overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary">LEGAL / PRIVACY POLICY</span>
          </div>
          <h1 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface max-w-5xl mb-space-lg leading-[1.08]">
            YOUR STORY <span className="text-primary italic font-headline-lg">STAYS YOURS.</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg w-full items-end">
            <p className="lg:col-span-7 font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
              We are trusted with the most personal day of a family&rsquo;s life. This policy explains, in plain language, what
              information we collect through this website and how we look after it.
            </p>
            <div className="lg:col-span-5 flex flex-wrap gap-space-xs lg:justify-end items-center">
              <span className="px-space-sm py-space-2xs bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest rounded">Effective {EFFECTIVE}</span>
              <span className="px-space-sm py-space-2xs bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest rounded">No ad trackers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin-desktop py-space-3xl border-t border-primary-container/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex flex-col gap-space-md">
              <h2 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">Contents</h2>
              <ol className="flex flex-col gap-space-2xs font-body-sm text-body-sm text-on-surface-variant">
                {SECTIONS.map((s) => (
                  <li key={s.n}>
                    <a className="flex items-baseline gap-space-sm hover:text-primary transition-colors" href={`#s-${s.n}`}>
                      <span className="font-metadata-dense text-metadata-dense text-outline tracking-widest">{s.n}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-space-md p-space-md rounded-xl bg-surface-container-low border border-primary-container/20">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-space-2xs">Privacy requests</span>
                <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors font-medium" href="mailto:slicexfilms@gmail.com">slicexfilms@gmail.com</a>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-space-2xs">We reply within 30 days.</span>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            {SECTIONS.map((s) => (
              <article key={s.n} id={`s-${s.n}`} className="scroll-mt-28 bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl border border-primary-container/10">
                <div className="flex items-center gap-space-sm mb-space-sm">
                  <span className="font-metadata-dense text-metadata-dense text-primary tracking-widest">{s.n}</span>
                  <span className="w-8 h-[1px] bg-primary/50"></span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">{s.title}</h2>
                <div className="sx-legal font-body-md text-body-md text-on-surface-variant font-light leading-relaxed flex flex-col gap-space-sm">
                  {s.body}
                </div>
              </article>
            ))}
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline pt-space-sm">
              Last updated {EFFECTIVE} · SliceX Films, Balangir, Odisha, India
            </p>
          </div>
        </div>
      </section>
    </div>

    <style>{`
      .sx-legal ul{list-style:disc;padding-left:1.25rem;display:flex;flex-direction:column;gap:.4rem}
      .sx-legal a{color:#3ee6f0;text-decoration:underline;text-underline-offset:3px}
      .sx-legal a:hover{color:#a5f3fc}
      .sx-legal b{color:#e5e2e1;font-weight:500}
    `}</style>

    <SiteFooter showAdmin />
    </>
  );
}
