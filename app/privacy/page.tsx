import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import { BreadcrumbStructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Privacy Policy — OahuUnlocked',
  description: 'Privacy Policy for OahuUnlocked.com — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://oahuunlocked.com/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: 'https://oahuunlocked.com' },
        { name: 'Privacy Policy', url: 'https://oahuunlocked.com/privacy' },
      ]} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-3xl px-6 py-14">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: April 19, 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground/80">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Overview</h2>
              <p>
                OahuUnlocked (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{' '}
                <Link href="https://www.oahuunlocked.com" className="text-primary hover:underline">
                  www.oahuunlocked.com
                </Link>
                . This Privacy Policy explains how we collect, use, and share information when you visit our site. By using OahuUnlocked, you agree to the practices described here.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3"><strong>Automatically collected:</strong> When you visit OahuUnlocked, our servers and third-party analytics services automatically collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and approximate location</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring URL</li>
              </ul>
              <p className="mt-3"><strong>Voluntarily provided:</strong> If you subscribe to our newsletter, we collect your email address.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Cookies</h2>
              <p className="mb-3">
                We use cookies — small text files stored on your device — to operate the site and deliver advertising. Types of cookies used:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential cookies:</strong> Required for the site to function properly.</li>
                <li><strong>Analytics cookies:</strong> Google Analytics uses cookies to collect anonymous usage data so we can understand how visitors use the site.</li>
                <li><strong>Advertising cookies:</strong> Google AdSense uses cookies to serve ads relevant to your interests. These may include personalized ads based on your browsing history across sites.</li>
              </ul>
              <p className="mt-3">
                You can control cookies through your browser settings. Disabling cookies may affect site functionality and ad personalization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Google AdSense & Advertising</h2>
              <p className="mb-3">
                OahuUnlocked uses Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to this and other websites.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google&rsquo;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and other sites on the internet.</li>
                <li>You may opt out of personalized advertising by visiting{' '}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Ads Settings
                  </a>.
                </li>
                <li>You may also opt out via{' '}
                  <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    aboutads.info
                  </a>{' '}or{' '}
                  <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    networkadvertising.org
                  </a>.
                </li>
              </ul>
              <p className="mt-3">
                For more information on how Google uses data from sites that use Google services, see{' '}
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  How Google uses information from sites or apps that use our services
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Affiliate Links</h2>
              <p>
                OahuUnlocked participates in affiliate programs including Amazon Associates, Booking.com, and Viator. When you click an affiliate link and make a purchase or booking, we may earn a commission at no extra cost to you. These third-party sites have their own privacy policies governing your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Google Analytics</h2>
              <p>
                We use Google Analytics to understand how visitors interact with our site. Google Analytics collects data such as pages viewed, session duration, and traffic sources using cookies. This data is anonymized and aggregated. You can opt out by installing the{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Analytics opt-out browser add-on
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Newsletter</h2>
              <p>
                If you subscribe to our newsletter, we store your email address with Brevo (formerly Sendinblue) to send you updates about Oahu. You can unsubscribe at any time using the link in any email we send. We do not sell or share your email address with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Sharing</h2>
              <p className="mb-3">We do not sell your personal data. We share data only with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google (Analytics, AdSense) — for analytics and advertising</li>
                <li>Brevo — for newsletter delivery</li>
                <li>Vercel — our hosting provider, for site operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request deletion of your data</li>
                <li>Opt out of personalized advertising (see Section 4)</li>
                <li>Unsubscribe from our newsletter at any time</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{' '}
                <a href="mailto:hello@oahuunlocked.com" className="text-primary hover:underline">
                  hello@oahuunlocked.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Children&rsquo;s Privacy</h2>
              <p>
                OahuUnlocked is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal data to us, contact us and we will delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact</h2>
              <p>
                Questions about this Privacy Policy? Email us at{' '}
                <a href="mailto:hello@oahuunlocked.com" className="text-primary hover:underline">
                  hello@oahuunlocked.com
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  )
}
