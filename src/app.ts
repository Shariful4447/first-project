import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StudentRoutes } from "./app/modules/students/students.route";
const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

// application routes
// api/v1/students/create-student

app.use("/api/v1/students", StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", getAController);
export default app;
