import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../common/share.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,

    RouterModule.forChild([{
      path: '',
      component: LoginComponent,
    }]),
  ]
})
export class LoginModule {
}
