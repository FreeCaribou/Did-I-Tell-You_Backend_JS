const db = require("../models");

module.exports = {
  findAll: async function() {
    let result;
    await db.user.findAll({include: ['relationships']}).then(data => {
      result = data;
    });
    return result;
  },

  findOneById: async function(pk) {
    let result;
    await db.user.findByPk(pk).then(data => {
      result = data;
    });
    return result;
  }
};
