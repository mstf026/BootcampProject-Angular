import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private authService:AuthService) {}

  ngOnInit(): void {}

  isNotAuthenticated(){
    if(this.authService.isAuthenticated()){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    this.authService.deleteToken();
  }
  
}
