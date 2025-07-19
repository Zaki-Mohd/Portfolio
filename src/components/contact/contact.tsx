"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Mail, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_r317z1s", // your service ID
        "template_4ednvgm", // your template ID
        formRef.current!,
        "Uy04bYWkLOXtKPkfY" // your public key
      )
      .then(
        () => {
          toast("Message sent!", {
            description: "Thank you for your message. i'll get back to you soon.",
          });

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send message", {
            description: error.text || "Please try again later.",
          });
          setIsSubmitting(false);
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-8 md:py-0 px-5 lg:px-0">
      <div className="container max-w-6xl mx-auto">
        <Button asChild variant="ghost" className="mb-6 scale-transition -ml-3">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 ">Get In Touch</h1>
            <p className="text-muted-foreground mb-8 max-w-md">
              I&apos;m always interested in new opportunities, collaborations, or just chatting about web development and design. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary dark:bg-accent p-3 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:zakimohammad9819@gmail.com" className="hover-underline">
                      zakimohammad9819@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary dark:bg-accent p-3 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+916281751198" className="hover-underline">+91 6281751198</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary dark:bg-accent p-3 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 aspect-w-16 aspect-h-9">
              <iframe
                title="Map"
                className="w-full h-64 md:h-80 rounded-lg border border-border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.344880720254!2d78.3828276749384!3d17.538759283374468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab28e0975%3A0x7b048b2858fdee94!2sVallurupalli%20Nageswara%20Rao%20Vignana%20Jyothi%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1752915307043!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-6 md:p-8 ring-transition">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full scale-transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
