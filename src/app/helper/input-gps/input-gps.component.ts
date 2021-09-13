import {Component, Input, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NzSizeLDSType} from "ng-zorro-antd/core/types";

@Component({
  selector: 'app-input-gps',
  templateUrl: './input-gps.component.html',
  styleUrls: ['./input-gps.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputGpsComponent),
      multi: true
    }
  ]
})
export class InputGpsComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  pickerVal: any = [120.312703, 31.488752];

  //内容
  _val = [120.312703, 31.488752];
  get val() {
    return this._val
  }

  set val(y) {
    this._val = y;
    this.pickerVal = y;

    this.onChanged(y);
    this.onTouched();
  }

  isVisible = false;

  @Input()
  nzSize: NzSizeLDSType = "default";

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
    this._val = obj;
  }

  onOk() {
    this.isVisible = false;
    this.val = this.pickerVal;
  }
}
