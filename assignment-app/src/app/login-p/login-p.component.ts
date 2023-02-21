import { Component,OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentDetailComponent } from '../assignments/assignment-detail/assignment-detail.component';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.component.html',
  styleUrls: ['./login-p.component.css']
})
export class LoginPComponent implements OnInit {
  ngOnInit(): void {

    }
  
  constructor(private authService:AuthService,
    private router:Router,) {}
    hide = true;
    password!:string;
    name!:string;
  adm = "admin";
  access=false;
  onAcc(){
    if(this.password == this.adm){
      this.access=true
      this.authService.loggedIn=true;
      this.router.navigate(['/home']);
    }
    else{
      this.authService.loggedIn=false;
      this.router.navigate(['/home']);

      

    }
  }

}
