import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-get-list-demo',
  templateUrl: './get-list-demo.component.html',
  styleUrls: ['./get-list-demo.component.css']
})
export class GetListDemoComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((usersFromAPI: User[]) => {
       this.users = usersFromAPI;
    }, error => console.error(error));
  }

}
