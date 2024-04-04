import React from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export function Home() {

  return (
    <div className="relative w-full bg-gray-100 mt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          <button
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to={'/Register'}>Sign Up</Link>
          </button>
          <button
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to={'/Login'}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
