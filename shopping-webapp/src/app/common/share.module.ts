import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ValueToNamePipe} from './pipe/value-to-name.pipe';
import {Level3NodesDirective} from './directive/level3-nodes.directive';
import {PasswordConfirmDirective} from './directive/password-confirm.directive';
import {ValueToNameObjPipe} from './pipe/value-to-name-obj.pipe';
import {InputLimitDirective} from './directive/input-limit.directive';

@NgModule({
  declarations: [
    ValueToNamePipe,
    Level3NodesDirective,
    InputLimitDirective,
    PasswordConfirmDirective,
    ValueToNameObjPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    ValueToNameObjPipe,
    ValueToNamePipe,
    Level3NodesDirective,
    PasswordConfirmDirective,
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    InputLimitDirective
  ]
})
export class ShareModule {
}
