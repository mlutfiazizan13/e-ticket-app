export interface Event {
    id: number,
    eventName: string,
    eventDetails: string,
    googleMapsEmbed: string,
    eventTickets: EventTIcket[]
}

export interface EventTIcket {
    id: number,
    event: Event,
    displayDate: string,
    saleEndDate: string,
}