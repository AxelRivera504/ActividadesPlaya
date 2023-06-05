import { number } from "ngx-custom-validators/src/app/number/validator";

export class estadosciviles{
    esci_id!: number;
    esci_Descripcion!: string;
    esci_Estado!: boolean;
    esci_UsuarioCreador!: number;
    esci_UsuarioCreador_Nombre!: string;
    esci_FechaCreacion!: Date;
    esci_UsuarioModificador!: number;
    esci_UsuarioModificador_Nombre!: string;
    esci_FechaModificacion!:Date;
}