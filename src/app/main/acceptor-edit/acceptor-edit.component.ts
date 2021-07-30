import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-acceptor-edit',
  templateUrl: './acceptor-edit.component.html',
  styleUrls: ['./acceptor-edit.component.scss']
})
export class AcceptorEditComponent implements OnInit {
  id: any;
  submitting = false;

  basicForm: FormGroup = new FormGroup({});
  devicesArray: FormArray = new FormArray([]);

  data: any = {
    "name": "新建服务",
    "type": "tcp-server",
    "address": "",
    "port": 1843,
    "timeout": 30,
    "register": {
      "enable": true,
      "regex": ""
    },
    "heartbeat": {
      "enable": false,
      "interval": 30,
      "text": "",
      "regex": ""
    },
    "control": {
      "enable": false,
      "prefix": "",
      "suffix": ""
    },
    "adapter": {
      "enable": false,
      "type": "",
      "options": {}
    },
    "devices": []
  }

  constructor(private fb: FormBuilder, private tab: TabRef, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    tab.name = this.id ? "编辑网络服务" : "新建网络服务";
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      type: [this.data.type, [Validators.required]],
      address: [this.data.address, [Validators.required]],
      port: [this.data.port, [Validators.required]],
      timeout: [this.data.timeout, [Validators.required]],

      register: this.fb.group({
        enable: [this.data.register.enable, []],
        regex: [this.data.register.regex, []],
      }),

      heartbeat: this.fb.group({
        enable: [this.data.heartbeat.enable, []],
        interval: [this.data.heartbeat.interval, []],
        text: [this.data.heartbeat.text, []],
        regex: [this.data.heartbeat.regex, []],
      }),

      control: this.fb.group({
        enable: [this.data.control.enable, []],
        prefix: [this.data.control.prefix, []],
        suffix: [this.data.control.suffix, []],
      }),

      adapter: this.fb.group({
        enable: [this.data.adapter.enable, []],
        type: [this.data.adapter.type, []],
        options: [this.data.adapter.options, []],
      }),
      devices: this.devicesArray = this.fb.array(this.data.devices.map((d: any)=>{
        return {
          slave: [d.slave, [Validators.required]], //应该是最大值+1
          element_id: [d.element_id, [Validators.required]],
        }
      })),
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
    //复制controls，让表格可以刷新
    this.devicesArray.controls = [...this.devicesArray.controls];
    //this.devicesArray = new FormArray([...this.devicesArray.controls]);
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
