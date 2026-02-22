import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Sarah Chen',
    role: 'Principal Architect',
    bio: 'With over 20 years of experience across Melbourne and Copenhagen, Sarah founded Studio Form with a vision to merge Scandinavian restraint with Australian openness.',
    credentials: 'BArch (Melb), MArch (Aarhus), RAIA',
    image: '/team-sarah.png',
  },
  {
    name: "Marcus O'Brien",
    role: 'Design Director',
    bio: 'Marcus brings a sculptor\'s sensibility to architecture, exploring the interplay of light, shadow, and material. His work has been recognized by the Australian Institute of Architects.',
    credentials: 'BArch (Melb), MArch (Harvard), RAIA',
    image: '/team-marcus.png',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Senior Architect',
    bio: 'Yuki specializes in sustainable design and passive house principles. Her technical expertise ensures every Studio Form project achieves exceptional environmental performance.',
    credentials: 'BArch (Tokyo), Certified Passive House Designer',
    image: '/team-yuki.png',
  },
  {
    name: 'James Wright',
    role: 'Project Architect',
    bio: 'James leads project delivery with an unwavering commitment to craft. His background in fine woodworking informs his meticulous approach to detail and joinery.',
    credentials: 'BArch (RMIT), RAIA',
    image: '/team-james.png',
  },
]

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden"
      >
        {/* Portrait */}
        <div className="relative h-[400px] lg:h-[450px] overflow-hidden bg-[#252525]">
          {/* Team member image */}
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(250,249,247,0.1) 35px, rgba(250,249,247,0.1) 70px)`,
            }}
          />

          {/* Hover overlay with bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#1a1a1a]/95 flex flex-col justify-end p-8"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#faf9f7]/80 text-sm leading-relaxed mb-6"
            >
              {member.bio}
            </motion.p>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[#c75b39] text-xs tracking-wider mb-6"
            >
              {member.credentials}
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex gap-3"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center border border-[#333] text-[#faf9f7]/60 hover:border-[#c75b39] hover:text-[#c75b39] transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center border border-[#333] text-[#faf9f7]/60 hover:border-[#c75b39] hover:text-[#c75b39] transition-colors"
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Name badge - always visible */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1a1a1a] to-transparent">
            <motion.div
              animate={{ y: isHovered ? 10 : 0, opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#c75b39] text-xs tracking-[0.15em] mb-1">
                {member.role}
              </p>
              <h3 className="font-serif text-2xl text-[#faf9f7]">
                {member.name}
              </h3>
            </motion.div>
          </div>
        </div>

        {/* Bottom border accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          className="h-1 bg-[#c75b39] origin-left"
        />
      </motion.div>
    </motion.div>
  )
}

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="relative py-32 lg:py-40 bg-[#1a1a1a]">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={ref} className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#c75b39] text-sm tracking-[0.3em] mb-4 font-medium"
          >
            THE TEAM
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl lg:text-6xl text-[#faf9f7] mb-6"
          >
            Architects of
            <br />
            <span className="italic text-[#c75b39]">distinction</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#faf9f7]/60 text-lg leading-relaxed"
          >
            Our team brings together diverse expertise and a shared commitment 
            to excellence. Hover over each portrait to learn more.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Join us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 lg:p-12 bg-[#252525] border border-[#333] text-center"
        >
          <h3 className="font-serif text-2xl text-[#faf9f7] mb-3">
            Join Our Studio
          </h3>
          <p className="text-[#faf9f7]/60 mb-6 max-w-lg mx-auto">
            We\'re always seeking exceptional talent. If you share our passion 
            for thoughtful architecture, we\'d love to hear from you.
          </p>
          <motion.a
            href="mailto:careers@studioform.com.au"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#c75b39] text-[#c75b39] text-sm tracking-wider font-medium hover:bg-[#c75b39] hover:text-[#faf9f7] transition-all"
          >
            <Mail size={16} />
            SEND YOUR PORTFOLIO
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
