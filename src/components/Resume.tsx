import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-16 px-4 text-center bg-white dark:bg-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white">Resume</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        You can download my resume in PDF format below:
      </p>

      <div className="flex justify-center">
        <a
          href="/Ankit_Kashyap_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center gap-2 px-6 py-3 text-lg">
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
