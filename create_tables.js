const { sequelize } = require('./models/students.js');

(async() => {
  await sequelize.sync({force: true});
  await sequelize.close();
})();
