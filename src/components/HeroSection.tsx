import { motion } from "framer-motion";
import BloodCellScene from "./BloodCellScene";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <BloodCellScene />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            AI-Powered Blood Analysis
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
            Detect <span className="text-gradient">Anemia</span>
            <br />
            Early & Accurately
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Advanced 3D blood cell analysis powered by artificial intelligence.
            Get instant hemoglobin insights from a simple scan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-crimson-glow transition-all duration-300 glow-red">
              Start Detection
            </button>
            <button className="px-8 py-3.5 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
