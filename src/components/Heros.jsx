// src/components/Heros.tsx

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { BackgroundBeams } from "./ui/BackgroundBeams";

// 画像パスは実際の構成に合わせて読み込んでください
import InstagramIcon from '../assets/instaicon.png';
import TwitterIcon from '../assets/xicon.png';
import LinkedInIcon from '../assets/linkedinicon.png';
import GitHubIcon from '../assets/githubicon.png';

const Heros = () => {
  // アニメーションコントロール
  const controlsCircle = useAnimation();
  const controlsLine = useAnimation();
  const controlsText = useAnimation();
  const controlsIcons = useAnimation();

  useEffect(() => {
    const startAnimations = async () => {
      // 例: マウント後1秒待ってアニメ開始
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 丸アニメーション
      await controlsCircle.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // 線アニメーション
      await controlsLine.start({
        height: '20rem', // md:h-80 相当。スマホではTailwindの初期値（小さめ）になります。
        transition: { duration: 1, ease: "easeInOut" },
      });

      // テキストアニメーション
      await controlsText.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // アイコンアニメーション
      await controlsIcons.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });
    };

    startAnimations();
  }, [controlsCircle, controlsLine, controlsText, controlsIcons]);

  return (
    <div className="relative w-full min-h-screen mx-auto flex items-center justify-center px-2 sm:px-4">
      {/* 背景 */}
      <BackgroundBeams />

      {/* 左の丸とバー + 右のテキストで横並び */}
      <div className="flex flex-row items-center">
        
        {/* 丸と線を縦に並べる部分（左） */}
        <div className="flex flex-col items-center mb-4 mr-4">
          {/* 丸: モバイルで w-4/h-4, md 以上で w-6/h-6 */}
          <motion.div
            className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#c5c7cf] mb-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={controlsCircle}
          />

          {/* 線: モバイルで h-16, md 以上で h-80 */}
          <motion.div
            className="w-1 bg-[#c5c7cf] h-16 md:h-80"
            initial={{ height: 0 }}
            animate={controlsLine}
          />
        </div>

        {/* テキストとアイコン部分（右） */}
        <div className="flex flex-col items-center text-center">
          {/* テキスト1: モバイルで text-2xl, md で text-4xl, lg で text-5xl */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-2"
            initial={{ opacity: 0, x: 50 }}
            animate={controlsText}
          >
            My name is SHOGO.
          </motion.h1>

          {/* テキスト2 */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={controlsText}
          >
            This is my portfolio.
          </motion.h1>

          {/* SNSアイコン: モバイルで w-4/h-4, md 以上で w-6/h-6, lg 以上で w-8/h-8 */}
          <motion.div
            className="flex flex-row space-x-3 md:space-x-4 lg:space-x-6 mt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={controlsIcons}
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/copilot_shogo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="z-10"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 hover:scale-110 hover:opacity-75 transition-all duration-300"
              />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/copilot_sho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="z-10"
            >
              <img
                src={TwitterIcon}
                alt="Twitter"
                className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 hover:scale-110 hover:opacity-75 transition-all duration-300"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shogo-kikuchi-19b792321/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="z-10"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 hover:scale-110 hover:opacity-75 transition-all duration-300"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Shogo-nfrealmusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="z-10"
            >
              <img
                src={GitHubIcon}
                alt="GitHub"
                className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 hover:scale-110 hover:opacity-75 transition-all duration-300"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Heros;
