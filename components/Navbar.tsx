'use client';

import Image from 'next/image';
import myLogo from '../public/myLogo.svg';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';
import { animateScroll as scroll, scroller, Events } from 'react-scroll';
import { IoSunnyOutline } from 'react-icons/io5';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollTop;
      const desiredHeight = 50;

      if (scrollHeight > desiredHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      offset: -120,
    });
  };

  return (
    <nav
      className={`bg-blur px-10 lg:px-14 py-4 mt-5 rounded-lg flex justify-between items-center sticky top-5 mb-20 h-[89px] z-50  ${
        scrolled ? 'bg-transparent' : 'bg-[#09090B]'
      } transition-all ease-in-out duration-500 `}
    >
      <Image
        src={myLogo}
        alt="logo"
        width={50}
        height={50}
        className="rounded-lg"
      />

      <div
        className={`hidden md:flex items-center gap-6 px-4 py-2 transition-all ease-in-out duration-500 ${
          scrolled && 'bg-[#09090B] rounded-md'
        } `}
      >
        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 text-[#D1D1D1] hover:text-white`}
          variant="link"
        >
          <a href="#about" onClick={() => scrollToSection('about')}>
            About me
          </a>
        </Button>

        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 text-[#D1D1D1] hover:text-white `}
          variant="link"
        >
          <a href="#projects" onClick={() => scrollToSection('projects')}>
            Projects
          </a>
        </Button>
        <Button
          asChild
          className={` transition duration-200 ease-in-out p-0 text-[#D1D1D1] hover:text-white `}
          variant="link"
        >
          <a href="#skills" onClick={() => scrollToSection('skills')}>
            Skills
          </a>
        </Button>
        {mounted && theme === 'light' ? (
          <BsFillMoonStarsFill
            onClick={() => setTheme('dark')}
            className="w-5 h-5 cursor-pointer text-white/90"
          />
        ) : (
          <IoSunnyOutline
            onClick={() => setTheme('light')}
            className="w-5 h-5 cursor-pointer text-white/90"
          />
        )}
      </div>

      {/* MENU STARTS */}
      <div className="flex md:hidden relative">
        {isMenuOpen ? (
          <RiCloseFill
            onClick={() => setIsMenuOpen(prevState => !prevState)}
            className={`  ${
              scrolled ? 'text-black dark:text-white' : 'text-white'
            } w-7 h-7`}
          />
        ) : (
          <RiMenu5Fill
            onClick={() => setIsMenuOpen(prevState => !prevState)}
            className={`  ${
              scrolled ? 'text-black dark:text-white' : 'text-white'
            } w-7 h-7`}
          />
        )}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 100 }}
              className={`${
                isMenuOpen ? 'flex' : 'hidden'
              } bg-blur absolute flex-col items-center top-16 -right-10 w-36 py-4 rounded-lg bg-[#09090B]`}
            >
              <Button
                asChild
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                className="p-0 text-[#efe7e7]"
                variant="link"
              >
                <motion.a
                  onClick={() => scrollToSection('about')}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ delay: 0.2 }}
                  href="#about"
                >
                  About me
                </motion.a>
              </Button>

              <Button
                asChild
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                className="p-0 text-[#efe7e7]"
                variant="link"
              >
                <motion.a
                  onClick={() => scrollToSection('projects')}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ delay: 0.2 }}
                  href="#projects"
                >
                  Projects
                </motion.a>
              </Button>
              <Button
                asChild
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                className="p-0 text-[#efe7e7]"
                variant="link"
              >
                <motion.a
                  onClick={() => scrollToSection('skills')}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ delay: 0.2 }}
                  href="#skills"
                >
                  Skills
                </motion.a>
              </Button>
              {theme === 'light' ? (
                <BsFillMoonStarsFill
                  onClick={() => {
                    setIsMenuOpen(prevState => !prevState);
                    setTheme('dark');
                  }}
                  className="w-5 h-5 cursor-pointer text-white/90"
                />
              ) : (
                <IoSunnyOutline
                  onClick={() => {
                    setIsMenuOpen(prevState => !prevState);
                    setTheme('light');
                  }}
                  className="w-5 h-5 cursor-pointer text-white/90"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
