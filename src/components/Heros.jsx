// import { motion } from 'framer-motion';
import { styles } from '../styles';
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Heros = () => {
  return (
    <div className='relative w-full h-screen mx-auto'>
      <BackgroundBeams />
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      </div>
    </div>
  )
}

export default Heros