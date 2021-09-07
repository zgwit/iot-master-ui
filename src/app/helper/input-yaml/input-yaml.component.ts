import {Component, Input, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import * as YAML from "yaml";

@Component({
  selector: 'app-input-yaml',
  templateUrl: './input-yaml.component.html',
  styleUrls: ['./input-yaml.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputYamlComponent),
      multi: true
    }
  ]
})
export class InputYamlComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {}
  onTouched: any = () => {}

  //内容
  _val = "";
  get val() {
    return this._val
  }
  set val(y) {
    console.log('eval page-editor', y)
    this._val = y;

    this.onChanged(YAML.parse(y));
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
    this._val = YAML.stringify(obj)
  }

}
