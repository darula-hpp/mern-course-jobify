// import { UnAuthenticatedError } from "../errors/index.js";
// import jwt from "jsonwebtoken";

// const auth = async (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     throw new UnAuthenticatedError("Authentication invalid");
//   }
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer")) {
//     throw new UnAuthenticatedError("Authentication Invalid");
//   }

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     //console.log(payload);

//     const testUser = payload.userId === "647cc88ed8b5b59a200349a7";
//     req.user = { userId: payload.userId, testUser };
//     next();
//   } catch (error) {
//     throw new UnAuthenticatedError("Authentication Invalid");
//   }
// };

// export default auth;

import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === "647cc88ed8b5b59a200349a7";
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

export default auth;
