import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnoDTO } from './dto/alumnos.dto';

@Controller('api/v1/alumnos')
export class AlumnosController {
    constructor(private readonly alumnosServicio:AlumnosService){}
//llamada al controlados para insertar
    @Post()
    insertar(@Body() alumnoDTO:AlumnoDTO){
        return this.alumnosServicio.Insertar(alumnoDTO);
    }
    @Get()
    todos(){
        return this.alumnosServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.alumnosServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() alumnoDTO:AlumnoDTO){
        return this.alumnosServicio.actualizar(id, alumnoDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.alumnosServicio.eliminar(id);
    }
}
