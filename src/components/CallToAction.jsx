import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-6 md:px-10 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[350px] md:min-h-[450px] flex items-end p-8 md:p-16"
      >
        {/* Background Video / Gradient */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-purple-900/40 to-orange-500/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,50,90,0.8)] via-[rgba(30,50,90,0.2)] to-transparent opacity-90"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-[72px] font-normal text-white tracking-tight mb-4 leading-[1.05]">
              Melt rigid assets<br/>into fluid yield.
            </h2>
            <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-md font-normal leading-relaxed">
              Join the decentralized ecosystem transforming capital efficiency across chains.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center bg-white text-[rgba(30,50,90,0.9)] rounded-full pl-2 pr-6 py-1.5 md:py-2 gap-3 hover:bg-gray-100 transition-colors">
              <div className="bg-[rgba(30,50,90,0.05)] p-2 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)]" />
              </div>
              <span className="text-sm font-medium">Launch App</span>
            </button>
            <button className="flex items-center bg-black/20 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-1.5 md:py-2 hover:bg-black/30 transition-colors">
              <span className="text-sm font-medium">Read Docs</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
