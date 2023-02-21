import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit{
  newAssignment!:Assignment;
  nomDevoir:string="";
  dateDeRendu!:Date;
  
  constructor(private assignmentService:AssignmentsService, private router:Router) { }
  ngOnInit(): void {
    
  }
  onSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random()*1000); 
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    //this.nouvelAssignment.emit(newAssignment);
    this.assignmentService.addAssignment(newAssignment)
    .subscribe(message => console.log(message));
    this.router.navigate(['home']); 
  }  
 


}
