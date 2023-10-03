import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataDeletionComponent } from './data-deletion/data-deletion.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'data-deletion', component: DataDeletionComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route to dashboard
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
