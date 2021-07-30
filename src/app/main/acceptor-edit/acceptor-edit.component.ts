import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";

@Component({
  selector: 'app-acceptor-edit',
  templateUrl: './acceptor-edit.component.html',
  styleUrls: ['./acceptor-edit.component.scss']
})
export class AcceptorEditComponent implements OnInit {
  submitting = false;

  basicForm: FormGroup = new FormGroup({});
  devicesArray: FormArray = new FormArray([]);

  data: any = {}

  constructor(private fb: FormBuilder, private tab: TabRef) {
    tab.name = "编辑网络服务";
    this.buildForm();
    this.data = this.basicForm.value; //生成默认值
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      name: ['新建服务', [Validators.required]],
      type: ['tcp-server', [Validators.required]],
      address: ['', [Validators.required]],
      port: [1843, [Validators.required]],
      timeout: [30, [Validators.required]],

      register: this.fb.group({
        enable: [true, []],
        regex: ['', []],
      }), heartbeat: this.fb.group({
        enable: [false, []],
        interval: [30, []],
        text: ['', []],
        regex: ['', []],
      }), control: this.fb.group({
        enable: [false, []],
        prefix: ['', []],
        suffix: ['', []],
      }), adapter: this.fb.group({
        enable: [false, []],
        type: ['', []],
        options: [{}, []],
      }),
      devices: this.devicesArray = this.fb.array([])
    });
  }

  ngOnInit(): void {
  }

  submit(): any {


  }

  change() {
    //console.log('change', e)
    this.data = this.basicForm.value;
  }

  deviceAdd() {
    this.devicesArray.push(this.fb.group({
      slave: [this.devicesArray.controls.length + 1, [Validators.required]], //应该是最大值+1
      element_id: ['', [Validators.required]],
    }))
  }

  deviceMoveUp(i: number) {
    if (i > 0) {
      const c = this.devicesArray.at(i);
      this.devicesArray.removeAt(i);
      this.devicesArray.insert(i - 1, c);
    }
  }

  deviceMoveDown(i: number) {
    if (i < this.devicesArray.length - 1) {
      const c = this.devicesArray.at(i);
      this.devicesArray.removeAt(i);
      this.devicesArray.insert(i + 1, c);
    }
  }

  deviceRemove(i: number) {
    this.devicesArray.removeAt(i)
  }

  deviceClear() {
    this.devicesArray.clear();
  }

  deviceSort() {
    this.devicesArray.controls.sort((a, b) => {
      return a.value.slave - b.value.slave;
    })
  }
}
