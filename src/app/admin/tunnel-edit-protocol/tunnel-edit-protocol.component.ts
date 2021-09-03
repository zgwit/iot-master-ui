import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-tunnel-edit-protocol',
  templateUrl: './tunnel-edit-protocol.component.html',
  styleUrls: ['./tunnel-edit-protocol.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TunnelEditProtocolComponent),
      multi: true
    }
  ]
})
export class TunnelEditProtocolComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  data: any = {};
  formGroup = new FormGroup({});
  protocols: any = [];

  constructor(private fb: FormBuilder, private rs: RequestService) {
  }

  ngOnInit(): void {
    this.rs.get('protocol/list').subscribe(res => {
      this.protocols = res.data;
    })
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this.fb.group({
      enable: [this.data.enable, [Validators.required]],
      type: [this.data.type, []],
      options: [this.data.options, []],
    })
  }


  change() {
    this.formGroup.markAsDirty();
    this.formGroup.updateValueAndValidity();
    this.onChanged(this.formGroup.value);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.data = obj || {};
    this.buildForm();
  }

}
