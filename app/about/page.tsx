"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn("right", 0.3)} className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg text-muted-foreground">
              I am an engineering student driven by innovation and
              problem-solving, with hands-on experience in projects such as
              [Smart Parking System/IoT Solutions/etc.]. My academic journey has
              built a strong foundation in [electronics, programming, or your
              specialization], while my curiosity pushes me to apply these
              skills in real-world challenges. I aim to contribute to creating
              efficient, technology-driven solutions that make a meaningful
              impact.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">My Journey</h2>
              <p className="text-muted-foreground">
                Throughout my academic journey, I have actively engaged in
                projects that bridged the gap between theory and practice,
                allowing me to strengthen both my technical knowledge and
                hands-on skills. Each project has been a stepping stone, shaping
                my ability to solve real-world problems with creativity and
                precision. I believe in continuous learning and make it a
                priority to stay updated with emerging technologies, ensuring
                that I grow alongside the ever-evolving engineering field.
              </p>
            </div>
            <Button className="mt-6" asChild>
              <a
                href="https://flippingbook.com/account/online/566622767/edit"
                download
              >
                Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            className="relative h-[700px] w-[600px]"
          >
            <Image
              src="https://i.im.ge/2025/08/28/nogX7y.ChatGPT-Image-Aug-28-2025-03-46-43-PM.png"
              alt="Engineer portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeIn("up", 0.1)}>
            <Card className="h-full card-gradient">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-muted-foreground">
                  Currently pursuing a Bachelor's degree in Engineering with a
                  focus on practical applications and innovative solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.2)}>
            <Card className="h-full card-gradient">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <p className="text-muted-foreground">
                  Gained valuable experience through internships and projects,
                  working with cutting-edge technologies and methodologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.3)}>
            <Card className="h-full card-gradient">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <p className="text-muted-foreground">
                  Proficient in various engineering tools and technologies, with
                  a strong foundation in problem-solving and analytical
                  thinking.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
