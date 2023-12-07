import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './students.model';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [SequelizeModule.forFeature([Student])],
})
export class StudentsModule {}
