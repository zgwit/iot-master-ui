import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit {
  id: any;
  submitting = false;

  basicForm: FormGroup = new FormGroup({});
  jobsArray: FormArray = new FormArray([]);

  data: any = {
    "name": "新建设备",
    "tunnel_id": "",
    "slave": 1843,
    "jobs": []
  }

  constructor(private fb: FormBuilder, private tab: TabRef, private route: ActivatedRoute, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    tab.name = this.id ? "编辑设备" : "新建设备";
    if (this.id) this.load();
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      tunnel_id: [this.data.address, [Validators.required]],
      slave: [this.data.port, [Validators.required]],

      jobs: this.jobsArray = this.fb.array(this.data.jobs.map((d: any) => {
        return {
          crontab: [d.crontab, [Validators.required]], //应该是最大值+1
          commands: [d.commands, [Validators.required]],
        }
      })),
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('device/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'device/' + this.id + '/setting' : 'device/create';
    this.rs.post(uri, this.data).subscribe(res => {
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

  jobAdd() {
    this.jobsArray.push(this.fb.group({
      crontab: [this.jobsArray.controls.length + 1, [Validators.required]], //应该是最大值+1
      commands: ['', [Validators.required]],
    }))
    //复制controls，让表格可以刷新
    this.jobsArray.controls = [...this.jobsArray.controls];
  }

  deviceMoveUp(i: number) {
    if (i > 0) {
      const c = this.jobsArray.at(i);
      this.jobsArray.removeAt(i);
      this.jobsArray.insert(i - 1, c);
    }
  }

  deviceMoveDown(i: number) {
    if (i < this.jobsArray.length - 1) {
      const c = this.jobsArray.at(i);
      this.jobsArray.removeAt(i);
      this.jobsArray.insert(i + 1, c);
    }
  }

  deviceRemove(i: number) {
    this.jobsArray.removeAt(i)
  }

  jobClear() {
    this.jobsArray.clear();
  }

  jobSort() {
    this.jobsArray.controls.sort((a, b) => {
      return a.value.slave - b.value.slave;
    })
  }
}
