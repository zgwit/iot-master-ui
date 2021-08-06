import {Component, forwardRef, HostBinding, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ChooseService} from "../choose.service";
import {RequestService} from "../../request.service";

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
  @HostBinding('attr.title')
  _id = "";
  name = "";
  username = "";

  constructor(private cs: ChooseService, private rs: RequestService) { }

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
    this.load();
  }

  load() {
    this.name = "";
    if (this._id)
    this.rs.get(`user/${this._id}/detail`).subscribe(res=>{
      this.name = res.data.name;
      this.username = res.data.username;
    })
  }

  choose() {
    this.cs.chooseUser().subscribe(res=>{
      if (res){
        this._id = res;
        this.load();
        this.onChanged(res);
        this.onTouched();
      }
    })
  }
}
