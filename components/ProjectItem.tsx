'use client';

import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import { GoArrowUpRight } from 'react-icons/go';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type ProjectItemProps = {
  image: StaticImageData;
  alt: string;
  imageMobile: StaticImageData;
  title: string;
  techStack: string[];
  id: string;
  link: string;
  github: string;
};

const ProjectItem = ({
  image,
  alt,
  imageMobile,
  title,
  techStack,
  id,
  link,
  github,
}: ProjectItemProps) => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsImageVisible(true);
  };

  const handleMouseLeave = () => {
    setIsImageVisible(false);
  };

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mb-2 sm:mb-5 cursor-pointer hover:blur-sm transition-all duration-500">
          <Image className="rounded-lg h-auto" src={image} alt={alt} />
        </div>

        <AnimatePresence>
          {isImageVisible && (
            <motion.div
              key="visible"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: -100 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-0 w-60 h-auto object-cover rounded-lg"
            >
              <Image
                className="rounded-lg"
                src={imageMobile}
                alt="netflix clone mobile"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid text-center gap-y-6">
        <h2 className="gradient-text text-xl">{title} </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          {techStack.map((tech: any) => (
            <span
              key={id}
              className="inline-block bg-gradient-badge text-white px-4 py-2 text-[12px] font-bold rounded-full shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={`flex gap-4 mb-6 justify-center`}>
          <Button
            asChild
            variant="link"
            className="shadow-button | rounded-lg flex justify-between gap-2 items-center group transition duration-300 ease-in-out"
          >
            <a
              className="bg-gradient-button text-white "
              href={link}
              target="_blank"
            >
              View Live
              <GoArrowUpRight className="group-hover:-mt-1 w-5 h-5 transition-all" />
            </a>
          </Button>
          <Button
            asChild
            variant="link"
            className="shadow-button | rounded-lg flex justify-between gap-2 items-center group transition duration-300 ease-in-out"
          >
            <a
              className="bg-gradient-button text-white"
              href={github}
              target="_blank"
            >
              Github
              <GoArrowUpRight className="group-hover:-mt-1 w-5 h-5 transition-all" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
