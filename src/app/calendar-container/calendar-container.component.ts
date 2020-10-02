import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarEntry } from '../models/CalendarEntry';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss'],
})
export class CalendarContainerComponent implements OnInit {
  @Input() date: Date;
  @Output() selectedEntry: EventEmitter<CalendarEntry> = new EventEmitter();

  navDate: moment.Moment;

  constructor() {
    if (this.date === undefined) {
      this.date = new Date();
    }
  }


  weekDaysHeaderArr: Array<string> = [];
  calendarEntries:Array<CalendarEntry> = [];

  ngOnInit(): void {
    this.navDate = moment(this.date);
    this.createWeekdayHeader();
    this.getCalendarDays();
  }

  createWeekdayHeader() {
    const weekDaysArr: Array<number> = [0, 1, 2, 3, 4, 5, 6];
    weekDaysArr.forEach((day) =>
      this.weekDaysHeaderArr.push(moment().weekday(day).format('ddd'))
    );
  }

  getCalendarDays() {
    const month = moment(this.navDate).month();
    const year = moment(this.navDate).year();

    const firstDayDate = moment(this.navDate).startOf('month');
    const initialEmptyCell = firstDayDate.weekday();

    const lastDayDate = moment(this.navDate).endOf('month');
    const lastEmptyCells = 6 - lastDayDate.weekday();

    const daysInMonth = this.navDate.daysInMonth();

    this.getPrevMonthCalendarDays(firstDayDate, initialEmptyCell);

    for (let i = 1; i <= daysInMonth; i++) {
      var entry: CalendarEntry = {
        date: moment(new Date(year, month, i)),
        color: null,
        text: null,
        events: [],
        isActualMonth: true
      };

      this.calendarEntries.push(entry);
    }

    this.getNextMonthCalendarDays(firstDayDate, lastEmptyCells);
  }

  getPrevMonthCalendarDays(
    actualMonth: moment.Moment,
    startDayPrevMonth: number
  ) {
    if (startDayPrevMonth > 0) {
      const lastMonthDate = moment(actualMonth).subtract(startDayPrevMonth, 'days');

      const month = moment(lastMonthDate).month();
      const year = moment(lastMonthDate).year();

      const daysInPrevMonth = lastMonthDate.daysInMonth();

      for (let i = lastMonthDate.date(); i <= daysInPrevMonth; i++) {
        var entry: CalendarEntry = {
          date: moment(new Date(year, month, i)),
          color: null,
          text: '',
          events: [],
          isActualMonth: false
        };

        this.calendarEntries.push(entry);
      }
    }
  }

  getNextMonthCalendarDays(
    actualMonth: moment.Moment,
    endDayPrevMonth: number
  ) {

    if (endDayPrevMonth > 0) {
      const nextMonthDate = moment(actualMonth).add(endDayPrevMonth, 'days');

      const month = moment(nextMonthDate).month() + 1;
      const year = moment(nextMonthDate).year();

      for (let i = 1; i <= endDayPrevMonth; i++) {
        var entry: CalendarEntry = {
          date: moment(new Date(year, month, i)),
          color: null,
          text: null,
          events: [],
          isActualMonth: false
        };

        this.calendarEntries.push(entry);
      }
    }
  }

  prevMonth() {
    this.navDate.subtract(1, 'months');
    this.calendarEntries = [];
    this.getCalendarDays();
  }

  nextMonth() {
    this.navDate.add(1, 'months');
    this.calendarEntries =[];
    this.getCalendarDays();
  }

  onDaySelected(calendarEntry: CalendarEntry) {
    this.selectedEntry.emit(calendarEntry);
  }

  isDayInActualMonth(day: CalendarEntry) {
    let result = true;
    
    if (day != null) {
      result = !day.isActualMonth; 
    }

    return result;
  }
}
