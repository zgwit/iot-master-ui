import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import * as YAML from "yaml";

@Component({
  selector: 'app-yaml-editor',
  templateUrl: './yaml-editor.component.html',
  styleUrls: ['./yaml-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YamlEditorComponent),
      multi: true
    }
  ]
})
export class YamlEditorComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {}
  onTouched: any = () => {}

  //内容
  _yaml = "";
  get yaml() {
    return this._yaml
  }
  set yaml(y) {
    //console.log('yaml page-editor', y)
    this._yaml = y;

    this.onChanged(YAML.parse(y));
    this.onTouched();
  }

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
    this._yaml = YAML.stringify(obj)
  }

}
