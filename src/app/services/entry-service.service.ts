import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { Observable, of } from 'rxjs';
import { CalendarEntry } from '../models/CalendarEntry';

@Injectable({
  providedIn: 'root'
})
export class EntryServiceService {

  selectedEntries: Map<string, Moment>;

  constructor() {
    this.selectedEntries = new Map<string, Moment>();
  }

  Clear() {
    this.selectedEntries.clear();
  }
  
  GetSelectedEntries() {
    return of(this.selectedEntries);
  }

  AddSelectedEntry(entry: Moment) {
    let key = entry.format('DD.MM.yyyy');
    if (this.selectedEntries.has(key)) {
      this.selectedEntries.delete(key);
    }
    else {
      this.selectedEntries.set(key, entry);
    }
  }
}
