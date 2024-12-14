import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'SELL PHONES', href: '/sell' },
  { name: 'SELL GADGETS', href: '/sell' },
  { name: 'REPAIR', href: '/repair' },
  { name: 'TRADEZONE CARE', href: '/care' },
  { name: 'CORPORATE', href: '/corporate' },
  { name: 'TOOLS', href: '/tools' },
  { name: 'BLOG', href: '/blog' },
]

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-secondary">
      {({ open }) => (
        <>
          {/* Top Bar */}
          <div className="bg-secondary-light">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-10 items-center justify-between text-sm text-gray-300">
                <div className="flex items-center space-x-4">
                  <span>📍 8 Burn Road #01-05, Singapore 369977</span>
                  <span>☎ +65 6288 4293</span>
                </div>
                <div className="hidden sm:flex items-center space-x-4">
                  <span>Mon-Sat: 11am to 8pm</span>
                  <span>Sun & PH: 11am to 6pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="text-2xl font-bold text-primary-light">
                    Tradezone
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-primary-light"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-secondary-light hover:text-gray-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-300 hover:border-primary-light hover:bg-secondary-light hover:text-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
