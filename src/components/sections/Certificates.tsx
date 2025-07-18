import React from "react";
import CertificateCard from "@/components/CertificateCard";

const certificates = [
  {
    title: "CS50: Introduction to Computer Science",
    image: "/certificates/CS50x.png",
    link: "https://certificates.cs50.io/fa4dcd9c-b8c5-45f2-9116-3c577a074079.png?size=letter"
  },
  {
    title: "CS50: Web Programming with Python and JavaScript",
    image: "/certificates/CS50W.png",
    link: "https://certificates.cs50.io/64bd8d44-4a71-4761-8894-21e05931a10b.png?size=letter"
  },
  {
    title: "CS50: Introduction to Cybersecurity",
    image: "/certificates/CS50 Cybersecurity.png",
    link: "https://certificates.cs50.io/21f24d03-56db-4230-9c8b-5cb98fc94203.png?size=letter"
  },
  {
    title: "CS50: Introduction to Databases with SQL",
    image: "/certificates/CS50 SQL.png",
    link: "https://cs50.harvard.edu/certificates/your_cs50sql_cert_link"
  },
  {
    title: "CS50: Computer Science for Business Professionals",
    image: "/certificates/CS50B.png",
    link: "https://certificates.cs50.io/32d28c60-f2f1-416a-8911-97353f411cf9.png?size=letter"
  },
  {
    title: "CS50: Introduction to Programming with Python",
    image: "/certificates/cs50python.png",
    link: "https://cs50.harvard.edu/certificates/your_cs50python_cert_link"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 px-6 bg-gray-50 dark:bg-zinc-950">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-black dark:text-white">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
