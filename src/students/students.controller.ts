import { Controller, Get, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { GetAllStudentsDto } from './dto/get-all-students.dto';
import { GetStudentsByExamsDto } from './dto/get-students-by-exams.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('/')
  getAllStudents(@Query() query: GetAllStudentsDto) {
    return this.studentsService.getAllStudents(query);
  }

  @Get('/exams')
  getStudentsByExams(@Query() query: GetStudentsByExamsDto) {
    return this.studentsService.getStudentsByExams(query);
  }
}
