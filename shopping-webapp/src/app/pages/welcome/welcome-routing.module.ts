import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome.component';
import {UserComponent} from './user/user.component';
import {GoodsComponent} from './goods/goods.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'goods',
        component: GoodsComponent,
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {
}
