import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Zap } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    company: [
      { name: 'About Us', id: 'about' },
      { name: 'Our Services', id: 'services' },
      { name: 'How It Works', id: 'how-it-works' },
      { name: 'Contact Us', id: 'contact' },
    ],
    services: [
      { name: 'Airtime Recharge', id: 'services' },
      { name: 'Data Bundles', id: 'services' },
      { name: 'Cable TV', id: 'services' },
      { name: 'Electricity Bills', id: 'services' },
    ],
    support: [
      { name: 'Help Center', id: 'faq' },
      { name: 'FAQ', id: 'faq' },
      { name: 'Customer Support', id: 'contact' },
      { name: 'Privacy Policy', id: 'contact' },
    ],
  }

  const socialLink = [
    {
      icons: Facebook,
      label: 'facebook',
      link: 'https://www.facebook.com/profile.php?id=61579163406234',
    },

    // {
    //   icons: Instagram,
    //   label: 'facebook',
    //   link: 'https://www.instagram.com/zippytechhub?igsh=YzljYTk1ODg3Zg==',
    // },
    {
      icons: Instagram,
      label: 'instagram',
      link: 'https://www.instagram.com/zippytechhub?igsh=YzljYTk1ODg3Zg==',
    },
  ]

  return (
    <footer className='text-white bg-gray-900'>
      {/* Main Footer Content */}
      <div className='px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center mb-6 space-x-2'>
              <div className='p-2 rounded-lg app-gradient'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <span className='text-2xl font-bold'>Zippy</span>
            </div>
            <p className='mb-6 leading-relaxed text-gray-300'>
              A digital payment solution that provides convenient, affordable, and quick access to
              essential services. Your trusted platform for all telecom and utility payments.
            </p>
            <div className='flex space-x-4'>
              {socialLink?.map((item, index) => (
                <a
                  target='_black'
                  key={index}
                  href={item.link}
                  className='p-3 transition-colors duration-300 bg-gray-800 rounded-lg hover:app-gradient'
                >
                  <item.icons className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className='mb-6 text-lg font-semibold'>Company</h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className='text-gray-300 transition-colors duration-200 hover:text-white'
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className='mb-6 text-lg font-semibold'>Services</h3>
            <ul className='space-y-3'>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className='text-gray-300 transition-colors duration-200 hover:text-white'
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='mb-6 text-lg font-semibold'>Contact Info</h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <Phone className='flex-shrink-0 w-5 h-5 mt-1 text-blue-400' />
                <div>
                  <p className='text-gray-300'>+234 800 123 4567</p>
                  <p className='text-sm text-gray-400'>24/7 Support</p>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <Mail className='flex-shrink-0 w-5 h-5 mt-1 text-blue-400' />
                <div>
                  <p className='text-gray-300'>zippyhubb@gmail.com</p>
                  <p className='text-sm text-gray-400'>Response within 2 hours</p>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <MapPin className='flex-shrink-0 w-5 h-5 mt-1 text-blue-400' />
                <div>
                  <p className='text-gray-300'>Lagos, Nigeria</p>
                  <p className='text-sm text-gray-400'>Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <p className='mb-2 text-sm text-blue-200'>Get the app</p>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <button className='flex items-center px-6 py-3 space-x-2 text-lg font-semibold text-white transition-all duration-300 transform bg-green-500 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 hover:shadow-xl'>
              <Image
                src='/logos/logo-apple.png'
                alt='Apple logo'
                width={24} // h-6
                height={24} // w-6
                className='-mt-0.5 mr-2'
              />{' '}
              <span>App Store</span>
            </button>
            <button className='flex items-center px-6 py-3 space-x-2 text-lg font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-900'>
              <Image
                src='/logos/logo-google.png'
                alt='Google logo'
                width={24} // h-6
                height={24} // w-6
                className='-mt-0.5 mr-2'
              />{' '}
              <span> Google Play</span>
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
            <p className='text-sm text-gray-400'>
              © 2025 Zippy. All rights reserved. Built for convenience, security, and affordability.
            </p>
            <div className='flex space-x-6 text-sm'>
              <a href='#' className='text-gray-400 transition-colors duration-200 hover:text-white'>
                Terms of Service
              </a>
              <a href='#' className='text-gray-400 transition-colors duration-200 hover:text-white'>
                Privacy Policy
              </a>
              <a href='#' className='text-gray-400 transition-colors duration-200 hover:text-white'>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
