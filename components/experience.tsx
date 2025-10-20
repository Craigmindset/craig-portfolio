"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Website Designer",
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
    {
      title: "Graphic & Website Designer",
      company: "Upwork",
      period: "Freelancer",
      link: "#",
      achievements: [
        "Designed and launched over 14 visually compelling websites.",
        "Collaborated with cross-functional teams to create branding assets, including logos, social media graphics, and marketing materials.",
        "Optimized website performance, reducing load times by 40% through strategic use of web technologies and design best practices, enhancing overall user experience.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50 dark:bg-gray-900/50">
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

        <div className="space-y-8 mt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center mt-1">
                        <p className="text-primary font-medium">{exp.company}</p>
                        {exp.link && (
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
                        <span className="text-muted-foreground">{achievement}</span>
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
  )
}

export default Experience
