import {Component, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgxAmapComponent} from "ngx-amap";

import gcoord from 'gcoord';

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
  myCity: any = "";

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

    if (!obj) return;

    //GPS坐标 转 高德坐标
    const loc = gcoord.transform(obj, gcoord.WGS84, gcoord.GCJ02);

    // @ts-ignore
    this.map.center = loc;
    this.center = loc;
  }

  mapMove() {
    // @ts-ignore
    const center = this.map.amap.map.getCenter().toString();
    console.log('center', center);
    //console.log('center', this.map.amap.map.getCenter().toString())

    let loc = center.split(',').map((v: string) => parseFloat(v));

    //高德坐标 转 GPS坐标
    loc = gcoord.transform(loc, gcoord.GCJ02, gcoord.WGS84);

    this.onChanged(loc);
    this.onTouched();
  }

  onEvent($event: any, naReady: string) {
    console.log('event', $event, naReady);

  }
}
