import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ChooseService} from "../choose.service";

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooseGroupComponent),
      multi: true
    }
  ]
})
export class ChooseGroupComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {}
  onTouched: any = () => {}

  //内容
  _id = "";

  @Input() company_id = ''

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
    this.cs.chooseGroup({
      company_id: this.company_id
    }).subscribe(res=>{
      if (res){
        this._id = res;
        this.onChanged(res);
        this.onTouched();
      }
    })
  }
}
