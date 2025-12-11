import React from 'react'

interface ChildProp{
    children: React.ReactNode,
    id: string
}

const SectionWrapper = ({children, id}: ChildProp) => {
  return (
    <section id={`#${id}`} className="main  w-full min-h-screen text-black p-8 font-extrabold text-xl rounded-xl bg-zinc-100">
      {children}
    </section>
  );
}

export default SectionWrapper