import { CheckCircle, CreditCard, Download, Hash, Network, Shield, Smartphone } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: 'Get the Zippy App',
      description: 'Download the app and register your account to get started',
      detail:
        'The first step in buying airtime and data bundles on Zippy is downloading the app and registering an account.',
    },
    {
      icon: CreditCard,
      title: 'Select "Bill Payment"',
      description: 'Navigate to the bill payment section on the homepage',
      detail: 'On your homepage, click on the "Bill Payment" tab to get started.',
    },
    {
      icon: Smartphone,
      title: 'Choose Service Type',
      description: 'Select "Airtime" or "Mobile Data" from available options',
      detail:
        'On the next page, select "Airtime" or "Mobile Data," depending on which you want to buy.',
    },
    {
      icon: Network,
      title: 'Select Network Provider',
      description: 'Choose your network provider from the list',
      detail:
        "It's time to select your network provider. Ensure the network provider you pick is correct.",
    },
    {
      icon: Hash,
      title: 'Enter Details',
      description: 'Input your mobile number and purchase amount or plan',
      detail:
        "If you want to purchase airtime, just input your number and amount to proceed. However, if you intend to buy mobile data, you'll have to select a plan of your choice as well.",
    },
    {
      icon: CheckCircle,
      title: 'Confirm Purchase',
      description: 'Review your bill summary and proceed with payment',
      detail: 'Carefully read through your bill summary and ensure the details are correct.',
    },
    {
      icon: Shield,
      title: 'Complete Transaction',
      description: 'Enter your transaction PIN to finalize the purchase',
      detail:
        'To finalise your airtime or data purchase, enter your transaction PIN. Then wait for your airtime or data to be credited to your phone in less than a minute.',
    },
  ]

  return (
    <section id='how-it-works' className='py-20 bg-white'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl'>
            How to Buy Airtime and Data in 1 Minute
          </h2>
          <p className='max-w-3xl mx-auto text-xl text-gray-600'>
            It's pretty easy to buy airtime and data bundles on Zippy. Follow these simple steps to
            get started.
          </p>
        </div>

        {/* Steps */}
        <div className='space-y-8'>
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className='flex flex-col items-start gap-8 lg:flex-row'>
                {/* Step Number and Icon */}
                <div className='flex items-center space-x-4 lg:min-w-[300px]'>
                  <div className='flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full app-bg-image'>
                    {index + 1}
                  </div>
                  <div className='p-4 rounded-lg dark-bg'>
                    <IconComponent className='w-8 h-8 dark-text' />
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1'>
                  <h3 className='mb-2 text-xl font-bold text-gray-900'>{step.title}</h3>
                  <p className='mb-3 font-medium text-gray-600'>{step.description}</p>
                  <p className='leading-relaxed text-gray-500'>{step.detail}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className='mt-16 text-center'>
          <div className='p-8 border border-green-200 bg-green-50 rounded-xl'>
            <h3 className='mb-4 text-2xl font-bold text-green-800'>What's Next?</h3>
            <p className='text-lg text-green-700'>
              Kindly wait for your airtime or data to be credited to your phone in less than a
              minute. It's that simple with Zippy!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
