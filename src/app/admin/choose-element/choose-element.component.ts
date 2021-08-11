import {Component, forwardRef, HostBinding, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ChooseService} from "../choose.service";
import {RequestService} from "../../request.service";

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
  @HostBinding('attr.title')
  _id = "";
  name = "";

  @Input()
  showClear: any = false;

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
    if (!this._id) return;
    this.name = "加载中...";
    this.rs.get(`element/${this._id}/detail`).subscribe(res=>{
      this.name = res.data.name;
    })
  }

  choose() {
    this.cs.chooseElement().subscribe(res=>{
      if (res){
        this._id = res;
        this.load();
        this.onChanged(res);
        this.onTouched();
      }
    })
  }

  clear() {
    this._id = '';
    this.name = '';
    this.onChanged('');
    this.onTouched();
  }
}
