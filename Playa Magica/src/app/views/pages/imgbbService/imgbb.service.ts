// imgbbService.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgbbService {
  private apiKey = 'e482e5e3ec8eb1ac5d513cc41c7465c5'; // Reemplaza con tu clave de API de imgbb

  constructor(private http: HttpClient) {}

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    console.log(formData);
    return this.http.post<any>(`https://api.imgbb.com/1/upload?key=${this.apiKey}`, formData);
  }
}
