import React from "react";
import { motion } from "framer-motion";
const stats = [{
  number: "50K+",
  label: "Active Learners"
}, {
  number: "95%",
  label: "Success Rate"
}, {
  number: "200+",
  label: "Expert Mentors"
}, {
  number: "4.9/5",
  label: "User Rating"
}];
export const StatsSection = () => {
  return <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};