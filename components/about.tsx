"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Palette } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web & Mobile Development",
      description:
        "Expert in React, React Native, HTML, TypeScript, and other frameworks to build responsive and dynamic websites and applications.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Design Skills",
      description:
        "Proficient with Figma, Adobe Photoshop, Premiere Pro, and Corel Draw for creating stunning visuals.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Professional Experience",
      description:
        "6+ years of experience working with clients and teams to deliver exceptional websites.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-muted/50 dark:bg-gray-900/50"
    >
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-muted-foreground">
            A creative and results-driven website designer with 5+ years of
            experience in crafting user-centered and visually appealing
            websites. Proven ability to translate client needs into engaging
            designs, with expertise in Typescript, Figma, Adobe Photoshop, Corel
            Draw, and Elementor. As I stay up-to-date, I am also very
            knowledgeable with the use of advanced AI coding tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
