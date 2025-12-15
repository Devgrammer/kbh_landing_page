import { MdPeopleOutline } from "react-icons/md";
import type { EventType } from "../evenSection/EventSection";

const EventCard = ({id,title, desc, desc2, event,imgURL, color, gath}:EventType) => {
 console.log(color)
  return (
    <div className="event-card bg-stone-900 p-2 w-fit rounded-lg">
      <div
        style={{ backgroundImage: `url(${imgURL})` }}
        className={`event-card relative flex items-end justify-start w-58 backdrop-sepia bg-center h-64  bg-no-repeat bg-cover rounded-lg`}
      >
        <div className={`absolute rounded-lg mask-alpha mask-t-from-white mask-t-to-transparent fade ${color !== ""?color:"bg-red-700"} z-10 w-full h-full`}></div>
        <div className="text-overlay  text-white text-left m-2 z-11 space-y-1">
          <div className="card-image-quote font-bold flex items-center text-xl  leading-5">
            {title}
          </div>
          <div className="card-image-quote font-medium flex  items-center text-xs">
            {desc}
          </div>
        </div>
      </div>
      <div className="card-content my-2 min-h-20 space-y-4 m-1">
        <div className="card-content-header">
          <div className="card-image-quote  font-semibold uppercase flex z-11 items-center text-sm text-white w-fit h-6  ">
            {event}
          </div>
        </div>
        <div className="card-content-amenties text-white font-normal text-xs flex justify-between items-center">
          <div className="gathering flex items-center gap-x-2">
            <span className="border rounded-full border-white p-1">
              <MdPeopleOutline />
            </span>
            {gath} PEOPLES
          </div>
          <div className="gathering">SELF CATERING</div>
        </div>
        <div className="card-image-quote  font-semibold flex z-11 items-center text-sm  rounded-full w-fit bg-white h-6 px-2 ">
          BOOK NOW
        </div>
      </div>
    </div>
  );
};

export default EventCard;
