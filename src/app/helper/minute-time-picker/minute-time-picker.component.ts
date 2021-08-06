import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-minute-time-picker',
  templateUrl: './minute-time-picker.component.html',
  styleUrls: ['./minute-time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MinuteTimePickerComponent),
      multi: true
    }
  ]
})
export class MinuteTimePickerComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  _time = new Date();
  get time() {
    return this._time
  }

  set time(y) {
    this._time = y;
    const minutes = y.getHours() * 60 + y.getMinutes();
    console.log(y, minutes);
    this.onChanged(minutes);
    this.onTouched();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    const date = new Date()
    if (obj < 0) obj = 0;
    else if (obj > 1439) obj = 1439;
    date.setHours(Math.floor(obj / 60), obj % 60, 0, 0);
    this._time = date;
  }

}
