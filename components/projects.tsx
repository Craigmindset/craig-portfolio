"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type Category = "Digital & Design" | "Website" | "Social Management";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  achievements?: string[];
  tags: string[];
  category: Category;
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Website");

  const categories: Category[] = [
    "Digital & Design",
    "Website",
    "Social Management",
  ];

  const websiteProjects: Project[] = [
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
      category: "Website",
    },
    {
      title: "Cheche Smith",
      description:
        "Designed and developed a vibrant e-commerce website for a fashion brand specializing in colorful, contemporary African-inspired clothing.",
      image: "/images/chechesmithe.png",
      link: "https://chechesmith.com",
      github: "#",
      achievements: [
        "Created a visually striking online store with intuitive navigation and seamless shopping experience.",
      ],
      tags: ["E-commerce", "Fashion", "Responsive Design"],
      category: "Website",
    },
    {
      title: "KredMart",
      description:
        "Kredmart is build on nextjs and tailwindcss. A platform offer user dashboard, merchant dashboard and admin dashboard. also integrated payment gateway.",
      image: "/images/kredmart.png",
      link: "https://kredmart.com",
      github: "#",
      achievements: [
        "Created a professional corporate identity with modern design and clear service presentation.",
      ],
      tags: ["E-commerce", "Dashboard", "Payment Gateway"],
      category: "Website",
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
      category: "Website",
    },
    {
      title: "Ark-of-light App",
      description: "mobile application  designed for Android and ios users.",
      image: "/images/arkoflight.png",
      link: "#",
      github: "https://github.com/Craigmindset/arkoflight",
      achievements: [
        "Mobile Application built with React Native and Expo for both Android and iOS platforms.",
      ],
      tags: ["Mobile Application", "Backend", "Admin Dashboard"],
      category: "Website",
    },

    {
      title: "Prostar Technical",
      description:
        "Developed a modern website for a solar energy solutions provider, showcasing their residential and commercial services with a focus on sustainability.",
      image: "/images/prostartechnical.png",
      link: "https://prostartechnical.com/",
      github: "#",
      achievements: [
        "Created a professional, responsive design that effectively communicates the company's renewable energy solutions and services.",
      ],
      tags: ["Account mgmt", "admin panel", "Next.js"],
      category: "Website",
    },
    {
      title: "JC-Asethetics",
      description:
        "A Direct booking surgical and non-surgical aesthetic clinic website.",
      image: "/images/jcasethetic.png",
      link: "https://jcasethetic.com",
      github: "#",
      achievements: ["built using wordpress and elementor"],
      tags: ["online booking", "e-shopping", "Responsive Design"],
      category: "Website",
    },
    {
      title: "Ventury Ltd",
      description:
        "Developed a comprehensive corporate website for Ventury Limited, showcasing their automation, instrumentation, and control services.",
      image: "/images/venturyltd-new.png",
      link: "https://venturyltd.com",
      github: "#",
      achievements: [
        "Created a professional corporate identity with modern design and clear service presentation.",
      ],
      tags: ["Corporate Website", "Industrial Services", "Professional"],
      category: "Website",
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
      category: "Website",
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
      tags: ["php", "Elementor", "wordpress"],
      category: "Website",
    },
    {
      title: "JOB Alerts",
      description:
        "Designed and developed a remote job portal website with e-learning capabilities, helping connect professionals with remote work opportunities.",
      image: "/images/jobalerts.png",
      link: "https://jobalerts.com.ng",
      github: "#",
      achievements: [
        "built with a custom theme, Elementor, Corel-Draw, Photoshop, and wordpress.",
      ],
      tags: ["Web Design", "Job Portal", "E-Learning"],
      category: "Website",
    },

    {
      title: "Salvy.ng",
      description:
        "Developed a modern platform for a startup accelerator focused on empowering African entrepreneurs through strategic funding and advisory programs.",
      image: "/images/salvy.png",
      link: "https://salvy.ng",
      github: "#",
      achievements: [
        "Created an engaging user interface that effectively communicates the accelerator's mission and programs.",
      ],
      tags: ["Startup Platform", "Accelerator", "Investment"],
      category: "Website",
    },
    {
      title: "Effideli",
      description:
        "Professional Full-stack project with Admin login and user authentication.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/effideli-8bnxDoH5zK6YJZauh5hmmivB8wcMzD.png",
      link: "https://effideli.com/",
      github: "https://github.com/Craigmindset/effifeli-web-app",
      achievements: [],
      tags: ["Full-stack", "Authentication", "Admin Dashboard"],
      category: "Website",
    },
    {
      title: "Airdomax",
      description:
        "A collaborative project to clone and redesign pharmaceutical marketplace websites. The goal of the project is to redesign to suit the Africa market.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airdomax-oxWhOe3dndEVJMNyGFkUp974Gjrt7n.png",
      link: "https://www.airdomax.com/",
      github: "https://github.com/Craigmindset/airdomax-web-app",
      achievements: [],
      tags: ["UI/UX", "E-commerce", "Marketplace"],
      category: "Website",
    },
    {
      title: "SoftDrop Application",
      description:
        "A user authentication website, with an integrated Google Place map, that allows users to easily send and receive items within communities.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/softdrop-b3wPelymITMRPd3d8wvVGnMgh5hxss.png",
      link: "https://softdrop.com.ng",
      github: "https://github.com/Craigmindset/softdropweb/",
      achievements: [],
      tags: ["Google Maps API", "Authentication", "Community"],
      category: "Website",
    },
    {
      title: "Linkmi",
      description:
        "A Clinical site that connects africa to international medical service providers for advanced medical treatments.",
      image: "/images/linkmi.png",
      link: "https://linkmi.com.ng",
      github: "#",
      achievements: [],
      tags: ["Web Design", "Digital Agency", "UI/UX"],
      category: "Website",
    },
    {
      title: "Gospel Pillars ERP",
      description:
        "A church management system that helps Gospel Pillars Church manage their operations, members, and resources efficiently.",
      image: "/images/gospelpillars.png",
      link: "https://gospelpillarserp.vercel.app",
      github: "#",
      achievements: [],
      tags: ["Church Management", "ERP", "Authentication"],
      category: "Website",
    },
    {
      title: "Oxroad School",
      description:
        "An educational institution website designed to showcase the school's programs, admission process, and provide information for parents and students.",
      image: "/images/oxroadschool.png",
      link: "https://oxroadschool.vercel.app",
      github: "#",
      achievements: [],
      tags: ["Education", "School Website", "Responsive Design"],
      category: "Website",
    },
  ];

  const digitalDesignProjects: Project[] = [
    {
      title: "Digital Design 01",
      description: "Creative campaign and product visual design work.",
      image: "/images/design5.jpg",
      link: "#",
      tags: ["Digital & Design", "Branding", "Visual Design"],
      category: "Digital & Design",
    },
    {
      title: "Digital Design 02",
      description: "Campaign artwork focused on visual storytelling.",
      image: "/images/campaign%20design1a.jpg",
      link: "#",
      tags: ["Digital & Design", "Campaign", "Creative"],
      category: "Digital & Design",
    },
    {
      title: "Digital Design 03",
      description: "Social-first brand visual concept and execution.",
      image: "/images/design1.png",
      link: "#",
      tags: ["Digital & Design", "Social Creative", "Layout"],
      category: "Digital & Design",
    },
    {
      title: "Digital Design 04",
      description: "High-impact digital creative for online campaigns.",
      image: "/images/design2.png",
      link: "#",
      tags: ["Digital & Design", "Ads", "Design"],
      category: "Digital & Design",
    },
    {
      title: "Digital Design 05",
      description: "Design direction for visual content management.",
      image: "/images/design3.png",
      link: "#",
      tags: ["Digital & Design", "Brand Visuals", "Creative"],
      category: "Digital & Design",
    },
    {
      title: "Digital Design 06",
      description: "Polished brand communication design output.",
      image: "/images/design4.png",
      link: "#",
      tags: ["Digital & Design", "Graphic Design", "Content"],
      category: "Digital & Design",
    },
  ];

  const socialManagementProjects: Project[] = [
    {
      title: "Deeparfums London",
      description: "Social media management and brand growth execution.",
      image: "/images/mywork.png",
      link: "https://www.instagram.com/deeparfumslondon?igsh=bnZoOWhwdmFkcnls",
      tags: ["Social Management", "Instagram", "Brand Growth"],
      category: "Social Management",
    },
    {
      title: "Lookbox Nigeria",
      description: "Content planning and performance-focused social delivery.",
      image: "/images/mywork0.png",
      link: "https://www.instagram.com/lookbox.nigeria?igsh=MTZzdmVpb21yN2c0Zg==",
      tags: ["Social Management", "Content Strategy", "Engagement"],
      category: "Social Management",
    },
    {
      title: "Softdrop Tech",
      description: "Community-oriented social media account management.",
      image: "/images/mywork22.png",
      link: "https://www.instagram.com/softdrop.tech?igsh=anF2MDEwY2htcHRq",
      tags: ["Social Management", "Community", "Social Growth"],
      category: "Social Management",
    },
  ];

  const projects = [
    ...websiteProjects,
    ...digitalDesignProjects,
    ...socialManagementProjects,
  ];

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects],
  );

  return (
    <section id="projects" className="py-16 md:py-20">
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

        <div className="flex flex-wrap gap-3 mt-8">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {project.achievements && project.achievements.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">*</span>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
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
                    {project.link !== "#" && (
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
                    )}
                    {project.github && project.github !== "#" && (
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
  );
};

export default Projects;
