import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import * as YAML from "yaml";

@Component({
  selector: 'app-config-editor',
  templateUrl: './config-editor.component.html',
  styleUrls: ['./config-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ConfigEditorComponent),
      multi: true
    }
  ]
})
export class ConfigEditorComponent implements OnInit, ControlValueAccessor {
  @Input() set readOnly(v: boolean | string) {
    this.options.readOnly = v;
  };


  options: { [k: string]: any } = {lineNumbers: true, theme: 'material', mode: 'yaml', readOnly: false};

  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  _config = "";
  get config() {
    return this._config
  }

  set config(y: string) {
    this._config = y;

    this.onChanged(YAML.parse(y));
    this.onTouched();
  }

  parse(code: string) {
    let obj = {};
    switch (this.options.mode) {
      case "yaml":
        obj = YAML.parse(code);
        break
      case "javascript":
        obj = JSON.parse(code);
        break;
    }
    return obj;
  }

  stringify(obj: Object) {
    let str = "";
    switch (this.options.mode) {
      case "yaml":
        str = YAML.stringify(obj);
        break
      case "javascript":
        str = JSON.stringify(obj, undefined, '\t');
        break;
    }
    return str;
  }

  get lang() {
    return 'yaml'
  }

  @Input()
  set lang(lang: string) {
    if (this.options.mode === lang) {
      return;
    }

    let obj = this.parse(this._config);
    this.options.mode = lang;
    this._config = this.stringify(obj);
  }

  constructor() {
  }

  ngOnInit(): void {
    //console.log("config editor")
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this._config = YAML.stringify(obj)
  }

}
