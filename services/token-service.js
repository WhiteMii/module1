import jwt from "jsonwebtoken";

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "1h",
    });
    return {
      accessToken,
    };
  }
  validateAccessToken(token) {
    try {
      const studentData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return studentData;
    } catch (e) {
      return null;
    }
  }
}

export default new TokenService();
