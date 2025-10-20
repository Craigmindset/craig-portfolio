"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container flex flex-col items-center justify-center min-h-[50vh]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl mx-auto mt-12"
        >
          <Card className="border-none shadow-md w-[min(90vw,900px)] max-w-[900px] relative left-1/2 -translate-x-1/2">
            <CardContent className="p-8 flex flex-col items-center w-full">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8 text-center">
                Feel free to reach out to me for any inquiries, project
                discussions, or just to say hello!
              </p>

              <div className="space-y-6 mt-10 w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-12 gap-6 w-full">
                  {/* Email */}
                  <div className="flex items-center gap-4 justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:irediacraig@gmail.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        irediacraig@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-4 justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:+2349057871672"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +234 905 787 1672
                      </a>
                    </div>
                  </div>
                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      {/* Simple WhatsApp SVG icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#22c55e"
                          d="M12 2a10 10 0 0 0-8.94 14.47l-1.05 3.85a1 1 0 0 0 1.22 1.22l3.85-1.05A10 10 0 1 0 12 2Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-3.36-5.64c.2.2.42.38.66.54.36.24.74.44 1.14.6.4.16.82.28 1.24.36.42.08.84.12 1.26.12.42 0 .84-.04 1.26-.12.42-.08.84-.2 1.24-.36.4-.16.78-.36 1.14-.6.24-.16.46-.34.66-.54a1 1 0 0 0 0-1.42l-.7-.7a1 1 0 0 0-1.42 0l-.3.3a4.98 4.98 0 0 1-2.12-2.12l.3-.3a1 1 0 0 0 0-1.42l-.7-.7a1 1 0 0 0-1.42 0c-.2.2-.38.42-.54.66-.24.36-.44.74-.6 1.14-.16.4-.28.82-.36 1.24-.08.42-.12.84-.12 1.26 0 .42.04.84.12 1.26.08.42.2.84.36 1.24.16.4.36.78.6 1.14Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <a
                        href="https://wa.me/2349057871672"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        Chat me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
