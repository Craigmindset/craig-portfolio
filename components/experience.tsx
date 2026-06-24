"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Codexter Technologies",
      period: "Present",
      link: "#",
      achievements: [
        "As cofounder, has shaped the industry of software development and executive management.",
      ],
    },
    {
      title: "CTO",
      company: "Tecwurld Limited",
      period: "June 2023 - Present",
      link: "https://tecwurld.com",
      achievements: [
        "Collaborated with cross-functional teams to gather requirements and ensure alignment with business objectives.",
        "Facilitated design thinking workshops and user research sessions to gather feedback and ensure designs meet user needs and business goals.",
        "Utilized Figma, Adobe Photoshop, and CorelDraw to create visually appealing and user-friendly designs for team web application projects.",
        "Provided technical support to users to improve user experience via the company user support forum.",
      ],
    },
    {
      title: "AI Trainer",
      company: "Invisible.co",
      period: "Remote",
      link: "https://invisibletech.ai/",
      achievements: [
        "Trained and evaluated AI model outputs to improve response quality, factual accuracy, and instruction adherence.",
        "Reviewed prompts and responses against project guidelines, providing structured feedback to improve model behavior.",
        "Collaborated with distributed teams to maintain annotation quality and meet delivery targets across AI training tasks.",
      ],
    },

    {
      title: "Application Developer",
      company: "SoftDrop",
      period: "March 2022",
      link: "https://softdrop.tech",
      achievements: [
        "Headed a team of developers to design and develop startup first proto-type/MVP for investment pitching.",
        "Conducted in-depth research and analysis on user experience, resulting in the identification of key added features to implement in the designs, thereby aiding user experience.",
        "Represented the Start up in International pitch presentation and venture capitalist meetings.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_55%)]" />
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative mt-12 pl-8 md:pl-10">
          <div className="absolute left-2 top-2 h-[calc(100%-8px)] w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:left-3" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[1.85rem] top-6 h-3 w-3 rounded-full border-2 border-primary/70 bg-background shadow-[0_0_0_6px_hsl(var(--primary)/0.12)] md:-left-[2.35rem]" />
              <Card className="border border-border/70 bg-card/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center mt-1">
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                        {exp.link && exp.link !== "#" && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`Visit ${exp.company} website`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">★</span>
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
