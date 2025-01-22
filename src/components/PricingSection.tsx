import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
const plans = [{
  name: "Starter",
  price: "$0",
  period: "Forever free",
  features: ["Access to basic courses", "Limited AI recommendations", "Community support", "Basic progress tracking", "Mobile app access"],
  cta: "Get Started",
  popular: false
}, {
  name: "Pro",
  price: "$29",
  period: "per month",
  features: ["All Starter features", "Advanced AI learning paths", "Priority support", "Detailed analytics", "Collaborative learning tools", "Certificate of completion"],
  cta: "Start Pro Trial",
  popular: true
}, {
  name: "Enterprise",
  price: "Custom",
  period: "Contact us",
  features: ["All Pro features", "Custom learning paths", "Dedicated success manager", "API access", "SSO integration", "Custom reporting"],
  cta: "Contact Sales",
  popular: false
}];
export const PricingSection = () => {
  return <section className="py-24 bg-gray-50">
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
      }} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that's right for you
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => <motion.div key={index} initial={{
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
        }} className={`bg-white rounded-2xl p-8 border ${plan.popular ? "border-purple-400 ring-2 ring-purple-400" : "border-gray-200"}`}>
              {plan.popular && <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
                  Most Popular
                </span>}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="ml-2 text-gray-600">{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>)}
              </ul>
              <button className={`mt-8 w-full py-3 px-4 rounded-lg font-medium ${plan.popular ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-purple-50 text-purple-600 hover:bg-purple-100"} transition-colors`}>
                {plan.cta}
              </button>
            </motion.div>)}
        </div>
      </div>
    </section>;
};