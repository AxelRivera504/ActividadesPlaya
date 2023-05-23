import { Data } from "@angular/router";

export class Mantenimiento{
    mant_Id!: number;
    mant_Descricion!: String;
    mant_UsuarioCreador! : number;
    mant_UsuarioModificador! : number;
    mant_FechaCreacion!:String;
    mant_FechaModificacion!:String;
}