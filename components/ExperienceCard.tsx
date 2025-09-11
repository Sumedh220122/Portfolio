"use-client";

import React from 'react'
import {motion} from "framer-motion";

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className = "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 \
        w-[500px] md:w-[500px] xl:w-[500px] h-[600px] snap-center bg-[#292929] p-10 \
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial = {{
                    y: -100,
                    opacity: 0
                }}
                transition = {{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport = {{once: true}}
                className = "w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] \
                object-cover object-center"
                src = "https://media.licdn.com/dms/image/v2/D560BAQH10L0-PrrdzQ/company-logo_100_100/B56ZVMXKIqGsAQ-/0/1740742895116/onecap_technologies_logo?e=1760572800&v=beta&t=x-QHI7xyIpagv-OVa4K1-udEUXbKirY8vE9xgjB-ut8"
                alt = ""
            />

            <div className = "px-0 md:px-10">
                <h4 className='text-2xl font-light text-center'>Software Engineering Intern</h4>
                <p className = "font-bold text-2xl mt-1 text-center">OneCap</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full' 
                        src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    />
                    <img className='h-10 w-10 rounded-full' 
                        src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    />
                    <img className='h-10 w-10 rounded-full' 
                        src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                    />
                    <img className='h-10 w-10 rounded-full' 
                        src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                    />
                    <img className='h-10 w-10 rounded-full' 
                        src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                    />
                    <img className='h-10 w-10 rounded-full' 
                        src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                    />
                    <img className='h-10 w-10 rounded-full' 
                        src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    />
                </div>
                <p className="uppercase py-5 text-gray-300 text-center">
                    January 2025 - July 2025
                </p>
                <ul className = "list-disc space-y-4 ml-5 text-sm">
                    <li>Built and maintained TypeScript services for processing financial data</li>
                    <li>Developed data processing pipelines in Python to ingest and process financial data from various sources</li>
                    <li>Designed Multi-Agentic assistants using LangGraph </li>
                    <li>Deployed microservices on AWS ECS. Setup ALBs and SDks. Resolved live issues on AWS Cloud</li>
                </ul>
            </div>
        </article>
  )
}

export default ExperienceCard