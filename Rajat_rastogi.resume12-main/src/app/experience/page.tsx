"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Graphic Designer",
      company: "Leverage Edu",
      period: "05/2025 - Present",
      description:
        "Helping students study abroad through expert guidance and tech-driven solutions.",
      responsibilities: [
        "Created brochures and flyers to boost brand visibility and engagement.",
      ],
    },
    {
      title: "UI/UX Developer",
      company: "Mindrops",
      period: "07/2024 - 03/2025",
      description:
        "A company focused on UI/UX development for web and mobile platforms.",
      responsibilities: [
        "Created 15+ wireframes, mockups, and prototypes, cutting timelines by 20%.",
        "Conducted 10 user tests, boosting satisfaction by 25%.",
        "Collaborated with an 8-member team to launch 3 key features.",
        "Designed responsive interfaces, increasing engagement by 30%.",
        "Ensured consistent design across 5 platforms, enhancing brand recognition.",
      ],
    },
    {
      title: "Graphic Designer",
      company: "Zen Solarciti",
      period: "09/2023 - 12/2023",
      description:
        "A firm specializing in creating modern graphics and branding solutions.",
      responsibilities: [
        "Created modern, trend-focused designs that engage Instagram audiences.",
        "Planned and designed strategic layouts to showcase key details effectively.",
        "Applied expertise in typography, color theory, and branding for standout designs.",
        "Ensured error-free designs prioritizing high-quality presentation.",
      ],
    },
  ];

  const activities = [
    "Volunteered in many functions organized by the school and college.",
    "Manage Events in college.",
    "Performing in College Events.",
    "Took Part in World's Largest global Climatic Clock Assembly & Display Event.",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-bold mb-4">
          Work <span className="text-blue-900 dark:text-blue-400">Experience</span>
        </h1>
        <div className="w-20 h-1 bg-blue-900 mb-12"></div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card border-border p-8 hover:bg-foreground/5 transition-all hover:border-blue-900/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-xl text-blue-900 dark:text-blue-400">{exp.company}</p>
                    </div>
                    <Badge className="bg-blue-800 hover:bg-blue-900 text-white">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2"></div>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Extracurricular Activities */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">
            Extracurricular Activities
          </h2>
          <Card className="bg-card border-border p-8">
            <ul className="space-y-4">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                  <span className="text-muted-foreground text-lg">{activity}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
