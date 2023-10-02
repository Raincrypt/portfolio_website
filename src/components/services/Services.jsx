import React from 'react'
import {color, motion} from "framer-motion"
import { AiFillHtml5, AiFillIeCircle, AiFillWindows } from "react-icons/ai"
import { BiLogoCss3, BiLogoFirebase, BiLogoJavascript, BiLogoShopify, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { FaSass } from 'react-icons/fa'
import { SiContentful, SiNextdotjs } from 'react-icons/si'
import myResume from "../../assets/data.json"
import IconContainer from './IconContainer'

const Services = () => {

    const skills = [
        {
            name: 'HTML',
            icon: <AiFillHtml5 className='skill_logo'/>,
        },
        {
            name: 'CSS',
            icon: <BiLogoCss3 className='skill_logo'/>,
        },
        {
            name: 'Javascript',
            icon: <BiLogoJavascript className='skill_logo'/>,
        },
        {
            name: 'Tailwind',
            icon: <BiLogoTailwindCss className='skill_logo'/>,
        },
        {
            name: 'Sass',
            icon: <FaSass className='skill_logo'/>,
        },
        {
            name: 'Firebase',
            icon: <BiLogoFirebase className='skill_logo'/>,
        },
        {
            name: 'Contentful',
            icon: <SiContentful className='skill_logo'/>,
        },
        {
            name: 'Shopify',
            icon: <BiLogoShopify className='skill_logo'/>,
        },
        {
            name: 'Next',
            icon: <SiNextdotjs className='skill_logo'/>,
        },
        {
            name: 'Typescript',
            icon: <BiLogoTypescript className='skill_logo'/>,
        },
    ]

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
                        skills.map((skill) => {
                            return (
                                <IconContainer icon={skill.icon} skill={skill.name}/>
                            )
                        })
                    }
                </motion.div>
            </section>

        </div>
    )
}

export default Services