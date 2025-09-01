'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How long does it take to receive airtime or data after purchase?',
      answer:
        'Your airtime or data will be credited to your phone in less than 1 minute after completing the purchase. Our system processes transactions instantly.',
    },
    {
      question: 'Which network providers do you support?',
      answer:
        'We support all major Nigerian network providers including MTN, Airtel, Glo, and 9mobile. You can purchase airtime and data for any of these networks.',
    },
    {
      question: 'Is it safe to use Zippy for payments?',
      answer:
        'Absolutely! Zippy uses bank-level security measures to protect your transactions. All payments are encrypted and we never store your sensitive payment information.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including bank transfers, debit cards, credit cards, and wallet funding. You can choose the most convenient option for you.',
    },
    {
      question: 'Can I get a refund if my transaction fails?',
      answer:
        'Yes, if your transaction fails and you were debited, we will automatically refund your money within 24 hours. You can also contact our customer support for immediate assistance.',
    },
    {
      question: 'How does the airtime to cash conversion work?',
      answer:
        'Simply select the airtime to cash option, enter the amount you want to convert, and provide your bank details. The converted cash will be sent to your account within minutes.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes! We provide 24/7 customer support through multiple channels including in-app chat, email, and phone. Our friendly support team is always ready to assist you.',
    },
    {
      question: 'Are there any hidden charges or fees?',
      answer:
        'No hidden charges! What you see is what you pay. We believe in transparent pricing and all costs are clearly displayed before you confirm your purchase.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id='faq' className='py-20 bg-gray-50'>
      <div className='max-w-4xl px-4 mx-auto sm:px-6 lg:px-8'>
        {/* Section Header */}
        <ScrollAnimation variantType='slideDown'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>
              Find answers to common questions about using Zippy for your digital payments.
            </p>
          </div>
        </ScrollAnimation>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 200} variantType='slideDown'>
              <div className='overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl'>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='flex items-center justify-between w-full px-8 py-6 text-left transition-colors duration-200 hover:bg-gray-50'
                >
                  <h3 className='pr-4 text-lg font-semibold text-gray-900'>{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className='flex-shrink-0 w-5 h-5 dark-text' />
                  ) : (
                    <ChevronDown className='flex-shrink-0 w-5 h-5 text-gray-400' />
                  )}
                </button>

                {openIndex === index && (
                  <div className='px-8 pb-6'>
                    <div className='pt-6 border-t border-gray-100'>
                      <p className='leading-relaxed text-gray-600'>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Support CTA */}
        <div className='mt-16 text-center'>
          <div className='p-8 text-white app-bg-image rounded-2xl'>
            <h3 className='mb-4 text-2xl font-bold'>Still Have Questions?</h3>
            <p className='mb-6 text-blue-100'>
              Our customer support team is available 24/7 to help you with any questions or
              concerns.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className='px-8 py-3 font-semibold dark-text transition-all duration-300 transform bg-white rounded-lg hover:bg-gray-100 hover:scale-105'
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
