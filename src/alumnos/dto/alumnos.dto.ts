import { IsDate, IsEmail, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class AlumnoDTO{
    @IsNotEmpty()
   
    @IsString()
    Cedula:string;
    @IsNotEmpty()
    @IsString()
    Nombre:string;
    @IsNotEmpty()
    @IsString()
    Apellido:string;
    @IsNotEmpty()
    @IsString()
    FechaNacimiento:Date;
    @IsNotEmpty()
    @IsEmail()
    Email:string;

}