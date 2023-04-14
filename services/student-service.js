import StudentModel from "../models/student-model.js";
class StudentService {
  async getAllStudents() {
    const students = await StudentModel.find();
    return students;
  }
  async addStudent(nickName, firstName, lastName) {
    const student = await StudentModel.create({
      nickName,
      firstName,
      lastName,
    });
    return student;
  }
}
export default new StudentService();
