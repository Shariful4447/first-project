import { Student } from "../students.model";
import { TStudent } from "./students.interface";

const createStudentIntoDB = async (studentData: TStudent) => {
  //   const result = await StudentModel.create(student);//built in static method
  //   return result;
  const student = new Student(studentData); //create an instance of

  if (await student.isUserExist(studentData.id)) {
    throw new Error("user already exists");
  }
  const result = await student.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
