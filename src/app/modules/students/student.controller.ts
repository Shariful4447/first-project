import { Request, Response } from "express";
import { StudentServices } from "./students.service";
// import studentValidationSchema from "./student.validation";
import { z } from "zod";
import studentValidationSchema from "./student.zod.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // using Zod and creating schema

    const zodParsedData = studentValidationSchema.parse(studentData);

    // using Joi
    // const { error, value } = studentValidationSchema.validate(studentData);
    // // will call service function to send the data
    // const result = await StudentServices.createStudentIntoDB(value);
    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: "Something went wrong",
    //     error,
    //   });
    // }

    // send response;
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Students are retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "single Students are retrived successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
