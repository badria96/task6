import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  studentName: string = '';
  isPresent: boolean = true;
  attendedStudents: any[] = [];
  showAttendanceList: boolean = false;
 
  constructor(private http: HttpClient) {}

  recordAttendance() {
    if (this.studentName.trim() !== '') {
      const date = new Date().toISOString().split('T')[0]; // Get current date
      const attendanceData = {
        date: date,
        studentName: this.studentName,
        isPresent: this.isPresent
      };
  
      // Send POST request to record attendance with the correct URL
     // this.http.post('http://localhost:4000/recordAttendance', attendanceData).subscribe(
   
        this.http.post('http://localhost:3000/attendance ', attendanceData).subscribe(
      (response: any) => {
          console.log(response.message);
          this.attendedStudents.push({
            studentName: this.studentName,
            isPresent: this.isPresent
          });
          this.studentName = '';
        },
        (error) => {
          console.error('Error recording attendance:', error);
        }
      );
    }
  }
  
  toggleAttendanceList() {
    this.showAttendanceList = !this.showAttendanceList;
  }

  editAttendance(attendedStudent: any) {
    attendedStudent.isPresent = !attendedStudent.isPresent;
  }


}