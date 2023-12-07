import { Module } from '@nestjs/common';
import { StudyTaskController } from './study-task.controller';
import { StudyTaskService } from './study-task.service';

@Module({
  controllers: [StudyTaskController],
  providers: [StudyTaskService]
})
export class StudyTaskModule {}
