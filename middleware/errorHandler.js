const {constants} = require('../constants');
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ message: err.message });
  switch (statusCode) {
    case constants.BAD_REQUEST :
      res.json({
        title: "Bad Request",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    case constants.PAGE_NOT_FOUND:
      res.json({
        title: "Page not found",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      case constants.UNAUTHORIZED_USER:
      res.json({
        title: "UnAuthorized",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      case constants.FORBIDDEN_OPERATION:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stackTrace,
      });

      break;

    default:
      break;
  }
};

module.exports = errorHandler;

// 404 Error Handler Function
