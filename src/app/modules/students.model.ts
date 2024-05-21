import { Schema, model } from "mongoose";
import {
  Gurdian,
  LocalGurdian,
  Student,
  UserName,
} from "./students/students.interface";
// schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "First Name required"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last Name required"],
  },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    required: [true, "Father Name required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Occupation Name required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Contact number required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother Name required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Occupation Name required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Contact number required"],
  },
});

const localGurdianSchema = new Schema<LocalGurdian>({
  name: {
    type: String,
    required: [true, "Name required"],
  },
  occuption: {
    type: String,
    required: [true, "Occupation Name required"],
  },
  contactNo: {
    type: String,
    required: [true, "Contact Number required"],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, "Name required"],
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message:
        "{VALUE} is not valid. Gender must be : 'male', or 'female' ,or 'other'",
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
  },
  constactNumber: {
    type: String,
    required: [true, "Contact Number required"],
  },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency Contact Number required"],
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
  localGurdian: {
    type: localGurdianSchema,
    required: [true, "Local gurdian info required"],
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
});

// model

export const StudentModel = model<Student>("Student", studentSchema);
