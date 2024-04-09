'use client';
import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

const content = [
  {
    title: 'Collaborative Editing',
    description:
      'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];
export function LandingFeaturesSection() {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 1 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });
  const backgroundColors = ['bg-indigo-500', 'bg-red-500', 'bg-blue-500'];
  const backgroundColors1 = ['red', 'blue', 'green'];
  return (
    // <div className='flex relative'>
    //   <div className='h-screen'>
    //     {content.map((c) => (
    //       <div className='h-full'>
    //         <h1>{c.title}</h1>
    //         <p>{c.description}</p>
    //       </div>
    //     ))}
    //   </div>
    //   <div className='flex-1'>
    //     <h1 className='bg-red-500 sticky top-20'>BOOM</h1>
    //   </div>
    // </div>
    <div className='flex'>
      {/* <div className='flex-1 h-screen'>
        {content.map((item, index) => (
          <div key={item.title + index} className='my-20'>
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className='text-2xl font-bold'
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className='text-lg max-w-sm mt-10'
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div> */}
      <div className='max-w-2xl'>
        {content.map((item, index) => (
          <div key={item.title + index} className='my-20'>
            <h2 className='text-2xl font-bold text-slate-100'>{item.title}</h2>
            <p className='text-kg text-slate-300 max-w-sm mt-10'>
              {item.description}
            </p>
          </div>
        ))}
        <div className='h-40' />
      </div>
      <div className='h-screen bg-blue-200 ml-auto flex-1 flex top-20 sticky justify-center items-center'>
        <motion.div
          animate={{
            backgroundColor:
              backgroundColors1[activeCard % backgroundColors1.length],
          }}
          className='h-60 w-80'
        ></motion.div>
      </div>
    </div>
    // <div className='p-0 h-screen overflow-hidden'>
    //   <StickyScroll content={content} />
    // </div>
  );
}
