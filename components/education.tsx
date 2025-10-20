"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const Education = () => {
  const educations = [
    {
      institution: "Harvardx (Harvard university Affiliation)",
      degree: "Introduction to AI Modeling",
      period: "Expected Graduation 2025",
    },
    {
      institution: "ALX Professional Foundation",
      degree: "Teamwork & collaboration Training",
      period: "June 2024 - August 2024",
    },
    {
      institution: "ALX School of Software Engineering",
      degree: "Software Engineering | Frontend specialization",
      period: "Nov 2022 - January 2024",
    },
    {
      institution: "Auchi Polytechnic, Auchi",
      degree: "Civil Engineering (Bsc)",
      period: "Oct 2002 - November 2006",
    },
  ]

  const certificates = [
    {
      title: "Programming in Python (Freecodecamp)",
      description: "Python foundation syntax, functions, Scientific Computing with python.",
      link: "https://www.freecodecamp.org/certification/fcc5e160dfd-db07-4983-bb3d-f8b8b8f62554/scientific-computing-with-python-v7",
    },
    {
      title: "Professional Development & Agile",
      description:
        "Learned Team etiquettes and collaboration, Google workspace, Project Management, Communication, Reporting, Agile",
      link: "https://drive.google.com/file/d/1_aooh-7CZjCPXIQNMEOwtydi1PfGSIZe/view?usp=sharing",
    },
    {
      title: "Software Engineering",
      description: "Web application development, Mobile application development, GitHub",
      link: "https://drive.google.com/file/d/1TGz2E_26htT-xLPo36KydCC-AXPe1NUI/view?usp=sharing",
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50 dark:bg-gray-900/50">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Education & <span className="gradient-text">Certificates</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              {educations.map((edu, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h4 className="text-lg font-medium">{edu.institution}</h4>
                        <p className="text-primary mt-1">{edu.degree}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 whitespace-nowrap">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Certificates</h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-full bg-primary/10 flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">{cert.title}</h4>
                        <p className="text-muted-foreground mt-1">{cert.description}</p>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline mt-2 inline-block"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
