import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.scss']
})
export class ElementEditComponent implements OnInit {
  id: any;
  submitting = false;

  basicForm: FormGroup = new FormGroup({});
  data: any = {
    "name": "新建元件",
    "variables": [],
    "commands": [],
    "collectors": [],
  }

  constructor(private fb: FormBuilder, private tab: TabRef, private route: ActivatedRoute, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    tab.name = this.id ? "编辑元件" : "新建元件";
    if (this.id) this.load();
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      name: [this.data.name, [Validators.required]],

      variables: [this.data.variables],
      commands: [this.data.commands],
      collectors: [this.data.collectors],
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('element/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'element/' + this.id + '/setting' : 'element/create';
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

}
