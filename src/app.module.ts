import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FacultiesModule } from './faculties/faculties.module';
import { DepartmentsModule } from './departaments/departments.module';
import { Department } from './departaments/departaments.model';
import { Student } from './students/students.model';
import { Faculty } from './faculties/faculties.model';
import { GroupsModule } from './groups/groups.module';
import { Group } from './groups/groups.model';
import { PlansModule } from './plans/plans.module';
import { Plan } from './plans/plans.model';
import { SubjectsModule } from './subjects/subjects.module';
import { Subject } from './subjects/subjects.model';
import { ExamsModule } from './exams/exams.module';
import { Exam } from './exams/exams.model';
import { TeachersModule } from './teachers/teachers.module';
import { Teacher } from './teachers/teachers.model';
import { AppointmentsModule } from './appointment/appointments.module';
import { Appointment } from './appointment/appointments.model';
import { AppointmentsTeachers } from './appointment/AppointmentsTeachers.model';
import { TeachersWorkloadModule } from './teachers_workload/teachers_workload.module';
import { TeachersDepartments } from './teachers/TeachersDepartments.model';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/courses.model';
import { ClassTypesModule } from './class-types/class-types.module';
import { SubjectsTeachers } from './subjects/subjects-teachers.model';
import { GradeModule } from './grade/grade.module';
import { GendersModule } from './genders/genders.module';
import { Gender } from './genders/genders.model';
import { ExamTypesModule } from './exam-types/exam-types.module';
import { ExamType } from './exam-types/exam-types.model';
import { CoursesPlans } from './courses/courses-plans.model';
import { SemesterModule } from './semester/semester.module';
import { Semester } from './semester/semester.model';
import { ClassType } from './class-types/class-type.mode';
import { StudyTaskModule } from './study-task/study-task.module';
import { StudyTask } from './study-task/study-task.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Department,
        Student,
        Faculty,
        Group,
        Plan,
        Subject,
        Exam,
        Teacher,
        Appointment,
        AppointmentsTeachers,
        TeachersDepartments,
        Course,
        SubjectsTeachers,
        Gender,
        ExamType,
        CoursesPlans,
        Semester,
        ClassType,
        StudyTask,
      ],
      autoLoadModels: true,
    }),
    StudentsModule,
    FacultiesModule,
    DepartmentsModule,
    GroupsModule,
    PlansModule,
    SubjectsModule,
    ExamsModule,
    TeachersModule,
    AppointmentsModule,
    TeachersWorkloadModule,
    CoursesModule,
    ClassTypesModule,
    GradeModule,
    GendersModule,
    ExamTypesModule,
    SemesterModule,
    StudyTaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
