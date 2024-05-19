import { Request, Response } from "express";
import { StudentServices } from "./students.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // will call service function to send the data
    const result = await StudentServices.createStudentIntoDB(studentData);
    // send response;
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
};
