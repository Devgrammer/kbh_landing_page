
import SectionWrapper from '../sectionWrapper/SectionWrapper'
import SectionHeading from '../sectionHeading/SectionHeading'
import EventCard from '../eventCard/EventCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from 'react';
 export interface EventType {
   id: number;
   title: string;
   desc: string;
   desc2: string;
   event: string;
   imgURL: string;
   color:string;
   gath: number;
 }
const EventSection = () => {
  const [index, setIndex]= useState(0)
  
   const eventDetail: EventType[] = [
     {
       id: 1,
       title: "Parinay Sutra",
       desc: "Shadi do parivaro ka anutha rista",
       desc2: "Shadi do parivaro ka anutha rista",
       event: "wedding",
       imgURL:
         "https://images.unsplash.com/photo-1754782915842-aa4fca6c203a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       color: "bg-red-700",
       gath: 500,
     },
     {
       id: 2,
       title: "Sangeet",
       desc: "Shadi do parivaro ka anutha rista",
       desc2: "Shadi do parivaro ka anutha rista",
       event: "wedding",
       imgURL:
         "https://www.linandjirsa.com/wp-content/uploads/sangeet-at-terranea-resort.jpg",
       color: "bg-cyan-700",
       gath: 500,
     },
     {
       id: 3,
       title: "Haldi Hungama",
       desc: "Peele haath, shubh din ki shuruat!",
       desc2: "Shadi do parivaro ka anutha rista",
       event: "Haldi",
       imgURL:
         "https://images.unsplash.com/photo-1633104502748-4e80b9a03eeb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       color: "bg-yellow-700",
       gath: 500,
     },
     {
       id: 4,
       title: "Mehndi Mania",
       desc: "Shadi do parivaro ka anutha rista",
       desc2: "Shadi do parivaro ka anutha rista",
       event: "Mehndi",
       imgURL:
         "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       color: "bg-green-700",
       gath: 500,
     },
     {
       id: 5,
       title: "Reception",
       desc: "Shadi do parivaro ka anutha rista",
       desc2: "Shadi do parivaro ka anutha rista",
       event: "wedding",
       imgURL:
         "https://images.unsplash.com/photo-1573951648026-fa38ff3f6770?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       color: "bg-fuchsia-700",
       gath: 500,
     },
     {
       id: 6,
       title: "Birthday Blast",
       desc: "Shadi do parivaro ka anutha rista",
       desc2: "Shadi do parivaro ka anutha rista",
       event: "wedding",
       imgURL:
         "https://images.unsplash.com/photo-1573951648026-fa38ff3f6770?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       color: "bg-orange-700",
       gath: 500,
     },
     {
       id: 7,
       title: "Meeting",
       desc: "Shadi do parivaro ka anutha rista",
       desc2: "Shadi do parivaro ka anutha rista",
       event: "wedding",
       imgURL:
         "https://images.unsplash.com/photo-1573951648026-fa38ff3f6770?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       color: "bg-indigo-700",
       gath: 500,
     },
   ];
  const totalItem = eventDetail.length
  const factor=4
 const handleRight = () => {
   setIndex((index + 1)%totalItem);
 };
   const handleLeft=()=>{
    setIndex((index-1+totalItem)%totalItem)
   }

   console.log('par', index, totalItem)
  return (
    <SectionWrapper id="event">
      <SectionHeading text="EVENTS" addClass="" />
      <div className="event-card-array flex gap-12 justify-center items-center">
        <button
          onClick={handleLeft}
          disabled={index===0}
          className="left-move w-12 h-12 rounded-full bg-stone-800 place-items-center text-white cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        {eventDetail.slice(index, index+factor).map((ev, ind) => {
          return (
            <EventCard
              key={`ec-${ev.id}`}
              id={ev.id}
              title={ev.title}
              desc={ev.desc}
              desc2={ev.desc2}
              event={ev.event}
              imgURL={ev.imgURL}
              color={ev.color}
              gath={ev.gath}
            />
          );
        })}
        <button
          onClick={handleRight}
          disabled={index === totalItem-factor}
          className="left-move w-12 h-12 rounded-full bg-stone-800 place-items-center text-white cursor-pointer"
        >
          <FaChevronRight />
        </button>
      </div>
    </SectionWrapper>
  );
}

export default EventSection