import { Component, Input, OnInit } from '@angular/core';
import { CalendarEntry } from '../models/CalendarEntry';
import { EntryServiceService } from '../services/entry-service.service';

@Component({
  selector: 'app-calendar-info',
  templateUrl: './calendar-info.component.html',
  styleUrls: ['./calendar-info.component.scss']
})
export class CalendarInfoComponent implements OnInit {
  @Input() calendarEntry: CalendarEntry;

  constructor( private entryService: EntryServiceService) { }

  ngOnInit(): void {
  }

  onClickToday(){

  }

  onClickClear(){
    this.entryService.Clear();
  }

}
