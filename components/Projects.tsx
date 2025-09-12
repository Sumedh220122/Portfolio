"use client"

import React from 'react'
import {motion} from "framer-motion";

type Props = {}

const Projects = (props: Props) => { 
  const projects = [
    {
      src: "https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png", 
      title: "Cinescope", 
      description: "A Movie browsing website using React.js for the frontend and Express.js for backend routing, allowing users to explore their favorite movie content." 
    },
    { 
      src: "https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png", 
      title: "Content Posting Application", 
      description: "Full-stack content-posting platform using Java and Spring Boot, allowing users to register, log in, manage profiles, like/dislike posts, follow/unfollow users and post content." 
    },
    { 
      src: "https://www.ednc.org/wp-content/uploads/2024/01/AI-for-teachers-image-generated-by-DALL-E-owned-by-Paul-Cancellieri-Paul-Cancellieri.png", 
      title: "EduMentor AI", 
      description: "Built a Multi-Agentic Learning System using LangGraph and LangChain that generates personalized study roadmaps and lessons tailored to student preferences and goals. \
                    Designed agents for learner profiling, curriculum design, resource curation, and lesson generation to create adaptive and engaging learning experiences. \
                    Showcased the potential of agentic AI in EdTech by enabling scalable, dynamic, and personalized tutoring solutions." 
    },
  ];
  return (
      <motion.div 
      initial = {{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className = "h-screen relative flex overflow-hidden flex-col text-left md:flex-row \
      max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className = "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
          {projects.map((project, i) => (
              <div className = "w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <motion.img 
                  initial = {{
                    y:-300,
                    opacity: 0
                  }}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 1.2}}
                  viewport={{once:true}}
                  src = {project.src} 
                  alt = ""
                  className = "w-100 h-60"
                />
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className = "text-4xl font-semibold text-center">
                    <span className = "underline decoration-[#F7AB0A]/50">
                        Project {i + 1} of {projects.length}:
                    </span>{" "}
                    {project.title}
                  </h4>
                  <p className="text-lg text-center md:text-left">
                    {project.description}
                  </p>
                </div>
              </div>
          ))}
        </div>

        <div className = "w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">
            
        </div>
      </motion.div>
  )
}

export default Projects