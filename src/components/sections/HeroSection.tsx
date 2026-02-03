import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/ui/TypewriterText";
import profileAvatar from "@/assets/profile-avatar.jpg";
import profileAvatar2 from "@/assets/profile-avatar2.png";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";


const HeroSection = () => {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const roles = [
    "Full-Stack Developer",
    "Web3 Enthusiast",
    "Flutter Developer",
    "Blockchain Explorer",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="gradient-orb w-[600px] h-[600px] bg-primary/30 -top-48 -left-48"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="gradient-orb w-[500px] h-[500px] bg-accent/20 top-1/3 -right-32"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="gradient-orb w-[400px] h-[400px] bg-primary/20 bottom-0 left-1/4"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="mt-20 mb-8 flex justify-center"
          >
            <div className="relative cursor-pointer" onClick={() => setIsAvatarOpen(true)}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-pulse-glow blur-xl opacity-50" />
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 glow-primary"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileAvatar2}
                  alt="Tahir Mustafa"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Status indicator */}
              {/* <motion.div
                className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-accent border-4 border-background"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                title="Available for opportunities"
              /> */}
            </div>
          </motion.div>

          {/* Avatar Dialog */}
          <Dialog open={isAvatarOpen} onOpenChange={setIsAvatarOpen}>
            <DialogContent className="max-w-2xl">
              <DialogTitle className="sr-only">Profile Picture</DialogTitle>
              <div className="relative w-full aspect-square">
                <img
                  src={profileAvatar2}
                  alt="Tahir Mustafa - Full Size"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </DialogContent>
          </Dialog>

          {/* Greeting */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-4 font-mono text-sm tracking-wider"
          >
            {'<Hello World />'}
          </motion.p> */}

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">I'm </span>
            <span className="gradient-text text-glow">Tahir Mustafa</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12"
          >
            <TypewriterText
              texts={roles}
              speed={80}
              deleteSpeed={40}
              pauseDuration={2500}
              className="font-medium"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
          >
            Crafting innovative web and mobile experiences with a passion for
            decentralized technologies. Building the future, one block at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="glow-primary group"
              asChild
            >
              <a href="#projects">
                View Projects
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            {[
              { icon: Github, href: "https://github.com/TahirMustafa-NO-ONE", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/tahir-mustafa-2b385b2b9", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tahirmustafa161123@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator
      // <motion.div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   transition={{ delay: 1, duration: 0.6 }}
      //   className="absolute bottom-10 left-1/2 -translate-x-1/2"
      // >
      //   <motion.a
      //     href="#about"
      //     className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      //     animate={{ y: [0, 8, 0] }}
      //     transition={{ duration: 2, repeat: Infinity }}
      //   >
      //     <span className="text-xs font-mono tracking-wider">SCROLL</span>
      //     <ArrowDown className="w-4 h-4" />
      //   </motion.a>
      // </motion.div> */}
    </section>
  );
};

export default HeroSection;
