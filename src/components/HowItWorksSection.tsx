import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Upload Blood Sample",
    description: "Capture or upload a microscopic blood smear image using your device camera or lab equipment.",
  },
  {
    number: "02",
    title: "AI Processing",
    description: "Our neural network analyzes cell morphology, count, and hemoglobin concentration in real-time.",
  },
  {
    number: "03",
    title: "3D Visualization",
    description: "View interactive 3D models of your blood cells with highlighted anomalies and markers.",
  },
  {
    number: "04",
    title: "Get Your Report",
    description: "Receive a detailed anemia risk assessment with actionable health recommendations.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Four simple steps to comprehensive blood analysis
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center z-10 relative md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="text-sm font-bold text-primary font-display">{step.number}</span>
              </div>
              <div className={`card-gradient rounded-xl p-6 border border-border flex-1 ml-0 md:ml-0 ${
                index % 2 === 0 ? "md:mr-[calc(50%+2rem)]" : "md:ml-[calc(50%+2rem)]"
              }`}>
                <h3 className="text-xl font-semibold font-display mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
