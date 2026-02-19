import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden card-gradient border border-border p-12 md:p-16 text-center"
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Ready to Check Your
              <br />
              <span className="text-gradient">Blood Health?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Join thousands of users who trust HemoScan for early anemia detection and ongoing blood health monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 rounded-lg font-semibold bg-primary text-primary-foreground hover:bg-crimson-glow transition-all duration-300 glow-red">
                Get Started Free
              </button>
              <button className="px-8 py-3.5 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
