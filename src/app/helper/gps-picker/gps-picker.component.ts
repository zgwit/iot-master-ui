import {Component, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgxAmapComponent} from "ngx-amap";

@Component({
  selector: 'app-gps-picker',
  templateUrl: './gps-picker.component.html',
  styleUrls: ['./gps-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GpsPickerComponent),
      multi: true
    }
  ]
})
export class GpsPickerComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  @ViewChild('map',{static:true}) map: NgxAmapComponent | undefined;

  center: any = [120.312703,31.488752];

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    //this._val = obj[0] + ',' + obj[1];
    // @ts-ignore
    this.map.center = obj;
    this.center = obj;
  }

  mapMove() {
    // @ts-ignore
    const center = this.map.amap.map.getCenter().toString();
    console.log('center', center);
    //console.log('center', this.map.amap.map.getCenter().toString())

    this.onChanged(center.split(',').map((v: string) => parseFloat(v)));
    this.onTouched();
  }
}
