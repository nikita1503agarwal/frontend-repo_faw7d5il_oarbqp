import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-transparent pointer-events-none"/>
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            Empowering Future Physicians Through Global Health Action
          </motion.h1>
          <motion.p className="mt-4 text-slate-300 text-lg"
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}}>
            A youth-led medical student community creating impact through public health, human rights, medical education, and international exchanges.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3"
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}}>
            <Link to="/membership" className="inline-flex items-center rounded-md bg-[#0072CE] px-5 py-3 text-white font-semibold shadow hover:bg-[#075EAB]">Join Us</Link>
            <Link to="/committees" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-white font-semibold hover:bg-white/20">Explore Committees</Link>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-white font-semibold hover:bg-white/20">Contact</Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
