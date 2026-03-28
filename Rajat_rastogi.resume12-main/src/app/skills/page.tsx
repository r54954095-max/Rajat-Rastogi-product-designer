"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Users,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";

export default function SkillsPage() {
  const technicalSkills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Figma", category: "Design" },
    { name: "Adobe XD", category: "Design" },
    { name: "Photoshop", category: "Design" },
    { name: "Canva", category: "Design" },
    { name: "PowerPoint", category: "Design" },
    { name: "UI/UX Design", category: "Design" },
    { name: "Frontend Development", category: "Frontend" },
    { name: "Unix", category: "Development" },
    { name: "SQL", category: "Development" },
  ];

  const softSkills = [
    {
      name: "Problem-solving",
      icon: Target,
      description: "Analytical thinking and creative solutions",
    },
    {
      name: "Teamwork",
      icon: Users,
      description: "Collaborative and supportive team player",
    },
    {
      name: "Creativity",
      icon: Lightbulb,
      description: "Innovative approaches to design challenges",
    },
  ];

  const designTools = [
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Canva",
    "PowerPoint",
  ];

  const developmentTools = ["HTML", "CSS", "JavaScript", "Unix", "SQL"];

  const hobbies = [
    { name: "Photography", icon: "📷" },
    { name: "Strategic Sports", icon: "♟️" },
    { name: "Travel", icon: "✈️" },
    { name: "Art & Craft", icon: "🎨" },
    { name: "Cooking", icon: "🍳" },
    { name: "Dance", icon: "💃" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-bold mb-4">
          My <span className="text-blue-900 dark:text-blue-400">Skills</span>
        </h1>
        <div className="w-20 h-1 bg-blue-900 mb-12"></div>

        {/* Technical Skills Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border p-8 text-center hover:bg-foreground/5 transition-all hover:border-blue-900/30">
            <Code className="w-12 h-12 text-blue-900 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Development</h3>
            <p className="text-muted-foreground">
              Frontend development with modern web technologies
            </p>
          </Card>

          <Card className="bg-card border-border p-8 text-center hover:bg-foreground/5 transition-all hover:border-blue-900/30">
            <Palette className="w-12 h-12 text-blue-900 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Design</h3>
            <p className="text-muted-foreground">
              UI/UX design and visual communication
            </p>
          </Card>

          <Card className="bg-card border-border p-8 text-center hover:bg-foreground/5 transition-all hover:border-blue-900/30">
            <Heart className="w-12 h-12 text-blue-900 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Passion</h3>
            <p className="text-muted-foreground">
              Creative professional with diverse interests
            </p>
          </Card>
        </div>

        {/* Design & Development Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">
              Design Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {designTools.map((tool, index) => (
                <Badge
                  key={index}
                  className="bg-blue-900/10 text-blue-900 dark:text-blue-400 border border-blue-900/20 hover:bg-blue-900/20 px-4 py-2 text-base"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">
              Development Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {developmentTools.map((tool, index) => (
                <Badge
                  key={index}
                  className="bg-blue-900/10 text-blue-900 dark:text-blue-400 border border-blue-900/20 hover:bg-blue-900/20 px-4 py-2 text-base"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-400">
            Soft Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card
                key={index}
                className="bg-card border-border p-6 hover:bg-foreground/5 transition-all hover:border-blue-900/30"
              >
                <skill.icon className="w-10 h-10 text-blue-900 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* All Technical Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-400">
            Technical Expertise
          </h2>
          <Card className="bg-card border-border p-8">
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-foreground/5 text-foreground border border-foreground/10 hover:bg-blue-900/20 hover:border-blue-900/30 px-4 py-2 text-base transition-all"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Hobbies & Interests */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-400">
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="bg-card border-border p-6 text-center hover:bg-foreground/5 transition-all hover:border-blue-900/30"
              >
                <div className="text-4xl mb-3">{hobby.icon}</div>
                <p className="text-sm font-medium">{hobby.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
