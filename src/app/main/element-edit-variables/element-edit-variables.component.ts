import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";

@Component({
  selector: 'app-element-edit-variables',
  templateUrl: './element-edit-variables.component.html',
  styleUrls: ['./element-edit-variables.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ElementEditVariablesComponent),
      multi: true
    }
  ]
})
export class ElementEditVariablesComponent implements OnInit, ControlValueAccessor {
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
          address: [d.address, [Validators.required]],
          type: [d.type, [Validators.required]],
          ratio: [d.ratio, [Validators.required]],
          store: [d.store, [Validators.required]],
        })
      }))
    })
  }

  add() {
    this.formArray.push(this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      type: ['word', [Validators.required]],
      ratio: [1, [Validators.required]],
      store: [true, [Validators.required]],
    }))
    //复制controls，让表格可以刷新
    this.formArray.controls = [...this.formArray.controls];
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

  change(){
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
}
