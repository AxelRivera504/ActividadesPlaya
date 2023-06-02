export class MantenimientoXEquipo{
    maeq_Id!: number;
    equi_Id!: number;
    mant_Id!: number;
    equi_Descripcion!: string;
    equi_ImgUrL!: string;
    mant_Descricion!: string;
    maeq_Estado!: boolean;
    maeq_UsuarioCreador!: number;
    maeq_FechaCreacion!: Date;
    maeq_UsuarioModificador!: number;
    maeq_FechaModificacion!: Date;
}