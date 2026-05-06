import { motion } from "framer-motion";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { Code, Database, Layout, Smartphone } from "lucide-react";
import Modal from "./Modal";
import emailjs from "emailjs-com";

const EmailKey= 'sL4Pt5EkVRNtylhG2';
// const EmailPasswordKey= 'YDTPp_RZJOkdKhRcVDP_H';
const EmailTemplet = 'template_5a6qh5f';
const EmailServiceId = 'service_ihysgqg';

const services = [
  {
    title: "Frontend Development",
    description: "Modern UI with React, Tailwind, animations and performance optimization.",
    icon: <Layout className="w-10 h-10" />,
    pricing: {
      hourly: "$10/hr",
      monthly: "$200/mo",
      project: "$850+",
    },
  },
  {
    title: "Backend Development",
    description: "REST APIs, authentication, scalable server-side logic using Node.js.",
    icon: <Code className="w-10 h-10" />,
    pricing: {
      hourly: "$12/hr",
      monthly: "$250/mo",
      project: "$900+",
    },
  },
  {
    title: "Database Solutions",
    description: "Database design, optimization, and real-time data handling.",
    icon: <Database className="w-10 h-10" />,
    pricing: {
      hourly: "$10/hr",
      monthly: "$200/mo",
      project: "$800+",
    },
  },
  {
    title: "Full Stack Projects",
    description: "Complete web applications from frontend to backend deployment.",
    icon: <Smartphone className="w-10 h-10" />,
    pricing: {
      hourly: "$15/hr",
      monthly: "$350/mo",
      project: "$1100+",
    },
  },
];

type Plan = "hourly" | "monthly" | "project";

type ServiceItem = (typeof services)[number];

export default function Services() {
  const [plan, setPlan] = useState<Plan>("project");
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openRequest = (service: ServiceItem) => {
    setActiveService(service);
    setSubmitted(false);
    setError(null);
    setFormValues({ name: "", email: "", message: "" });
  };

  const closeRequest = () => setActiveService(null);

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!activeService) return;

    setLoading(true);
    setError(null);
emailjs
      .send(
        EmailServiceId,
        EmailTemplet,
        formValues,
        EmailKey
      ).then(
        () => {
          setLoading(false)
          alert("Message sent successfully!");
        },
        (error) => {
          setError(error);
          alert("Failed to send message");
        }
      );
  

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="services" className="min-h-screen pt-24 px-4 bg-none z-20 relative flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-slate-100/60 font-orbitron"
        >
          Freelance Services
        </motion.h2>

        <p className="text-gray-600 mb-8 text-sm md:text-base text-slate-200/30">
          Flexible pricing models tailored for startups, businesses, and
          individuals.
        </p>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="glass shadow-md rounded-full p-2 flex gap-2">
            {( ["hourly", "monthly", "project"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setPlan(type)}
                className={`px-4 py-2 rounded-full text-sm capitalize transition duration-150 ease-in-out cursor-pointer  ${
                  plan === type ? "bg-gray-200/30 text-white" : "text-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center text-gray-200 mb-4">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

              <p className="text-gray-300 text-sm mb-4">
                {service.description}
              </p>

              <div className="text-2xl font-bold text-gray-100 mb-4">
                {service.pricing[plan]}
              </div>

              <button
                type="button"
                onClick={() => openRequest(service)}
                className="w-full glass text-white py-2 rounded-lg cursor-pointer"
              >
                Hire Me
              </button>
            </motion.div>
          ))}
        </div>
      </div>
             <Modal
        open={!!activeService}
        onClose={closeRequest}
        title={activeService ? `Hire me for ${activeService.title}` : undefined}
      >
        {activeService ? (
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-200/80 mb-4">
                You selected <span className="font-semibold">{activeService.title}</span> with the <span className="font-semibold capitalize">{plan}</span> pricing.
              </p>

              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <h4 className="text-sm font-semibold text-white mb-2">What's included</h4>
                <p className="text-sm text-slate-200/70 mb-3">{activeService.description}</p>

                <div className="text-sm text-slate-200/70">
                  <div className="flex justify-between">
                    <span>Estimated rate</span>
                    <span className="font-medium text-white">{activeService.pricing[plan]}</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-300/80">
                    This is a ballpark estimate. Final pricing depends on scope, timeline, and deliverables.
                  </div>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Thanks!</h3>
                  <p className="text-sm text-slate-200/80">
                    I've received your message and will reach out shortly to discuss the details.
                  </p>
                  <button
                    type="button"
                    onClick={closeRequest}
                    className="mt-6 w-full rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block text-sm text-slate-200/70">
                    Name
                    <input
                      name="name"
                      value={formValues.name}
                      onChange={handleFormChange}
                      required
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block text-sm text-slate-200/70">
                    Email
                    <input
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleFormChange}
                      required
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block text-sm text-slate-200/70">
                    Message
                    <textarea
                      name="message"
                      value={formValues.message}
                      onChange={handleFormChange}
                      rows={4}
                      required
                      className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20"
                      placeholder="Tell me about your project..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    Send request
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : null}
      </Modal>
     
    </section>
  );
}
