import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-subscribe-edit',
  templateUrl: './subscribe-edit.component.html',
  styleUrls: ['./subscribe-edit.component.scss']
})
export class SubscribeEditComponent implements OnInit {
  id: any;
  submitting = false;

  basicForm: FormGroup = new FormGroup({});

  data: any = {
    "user_id": "",
    "start": 0,
    "end": 1439, //23:59
    "level": 1,
    "weixin": true,
    "sms": true,
    "voice": true,
    "email": true,
    "enable": true,
  }

  constructor(private fb: FormBuilder, private tab: TabRef, private route: ActivatedRoute, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    tab.name = this.id ? "编辑订阅" : "新建订阅";
    if (this.id) this.load();
    this.buildForm();

    console.log(route.snapshot.queryParams)
    route.snapshot.queryParamMap.keys.forEach(k=>{
      this.data[k] = route.snapshot.queryParamMap.get(k)
    })
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      user_id: [this.data.user_id, [Validators.required]],
      start: [this.data.start, []],
      end: [this.data.end, []],
      level: [this.data.level, [Validators.required]],
      weixin: [this.data.weixin, [Validators.required]],
      sms: [this.data.sms, [Validators.required]],
      voice: [this.data.voice, [Validators.required]],
      email: [this.data.email, [Validators.required]],
      enable: [this.data.enable, [Validators.required]],

    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('subscribe/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'subscribe/' + this.id + '/setting' : 'subscribe/create';
    const body = Object.assign({}, this.basicForm.value, this.route.snapshot.queryParams);
    this.rs.post(uri, body).subscribe(res => {
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
