import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

 

  users = [
    {
      id: 1,
      name: 'Jack'
    },
    {
      id: 2,
      name: 'Claire'
    },
    {
      id: 3,
      name: 'Jamie'
    }
  ];
}
