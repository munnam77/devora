import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
export const ContactPage = () => {
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
        }} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? We're here to help you succeed.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-purple-600" />
                    <span className="text-gray-600">support@learnify.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-purple-600" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-purple-600" />
                    <span className="text-gray-600">
                      123 Learning Street, San Francisco, CA 94105
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Support
                </h3>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="text-purple-600" />
                    <span className="font-medium">Live Chat Support</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Get instant help from our support team through live chat.
                  </p>
                  <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>;
};