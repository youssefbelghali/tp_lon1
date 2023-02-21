import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { DeleteDirective } from './shared/delete.directive';
import { RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginPComponent } from './login-p/login-p.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';


const routes : Routes= [
  {path:'', component:AssignmentsComponent},
  {path:'home', component:AssignmentsComponent},
  {path:'add', component:AddAssignmentComponent},
  {path:'assignment/:id', component:AssignmentDetailComponent},
  {path:'assignment/:id/edit', 
  component:EditAssignmentComponent,
  canActivate: [AuthGuard]
},
{path: 'login-p', component:LoginPComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    DeleteDirective,
    EditAssignmentComponent,
    LoginPComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,    
    MatDividerModule,MatInputModule,
    MatFormFieldModule,FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,MatListModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSortModule,
    MatCheckboxModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(routes)


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
