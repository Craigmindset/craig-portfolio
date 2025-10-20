"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "TypeScript", "JavaScript"],
    },
    {
      title: "Frameworks",
      skills: ["React", "React Native"],
    },
    {
      title: "Tools",
      skills: ["MySQL", "Excel", "MongoDB", "Github"],
    },
    {
      title: "CMS",
      skills: ["WordPress", "Divi", "Elementor"],
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe Photoshop", "Corel Draw", "Video Editing", "Content Writing"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="px-3 py-1 text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I continuously expand my skill set to stay current with the latest technologies and design trends, ensuring
            I deliver cutting-edge solutions for every project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
