import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-tunnel-edit',
  templateUrl: './tunnel-edit.component.html',
  styleUrls: ['./tunnel-edit.component.scss']
})
export class TunnelEditComponent implements OnInit {
  id: any;
  submitting = false;

  basicForm: FormGroup = new FormGroup({});

  data: any = {
    "name": "",
    "timeout": 60,
    "enable": true,
    "company_id":"",
    "heartbeat": {
      "enable": false,
      "interval": 30,
      "text": "",
      "regex": ""
    },
    "control": {
      "enable": false,
      "prefix": "",
      "suffix": "",
      "script": ""
    },
    "protocol": {
      "enable": false,
      "type": "",
      "options": {}
    },
  }

  constructor(private fb: FormBuilder, private tab: TabRef, private route: ActivatedRoute, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    tab.name = "编辑通道";
    if (this.id) this.load();
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      company_id: [this.data.company_id, []],
      timeout: [this.data.timeout, [Validators.required]],
      enable: [this.data.enable, [Validators.required]],
      heartbeat: [this.data.heartbeat, []],
      control: [this.data.control, []],
      protocol: [this.data.protocol, []],
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('tunnel/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.tab.name += '[' + (this.data.name || this.data.sn) + ']';
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = 'tunnel/' + this.id + '/setting';
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
