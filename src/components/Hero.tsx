import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-400">Ankit Kashyap</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A passionate developer building modern full-stack apps with Python, JavaScript, and AI.
        </p>
        <div className="space-x-4">
          <Button className="text-lg px-6 py-4" onClick={() => window.location.href = "/Projects"}>
            View Projects
          </Button>
          <Button variant="outline" className="text-lg px-6 py-4" onClick={() => window.open("/Ankit_Kashyap_Resume.pdf", "_blank")}>
            Download Resume
          </Button>
          <Button className="text-lg px-6 py-4" onClick={() =>window.location.href = "/Certificates"}>
            View Certificates
          </Button>
        </div>
      </div>
    </section>
  );
}
