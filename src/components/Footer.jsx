import { Facebook, Instagram, Mail, MapPin, Twitter, Globe2 } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-slate-950 text-slate-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-md bg-[#0072CE] text-white"><Globe2 size={18} /></div>
            <div className="leading-tight">
              <div className="font-bold">IFMSA Local Committee</div>
              <div className="text-xs text-slate-400">Empowering Future Physicians</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-sm">Youth-led medical student organization driving impact in global health, public health, medical education and exchanges.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-start gap-2"><MapPin size={16}/> University Campus, Student Union Office</li>
            <li className="flex items-start gap-2"><Mail size={16}/> lc@example.edu</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="/committees" className="hover:text-white">Standing Committees</a></li>
            <li><a href="/projects" className="hover:text-white">Projects & Campaigns</a></li>
            <li><a href="/exchanges" className="hover:text-white">Exchanges</a></li>
            <li><a href="/membership" className="hover:text-white">Membership</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Follow</div>
          <div className="flex items-center gap-3 text-slate-300">
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook/></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram/></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 text-xs text-slate-400 py-4 text-center">© {new Date().getFullYear()} IFMSA Local Committee. Not an official website of IFMSA. All logos belong to their respective owners.</div>
    </footer>
  )
}
