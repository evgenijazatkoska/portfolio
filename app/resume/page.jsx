"use client";

import {
  FaHtml5, 
  FaCss3,
  FaJs, 
  FaReact, 
  FaBootstrap } from 'react-icons/fa';

  import {SiTailwindcss, SiNextdotjs} from 'react-icons/si';

  const about = {
    title: 'About me',
    description: "As a passionate and dedicated Front-End Developer, I specialize in creating intuitive and dynamic user interfaces that deliver seamless experiences across devices. With a keen eye for detail and a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I transform complex requirements into visually appealing and highly functional websites and applications. My commitment to continuous learning and staying updated with industry trends ensures that I bring innovative and efficient solutions to every project. Let's connect and bring your digital vision to life!",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Evgenija Zatkoska"
      },
      {
        fieldName: "Phone",
        fieldValue: "(+000)12 345 678"
      },
      {
        fieldName: "Discord",
        fieldValue: "eva4763"
      },
      {
        fieldName: "Email",
        fieldValue: "ezatkoska@yahoo.com"
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available"
      },
      {
        fieldName: "Languages",
        fieldValue: "English,Macedonian,Serbian"
      },
      
    ]
  }

  const experience = 
  {
    icon:'',
    title:'My experience',
    description:"Provided exceptional assistance to customers by resolving their issues, answering inquiries, and ensuring a positive experience through effective communication and problem-solving skills.",
    items: [
      {
        company: "Trifecta Support",
        position: "Customer Support Representative",
        duration: "2022-Present"
      },
      
    ]
  };

  const education = {
    icon: "",
    title:"My education",
    description: "Completed comprehensive education, covering a range of topics from foundational principles to advanced concepts.",
    items: [
      {
        institution: "Brainster",
        degree: "Front-end Developer",
        duration:"2023-2024"
      },
      {
        institution: "Udemy",
        degree: "Full Stack 2022 Web Development Bootcamp",
        duration:"2022"
      },
      {
        institution: "Faculty of Information Technologies",
        degree: "Student",
        duration:"2017-2021"
      }
    ]
  }

  const skills = {
    title: "My skills",
    description:"Proficient in a range of programming languages and applying these skills to develop efficient and scalable solutions.",
    skillList: [
      {
        icon:<FaHtml5 />,
        name:'html 5'
      },
      {
        icon:<FaCss3 />,
        name:'css 3'
      },
      {
        icon:<FaJs />,
        name:'javascript'
      },
      {
        icon:<FaReact />,
        name:'react.js'
      },
      {
        icon:<FaBootstrap />,
        name:'bootstrap'
      },
      {
        icon:<SiNextdotjs />,
        name:'next.js'
      },
      {
        icon:<SiTailwindcss />,
        name:'tailwind.css'
      },
    
    ]
  }

  import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; 

  import { ScrollArea } from '@/components/ui/scroll-area';
  import { motion } from 'framer-motion';
  import { Scroll } from 'lucide-react';

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1,
      transition:{delay: 0.5, duration: 0.4, ease: 'easeIn' },
    }} 
    
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value ="experience">Experience</TabsTrigger>
        <TabsTrigger value ="education">Education</TabsTrigger>
        <TabsTrigger value ="skills">Skills</TabsTrigger>
        <TabsTrigger value ="about">About me</TabsTrigger>
      </TabsList>

      <div className="min-h-[70vh] w-full">

        <TabsContent value="experience" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
          <ScrollArea className="h-[400px}">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {experience.items.map((item, index) => {
              return <li key={index} className="bg-[#164C45] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                <div className=" flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.company}</p>
                </div>
              </li>
            })}</ul>
          </ScrollArea>
          
          </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
          <ScrollArea className="h-[400px}">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.items.map((item, index) => {
              return <li key={index} className="bg-[#164C45] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[35px] text-center lg:text-left">{item.degree}</h3>
                <div className=" flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.institution}</p>
                </div>
              </li>
            })}</ul>
          </ScrollArea>
          
          </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
            <div className=" flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold ">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index)=> {
                return <li key={index}>
                  <TooltipProvider delayDuration={250}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#164C45] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              })}
            </ul>
          </div>
          </TabsContent>

          <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item,index)=>{
                return (<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className="text-accent/60">{item.fieldName}</span>
                  <span className="text-xl ">{item.fieldValue}</span>
                </li>)
              })}
            </ul>
          </div>
          </TabsContent>
      </div>
    </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume