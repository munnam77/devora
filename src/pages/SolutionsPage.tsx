import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, HeartPulse } from "lucide-react";
const solutions = [{
  icon: Briefcase,
  title: "Enterprise",
  description: "Empower your workforce with customized learning solutions",
  benefits: ["Custom learning paths", "Progress tracking & analytics", "Team collaboration tools", "Enterprise SSO integration"]
}, {
  icon: GraduationCap,
  title: "Education",
  description: "Transform your institution with modern learning tools",
  benefits: ["Virtual classrooms", "Student progress tracking", "Assignment management", "Interactive assessments"]
}, {
  icon: Building2,
  title: "Startups",
  description: "Scale your team's skills efficiently and cost-effectively",
  benefits: ["Flexible pricing", "Quick onboarding", "Essential integrations", "Growth-focused features"]
}, {
  icon: HeartPulse,
  title: "Healthcare",
  description: "Specialized training solutions for healthcare professionals",
  benefits: ["HIPAA compliance", "Medical certifications", "Procedure simulations", "Continuing education"]
}];
export const SolutionsPage = () => {
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
              Solutions for Every Industry
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tailored learning solutions to meet your industry-specific needs
            </p>
          </motion.div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => <motion.div key={index} initial={{
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
          }} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-400 transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h2>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, i) => <li key={i} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                      {benefit}
                    </li>)}
                </ul>
                <button className="mt-8 w-full bg-purple-50 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors">
                  Learn More
                </button>
              </motion.div>)}
          </div>
        </div>
      </section>
    </main>;
};