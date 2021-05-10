import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  links = [
    {
      'path':'profile',
      'text': 'Profile'
    },
    {
      'path':'images',
      'text': 'images'
    },
    {
      'path':'table',
      'text': 'table'
    }
    
  ]
  constructor(private userSrv: UserService,private router: Router) { }

  ngOnInit(): void {
    //this.user = this.userSrv.getUser()
  }

  logout(){
    //this.userSrv.setLogInStatus(false);
    this.router.navigateByUrl('/')
  }

}
