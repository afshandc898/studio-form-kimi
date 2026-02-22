import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Lightbulb, PenTool, Home } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Consult',
    subtitle: 'Understanding your vision',
    description:
      'We begin with deep listening. Through site visits, conversations, and careful observation, we uncover the essence of what you need—and what the site demands.',
    icon: MessageCircle,
    details: ['Site analysis', 'Brief development', 'Feasibility study', 'Budget planning'],
  },
  {
    number: '02',
    title: 'Concept',
    subtitle: 'Exploring possibilities',
    description:
      'Ideas take shape through sketches, models, and collaborative exploration. We present multiple directions, refining together until the vision crystallizes.',
    icon: Lightbulb,
    details: ['Schematic design', '3D visualization', 'Material research', 'Sustainability strategy'],
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Precision in every detail',
    description:
      'The concept evolves into comprehensive documentation. Every joint, every surface, every dimension is resolved with meticulous care.',
    icon: PenTool,
    details: ['Construction docs', 'Engineering coordination', 'Council approvals', 'Tender process'],
  },
  {
    number: '04',
    title: 'Build',
    subtitle: 'Bringing vision to life',
    description:
      'We remain intimately involved through construction, conducting regular site visits and working closely with builders to honor the design intent.',
    icon: Home,
    details: ['Site supervision', 'Quality control', 'Contract administration', 'Final handover'],
  },
]

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = step.icon
  const isEven = index % 2 === 0

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
      className="relative"
    >
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Content */}
        <div className="flex-1">
          <motion.div
            whileHover={{ x: isEven ? 10 : -10 }}
            transition={{ duration: 0.3 }}
            className={`p-8 lg:p-12 bg-[#252525] border border-[#333] group hover:border-[#c75b39]/30 transition-colors ${isEven ? 'lg:text-left' : 'lg:text-right'}`}
          >
            {/* Number and Icon */}
            <div className={`flex items-center gap-4 mb-6 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
              <span className="font-serif text-5xl text-[#c75b39]/30 group-hover:text-[#c75b39] transition-colors">
                {step.number}
              </span>
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-12 h-12 flex items-center justify-center border border-[#c75b39]/30 group-hover:border-[#c75b39] group-hover:bg-[#c75b39]/10 transition-all"
              >
                <Icon className="w-5 h-5 text-[#c75b39]" />
              </motion.div>
            </div>

            {/* Title */}
            <p className="text-[#c75b39] text-xs tracking-[0.2em] mb-2 font-medium">
              {step.subtitle}
            </p>
            <h3 className="font-serif text-3xl lg:text-4xl text-[#faf9f7] mb-4">
              {step.title}
            </h3>
            <p className="text-[#faf9f7]/60 leading-relaxed mb-8">
              {step.description}
            </p>

            {/* Details */}
            <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'lg:justify-end'}`}>
              {step.details.map((detail) => (
                <span
                  key={detail}
                  className="px-3 py-1 bg-[#1a1a1a] border border-[#333] text-[#faf9f7]/50 text-xs tracking-wider"
                >
                  {detail}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Spacer for alternating layout */}
        <div className="hidden lg:block flex-1" />
      </div>
    </motion.div>
  )
}

export default function Process() {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-32 lg:py-40 bg-[#1a1a1a]"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={sectionRef} className="max-w-3xl mx-auto text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#c75b39] text-sm tracking-[0.3em] mb-4 font-medium"
          >
            OUR PROCESS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl lg:text-6xl text-[#faf9f7] mb-6"
          >
            From vision to
            <br />
            <span className="italic text-[#c75b39]">reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#faf9f7]/60 text-lg"
          >
            A refined four-stage journey that transforms your aspirations 
            into meticulously crafted architecture.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#333] hidden lg:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#c75b39] to-[#c75b39]/30"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
