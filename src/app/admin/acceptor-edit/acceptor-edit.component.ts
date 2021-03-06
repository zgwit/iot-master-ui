import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-acceptor-edit',
  templateUrl: './acceptor-edit.component.html',
  styleUrls: ['./acceptor-edit.component.scss']
})
export class AcceptorEditComponent implements OnInit {
  id: any;
  submitting = false;

  basicForm: FormGroup = new FormGroup({});

  data: any = {
    "name": "新建TCP服务",
    "type": "tcp-server",
    "address": "",
    "port": 1850,
    "timeout": 60,
    "enable": true,
    "register": {
      "enable": true,
      "regex": '^\\w+$'
    },
    "heartbeat": {
      "enable": false,
      "interval": 30,
      "text": "",
      "regex": '^\\w+$'
    },
    "control": {
      "enable": false,
    },
    "protocol": {
      "enable": false,
      "type": "",
      "options": {}
    },
    "devices": []
  }

  constructor(private fb: FormBuilder, private tab: TabRef, private route: ActivatedRoute, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    tab.name = this.id ? "编辑服务" : "新建服务";
    if (this.id) this.load();
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      type: [this.data.type, [Validators.required]],
      address: [this.data.address, [Validators.required]],
      port: [this.data.port, [Validators.required]],
      timeout: [this.data.timeout, [Validators.required]],
      enable: [this.data.enable, [Validators.required]],
      register: [this.data.register, []],
      heartbeat: [this.data.heartbeat, []],
      control: [this.data.control, []],
      protocol: [this.data.protocol, []],
      devices: [this.data.devices, []],
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('acceptor/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'acceptor/' + this.id + '/setting' : 'acceptor/create';
    this.rs.post(uri, this.basicForm.value).subscribe(res => {
      this.message.success("提交成功");
      this.tab.Close();
    }).add(() => {
      this.submitting = false;
    })
  }

  change() {
    //console.log('change', e)
    this.data = this.basicForm.value;
  }

}
