import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './students.model';
import { GetAllStudentsDto } from './dto/get-all-students.dto';
import { Op } from 'sequelize';
import { Group } from '../groups/groups.model';
import { GetStudentsByExamsDto } from './dto/get-students-by-exams.dto';
import { Exam } from '../exams/exams.model';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student) private readonly studentRepository: typeof Student,
  ) {}

  async getAllStudents(query: GetAllStudentsDto) {
    const { groups, courses, faculty, gender, age, year } = query;
    return await this.studentRepository.findAndCountAll({
      where: {
        ...(age && { age: Number(age) }),
        ...(year && { recruitment_year: Number(year) }),
        ...(gender && { gender_id: Number(gender) }),
        ...(groups && {
          group_id: {
            [Op.in]: groups ? groups.split(',').map(Number) : [],
          },
        }),
      },
      include: [
        {
          model: Group,
          where: {
            ...(courses && {
              course_id: {
                [Op.in]: courses ? courses.split(',').map(Number) : [],
              },
            }),
            ...(faculty && {
              faculty_id: faculty,
            }),
          },
        },
      ],
    });
  }

  async getStudentsByExams(query: GetStudentsByExamsDto) {
    const { groups, type, grade } = query;
    return await this.studentRepository.findAndCountAll({
      where: {
        ...(groups && {
          group_id: {
            [Op.in]: groups ? groups.split(',').map(Number) : [],
          },
        }),
      },
      include: [
        {
          model: Exam,
          where: {
            ...(type && { exam_type_id: Number(type) }),
            ...(grade && { grade: Number(grade) }),
          },
        },
      ],
    });
  }
}
