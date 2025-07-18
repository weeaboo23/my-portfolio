import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 bg-zinc-100 dark:bg-zinc-900 text-center">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ankit Kashyap. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/weeaboo23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="www.linkedin.com/in/ankit-kashyap-684ba5352"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
