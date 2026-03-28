"use client";

import { Mail, Phone, MapPin, Linkedin, Briefcase, Code, Palette, Users, Lightbulb, Target, Heart, Send, Camera, Music, Plane, UtensilsCrossed, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { sendContactEmail } from "@/lib/actions/send-email";
import { BehanceIcon } from "@/components/icons/behance-icon";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const experienceSectionRef = useRef<HTMLElement>(null);

  const handleDownloadCV = () => {
    const pdf = new jsPDF();
    
    // Set font
    pdf.setFont("helvetica");
    
    // Title
    pdf.setFontSize(24);
    pdf.setTextColor(30, 58, 95);
    pdf.text("RAJAT RASTOGI", 105, 20, { align: "center" });
    
    // Contact Info
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text("Phone: +91 8527166858", 20, 35);
    pdf.text("Email: rajatrastogi201@gmail.com", 20, 40);
    pdf.text("Address: C-205, Madhuban colony, 110092", 20, 45);
    
    // Profile Summary
    pdf.setFontSize(14);
    pdf.setTextColor(30, 58, 95);
    pdf.text("PROFILE SUMMARY", 20, 55);
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0);
    const summary = "I am a skilled creative professional with a strong background in delivering user-focused solutions and impactful visual content. My experience includes working on projects that align with brand identity and support overall communication goals. I am proficient in tools like Figma, Adobe XD, and PowerPoint, and I thrive in collaborative, fast-paced environments.";
    const splitSummary = pdf.splitTextToSize(summary, 170);
    pdf.text(splitSummary, 20, 62);
    
    // Education
    pdf.setFontSize(14);
    pdf.setTextColor(30, 58, 95);
    pdf.text("EDUCATION", 20, 85);
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text("B.Tech IT - GTBIT (IPU) | 2021-2025", 20, 92);
    pdf.text("CBSE 12th - VIVEKANAND SCHOOL | 2019-2021", 20, 98);
    pdf.text("CBSE 10th - VIVEKANAND SCHOOL | 2017-2018", 20, 104);
    
    // Work Experience
    pdf.setFontSize(14);
    pdf.setTextColor(30, 58, 95);
    pdf.text("WORK EXPERIENCE", 20, 115);
    
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);
    pdf.text("Graphic Designer - Leverage Edu | 05/2025 - Present", 20, 122);
    pdf.setFontSize(9);
    pdf.text("• Created brochures and flyers to boost brand visibility and engagement.", 25, 128);
    
    pdf.setFontSize(11);
    pdf.text("UI/UX Developer - Mindrops | 07/2024 - 03/2025", 20, 138);
    pdf.setFontSize(9);
    pdf.text("• Created 15+ wireframes, mockups, and prototypes, cutting timelines by 20%.", 25, 144);
    pdf.text("• Conducted 10 user tests, boosting satisfaction by 25%.", 25, 149);
    pdf.text("• Designed responsive interfaces, increasing engagement by 30%.", 25, 154);
    
    pdf.setFontSize(11);
    pdf.text("Graphic Designer - Zen Solarciti | 09/2023 - 12/2023", 20, 164);
    pdf.setFontSize(9);
    pdf.text("• Created modern, trend-focused designs that engage Instagram audiences.", 25, 170);
    pdf.text("• Applied expertise in typography, color theory, and branding.", 25, 175);
    
    // Technical Skills
    pdf.setFontSize(14);
    pdf.setTextColor(30, 58, 95);
    pdf.text("TECHNICAL SKILLS", 20, 188);
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0);
    pdf.text("HTML, CSS, JavaScript, Figma, Photoshop, Canva, PowerPoint, UI/UX Design, Unix, SQL", 20, 195);
    
    // Achievements
    pdf.setFontSize(14);
    pdf.setTextColor(30, 58, 95);
    pdf.text("ACHIEVEMENTS & AWARDS", 20, 208);
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0);
    pdf.text("• Vice-secretary, Epicture - The Photography Society (2023-2024)", 20, 215);
    pdf.text("• Treasurer, Epicture - The Photography Society (2024-2025)", 20, 220);
    pdf.text("• 2nd in Pixel Perfect - Apogee BITS", 20, 225);
    pdf.text("• 1st in Mobile Photography - Apogee BITS", 20, 230);
    
    // Hobbies
    pdf.setFontSize(14);
    pdf.setTextColor(30, 58, 95);
    pdf.text("HOBBIES", 20, 243);
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0);
    pdf.text("Strategic Sports, Travel, Art & Craft, Cooking, Photography, Dance", 20, 250);
    
    // Save the PDF
    pdf.save("Rajat_Rastogi_CV.pdf");
    toast.success("CV downloaded successfully!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        toast.success("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
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

  // Data
  const education = [
    { year: "2021-2025", institution: "GTBIT (IPU)", degree: "B.Tech IT" },
    { year: "2019-2021", institution: "VIVEKANAND SCHOOL", degree: "CBSE 12th" },
    { year: "2017-2018", institution: "VIVEKANAND SCHOOL", degree: "CBSE 10th" },
  ];

  const technicalSkills = ["HTML", "CSS", "JavaScript", "Figma", "Photoshop", "Canva", "PowerPoint", "Frontend Developer", "UI/UX Design", "Unix", "SQL"];
  const softSkills = ["Problem-solving", "Teamwork", "Creativity"];
  const hobbies = ["Strategic Sports", "Travel", "Art & Craft", "Cooking", "Photography", "Dance"];

  const achievements = [
    { title: "Vice-secretary", organization: "Epicture - The Photography Society (2023-2024)", institution: "Guru Tegh Bahadur Institute of Technology" },
    { title: "Treasurer", organization: "Epicture - The Photography Society (2024-2025)", institution: "Guru Tegh Bahadur Institute of Technology" },
    { title: "2nd in Pixel Perfect", organization: "Apogee - BITS", institution: "International annual technical fest of BITS Pilani" },
    { title: "1st in Mobile Photography", organization: "Apogee - BITS", institution: "International annual technical fest of BITS Pilani" },
  ];

  const courses = ["UI/UX design (Internshala)", "Prototyping & Wireframing", "UI/UX design (Udemy)"];

  const experiences = [
    {
      title: "Graphic Designer",
      company: "Leverage Edu",
      period: "05/2025 - Present",
      description: "Helping students study abroad through expert guidance and tech-driven solutions.",
      responsibilities: ["Created brochures and flyers to boost brand visibility and engagement."],
    },
    {
      title: "UI/UX Developer",
      company: "Mindrops",
      period: "07/2024 - 03/2025",
      description: "A company focused on UI/UX development for web and mobile platforms.",
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
      description: "A firm specializing in creating modern graphics and branding solutions.",
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

  const skillsData = {
    softSkillsDetailed: [
      { name: "Problem-solving", icon: Target, description: "Analytical thinking and creative solutions" },
      { name: "Teamwork", icon: Users, description: "Collaborative and supportive team player" },
      { name: "Creativity", icon: Lightbulb, description: "Innovative approaches to design challenges" },
    ],
    designTools: ["Figma", "Adobe XD", "Photoshop", "Canva", "PowerPoint"],
    developmentTools: ["HTML", "CSS", "JavaScript", "Unix", "SQL"],
    hobbiesWithIcons: [
      { 
        name: "Photography", 
        icon: Camera,
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/generated_images/simple-minimalist-camera-icon-photograph-128336bd-20251124184357.jpg"
      },
      { 
        name: "Dance", 
        icon: Music,
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/generated_images/simple-minimalist-music-note-icon-dance--5488dbca-20251124184357.jpg"
      },
      { 
        name: "Cooking", 
        icon: UtensilsCrossed,
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/generated_images/simple-minimalist-cooking-utensils-icon--4215ba59-20251124184357.jpg"
      },
      { 
        name: "Strategic Sports", 
        icon: Target,
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/generated_images/simple-minimalist-target-or-chess-piece--749d0e1c-20251124184357.jpg"
      },
      { 
        name: "Art & Craft", 
        icon: Palette,
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/generated_images/simple-minimalist-paint-palette-icon-art-920c8458-20251124184357.jpg"
      },
      { 
        name: "Travel", 
        icon: Plane,
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/generated_images/simple-minimalist-airplane-icon-travel-s-6253cd6a-20251124184358.jpg"
      },
    ],
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "rajatrastogi201@gmail.com", href: "mailto:rajatrastogi201@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8527166858", href: "tel:+918527166858" },
    { icon: MapPin, label: "Address", value: "C-205, Madhuban colony, 110092", href: null },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/rajat-rastogi-482525230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", username: "Rajat Rastogi" },
    { name: "Behance", icon: BehanceIcon, url: "https://www.behance.net/rajatrastogi", username: "Rajat Rastogi" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-foreground/80 text-sm font-medium tracking-wider uppercase flex items-center gap-2">
                  WELCOME TO MY WORLD <span className="text-xl">✨</span>
                </p>
                
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className="text-foreground">Rajat Rastogi</span>
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
                    <span className="text-blue-900 dark:text-blue-400">UI/UX & Graphic Designer</span>
                  </h2>
                </div>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                  Passionate UI/UX & Graphic Designer, I create intuitive and visually appealing digital experiences. I transform ideas into seamless designs that meet users' expectations.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a href="#experience">
                  <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 rounded-full text-base font-medium transition-all">
                    My Projects
                  </Button>
                </a>
                <Button 
                  onClick={handleDownloadCV}
                  variant="outline" 
                  className="border-2 border-foreground/30 hover:bg-foreground/10 text-foreground px-8 py-6 rounded-full text-base font-medium transition-all"
                >
                  Download CV
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-8">
                <a href="https://www.behance.net/rajatrastogi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-foreground/5 hover:bg-blue-800 hover:text-white flex items-center justify-center transition-all border border-foreground/10">
                  <BehanceIcon className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/rajat-rastogi-482525230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-foreground/5 hover:bg-blue-800 hover:text-white flex items-center justify-center transition-all border border-foreground/10">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:rajatrastogi201@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-foreground/5 hover:bg-blue-800 hover:text-white flex items-center justify-center transition-all border border-foreground/10">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Character Image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/erhert-Picsart-AiImageEnhancer-1764004343788.png?width=8000&height=8000&resize=contain"
                  alt="Rajat Rastogi"
                  width={500}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Divider Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/top-view-dark-modern-worktable-with-smartphone-laptop-designer-supplies-copy-space_67155-7817-1768729881884.jpg?width=8000&height=8000&resize=contain')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-900/60 to-background" />
        </motion.div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              Crafting Digital <span className="text-blue-400">Experiences</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Where creativity meets functionality to build memorable user journeys
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-900/5 transition-colors duration-300" id="about">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-5xl font-bold mb-4 text-center">
            Profile <span className="text-blue-900 dark:text-blue-400">Summary</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900 mb-16 mx-auto"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Profile Card */}
            <div className="flex justify-center perspective-1000">
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full max-w-md"
              >
                <Card className="relative bg-white dark:bg-[#0a0a0a] border-[6px] border-[#1e3a5f] p-12 text-center w-full rounded-[48px] shadow-2xl transition-all duration-300">
                  {/* Avatar Box with 3D Effect */}
                  <div className="mb-8 flex justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1, translateZ: 50 }}
                      className="w-52 h-52 rounded-full overflow-hidden bg-white flex items-start justify-center shadow-xl relative group border-4 border-blue-900/10"
                    >
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/erhert-1764003881221.png?width=8000&height=8000&resize=contain"
                          alt="Rajat Rastogi"
                          width={200}
                          height={200}
                          className="object-cover w-full h-full scale-125 object-top mt-[50px]"
                        />
                    </motion.div>
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Rajat Rastogi</h3>
                  <p className="text-[#1e3a5f] dark:text-blue-400 text-lg md:text-xl font-bold mb-10 tracking-tight">
                    UI/UX & Graphic Designer
                  </p>

                  {/* Pagination Dots (Three Bars) */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-1.5 bg-gray-200 dark:bg-[#333333] rounded-full"></div>
                    <div className="w-12 h-1.5 bg-[#1e3a5f] rounded-full"></div>
                    <div className="w-12 h-1.5 bg-gray-200 dark:bg-[#333333] rounded-full"></div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <h3 className="text-4xl font-bold">
                Welcome to my <span className="text-blue-900 dark:text-blue-400">Creative Universe</span>
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a skilled creative professional with a strong background in delivering user-focused solutions and impactful visual content. My experience includes working on projects that align with brand identity and support overall communication goals. I am proficient in tools like Figma, Adobe XD, and PowerPoint, and I thrive in collaborative, fast-paced environments. I aim to leverage my adaptability, creativity, and technical skills to contribute to meaningful and results-driven projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-6xl font-bold mb-2 text-foreground">1</div>
                  <div className="text-muted-foreground uppercase tracking-wider text-sm">Year Experience</div>
                </div>
                <div>
                  <div className="text-6xl font-bold mb-2 text-foreground">5+</div>
                  <div className="text-muted-foreground uppercase tracking-wider text-sm">Projects Done</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-400 text-center">Education</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border border-blue-900/20 p-8 hover:border-blue-900/50 transition-all hover:shadow-2xl hover:shadow-blue-900/10 rounded-3xl relative overflow-hidden">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
                  </div>
                  
                  <div className="flex items-start gap-6 pl-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-950 flex items-center justify-center shadow-xl shadow-blue-900/30 transform hover:scale-110 transition-transform">
                        <GraduationCap className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h4>
                      <p className="text-blue-900 dark:text-blue-400 text-sm mb-4 font-medium">
                        {edu.degree} • {edu.year}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Design Tools Circular Progress */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-[#3b82f6] dark:text-[#60a5fa] text-center">Design Tools Proficiency</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { name: "Figma", percentage: 100, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "PowerPoint", percentage: 100, icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/image-1768741365469.png?width=8000&height=8000&resize=contain" },
                { name: "Adobe Photoshop", percentage: 50, icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
                { name: "Adobe Illustrator", percentage: 60, icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 md:w-28 md:h-28">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="6"
                        strokeOpacity="0.2"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - tool.percentage / 100) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#3b82f6] flex items-center justify-center border border-[#3b82f6]/50 overflow-hidden">
                        <Image
                          src={tool.icon}
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 md:w-9 md:h-9 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    className="text-[#3b82f6] font-bold text-lg mt-3"
                  >
                    {tool.percentage}%
                  </motion.p>
                  <p className="text-[#3b82f6]/70 text-sm text-center font-medium">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} className="bg-blue-900/10 text-blue-900 dark:text-blue-400 border border-blue-900/20 hover:bg-blue-900/20 px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-card border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge key={index} className="bg-blue-900/10 text-blue-900 dark:text-blue-400 border border-blue-900/20 hover:bg-blue-900/20 px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">Achievements & Awards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card border-border p-6 hover:bg-foreground/5 transition-colors">
                  <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                  <p className="text-blue-900 dark:text-blue-400 mb-1 font-medium">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground">{achievement.institution}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-400 text-center">Certificates</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: "erhert-internshala-certi.png", title: "UI/UX Design", org: "Internshala" },
                { src: "erhert-Ui-Ux-Certi.png", title: "UI/UX Design", org: "Udemy" },
                { src: "erhert-Wireframing%20certi.png", title: "Prototyping & Wireframing", org: "Professional Course" }
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-card border-border p-4 hover:border-blue-900/50 transition-all overflow-hidden">
                    <div className="relative h-64 mb-4 rounded-lg overflow-hidden bg-foreground/5">
                      <Image
                        src={`https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/document-uploads/${cert.src}`}
                        alt={cert.title}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                    <p className="text-blue-900 dark:text-blue-400 text-sm font-medium">{cert.org}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <Card className="bg-card border-border p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Courses</h3>
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
            <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <Badge key={index} className="bg-foreground/5 text-foreground border border-foreground/10 hover:bg-foreground/10 px-4 py-2">
                  {hobby}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

        {/* Experience Section */}
        <section className="py-20 bg-background transition-colors duration-300 relative overflow-hidden" id="experience">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-4">
                Work <span className="text-blue-900 dark:text-blue-400">Experience</span>
              </h2>
              <div className="w-20 h-1 bg-blue-900 mb-12"></div>
            </motion.div>

              <div className="space-y-6 mb-16">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-card border-border p-6 hover:bg-foreground/5 transition-all hover:border-blue-900/30 hover:shadow-xl hover:shadow-blue-900/10">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-3 bg-blue-900/10 rounded-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Briefcase className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2 flex-wrap gap-3">
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                              <p className="text-lg text-blue-900 dark:text-blue-400 font-medium">{exp.company}</p>
                            </div>
                            <Badge className="bg-blue-800 hover:bg-blue-900 text-white">{exp.period}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">
                            {exp.description}
                          </p>
                          <ul className="space-y-1.5">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2"></div>
                                <span className="text-muted-foreground text-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Extracurricular Activities</h3>
              <ul className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  >
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2"></div>
                    <span className="text-muted-foreground text-lg">{activity}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-900/5 transition-colors duration-300" id="skills">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="text-blue-900 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900 mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border p-8 text-center hover:bg-foreground/5 transition-all hover:border-blue-900/30">
              <Code className="w-12 h-12 text-blue-900 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Development</h3>
              <p className="text-muted-foreground">Frontend development with modern web technologies</p>
            </Card>

            <Card className="bg-card border-border p-8 text-center hover:bg-foreground/5 transition-all hover:border-blue-900/30">
              <Palette className="w-12 h-12 text-blue-900 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground">UI/UX design and visual communication</p>
            </Card>

            <Card className="bg-card border-border p-8 text-center hover:bg-foreground/5 transition-all hover:border-blue-900/30">
              <Heart className="w-12 h-12 text-blue-900 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Passion</h3>
              <p className="text-muted-foreground">Creative professional with diverse interests</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Design Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.designTools.map((tool, index) => (
                  <Badge key={index} className="bg-blue-900/10 text-blue-900 dark:text-blue-400 border border-blue-900/20 hover:bg-blue-900/20 px-4 py-2 text-base">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-card border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Development Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.developmentTools.map((tool, index) => (
                  <Badge key={index} className="bg-blue-900/10 text-blue-900 dark:text-blue-400 border border-blue-900/20 hover:bg-blue-900/20 px-4 py-2 text-base">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-400">Soft Skills</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {skillsData.softSkillsDetailed.map((skill, index) => (
                <Card key={index} className="bg-card border-border p-6 hover:bg-foreground/5 transition-all hover:border-blue-900/30">
                  <skill.icon className="w-10 h-10 text-blue-900 dark:text-blue-400 mb-4" />
                  <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-400 text-center">Hobbies & Interests</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {skillsData.hobbiesWithIcons.map((hobby, index) => (
                <div key={index} className="flex justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="w-36 h-36 rounded-full border-2 border-blue-900/30 dark:border-blue-400/30 hover:border-blue-900 dark:hover:border-blue-400 transition-all flex flex-col items-center justify-center cursor-pointer group bg-transparent"
                  >
                    <hobby.icon className="w-10 h-10 text-blue-900 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-foreground text-center px-2">{hobby.name}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section className="py-20 bg-background transition-colors duration-300" id="contact">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="text-blue-900 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="bg-card border-border p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-blue-900/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-foreground hover:text-blue-900 dark:text-blue-400 transition-colors">
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

              <Card className="bg-card border-border p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-foreground/5 rounded-lg hover:bg-blue-900/10 transition-all border border-border hover:border-blue-900/30">
                      <social.icon className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="bg-card border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-400">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-900" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-900" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => { const value = e.target.value.replace(/\D/g, ''); setFormData({ ...formData, phone: value }); }} required className="bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-900" placeholder="XXXXXXXXXX" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="bg-foreground/5 border-border text-foreground placeholder:text-muted-foreground focus:border-blue-900 resize-none" placeholder="Your message..." />
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
      </section>
    </main>
  );
}

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/top-view-dark-modern-worktable-with-smartphone-laptop-designer-supplies-copy-space_67155-7817-1768729881884.jpg?width=800&height=600&resize=contain",
    category: "Graphic Design",
    description: "Complete brand identity package including logo, color palette, typography, and brand guidelines for a modern business.",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    year: "2024",
  },
  {
    id: 2,
    title: "UI/UX Mobile App",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/top-view-dark-modern-worktable-with-smartphone-laptop-designer-supplies-copy-space_67155-7817-1768729881884.jpg?width=800&height=600&resize=contain",
    category: "UI/UX Design",
    description: "End-to-end mobile app design with user research, wireframes, prototypes and final high-fidelity screens.",
    tools: ["Figma", "Adobe XD"],
    year: "2024",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/top-view-dark-modern-worktable-with-smartphone-laptop-designer-supplies-copy-space_67155-7817-1768729881884.jpg?width=800&height=600&resize=contain",
    category: "Social Media",
    description: "Designed engaging Instagram and social media content that increased brand engagement and follower growth.",
    tools: ["Canva", "Photoshop", "Illustrator"],
    year: "2023",
  },
  {
    id: 4,
    title: "Website Redesign",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/top-view-dark-modern-worktable-with-smartphone-laptop-designer-supplies-copy-space_67155-7817-1768729881884.jpg?width=800&height=600&resize=contain",
    category: "Web Design",
    description: "Full website redesign focusing on improved user experience, modern aesthetics, and better conversion rates.",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    year: "2023",
  },
  {
    id: 5,
    title: "Marketing Collateral",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/top-view-dark-modern-worktable-with-smartphone-laptop-designer-supplies-copy-space_67155-7817-1768729881884.jpg?width=800&height=600&resize=contain",
    category: "Print Design",
    description: "Designed brochures, flyers, banners and presentation decks for marketing campaigns and events.",
    tools: ["PowerPoint", "Photoshop", "Canva"],
    year: "2023",
  },
  {
    id: 6,
    title: "Presentation Design",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b5d1f1de-006f-4232-bb21-e2d2712d1cf9/top-view-dark-modern-worktable-with-smartphone-laptop-designer-supplies-copy-space_67155-7817-1768729881884.jpg?width=800&height=600&resize=contain",
    category: "Presentation",
    description: "Created visually compelling pitch decks and corporate presentations that communicate ideas clearly and professionally.",
    tools: ["PowerPoint", "Figma", "Canva"],
    year: "2024",
  },
];

// Groups of 2: [0,1], [2,3], [4,5]
const projectGroups = [
  projects.slice(0, 2),
  projects.slice(2, 4),
  projects.slice(4, 6),
];

function ParallaxProjectGroup({
  group,
  index,
  total,
  onClick,
}: {
  group: typeof projects;
  index: number;
  total: number;
  onClick: (p: typeof projects[0]) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade in from below, full opacity in center, fade out upward
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.92, 1, 1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [50, 0, 0, -50]);

  return (
    <div ref={ref} className="h-[60vh] flex items-center justify-center sticky top-24">
      <motion.div
        style={{ scale, opacity, y }}
        className="w-full max-w-5xl px-6 grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {group.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <Card
              className="overflow-hidden group cursor-pointer border-2 border-transparent hover:border-blue-900 transition-all duration-300"
              onClick={() => onClick(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-900 px-5 py-2 rounded-full text-sm tracking-wide">
                    More Info
                  </span>
                </div>
              </div>
              <div className="p-5">
                <Badge className="bg-blue-900/10 text-blue-900 border border-blue-900/20 mb-3 text-xs">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.year}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="bg-muted/30 transition-colors duration-300" id="projects">
      {/* Sticky header */}
      <div className="sticky top-16 z-20 bg-muted/80 backdrop-blur-sm pt-16 pb-6 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-3">
            My <span className="text-blue-900 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900"></div>
        </div>
      </div>

      {/* Parallax scroll groups */}
      <div className="relative">
        {projectGroups.map((group, index) => (
          <ParallaxProjectGroup
            key={index}
            group={group}
            index={index}
            total={projectGroups.length}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <div className="pb-20" />

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Badge className="bg-blue-900/10 text-blue-900 border border-blue-900/20 mb-3 text-xs">
                {selectedProject.category}
              </Badge>
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">Tools Used:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <Badge key={tool} className="bg-blue-900/10 text-blue-900 border border-blue-900/20 text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Year: {selectedProject.year}</p>
              <Button
                className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

