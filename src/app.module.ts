import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.env.development'],
      isGlobal:true
    }) ,
    MongooseModule.forRoot(process.env.URI_CONEXION),
    AlumnosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
