import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-data-deletion',
  templateUrl: './data-deletion.component.html',
  styleUrls: ['./data-deletion.component.css']
})
export class DataDeletionComponent {
  selectedDate: string = '';
  attendanceData: any = null; 
  fileUploadData: any = null;

  constructor(private http: HttpClient, private datePipe: DatePipe) {}


  loadData() {
    this.http.get('http://localhost:3000/attendance').subscribe(
    (attendanceResponse: any) => {
      console.log('Attendance Response:', attendanceResponse); // Add this line to log the response
      this.attendanceData = attendanceResponse;
      },
      (attendanceError) => {
        // Handle error loading attendance data
        console.error('Error loading attendance data:', attendanceError);
      }
    );
  }
    
}