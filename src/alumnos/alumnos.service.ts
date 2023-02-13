import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAlumnos } from 'src/common/Interfaces/Alumnos.interface';
import { ALUMNOS } from '../common/models/alumnos.models';

import { AlumnoDTO } from './dto/alumnos.dto';

@Injectable()
export class AlumnosService {
  constructor(
    @InjectModel(ALUMNOS.name) private readonly alumnosmodelo: Model<IAlumnos>,
  ) {}

  async Insertar(alumnoDTO: AlumnoDTO): Promise<IAlumnos> {
    return await new this.alumnosmodelo(alumnoDTO).save();
  }
  async todos(): Promise<IAlumnos[]> {
    return await this.alumnosmodelo.find();
  }
  async uno(id: string): Promise<IAlumnos> {
    return await this.alumnosmodelo.findById(id);
  }

  async actualizar(id: string, alumnoDTO: AlumnoDTO): Promise<IAlumnos> {
    return await this.alumnosmodelo.findByIdAndUpdate(id, alumnoDTO, {
      new: true,
    });
  }
  async eliminar(id: string) {
    await this.alumnosmodelo.findByIdAndDelete(id);
    return {status: HttpStatus.OK, msg:"Se eliminó con éxito"}
  }
}
