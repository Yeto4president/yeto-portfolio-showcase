import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-theme-dark/50">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-effect rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="bg-theme-dark/30 border border-white/10 text-white rounded-lg focus:ring-theme-primary focus:border-theme-primary block w-full pl-10 p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="bg-theme-dark/30 border border-white/10 text-white rounded-lg focus:ring-theme-primary focus:border-theme-primary block w-full pl-10 p-2.5"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="bg-theme-dark/30 border border-white/10 text-white rounded-lg focus:ring-theme-primary focus:border-theme-primary block w-full p-2.5"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <Button className="bg-theme-primary hover:bg-theme-primary/90 text-white w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="glass-effect rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                I'm currently available for freelance work and job opportunities. 
                Feel free to reach out if you have a project that needs some attention.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-theme-primary rounded-full p-2 mr-4 mt-1">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:contact@yeto.com" className="text-gray-300 hover:text-theme-primary transition">
                      contact@yeto.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-theme-primary rounded-full p-2 mr-4 mt-1">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/Yeto4president" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-theme-primary transition"
                    >
                      github.com/Yeto4president
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="font-medium text-xl mb-4">Let's connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Yeto4president" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-theme-dark/30 hover:bg-theme-primary/20 border border-white/10 rounded-full p-3 transition"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:contact@yeto.com" 
                  className="bg-theme-dark/30 hover:bg-theme-primary/20 border border-white/10 rounded-full p-3 transition"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
