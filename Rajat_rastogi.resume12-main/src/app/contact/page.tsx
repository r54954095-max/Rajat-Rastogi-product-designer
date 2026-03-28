"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/lib/actions/send-email";
import { toast } from "sonner";
import { BehanceIcon } from "@/components/icons/behance-icon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        toast.success("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact me directly.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajatrastogi201@gmail.com",
      href: "mailto:rajatrastogi201@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8527166858",
      href: "tel:+918527166858",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "C-205, Madhuban colony, 110092",
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rajat-rastogi-482525230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      username: "Rajat Rastogi",
    },
    {
      name: "Behance",
      icon: BehanceIcon,
      url: "https://www.behance.net/rajatrastogi",
      username: "Rajat Rastogi",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-bold mb-4">
          Get In <span className="text-blue-900 dark:text-blue-400">Touch</span>
        </h1>
        <div className="w-20 h-1 bg-blue-900 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="bg-card border-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-blue-900/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">
                Connect With Me
              </h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-foreground/5 rounded-lg hover:bg-blue-900/10 transition-all border border-border hover:border-blue-900/30"
                  >
                    <social.icon className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-900"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-900"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-900 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Send className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
}