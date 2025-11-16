import { Heart, Activity, HandHeart, GraduationCap, Stethoscope, FlaskConical, Mail, MapPin } from 'lucide-react'

export function AboutPage(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900">About the LC</h1>
      <p className="mt-4 text-slate-700">Founded by passionate medical students, our Local Committee is part of the National Member Organization within IFMSA. We empower students to make an impact in global health through projects, trainings, and exchanges.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border p-5">
          <div className="font-semibold">Mission</div>
          <p className="text-sm text-slate-600 mt-1">To develop capable, compassionate future physicians through hands-on community service and leadership opportunities.</p>
        </div>
        <div className="rounded-xl border p-5">
          <div className="font-semibold">Vision</div>
          <p className="text-sm text-slate-600 mt-1">A healthier community led by empowered medical students with global perspectives.</p>
        </div>
        <div className="rounded-xl border p-5">
          <div className="font-semibold">Affiliations</div>
          <p className="text-sm text-slate-600 mt-1">University Medical Faculty • IFMSA NMO • Partner hospitals & NGOs</p>
        </div>
      </div>
    </div>
  )
}

export function CommitteesPage(){
  const items = [
    { name:'SCORA', color:'#E83F5B', icon:Heart, what:'SRHR including gender-based violence and HIV/AIDS', campaigns:['Valentines4SRHR','Pink October'] },
    { name:'SCOPH', color:'#F59E0B', icon:Activity, what:'Public health prevention & health promotion', campaigns:['World Diabetes Day','No Tobacco Day'] },
    { name:'SCORP', color:'#10B981', icon:HandHeart, what:'Human rights, peace, and refugees support', campaigns:['Human Rights Day','Refugee Health'] },
    { name:'SCOME', color:'#3B82F6', icon:GraduationCap, what:'Medical education, peer learning, trainings', campaigns:['TNT','TNET','TMET'] },
    { name:'SCOPE', color:'#0EA5E9', icon:Stethoscope, what:'Clinical exchanges with partner hospitals', campaigns:['Incoming & Outgoing Exchanges'] },
    { name:'SCORE', color:'#8B5CF6', icon:FlaskConical, what:'Research exchanges with university labs', campaigns:['Research Skills Workshops'] },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900">Standing Committees</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({name, color, icon:Icon, what, campaigns}) => (
          <div key={name} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{backgroundColor: color}}>
              <Icon size={20}/>
            </div>
            <div className="mt-3 font-semibold text-slate-900">{name}</div>
            <p className="text-sm text-slate-600">{what}</p>
            <div className="mt-3 text-xs text-slate-500">Annual campaigns: {campaigns.join(', ')}</div>
            <a href="/membership" className="mt-4 inline-flex items-center rounded-md bg-[#0072CE] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#075EAB]">Join {name}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProjectsPage(){
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900">Projects & Campaigns</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[...Array(6).keys()].map((i) => (
          <div key={i} className="rounded-xl overflow-hidden border bg-white shadow-sm">
            <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-50"/>
            <div className="p-5">
              <div className="font-semibold text-slate-900">Project Title</div>
              <p className="text-sm text-slate-600">Short description highlighting impact and goals.</p>
              <div className="mt-2 text-xs text-slate-500">Impact: Reached 500 students</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ExchangesPage(){
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900">Exchanges</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="font-semibold text-slate-900">SCOPE (Clinical)</div>
          <p className="text-sm text-slate-600 mt-1">What the exchange is, hosting capacity, local departments, requirements, outgoing steps.</p>
          <a href="#" className="mt-4 inline-flex items-center rounded-md bg-[#0072CE] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#075EAB]">Apply for Clinical Exchange</a>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="font-semibold text-slate-900">SCORE (Research)</div>
          <p className="text-sm text-slate-600 mt-1">Overview, hosting labs, requirements, hosting team, and outgoing steps.</p>
          <a href="#" className="mt-4 inline-flex items-center rounded-md bg-[#0072CE] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#075EAB]">Apply for Research Exchange</a>
        </div>
      </div>
    </div>
  )
}

export function TeamPage(){
  const roles = [
    'LC President','VP for Internal Affairs','VP for External Affairs','General Secretary','Treasurer',
    'Local Officer SCORA','Local Officer SCOPH','Local Officer SCORP','Local Officer SCOME','Local Officer SCOPE','Local Officer SCORE'
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900">Our Team</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div key={role} className="rounded-xl border bg-white p-5 shadow-sm text-center">
            <div className="w-24 h-24 rounded-full mx-auto bg-slate-200"/>
            <div className="mt-3 font-semibold text-slate-900">Full Name</div>
            <div className="text-sm text-slate-600">{role}</div>
            <p className="text-xs text-slate-500 mt-2">Short bio and responsibilities.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MembershipPage(){
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900">Membership</h1>
      <p className="mt-4 text-slate-700">Why join the LC? Build leadership, project management, and advocacy skills. Make a difference in your community and connect with a global network.</p>
      <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
        <div className="font-semibold">How to Become a Member</div>
        <ol className="list-decimal pl-6 text-sm text-slate-600 mt-2">
          <li>Fill in the membership form</li>
          <li>Attend orientation</li>
          <li>Join a standing committee</li>
        </ol>
        <a href="#" className="mt-4 inline-flex items-center rounded-md bg-[#0072CE] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#075EAB]">Membership Form</a>
      </div>
      <div className="mt-8">
        <div className="font-semibold">FAQ</div>
        <div className="mt-3 grid gap-3 text-sm text-slate-600">
          <div>
            <div className="font-medium text-slate-900">Who can join?</div>
            <p>Medical students from our university.</p>
          </div>
          <div>
            <div className="font-medium text-slate-900">Do I need prior experience?</div>
            <p>No. We welcome all levels and provide trainings.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PartnersPage(){
  const partners = ['University Faculty of Medicine','City General Hospital','Community NGO','Research Institute']
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900">Partners & Sponsors</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((p) => (
          <div key={p} className="rounded-xl border bg-white p-5 shadow-sm text-center">
            <div className="h-16 bg-slate-100 rounded"/>
            <div className="mt-3 font-semibold text-slate-900">{p}</div>
            <p className="text-xs text-slate-500">Short description of collaboration.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContactPage(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-4 text-slate-700">Reach out for partnerships, membership, or general inquiries.</p>
        <div className="mt-6 space-y-2 text-slate-600 text-sm">
          <div className="flex items-center gap-2"><Mail size={16}/> lc@example.edu</div>
          <div className="flex items-center gap-2"><MapPin size={16}/> University Campus, Student Union Office</div>
        </div>
        <div className="mt-8 h-56 bg-slate-100 rounded-xl"/>
      </div>
      <form className="bg-white rounded-xl border p-6 shadow-sm" onSubmit={(e)=>e.preventDefault()}>
        <div className="grid gap-3">
          <input placeholder="Full name" className="border rounded-md px-3 py-2 text-sm"/>
          <input type="email" placeholder="Email" className="border rounded-md px-3 py-2 text-sm"/>
          <input placeholder="Subject" className="border rounded-md px-3 py-2 text-sm"/>
          <textarea placeholder="Message" rows={5} className="border rounded-md px-3 py-2 text-sm"/>
          <button className="inline-flex items-center justify-center rounded-md bg-[#0072CE] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#075EAB]">Send</button>
        </div>
      </form>
    </div>
  )
}
