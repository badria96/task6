import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadedFiles: any[] = [];
  showFileList: boolean = false;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Selected File:', this.selectedFile); // Add this line to log the selected file
  }
  

  uploadFile() {
    if (this.selectedFile) {
      const date = new Date().toISOString().split('T')[0]; // Get current date
      const formData = new FormData();
      formData.append('date', date);
      formData.append('fileName', this.selectedFile.name || ''); // Check for null or undefined and use an empty string if so
      formData.append('fileInput', this.selectedFile);
      
      // Send POST request to upload file
      this.http.post('http://localhost:3000/files', formData).subscribe(
        (response: any) => {
          console.log(response.message);
          // Store both date and file name in the uploadedFiles array
          this.uploadedFiles.push({ date: date, name: this.selectedFile ? this.selectedFile.name : '' }); // Check for null or undefined
          this.selectedFile = null;
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
    }
  }
  
  
  
  
  toggleFileList() {
    this.showFileList = !this.showFileList;
  }

  deleteFile(file: File) {
    const index = this.uploadedFiles.indexOf(file);
    if (index !== -1) {
      this.uploadedFiles.splice(index, 1);
    }
  }
}
