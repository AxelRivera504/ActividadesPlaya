import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgbbService {
  private apiKey = '7c32e2836726a67da9e14db2adbd430c'; // Reemplaza con tu clave de API de imgbb

  constructor(private http: HttpClient) {}

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post<any>(`https://api.imgbb.com/1/upload?key=${this.apiKey}`, formData);
  }
}
