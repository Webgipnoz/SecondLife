const jwt = require("jsonwebtoken");

const checkMe = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, "secret123");
      req.userId = decoded._id;
      next();
    } catch (e) {
      return res.status(403).json({
        message: " cant go on",
      });
    }
  } else {
    return res.status(403).json({
      message: " cant go on",
    });
  }
};

module.exports = { checkMe };
