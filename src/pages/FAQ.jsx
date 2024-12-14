const faqs = [
  {
    question: 'What is Tradezone?',
    answer: 'Tradezone is Singapore\'s trusted marketplace for buying, selling, and repairing electronic devices.'
  },
  {
    question: 'How does Tradezone work?',
    answer: 'Simply select your device, get an instant quote, and choose between store visit or pickup service.'
  },
  {
    question: 'What items can I sell on Tradezone?',
    answer: 'You can sell phones, tablets, laptops, smartwatches, game consoles, and other electronic devices.'
  },
  {
    question: 'How does pick up service work?',
    answer: 'Our team will collect the device from your preferred location at a scheduled time.'
  },
  {
    question: 'How do I get paid?',
    answer: 'You\'ll receive instant cash payment upon successful inspection of your device.'
  }
]

export default function FAQ() {
  return (
    <div className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary-light rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
