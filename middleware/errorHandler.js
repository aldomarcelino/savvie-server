const errorHandler = async (err, req, res, next) => {
  let code = 500;
  let msg = "Internal server error";
  console.log(err.name);

  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === "Empty email or password") {
    code = 400;
    msg = "Email or password is required";
  } else if (err.name === "Unauthorized") {
    code = 401;
    msg = "Missing token";
  } else if (err.name === "JsonWebTokenError") {
    code = 401;
    msg = "Invalid token";
  } else if (err.name === "Login failed") {
    code = 401;
    msg = "Invalid email or password";
  } else if (err.name === "Forbidden") {
    code = 403;
    msg = "You have no access";
  } else if (err.name === "Not found") {
    code = 404;
    msg = "Id or data not found";
    // } else if ((err.name = "Unique data")) {
    //   code = 500;
    //   msg = err.msg;
  }
  res.status(code).json({
    message: msg,
  });
};

module.exports = errorHandler;
