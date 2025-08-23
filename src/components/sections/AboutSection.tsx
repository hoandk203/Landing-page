'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target,
  Users,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Linkedin,
  Github,
  Mail
} from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  bio: string
  linkedin?: string
  github?: string
  email?: string
  expertise: string[]
}

interface Milestone {
  year: string
  title: string
  description: string
  icon: React.ReactNode
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Nguyễn Minh Tuấn',
    role: 'CEO & Founder',
    bio: '15+ years experience in quantitative finance tại Goldman Sachs và JP Morgan. PhD in Financial Engineering từ Stanford University.',
    linkedin: 'https://linkedin.com/in/tuannguyen',
    expertise: ['Quantitative Finance', 'Risk Management', 'Machine Learning']
  },
  {
    name: 'Trần Thành Long',
    role: 'CTO & Co-founder',
    bio: 'Ex-Google Senior Engineer với expertise trong high-frequency trading systems. MS Computer Science từ MIT.',
    github: 'https://github.com/longtrannguyen',
    linkedin: 'https://linkedin.com/in/longtran',
    expertise: ['System Architecture', 'High-Frequency Trading', 'AI/ML']
  },
  {
    name: 'Lê Hải Yến',
    role: 'Head of Research',
    bio: 'Former researcher tại Two Sigma với focus on alternative data và market microstructure. PhD Mathematics từ Harvard.',
    linkedin: 'https://linkedin.com/in/yenle',
    expertise: ['Alternative Data', 'Market Research', 'Statistical Modeling']
  },
  {
    name: 'Phạm Đức Nam',
    role: 'Lead Product Designer',
    bio: 'Ex-Stripe designer với 8+ years experience designing fintech products. Expert trong UX for complex financial systems.',
    linkedin: 'https://linkedin.com/in/nampham',
    expertise: ['UX Design', 'Product Strategy', 'User Research']
  }
]

const milestones: Milestone[] = [
  {
    year: '2022',
    title: 'Company Founded',
    description: 'Quantumine được thành lập bởi team cựu Goldman Sachs và Google engineers',
    icon: <Target className="w-6 h-6" />
  },
  {
    year: '2023',
    title: 'Seed Funding',
    description: 'Raised $5M seed round từ top VCs để develop AI-powered trading platform',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    year: '2023',
    title: '10K+ Users',
    description: 'Reached 10,000+ active users milestone với high user satisfaction rates',
    icon: <Users className="w-6 h-6" />
  },
  {
    year: '2024',
    title: 'Series A',
    description: 'Secured $15M Series A để expand internationally và develop new AI features',
    icon: <Globe className="w-6 h-6" />
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Won "Best Fintech Innovation" award tại Vietnam Fintech Summit',
    icon: <Award className="w-6 h-6" />
  }
]

const companyValues = [
  {
    title: 'Innovation',
    description: 'Continuously pushing boundaries in quantitative trading technology',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Transparency',
    description: 'Open-source approach và transparent performance reporting',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Community',
    description: 'Building strong trader community với knowledge sharing culture',
    icon: <Users className="w-8 h-8" />,
    color: 'from-purple-500 to-indigo-500'
  }
]

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Về{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Quantumine
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Được thành lập bởi team experts từ Goldman Sachs, Google và Harvard, 
            chúng tôi đang xây dựng future of quantitative trading tại Việt Nam.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-8 h-full">
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Democratize access to institutional-grade quantitative trading tools, 
                empowering retail và professional traders với AI-powered insights và 
                comprehensive trading infrastructure.
              </p>
              <div className="space-y-4">
                {[
                  'Make quant trading accessible to everyone',
                  'Provide institutional-grade tools at retail scale',
                  'Build strongest trading community in Vietnam',
                  'Drive innovation in financial technology'
                ].map((point, index) => (
                  <div key={index} className="flex items-center text-slate-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-8 h-full">
              <Globe className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Trở thành platform hàng đầu cho quantitative trading tại Southeast Asia, 
                nơi traders có access to cutting-edge technology và vibrant community 
                để achieve financial independence.
              </p>
              <div className="space-y-4">
                {[
                  'Leading quant trading platform in SEA by 2025',
                  '100,000+ active traders on the platform',
                  'Expand to 10+ markets across Asia-Pacific',
                  'Partner with major financial institutions'
                ].map((point, index) => (
                  <div key={index} className="flex items-center text-slate-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-8 text-center hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex relative z-10 items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 bg-opacity-20 border-4 border-slate-800 backdrop-blur-xl">
                    <div className="text-blue-400">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
                      <span className="text-blue-400 font-bold text-lg">{milestone.year}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6 text-center hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[member.name.split(' ').length - 1][0]}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <a href={member.linkedin} className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                        <Linkedin className="w-4 h-4 text-slate-300 hover:text-white" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-gray-600 flex items-center justify-center transition-colors duration-300">
                        <Github className="w-4 h-4 text-slate-300 hover:text-white" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-emerald-600 flex items-center justify-center transition-colors duration-300">
                        <Mail className="w-4 h-4 text-slate-300 hover:text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}