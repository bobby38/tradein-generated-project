import { Link } from 'react-router-dom'
import { FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const footerLinks = {
  'Sell Device': [
    'Sell Phone',
    'Sell Tablet',
    'Sell Laptop',
    'Sell Smartwatch',
    'Sell Game Console'
  ],
  'Repair Device': [
    'Repair Phone',
    'Repair Tablet'
  ],
  'Other Services': [
    'Tradezone Care',
    'Corporate Buyback',
    'Blog'
  ],
  'Company': [
    'About Us',
    'Become Our Partner'
  ],
  'Contact Us': [
    '📍 Tradezone @ Tai Seng',
    '8 Burn Road #01-05',
    'Singapore 369977',
    '☎ +65 6288 4293',
    '✉ service@tradezone.sg',
    '🕒 Mon-Sat: 11am to 8pm',
    '🕒 Sun & PH: 11am to 6pm'
  ]
}

const socialLinks = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/tradezone.sg' },
  { icon: <FaTiktok />, href: 'https://www.tiktok.com/@tradezone.sg' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/tradezone.sg' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/tradezone-sg' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@tradezone.sg' }
]

export default function Footer() {
  return (
    <footer className="bg-secondary-light">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Newsletter Subscription */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4 text-white">Subscribe here to get promotional info and newsletter</h3>
          <div className="flex gap-4 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md bg-secondary text-white border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="text-sm text-gray-400 hover:text-primary-light">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-light text-xl"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2019-2024 Tradezone Pte Ltd. All rights reserved.
          </p>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6562884293"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}
