import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 py-14 sm:py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Me
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Have a project idea, collaboration, or opportunity? Feel free to
            reach out — I'm always open to discussing new ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-5 sm:mb-6">
                Get in Touch
              </h2>

              <div className="space-y-4 sm:space-y-5">
                <a
                  href="mailto:mdsabbirahmedcst@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-gray-600 transition-colors">
                    <Mail className="text-blue-600 w-5 h-5" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    mdsabbirahmedcst@gmail.com
                  </span>
                </a>

                <a
                  href="tel:01785525461"
                  className="flex items-center gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-gray-600 transition-colors">
                    <Phone className="text-blue-600 w-5 h-5" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    01785525461
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 dark:bg-gray-700 flex items-center justify-center">
                    <MapPin className="text-purple-600 w-5 h-5" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Bangladesh
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Why Contact Me?
              </h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-start gap-2">
                  <span>✔</span>
                  <span>Clean & maintainable frontend code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✔</span>
                  <span>Modern UI/UX focused development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✔</span>
                  <span>Fast learner & team collaborator</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-5 sm:mb-6">
              Send a Message
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none bg-transparent text-gray-800 dark:text-white text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none bg-transparent text-gray-800 dark:text-white text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none bg-transparent text-gray-800 dark:text-white resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={sent}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-70"
              >
                {sent ? (
                  <>
                    Message Sent
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;