import { Module } from '@nestjs/common';
import { TeachersWorkloadController } from './teachers_workload.controller';
import { TeachersWorkloadService } from './teachers_workload.service';

@Module({
  controllers: [TeachersWorkloadController],
  providers: [TeachersWorkloadService]
})
export class TeachersWorkloadModule {}
