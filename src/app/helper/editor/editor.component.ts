import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true
    }
  ]
})
export class EditorComponent implements OnInit, ControlValueAccessor {
  @Input() submitting: any = false;
  @Output() submit = new EventEmitter<MouseEvent>();

  tabIndex = 0;

  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  //内容
  _val = "";
  get val() {
    return this._val
  }

  set val(y) {
    console.log('val', y)
    this._val = y;

    this.onChanged(y);
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
    this._val = obj
  }

}
