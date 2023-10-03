import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { DataDeletionComponent } from './data-deletion/data-deletion.component';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    FileUploadComponent,
    DashboardComponent,
    DataDeletionComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule, BrowserAnimationsModule,
    NgChartsModule,
    MatCardModule,
   
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
