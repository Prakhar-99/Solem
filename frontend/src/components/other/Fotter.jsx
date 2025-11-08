
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Fotter = () => {
  return (
    <footer className="bg-secondary text-primary py-8  w-full">
      
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/about" className=" text-primary hover:text-complement transition-colors">About</a>
          <a href="/contact" className=" text-primary hover:text-complement transition-colors">Contact</a>
          <a href="/privacy" className="text-primary hover:text-complement transition-colors">Privacy</a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com" aria-label="Twitter">
            <Twitter size={20} className=" text-primary hover:text-complement transition-colors" />
          </a>
          <a href="https://github.com" aria-label="GitHub">
            <Github size={20} className=" text-primary hover:text-complement transition-colors" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <Linkedin size={20} className=" text-primary hover:text-complement transition-colors" />
          </a>
          <a href="mailto:example@email.com" aria-label="Email">
            <Mail size={20} className=" text-primary hover:text-complement transition-colors" />
          </a>
        </div>
        
        <p className="text-sm text-complement">
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Fotter;
