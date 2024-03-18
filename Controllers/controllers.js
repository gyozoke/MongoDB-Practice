function addUser(req, res, next) {
  const data = req.body;
  postUser(data).then((response) => {
    res.status(201).send(response);
  });
}

module.exports = { addUser };
