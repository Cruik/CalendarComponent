import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarEntry } from '../models/CalendarEntry';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor() {}

  selectedEntry:CalendarEntry;

  ngOnInit(): void {
    this.selectedEntry = {
      date: moment(),
      events : [],
      color: null,
      text: 'Schicht',
      isActualMonth: true
    };
    
  }

  ShowDayInfo(event){
    this.selectedEntry= event;
    console.log(event);
  }
}
