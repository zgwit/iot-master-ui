import {Component, forwardRef, Input, HostBinding, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ChooseService} from "../choose.service";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-choose-tunnel',
  templateUrl: './choose-tunnel.component.html',
  styleUrls: ['./choose-tunnel.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooseTunnelComponent),
      multi: true
    }
  ]
})
export class ChooseTunnelComponent implements OnInit, ControlValueAccessor {
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
    this.rs.get(`tunnel/${this._id}/detail`).subscribe(res=>{
      this.name = res.data.name || res.data.sn;
    })
  }

  choose() {
    this.cs.chooseTunnel().subscribe(res=>{
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
