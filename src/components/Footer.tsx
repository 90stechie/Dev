import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl mb-2">Prasanth Namana</p>
            <p className="text-slate-400">Building the web, one project at a time.</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/prasanthnamana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/prasanth-namana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:prasanth.namana@gmail.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> © 2025 Prasanth Namana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
