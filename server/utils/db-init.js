// database
const db = require("../models");
const Role = db.role;

function populateRole() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}

function init() {
  console.log("TEST", process.env.NODE_ENV );
  
  if(process.env.NODE_ENV === "production") {
    db.sequelize.sync({ force: false }).then(() => {
      console.log('Drop and Resync Database with { force: true }');
      populateRole();
    });
  } else {
    db.sequelize.sync({ force: true }).then(() => {
      console.log('Drop and Resync Database with { force: true }');
      populateRole();
    });
  }
}
module.exports = { init }

