import { Event } from "@/types/event";
import { FC } from "react";

const EventItem:FC<{event:Event}> = ({event}) => {
    return ( 
        <div>
            <p>{event.eventName}</p>
            <p>{event.eventDetails}</p>
        </div>
     );
}
 
export default EventItem;