import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Md5} from "ts-md5";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  id: any;
  submitting = false;

  basicForm: FormGroup = new FormGroup({});

  data: any = {
    "username":"",
    "name": "新用户",
    "cellphone":"",
    "email":"",
    "password":"",
    "enable": true,
  }

  constructor(private fb: FormBuilder, private tab: TabRef, private route: ActivatedRoute, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    tab.name = this.id ? "编辑用户" : "新建用户";
    if (this.id) this.load();
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      username: [this.data.username, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      cellphone: [this.data.cellphone, []],
      email: [this.data.email, [Validators.email]],
      password: ["", []],
      enable: [this.data.enable, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('user/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'user/' + this.id + '/setting' : 'user/create';
    let data = this.basicForm.value;
    if (data.password) {
      //二次加密
      data.password = Md5.hashStr(Md5.hashStr(data.password))
    }
    this.rs.post(uri, data).subscribe(res => {
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
