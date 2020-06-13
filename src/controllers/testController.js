const { Response, ResponseError } = require("../utils/response");
module.exports = (request) => {
  const { age } = request.body;
  if (!age) throw new ResponseError();
  if (age < 2 || age > 40) throw new Response.status(400, "Age not found");
  return Response.status(200, {
    message: "Age is correct",
  });
};
