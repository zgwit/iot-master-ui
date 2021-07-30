import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-acceptor-edit',
  templateUrl: './acceptor-edit.component.html',
  styleUrls: ['./acceptor-edit.component.scss']
})
export class AcceptorEditComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      port: ['', [Validators.required]],
      timeout: ['', [Validators.required]],
      register: this.fb.group({
        enable: [true, [Validators.required]],
        regex: ['', [Validators.required]],
      }),
      heartbeat: this.fb.group({
        enable: [false, [Validators.required]],
        interval: [30, [Validators.required]],
        regex: ['', [Validators.required]],
        text: ['', [Validators.required]],
        hex: ['', [Validators.required]],
      }),
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
