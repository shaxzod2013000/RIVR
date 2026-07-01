import { motion } from 'motion/react';

const stats = [
  { value: '$2.4B', label: 'TOTAL VALUE LOCKED' },
  { value: '8.5%', label: 'AVERAGE REALIZED YIELD' },
  { value: '140K+', label: 'ACTIVE PARTICIPANTS' },
  { value: '< 2s', label: 'FINALITY ENGINE' },
];

export default function Stats() {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-4">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col w-[45%] md:w-auto"
          >
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal text-[rgba(30,50,90,0.9)] tracking-tight mb-2 leading-none">
              {stat.value}
            </h3>
            <p className="text-[10px] sm:text-xs text-[rgba(30,50,90,0.5)] uppercase tracking-[0.15em] font-semibold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
