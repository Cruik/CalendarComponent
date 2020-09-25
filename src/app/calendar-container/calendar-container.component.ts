import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss'],
})
export class CalendarContainerComponent implements OnInit {
  @Input() date: Date;
  navDate: moment.Moment;

  constructor() {
    if (this.date === undefined) {
      this.date = new Date();
    }
  }

  localeString: string = 'de';

  weekDaysHeaderArr: Array<string> = [];
  calendardays: any[] = [];

  ngOnInit(): void {
    moment.locale(this.localeString);
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
    const firstDayDate = moment(this.navDate).startOf('month');
    const initialEmptyCell = firstDayDate.weekday();

    const lastDayDate = moment(this.navDate).endOf('month');
    const lastEmptyCells = 6 - lastDayDate.weekday();

    const daysInMonth = this.navDate.daysInMonth();

    this.getPrevMonthCalendarDays(firstDayDate, initialEmptyCell);

    for (let i = 1; i <= daysInMonth; i++) {
      this.calendardays.push(i);
    }

    this.getNextMonthCalendarDays(firstDayDate, lastEmptyCells);
  }

  getPrevMonthCalendarDays(
    actualMonth: moment.Moment,
    startDayPrevMonth: number
  ) {
    if (startDayPrevMonth > 0) {
      const lastMonthDate = moment(actualMonth).subtract(
        startDayPrevMonth,
        'days'
      );
      const daysInPrevMonth = lastMonthDate.daysInMonth();

      for (let i = lastMonthDate.date(); i <= daysInPrevMonth; i++) {
        this.calendardays.push(i);
      }
    }
  }

  getNextMonthCalendarDays(
    actualMonth: moment.Moment,
    endDayPrevMonth: number
  ) {

    if (endDayPrevMonth > 0) {
      const nextMonthDate = moment(actualMonth).add(endDayPrevMonth,'days');

      for (let i = 1; i <= endDayPrevMonth; i++) {
        this.calendardays.push(i);
      }
    }
  }
}
