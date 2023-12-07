import { Controller, Get, Query } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { GetAllTeachersDto } from './dto/get-all-teachers.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get('/')
  getAllTeachers(@Query() query: GetAllTeachersDto) {
    return this.teachersService.getAllTeachers(query);
  }

  @Get('/lessons')
  getTeachersByLessons() {
    return this.teachersService.getTeachersByLessons();
  }
}
