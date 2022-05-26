import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'

const NavBar = () => {
  const items = [
    { id: 1, name: 'صفحه اصلی', href: '/' },
    { id: 2, name: 'لیست تیکت ها', href: '/listTicket' },
    { id: 3, name: ' درباره ما', href: '#' },
    { id: 4, name: ' مقالات', href: '#' },
  ]
  return (
    <div className="bg-blue-900  shadow-md flex justify-between items-center pt-2 pb-2 sticky top-0 z-50">
      <div>
        <ul className="flex justify-center space-x-6 mr-8">
          {items.map((item) => (
            <li
              className=" text-sm font-bold text-slate-50 cursor-pointer rounded-lg hover:bg-slate-100 hover:text-slate-900 px-3 py-2"
              key={item.id}
            >
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-14 w-14 ml-8">
        <img src={logo} />
      </div>
    </div>
  )
}
export default NavBar
