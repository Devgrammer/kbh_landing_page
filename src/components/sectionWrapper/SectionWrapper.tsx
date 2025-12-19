import React from 'react'

interface ChildProp{
    children: React.ReactNode,
    id: string
}

const SectionWrapper = ({children, id}: ChildProp) => {
  return (
    <section id={`${id}`} className="main  w-full min-h-screen max-h-auto text-black p-8 font-extrabold text-xl rounded-xl bg-[#F5ECE4] overflow-hidden  mx-auto">
      {children}
    </section>
  );
}

export default SectionWrapper