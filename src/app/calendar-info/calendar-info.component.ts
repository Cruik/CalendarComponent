import { Component, Input, OnInit } from '@angular/core';
import { CalendarEntry } from '../models/CalendarEntry';

@Component({
  selector: 'app-calendar-info',
  templateUrl: './calendar-info.component.html',
  styleUrls: ['./calendar-info.component.scss']
})
export class CalendarInfoComponent implements OnInit {
  @Input() calendarEntry: CalendarEntry;

  constructor() { }

  ngOnInit(): void {
    
  }

}
