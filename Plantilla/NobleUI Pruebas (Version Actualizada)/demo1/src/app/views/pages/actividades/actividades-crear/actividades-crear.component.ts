import { Component, OnInit } from '@angular/core';
import { ImgbbService } from '../../imgbbService/imgbb.service';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-actividades-crear',
  templateUrl: './actividades-crear.component.html',
  styleUrls: ['./actividades-crear.component.scss']
})
export class ActividadesCrearComponent implements OnInit {

  
  constructor(private imgbbService: ImgbbService) { }

  ngOnInit(): void {
  }

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          console.log(file);
          this.imgbbService.uploadImage(file)
          .subscribe((data:any)=>{
            console.log(data.data.url)
          })
          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }

  handleFileInput(event: any) {
    console.log("Si quiera entra boludo")
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      console.log(base64String); // Aquí puedes hacer lo que necesites con la representación Base64
    };
    reader.readAsDataURL(file);
  }

}
