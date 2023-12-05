import { Module } from '@nestjs/common';
import { ClassTypesController } from './class-types.controller';
import { ClassTypesService } from './class-types.service';

@Module({
  controllers: [ClassTypesController],
  providers: [ClassTypesService],
})
export class ClassTypesModule {}
