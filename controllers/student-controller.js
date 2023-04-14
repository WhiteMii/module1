import StudentService from "../services/student-service.js";
import TokenService from "../services/token-service.js";

class UserController {
  async addStudent(req, res, next) {
    try {
      const { nickName, firstName, lastName } = req.body;

      const studentData = await StudentService.addStudent(
        nickName,
        firstName,
        lastName
      );
      return res.json(studentData);
    } catch (e) {
      next(e);
    }
  }
  async getAllStudents(req, res, next) {
    try {
      const user = await StudentService.getAllStudents();
      res.json(user);
    } catch (e) {
      next(e);
    }
  }
  async getToken(req, res, next) {
    try {
      const nickName = req.params.student;
      const token = TokenService.generateToken({ ...nickName });
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }
}
export default new UserController();
