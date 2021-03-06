import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";

@Component({
  selector: 'app-project-edit-validators',
  templateUrl: './project-edit-validators.component.html',
  styleUrls: ['./project-edit-validators.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectEditValidatorsComponent),
      multi: true
    }
  ]
})
export class ProjectEditValidatorsComponent implements OnInit, ControlValueAccessor {
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
          expression: [d.expression, [Validators.required]],
          name: [d.name, [Validators.required]],
          content: [d.content, [Validators.required]],
          level: [d.level, [Validators.required]],
          delay: [d.delay, [Validators.required]],
          resetInterval: [d.resetInterval, [Validators.required]],
          resetTimes: [d.resetTimes, [Validators.required]],
          enable: [d.enable, [Validators.required]],
        })
      }))
    })
  }

  add() {
    this.formArray.push(this.fb.group({
      expression: ['', [Validators.required]],
      name: ['', [Validators.required]],
      content: ['', [Validators.required]],
      level: [1, [Validators.required]],
      delay: [0, [Validators.required]],
      resetInterval: [0, [Validators.required]],
      resetTimes: [0, [Validators.required]],
      enable: [true, [Validators.required]],
    }))
    //复制controls，让表格可以刷新
    this.formArray.controls = [...this.formArray.controls];
    this.change();
  }

  copy(i: number) {
    const group = this.formArray.controls[i];

    this.formArray.controls.splice(i, 0, this.fb.group({
      expression: [group.get('expression')?.value, [Validators.required]],
      name: [group.get('name')?.value, []],
      content: [group.get('content')?.value, [Validators.required]],
      level: [group.get('level')?.value, [Validators.required]],
      delay: [group.get('delay')?.value, [Validators.required]],
      resetInterval: [group.get('resetInterval')?.value, [Validators.required]],
      resetTimes: [group.get('resetTimes')?.value, [Validators.required]],
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
