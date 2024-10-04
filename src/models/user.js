// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
    }, {
      timestamps: false,
      tableName: 'Users',
    });
  
    return User;
  };
  