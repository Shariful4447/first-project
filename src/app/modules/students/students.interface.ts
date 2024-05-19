import { Schema, model, connect } from "mongoose";

export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type Student = {
  id: string;
  name: {
    firstname: string;
    middleName: string;
    lastName: string;
  };
  gender: "male" | "female";
  email: string;
  constactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
};
