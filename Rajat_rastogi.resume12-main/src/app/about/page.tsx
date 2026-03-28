"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const education = [
    {
      year: "2021-Present",
      institution: "GTBIT (IPU)",
      degree: "B.Tech IT",
    },
    {
      year: "2019-2021",
      institution: "VIVEKANAND SCHOOL",
      degree: "CBSE 12th",
    },
    {
      year: "2017-2018",
      institution: "VIVEKANAND SCHOOL",
      degree: "CBSE 10th",
    },
  ];

  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Figma",
    "Photoshop",
    "Canva",
    "PowerPoint",
    "Frontend Developer",
    "UI/UX Design",
    "Unix",
    "SQL",
  ];

  const softSkills = [
    "Problem-solving",
    "Teamwork",
    "Creativity",
  ];

  const hobbies = [
    "Strategic Sports",
    "Travel",
    "Art & Craft",
    "Cooking",
    "Photography",
    "Dance",
  ];

  const achievements = [
    {
      title: "Vice-secretary",
      organization: "Epicture - The Photography Society (2023-2024)",
      institution: "Guru Tegh Bahadur Institute of Technology",
    },
    {
      title: "Treasurer",
      organization: "Epicture - The Photography Society (2024-2025)",
      institution: "Guru Tegh Bahadur Institute of Technology",
    },
    {
      title: "2nd in Pixel Perfect",
      organization: "Apogee - BITS",
      institution: "International annual technical fest of BITS Pilani",
    },
    {
      title: "1st in Mobile Photography",
      organization: "Apogee - BITS",
      institution: "International annual technical fest of BITS Pilani",
    },
  ];

  const courses = [
    "UI/UX design (Internshala)",
    "Prototyping & Wireframing",
    "UI/UX design (Udemy)",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-bold mb-4">
          About <span className="text-blue-900 dark:text-blue-400">Me</span>
        </h1>
        <div className="w-20 h-1 bg-blue-900 mb-12"></div>

        {/* Profile Summary */}
        <Card className="bg-card border-border p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-400">
            Profile Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I am a skilled creative professional with a strong background in
            delivering user-focused solutions and impactful visual content. My
            experience includes working on projects that align with brand
            identity and support overall communication goals. I am proficient in
            tools like Figma, Adobe XD, and PowerPoint, and I thrive in
            collaborative, fast-paced environments. I aim to leverage my
            adaptability, creativity, and technical skills to contribute to
            meaningful and results-driven projects.
          </p>
        </Card>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-card border-border p-6 hover:bg-foreground/5 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <Badge className="bg-blue-800 hover:bg-blue-900 text-white">
                    {edu.year}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-border p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-blue-900/10 text-blue-900 dark:text-blue-400 border border-blue-900/20 hover:bg-blue-900/20 px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-blue-900/10 text-blue-900 dark:text-blue-400 border border-blue-900/20 hover:bg-blue-900/20 px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">
            Achievements & Awards
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-card border-border p-6 hover:bg-foreground/5 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-blue-900 dark:text-blue-400 mb-1">{achievement.organization}</p>
                <p className="text-sm text-muted-foreground">{achievement.institution}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Courses */}
        <Card className="bg-card border-border p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Courses</h2>
          <ul className="space-y-3">
            {courses.map((course, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                <span className="text-muted-foreground">{course}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Hobbies */}
        <Card className="bg-card border-border p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Hobbies</h2>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, index) => (
              <Badge
                key={index}
                className="bg-foreground/5 text-foreground border border-foreground/10 hover:bg-foreground/10 px-4 py-2"
              >
                {hobby}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
