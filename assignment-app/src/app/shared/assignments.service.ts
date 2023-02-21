import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { map, Observable,of, tap, catchError,forkJoin } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    
 
  constructor( private loggingService:LoggingService,
               private http:HttpClient) { }
    url ="http://localhost:8010/api/assignments";
   



    
  
  
  assignments: Assignment[]=[];
  
  getAssignments(): Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.url);

  }
  getAssignmentsPagine(page:number, limit:number): Observable<any>{
    return this.http.get<any>(this.url +"?page="+page+"&limit="+limit);

  }
  getNewId():number{
    return this.assignments.length+1;

  }
  addAssignment(assignment:Assignment):Observable<any>{
    return this.http.post<Assignment>(this.url, assignment, this.httpOptions);
   
  }
  getAssignment(id: number):Observable<Assignment|undefined>{
    return this.http.get<Assignment|undefined>(this.url+"/" +id)
    .pipe(
      map( (a:any)=>{
        a.nom += "recu et transformer avec une pipe";
        return a;
      }),
      tap(_ =>{
        console.log("tap:assignment avec id="+id+"requete envoyer sur mongoDB cloud");

      }),
      catchError(this.handleError<any>('### catchError: getAssignments by id avec id=' + id))


    );
  }
  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);
 
      return of(result as T);
    }
 };
 
  updateAssignment(assignment:Assignment):Observable<any>{
    return this.http.put<Assignment>(this.url, assignment);
    
  }
  delteAssignment(assignment:Assignment):Observable<any>{
    let deletURI = this.url +'/'+ assignment._id;
    return this.http.delete(deletURI);
    
  }
  
}
