import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarInfoComponent } from './calendar-info/calendar-info.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'ngx-moment';
import { MatIconModule } from '@angular/material/icon'

import { MomentPipe } from './tools/momentPipe';
import * as moment from 'moment';

import {EntryServiceService} from 'src/app/services/entry-service.service'

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarInfoComponent,
    CalendarContainerComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MomentModule,
    MatIconModule
  ],
  providers: [EntryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

  localeString: string = 'de';

  constructor() {

    moment.locale(this.localeString);
  }
}
