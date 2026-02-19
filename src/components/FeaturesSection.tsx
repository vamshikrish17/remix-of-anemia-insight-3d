import { motion } from "framer-motion";
import { Activity, Brain, Zap, Shield, Eye, HeartPulse } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Deep learning models trained on millions of blood samples for precise anemia classification.",
  },
  {
    icon: Eye,
    title: "3D Cell Visualization",
    description: "Real-time 3D rendering of blood cells to visualize morphology and detect abnormalities.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get comprehensive hemoglobin and RBC analysis in under 30 seconds.",
  },
  {
    icon: Shield,
    title: "Clinical Accuracy",
    description: "98.5% detection accuracy validated across diverse populations and clinical settings.",
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    description: "Track hemoglobin trends over time with personalized health dashboards.",
  },
  {
    icon: HeartPulse,
    title: "Early Warning System",
    description: "Proactive alerts when your levels approach anemic thresholds.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
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
            Why Choose <span className="text-gradient">HemoScan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cutting-edge technology for blood health monitoring
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
