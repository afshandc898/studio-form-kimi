import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-[#1a1a1a]">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[#c75b39] text-sm tracking-[0.3em] mb-4 font-medium"
            >
              GET IN TOUCH
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl lg:text-7xl text-[#faf9f7] mb-8"
            >
              Let\'s create
              <br />
              <span className="italic text-[#c75b39]">together</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#faf9f7]/60 text-lg leading-relaxed mb-12 max-w-md"
            >
              Every great project begins with a conversation. Share your vision 
              with us, and let\'s explore how we can bring it to life.
            </motion.p>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Studio', value: '42 Albert Road, South Melbourne VIC 3205' },
                { icon: Phone, label: 'Phone', value: '+61 3 9826 4500' },
                { icon: Mail, label: 'Email', value: 'hello@studioform.com.au' },
                { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9am–5pm AEST' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-[#333] text-[#c75b39]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[#faf9f7]/40 text-xs tracking-wider mb-1">{item.label}</p>
                    <p className="text-[#faf9f7]">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 aspect-[16/9] bg-[#252525] border border-[#333] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2d3436] via-[#1a1a1a] to-[#252525]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#c75b39] mx-auto mb-3" />
                  <p className="text-[#faf9f7]/60 text-sm">South Melbourne, Victoria</p>
                  <p className="text-[#faf9f7]/40 text-xs mt-1">Interactive map loading...</p>
                </div>
              </div>
              
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `linear-gradient(to right, #faf9f7 1px, transparent 1px), linear-gradient(to bottom, #faf9f7 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-12"
          >
            <div className="p-8 lg:p-12 bg-[#252525] border border-[#333]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-16 h-16 bg-[#c75b39] flex items-center justify-center mx-auto mb-6"
                  >
                    <Send className="w-8 h-8 text-[#faf9f7]" />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-[#faf9f7] mb-3">
                    Message Sent
                  </h3>
                  <p className="text-[#faf9f7]/60">
                    Thank you for reaching out. We\'ll respond within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#faf9f7]/40 text-xs tracking-wider mb-2">
                        NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-[#faf9f7] placeholder-[#faf9f7]/20 focus:border-[#c75b39] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[#faf9f7]/40 text-xs tracking-wider mb-2">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-[#faf9f7] placeholder-[#faf9f7]/20 focus:border-[#c75b39] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#faf9f7]/40 text-xs tracking-wider mb-2">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-[#faf9f7] placeholder-[#faf9f7]/20 focus:border-[#c75b39] focus:outline-none transition-colors"
                        placeholder="+61 ..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[#faf9f7]/40 text-xs tracking-wider mb-2">
                        PROJECT TYPE
                      </label>
                      <select
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-[#faf9f7] focus:border-[#c75b39] focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select type...</option>
                        <option value="new-home">New Home</option>
                        <option value="renovation">Renovation</option>
                        <option value="extension">Extension</option>
                        <option value="multi-residential">Multi-residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#faf9f7]/40 text-xs tracking-wider mb-2">
                      TELL US ABOUT YOUR PROJECT
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#1a1a1a] border border-[#333] px-4 py-3 text-[#faf9f7] placeholder-[#faf9f7]/20 focus:border-[#c75b39] focus:outline-none transition-colors resize-none"
                      placeholder="Describe your vision, timeline, and any specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 bg-[#c75b39] text-[#faf9f7] font-medium tracking-[0.15em] text-sm hover:bg-[#a84a2d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-[#faf9f7]/30 border-t-[#faf9f7] rounded-full"
                        />
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <ArrowUpRight size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
