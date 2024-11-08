"use client";

import {motion} from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative ">
        <motion.div initial={{opacity:0}} animate={{opacity: 1,
            transition:{delay: 0.5, duration: 0.4, ease: 'easeIn' }
        }}>
            <div className="w-[300px] h-[298px] xl:w-[498px] xl:h-[498px]  ">
                <Image src="/computer1.jpg" priority quality={100} fill alt="" className="object-contain border border-accent shadow-border-glow "/>
            </div>
        </motion.div>
    </div>
  )
}

export default Photo    