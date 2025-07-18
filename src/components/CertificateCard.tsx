import React from "react";

interface CertificateCardProps {
  title: string;
  image: string;
  link: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform hover:scale-105 transition-transform duration-300"
    >
      <div className="rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 bg-white dark:bg-zinc-900">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
      </div>
    </a>
  );
};

export default CertificateCard;
