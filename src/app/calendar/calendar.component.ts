import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarEntry } from '../models/CalendarEntry';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor() { }

  selectedEntry: CalendarEntry;

  ngOnInit(): void {
    this.selectedEntry = {
      date: moment(),
      events: [],
      color: null,
      text: 'Schicht',
      isActualMonth: true,
    };

    this.selectedEntry.events.push({
      id: 0,
      name: 'Test 1',
      place: '',
      color: '',
      text: '',
      start: new Date()
    });
    this.selectedEntry.events.push({
      id: 1,
      name: 'Test 2',
      place: '',
      color: '',
      text: '',
      start: new Date()
    });


  }

  ShowDayInfo(event){
    this.selectedEntry= event;
    this.selectedEntry.events.push({
      id:0,
      name:"test" + event.date.get('date'),
      place: "",
      color: "",
      text : "",
      datetime: new Date(2020,event.date.month(),event.date.get('date'))
    });
    
    this.selectedEntry.text = 'F3';
    console.log();
  }
}
