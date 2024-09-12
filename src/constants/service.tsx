export const HOST = process.env.NEXT_PUBLIC_API_HOST;
export const PORT = process.env.NEXT_PUBLIC_API_PORT;

export const ADDRESS = HOST+":"+PORT;

// EVENT SERVICE
export const EVENT_SERVICE = ADDRESS+"/"+"event-service";
export const GET_ALL_EVENT = EVENT_SERVICE+"/"+"event"

