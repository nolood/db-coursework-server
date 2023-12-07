import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Teacher } from './teachers.model';
import { GetAllTeachersDto } from './dto/get-all-teachers.dto';
import { Op } from 'sequelize';
import { Department } from '../departaments/departaments.model';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher) private readonly teacherRepository: typeof Teacher,
  ) {}

  async getAllTeachers(query: GetAllTeachersDto) {
    const { departments, appointments, gender, birthdate, age, salary } = query;

    return await this.teacherRepository.findAndCountAll({
      where: {
        ...(gender && { gender_id: Number(gender) }),
        ...(birthdate && { birthdate: { [Op.substring]: birthdate } }),
        ...(age && { age: age }),
        ...(salary && {
          salary: { [Op.between]: salary.split('-').map(Number) },
        }),
      },
      include: [
        {
          model: Department,
          where: {
            ...(departments && {
              id: {
                [Op.in]: departments.split(',').map(Number),
              },
            }),
            ...(appointments && {
              id: {
                [Op.in]: appointments.split(',').map(Number),
              },
            }),
          },
        },
      ],
    });
  }

  async getTeachersByLessons() {}
}
