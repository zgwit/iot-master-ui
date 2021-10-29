import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestService} from '../request.service';
import {UserService} from "../user.service";
import {Router} from '@angular/router';

import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private rs: RequestService, private us: UserService, private router: Router) {
  }

  submitForm(): void {
    console.log('submit form');
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) {
      return;
    }

    const password = Md5.hashStr(this.validateForm.value.password);

    this.rs.post('auth/login', {username: this.validateForm.value.username, password}).subscribe(res => {
      console.log('res:', res);
      //this.us.setUser(res.data);
      localStorage.setItem('token', res.data.token);
      //更新用户
      this.us.setUser(res.data.user);

      if (res.data.user.admin)
        this.router.navigate(['/admin']);
      else
        this.router.navigate(['/select-company']);
    }, err => {
      console.log('err:', err);
    });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });
  }
}
