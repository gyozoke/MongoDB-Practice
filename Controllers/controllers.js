const { postUser } = require("../Models/models");

function addUser(req, res, next) {
  const userDetails = req.body;
  postUser(userDetails)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      next(error);
    });
}

module.exports = { addUser };
