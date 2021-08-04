import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ChooseService} from "../choose.service";

@Component({
  selector: 'app-choose-element',
  templateUrl: './choose-element.component.html',
  styleUrls: ['./choose-element.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooseElementComponent),
      multi: true
    }
  ]
})
export class ChooseElementComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {}
  onTouched: any = () => {}

  //内容
  _id = "";

  constructor(private cs: ChooseService) { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this._id = obj;
  }

  choose() {
    this.cs.chooseElement().subscribe(res=>{
      if (res){
        this._id = res;
        this.onChanged(res);
        this.onTouched();
      }
    })
  }
}
