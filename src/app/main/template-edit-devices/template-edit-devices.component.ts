import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";

@Component({
  selector: 'app-template-edit-devices',
  templateUrl: './template-edit-devices.component.html',
  styleUrls: ['./template-edit-devices.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TemplateEditDevicesComponent),
      multi: true
    }
  ]
})
export class TemplateEditDevicesComponent implements OnInit, ControlValueAccessor {
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
          name: [d.name, [Validators.required]],
          tags: [d.tags, [Validators.required]],
          type: [d.type, [Validators.required]],
          element_id: [d.element_id, [Validators.required]],
        })
      }))
    })
  }

  add() {
    this.formArray.push(this.fb.group({
      name: ['', [Validators.required]],
      tags: [[], [Validators.required]],
      type: ['', [Validators.required]],
      element_id: ['', [Validators.required]],
    }))
    //复制controls，让表格可以刷新
    this.formArray.controls = [...this.formArray.controls];
    this.change();
  }

  moveUp(i: number) {
    if (i > 0) {
      const c = this.formArray.at(i);
      this.formArray.removeAt(i);
      this.formArray.insert(i - 1, c);
      this.change();
    }
  }

  moveDown(i: number) {
    if (i < this.formArray.length - 1) {
      const c = this.formArray.at(i);
      this.formArray.removeAt(i);
      this.formArray.insert(i + 1, c);
      this.change();
    }
  }

  remove(i: number) {
    this.formArray.removeAt(i)
    this.change();
  }

  clear() {
    this.formArray.clear();
    this.change();
  }

  sort() {
    this.formArray.controls.sort((a, b) => {
      return a.value.slave - b.value.slave;
    });
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
