const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

isUserOrEmailAlreadyExists = (req, res, next) => {
  User.findOne({
    where: {
      fullname: req.body.fullname
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

isValidRoles = (req, res, next) => {
  if (req.body.roles) {
    // Length is computed only once
    let numberOfRoles = req.body.roles.length;
    for (let i = 0; i < numberOfRoles; i+=1) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const checkSignUp = {
  isUserOrEmailAlreadyExists: isUserOrEmailAlreadyExists,
  isValidRoles: isValidRoles
};

module.exports = checkSignUp;