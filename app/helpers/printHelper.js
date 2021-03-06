exports.print = (res, statusCode, message, result) => {
  const print = {}
  print.status = statusCode === 200
  print.message = message
  print.data = result

  res.status(statusCode).json(print)
}
