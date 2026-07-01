import { motion } from 'motion/react';
import { Lock, ArrowUpRight } from 'lucide-react';

export default function Features() {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-6 md:px-10 pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight mb-4">
            Architected for high-performance DeFi
          </h2>
          <p className="text-[rgba(30,50,90,0.6)] text-sm md:text-base">
            Fluid Liquidity Solutions. Access the future of staking.
          </p>
        </div>
        <button className="rounded-full border border-[rgba(30,50,90,0.2)] px-6 py-2 text-sm text-[rgba(30,50,90,0.8)] hover:bg-[rgba(30,50,90,0.05)] transition-colors self-start md:self-auto">
          Start Staking
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* Card 1 - Tall (Spans 2 rows on desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between md:row-span-2 min-h-[450px]"
        >
          <div className="flex justify-between items-start text-[10px] md:text-xs font-semibold text-[rgba(30,50,90,0.4)] uppercase tracking-widest mb-12">
            <span>01</span>
            <span>LIQUID STAKING</span>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-[40px] font-normal text-[rgba(30,50,90,0.9)] tracking-tight mb-6 leading-tight">
              Unlock the liquidity<br/>of your staked assets
            </h3>
            <p className="text-[rgba(30,50,90,0.6)] text-sm md:text-base leading-relaxed">
              Trade, borrow, or yield farm without unstaking periods. Experience zero-friction with immediate access to your capital.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Wide (Spans 2 cols on desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2rem] p-8 md:p-10 md:col-span-2 flex flex-col justify-between min-h-[250px]"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl md:text-3xl lg:text-[32px] font-normal text-[rgba(30,50,90,0.9)] tracking-tight">
              Real-time Yields
            </h3>
            <span className="text-[10px] md:text-xs font-semibold text-[rgba(30,50,90,0.4)] uppercase tracking-widest">02</span>
          </div>
          <p className="text-[rgba(30,50,90,0.6)] text-sm md:text-base leading-relaxed max-w-md">
            Track your compounding rewards minute by minute with our high-fidelity indexers. Keep your finger on the pulse of your portfolio's performance.
          </p>
        </motion.div>

        {/* Card 3 - Square */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[250px]"
        >
           <div className="flex justify-between items-start mb-6 text-[10px] md:text-xs font-semibold text-[rgba(30,50,90,0.4)] uppercase tracking-widest">
            <span>BANK-GRADE</span>
            <span>03</span>
          </div>
          <p className="text-[rgba(30,50,90,0.9)] text-sm md:text-base leading-relaxed mb-12">
            Smart contracts audited by leading firms, protected by multisig.
          </p>
          <div className="flex justify-between items-center text-[rgba(30,50,90,0.5)] text-sm mt-auto group cursor-pointer">
            <span className="group-hover:text-[rgba(30,50,90,0.9)] transition-colors">View Audits</span>
            <Lock className="w-4 h-4 group-hover:text-[rgba(30,50,90,0.9)] transition-colors" />
          </div>
        </motion.div>

        {/* Card 4 - Square */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[250px] relative overflow-hidden group cursor-pointer"
        >
          <div className="flex justify-between items-start mb-6 text-[10px] md:text-xs font-semibold text-[rgba(30,50,90,0.4)] uppercase tracking-widest relative z-10">
            <span>CROSS-CHAIN</span>
            <span>04</span>
          </div>
          <div className="flex-1 flex items-center justify-center mb-6 relative z-10">
             <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform bg-[#f9f9fa]">
               <ArrowUpRight className="w-5 h-5 text-[rgba(30,50,90,0.4)] group-hover:text-[rgba(30,50,90,0.9)] transition-colors" />
             </div>
          </div>
          <p className="text-[rgba(30,50,90,0.6)] text-sm leading-relaxed relative z-10 text-center">
            Move your liquid position across Layer 2 solutions seamlessly.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
