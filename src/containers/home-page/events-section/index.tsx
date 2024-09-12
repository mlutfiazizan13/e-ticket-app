'use client'

import EventItem from "@/components/event/EventItem";
import { GET_ALL_EVENT } from "@/constants/service";
import { Event } from "@/types/event";
import { FC, useEffect, useState } from "react";

interface EventsSectionProps{}

const EventsSection:FC<EventsSectionProps> = () => {
    const [events, setEvents] = useState<Event[]>()
    useEffect(() => {
        async function fetchPosts() {
            console.log(GET_ALL_EVENT);
            
            let res = await fetch(`${GET_ALL_EVENT}`)
            let data = await res.json()
            
            console.log(data.data);
            
            setEvents(data.data)
            
          }

          fetchPosts()
    }, []);

    return ( 
        <section className="relative container mx-auto my-20">
            <div className="grid grid-cols-3">
                {events?.map((event) => (
                    <EventItem key={`event-${event.id}`} event={event}/>

                    // <li key={event.id}>{event.eventName}</li>
                ))}
            </div>
        </section>
     );
}
 
export default EventsSection;