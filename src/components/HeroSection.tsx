import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
export const HeroSection = () => {
  return <section className="pt-24 pb-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <Sparkles size={16} className="mr-2" />
              Introducing our new AI-powered features
            </span>
          </motion.div>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Learn Faster, Grow Smarter with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              AI-Enhanced
            </span>{" "}
            Learning
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Transform your learning experience with our cutting-edge platform.
            Get personalized recommendations, interactive exercises, and
            real-time feedback.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }} className="mt-10 flex items-center justify-center gap-x-6">
            <button className="group flex items-center gap-2 bg-purple-600 px-6 py-3 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Get Started Free
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              Learn more →
            </button>
          </motion.div>
        </div>
      </div>
    </section>;
};