import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        {/* Hero architecture image */}
        <div className="absolute inset-0">
          <img
            src="/hero-architecture.jpg"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#1a1a1a]/60" />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a]/30" />
        </div>
        
        {/* Subtle geometric accent */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ y }}
          className="absolute right-0 top-1/4 w-[60vw] h-[70vh] bg-gradient-to-bl from-[#c75b39]/10 to-transparent"
        />
        
        {/* Grid lines suggesting architectural plans */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, #faf9f7 1px, transparent 1px), linear-gradient(to bottom, #faf9f7 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#c75b39] text-sm tracking-[0.3em] mb-6 font-medium"
          >
            MELBOURNE ARCHITECTURE STUDIO
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#faf9f7] leading-[0.9] tracking-[-0.02em] mb-8"
          >
            Form Follows
            <br />
            <span className="italic text-[#c75b39]">Light</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#faf9f7]/60 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light tracking-wide"
          >
            Minimalist residential architecture crafted with precision, 
            sustainable materials, and an unwavering commitment to light and space.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#works"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-[#c75b39] text-[#faf9f7] font-medium tracking-[0.15em] text-sm hover:bg-[#a84a2d] transition-colors"
            >
              VIEW PROJECTS
            </motion.a>
            <motion.a
              href="#philosophy"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-[#faf9f7]/30 text-[#faf9f7] font-medium tracking-[0.15em] text-sm hover:border-[#faf9f7] hover:bg-[#faf9f7]/5 transition-all"
            >
              OUR PHILOSOPHY
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#philosophy"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-[#faf9f7]/40 hover:text-[#faf9f7]/70 transition-colors"
          >
            <span className="text-xs tracking-[0.2em]">SCROLL</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
