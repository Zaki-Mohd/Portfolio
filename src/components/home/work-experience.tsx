"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Code,
  Calendar,
  Building,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Work experience data
const experiences = [
  {
    id: 1,
    title: "Teaching Assistant - MERN Stack",
    company: "Apna College",
    location: "Remote",
    period: "May 2025 - Present",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    description:
      "Assisted students in resolving doubts and provided guidance on projects related to the MERN stack. Developed educational content and resources to enhance learning.",  
  },
  {
    id: 2,
    title: "Techincal Content Reviewer",
    company: "Jainemo pvt ltd (Stealth Startup)",
    location: "Remote",
    period: "July 2025 - August 2025",
    skills: ["Oprating Systems","CS Fundamentals", "Technical Writing"],
    description:
      "Reviewed techinal notes and documentations on Opearing Systems. Ensured accuracy and clarity of content for educational purposes.",},
  {
    id: 3,
    title: "Volunteer",
    company: "Google Developer Groups (GDG) - VNRVJIET",
    location: "Hyderabad, India",
    period: "October 2024 - Present",
    skills: ["AI", "NEXT.js", "GCP","Cloud", "Agent Development Kit - ADK"],
    description:
     "Contributed as a Design Volunteer at GDGC, where I created visual assets, graphic designs, and supported the team in delivering engaging design solutions for events and campaigns" },
];

export default function WorkExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Work Experience
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              An overview of my career progression and the key skills I’ve cultivated throughout my journey.
            </p>
          </div>

          {/* Experience Cards - Completely Redesigned */}
          <div className="max-w-4xl mx-auto space-y-12 bg-pri">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[18px] top-0 lg:left-[39px] lg:top-0 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary/80 to-primary/10 z-0" />
                )}

                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className="relative">
                    <div className=" w-10 h-10 lg:w-20 lg:h-20 rounded-2xl bg-background border-2 border-primary/20 shadow-md flex items-center justify-center z-10 relative">
                      <Briefcase className="h-4 w-4 lg:h-8 lg:w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="bg-background rounded-2xl border shadow-md overflow-hidden">
                      {/* Header Section */}
                      <div className="bg-primary/5 p-6 border-b">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <div className="flex items-center text-muted-foreground mt-1">
                              <Building className="h-4 w-4 mr-1.5" />
                              <span>{exp.company}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{exp.period}</span>
                            <span className="mx-1">•</span>
                            <MapPin className="h-3.5 w-3.5 mr-0.5" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-4">
                        <p className="text-sm">{exp.description}</p>

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-medium mb-2 flex items-center">
                            <Code className="h-3.5 w-3.5 mr-1.5" />
                            Technologies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="bg-background border-primary/20 flex items-center gap-1 rounded-full"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements Button - Could link to detailed view */}
                        <div className="pt-2">
                          <motion.button
                            className="text-sm text-primary flex items-center"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View achievements
                            <ArrowRight className="h-3.5 w-3.5 ml-1" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
