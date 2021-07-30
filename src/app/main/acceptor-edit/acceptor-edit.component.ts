import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../tabs/tabs.component";

@Component({
  selector: 'app-acceptor-edit',
  templateUrl: './acceptor-edit.component.html',
  styleUrls: ['./acceptor-edit.component.scss']
})
export class AcceptorEditComponent implements OnInit {
  submitting = false;
  validateForm: FormGroup;

  data: any = {
    name: '无名'
  }

  constructor(private fb: FormBuilder, private tab: TabRef) {
    tab.name = "编辑接收器"

    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      port: ['', [Validators.required]],
      timeout: ['', [Validators.required]],
      register: this.fb.group({
        enable: [true, []],
        regex: ['', []],
      }),
      heartbeat: this.fb.group({
        enable: [false, []],
        interval: [30, []],
        text: ['', []],
        regex: ['', []],
      }),
      control: this.fb.group({
        enable: [false, []],
        prefix: ['', []],
        suffix: ['', []],
      }),
      adapter: this.fb.group({
        enable: [false, []],
        type: ['', []],
        options: [{a: 1}, []],
      }),
      devices: this.fb.array([
        this.fb.group({
          slave: ['', [Validators.required]],
          element_id: ['', [Validators.required]],
        })
      ])
    });
    console.log(this.validateForm)
  }

  ngOnInit(): void {
  }

  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    console.log(value);
  }

  submit(): any {
    //console.log(this.validateForm.value);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.validateForm.value), 500);
      //setTimeout(()=>reject(), 3000);


    })
  }

}
