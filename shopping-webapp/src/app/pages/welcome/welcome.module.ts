import {NgModule} from '@angular/core';

import {WelcomeRoutingModule} from './welcome-routing.module';

import {WelcomeComponent} from './welcome.component';
import {ShareModule} from '../../common/share.module';
import { UserComponent } from './user/user.component';
import { GoodsComponent } from './goods/goods.component';


@NgModule({
  imports: [WelcomeRoutingModule, ShareModule],
  declarations: [WelcomeComponent, UserComponent, GoodsComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}
