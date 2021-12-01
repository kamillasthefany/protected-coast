const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) return response.status(401).send({ error: "Não autorizado" });

  const [scheme, token] = authHeader.split(' ');

  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error)
      return response.status(401).send({ error: "Token inválido" });

    request.userId = decoded.id;
    return next();
  });
}