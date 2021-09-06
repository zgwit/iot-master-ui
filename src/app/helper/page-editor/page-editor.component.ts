import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TabRef} from "../tabs/tabs.component";

@Component({
  selector: 'app-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PageEditorComponent),
      multi: true
    }
  ]
})
export class PageEditorComponent implements OnInit, ControlValueAccessor {
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
    //console.log('val', y)
    this._val = y;

    this.onChanged(y);
    this.onTouched();
  }

  constructor(private tab: TabRef) {
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

  cancel() {
    this.tab.Close()
  }
}
