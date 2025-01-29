// src/components/Heros.tsx

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { BackgroundBeams } from "./ui/BackgroundBeams";
import InstagramIcon from '../assets/instaicon.png';
import TwitterIcon from '../assets/xicon.png';
import LinkedInIcon from '../assets/linkedinicon.png';
import GitHubIcon from '../assets/githubicon.png';

const Heros = () => {
  // アニメーションコントロールの設定
  const controlsCircle = useAnimation();
  const controlsLine = useAnimation();
  const controlsText = useAnimation();
  const controlsIcons = useAnimation();

  useEffect(() => {
    const startAnimations = async () => {
      // ロード完了後3秒待機
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 丸をアニメート
      await controlsCircle.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // 線をアニメート
      await controlsLine.start({
        height: '20rem', // 必要に応じて調整
        transition: { duration: 1, ease: "easeInOut" },
      });

      // テキストをアニメート
      await controlsText.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // アイコンをアニメート
      await controlsIcons.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });
    };

    startAnimations();
  }, [controlsCircle, controlsLine, controlsText, controlsIcons]);

  return (
    <div className='relative w-full min-h-screen mx-auto flex items-center justify-center px-4'>
      <BackgroundBeams />

      {/* 中央に配置するコンテナ */}
      <div className='flex flex-row items-center'>
        
        {/* 丸と線を縦に積むコンテナ */}
        <div className="flex flex-col items-center mb-4 mr-4">
          {/* 丸 */}
          <motion.div
            className='w-6 h-6 md:w-5 md:h-5 rounded-full bg-[#c5c7cf] mb-2'
            initial={{ opacity: 0, scale: 0 }}
            animate={controlsCircle}
          />

          {/* 線 */}
          <motion.div
            className='w-1 bg-[#c5c7cf] h-20 md:h-80'
            initial={{ height: 0 }}
            animate={controlsLine}
          />
        </div>

        {/* テキストとアイコンを縦に配置 */}
        <div className="flex flex-col items-center text-center">
          {/* テキスト */}
          <motion.h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-2'
            initial={{ opacity: 0, x: 50 }}
            animate={controlsText}
          >
            My name is SHOGO.
          </motion.h1>
          <motion.h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4'
            initial={{ opacity: 0, x: 50 }}
            animate={controlsText}
          >
            This is my portfolio.
          </motion.h1>

          {/* アイコンコンテナ */}
          <motion.div
            className="flex flex-row space-x-4 md:space-x-6 mt-8"
            initial={{ opacity: 0, x: 50 }}
            animate={controlsIcons}
          >
            {/* Instagram Icon */}
            <a href="https://www.instagram.com/copilot_shogo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className='z-10'>
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 hover:opacity-75 transition-all duration-300"/>
            </a>

            {/* Twitter Icon */}
            <a href="https://x.com/copilot_sho" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className='z-10'>
              <img src={TwitterIcon} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 hover:opacity-75 transition-all duration-300"/>
            </a>

            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/shogo-kikuchi-19b792321/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='z-10'>
              <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 hover:opacity-75 transition-all duration-300"/>
            </a>

            {/* GitHub Icon */}
            <a href="https://github.com/Shogo-nfrealmusic" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='z-10'>
              <img src={GitHubIcon} alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 hover:opacity-75 transition-all duration-300"/>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Heros;
