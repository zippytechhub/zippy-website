'use client'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <header className='bg-blue-600 text-white py-6 shadow-md'>
        <div className='max-w-5xl mx-auto px-4 text-center'>
          <h1 className='text-3xl font-bold tracking-wide'>Privacy Policy & User Agreement</h1>
          <p className='mt-2 text-lg'>Effective Date: August 2025</p>
        </div>
      </header>

      <main className='max-w-5xl mx-auto px-4 py-10 space-y-12'>
        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h2 className='text-2xl font-semibold text-blue-700'>Welcome to Zippy Tech Hub</h2>
          <p className='mt-4 text-gray-600 leading-relaxed'>
            At <strong>ZIPPY TECH HUB</strong>, we value your trust. This Privacy Policy & User
            Agreement explains how we collect, use, and protect your information while outlining
            your responsibilities as a user of our services.
          </p>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>1. Acceptance of Terms</h3>
          <p className='mt-3 leading-relaxed text-gray-700'>
            By using our services—including data bundles, airtime recharge, forums, and email
            services—you agree to comply with these Terms of Use (TOU). If you disagree with any
            part of this agreement, you should discontinue use immediately.
          </p>
          <p className='mt-3'>
            <span className='font-semibold'>Note:</span> Zippy Tech Hub reserves the right to
            enforce these terms through moderation, investigation, or legal action.
          </p>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>2. Modifications</h3>
          <p className='mt-3 leading-relaxed'>
            We may update this agreement at any time. Updates will take effect immediately upon
            posting. Please check this page regularly to stay informed of changes.
          </p>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>3. User Conduct</h3>
          <p className='mt-3'>
            You agree not to engage in prohibited actions, including but not limited to:
          </p>
          <ul className='list-disc list-inside mt-3 space-y-2 text-gray-700'>
            <li>Creating multiple fraudulent accounts.</li>
            <li>Harassing, stalking, or spamming users.</li>
            <li>Collecting personal data unlawfully.</li>
            <li>Using bots or automated tools without permission.</li>
            <li>Posting misleading, harmful, or infringing content.</li>
            <li>Uploading viruses, malware, or disruptive code.</li>
            <li>Impersonating others or misrepresenting affiliations.</li>
          </ul>
          <p className='mt-3 text-sm text-gray-500 italic'>
            Violations may result in account suspension, termination, and legal action.
          </p>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>22. No Spam Policy</h3>
          <p className='mt-3'>
            Sending unsolicited messages, chain letters, or advertisements via Zippy Tech Hub is
            strictly prohibited. Violators may face civil and criminal penalties.
          </p>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>23. Information We Collect</h3>
          <ul className='list-disc list-inside mt-3 space-y-2'>
            <li>
              <strong>Personal Data:</strong> Name, address, email, phone number.
            </li>
            <li>
              <strong>Information You Provide:</strong> Account details, payment info, KYC
              verification.
            </li>
            <li>
              <strong>Usage Data:</strong> Device details, activity logs, cookies, and analytics.
            </li>
          </ul>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>24. How Information is Shared</h3>
          <p className='mt-3'>We share your data only in the following cases:</p>
          <ul className='list-disc list-inside mt-3 space-y-2'>
            <li>With your consent.</li>
            <li>When required by law.</li>
            <li>With third-party service providers under confidentiality agreements.</li>
          </ul>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>25. Data Retention</h3>
          <p className='mt-3'>
            We retain your information for as long as needed to provide our services and meet legal
            requirements. Some residual data may remain in secure backups.
          </p>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>26. Third-Party Websites</h3>
          <p className='mt-3'>
            External websites linked from our platform are outside our control. This policy does not
            cover third-party practices.
          </p>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>27. Your Rights</h3>
          <p className='mt-3'>
            You may opt out of promotional emails, though service-related notifications will still
            be sent.
          </p>
        </section>

        <section className='bg-white shadow-sm rounded-2xl p-6'>
          <h3 className='text-xl font-semibold text-blue-700'>28. Policy Updates</h3>
          <p className='mt-3'>
            We may revise this Privacy Policy from time to time. Significant changes will be
            communicated via email or website notifications.
          </p>
        </section>

        <section className='text-center py-8'>
          <p className='text-gray-600'>
            If you have any questions about this Privacy Policy, contact us at:
          </p>
          <p className='mt-2 text-blue-700 font-semibold'>support@zippytechhub.com</p>
        </section>
      </main>

      <footer className='bg-gray-900 text-gray-300 py-6 text-center'>
        <p className='text-sm'>&copy; 2025 Zippy Tech Hub. All Rights Reserved.</p>
      </footer>
      <Footer />
    </div>
  )
}
