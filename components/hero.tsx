"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 flex items-center min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-gray-900" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
                Hi, I'm <span className="gradient-text">Craig Iredia</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Website & Mobile Application Designer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              If you're looking for a developer whose commitment is built on
              teamwork and achieving set goals, then{" "}
              <span className="text-yellow-400">I'm your guy</span>. My
              experience spans user empathy, design, understanding the build
              process, and working within tight deadlines. A warrior is tested
              in battle, so invite me to join your team and let's take on the
              challenge!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/craig-iredia-resume.pdf" download>
                  Download CV <Download className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center md:justify-start mt-10 gap-6"
            >
              <Button asChild variant="ghost" size="icon">
                <a
                  href="https://www.linkedin.com/in/craig-iredia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a
                  href="http://github.com/craigmindset/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740821877168.jpg-OcQ7BvPsEfFX9pWkhSQVU7cHurnUid.jpeg"
                alt="Craig Iredia"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
