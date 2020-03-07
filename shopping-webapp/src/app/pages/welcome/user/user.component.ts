import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  listOfData: User[] = [];
  isVisible = false;

  user: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser().subscribe(res => {
      this.listOfData = res;
    })
  }


  editUser(user: User) {
    this.user = user;
    this.showModal();

  }

  updateUser(){
    this.userService.editUser(this.user).subscribe(res => {
      console.log(res);
    })
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.updateUser();
  }

  handleCancel(): void {
    this.isVisible = false;
    this.resetUser();
  }

  resetUser() {
    this.user = new User();
  }
}
