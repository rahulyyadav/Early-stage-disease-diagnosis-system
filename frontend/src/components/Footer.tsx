import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Reach At Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Reach at..</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-teal-200" />
                <span className="text-sm">Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-200" />
                <span className="text-sm">Call +01 1234567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-200" />
                <span className="text-sm">basundharayadav28@gmail.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-teal-200 hover:bg-teal-600 p-2"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-teal-200 hover:bg-teal-600 p-2"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-teal-200 hover:bg-teal-600 p-2"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-teal-200 hover:bg-teal-600 p-2"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Team Members</h3>
            <p className="text-sm text-teal-100 leading-relaxed">
              <a href="https://rahul-yadav.com.np/">• Rahul Yadav</a> <br />{" "}
              <a href="">• Ayush M Singh</a> <br />
              <a href="">• Ayush Yadav</a>
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-sm text-teal-100 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-sm text-teal-100 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="/nail-info"
                className="block text-sm text-teal-100 hover:text-white transition-colors duration-200"
              >
                Nail Info
              </a>
              <a
                href="/predict"
                className="block text-sm text-teal-100 hover:text-white transition-colors duration-200"
              >
                Predict
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter email"
                className="bg-white/10 border-teal-500 text-white placeholder:text-teal-200 focus:border-teal-300"
              />
              <Button className="w-full bg-teal-500 hover:bg-teal-400 text-white font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-600 mt-8 pt-8 text-center">
          <p className="text-sm text-teal-200">
            © 2025 Nail Disease Detection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
