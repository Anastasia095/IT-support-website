const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Ticket extends Model { }

Ticket.init(

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true, 
    }
  }, 
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ticket',
  }
);



module.exports = Ticket;