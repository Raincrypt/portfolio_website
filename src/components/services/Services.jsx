import React from 'react'
import {motion} from "framer-motion"
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai"

const Services = () => {

    const animations = {
            whileInView: {
                x: 0,
                y: 0,
                opacity: 1,
            },
            whileHover:{
                scale: 1.05,
                transition: { duration: 0.2 },
            },
            one: {
                opacity: 0,
                x: "-100%",
                
            },
            two: {
                opacity: 0,
                y: "100%",
            },
            three:{
                opacity: 0,
                y: "100%",
            },
            four: {
                opacity: 0,
                x: "100%",
            },
      };

    return (
        <div id='services'>
            <h2>Services</h2>

            <section>
                <motion.div 
                    className='service-box-1' 
                    whileInView={animations.whileInView} 
                    initial={animations.one} 
                    whileHover={animations.whileHover}
                >
                    <h3>Fresher</h3>
                    <p></p>
                </motion.div>
                <motion.div 
                    className='service-box-2'
                    whileInView={animations.whileInView} 
                    initial={animations.two} 
                    whileHover={animations.whileHover}
                >
                    <AiFillIeCircle/>
                    <span>Web Development</span>
                </motion.div>
                <motion.div 
                    className='service-box-3' 
                    whileInView={animations.whileInView} 
                    initial={animations.three} 
                    whileHover={animations.whileHover} 
                    transition={{
                        delay:0.3,
                    }}
                >
                    <AiFillAndroid />
                    <span>Software Developer</span>
                </motion.div>
                <motion.div 
                    className='service-box-4' 
                    whileInView={animations.whileInView} 
                    initial={animations.four} 
                    whileHover={animations.whileHover}
                >
                    <AiFillWindows />
                    <span>Ui/Ux Designing</span>
                </motion.div>
            </section>

        </div>
    )
}

export default Services