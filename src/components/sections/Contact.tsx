import React from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          I'm open to freelance opportunities, collaborations, or just having a friendly chat. Feel free to reach out!
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:ankit.kashyapdeveloper@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-2xl hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Or email me directly at <span className="underline">ankit.kashyapdeveloper@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
