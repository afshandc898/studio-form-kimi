import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Minus, Leaf, Hammer } from 'lucide-react'

const pillars = [
  {
    icon: Minus,
    title: 'Minimalism',
    subtitle: 'Less, but better',
    description:
      'We believe in the power of restraint. Every element serves a purpose. Every line has intent. Our minimalist approach creates spaces that breathe, allowing inhabitants to find clarity and calm within their environment.',
    details: [
      'Clean geometric forms',
      'Intentional negative space',
      'Refined material palettes',
      'Harmonious proportions',
    ],
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    subtitle: 'Built for generations',
    description:
      'Sustainability is not an add-on—it is woven into every decision. From locally sourced materials to passive design principles, we create homes that respect the earth while providing enduring comfort.',
    details: [
      'Carbon-neutral materials',
      'Passive heating & cooling',
      'Rainwater harvesting',
      'Solar integration',
    ],
  },
  {
    icon: Hammer,
    title: 'Craft',
    subtitle: 'The art of making',
    description:
      'We collaborate with master craftspeople who share our obsession with quality. Each joint, each surface, each detail is executed with precision that honors both the material and the maker.',
    details: [
      'Joinery excellence',
      'Artisan partnerships',
      'Material authenticity',
      'Timeless construction',
    ],
  },
]

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = pillar.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative p-8 lg:p-10 bg-[#252525] border border-[#333] h-full overflow-hidden"
      >
        {/* Hover background effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-br from-[#c75b39]/10 to-transparent pointer-events-none"
        />

        {/* Number */}
        <span className="absolute top-6 right-6 font-serif text-6xl text-[#333] group-hover:text-[#c75b39]/20 transition-colors duration-500">
          0{index + 1}
        </span>

        {/* Icon */}
        <motion.div
          className="relative mb-8"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-14 h-14 flex items-center justify-center border border-[#c75b39]/30 group-hover:border-[#c75b39] transition-colors">
            <Icon className="w-6 h-6 text-[#c75b39]" />
          </div>
        </motion.div>

        {/* Content */}
        <p className="text-[#c75b39] text-xs tracking-[0.2em] mb-2 font-medium">
          {pillar.subtitle}
        </p>
        <h3 className="font-serif text-3xl lg:text-4xl text-[#faf9f7] mb-4">
          {pillar.title}
        </h3>
        <p className="text-[#faf9f7]/60 leading-relaxed mb-8">
          {pillar.description}
        </p>

        {/* Details list - reveal on hover */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="border-t border-[#333] pt-6"
        >
          <ul className="space-y-2">
            {pillar.details.map((detail, i) => (
              <motion.li
                key={detail}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-sm text-[#faf9f7]/50 flex items-center gap-3"
              >
                <span className="w-1 h-1 bg-[#c75b39]" />
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="philosophy"
      className="relative py-32 lg:py-40 bg-[#1a1a1a]"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={ref} className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#c75b39] text-sm tracking-[0.3em] mb-4 font-medium"
          >
            OUR PHILOSOPHY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl lg:text-6xl text-[#faf9f7] mb-6"
          >
            Three pillars of
            <br />
            <span className="italic text-[#c75b39]">design excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#faf9f7]/60 text-lg leading-relaxed"
          >
            Every project begins with these foundational principles. They guide 
            our decisions, shape our spaces, and ensure each home we create 
            stands as a testament to thoughtful, enduring design.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
