'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/sections/Footer'
import { 
  Target, 
  Eye, 
  Heart, 
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Globe,
  Lightbulb,
  Award
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header currentLanguage="vn" onLanguageChange={() => {}} onToggleStats={() => {}} />
      
      <main className="relative pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
          
          <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-black text-white mb-8">
                Về{' '}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Quantumine
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Chúng tôi đang định hình lại tương lai của giao dịch thông minh với công nghệ AI tiên tiến
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-12">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Sứ mệnh của chúng tôi là dân chủ hóa giao dịch thông minh bằng cách cung cấp các công cụ AI tiên tiến, 
                  giúp mọi nhà đầu tư từ cá nhân đến tổ chức có thể đưa ra quyết định sáng suốt và đạt được 
                  thành công bền vững trên thị trường tài chính.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-12">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Chúng tôi hướng tới việc trở thành nền tảng AI hàng đầu thế giới trong lĩnh vực giao dịch thông minh, 
                  nơi công nghệ tiên tiến kết hợp với hiểu biết sâu sắc về thị trường để tạo ra những giải pháp 
                  đầu tư vượt trội cho cộng đồng toàn cầu.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Những giá trị cốt lõi định hướng mọi hoạt động của chúng tôi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Innovation",
                  description: "Không ngừng đổi mới và ứng dụng công nghệ tiên tiến để tạo ra những giải pháp đột phá."
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Integrity", 
                  description: "Luôn đặt sự minh bạch, trung thực và đạo đức lên hàng đầu trong mọi hoạt động."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Community",
                  description: "Xây dựng cộng đồng mạnh mẽ, hỗ trợ lẫn nhau và cùng nhau phát triển bền vững."
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Excellence",
                  description: "Cam kết mang đến chất lượng vượt trội trong từng sản phẩm và dịch vụ."
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Accessibility",
                  description: "Làm cho công nghệ AI trở nên dễ tiếp cận với mọi người, bất kể trình độ hay nguồn lực."
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Performance",
                  description: "Tập trung vào hiệu suất thực tế và kết quả đầu tư bền vững cho khách hàng."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-8 hover:bg-slate-700/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Hành trình phát triển từ ý tưởng đến nền tảng AI hàng đầu
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    year: "2023",
                    title: "Khởi Đầu",
                    description: "Thành lập Quantumine với tầm nhìn về AI trong giao dịch thông minh. Nghiên cứu và phát triển các thuật toán machine learning đầu tiên."
                  },
                  {
                    year: "2024",
                    title: "Phát Triển Sản Phẩm",
                    description: "Ra mắt platform beta với các tính năng AI cơ bản. Thu hút 1000+ early adopters và nhận được feedback tích cực từ cộng đồng."
                  },
                  {
                    year: "2024 Q4",
                    title: "Mở Rộng Tính Năng",
                    description: "Tích hợp AI Agent thông minh, real-time market analysis và personalized reports. Đạt 45.9% ROI trong backtesting."
                  },
                  {
                    year: "2025",
                    title: "Tương Lai",
                    description: "Mở rộng ra thị trường quốc tế, phát triển mobile app và tích hợp các tài sản crypto, forex. Xây dựng cộng đồng 100K+ traders."
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex flex-col items-center mr-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      {index < 3 && <div className="w-1 h-24 bg-gradient-to-b from-purple-500 to-blue-500 mt-4" />}
                    </div>
                    <div className="flex-1 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-8">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                        <span className="text-purple-400 font-semibold">{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}