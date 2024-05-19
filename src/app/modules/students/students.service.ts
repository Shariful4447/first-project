import { StudentModel } from "../students.model";
import { Student } from "./students.interface";

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};
