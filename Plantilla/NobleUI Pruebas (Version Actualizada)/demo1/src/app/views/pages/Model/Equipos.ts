import { Data } from "@angular/router";

export class Equipos{
    equi_Id!: number;
    equi_Descripcion!: string;
    equi_ImgUrL!: string
    equi_UsoActual!: number;
    equi_UsoLimite!: number;
    equi_Estado!: boolean;
    equi_UsuarioCreador!: number;
    equi_FechaCreacion!: Data;
    equi_UsuarioModificador!: number;
    equi_FechaModificacion!: Date;
}