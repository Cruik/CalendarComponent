import { Component, OnInit } from '@angular/core';
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
    this.selectedEntry = null;
  }

  ShowDayInfo(event){
    this.selectedEntry= event;
  }
}
