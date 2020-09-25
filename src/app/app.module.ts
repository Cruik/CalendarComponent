import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarInfoComponent } from './calendar-info/calendar-info.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'ngx-moment';
import {MatIconModule} from '@angular/material/icon'

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
