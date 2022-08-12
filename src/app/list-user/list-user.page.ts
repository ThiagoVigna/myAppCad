import { Component, OnInit } from '@angular/core';
import { ConectService } from './../service/conect.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {

  constructor(private conectService: ConectService ) {
    this.ListUser();
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ListUser(){
    this.conectService.listUser().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
