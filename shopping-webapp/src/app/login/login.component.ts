import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {LoginService} from './login.service';
import {SYSTEM} from '../common/const/system.const';
import {TokenService} from '../common/interceptor/token.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loading = false;
  scale = 1;
  validateForm: FormGroup;

  @HostListener('window:resize', ['$event'])
  onresize(event): void {
    let size = event.target.outerHeight / 768;
    if (size > 1.2) {
      size = 1.2;
    }
    if (size < 1) {
      size = 1;
    }
    this.scale = size;
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private renderer: Renderer2,
    private tokenService: TokenService,
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required, Validators.maxLength(128)]],
      password: [null, [Validators.required, Validators.maxLength(128)]]
    });
  }

  formSubmit(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.status === 'VALID') {
      this.loading = true;
      this.loginService.login({
        username: this.validateForm.get('username').value,
        password: this.validateForm.get('password').value
      }).subscribe(res => {
          // if (res.msgCode === SYSTEM.success) {
          //   this.router.navigate(['/welcome']);
          // }
          console.log(res.access_token);
          this.tokenService.setToken(res.access_token);
          this.router.navigate(['/welcome']);
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
    }

  }

  getScale() {
    return {
      transform: `scale(${this.scale})`
    };
  }

  register() {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.status === 'VALID') {
      this.loading = true;
      this.loginService.register({
        name: this.validateForm.get('username').value,
        password: this.validateForm.get('password').value
      }).subscribe((res: any) => {
          console.log(res.msgCode);
          if (res.msgCode !== '400') {
            this.message.success('创建成功');
          }

          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
    }
  }

}
