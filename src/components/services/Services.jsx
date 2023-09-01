import React from 'react'
import {motion} from "framer-motion"
import { AiFillIeCircle, AiFillWindows } from "react-icons/ai"
import myResume from "../../assets/data.json"

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
            <h2>SKILLS</h2>

            <section>
                <motion.div 
                    className='service-box-1' 
                    whileInView={animations.whileInView} 
                    initial={animations.one} 
                    whileHover={animations.whileHover}
                >
                    <h3>Skills</h3>
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
                    <AiFillWindows />
                    <span>Software Developer</span>
                </motion.div>

                <motion.div 
                    className='service-box-4' 
                    whileInView={animations.whileInView} 
                    initial={animations.four} 
                    whileHover={animations.whileHover}
                >
                    {
                        myResume.personalInfo.personalSkills.map((skill) => {
                            return (
                                <div className="icon-container" key={skill.skill}>
                                    <i className={skill.img} style={{color: `${skill.color}`}}></i>
                                    <span>{skill.skill}</span>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </section>

        </div>
    )
}

export default Services