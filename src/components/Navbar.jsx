import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Hospital, Globe2 } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/committees', label: 'Standing Committees' },
  { to: '/projects', label: 'Projects' },
  { to: '/exchanges', label: 'Exchanges' },
  { to: '/team', label: 'Team' },
  { to: '/membership', label: 'Membership' },
  { to: '/partners', label: 'Partners' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-[#0072CE] text-white"><Hospital size={18} /></div>
            <div className="leading-tight">
              <div className="font-bold text-slate-900">IFMSA LC</div>
              <div className="text-xs text-slate-500 flex items-center gap-1"><Globe2 size={12}/> Local Committee</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({isActive}) => `text-sm font-medium hover:text-[#0072CE] ${isActive ? 'text-[#0072CE]' : 'text-slate-700'}`}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/membership" className="ml-2 inline-flex items-center rounded-md bg-[#0072CE] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#075EAB]">Join Us</Link>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-700" aria-label="Toggle menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({isActive}) => `block text-sm font-medium ${isActive ? 'text-[#0072CE]' : 'text-slate-700'}`}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/membership" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-[#0072CE] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#075EAB]">Become a Member</Link>
          </div>
        </div>
      )}
    </header>
  )
}
