import { Link } from 'react-router-dom'

const deviceCategories = [
  { name: 'Sell Phone', icon: '📱' },
  { name: 'Sell Tablet', icon: '📱' },
  { name: 'Sell Laptop', icon: '💻' },
  { name: 'Sell Game Console', icon: '🎮' },
  { name: 'Sell Smartwatch', icon: '⌚' },
  { name: 'Sell Earphone', icon: '🎧' },
  { name: 'Sell Mouse', icon: '🖱️' },
  { name: 'Sell Pencil', icon: '✏️' },
  { name: 'Sell Keyboard', icon: '⌨️' }
]

const features = [
  {
    title: 'Get cash instantly',
    description: 'Get paid cash on the spot',
    icon: '💰'
  },
  {
    title: 'Free Pick up',
    description: 'Collect from your home or office',
    icon: '🚚'
  },
  {
    title: 'Verified Buyers',
    description: 'Trusted dealer with physical store',
    icon: '✅'
  },
  {
    title: 'Get Best Offer',
    description: 'Compare highest offer instantly',
    icon: '💎'
  }
]

const testimonials = [
  {
    text: "The whole process was convenient, efficient. Got the best offer checking my phone, the price was the exact same as what they offered on the web.",
    author: "Darren Soh",
    device: "Sold a used Samsung S23",
    rating: 5
  },
  {
    text: "It was a fuss-free efficient service. I would strongly recommend anyone who wants to sell or wish to sell their used/new phones. Super fast service. Thank you so much helps. Keep up the good job",
    author: "Karen Ng",
    device: "Sold a used iPhone 11",
    rating: 5
  }
]

export default function Home() {
  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white sm:text-6xl">
                Sell Your Device<br />For Best Offer
              </h1>
              <p className="mt-6 text-xl text-gray-200">
                Get Paid On The Spot
              </p>
              <div className="mt-8 bg-white p-4 rounded-lg max-w-md">
                <div className="flex gap-4 mb-4">
                  <button className="flex-1 py-2 px-4 bg-primary text-white rounded">Sell</button>
                  <button className="flex-1 py-2 px-4 text-gray-600">Repair</button>
                </div>
                <select className="w-full p-2 mb-4 border rounded">
                  <option>SMARTPHONE</option>
                </select>
                <select className="w-full p-2 mb-4 border rounded">
                  <option>APPLE</option>
                </select>
                <button className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark">
                  SELL NOW
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/devices.png" alt="Devices" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16">
        <h2 className="text-center text-3xl font-bold mb-12 text-white">
          Sell your device in 3 easy steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {[
            { number: 1, text: 'Compare offers instantly' },
            { number: 2, text: 'Schedule Store visit or Pick up' },
            { number: 3, text: 'Get paid cash on the spot' }
          ].map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-block w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mb-4">
                {step.number}
              </div>
              <p className="text-lg text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Device Categories */}
      <div className="py-16 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {deviceCategories.map((device) => (
              <div key={device.name} className="bg-secondary p-4 rounded-lg text-center cursor-pointer hover:bg-primary/10 transition-colors">
                <div className="text-4xl mb-2">{device.icon}</div>
                <div className="text-sm text-gray-300">{device.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16">
        <h2 className="text-center text-3xl font-bold mb-12 text-white">
          Why Choose Tradezone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-secondary-light">
        <h2 className="text-center text-3xl font-bold mb-12 text-white">
          Testimonials
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src="/google-icon.png" alt="Google" className="w-6 h-6 mr-2" />
                  <div className="text-yellow-400">{'★'.repeat(testimonial.rating)}</div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.device}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">FAQs</h2>
          <div className="space-y-4">
            {[
              'What is Tradezone?',
              'How does Tradezone work?',
              'What items can I sell on Tradezone?',
              'How does pick up service work?',
              'How does store visit works?',
              'How do I get paid?',
              'Where is your store located?'
            ].map((question) => (
              <div key={question} className="border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-primary/10 text-gray-300">
                {question}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
