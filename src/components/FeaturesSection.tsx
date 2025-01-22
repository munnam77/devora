import React from "react";
import { motion } from "framer-motion";
import { Brain, Rocket, Shield, Zap, Users, BarChart } from "lucide-react";
const features = [{
  icon: Brain,
  title: "AI-Powered Learning",
  description: "Personalized learning paths adapted to your unique style and pace."
}, {
  icon: Rocket,
  title: "Fast-Track Progress",
  description: "Accelerate your learning with smart recommendations and focused content."
}, {
  icon: Shield,
  title: "Secure Platform",
  description: "Enterprise-grade security keeping your data safe and protected."
}, {
  icon: Zap,
  title: "Real-time Feedback",
  description: "Get instant feedback on your progress and areas for improvement."
}, {
  icon: Users,
  title: "Collaborative Learning",
  description: "Learn together with peers and experts in your field."
}, {
  icon: BarChart,
  title: "Progress Tracking",
  description: "Detailed analytics and insights to measure your growth."
}];
export const FeaturesSection = () => {
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to accelerate your learning
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you learn faster, retain more, and achieve
            your goals.
          </motion.p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        }} className="relative group">
              <div className="h-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-400 transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};