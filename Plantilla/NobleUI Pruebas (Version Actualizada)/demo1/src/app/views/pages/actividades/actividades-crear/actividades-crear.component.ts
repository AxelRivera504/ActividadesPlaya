import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ImgbbService } from '../../imgbbService/imgbb.service';

@Component({
  selector: 'app-actividades-crear',
  templateUrl: './actividades-crear.component.html',
  styleUrls: ['./actividades-crear.component.scss']
})
export class ActividadesCrearComponent implements OnInit {

  dropzoneConfig: DropzoneConfigInterface = {
    url: 'https://api.imgbb.com/1/upload?key=7c32e2836726a67da9e14db2adbd430c', // Reemplaza con tu clave de API de imgbb
    maxFiles: 1,
    acceptedFiles: 'image/*',
    clickable: true
  };
  constructor(private imgbbService: ImgbbService) { }

  ngOnInit(): void {
  }

  onUploadSuccess(event: any) {
    const uploadedImageUrl = event[1].url;
    console.log('Imagen subida:', uploadedImageUrl);
    // Puedes realizar acciones adicionales con la URL de la imagen subida
  }
}
