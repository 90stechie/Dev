import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl">
            Hi, I'm <span className="text-blue-600">Prasanth Namana</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600">
            Senior Cloud Consultant
          </p>
        </div>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          I deploy, manage cloud resources as per the business needs.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={scrollToProjects} size="lg" className="gap-2">
            View My Work
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button onClick={scrollToContact} variant="outline" size="lg">
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <a
            href="https://github.com/90stechie"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow hover:bg-slate-50"
          >
            <Github className="h-6 w-6 text-slate-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/prasanth-namana-4a4b2454/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow hover:bg-slate-50"
          >
            <Linkedin className="h-6 w-6 text-slate-700" />
          </a>
          <a
            href="mailto:namanaprasanth8@gmail.com"
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow hover:bg-slate-50"
          >
            <Mail className="h-6 w-6 text-slate-700" />
          </a>
        </div>
      </div>
    </section>
  );
}
