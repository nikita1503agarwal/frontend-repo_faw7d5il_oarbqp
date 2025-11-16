import { Heart, Activity, HandHeart, GraduationCap, Stethoscope, FlaskConical } from 'lucide-react'

export function AboutSection(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">About the Local Committee</h2>
          <p className="mt-4 text-slate-600">We are an IFMSA Local Committee at a university-level, part of the national member organization, working to develop the skills of medical students and create community impact through advocacy, campaigns, and capacity building.</p>
          <p className="mt-3 text-slate-600">As a chapter of IFMSA, we operate across six standing committees and collaborate with university partners, hospitals, and NGOs.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h3 className="font-semibold text-slate-900">Key Focus</h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-slate-600 text-sm">
            <li>Public health campaigns</li>
            <li>Human rights advocacy</li>
            <li>Medical education</li>
            <li>Clinical & research exchanges</li>
            <li>Capacity building trainings</li>
            <li>Community outreach</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function CommitteesGrid(){
  const committees = [
    { name:'SCORA', color:'#E83F5B', icon:Heart, blurb:'Sexual & Reproductive Health and Rights' },
    { name:'SCOPH', color:'#F59E0B', icon:Activity, blurb:'Public Health & Community Impact' },
    { name:'SCORP', color:'#10B981', icon:HandHeart, blurb:'Human Rights & Peace' },
    { name:'SCOME', color:'#3B82F6', icon:GraduationCap, blurb:'Medical Education' },
    { name:'SCOPE', color:'#0EA5E9', icon:Stethoscope, blurb:'Clinical Exchanges' },
    { name:'SCORE', color:'#8B5CF6', icon:FlaskConical, blurb:'Research Exchanges' },
  ]
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Our Standing Committees</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map(({name, color, icon:Icon, blurb}) => (
            <div key={name} className="rounded-xl border border-slate-100 bg-white shadow-sm p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{backgroundColor: color}}>
                <Icon size={20}/>
              </div>
              <div className="mt-4 font-semibold text-slate-900">{name}</div>
              <div className="text-sm text-slate-600">{blurb}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsPreview(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Projects & Activities</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-xl overflow-hidden border border-slate-100 bg-white shadow-sm">
              <div className="h-40 bg-gradient-to-br from-slate-200 to-slate-100"/>
              <div className="p-5">
                <div className="font-semibold text-slate-900">Health Awareness Campaign</div>
                <p className="text-sm text-slate-600 mt-1">Reaching students with preventive health education and screenings.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExchangesCTA(){
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Exchanges: SCOPE & SCORE</h2>
          <p className="mt-3 text-slate-600">Clinical and research exchanges connecting our members with global learning experiences. Discover hosting capacity, departments, and how to apply.</p>
          <a href="/exchanges" className="mt-6 inline-flex items-center rounded-md bg-[#0072CE] px-5 py-3 text-white font-semibold shadow hover:bg-[#075EAB]">Apply for Exchange</a>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white shadow-sm p-6">
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
            <div>
              <div className="font-semibold text-slate-900">SCOPE</div>
              <p>Clinical rotations in partner hospitals with experienced mentors.</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900">SCORE</div>
              <p>Research projects with university labs and research groups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TeamPreview(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Meet Our Team</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["LC President","VP for Internal Affairs","VP for External Affairs","General Secretary"].map((role) => (
            <div key={role} className="rounded-xl border border-slate-100 bg-white shadow-sm p-5 text-center">
              <div className="w-20 h-20 rounded-full mx-auto bg-slate-200"/>
              <div className="mt-3 font-semibold text-slate-900">Full Name</div>
              <div className="text-sm text-slate-600">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection(){
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B2A4A] to-[#0F3E78] text-white rounded-t-[2rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Become a Member</h2>
        <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Join a vibrant community of medical students. Build skills, lead projects, and shape global health in your campus.</p>
        <a href="/membership" className="mt-6 inline-flex items-center rounded-md bg-white px-5 py-3 text-[#0F3E78] font-semibold shadow hover:bg-blue-50">Start your journey</a>
      </div>
    </section>
  )
}
