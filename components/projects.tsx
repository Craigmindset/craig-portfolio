"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "Malowallet",
      description:
        "Collaborated in the development of crypto wallet systems, a web application development using React.js and MongoDB.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%287%29-swKWa8FWZV7ZXheo7jQH6o9FJuXehG.png",
      link: "https://malowallet.org/",
      github: "#",
      achievements: [
        "Developed and fine-tuned user journey on the on-boarding process, thereby achieving 23% faster boarding time.",
      ],
      tags: ["React", "MongoDB", "Web3"],
    },
    {
      title: "Cheche Smith",
      description:
        "Designed and developed a vibrant e-commerce website for a fashion brand specializing in colorful, contemporary African-inspired clothing.",
      image: "/images/chechesmith.jpeg",
      link: "https://chechesmith.com",
      github: "#",
      achievements: [
        "Created a visually striking online store with intuitive navigation and seamless shopping experience.",
      ],
      tags: ["E-commerce", "Fashion", "Responsive Design"],
    },
    {
      title: "Ventury Ltd",
      description:
        "Developed a comprehensive corporate website for Ventury Limited, showcasing their automation, instrumentation, and control services.",
      image: "/images/venturyltd-new.png",
      link: "https://venturyltd.com",
      github: "#",
      achievements: ["Created a professional corporate identity with modern design and clear service presentation."],
      tags: ["Corporate Website", "Industrial Services", "Professional"],
    },
    {
      title: "The Citadel Schools",
      description:
        "Designed and developed an educational institution website for The Citadel Schools, featuring comprehensive information about their primary education programs.",
      image: "/images/citadelschools-new.png",
      link: "https://thecitadelschools.com",
      github: "#",
      achievements: [
        "Built an informative platform that effectively communicates the school's educational excellence and programs.",
      ],
      tags: ["Education", "Primary School", "Academic Excellence"],
    },
    {
      title: "Bookville Reading Competition",
      description:
        "Created a digital platform for Bookville World's Reading Competition, promoting literacy and intellectual development among young participants.",
      image: "/images/bookvilleworld-new.png",
      link: "https://brc.bookvilleworld.com",
      github: "#",
      achievements: [
        "Developed an engaging platform that encourages reading comprehension and critical thinking skills.",
      ],
      tags: ["Education", "Reading Competition", "Youth Development"],
    },
    {
      title: "Dazeman Consult",
      description:
        "Designed and developed a remote job portal website with e-learning capabilities, helping connect professionals with remote work opportunities.",
      image: "/images/dazemanconsult.jpeg",
      link: "https://dazemanconsult.com",
      github: "#",
      achievements: [
        "Created a responsive platform featuring job search functionality and an integrated e-learning system.",
      ],
      tags: ["Web Design", "Job Portal", "E-Learning"],
    },
    {
      title: "NF Award",
      description:
        "Developed the official website for Nigeria Fitness Awards, a platform celebrating excellence in the fitness industry across Nigeria.",
      image: "/images/nfaward-new.png",
      link: "https://nfaward.com",
      github: "#",
      achievements: [
        "Created an elegant, responsive platform that showcases nominees, partners, and event information for this prestigious fitness award.",
      ],
      tags: ["Fitness Industry", "Awards Platform", "Event Website"],
    },
    {
      title: "Prostar Technical",
      description:
        "Developed a modern website for a solar energy solutions provider, showcasing their residential and commercial services with a focus on sustainability.",
      image: "/images/prostar-technical.jpeg",
      link: "https://prostartechnical.vercel.app/",
      github: "#",
      achievements: [
        "Created a professional, responsive design that effectively communicates the company's renewable energy solutions and services.",
      ],
      tags: ["Renewable Energy", "Solar Solutions", "Next.js"],
    },
    {
      title: "Salvy.ng",
      description:
        "Developed a modern platform for a startup accelerator focused on empowering African entrepreneurs through strategic funding and advisory programs.",
      image: "/images/salvy.jpeg",
      link: "https://salvy.ng",
      github: "#",
      achievements: [
        "Created an engaging user interface that effectively communicates the accelerator's mission and programs.",
      ],
      tags: ["Startup Platform", "Accelerator", "Investment"],
    },
    {
      title: "Effideli",
      description: "Professional Full-stack project with Admin login and user authentication.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/effideli-8bnxDoH5zK6YJZauh5hmmivB8wcMzD.png",
      link: "https://effideli.com/",
      github: "https://github.com/Craigmindset/effifeli-web-app",
      achievements: [],
      tags: ["Full-stack", "Authentication", "Admin Dashboard"],
    },
    {
      title: "Airdomax",
      description:
        "A collaborative project to clone and redesign pharmaceutical marketplace websites. The goal of the project is to redesign to suit the Africa market.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airdomax-oxWhOe3dndEVJMNyGFkUp974Gjrt7n.png",
      link: "https://www.airdomax.com/",
      github: "https://github.com/Craigmindset/airdomax-web-app",
      achievements: [],
      tags: ["UI/UX", "E-commerce", "Marketplace"],
    },
    {
      title: "SoftDrop Application",
      description:
        "A user authentication website, with an integrated Google Place map, that allows users to easily send and receive items within communities.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/softdrop-b3wPelymITMRPd3d8wvVGnMgh5hxss.png",
      link: "https://softdrop.com.ng",
      github: "https://github.com/Craigmindset/softdropweb/",
      achievements: [],
      tags: ["Google Maps API", "Authentication", "Community"],
    },
    {
      title: "Ventury Dev",
      description:
        "A digital agency website that helps businesses transform their digital presence with stunning websites and mobile applications.",
      image:
        "https://sjc.microlink.io/Sv1hB7F0hTgwVG5BNz59kkLn0AKo3fsvx40f1Iq_ecqI_S6x10Bt1zQAjGNkz97UGmjpgfYKAeXvUelzFrgwCg.jpeg",
      link: "https://venturydev.com",
      github: "#",
      achievements: [],
      tags: ["Web Design", "Digital Agency", "UI/UX"],
    },
    {
      title: "Gospel Pillars ERP",
      description:
        "A church management system that helps Gospel Pillars Church manage their operations, members, and resources efficiently.",
      image:
        "https://sjc.microlink.io/V0-VbamgMOIRCmOekVZ_o4Ae2AS5ESjJepM5RjYVB4-j_4iU8ej1DzfKXxqturI9FNMXAKmOhgTPrE_rVMQENw.jpeg",
      link: "https://gospelpillarserp.vercel.app",
      github: "#",
      achievements: [],
      tags: ["Church Management", "ERP", "Authentication"],
    },
    {
      title: "Oxroad School",
      description:
        "An educational institution website designed to showcase the school's programs, admission process, and provide information for parents and students.",
      image:
        "https://sjc.microlink.io/gr3r1iQVCbKsKcDLaYWiRVt6iQzufQfl15k00a547mERQeGJkN-Fot5POFqXwaDviSFuCIYZshuX-Zjs7d1_Lw.jpeg",
      link: "https://oxroadschool.vercel.app",
      github: "#",
      achievements: [],
      tags: ["Education", "School Website", "Responsive Design"],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {project.achievements && project.achievements.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">★</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex gap-4">
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        View Project <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.github !== "#" && (
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          GitHub <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
