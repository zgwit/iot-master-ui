import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ChooseService} from "../choose.service";

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooseUserComponent),
      multi: true
    }
  ]
})
export class ChooseUserComponent implements OnInit, ControlValueAccessor {
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
    this.cs.chooseTemplate().subscribe(res=>{
      if (res){
        this._id = res;
        this.onChanged(res);
        this.onTouched();
      }
    })
  }
}
