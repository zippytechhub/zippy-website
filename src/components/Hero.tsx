import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      id='home'
      className="grid !min-h-[49rem]  px-8  bg-[url('/images/onboarding-bg.svg')] bg-cover bg-center "
    >
      <div className='container grid w-full h-full grid-cols-1 mx-auto mt-32 place-items-center lg:mt-14 lg:grid-cols-2'>
        <div className='col-span-1'>
          <div className='space-y-8 '>
            {/* Main Heading */}
            <div className='space-y-4'>
              <h1 className='text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl'>
                Instant Recharge at
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300'>
                  Affordable Rates
                </span>
              </h1>
              <p className='max-w-3xl mx-auto text-xl leading-relaxed text-blue-100 sm:text-2xl'>
                Buy airtime, data bundles, pay electricity bills, and cable TV subscriptions with
                ease. Fast, reliable, and always at the best prices.
              </p>
            </div>

            {/* Value Propositions */}
            <div className='grid max-w-4xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3'>
              {[
                { icon: '⚡', title: 'Instant', desc: 'Credited in less than 1 minute' },
                { icon: '💰', title: 'Affordable', desc: 'Best rates guaranteed' },
                { icon: '🔒', title: 'Secure', desc: 'Safe and reliable transactions' },
              ].map((item, index) => (
                <div
                  key={index}
                  className='p-6 border rounded-lg bg-white/10 backdrop-blur-sm border-white/20'
                >
                  <div className='mb-3 text-3xl'>{item.icon}</div>
                  <h3 className='mb-2 text-lg font-semibold text-white'>{item.title}</h3>
                  <p className='text-sm text-blue-100'>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className=''>
              <p className='mb-2 text-sm text-blue-200'>Get the app</p>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <button className='flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 transform bg-green-500 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 hover:shadow-xl'>
                  <img src='/logos/logo-apple.png' alt='' className='-mt-0.5 mr-2 h-6 w-6' />
                  <span>App Store</span>
                </button>
                <button
                  onClick={scrollToServices}
                  className='flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-900'
                >
                  <img src='/logos/logo-google.png' alt='' className='-mt-0.5 mr-2 h-6 w-6' />
                  <span> Google Play</span>
                  <ArrowRight className='w-5 h-5' />
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className='pt-6 '>
              <p className='mb-6 text-sm text-blue-200'>Trusted by thousands of users nationwide</p>
            </div>
          </div>
        </div>
        <img
          alt='team work'
          src='images/iphones.png'
          width={470}
          height={576}
          className='col-span-1 my-[5rem] h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0'
        />
      </div>
    </header>
  )
}

export default Hero
