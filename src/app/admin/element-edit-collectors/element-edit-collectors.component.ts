import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";

@Component({
  selector: 'app-element-edit-collectors',
  templateUrl: './element-edit-collectors.component.html',
  styleUrls: ['./element-edit-collectors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ElementEditCollectorsComponent),
      multi: true
    }
  ]
})
export class ElementEditCollectorsComponent implements OnInit, ControlValueAccessor {
  @Input() codes: any = [];

  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  items: any[] = [];
  formGroup = new FormGroup({});
  formArray: FormArray = new FormArray([]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void{
    this.formGroup = this.fb.group({
      items: this.formArray = this.fb.array(this.items.map((d: any) => {
        return this.fb.group({
          interval: [d.interval, [Validators.required]],
          crontab: [d.crontab, [Validators.required]],
          code: [d.code, [Validators.required]],
          address: [d.address, [Validators.required]],
          length: [d.length, [Validators.required]],
          enable: [d.enable, [Validators.required]],
        })
      }))
    })
  }

  add() {
    this.formArray.push(this.fb.group({
          interval: [60, [Validators.required]],
          crontab: ['', [Validators.required]],
          code: [1, [Validators.required]],
          address: [0, [Validators.required]],
          length: [1, [Validators.required]],
          enable: [true, [Validators.required]],
    }))
    //复制controls，让表格可以刷新
    this.formArray.controls = [...this.formArray.controls];
    this.change();
  }

  copy(i: number) {
    const group = this.formArray.controls[i];

    this.formArray.controls.splice(i, 0, this.fb.group({
      interval: [group.get('interval')?.value, [Validators.required]],
      crontab: [group.get('crontab')?.value, []],
      code: [group.get('code')?.value, [Validators.required]],
      address: [group.get('address')?.value, [Validators.required]],
      length: [group.get('length')?.value, [Validators.required]],
      enable: [group.get('enable')?.value, [Validators.required]],
    }))
  }

  remove(i: number) {
    this.formArray.removeAt(i)
    this.change();
  }

  clear() {
    this.formArray.clear();
    this.change();
  }

  change() {
    this.formArray.markAsDirty();
    this.formArray.updateValueAndValidity();
    this.onChanged(this.formArray.value);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.items = obj;
    this.buildForm();
  }

  drop($event: any) {
    const item = this.formArray.controls.splice($event.previousIndex, 1);
    this.formArray.controls.splice($event.currentIndex, 0, ...item);
    this.change();
  }
}
