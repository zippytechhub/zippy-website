import { CreditCard, Smartphone, Tv, Wifi, Zap } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Airtime Recharge',
      description: 'Instant airtime top-up for all networks at competitive rates',
      features: ['All networks supported', 'Instant delivery', 'Best rates guaranteed'],
    },
    {
      icon: Wifi,
      title: 'Data Bundles',
      description: 'Affordable data plans for browsing, streaming, and staying connected',
      features: ['Flexible plans', 'All network providers', 'Instant activation'],
    },
    {
      icon: Tv,
      title: 'Cable TV Subscription',
      description: 'Pay for DSTV, GOtv, and Startimes subscriptions easily',
      features: ['DSTV, GOtv, Startimes', 'Instant activation', 'Discounted rates'],
    },
    {
      icon: Zap,
      title: 'Electricity Bills',
      description: 'Convenient electricity bill payment at your fingertips',
      features: ['All disco supported', 'Pay at convenience', 'Instant receipts'],
    },
    {
      icon: CreditCard,
      title: 'Airtime to Cash',
      description: 'Convert your excess airtime to cash with ease',
      features: ['Quick conversion', 'Fair rates', 'Instant transfer'],
    },
    // {
    //   icon: GraduationCap,
    //   title: 'E-Pins & Education',
    //   description: 'Purchase educational e-pins and subscription services',
    //   features: ['WAEC, JAMB, NECO', 'Instant delivery', 'Secure transactions'],
    // },
  ]

  return (
    <section id='services' className='py-20 bg-gray-50'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {/* Section Header */}
        <ScrollAnimation variantType='slideDown'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl'>Our Services</h2>
            <p className='max-w-3xl mx-auto text-xl text-gray-600'>
              Experience Zippy in every aspect. We offer comprehensive digital payment solutions for
              all your essential services.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <ScrollAnimation key={index} delay={index * 200} variantType='slideDown'>
                <div className='p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2'>
                  <div className='flex items-center justify-center w-16 h-16 mb-6 dark-bg rounded-lg'>
                    <IconComponent className='w-8 h-8 dark-text' />
                  </div>

                  <h3 className='mb-3 text-xl font-bold text-gray-900'>{service.title}</h3>
                  <p className='mb-4 leading-relaxed text-gray-600'>{service.description}</p>

                  <ul className='space-y-2'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center text-sm text-gray-500'>
                        <div className='w-2 h-2 mr-3 bg-green-500 rounded-full'></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimation variantType='slideDown'>
          <div className='mt-16 text-center'>
            <div className='p-8 text-white app-bg-image rounded-2xl'>
              <h3 className='mb-4 text-2xl font-bold'>Ready to Get Started?</h3>
              <p className='max-w-2xl mx-auto mb-6 text-blue-100'>
                Join thousands of satisfied customers who trust Zippy for their daily digital needs.
              </p>
              <button className='px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-green-500 rounded-lg hover:bg-green-600 hover:scale-105'>
                Download Zippy App
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Services
