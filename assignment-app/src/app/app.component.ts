import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { AssignmentsService } from './shared/assignments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application de gestion de devoirs';
  constructor( private authService:AuthService, private router : Router, private  assignmentsService:AssignmentsService) {}

  
 
  login(){
    if(!this.authService.loggedIn){
      this.authService.logIn();
    }else{
      this.authService.logout();
      this.router.navigate(['/home']);
    }
  }
}
