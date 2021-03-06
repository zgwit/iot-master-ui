import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  id: any;
  submitting = false;

  basicForm: FormGroup = new FormGroup({});

  data: any = {
    "name": "新建项目",
    "location": [],
    "enable": true,
    "template_id":"",
    "company_id":"",
    "group_id":"",
    "user_id":"",
    "commands": [],
    "variables": [],
    "devices": [],
    "strategies": [],
    "validators": [],
    "jobs": [],
    "scripts": [],
  }

  constructor(private fb: FormBuilder, private tab: TabRef, private route: ActivatedRoute, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    tab.name = this.id ? "编辑项目" : "新建项目";
    if (this.id) this.load();
    Object.assign(this.data, this.route.snapshot.queryParams);
    if (this.data.device_id) {
      this.data.devices.push({device_id: this.data.device_id, slave: 1});
      delete this.data.device_id;
    }
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      template_id: [this.data.template_id, []],
      company_id: [this.data.company_id, []],
      group_id: [this.data.group_id, []],
      user_id: [this.data.user_id, []],
      location: [this.data.location, []],
      enable: [this.data.enable, [Validators.required]],

      commands: [this.data.commands || []],
      variables: [this.data.variables || []],
      devices: [this.data.devices || []],
      strategies: [this.data.strategies || []],
      validators: [this.data.validators || []],
      jobs: [this.data.jobs || []],
      scripts: [this.data.scripts || []],
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('project/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'project/' + this.id + '/setting' : 'project/create';
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

  onCompanyChange() {
    this.basicForm.get("group_id")?.patchValue('');
    this.change();
  }
}
