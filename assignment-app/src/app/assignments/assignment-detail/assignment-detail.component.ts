import { Component ,OnInit} from '@angular/core';
import { Assignment } from '../assignment.model';
import {AssignmentsComponent} from '../assignments.component';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';  
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignmentTransmis!:Assignment;
  num!: number;

  constructor(private assignmentService: AssignmentsService,
              private route: ActivatedRoute,
              private router :Router,
              private authService: AuthService ) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id ).subscribe(assignment => this.assignmentTransmis =assignment!);
   
  }
  admin=true;
  isAdmin():boolean{
    return this.authService.loggedIn;
  }
  onAssignmentRendu(){
    this.assignmentTransmis.rendu=true;
    this.assignmentService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
        this.router.navigate(["/home"]);
      });
   
  }
  onClickEdit(){
    this.router.navigate(["/assignment",this.assignmentTransmis.id,'edit'],
    {queryParams:{nom:this.assignmentTransmis.nom},fragment:'edition'});

  }
  
     onDelete(){
      this.assignmentService.delteAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message)
        this.router.navigate(["/home"]);

      });
      

     }
  
  }

