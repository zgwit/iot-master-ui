import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {ChooseService} from "../choose.service";

@Component({
  selector: 'app-project-edit-devices',
  templateUrl: './project-edit-devices.component.html',
  styleUrls: ['./project-edit-devices.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectEditDevicesComponent),
      multi: true
    }
  ]
})
export class ProjectEditDevicesComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  items: any[] = [];
  formGroup = new FormGroup({});
  formArray: FormArray = new FormArray([]);

  constructor(private fb: FormBuilder, private cs: ChooseService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void{
    this.formGroup = this.fb.group({
      items: this.formArray = this.fb.array(this.items.map((d: any) => {
        return this.fb.group({
          device_id: [d.device_id, [Validators.required]],
          name: [d.name, [Validators.required]],
        })
      }))
    })
  }

  add() {
    this.formArray.push(this.fb.group({
      device_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    }))
    //复制controls，让表格可以刷新
    this.formArray.controls = [...this.formArray.controls];
    this.change();
  }

  addMore() {
    this.cs.chooseDevice({multiple: true}).subscribe(devices=>{
      if (devices.length) {
        devices.forEach((d: string)=>{
          this.formArray.push(this.fb.group({
            device_id: [d, [Validators.required]],
            name: ['', [Validators.required]],
          }))
        });

        //复制controls，让表格可以刷新
        this.formArray.controls = [...this.formArray.controls];
        this.change();
      }
    })
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
