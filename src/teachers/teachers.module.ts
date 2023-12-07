import { Module } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './teachers.model';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
  imports: [SequelizeModule.forFeature([Teacher])],
})
export class TeachersModule {}
