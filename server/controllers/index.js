const db = require("../models");
const users =  db.users;

exports.findOne = async (id) => {
    console.log('id:', id);
    await users.findByPk(id)
      .then(data => {
          console.log(data)
        return data;
     })
    .catch(err => {
      return {
        message: "Error retrieving Tutorial with id=" + id
      };
    });
};