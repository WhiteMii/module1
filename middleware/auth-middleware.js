import TokenService from "../services/token-service.js";

export const authHandler = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json("Access denied. No token provided.");
    }

    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json("Access denied. No token provided.");
    }

    const studentData = TokenService.validateAccessToken(accessToken);
    if (!studentData) {
      return res.status(401).json("Token is invalid");
    }

    req.student = studentData;
    next();
  } catch (e) {
    return res.status(401).json("Token is invalid");
  }
};
