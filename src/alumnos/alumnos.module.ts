import { Module } from '@nestjs/common';
import { AlumnosController } from './alumnos.controller';
import { AlumnosService } from './alumnos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ALUMNOS } from '../common/models/alumnos.models';
import { AlumnosSchema } from './schema/alumnos.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:ALUMNOS.name,
      useFactory:()=>{
        return AlumnosSchema;
      }
    }])
  ],
  controllers: [AlumnosController],
  providers: [AlumnosService]
})
export class AlumnosModule {}
