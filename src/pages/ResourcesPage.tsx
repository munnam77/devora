import React from "react";
import { motion } from "framer-motion";
import { Book, FileText, Video, Users } from "lucide-react";
const resources = [{
  type: "Blog",
  title: "Getting Started with AI-Enhanced Learning",
  description: "Learn how to maximize your learning potential with our AI-powered platform.",
  readTime: "5 min read",
  category: "Guides"
}, {
  type: "Tutorial",
  title: "Advanced Learning Techniques",
  description: "Deep dive into advanced learning strategies and methodologies.",
  readTime: "10 min read",
  category: "Advanced"
}, {
  type: "Video",
  title: "Platform Features Overview",
  description: "A comprehensive tour of our platform's key features.",
  duration: "15 min",
  category: "Product"
}
// ... more resources
];
export const ResourcesPage = () => {
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
              Learning Resources
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore our collection of guides, tutorials, and documentation
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Latest Articles
              </h2>
              <div className="space-y-8">
                {resources.map((resource, index) => <motion.article key={index} initial={{
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
              }} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-400 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
                      <span className="px-2 py-1 bg-purple-50 rounded-full">
                        {resource.type}
                      </span>
                      <span>•</span>
                      <span>{resource.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      {resource.readTime || resource.duration}
                    </div>
                  </motion.article>)}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Resource Types
              </h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition-colors">
                  <Book className="text-purple-600" />
                  <span className="font-medium">Documentation</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition-colors">
                  <FileText className="text-purple-600" />
                  <span className="font-medium">Guides</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition-colors">
                  <Video className="text-purple-600" />
                  <span className="font-medium">Video Tutorials</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 transition-colors">
                  <Users className="text-purple-600" />
                  <span className="font-medium">Community</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
};