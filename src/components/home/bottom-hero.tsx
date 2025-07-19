"use client";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function BottomHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const skills = [
    "Front-end Development",
    "Back-end Systems",
    "React & Next.js",
    "Database Management",
    "API Integration",
    "UI/UX Design",
    "Performance Optimization",
    "AI Integration",
    "Version Control (Git & GitHub)",
    "Testing & QA",
    "DevOps",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 flex justify-center items-center px-5 lg:-px-0"
    >
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
          <div
            className={cn(
              "max-w-md text-center md:text-left",
              isVisible ? "opacity-100" : "opacity-0",
              "transition-opacity duration-700"
            )}
          >
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              From Campus to Code <br />
              — Ready to Contribute
            </h2>
            <p className="text-muted-foreground mb-6">
              With expertise in both frontend and backend technologies, I create
              seamless, scalable solutions that provide real value. Every line
              of code is written with purpose, performance, and future
              maintainability in mind.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={cn(
                    "px-3 py-1 bg-secondary dark:bg-accent rounded-full text-xs",
                    isVisible ? "opacity-100" : "opacity-0",
                    "transition-opacity duration-700"
                  )}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "w-full max-w-xs relative",
              isVisible ? "opacity-100" : "opacity-0",
              "transition-opacity duration-700 delay-300"
            )}
          >
            <div className="rounded-full w-48 h-48 md:w-56 md:h-56 mx-auto bg-secondary dark:bg-accent flex items-center justify-center animate-float">
              <div className="rounded-full w-36 h-36 md:w-44 md:h-44 bg-background flex items-center justify-center relative">
                <div className="rounded-full w-24 h-24 md:w-32 md:h-32 bg-secondary dark:bg-accent flex items-center justify-center">
                  <Code className="h-12 w-12 text-foreground" />
                </div>
                <div className="absolute inset-0 rounded-full border border-border animate-[spin_20s_linear_infinite] z-10">
                  <div className="absolute -top-2.5 -mt-1 left-1/2 -ml-1 w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div
                  className="absolute inset-0 rounded-full border border-border z-0 animate-[spin_15s_linear_infinite_reverse]"
                  style={{
                    width: "110%",
                    height: "110%",
                    top: "-5%",
                    left: "-5%",
                  }}
                >
                  <div className="absolute -top -mt-1 left-1/2 -ml-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
