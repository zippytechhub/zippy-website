import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Joshua Igba Thomas',
      location: 'Lagos, Nigeria',
      rating: 5,
      text: 'Zippy has made my life so much easier! I can buy data bundles instantly without any hassle. The rates are incredibly affordable and the service is super fast.',
      avatar: 'JI',
      img: '/images/Joshua.jpeg',
    },
    {
      name: 'Dr_Mumeen Ismaila',
      location: 'Kaduna, Nigeria',
      rating: 5,
      text: 'I love how I can pay all my bills in one place. From electricity to cable TV, Zippy handles everything. Customer support is also excellent!',
      avatar: 'MI',
      img: '/images/Ismaila.jpeg',
    },
    {
      name: 'Philomena Amedu',
      location: 'Kaduna, Nigeria',
      rating: 5,
      text: 'The airtime to cash feature is a lifesaver! I converted my excess airtime to cash when I needed money urgently. Process was smooth and instant.',
      avatar: 'PA',
      img: '/images/Mena.jpeg',
    },
    {
      name: 'Isaac Ameh',
      location: 'Lagos, Nigeria',
      rating: 5,
      text: 'Been using Zippy for over a year now. Never had any issues. The app is user-friendly and transactions are always successful. Highly recommended!',
      avatar: 'IA',
    },
    {
      name: 'Miracle Edwin',
      location: 'Niger, Nigeria',
      rating: 5,
      text: 'As a student, I need affordable data bundles and Zippy delivers exactly that. The educational e-pins service is also very convenient for my exams.',
      avatar: 'ME',
    },
    {
      name: 'Lucy Greg',
      location: 'Jos, Nigeria',
      rating: 5,
      text: 'Zippy is my go-to platform for all digital payments. The discounted rates and instant service delivery make it stand out from other platforms.',
      avatar: 'LG',
    },
  ]

  return (
    <section id='testimonials' className='py-20 bg-gradient-to-br from-blue-50 to-green-50'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl'>
            What Our Customers Say
          </h2>
          <p className='max-w-3xl mx-auto text-xl text-gray-600'>
            Join thousands of satisfied users who trust Zippy for their digital payment needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='relative p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1'
            >
              {/* Quote Icon */}
              <div className='absolute top-4 right-4'>
                <Quote className='w-6 h-6 text-blue-200' />
              </div>

              {/* Rating */}
              <div className='flex mb-4 space-x-1'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className='mb-6 leading-relaxed text-gray-700'>"{testimonial.text}"</p>

              {/* User Info */}
              <div className='flex items-center space-x-4'>
                {testimonial.img && (
                  <img alt='team work' src={testimonial.img} className='w-12 h-12 rounded-full' />
                )}
                {!testimonial.img && (
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500'>
                    <span className='text-sm font-bold text-white'>{testimonial.avatar}</span>
                  </div>
                )}

                <div>
                  <h4 className='font-semibold text-gray-900'>{testimonial.name}</h4>
                  <p className='text-sm text-gray-500'>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 gap-8 mt-20 lg:grid-cols-4'>
          {[
            { number: '50K+', label: 'Happy Customers' },
            { number: '1M+', label: 'Transactions' },
            { number: '99.9%', label: 'Success Rate' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='mb-2 text-3xl font-bold sm:text-4xl dark-text'>{stat.number}</div>
              <div className='font-medium text-gray-600'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
