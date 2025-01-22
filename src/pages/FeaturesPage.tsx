import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Users, BarChart, Layout, Terminal } from "lucide-react";
const features = [{
  icon: Brain,
  title: "AI-Powered Learning Paths",
  description: "Our advanced AI algorithms create personalized learning paths tailored to your goals, learning style, and pace.",
  details: "Experience adaptive learning that evolves with you. Our AI system analyzes your progress, identifies knowledge gaps, and adjusts your curriculum in real-time."
}, {
  icon: Terminal,
  title: "Interactive Coding Environment",
  description: "Write, run, and debug code directly in your browser with our powerful integrated development environment.",
  details: "Practice coding with real-time syntax highlighting, autocompletion, and instant feedback. Support for multiple programming languages and frameworks."
}, {
  icon: Layout,
  title: "Visual Learning Tools",
  description: "Complex concepts explained through interactive visualizations and animations.",
  details: "Transform abstract concepts into clear, visual representations. Interactive diagrams and step-by-step animations help you understand complex topics easily."
}
// ... more detailed features
];
export const FeaturesPage = () => {
  return <main className="pt-20">
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Powerful Features for Modern Learning
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover how our cutting-edge features can transform your learning
              experience
            </p>
          </motion.div>
          <div className="mt-20 space-y-16">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <p className="text-gray-600">{feature.details}</p>
                </div>
                <div className="flex-1 bg-purple-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                  {/* Placeholder for feature illustration/demo */}
                  <p className="text-purple-600 font-medium">
                    Interactive Demo
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
    </main>;
};