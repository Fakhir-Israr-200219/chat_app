// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   try {
//     const token = req.header.Authorization.split(" ")[1];
//     const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
//     req.body.userId = decodedToken.userId;
//     next();
//   } catch (error) {
//     res.send({
//       message: error.message,
//       success: false,
//     });
//   }
// };

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      return res.status(401).send({
        message: "Authorization header is missing",
        success: false,
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        message: "Token is missing from Authorization header",
        success: false,
      });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.body.userId = decodedToken.userId;
    next();
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
};
