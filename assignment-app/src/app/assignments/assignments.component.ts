import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  page: number=1;
 limit: number=10;
 totalDocs!: number;
 totalPages!: number;
 hasPrevPage!: boolean;
 prevPage!: number;
 hasNextPage!: boolean;
 nextPage!: number;

  assignmentSelectionne!:Assignment;
  displayedColumns: string[] = ['demo-id', 'demo-nom', 'demo-dateDeRendu', 'demo-rendu'];
  assignments!: Assignment[];
  constructor(private assignmentService:AssignmentsService) { }
  ngOnInit(): void {
   // this.assignments= this.assignmentService.getAssignments();
   
   this.getAssignments();

  }
  

  
  getAssignments(){
    this.assignmentService.getAssignmentsPagine(this.page, this.limit)
     .subscribe((data:any) => {
       this.assignments = data.docs;
       this.page = data.page;
       this.limit = data.limit;
       this.totalDocs = data.totalDocs;
       this.totalPages = data.totalPages;
       this.hasPrevPage = data.hasPrevPage;
       this.prevPage = data.prevPage;
       this.hasNextPage = data.hasNextPage;
       this.nextPage = data.nextPage;
       console.log("données reçues");
     });


  }

  pageSuivante(){
    if(this.hasNextPage){
      this.page=this.nextPage;
      this.getAssignments();
    }
  }
  pagePrecedente(){
    if(this.hasPrevPage){
      this.page=this.prevPage;
      this.getAssignments();
    }
  }
  lastPage(){
    this.page =this.totalPages;
    this.getAssignments();
  }
  premierePage(){
    this.page = 1;
    this.getAssignments();
  }
}


