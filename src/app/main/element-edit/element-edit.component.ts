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
  protocols: any = [];
  codes: any = [{name:'请选择协议'}];

  basicForm: FormGroup = new FormGroup({});
  data: any = {
    "name": "新建元件",
    "type": "",
    "protocol": "",
    "manufacturer": "",
    "version": "",
    "variables": [],
    "commands": [],
    "collectors": [],
    "scripts": [],
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
      type: [this.data.type, [Validators.required]],
      protocol: [this.data.protocol, []],
      manufacturer: [this.data.manufacturer, []],
      version: [this.data.version, []],

      variables: [this.data.variables || []],
      commands: [this.data.commands || []],
      collectors: [this.data.collectors || []],
      scripts: [this.data.scripts || []],
    });
  }

  ngOnInit(): void {
    this.rs.get('protocol/list').subscribe(res => {
      this.protocols = res.data;
      this._checkCodes();
    })
  }


  load(): void {
    this.rs.get('element/' + this.id + '/detail').subscribe(res => {
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';
      this.buildForm();
      this._checkCodes();
    });
  }

  _checkCodes(): void{
    this.protocols.forEach((p: any) => {
      if (p.name === this.data.protocol) {
        this.codes = p.codes;
      }
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'element/' + this.id + '/setting' : 'element/create';
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

  onProtocolChange($event: string) {
    console.log($event)
    this.protocols.forEach((p: any) => {
      if (p.name === $event) {
        this.codes = p.codes;
      }
    })

  }
}
