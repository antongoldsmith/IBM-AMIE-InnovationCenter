module.exports = (req, res, next) => {
  if (!req.session.user) {
    res.send("You're not allowed to view this content! Please log in first!");
    return;
  }
  //else continue
  next();
};
