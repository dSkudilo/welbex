module.exports = (sequelize, Sequelize) => {
    const Welbex = sequelize.define("welbex", {
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW                        
      },
      title: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      quantity : {
        type: Sequelize.INTEGER,
        defaultValue: 0                     
      },
      distance: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    });
  
    return Welbex;
  };