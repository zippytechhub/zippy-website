import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+234 800 123 4567',
      available: '24/7 Available',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email for detailed inquiries',
      contact: 'support@zippy.ng',
      available: 'Response within 2 hours',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available in the app',
      available: '24/7 Available',
    },
    {
      icon: MapPin,
      title: 'Office Location',
      description: 'Visit our headquarters',
      contact: 'Lagos, Nigeria',
      available: 'Mon - Fri, 9AM - 6PM',
    },
  ]

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl'>Get in Touch</h2>
          <p className='max-w-3xl mx-auto text-xl text-gray-600'>
            We are dedicated to ensuring you have the best possible experience. If you have any
            questions, concerns, or issues, we are here to assist you.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          {/* Contact Methods */}
          <div className='space-y-8'>
            <h3 className='mb-8 text-2xl font-bold text-gray-900'>Contact Information</h3>

            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div
                  key={index}
                  className='flex items-start p-6 space-x-4 transition-colors duration-200 bg-gray-50 rounded-xl hover:bg-gray-100'
                >
                  <div className='p-3 dark-bg rounded-lg'>
                    <IconComponent className='w-6 h-6 dark-text' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='mb-1 text-lg font-semibold text-gray-900'>{method.title}</h4>
                    <p className='mb-2 text-gray-600'>{method.description}</p>
                    <p className='mb-1 font-medium dark-text'>{method.contact}</p>
                    <div className='flex items-center space-x-2'>
                      <Clock className='w-4 h-4 text-gray-400' />
                      <span className='text-sm text-gray-500'>{method.available}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className=" bg-[url('/images/onboarding-bg.svg')]  bg-cover bg-center rounded-2xl p-8 text-white">
            <h3 className='mb-6 text-2xl font-bold'>Send us a Message</h3>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-blue-100'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-3 text-white placeholder-blue-200 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent'
                  placeholder='Enter your full name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-blue-100'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 text-white placeholder-blue-200 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent'
                  placeholder='Enter your email'
                />
              </div>

              <div>
                <label htmlFor='subject' className='block mb-2 text-sm font-medium text-blue-100'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  className='w-full px-4 py-3 text-white placeholder-blue-200 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent'
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor='message' className='block mb-2 text-sm font-medium text-blue-100'>
                  Message
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-4 py-3 text-white placeholder-blue-200 border rounded-lg resize-none bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent'
                  placeholder='Tell us how we can help you...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='flex items-center justify-center w-full px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 transform bg-green-500 rounded-lg hover:bg-green-600 hover:scale-105'
              >
                <Send className='w-5 h-5' />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Support Info */}
        <div className='mt-16 text-center'>
          <div className='p-8 bg-gray-100 rounded-xl'>
            <h3 className='mb-4 text-2xl font-bold text-gray-900'>
              What Assistance Can We Offer You?
            </h3>
            <p className='max-w-4xl mx-auto text-lg leading-relaxed text-gray-600'>
              We are dedicated to ensuring you have the best possible experience. If you have any
              questions, concerns, or issues, we are here to assist you with prompt and professional
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
