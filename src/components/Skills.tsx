import React from "react";
import { FaPython, FaReact, FaGitAlt, FaNodeJs, FaLinux } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiPostgresql, SiSqlite, SiJavascript } from "react-icons/si";

const skills = [
  { icon: <FaPython size={40} />, name: "Python" },
  { icon: <SiDjango size={40} />, name: "Django" },
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
  { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
  { icon: <SiSqlite size={40} />, name: "SQLite" },
  { icon: <FaGitAlt size={40} />, name: "Git" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <FaLinux size={40} />, name: "Linux" },
  { icon: <FaLinux size={40} />, name: "AI" },
  { icon: <FaLinux size={40} />, name: "Machine Learning" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Skills & Tools</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 transition-transform hover:scale-105">
            <div className="text-blue-600 dark:text-blue-400">{skill.icon}</div>
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
