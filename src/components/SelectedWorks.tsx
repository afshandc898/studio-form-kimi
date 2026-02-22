import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Hawthorn Residence',
    location: 'Hawthorn, Melbourne',
    year: '2024',
    category: 'Residential',
    description: 'A contemporary family home that embraces its sloping site with cascading living spaces and floor-to-ceiling glazing.',
    size: 'large',
    image: '/project-hawthorn.jpg',
  },
  {
    id: 2,
    title: 'Kew Courtyard House',
    location: 'Kew, Melbourne',
    year: '2024',
    category: 'Residential',
    description: 'A stunning courtyard-centered home that brings natural light deep into the living spaces through thoughtful orientation.',
    size: 'medium',
    image: '/project-kew.jpg',
  },
  {
    id: 3,
    title: 'Mornington Peninsula',
    location: 'Mornington Peninsula',
    year: '2023',
    category: 'Holiday Home',
    description: 'An off-grid sanctuary perched above the Bass Strait, celebrating indoor-outdoor living.',
    size: 'medium',
    image: '/project-mornington.jpg',
  },
  {
    id: 4,
    title: 'Richmond Warehouse',
    location: 'Richmond, Melbourne',
    year: '2023',
    category: 'Renovation',
    description: 'A converted industrial warehouse transformed into a sophisticated residential space while preserving its character.',
    size: 'medium',
    image: '/project-richmond.png',
  },
  {
    id: 5,
    title: 'Toorak Residence',
    location: 'Toorak, Melbourne',
    year: '2023',
    category: 'Multi-residential',
    description: 'Three refined townhouses sharing a common garden, each with distinct personality.',
    size: 'large',
    image: '/project-toorak.png',
  },
  {
    id: 6,
    title: 'Yarra Valley Retreat',
    location: 'Yarra Valley',
    year: '2022',
    category: 'Residential',
    description: 'A winemaker\'s residence nestled among vines, with a cellar that celebrates the craft.',
    size: 'medium',
    image: '/project-yarra.png',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isHovered, setIsHovered] = useState(false)

  const isLarge = project.size === 'large'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden cursor-pointer ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <motion.div
        className={`relative w-full ${isLarge ? 'h-[500px] md:h-[700px]' : 'h-[350px] md:h-[400px]'} overflow-hidden`}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />

        {/* Geometric accent */}
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isHovered ? 0.6 : 0.3, x: isHovered ? 20 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c75b39]/20 to-transparent"
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          {/* Category & Year */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#c75b39] text-xs tracking-[0.15em] font-medium">
              {project.category}
            </span>
            <span className="w-8 h-px bg-[#faf9f7]/30" />
            <span className="text-[#faf9f7]/50 text-xs">{project.year}</span>
          </div>

          {/* Title */}
          <motion.h3
            className={`font-serif text-[#faf9f7] mb-2 ${isLarge ? 'text-3xl md:text-4xl' : 'text-2xl'}`}
          >
            {project.title}
          </motion.h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-[#faf9f7]/60 text-sm mb-4">
            <MapPin size={14} />
            {project.location}
          </div>

          {/* Description - reveal on hover */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4 }}
            className="text-[#faf9f7]/70 text-sm leading-relaxed max-w-md"
          >
            {project.description}
          </motion.p>

          {/* View Project link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 flex items-center gap-2 text-[#c75b39] font-medium text-sm tracking-wider"
          >
            VIEW PROJECT
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={18} />
            </motion.span>
          </motion.div>
        </div>

        {/* Corner accent */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-6 right-6 w-12 h-12 border border-[#c75b39]/50 flex items-center justify-center"
        >
          <ArrowUpRight className="text-[#c75b39]" size={20} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function SelectedWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="works" className="relative py-32 lg:py-40 bg-[#1a1a1a]">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#c75b39] text-sm tracking-[0.3em] mb-4 font-medium"
            >
              SELECTED WORKS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl lg:text-6xl text-[#faf9f7] mb-4"
            >
              Projects that
              <br />
              <span className="italic text-[#c75b39]">define us</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#faf9f7]/60 max-w-md"
          >
            Each project represents a unique collaboration with clients who share 
            our vision for thoughtful, enduring architecture.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#faf9f7]/30 text-[#faf9f7] font-medium tracking-[0.1em] text-sm hover:border-[#c75b39] hover:text-[#c75b39] transition-all"
          >
            VIEW ALL PROJECTS
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
