import express from "express";
import StudentController from "../controllers/student-controller.js";
import { authHandler } from "../middleware/auth-middleware.js";
const router = express.Router();

// get all students
router.get("/", StudentController.getAllStudents);
//add student
router.post("/", authHandler, StudentController.addStudent);
//get token
router.get("/:student", StudentController.getToken);

export default router;
