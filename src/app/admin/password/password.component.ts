import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  basicForm: FormGroup = new FormGroup({
    old: new FormControl("", [Validators.required]),
    new: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    new2: new FormControl("", [Validators.required, (control: AbstractControl): ValidationErrors | null => {
      if (!this.basicForm) return null;
      const ret = this.basicForm.value.new !== control.value;
      return ret ? {diff: {value: control.value}} : null;
    }]),
  });

  constructor(private fb: FormBuilder, private tab: TabRef, private router: ActivatedRoute, private rs: RequestService, private ms: NzMessageService) {
    tab.name = "修改密码";

  }

  ngOnInit(): void {
  }

  submit(): void {
    //const val = this.basicForm.value;
    if(!this.basicForm.valid) return;
    this.rs.post('my/password', this.basicForm.value).subscribe(res=>{
      this.ms.success("修改成功");
    })
  }

}
