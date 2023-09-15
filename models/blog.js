// title,content, date create, arthor name,comments
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class blog extends Model {}

blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1],
          },
      },
dateCreated: {
  type: DataTypes.STRING,
  allowNull: false,
},
authorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = blog;