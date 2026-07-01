export default function Footer() {
  return (
    <footer className="w-full max-w-[1536px] mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-[rgba(30,50,90,0.1)]">
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24">
        
        <div className="max-w-xs">
          <h2 className="text-2xl font-normal text-[rgba(30,50,90,0.9)] mb-6 tracking-tighter">RIVR</h2>
          <p className="text-[rgba(30,50,90,0.5)] text-xs leading-relaxed font-medium">
            Streamlining wealth through liquid asset streams, cross-chain yield, and frictionless protocols.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-semibold text-[rgba(30,50,90,0.4)] uppercase tracking-widest mb-2">Protocol</h4>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Ecosystem</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Tokenomics</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Governance</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Security</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-semibold text-[rgba(30,50,90,0.4)] uppercase tracking-widest mb-2">Developers</h4>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Documentation</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Github</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Bug Bounty</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Audits</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-semibold text-[rgba(30,50,90,0.4)] uppercase tracking-widest mb-2">Community</h4>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Discord</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Twitter</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Blog</a>
            <a href="#" className="text-[rgba(30,50,90,0.6)] text-xs font-medium hover:text-[rgba(30,50,90,0.9)] transition-colors">Forum</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
