import { Moment } from 'moment';
import { CalenderEvent } from "./CalendarEvent";

export interface CalendarEntry{
    date: Moment;
    events: CalenderEvent[];
    color: string;
    text:string;
    isActualMonth:boolean;
}