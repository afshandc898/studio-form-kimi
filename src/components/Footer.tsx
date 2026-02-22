import { motion } from 'framer-motion'
import { useState } from 'react'
import { Instagram, Linkedin, Twitter, ArrowUpRight, Send } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
]

const footerLinks = [
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '#' },
      { label: 'Team', href: '#team' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Projects', href: '#works' },
      { label: 'Process', href: '#process' },
      { label: 'Awards', href: '#' },
      { label: 'Publications', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Newsletter', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="relative bg-[#1a1a1a] border-t border-[#333]">
      {/* Main Footer */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-2xl tracking-[0.2em] text-[#faf9f7] font-medium block mb-6"
            >
              STUDIO FORM
            </motion.a>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#faf9f7]/50 leading-relaxed mb-8 max-w-sm"
            >
              Minimalist residential architecture for those who seek clarity, 
              craft, and spaces that honor both inhabitant and environment.
            </motion.p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center border border-[#333] text-[#faf9f7]/50 hover:border-[#c75b39] hover:text-[#c75b39] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-8">
            {footerLinks.map((column, colIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + colIndex * 0.1 }}
              >
                <h4 className="text-[#faf9f7] font-medium text-sm tracking-wider mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#faf9f7]/50 hover:text-[#c75b39] transition-colors text-sm flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <h4 className="text-[#faf9f7] font-medium text-sm tracking-wider mb-4">
              NEWSLETTER
            </h4>
            
            <p className="text-[#faf9f7]/50 text-sm mb-6">
              Insights on architecture, design, and sustainable living. 
              Delivered monthly.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-[#252525] border border-[#333]"
              >
                <p className="text-[#c75b39] text-sm">Welcome to the studio. ✓</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-[#252525] border border-[#333] border-r-0 px-4 py-3 text-[#faf9f7] placeholder-[#faf9f7]/30 focus:border-[#c75b39] focus:outline-none transition-colors text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 bg-[#c75b39] text-[#faf9f7] hover:bg-[#a84a2d] transition-colors"
                >
                  <Send size={18} />
                </motion.button>
              </form>
            )}

            <p className="text-[#faf9f7]/30 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#333]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#faf9f7]/40 text-xs">
              © {new Date().getFullYear()} Studio Form. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-[#faf9f7]/40 hover:text-[#faf9f7] text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#faf9f7]/40 hover:text-[#faf9f7] text-xs transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
